const CACHE_NAME = 'decoodo-v1';
const ASSETS = [
    '/',
    '/index.html',
    '/about.html',
    '/contact.html',
    '/privacy_policy.html',
    '/terms_of_service.html',
    '/assets/css/style.css',
    '/assets/js/script.js',
    '/assets/imgs/logo_decoodo.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(ASSETS))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});
