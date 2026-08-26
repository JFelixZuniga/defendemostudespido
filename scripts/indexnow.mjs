// Notifies IndexNow (Bing, Yandex, Naver) that the site's URLs changed, so
// they can re-crawl without waiting for their normal schedule. Run manually
// after a deploy that changes page content: `npm run indexnow`.
// Docs: https://www.indexnow.org/documentation

const HOST = 'www.defendemostudespido.cl';
const KEY = 'ed55261e7c61e2bb2f2e4b51b4a8d19e';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const urlList = [
  '/',
  '/calculadora/',
  '/contacto/',
  '/cookies/',
  '/nosotros/',
  '/privacidad/',
  '/servicio/accidentes-trabajo/',
  '/servicio/autodespido/',
  '/servicio/comparendo-inspeccion/',
  '/servicio/despido-injustificado/',
  '/servicio/finiquito/',
  '/servicio/nulidad-despido/',
  '/servicio/tutela-laboral/',
  '/servicios/',
  '/terminos/',
].map((path) => `https://${HOST}${path}`);

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
});

if (res.ok) {
  console.log(`IndexNow: submitted ${urlList.length} URLs (${res.status}).`);
} else {
  console.error(`IndexNow: submission failed (${res.status}) ${await res.text()}`);
  process.exit(1);
}
