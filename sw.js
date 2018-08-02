/*
 * CHALLANGE:
 * Cache `index.html` file using service worker.
 *
 * This bit of code is included in <script> tag of index.html
 * if (navigator.serviceWorker) {
 *   navigator.serviceWorker.register('serviceworker.js', {scope: '/'})
 * }
 *
 */

var CACHE_NAME = 'version_01'
var URLS = [               // Add URL you want to cache in this list.
  '/',                     // If you have separate JS/CSS files,
  '/index.html',            // add path to those files here
  '/src/public/resources/vendor/bootstrap-3.3.7/dist/css/bootstrap.min.css',
  '/src/public/resources/vendor/font-awesome/css/font-awesome.min.css',
  '/src/public/resources/css/style.min.css',
  '/src/public/resources/vendor/bootstrap-3.3.7/dist/js/bootstrap.min.js',
  '/src/public/resources/vendor/jquery-3.3.1/dist/jquery.js',
  '/src/public/resources/js/canvas-header.js',
  '/src/public/resources/js/rAF.js',
  '/src/public/resources/vendor/waypoints/lib/jquery.waypoints.min.js',
  '/src/public/resources/vendor/jQuery-One-Page-Nav/jquery.nav.js',
  '/src/public/resources/vendor/js/custom.min.js',
  '/src/public/resources/images/lastwork/daydanthanhtuan.png',
  '/src/public/resources/images/lastwork/tuongminhanh.png',
  '/src/public/resources/images/lastwork/nckh2017.png',
  '/src/public/resources/images/lastwork/vienquyhoach.png',
  '/src/public/resources/images/header.jpg',
  '/src/public/resources/images/logo/logo-without-name-196x196.png',
  '/src/public/resources/images/logo/logo-without-name-512x512.png'
]

// Respond with cached resources
self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (request) {
      return request || fetch(event.request)
    })
  )
})

// Cache resources
self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(URLS)
    })
  )
})

// Delete outdated caches
self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (keyList) {
      return Promise.all(keyList.map(function (key, i) {
        if (key !== CACHE_NAME) {
          return caches.delete(keyList[i])
        }
      }))
    })
  )
})
