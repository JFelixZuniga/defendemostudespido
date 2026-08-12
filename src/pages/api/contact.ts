import type { APIRoute } from 'astro';
import { Resend } from 'resend';
import { z } from 'zod';
import { escapeHtml, stripNewlines } from '../../lib/sanitize';
import { isRateLimited, clientIpFrom } from '../../lib/rateLimit';

export const prerender = false;

const MIN_SUBMIT_MS = 2000;

const ContactSchema = z.object({
  nombre: z.string().trim().min(1, 'Falta tu nombre.').max(120),
  telefono: z.string().trim().min(1, 'Falta tu teléfono.').max(40),
  email: z.string().trim().email('Correo electrónico inválido.').max(200),
  tipo: z.string().trim().max(120).optional().default(''),
  mensaje: z.string().trim().min(1, 'Cuéntanos qué pasó.').max(4000),
  consentimiento: z.literal(true, {
    errorMap: () => ({ message: 'Falta tu autorización para tratar tus datos.' }),
  }),
  // Honeypot: real visitors never see or fill this field (it's visually
  // hidden in contacto.astro). A non-empty value means a bot filled every
  // input it could find. Deliberately unconstrained here (no max(0)) so a
  // filled honeypot doesn't fail schema validation with a tell-tale 400 —
  // it's checked explicitly below and answered with a fake 200 instead.
  empresa_web: z.string().optional().default(''),
  // Client-recorded timestamp (ms since epoch) from when the form mounted.
  formLoadedAt: z.number().optional(),
});

export const POST: APIRoute = async ({ request }) => {
  const ip = clientIpFrom(request);
  if (isRateLimited(ip)) {
    return new Response(JSON.stringify({ error: 'Demasiadas solicitudes. Intenta nuevamente en unos minutos.' }), {
      status: 429,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Solicitud inválida.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const parsed = ContactSchema.safeParse(body);
  if (!parsed.success) {
    const message = parsed.error.issues[0]?.message ?? 'Datos inválidos.';
    return new Response(JSON.stringify({ error: message }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  const data = parsed.data;

  // Honeypot tripped — pretend success so the bot doesn't learn anything,
  // but never send the email.
  if (data.empresa_web) {
    return new Response(JSON.stringify({ ok: true }), { status: 200, headers: { 'Content-Type': 'application/json' } });
  }

  if (typeof data.formLoadedAt === 'number' && Date.now() - data.formLoadedAt < MIN_SUBMIT_MS) {
    return new Response(JSON.stringify({ error: 'Solicitud rechazada.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const apiKey = import.meta.env.RESEND_API_KEY;
  const toEmail = import.meta.env.CONTACT_TO_EMAIL || 'defendemostudespido@gmail.com';
  const fromEmail = import.meta.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !fromEmail) {
    console.error('contact api: RESEND_API_KEY or CONTACT_FROM_EMAIL not configured');
    return new Response(JSON.stringify({ error: 'El formulario no está disponible en este momento.' }), {
      status: 503,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const nombre = stripNewlines(data.nombre);
  const telefono = stripNewlines(data.telefono);
  const email = stripNewlines(data.email);
  const tipo = stripNewlines(data.tipo || 'No especificado');
  const mensaje = data.mensaje.trim();

  const html = `
    <h2>Nueva consulta desde defendemostudespido.cl</h2>
    <p><strong>Nombre:</strong> ${escapeHtml(nombre)}</p>
    <p><strong>Teléfono:</strong> ${escapeHtml(telefono)}</p>
    <p><strong>Correo:</strong> ${escapeHtml(email)}</p>
    <p><strong>Tipo de caso:</strong> ${escapeHtml(tipo)}</p>
    <p><strong>Mensaje:</strong></p>
    <p>${escapeHtml(mensaje).replace(/\n/g, '<br>')}</p>
    <hr>
    <p style="color:#8593a0;font-size:12px;">Enviado desde el formulario de contacto. IP: ${escapeHtml(ip)}</p>
  `;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `Nueva consulta de ${nombre}`,
      html,
    });
    if (error) {
      console.error('contact api: resend error', error);
      return new Response(JSON.stringify({ error: 'No pudimos enviar tu consulta. Intenta por WhatsApp.' }), {
        status: 502,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  } catch (err) {
    console.error('contact api: unexpected error', err);
    return new Response(JSON.stringify({ error: 'No pudimos enviar tu consulta. Intenta por WhatsApp.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify({ ok: true }), { status: 200, headers: { 'Content-Type': 'application/json' } });
};
