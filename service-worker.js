self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("b3l-cache").then((cache) => {
      return cache.addAll([
        "/B3L-MSAPP/",
        "/B3L-MSAPP/index.html",
        "/B3L-MSAPP/manifest.json",
        "/B3L-MSAPP/icons/icon-512.png"
      ]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
