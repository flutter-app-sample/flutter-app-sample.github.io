'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "d406d26851568495b13b13e33b602372",
"/": "d406d26851568495b13b13e33b602372",
"main.dart.js": "eb10ca05c9fb32d5d671d068f1551b8f",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "af00fae7b28520b6f5c21730c7953a42",
"assets/LICENSE": "3cc77f3bf4e24efe7176a277d1d87946",
"assets/AssetManifest.json": "3580edd0ebf80657c38b8c04861e0e35",
"assets/FontManifest.json": "f7161631e25fbd47f3180eae84053a51",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/dino2.svg": "4b88e984489583c9af22d1c7a93c4bcb",
"assets/assets/circle.svg": "33b7145eddb4f1d625fc5e655edb40c4",
"assets/assets/head1.svg": "61e5811d325d1069867257a9185f7c68",
"assets/assets/child8.svg": "843c93f5f083b57a31963d81a431dba1",
"assets/assets/child6.svg": "1863e54870bc60d23f6365e15039851b",
"assets/assets/child7.svg": "b575f2d0d92e05623a07473f80fd4e0a",
"assets/assets/avatar.jpg": "542e597cfb22c720b70ac70557a14e94",
"assets/assets/pexels-photo-396547.jpg": "968524b4c96b079c0b4bb0b7f65cc5dd",
"assets/assets/child3.svg": "f6f1411a35e8b1f7b208f9faee4a3550",
"assets/assets/egypt1.svg": "1bb1eb1d74d3da39f24117d75e08d2f3"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
