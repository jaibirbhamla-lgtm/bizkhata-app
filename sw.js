/* BizKhata web app: keeps the whole app on the device so it opens and works offline */
const CACHE = 'bizkhata-0.1.7-mwkl9xcd', FILES = ["./","apple-touch-icon.png","assets/base-BDUGmZ2e.js","assets/esm-BakHj4y_.js","assets/esm-BnC-ZSR_.js","assets/esm-BrUN4Fwk.js","assets/esm-CRrfR9T0.js","assets/esm-Cg0e_Fqc.js","assets/esm-D0Lw_z3h.js","assets/esm-DslRk4Ld.js","assets/html2canvas.esm-CBrSDip1.js","assets/index-CkxfdZQi.js","assets/index-Dhqo0pnw.css","assets/index.es-Nb7IrUeG.js","assets/logo-3-QYaHVx.png","assets/native-B0Js2d0r.js","assets/purify.es-BwoZCkIS.js","assets/web-6EsonSYk.js","assets/web-BJfLrHid.js","assets/web-Bfx8l4OD.js","assets/web-C57bXFL6.js","assets/web-CUD4sfje.js","assets/web-DKJwBpva.js","assets/web-DqcCd74W.js","assets/web-Iqf3EC0S.js","assets/web-rF9MaPvg.js","assets/web-y00LNbKV.js","favicon.png","icon-192.png","icon-512.png","index.html","manifest.webmanifest"]
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting())) })
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE && k.startsWith('bizkhata-')).map(k => caches.delete(k)))).then(() => self.clients.claim())) })
self.addEventListener('fetch', e => {
  const r = e.request; if (r.method !== 'GET' || new URL(r.url).origin !== location.origin) return
  e.respondWith(caches.match(r, { ignoreSearch: true }).then(hit => hit || fetch(r).catch(() => caches.match('./index.html'))))
})
