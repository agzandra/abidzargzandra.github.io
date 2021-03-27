'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "cd7dca976642f0ddf1b4048377a5e5e0",
".git/config": "643e234d1ad2cf3fc90714a8f8c523c9",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "eb4d36278087122fc619d68d6175fa2d",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ba5c8738ae86e2d24dd0d8d17f5a28c1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "af60d8abc7be058275d43f4641acdc0a",
".git/logs/refs/heads/master": "af60d8abc7be058275d43f4641acdc0a",
".git/logs/refs/remotes/origin/master": "78db942cfd9a42d62d143db6a5cfd569",
".git/objects/03/45c72041ffb1ae7bad25d2cd806bc19af58f32": "1a18d3850adc3fead7b4e2eb9f8992c0",
".git/objects/08/2ee85228684a06a2cd2ae04ba1942095f86640": "ab79bac3f188a8a8267f971bef4b87ed",
".git/objects/08/fd45471b659599ed05f65e2ac74bbb44c06be7": "f651230fec585b389b2dcf7c78a52038",
".git/objects/0a/71d552b672ae5d0abd7a9b28fd9b6162dfb320": "e8d6519183890037e502b4346d78a412",
".git/objects/0a/b140d2b027e79748b971bee6968f6a1c55b6ad": "c55b2acb75c4275b3e162f58e072b62f",
".git/objects/0e/d1317a5fca7eba374bee34b91fb5722eb93dd9": "ea8303d9fcc41d958bbe57859e81b2c0",
".git/objects/11/f6cd19b2d60789518222d5055e68aea27147cc": "b2def89ae5edc2a378fc7e0b7146da0e",
".git/objects/12/2c5e53bd91ed81f8c999fd24b8ae37f4a55e81": "15381b214945f13b66d85295ef69ee56",
".git/objects/13/6dde0fcaed8d1d8f7c972a877d1e3061a7a3ea": "8077194eb6ba163759a8e6c583c4b42e",
".git/objects/19/95b2a23c80f8347fde6df32e564434c626c77a": "39c9e5959299ce664ddfba512415329f",
".git/objects/21/eed248a142873648c860c0f14199e7d753beda": "6b8a820f21bf03b33ecd1c4ea4c4085d",
".git/objects/27/752c4be787ebb069f3d2843d6596a7d6543380": "5fab5774a1a5e2e8d9213651028159a7",
".git/objects/33/56f4980a34e09c18280c742a373bfe9a1970c0": "0fddc16b688b3ccdbc1dbcff880dabfd",
".git/objects/35/b9b59613f1d8c296df5e0186e08ed0a59c8542": "59e6629af3917730e6e9864b83d6f4f8",
".git/objects/3e/26d7be63d961b6eb9b44c558ee3c856971ccd0": "dbdb20565910b0e28f78ae558b28499b",
".git/objects/42/985e2dd2f950a82189a4994a7f9b407ab96125": "f1b4f10605d064eb2fa117d3710c7c71",
".git/objects/43/5ec88339b8a9f3a6943246f079475b90f30fdb": "69fbe4922a5e1a17819f99f98d499e7c",
".git/objects/44/ce8038637a7db64613041cdda80e24d07d8979": "9fc8ee7264c772891799ade573610aa1",
".git/objects/48/217617005575345943d8460b76c03381fed224": "6eb02af7684e2da217c7c7aea938335e",
".git/objects/4e/55c9e917b6ff318272e31f9fcb1eef3ad30819": "c5f8057aa15de779c2fd88174f03bbbb",
".git/objects/50/07f6b06dd3cba258471a823799bf605dc058e5": "62af5df3e04b2667618351a2c568b3f5",
".git/objects/50/360289cfe4bd4dcc2aa384ecc16b312333afdc": "9529fc3a96e6668e14c62c15503210a6",
".git/objects/50/5f9681e95e0d6e38119b8c6a749258838c2872": "f25143b7a047faeaa65561b071ad01d0",
".git/objects/58/64a5bdd3ff9871ebc80a48806aa90b36b155fb": "d198e98e290edb55b1f8c30b4bf8259b",
".git/objects/59/f49036e7816f1c28a5a9bb5387c97423399e51": "cb612e3b0d395a0e7d3a9ca5ef05d978",
".git/objects/5b/eecd9cfd7467ef02be22797b8c0af6db09889a": "1256962d0003a5775128fffb817c59de",
".git/objects/61/1b72b2fd864896a27396de27ad4126e693e10e": "e3fb3088f40cc5e3555708396284f1bc",
".git/objects/62/73626d7cdcd7387129da5fad2e549fbbd6a360": "d09652c085ea8c9bf86293a87fd2ce8e",
".git/objects/66/832cd17084a228135e68d883b96194971a6503": "320e6b3b8ba16a7875d120ee3c7a60d7",
".git/objects/6a/642d2640fda8a748ebc33025dc7b0594ae60c5": "2e6f0283e092e23455b67457ce945d91",
".git/objects/6e/5070c8f70268e8a0e9a6e9ca6c89b11f3866d3": "a6a0725123530d3f0447edbeaa7c3cb6",
".git/objects/73/ec534e6b3054ddf23fd045e74eb44779e9f1f2": "b66412566de289c451b627e55ba604d0",
".git/objects/79/53989234864e9d32bd3a811a3508583488a05e": "ea436dadceb6b6e7ef25c860e2548dd3",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/f77d706091b78b373f2580e5c6b2aa593a78e3": "75ab8ef783d452cafbe258b9c8adacbd",
".git/objects/80/62c6a5b26e847f513ed4847a2ff890b5304f0a": "4d3d79a85dc8b2e1617f37ad6fdd654a",
".git/objects/86/6bf4117e10cd5e59e9bb9747e55e70a67f2fe4": "abf05c9e47b900e09301048f1f94a852",
".git/objects/86/d5d55b8b6c6c8edb9d10a0910f8dd0f3d84184": "1d287ed68b95b75da56cd89a468ea76f",
".git/objects/8d/32d8878dec162e57c8ef076573c5fa56042823": "c83727c7952e1f0e60bf254f9271d666",
".git/objects/8d/8dff0debc0908366bc5e6b86be984fcccf6065": "a962920ca6d6256551f8496dfca86a43",
".git/objects/8e/0e4cffe21f67fdb752147d9b737721f432adfb": "fa60e725844c45f55a47c653b3020dc7",
".git/objects/8e/807acaf9799dbf75c28650dd890bbf9f2d9648": "fa8adbd17d181f655666ca1c1d78136c",
".git/objects/92/8439112a9f5ef28b7cbd4c234301eeb4c40422": "e89dad51004a75757cab36b37163000a",
".git/objects/93/fb369aff39f707e15c09542de480df00be53ee": "a89028270bd2d6a2b0bd6a57abfb460a",
".git/objects/98/0e4fd8a36d6202440036921793ac65ba39d6cf": "c2fa0aab97af5686a372a4c5502e4db1",
".git/objects/99/258a251bb05ac1510ceb7d63019804b0b6b6e2": "3b8e28962e463fe6eb2f8bc70e65976f",
".git/objects/9e/15838b5ba4549c9e41c445c3736388920f55d9": "a53002abda765de7eead2305f73e9872",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/6d26338d777f2ca94778915ec027de9236dbbe": "559593bf9413ccf9412aa8f0b6f3ac4b",
".git/objects/a1/9441547db98a8f5fb0c6f1adbe9f83b31e6683": "daeb65aa0bb7c1b4c63dcfd8ea27aec2",
".git/objects/a3/06042e04338b0ca3d6157f4f1b19442de4e821": "240108e06a898de25eb32699a38bb926",
".git/objects/a6/0c41fa541e01314207653f49961ed66aab5788": "f138eb7b4322d5b8c17809fa8c68c063",
".git/objects/a6/24968afb9cfe02980ab7d12b4de41d3d43aa92": "08507aa892d19be5813d78b0b03ee532",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/aa/8b00276d161af30b0b0cde37e26030eaedd69b": "25e42bc1b9a7553102aa7e8cc27380a7",
".git/objects/ad/ca2903bf848674fa743d941ae062e5b73075f8": "c265e4045238f29ac6fd1b17d6e833ff",
".git/objects/b1/5b7e93c24e767d263e708313a26cf8b1090477": "1edf9b1892a91347affb2ace6d57aac7",
".git/objects/b6/38a20a76371f1efed16fcf648fe6ea9e3da190": "cb8ee961f0a4c79a55819f94e6cf317f",
".git/objects/ba/6585859123b60ffb74fa4b68cf12e16717a636": "8855b048d4170e007e4e3e0ea7dba356",
".git/objects/bb/795d9a3c1720656ce2bd427c811f0c05756fa9": "37be994908dc9afa2296df1300abaaaa",
".git/objects/c2/193e76eb9feffae511eb56e03d13d9ad0b6495": "74150d11c4158432a279f5eb12e92bb5",
".git/objects/c2/28db4a677e030e4b7e0399564f8ba993f5a403": "801a45d24e51d0025fedcd52bb361ce8",
".git/objects/c6/20ddaf96f50b4196d433f081b32d119f274f29": "7b99ed418eabbb35dddbe990ab3a3f8d",
".git/objects/cc/343e2663fd135a38ef53a2c149dc5f11dd174a": "c3b0ca06fa753a5f87070cf802ccbada",
".git/objects/ce/33dbabac3dc50e147d8c6fd750520da33ae7e4": "b371bc64cb7153291e7a8286766f7bd3",
".git/objects/d3/a44195a3d0f68b844cdf28bb3da9c8efef180e": "f920d612fea7de07a969c76d77bdec00",
".git/objects/db/b58ffbfa3c0d813911938b50b946c8eac0c9e4": "b51b7dc588315ca3de6735899fdb79f3",
".git/objects/e1/b75b7a4780d825b6f7647edd6d0eaecfa11193": "6747b9f9e945560799367d07069acc42",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/8d315cc77d279738dd69dcd46961cb5e66a575": "cc6adeee33ff097025c05d34979f19c1",
".git/objects/ec/1dc9383b7bf28ff3a21dcfc4127895697494c8": "620d3f70ad76b21a405eccaf386186a7",
".git/objects/ed/518ab0d9620d356518c4b45b48308adf0e4aa5": "5cfcb173a790871f6978806a215eb35a",
".git/objects/ee/2d81da0a24e16e7f85534e7b15a844f6ff26d8": "7da399a30bbaee476e98db6f62a6b718",
".git/objects/ef/ab0c4bc5ec30dd82ca39f9d35f20baf0b28fb8": "8c9306501d777ad9d5398aba0ff90420",
".git/objects/ef/d857c7b6bf487c88ca96ae7c8c58c7b7cdd2e7": "71febb155e0815bbe3cc9d957616699b",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f2/c991cd8313151e60fea39f3b3eee77626c0589": "4fce0a633d1894c06ec7d4ccf914361d",
".git/objects/f3/611bfc092282aff95d83db01ce8b0d98ff9129": "25a64c073c5db0e38bc74630084aac2f",
".git/objects/f5/94c57c51d3c18fad230acf3fbfa15d1ad12ec7": "54a197e6be92b67143a92286660f5fce",
".git/objects/fe/7393e0961886f177dce30cf7ae25d54042ffdd": "e84db10c27e8f5cf1c37c2544afc49c5",
".git/ORIG_HEAD": "a6914f06ffe30c9e868d69be9da8c998",
".git/refs/heads/master": "beddf3e92fbaad56c65be4da7eb01ee0",
".git/refs/remotes/origin/master": "bdd6f44175351456ebe21f4c059a4765",
"assets/AssetManifest.json": "0b3585c488510ade98f73f0cdc84b3fc",
"assets/assets/images/home0.png": "7a68d737e220b7231ed4e5f4c4c38cc3",
"assets/assets/images/home1.png": "b903b33072493e24d7e3925a9b0dbe94",
"assets/assets/images/home2.png": "c1646cd51aa0e733c1432f628205ac3c",
"assets/assets/images/icon_appoffice.png": "44eee9ee3a7eed75edface85345515a9",
"assets/assets/images/icon_desainvisual.png": "3a974e3c6b0048d0844fde2338ff8cff",
"assets/assets/images/icon_facebook.png": "a7516a4c4498702350f7e58bce536c22",
"assets/assets/images/icon_facebook2.png": "dd3df4f53d4430d23031f05c2253978e",
"assets/assets/images/icon_gamedevelop.png": "e675f58f5da11d533d40b2df4e6b6cc2",
"assets/assets/images/icon_instagram.png": "574c254dfa35573e96a987c55c4ca52e",
"assets/assets/images/icon_instagram2.png": "0833346dedb209df6d2e43bcfadfa6d8",
"assets/assets/images/icon_mobileprogramming.png": "446680ad8f7b854f471e3cd80fdaa994",
"assets/assets/images/icon_twitter.png": "c87c30636768d26cc3e42474705ee215",
"assets/assets/images/icon_twitter2.png": "3d32b58c9f9485df1c43406dc0d6aedc",
"assets/assets/images/icon_videografis.png": "84c5c6fd3b2bd1fc1311b7b16081ec63",
"assets/assets/images/icon_webprogramming.png": "1a157deeeb083c1071f786718b453a5c",
"assets/assets/images/item1_bimbinganku-android.jpg": "36068d93ebd7277e36d75ad37605db0c",
"assets/assets/images/item2_bimbinganku-web.jpg": "abbecd415247d3fa40a6fef4e2a9c1c2",
"assets/assets/images/me.jpg": "2ba36b17af7fbf77fe54acff8d055a4f",
"assets/assets/images/me2.jpg": "b182622ec96608347e280a8044be0047",
"assets/assets/images/me2.png": "a28b173e05957b5b2f406223a121ee4e",
"assets/assets/images/my_photo.jpg": "5e64a93b9f1d96970fd0f4836cd30f1c",
"assets/assets/SQR721B.TTF": "d51caace00e302765437b55c9bd2c34b",
"assets/assets/SQR721C.ttf": "c18840780992e9cdbc0bfbe7596b8fd1",
"assets/FontManifest.json": "6dacdbca6cfac4c4a13fee33f0b2abfa",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "51a3ca98310b872857bc5fe3b863e3af",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttericon/lib/fonts/Brandico.ttf": "791921e9b25210e2551b6eda3f86c733",
"assets/packages/fluttericon/lib/fonts/Elusive.ttf": "23f24df0388819e94db2b3c19841841c",
"assets/packages/fluttericon/lib/fonts/Entypo.ttf": "58edfaf27b1032ea4778b69297c02b5a",
"assets/packages/fluttericon/lib/fonts/FontAwesome.ttf": "799bb4e5c577847874f20bd0e9b38a9d",
"assets/packages/fluttericon/lib/fonts/FontAwesome5.ttf": "221b27a41202ddd33990e299939e4504",
"assets/packages/fluttericon/lib/fonts/Fontelico.ttf": "3a1e1cecf0a3eae6be5cba3677379ba2",
"assets/packages/fluttericon/lib/fonts/Iconic.ttf": "34e12214307f5f7cf7bc62086fbf55a3",
"assets/packages/fluttericon/lib/fonts/LineariconsFree.ttf": "276b1d61e45eb9b2dde9482545d9e3ac",
"assets/packages/fluttericon/lib/fonts/Linecons.ttf": "2d0ac407ed11860bf470cb01745fb144",
"assets/packages/fluttericon/lib/fonts/Maki.ttf": "9ecdcd7d24a2461a55d532b86b2740bd",
"assets/packages/fluttericon/lib/fonts/Meteocons.ttf": "8b9c7982496155bb39c67eaf2a243731",
"assets/packages/fluttericon/lib/fonts/MfgLabs.ttf": "09daa533ea11600a98e3148b7531afe3",
"assets/packages/fluttericon/lib/fonts/ModernPictograms.ttf": "5046c536516be5b91c15eb7795e0352d",
"assets/packages/fluttericon/lib/fonts/Octicons.ttf": "7242d2fe9e36eb4193d2bc7e521779bf",
"assets/packages/fluttericon/lib/fonts/RpgAwesome.ttf": "99232001effca5cf2b5aa92cc3f3e892",
"assets/packages/fluttericon/lib/fonts/Typicons.ttf": "3386cae1128e52caf268508d477fb660",
"assets/packages/fluttericon/lib/fonts/WebSymbols.ttf": "4fd66aa74cdc6e5eaff0ec916ac269c6",
"assets/packages/fluttericon/lib/fonts/Zocial.ttf": "c29d6e34d8f703a745c6f18d94ce316d",
"firebase.json": "5b6394354f495721ba3133e0d966733e",
"index.html": "0c1f02b11529205f2ed8e90c80afec49",
"/": "3835b6b100cd6e7c421cd063a8a81f65",
"main.dart.js": "df2cb42627aa010f70111a3f2dae0299",
"public/index.html": "3835b6b100cd6e7c421cd063a8a81f65",
"version.json": "8fec7422cd1a3aceb58c4ac51bc3c76a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
