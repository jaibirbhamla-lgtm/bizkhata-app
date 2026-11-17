/* BizKhata web app: keeps the whole app on the device so it opens and works offline */
const CACHE = 'bizkhata-0.1.6-mwkkpimf', FILES = ["./","apple-touch-icon.png","assets/base-D-NNiHfT.js","assets/esm-BrXkKZTG.js","assets/esm-DDkKRg7F.js","assets/esm-DNQH94vh.js","assets/esm-DfM2BFat.js","assets/esm-DfMs4D7j.js","assets/html2canvas.esm-CBrSDip1.js","assets/index-BvvNbPV7.js","assets/index-DLgM-lGv.css","assets/index.es-jEiblB8D.js","assets/logo-3-QYaHVx.png","assets/native-B9ssSbOe.js","assets/purify.es-BwoZCkIS.js","assets/web--zQ9zR3p.js","assets/web-BmbKP0AE.js","assets/web-D22SKAGP.js","assets/web-D2gTaiKF.js","assets/web-E0OymvpH.js","assets/web-N-lSdLFZ.js","assets/web-SGLs5NYJ.js","assets/web-atkdVeSd.js","favicon.png","icon-192.png","icon-512.png","index.html","manifest.webmanifest"]
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting())) })
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE && k.startsWith('bizkhata-')).map(k => caches.delete(k)))).then(() => self.clients.claim())) })
self.addEventListener('fetch', e => {
  const r = e.request; if (r.method !== 'GET' || new URL(r.url).origin !== location.origin) return
  e.respondWith(caches.match(r, { ignoreSearch: true }).then(hit => hit || fetch(r).catch(() => caches.match('./index.html'))))
})
