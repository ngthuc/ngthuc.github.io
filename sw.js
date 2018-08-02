// var CACHE = 'cache';
// var urlsToCache = [
//     '/',
//   ...
// ];
// var preCacheSrc = [
//     '/src/public/resources/vendor/bootstrap-4.1.3/dist/css/bootstrap.min.css',
//     '/src/public/resources/vendor/font-awesome/css/font-awesome.min.css',
//     '/src/public/resources/vendor/animate.css/animate.min.css',
//     '/src/public/resources/vendor/sinister/sinister.css',
//     '/src/public/resources/css/style.min.css',
//     '/src/public/resources/vendor/bootstrap-4.1.3/dist/js/bootstrap.min.js',
//     '/src/public/resources/vendor/jquery-3.3.1/dist/jquery.min.js',
//     '/src/public/resources/js/canvas-header.js',
//     '/src/public/resources/js/rAF.js',
//     '/src/public/resources/vendor/wow/dist/wow.min.js',
//     '/src/public/resources/vendor/waypoints/lib/jquery.waypoints.min.js',
//     '/src/public/resources/vendor/jQuery-One-Page-Nav/jquery.nav.js',
//     '/src/public/resources/vendor/js/custom.min.js',
//     '/src/public/resources/images/lastwork/daydanthanhtuan.png',
//     '/src/public/resources/images/lastwork/tuongminhanh.png',
//     '/src/public/resources/images/lastwork/nckh2017.png',
//     '/src/public/resources/images/lastwork/vienquyhoach.png',
//     '/src/public/resources/images/header.jpg',
//     '/src/public/resources/images/logo/logo-without-name-48x48.png',
//     '/src/public/resources/images/logo/logo-without-name-72x72.png',
//     '/src/public/resources/images/logo/logo-without-name-96x96.png',
//     '/src/public/resources/images/logo/logo-without-name-144x144.png',
//     '/src/public/resources/images/logo/logo-without-name-196x196.png',
//     '/src/public/resources/images/logo/logo-without-name-512x512.png',
//   ...
// ];
// // precache tài nguyên khi được đăng ký bởi sw_reg.js
// self.addEventListener('install', function (evt) {
//     console.log('The service worker is being installed.');
//     caches.open(CACHE)
//         .then(function (cache) {
//             console.log('Opened cache');
//             return cache.addAll(urlsToCache);
//         });
//     evt.waitUntil(precache());
// });
//
// // khi tài nguyên được gọi
// self.addEventListener('fetch', function (evt) {
//     console.log('The service worker is serving the asset.');
//   // sau 0.6s không load
//     evt.respondWith(fromNetwork(evt.request, 500).catch(function () {
//     // lấy từ cache
//         return fromCache(evt.request);
//     }));
//     // update cache
//     evt.waitUntil(update(evt.request));
// });
//
// // lấy tài nguyên từ network
// function fromNetwork (request, timeout) {
//     return new Promise(function (fulfill, reject) {
//         var timeoutId = setTimeout(reject, timeout);
//         fetch(request).then(function (response) {
//             clearTimeout(timeoutId);
//             fulfill(response);
//         }, reject);
//     });
// }
//
// // precache một tí =))
// function precache () {
//     return caches.open(CACHE).then(function (cache) {
//         return cache.addAll(preCacheSrc);
//     });
// }
//
// // lấy tài nguyên từ cache
// function fromCache (request) {
//     return caches.open(CACHE).then(function (cache) {
//         return cache.match(request).then(function (matching) {
//             return matching || Promise.reject('no-match');
//         });
//     });
// }
//
// // update cache
// function update (request) {
//     return caches.open(CACHE).then(function (cache) {
//         return fetch(request).then(function (response) {
//             return cache.put(request, response);
//         });
//     });
// }

