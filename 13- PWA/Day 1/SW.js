const cacheName = "Mearn";
const assets = [
  "http://127.0.0.1:8000/index.html",
  "http://127.0.0.1:8000/App.js",
  "/manifest.webmanifest.json",
  "/icon-192x192.png",
  "/icon-256x256.png",
  "/icon-384x384.png",
  "/icon-512x512.png",
  "/photo1.jpg",
  "/photo2.jpg",
  "/photo3.jpg",
  "/your-image.jpg",
];

self.addEventListener("install", (installedEvent) => {
  installedEvent.waitUntil(
    caches
      .open(cacheName)
      .then((cache) => {
        cache.addAll(assets).then().catch();
      })
      .catch((err) => console.log(err))
  );
});

self.addEventListener("activate", (activatedEvent) => {
  activatedEvent.waitUntil(
    caches.keys().then((key) => {
      return Promise.all(
        key.filter((k) => k != cacheName).map((k) => caches.delete(k))
      );
    })
  );
});

self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches
      .match(fetchEvent.request)
      .then((res) => {
        return res;
      })
      .catch((err) => console.log(err))
  );
});
