var CACHE_NAME = 'React-SSR-cache-v0.0.3';
var urlsToCache = [
  '/',
  'vendors~index.js',
  '/bundle.js',
  '/index.js',
  '/error.js',
  '/images/y18.gif',
  '/api/search?page=0',
  '/api/search?page=1',
  '/api/search?page=2',
  '/api/search?page=3',
  '/api/search?page=4',
  '/api/search?page=5',
  '/api/search?page=6',
  '/api/search?page=7',
  '/api/search?page=8',
  '/api/search?page=9',
  '/api/search?page=10',
  '/api/search?page=11',
  '/api/search?page=12',
  '/api/search?page=13',
  '/api/search?page=14',
  '/api/search?page=15',
  '/api/search?page=16',
  '/api/search?page=17',
  '/api/search?page=18',
  '/api/search?page=19',
  '/api/search?page=20',
  '/api/search?page=21',
  '/api/search?page=22',
  '/api/search?page=23',
  '/api/search?page=24',
  '/api/search?page=25',
  '/api/search?page=26',
  '/api/search?page=27',
  '/api/search?page=28',
  '/api/search?page=29',
  '/api/search?page=30',
  '/api/search?page=31',
  '/api/search?page=32',
  '/api/search?page=33',
  '/api/search?page=34',
  '/api/search?page=35',
  '/api/search?page=36',
  '/api/search?page=37',
  '/api/search?page=38',
  '/api/search?page=39',
  '/api/search?page=40',
  '/api/search?page=41',
  '/api/search?page=42',
  '/api/search?page=43',
  '/api/search?page=44',
  '/api/search?page=45',
  '/api/search?page=46',
  '/api/search?page=47',
  '/api/search?page=48',
  '/api/search?page=49',
  '/?page=0',
  '/?page=1',
  '/?page=2',
  '/?page=3',
  '/?page=4',
  '/?page=5',
  '/?page=6',
  '/?page=7',
  '/?page=8',
  '/?page=9',
  '/?page=10',
  '/?page=11',
  '/?page=12',
  '/?page=13',
  '/?page=14',
  '/?page=15',
  '/?page=16',
  '/?page=17',
  '/?page=18',
  '/?page=19',
  '/?page=20',
  '/?page=21',
  '/?page=22',
  '/?page=23',
  '/?page=24',
  '/?page=25',
  '/?page=26',
  '/?page=27',
  '/?page=28',
  '/?page=29',
  '/?page=30',
  '/?page=31',
  '/?page=32',
  '/?page=33',
  '/?page=34',
  '/?page=35',
  '/?page=36',
  '/?page=37',
  '/?page=38',
  '/?page=39',
  '/?page=40',
  '/?page=41',
  '/?page=42',
  '/?page=43',
  '/?page=44',
  '/?page=45',
  '/?page=46',
  '/?page=47',
  '/?page=48',
  '/?page=49',
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
      return caches.match(event.request).catch(function() {
        return {
          hits: []
        };
      });
    })
  );
});