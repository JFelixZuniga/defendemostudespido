/* Banner de consentimiento de cookies — Ley 21.719
   Ninguna etiqueta se carga hasta que la persona acepta.
   Reemplaza GTM_ID por el identificador real antes de publicar. */
(function () {
  if (window.__dtdConsentInit) return;
  window.__dtdConsentInit = true;
  var GTM_ID = "GTM-XXXXXXX";
  var KEY = "dtd_consent_v1";
  var GOLD = "#c6a15b", GOLD_DARK = "#8b692f", NAVY = "#0c2231", CREAM = "#fbf9f4", GREEN = "#1e864a", GREEN_DARK = "#1a713e";

  var CATS = [
    { id: "necesarias", nombre: "Estrictamente necesarias", fija: true,
      desc: "Permiten que el sitio funcione y recuerdan tu decisión sobre cookies. No se pueden desactivar." },
    { id: "analitica", nombre: "Analíticas", fija: false,
      desc: "Google Analytics 4. Nos dicen qué páginas se leen y por dónde se abandona el sitio, de forma agregada." },
    { id: "publicidad", nombre: "Publicidad", fija: false,
      desc: "Google Ads y Meta Pixel. Permiten medir campañas y mostrarte anuncios nuestros en otros sitios." },
    { id: "comportamiento", nombre: "Comportamiento", fija: false,
      desc: "Hotjar y Microsoft Clarity. Registran clics y desplazamiento de forma anónima para detectar problemas de uso." }
  ];

  function leer() {
    try { return JSON.parse(localStorage.getItem(KEY)); } catch (e) { return null; }
  }
  function guardar(v) {
    try { localStorage.setItem(KEY, JSON.stringify(v)); } catch (e) {}
  }

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }

  var gtmCargado = false;
  function cargarGTM() {
    if (gtmCargado || !GTM_ID || GTM_ID === "GTM-XXXXXXX") return;
    gtmCargado = true;
    window.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
    var f = document.getElementsByTagName("script")[0];
    var j = document.createElement("script");
    j.async = true;
    j.src = "https://www.googletagmanager.com/gtm.js?id=" + GTM_ID;
    f.parentNode.insertBefore(j, f);
  }

  function aplicar(c) {
    gtag("consent", "update", {
      analytics_storage: c.analitica ? "granted" : "denied",
      ad_storage: c.publicidad ? "granted" : "denied",
      ad_user_data: c.publicidad ? "granted" : "denied",
      ad_personalization: c.publicidad ? "granted" : "denied",
      personalization_storage: c.comportamiento ? "granted" : "denied",
      functionality_storage: "granted",
      security_storage: "granted"
    });
    window.dataLayer.push({ event: "consentimiento_actualizado", consentimiento: c });
    if (c.analitica || c.publicidad || c.comportamiento) cargarGTM();
  }

  gtag("consent", "default", {
    analytics_storage: "denied", ad_storage: "denied", ad_user_data: "denied",
    ad_personalization: "denied", personalization_storage: "denied",
    functionality_storage: "granted", security_storage: "granted",
    wait_for_update: 500
  });
  gtag("set", "ads_data_redaction", true);
  gtag("set", "url_passthrough", true);

  var previo = leer();
  if (previo && previo.decidido) aplicar(previo);

  var css = ""
    + ":host{all:initial;font-family:'Source Sans 3',system-ui,sans-serif;}"
    + "*{box-sizing:border-box;}"
    + ".scrim{position:fixed;inset:0;z-index:2147483000;background:rgba(8,23,34,.55);opacity:0;visibility:hidden;transition:opacity .25s ease;}"
    + ".scrim.on{opacity:1;visibility:visible;}"
    + ".panel{position:fixed;left:0;right:0;bottom:0;z-index:2147483001;background:" + CREAM + ";border-top:3px solid " + GOLD + ";box-shadow:0 -18px 50px rgba(8,23,34,.32);transform:translateY(110%);transition:transform .35s cubic-bezier(.22,1,.36,1);max-height:92vh;overflow-y:auto;}"
    + ".panel.on{transform:translateY(0);}"
    + ".in{max-width:1120px;margin:0 auto;padding:30px 32px;}"
    + "h2{font-family:'Playfair Display',serif;font-size:24px;color:" + NAVY + ";margin:0 0 10px;font-weight:700;line-height:1.25;}"
    + "p{color:#41525a;font-size:15.5px;line-height:1.65;margin:0 0 8px;}"
    + "a{color:" + GOLD_DARK + ";text-decoration:none;font-weight:600;}"
    + "a:hover{color:#9c7331;}"
    + ".row{display:flex;gap:32px;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;margin-top:20px;}"
    + ".txt{flex:1;min-width:300px;}"
    + ".acts{display:flex;gap:11px;flex-wrap:wrap;align-items:center;}"
    + "button{font-family:inherit;cursor:pointer;border-radius:10px;font-weight:700;font-size:15.5px;padding:15px 24px;border:1px solid transparent;white-space:nowrap;transition:background .18s,border-color .18s;}"
    + ".b-si{background:" + GREEN + ";color:#fff;box-shadow:0 10px 24px rgba(30,134,74,.3);}"
    + ".b-si:hover{background:" + GREEN_DARK + ";}"
    + ".b-no{background:#fff;color:" + NAVY + ";border-color:#ded6c5;}"
    + ".b-no:hover{border-color:" + GOLD + ";}"
    + ".b-cfg{background:none;color:" + GOLD_DARK + ";border-color:transparent;padding:15px 8px;text-decoration:underline;text-underline-offset:3px;}"
    + ".b-cfg:hover{color:#9c7331;}"
    + ".cats{display:flex;flex-direction:column;gap:10px;margin:20px 0 0;}"
    + ".cat{display:flex;gap:15px;align-items:flex-start;background:#fff;border:1px solid #e8e2d5;border-radius:12px;padding:17px 19px;}"
    + ".cat .nm{display:block;font-size:15.5px;font-weight:700;color:" + NAVY + ";margin-bottom:3px;}"
    + ".cat .ds{display:block;color:#5a6a70;font-size:14.5px;line-height:1.55;}"
    + ".sw{position:relative;flex-shrink:0;width:46px;height:26px;border-radius:100px;background:#d8d2c4;border:none;padding:0;cursor:pointer;transition:background .2s;}"
    + ".sw.on{background:" + GREEN + ";}"
    + ".sw.fix{background:#a8b8ae;cursor:not-allowed;}"
    + ".sw i{position:absolute;top:3px;left:3px;width:20px;height:20px;border-radius:50%;background:#fff;transition:transform .2s;box-shadow:0 1px 3px rgba(0,0,0,.25);}"
    + ".sw.on i,.sw.fix i{transform:translateX(20px);}"
    + ".hide{display:none;}"
    + "@media(max-width:700px){.in{padding:22px 20px;}h2{font-size:21px;}.acts{width:100%;}.acts button{flex:1;min-width:140px;justify-content:center;}.b-cfg{flex-basis:100%;}}";

  var el = document.createElement("div");
  el.id = "dtd-cookie-consent";
  var sh = el.attachShadow({ mode: "open" });
  var st = document.createElement("style");
  st.textContent = css;
  sh.appendChild(st);

  var scrim = document.createElement("div");
  scrim.className = "scrim";
  var panel = document.createElement("div");
  panel.className = "panel";
  panel.setAttribute("role", "dialog");
  panel.setAttribute("aria-label", "Consentimiento de cookies");
  sh.appendChild(scrim);
  sh.appendChild(panel);

  var estado = { analitica: false, publicidad: false, comportamiento: false };
  if (previo) {
    estado.analitica = !!previo.analitica;
    estado.publicidad = !!previo.publicidad;
    estado.comportamiento = !!previo.comportamiento;
  }
  var detalle = false;

  function pintar() {
    panel.innerHTML = ""
      + '<div class="in">'
      +   '<h2>Antes de continuar: cookies</h2>'
      +   '<p>Usamos cookies propias para que el sitio funcione y, si nos autorizas, cookies de terceros para entender cómo se usa la página y medir nuestras campañas. <strong>No se activa ninguna hasta que tú decidas.</strong></p>'
      +   '<p>Puedes cambiar tu elección cuando quieras. Más detalle en la <a href="/cookies">política de cookies</a> y en la <a href="/privacidad">política de privacidad</a>.</p>'
      +   '<div class="cats' + (detalle ? '' : ' hide') + '" id="cats"></div>'
      +   '<div class="row">'
      +     '<div class="txt"></div>'
      +     '<div class="acts">'
      +       '<button class="b-cfg" id="cfg">' + (detalle ? "Ocultar opciones" : "Configurar cookies") + '</button>'
      +       '<button class="b-no" id="no">Solo las necesarias</button>'
      +       '<button class="b-si" id="si">' + (detalle ? "Guardar mi elección" : "Aceptar todas") + '</button>'
      +     '</div>'
      +   '</div>'
      + '</div>';

    var cats = panel.querySelector("#cats");
    CATS.forEach(function (c) {
      var d = document.createElement("div");
      d.className = "cat";
      var activa = c.fija || estado[c.id];
      d.innerHTML = '<button class="sw ' + (c.fija ? "fix" : (activa ? "on" : "")) + '" '
        + (c.fija ? 'disabled aria-disabled="true"' : '') + ' aria-label="' + c.nombre + '"><i></i></button>'
        + '<span><span class="nm">' + c.nombre + '</span><span class="ds">' + c.desc + '</span></span>';
      if (!c.fija) {
        d.querySelector(".sw").addEventListener("click", function () {
          estado[c.id] = !estado[c.id];
          pintar();
        });
      }
      cats.appendChild(d);
    });

    panel.querySelector("#cfg").addEventListener("click", function () { detalle = !detalle; pintar(); });
    panel.querySelector("#no").addEventListener("click", function () { decidir({ analitica: false, publicidad: false, comportamiento: false }); });
    panel.querySelector("#si").addEventListener("click", function () {
      decidir(detalle ? estado : { analitica: true, publicidad: true, comportamiento: true });
    });
  }

  function decidir(c) {
    var v = { decidido: true, fecha: new Date().toISOString(), version: 1,
      analitica: !!c.analitica, publicidad: !!c.publicidad, comportamiento: !!c.comportamiento };
    guardar(v);
    aplicar(v);
    cerrar();
  }

  function abrir() {
    var g = leer();
    if (g) { estado.analitica = !!g.analitica; estado.publicidad = !!g.publicidad; estado.comportamiento = !!g.comportamiento; }
    pintar();
    requestAnimationFrame(function () { scrim.classList.add("on"); panel.classList.add("on"); });
  }
  function cerrar() {
    scrim.classList.remove("on");
    panel.classList.remove("on");
  }

  scrim.addEventListener("click", function () { if (leer()) cerrar(); });

  function montar() {
    document.body.appendChild(el);
    if (!previo || !previo.decidido) setTimeout(abrir, 700);
    document.addEventListener("click", function (ev) {
      var t = ev.target.closest && ev.target.closest('[data-cookie-settings], a[href="#cookies-config"]');
      if (t) { ev.preventDefault(); detalle = true; abrir(); }
    });
  }
  if (document.body) montar();
  else document.addEventListener("DOMContentLoaded", montar);

  window.dtdCookieSettings = function () { detalle = true; abrir(); };
})();
