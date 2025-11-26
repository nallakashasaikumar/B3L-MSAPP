
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("b3l-cache-v1").then((cache) => {
      return cache.addAll([
        "./",
        "./index.html",
        "./manifest.json",
        "./icons/icon-192.png",
        "./icons/icon-512.png",
        "./css/style.css",
        "./js/app.js"
      ]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
      return res || fetch(e.request);
    })
  );
});
