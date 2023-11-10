'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "41775c3810edced62e0aa159b1fa0c8e",
"index.html": "759fff2d7daa56e81af310a928fdaec2",
"/": "759fff2d7daa56e81af310a928fdaec2",
"main.dart.js": "400e62228a6cf57f97de743757935f7e",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e48ee08f6433994f5062f56124184627",
".git/config": "c2ba4365a453e7f0a80bfd7fe4b04eed",
".git/objects/92/0a022e49e877ff1e6df071afcf45322696ed45": "9b11d7406ccf290a6f1df14438de087e",
".git/objects/0c/de1582f01890d16a02c1adcf2df5435b6e0524": "c9befdedd9c609e4ae0df56c16efa8b6",
".git/objects/66/7fd1781bc117523ea4a9671fb7d8382a01c636": "d5040c81e28f6272a76438821e7c078a",
".git/objects/50/39f0c0dc108815280742665ceeb635e7df2c1b": "e1cea8444a51c56169823069ab5dbf80",
".git/objects/68/c156f55518b3259f796b839ec960b12f4b373d": "a4b9e32da96cf63742e6082b05ae652b",
".git/objects/57/8a511f738a80ea2b13e5ca4fcb589c490e9a9a": "56da86bfe806b1ab4965d7305176fcf3",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/03/0ffcd31a9e5aa42faca88e37c7575d35d2aef8": "9508b4c0b10ddd60028bff47fb102d18",
".git/objects/9b/7c32e0e1527b3ae9e9ad37fc2d027a9d850d1c": "fb3d8474aa4ffbf42f740c39663b6ba8",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/35/d5f1a45917b6e74ff8e0fcf746c3de091fc23f": "dd32df8fa2fa897996673b8a3e373a3f",
".git/objects/67/8fad1d191a70cb27c3e434ae1622adf25a3d10": "8ce625027cfd8fc690b70d2ad192f420",
".git/objects/33/c343083ae309cf02c4bfffd8cedcfc91567619": "26bab49d11ccec816063c9484050b921",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d0/3a5cd199e703ecfd7b8b4ebf2533f92d072976": "746db2123e90cc2f3f4398cfb95572da",
".git/objects/d0/1b60a041f8ae0219efa6f2aece16163a090314": "0c743f073bf3a1bf86bfe66f9778942a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/d8/0cca971c7e34f648863d4478a9016abca4cc79": "887a911021136a56f1e82dde94eec02b",
".git/objects/e5/d68afdfc57c86c89e436e07ede154121fe6a9e": "3b73f064ee0068f67ab7dac027fe8330",
".git/objects/f4/1e780d24c9d22ca9edf7ee7ee98bb2a00a8f45": "8792064a1750e12e3bbde2d3d6256a94",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/da9d6139cbfd8a4b1c74ec2eed2539b90e2f40": "db92da5e5e216d84b06db83b6634ebf9",
".git/objects/cf/a7a253390ac6a61c98d01d0ba942c3c8c67483": "ada784ae5a45506616239993db8c9fb2",
".git/objects/fe/9f78fa47ee605d378f0b67d8ac757cb607e9eb": "277b6b8f327472ce122a1b55f08e34f1",
".git/objects/ed/9bcd6755c727dbc8c97bbbbec0ad5e127f2626": "f585cb410b93def8f80a2524ebebc193",
".git/objects/29/b11acad208b24d41a29ab22c9164af7d3c0fac": "8a0bb960df83082db4856b56ea58802e",
".git/objects/29/4801e4e0c9462fc5e5d5464bb91e52912eca2b": "e0637be3cf4a7c30e5eaefb1cc38a6a3",
".git/objects/7c/d396a558b13af8a032fef0f1134627fd23a858": "a766ae8ce43eefe21608a47415ea89b8",
".git/objects/16/0c1f090db3733d17f8ec0178743e1e07e17c43": "bea9a13c9d57da7baf991aa5e349dc54",
".git/objects/16/de356744ae38a0590663c7af482ea071652114": "0b2184f514d94a7c28cd281e9063fba8",
".git/objects/89/2e3dda431663e3f878c39d5588c7be4fb7c873": "3e24d0ac6a0db32387db9479e1abc1c8",
".git/objects/73/44d2dd266209fbadf793deacb987217a7ed98c": "eda623e5e7cc11985ddff9cc0b4e6a0f",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/26/288a2d0fff027e248a0bade884c14893a5315d": "257871749671e661df2e61d688e0de91",
".git/objects/26/4b69bd6b8a8de5ee1db274142081fc5052810a": "bebd3be3b3cac1a4a3070c911f733b21",
".git/objects/81/4f9087dd2c6519c407877e9e17ea270ffee0c4": "00b2441bad3c9d853d08032a141e754e",
".git/objects/86/7d9ddd53a635dc65afc0639698395a08132dc2": "c4055c396d8e2536043d0d24e788eba4",
".git/objects/72/584136550aa7e2fa44744843d965bc01a1647b": "16d9254ca2a1d2d4e33dea6afdfeb964",
".git/objects/88/86530024ca7875c979a3735df622a141fe78e3": "0f9e35f2c06f0623ca771df5d953039a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/cab6aad5251bedba1016fe593f9131000e1b25": "85e3b6ce2556bb735934bd9c57bf49ea",
".git/objects/09/5c0a0c9ca7120d8c05852b9b6f85da32190453": "444c42372dc2a20b8d4caed7fd2ba9d2",
".git/objects/96/3393a428813408baf2b0f4b302fc70968f42ba": "8659457647985b0de5320544fa43767c",
".git/objects/98/08732be497b1a8a38e59d831e40f7d0d4807ab": "9f05bcedfe4c4cd0648de5f2e96531c7",
".git/objects/3f/3667ba583417c270e01148a8ada3d563230c59": "9cb235e47d99fcda780d9d12a70e7069",
".git/objects/30/4eb4724bfaf8cb7801751d6322dc30282336a1": "01a65bc2b7a305e434e485ca47187c49",
".git/objects/01/f4d09b5bfd8fa4a96a619143158bfb0cf1a071": "51e7749a1b4064a3e2063206f7bf6b5d",
".git/objects/39/3d3688a0d128a65a2f0bc9d2f341a00436bdef": "79c01a43492ef98cde575099c80bf382",
".git/objects/99/323961e9a2006c5b9fb794385054bdb624b202": "1d50327b129c67aef321fc47f16b164a",
".git/objects/99/ea3dc93a20abf26d16689587b4faeff28c59db": "2276fd68dc0b3547c839a230b1563dc7",
".git/objects/52/ac66e11bbecc068588ddc39fd9daec275de6f8": "f3d66cf6a186d1c38bf0a83171aab76c",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/ba/374b81f0414f042b25c5bb6cd12afa9c43980c": "edd994f2d866c3daac08a3e9e54f3cf4",
".git/objects/a0/8408573c9daa4c011ccb40c766da5596abc941": "dcd9a87ad541ea82ff20104c6ae432a9",
".git/objects/a0/b38c05dbe16e5f6f8c41199650c76b9f76b3c7": "3a034cc341d861a89580b0d336ade1ae",
".git/objects/b8/2471ac13923698016b55fab7848ad429aace49": "4e22e08f6fb60405e5fca5c837468674",
".git/objects/b8/fd1428f9c88d3ae9f7f09ba9c06304862f6349": "496c61148391bde39d22680faa7a7058",
".git/objects/b1/311632e20cbf8dc9eed6dec28ca81490cc8918": "595115fef7a09fdc829a41762e92288f",
".git/objects/dd/31b74cc1498ee3059c9765cd80a230f9cf765c": "82b3ccf23240d004f3b7b5c46c072fc1",
".git/objects/dc/132532e466cffbff1bfe68a9eac4a219921c03": "b79ff88cef873a0686938a11da573512",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/e1/6ccb45089f381aedd61c8bbb92a2e4ef905b66": "257b0add3ec836b6d1f1c12cb8c120c3",
".git/objects/cc/d797925a4c9e45e2099807814b5d6c663cac27": "367c6ced43f2d019d48ad3a3b74af39c",
".git/objects/e6/7fc220a2d88393d8466da8934ec41421dc627e": "fd7d1bf6683239f984d9ffcc317176fb",
".git/objects/e6/b1e52e10acac337df53981ba213bb4f1aeb149": "f86beae6864be3d5661dcbaa0c5388ba",
".git/objects/e8/c26f894f89c8708d95b918ff00acff13abe360": "85395aabf487e3dc2a89fa7a6c019263",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/cb/1621a255c4a138f13a47866ab6dab49b37b543": "26bb13eacf806c2af3f216311eddc415",
".git/objects/f8/5cb4ad1678e947fff41d9b7d33fcbfe8ebf7c3": "474ffa0d18c5ac42c5414354bb1fce1a",
".git/objects/e0/6f7a991fe8ad4b86a272f90e4ae2a2c18a5ede": "ac82b4373454dcfca3d7f4bdeb5d24d8",
".git/objects/e0/b9af8cfed48fdebf5cde0aa25180684a640507": "db23af87b5eb4d1b4237207bdc60e7bf",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/77/26deb695f3d74a6ca1f44a498fb0d9f6d1abf8": "30d80962e5a083728e6be6c302fe3b47",
".git/objects/24/5c7479483cf02bfee92370a5b157b054de4b06": "754ce4e12576b76e5008f3636c53f9e6",
".git/objects/85/e5834b295758ae11cc073da890138aa5e04650": "b76e0f6ed0ae19908784b1e80a3c86a9",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/76/bde73446e03714281636da6386454f0c8f1e8f": "b4e50fe98d7e0199b6da946bca4f2571",
".git/objects/2e/e361aa3756e34c0b1d1aca125dcaae4a8a4817": "8ef4f8b03baaf1a5f62a6a0cbb33de7d",
".git/objects/2b/d4c3b9715efb035a3baee5703a63693d746601": "9a638ed144de51c3b1a8342d2e5f6049",
".git/objects/78/b0a8e97aa9598d62bd49a404b4567c3a6ba55f": "f5a1c0e5fe0ce0b82b9aecf827470644",
".git/objects/7a/3aae2fb413ef9f9d45018f77c14125a28b9bfd": "2a834591fdd62bf0b81f80b57f25a3c2",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/25/28f550a883ceedcf6b8abb142980a372aca831": "37c75665ed824c3186968545b51d5482",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9affa1a1ffccd9246e4e87b752d26f80",
".git/logs/refs/heads/master": "abde8e6b88fd661feb7f711c3d65e56d",
".git/logs/refs/remotes/origin/HEAD": "29dc182e226551b70b926f22b8e9b484",
".git/logs/refs/remotes/origin/master": "11377a937a6a4e7c88e882d890b9b60a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "6cccaed7f5e357f95bcc42d55450e795",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "4c927c393a712caa0928be424ba5a491",
".git/index": "aa9379192abf201becff38133636983f",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/FETCH_HEAD": "20cafca2dc01cc087e8a568d81602a10",
"assets/AssetManifest.json": "30441c9b5203df2ed40d9bea13bcb4df",
"assets/NOTICES": "2a7e32b044f2dc2d223fc8aeb1da3064",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "67f002ae97bcf73f319a1460f5f15af3",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "57705858fa6aa84cd90b484318a619f4",
"assets/fonts/MaterialIcons-Regular.otf": "9cce7beee7da05ef77e7ebeee4d41f1d",
"assets/assets/cash1.svg": "6f90e595e20078ac781b56e51962f8b8",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
