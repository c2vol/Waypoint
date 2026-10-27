const V = "waypoint-v4", CORE = ["./", "index.html", "js/core.js", "js/app.js", "games/dune.js", "games/gowr.js", "manifest.webmanifest", "icon.svg", "icon-192.png", "icon-512.png", "icon-180.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(V).then(c => c.addAll(CORE)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(k => Promise.all(k.filter(x => x !== V).map(x => caches.delete(x)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  const u = new URL(e.request.url);
  if (u.origin === location.origin) {
    // network first so updates arrive, cache as the offline fallback
    e.respondWith(fetch(e.request).then(r => { const c = r.clone(); caches.open(V).then(x => x.put(e.request, c)); return r; }).catch(() => caches.match(e.request).then(r => r || caches.match("index.html"))));
  } else if (/fonts\.(googleapis|gstatic)\.com$/.test(u.host)) {
    e.respondWith(caches.open(V).then(c => c.match(e.request).then(h => h || fetch(e.request).then(r => { c.put(e.request, r.clone()); return r; }).catch(() => h))));
  }
});
