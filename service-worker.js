// مثال خدمة عمل (Service Worker) بسيط لدعم offline
self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("fastpost-cache").then(cache => cache.addAll(["/", "/manifest.json"]))
  );
});
self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
self.addEventListener("activate", e => {
  e.waitUntil(self.clients.claim());
});