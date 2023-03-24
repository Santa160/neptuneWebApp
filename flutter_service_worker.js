'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "ea67f3bc0fbf66ea7e0c2e7c67d74a17",
"assets/assets/images/aadhaar.jpg": "0bf90b9a38aa9f782070ffad856e1713",
"assets/assets/images/add%2520member.png": "2ac397710e0bc5d03ec64277d6177c8b",
"assets/assets/images/address.png": "aa45d81a9bba29e5d02c450099ecd3e3",
"assets/assets/images/address_dark_blue.png": "d755711a8e05bcb31aab9e90c28c7424",
"assets/assets/images/alert.png": "e55d33367f5bfd2da2002c83dfaffb97",
"assets/assets/images/branding.png": "dd1d69dfc8e7257399f306ae06e8db2c",
"assets/assets/images/check.png": "f05a88e67f3f70ca8de81e0fc624a461",
"assets/assets/images/coin.png": "dd2f33e0ea998f2632982078d66bc87d",
"assets/assets/images/genology.png": "1bd35ebf091bdb4b9ead23ac3b4266a4",
"assets/assets/images/home.png": "f8baaf5a510b3ced3a3ccb6454d1c6e1",
"assets/assets/images/logo.png": "429c63edfac04d08486b2a633dd93965",
"assets/assets/images/member%2520list.png": "c64b838602a7c4b4449da80e5725142d",
"assets/assets/images/neptuneLogo.png": "e7d802dc023f8ef295eef26d86668be7",
"assets/assets/images/person_blue.png": "2542dfbde357a752e37b10606927a940",
"assets/assets/images/phase.png": "e82c53a73631a9820215b9c40d694618",
"assets/assets/images/pocket.png": "30444251ffe695fee46b9a73fad87247",
"assets/assets/images/profile.png": "10f93b38bb1c1c08dd2a409075d3c676",
"assets/assets/images/project2.jpg": "f98076b809381cf54e57c1572b6a0e75",
"assets/assets/images/project3.jpg": "e5335cf9a61a1614459f8fe0c5e67125",
"assets/assets/images/project4.jpg": "f579b9af5c0bd35582982ffd162644bb",
"assets/assets/images/promotion.png": "03071bbf68ffc5268b77dcc67580f369",
"assets/assets/images/sign-out.png": "6295c1881213ae3669f1dbf854f2736f",
"assets/assets/images/sponsorEditor.png": "a37e47de73f0350b99af3a880e220c66",
"assets/assets/images/transaction.png": "31477f3110280b1f763e88bd43d802b1",
"assets/assets/images/transfer%2520list.png": "ff0bc55e657ef9a883b4ee3cdf5a988f",
"assets/assets/images/transfer.png": "89e4b9dc506f977641787eafb8ba5691",
"assets/assets/images/user.jpg": "624c54365c63148abbcde520fa695bc1",
"assets/assets/images/wall1.png": "5ed33e777a703c86526ef1e315be5b4f",
"assets/assets/images/wallet.png": "f9d6ba03db17dce153f0c6ac30cd385d",
"assets/assets/images/withdraw%2520list.png": "046f5306151d6df449415e3eb5b6de9b",
"assets/assets/images/withdraw.png": "0e0fc43b1e768d1705df40efaf50e075",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "d4d8ee9a789e328a2f0029396d11a2f7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "fa4b6e3343fc967676e063879935192a",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/logo-192x192.png": "39f1261a89e8ed451b14387d020de56e",
"icons/logo-512x512.png": "dee663e366c1a40f58adfbf4d4f11494",
"icons/logo-icon.png": "53fb57758869823cb776e760faa32935",
"index.html": "96096348678fd03f90290c677900d54a",
"/": "96096348678fd03f90290c677900d54a",
"main.dart.js": "0e0f7814d6a7202df8c7247d33663093",
"manifest.json": "4a130754e2e4ffea608c9f3f4a94b8dd",
"splash/img/branding-1x.png": "688328c3397731856a37697bab6c7124",
"splash/img/branding-2x.png": "55e353f7da4a7fad4a6f0675f307bb62",
"splash/img/branding-3x.png": "bf6d21de0e03f4d1149f1e1e6c8acdee",
"splash/img/branding-4x.png": "69fd16c1f778a5bde2810ec966498c6c",
"splash/img/branding-dark-1x.png": "688328c3397731856a37697bab6c7124",
"splash/img/branding-dark-2x.png": "55e353f7da4a7fad4a6f0675f307bb62",
"splash/img/branding-dark-3x.png": "bf6d21de0e03f4d1149f1e1e6c8acdee",
"splash/img/branding-dark-4x.png": "69fd16c1f778a5bde2810ec966498c6c",
"splash/img/dark-1x.png": "ca868774742826ad12a8f4380fd6b12e",
"splash/img/dark-2x.png": "cf39063d995b66c7f027f04f32a274b7",
"splash/img/dark-3x.png": "05cc6a4dd649c5f60c0512ce011ee01c",
"splash/img/dark-4x.png": "81947258d8ac6276bc1fda2d5310d2e4",
"splash/img/light-1x.png": "ca868774742826ad12a8f4380fd6b12e",
"splash/img/light-2x.png": "cf39063d995b66c7f027f04f32a274b7",
"splash/img/light-3x.png": "05cc6a4dd649c5f60c0512ce011ee01c",
"splash/img/light-4x.png": "81947258d8ac6276bc1fda2d5310d2e4",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "8632f66b778ab6afb1cdff5a5d50857a",
"version.json": "cbb53b943e58f3d49f3294e6726c37f5"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
