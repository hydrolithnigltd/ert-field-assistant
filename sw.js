// ERT Field Assistant service worker: makes the app installable and usable offline.
// The app shell is cached on install; the Leaflet library is cached the first time it loads.
// Satellite map tiles are NOT cached (they need a connection).
const CACHE = "ert-field-assistant-v1";
const SHELL = ["./", "index.html", "manifest.webmanifest", "icons/icon-192.png", "icons/icon-512.png", "icons/icon-maskable-512.png", "icons/apple-touch-icon.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  const isLeaflet = url.hostname === "cdnjs.cloudflare.com" && url.pathname.includes("/leaflet/");
  if (url.origin === location.origin) {
    if (req.mode === "navigate") {                       // pages: network first, fall back to the cached app
      e.respondWith(fetch(req).then(r => { caches.open(CACHE).then(c => c.put("index.html", r.clone())); return r; })
        .catch(() => caches.match("index.html")));
    } else {                                             // static files: cache first
      e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(r => { const copy = r.clone(); caches.open(CACHE).then(c => c.put(req, copy)); return r; })));
    }
  } else if (isLeaflet) {                                // Leaflet library: cache first
    e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(r => { const copy = r.clone(); caches.open(CACHE).then(c => c.put(req, copy)); return r; })));
  }
});
