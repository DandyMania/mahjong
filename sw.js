const CACHE = 'mahjong-sweeper-v113';
// self.location = https://host/path/sw.js → base = /path/
const BASE = self.location.pathname.replace(/sw\.js$/, '');
const ASSETS = [BASE, BASE + 'index.html', BASE + 'manifest.json',
  BASE + 'css/style.css', BASE + 'js/tiles.js',
  BASE + 'js/problems.js', BASE + 'js/game.js',
  BASE + 'icons/icon.svg', BASE + 'icons/icon-192.png', BASE + 'icons/icon-512.png',
  BASE + 'tile-ref.svg'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => {
    if (r) return r;
    return fetch(e.request).then(resp => {
      if (e.request.url.includes('/images/') || e.request.url.includes('tile-ref.svg')) {
        caches.open(CACHE).then(c => c.put(e.request, resp.clone()));
      }
      return resp;
    });
  }));
});
