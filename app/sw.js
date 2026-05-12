const CACHE_NAME = 'poolchem-v1.8';
const ASSETS = [
  '/app/',
  '/app/index.html',
  '/app/chart.umd.min.js',
  '/app/appicon-72.png',
  '/app/appicon-192.png',
  '/app/appicon-512.png',
  '/app/manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
