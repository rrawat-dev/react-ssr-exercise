var CACHE_NAME = 'React-SSR-cache-v0.0.1';
var urlsToCache = [
  '/',
  '/bundle.js',
  '/index.js',
  '/error.js',
  '/api/search',
  '/images/y18.gif'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});


self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {
      return caches.match(event.request);
    })
  );
});