// /*
//  Copyright 2016 Google Inc. All Rights Reserved.
//  Licensed under the Apache License, Version 2.0 (the "License");
//  you may not use this file except in compliance with the License.
//  You may obtain a copy of the License at
//      http://www.apache.org/licenses/LICENSE-2.0
//  Unless required by applicable law or agreed to in writing, software
//  distributed under the License is distributed on an "AS IS" BASIS,
//  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  See the License for the specific language governing permissions and
//  limitations under the License.
// */
//
// // Names of the two caches used in this version of the service worker.
// // Change to v2, etc. when you update any of the local resources, which will
// // in turn trigger the install event again.
// const PRECACHE = 'my-precache-v1';
// const RUNTIME = 'my-runtime';
//
// // // A list of local resources we always want to be cached.
// // const PRECACHE_URLS = [
// //   'index.html',
// //   './', // Alias for index.html
// //   'style.css',
// //   'main.js'
// // ];
//
// const PRECACHE_URLS = [
//     '/src/public/resources/vendor/bootstrap-4.1.3/dist/css/bootstrap.min.css',
//     '/src/public/resources/vendor/font-awesome/css/font-awesome.min.css',
//     '/src/public/resources/vendor/animate.css/animate.min.css',
//     '/src/public/resources/vendor/sinister/sinister.css',
//     '/src/public/resources/css/style.min.css',
//     '/src/public/resources/vendor/bootstrap-4.1.3/dist/js/bootstrap.min.js',
//     '/src/public/resources/vendor/jquery-3.3.1/dist/jquery.js',
//     '/src/public/resources/js/canvas-header.js',
//     '/src/public/resources/js/rAF.js',
//     'sw_reg.js',
//     'index.html',
//     '/',
//     '/src/public/resources/vendor/wow/dist/wow.min.js',
//     '/src/public/resources/vendor/waypoints/lib/jquery.waypoints.min.js',
//     '/src/public/resources/vendor/jQuery-One-Page-Nav/jquery.nav.js',
//     '/src/public/resources/vendor/js/custom.min.js',
//     '/src/public/resources/images/lastwork/daydanthanhtuan.png',
//     '/src/public/resources/images/lastwork/tuongminhanh.png',
//     '/src/public/resources/images/lastwork/nckh2017.png',
//     '/src/public/resources/images/lastwork/vienquyhoach.png',
//     '/src/public/resources/images/header.jpg',
//     '/src/public/resources/images/logo/logo-without-name-48x48.png',
//     '/src/public/resources/images/logo/logo-without-name-72x72.png',
//     '/src/public/resources/images/logo/logo-without-name-96x96.png',
//     '/src/public/resources/images/logo/logo-without-name-144x144.png',
//     '/src/public/resources/images/logo/logo-without-name-196x196.png',
//     '/src/public/resources/images/logo/logo-without-name-512x512.png',
//   ...
// ];
//
// // The install handler takes care of precaching the resources we always need.
// self.addEventListener('install', event => {
//   event.waitUntil(
//     caches.open(PRECACHE)
//       .then(cache => cache.addAll(PRECACHE_URLS))
//       .then(self.skipWaiting())
//   );
// });
//
// // The activate handler takes care of cleaning up old caches.
// self.addEventListener('activate', event => {
//   const currentCaches = [PRECACHE, RUNTIME];
//   event.waitUntil(
//     caches.keys().then(cacheNames => {
//       return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
//     }).then(cachesToDelete => {
//       return Promise.all(cachesToDelete.map(cacheToDelete => {
//         return caches.delete(cacheToDelete);
//       }));
//     }).then(() => self.clients.claim())
//   );
// });
//
// // The fetch handler serves responses for same-origin resources from a cache.
// // If no response is found, it populates the runtime cache with the response
// // from the network before returning it to the page.
// self.addEventListener('fetch', event => {
//   // Skip cross-origin requests, like those for Google Analytics.
//   if (event.request.url.startsWith(self.location.origin)) {
//     event.respondWith(
//       caches.match(event.request).then(cachedResponse => {
//         if (cachedResponse) {
//           return cachedResponse;
//         }
//
//         return caches.open(RUNTIME).then(cache => {
//           return fetch(event.request).then(response => {
//             // Put a copy of the response in the runtime cache.
//             return cache.put(event.request, response.clone()).then(() => {
//               return response;
//             });
//           });
//         });
//       })
//     );
//   }
// });

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
  '/src/public/resources/vendor/bootstrap-4.1.3/dist/css/bootstrap.min.css',
  '/src/public/resources/vendor/font-awesome/css/font-awesome.min.css',
  '/src/public/resources/css/style.min.css',
  '/src/public/resources/vendor/bootstrap-4.1.3/dist/js/bootstrap.min.js',
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
