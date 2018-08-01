var CACHE = 'cache';
var urlsToCache = [
    '/',
  ...
];
var preCacheSrc = [
    'src/public/resources/vendor/bootstrap-3.3.7/dist/css/bootstrap.min.css',
    'src/public/resources/vendor/font-awesome/css/font-awesome.min.css',
    'src/public/resources/vendor/animate.css/animate.min.css',
    'src/public/resources/vendor/sinister/sinister.css',
    'src/public/resources/css/style.min.css',
    'src/public/resources/vendor/bootstrap-3.3.7/dist/js/bootstrap.min.js',
    'src/public/resources/vendor/jquery-3.3.1/dist/jquery.min.js',
    'src/public/resources/js/canvas-header.js',
    'src/public/resources/js/rAF.js',
    'src/public/resources/vendor/wow/dist/wow.min.js',
    'src/public/resources/vendor/waypoints/lib/jquery.waypoints.min.js',
    'src/public/resources/vendor/jQuery-One-Page-Nav/jquery.nav.js',
    'src/public/resources/vendor/js/custom.min.js',
    'src/public/resources/images/lastwork/daydanthanhtuan.png',
    'src/public/resources/images/lastwork/tuongminhanh.png',
    'src/public/resources/images/lastwork/nckh2017.png',
    'src/public/resources/images/lastwork/vienquyhoach.png',
    'src/public/resources/images/header.jpg',
  ...
];
// precache tài nguyên khi được đăng ký bởi sw_reg.js
self.addEventListener('install', function (evt) {
    console.log('The service worker is being installed.');
    caches.open(CACHE)
        .then(function (cache) {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
        });
    evt.waitUntil(precache());
});

// khi tài nguyên được gọi
self.addEventListener('fetch', function (evt) {
    console.log('The service worker is serving the asset.');
  // sau 0.6s không load
    evt.respondWith(fromNetwork(evt.request, 500).catch(function () {
    // lấy từ cache
        return fromCache(evt.request);
    }));
    // update cache
    evt.waitUntil(update(evt.request));
});

// lấy tài nguyên từ network
function fromNetwork (request, timeout) {
    return new Promise(function (fulfill, reject) {
        var timeoutId = setTimeout(reject, timeout);
        fetch(request).then(function (response) {
            clearTimeout(timeoutId);
            fulfill(response);
        }, reject);
    });
}

// precache một tí =))
function precache () {
    return caches.open(CACHE).then(function (cache) {
        return cache.addAll(preCacheSrc);
    });
}

// lấy tài nguyên từ cache
function fromCache (request) {
    return caches.open(CACHE).then(function (cache) {
        return cache.match(request).then(function (matching) {
            return matching || Promise.reject('no-match');
        });
    });
}

// update cache
function update (request) {
    return caches.open(CACHE).then(function (cache) {
        return fetch(request).then(function (response) {
            return cache.put(request, response);
        });
    });
}
