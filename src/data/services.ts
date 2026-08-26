// Canonical service catalogue — shared by the nav dropdown, the mobile
// drawer, the homepage grid, /servicios, /servicio/[slug] "otros servicios",
// the contact form's "tipo de caso" select, and both footers. Defined once
// here instead of being copy-pasted per page.

export interface Service {
  slug: string;
  navLabel: string;
  title: string;
  tag: string;
  desc: string;
  points: string[];
  /** Inner markup of a 24x24 stroke icon (viewBox="0 0 24 24"), no wrapping <svg>. */
  iconSvg: string;
}

export const services: Service[] = [
  {
    slug: 'despido-injustificado',
    navLabel: 'Despido injustificado, indebido o verbal',
    title: 'Despido injustificado, indebido o verbal',
    tag: 'Recargo 30% a 100%',
    desc: 'Si te despidieron sin causal legal válida, con una causal que la empresa no puede acreditar o simplemente de forma verbal, puedes reclamar judicialmente.',
    points: [
      'Recargos legales sobre la indemnización por años de servicio',
      'Plazo de 60 días hábiles desde el despido',
    ],
    iconSvg:
      '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="m9.5 13 3 3"/><path d="m12.5 13-3 3"/>',
  },
  {
    slug: 'tutela-laboral',
    navLabel: 'Tutela laboral y vulneración de derechos',
    title: 'Tutela laboral por vulneración de derechos',
    tag: '6 a 11 remuneraciones',
    desc: 'Protege tus derechos fundamentales frente al acoso laboral o sexual, la discriminación, el hostigamiento y las represalias por reclamar tus derechos.',
    points: [
      'Indemnización especial adicional a las del despido',
      'Aplica durante la relación laboral y con ocasión del despido',
    ],
    iconSvg:
      '<path d="M12 2 4 5v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V5z"/><circle cx="12" cy="10" r="2.2"/><path d="M8.5 15.5a3.6 3.6 0 0 1 7 0"/>',
  },
  {
    slug: 'autodespido',
    navLabel: 'Autodespido o despido indirecto',
    title: 'Autodespido (despido indirecto)',
    tag: 'No renuncies',
    desc: 'Cuando el empleador incumple gravemente el contrato, puedes poner término a la relación laboral atribuyéndole la responsabilidad, sin perder tus indemnizaciones.',
    points: [
      'Mismas indemnizaciones que un despido injustificado',
      'Aplica por sueldos o cotizaciones impagas, maltrato o cambio de condiciones',
    ],
    iconSvg:
      '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/>',
  },
  {
    slug: 'nulidad-despido',
    navLabel: 'Nulidad del despido (Ley Bustos)',
    title: 'Nulidad del despido (Ley Bustos)',
    tag: 'Sueldo hasta convalidar',
    desc: 'Si el empleador te despidió con cotizaciones previsionales impagas, el despido no produce sus efectos hasta que regularice íntegramente la deuda.',
    points: [
      'Remuneraciones desde el despido hasta la convalidación',
      'Se acumula con otras demandas laborales',
    ],
    iconSvg:
      '<rect x="6" y="3" width="12" height="18" rx="2"/><path d="M9 3h6v3H9z"/><path d="m9 13 2 2 4-4"/>',
  },
  {
    slug: 'accidentes-trabajo',
    navLabel: 'Accidentes del trabajo y enfermedades profesionales',
    title: 'Accidentes del trabajo y enfermedades',
    tag: 'Daño moral y lucro cesante',
    desc: 'Si el accidente o la enfermedad se produjo porque la empresa no cumplió su deber de seguridad, puedes reclamar una indemnización de perjuicios.',
    points: [
      'Cubre accidentes de trayecto y enfermedades profesionales',
      'Ley 16.744 más demanda de indemnización de perjuicios',
    ],
    iconSvg: '<circle cx="12" cy="12" r="9"/><path d="M12 8v8"/><path d="M8 12h8"/>',
  },
  {
    slug: 'finiquito',
    navLabel: 'Finiquito mal calculado o no pagado',
    title: 'Finiquito mal calculado o no pagado',
    tag: 'No firmes sin revisar',
    desc: 'Un error en el cálculo puede significar perder importantes montos. Revisamos años de servicio, feriado, horas extras y descuentos antes de que firmes.',
    points: [
      'Reserva de derechos redactada para tu caso',
      'Plazo de 10 días hábiles para que la empresa pague',
    ],
    iconSvg:
      '<path d="M4 3h16v18l-3-2-3 2-2-2-2 2-3-2z"/><path d="M8 8h8"/><path d="M8 16h5"/>',
  },
  {
    slug: 'comparendo-inspeccion',
    navLabel: 'Comparendo en la Inspección del Trabajo',
    title: 'Comparendo en la Inspección del Trabajo',
    tag: 'Representación directa',
    desc: 'Preparamos tu caso, asistimos al comparendo de conciliación y defendemos tus derechos frente al empleador antes de llegar a juicio.',
    points: [
      'Revisión previa de carta de despido, finiquito y cotizaciones',
      'Estrategia para la etapa judicial si no hay acuerdo',
    ],
    iconSvg:
      '<path d="M3 21h18"/><path d="M5 21V8l7-5 7 5v13"/><path d="M9 21v-6h6v6"/><path d="M9 11h6"/>',
  },
];

export const waLink =
  'https://wa.me/56976190738?text=Hola,%20quisiera%20una%20evaluaci%C3%B3n%20gratuita%20de%20mi%20caso%20laboral.';

export function waLinkWithText(text: string): string {
  return `https://wa.me/56976190738?text=${encodeURIComponent(text)}`;
}

export const contact = {
  whatsappDisplay: '+56 9 7619 0738',
  email: 'defendemostudespido@gmail.com',
  legalEmail: 'defendemostudespido@gmail.com',
  instagram: '@defendemostudespido.cl',
  instagramUrl: 'https://instagram.com/defendemostudespido.cl',
  hours: 'Lun – Vie, 8:30 a 18:30 hrs',
};
