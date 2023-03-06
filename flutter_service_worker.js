'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "e024c895674e1afbaa0b609e32c04828",
"index.html": "9a85baf1a0c62fc833f928608f8b97df",
"/": "9a85baf1a0c62fc833f928608f8b97df",
"main.dart.js": "775648c58e207775db12c4a642ec26db",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"favicon.png": "9014a18d5103a222a0f3b0bc9a281ca9",
"icons/Icon-192.png": "697e655c2611cd822245422c7cd92d93",
"icons/Icon-maskable-192.png": "697e655c2611cd822245422c7cd92d93",
"icons/Icon-maskable-512.png": "96b01af787ac248b46bbacf17184b6a9",
"icons/Icon-512.png": "96b01af787ac248b46bbacf17184b6a9",
"manifest.json": "87c87aa007772156eb18240691d8d04f",
"assets/AssetManifest.json": "687243f7fa1ccf3c801882122c409520",
"assets/NOTICES": "620e1788c098f90702988d97ec45edd4",
"assets/FontManifest.json": "1fc77fa843f9d85030326bbea0810f9f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/riv/supportButtonOld.riv": "22b22a4ec9bde4366bbeffdb450fbe8f",
"assets/assets/riv/supportButton.riv": "9caa025288be03c4c4b686c2607fed44",
"assets/assets/riv/call.riv": "c8670a6d222a38fbf51ff2de38377a71",
"assets/assets/flags/us.svg": "13700d16d565470751f43b7d2983bc20",
"assets/assets/flags/es.svg": "91221aeba452aeb57c55826c70920835",
"assets/assets/images/old.svg": "acf7aa14ba6596c27b00f6cfe14533bf",
"assets/assets/images/snowpark.svg": "90a758d0b34340dc3455cb31bee912bf",
"assets/assets/images/logo_old.svg": "32563a8c6ac635b1f32540a64e67c797",
"assets/assets/images/fuel.svg": "ff916dfdc0c92950f15d0e2eb6d7806b",
"assets/assets/images/aa.svg": "baa85cd68d0fc60119e382b8542d3d03",
"assets/assets/images/logo_old.jpg": "4519de2bbf88b75f4e6416e6935c09e8",
"assets/assets/images/bg_vip.jpg": "b4a7116cea11a36821e9e9c37e8fee1c",
"assets/assets/images/old.jpg": "b1c8a43aab065c062b3214e822821457",
"assets/assets/images/support.svg": "0049744565f58ae83725e1c354604749",
"assets/assets/images/shape.png": "7c9d641f38adae56dc617559e71245cf",
"assets/assets/images/vehicle.svg": "e37e1118e71b6de9302cfc34f56f51d6",
"assets/assets/images/logo.jpg": "31eeb5f34ddbd5dbda84034ec4a9e462",
"assets/assets/images/logo.png": "058372f2399159b79078f0f82a5f1f13",
"assets/assets/images/oversize.svg": "4678d502533a75d604caca10728ca0b3",
"assets/assets/images/bg_ex.jpg": "3fb7e785d1590990b9b0397c03ab3084",
"assets/assets/images/b.jpg": "4a1df268147beac2cbca888ddb2a7bfa",
"assets/assets/images/trip.svg": "16bd0dc77dcfe6d5ecef0ff5b07133b3",
"assets/assets/images/logo.svg": "1b7efbee74b73bc26fb1673516c46b4a",
"assets/assets/images/tax.svg": "a524c185de7f254ed263040698fc9579",
"assets/assets/images/snowmobile.svg": "ca99c301b1e58b8abbc852f45fa18cdb",
"assets/assets/images/bg.jpeg": "4488496173c4b34e8983a93b9e3ab67a",
"assets/assets/images/white.png": "5c8ac69bfcd73d0e23f243325b73ce2b",
"assets/assets/fonts/Poppins/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins/Poppins-Italic.ttf": "c1034239929f4651cc17d09ed3a28c69",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
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
