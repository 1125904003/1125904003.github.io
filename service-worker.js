/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "8e9ae61d4d2689f5a9df408ee8d9ba02"
  },
  {
    "url": "assets/css/0.styles.1e0eb7b9.css",
    "revision": "c5bdf467e32f6f422ef9e0cc2f4b26ea"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.d334ba83.js",
    "revision": "69e29d04deb569c29c2d3c50413e8b68"
  },
  {
    "url": "assets/js/11.80c3f738.js",
    "revision": "43f3b91e26c44098ce57d0726535e92d"
  },
  {
    "url": "assets/js/12.6e96111b.js",
    "revision": "f526e6ddedac9ce0bb6e3e5c37fa5463"
  },
  {
    "url": "assets/js/13.30940678.js",
    "revision": "99d8a7bb823ec309b98f6923d4def2d3"
  },
  {
    "url": "assets/js/14.f97adfdc.js",
    "revision": "ca70cfb9618dc1f07e810d04f2692598"
  },
  {
    "url": "assets/js/15.5e2d334f.js",
    "revision": "811dc98b4d2f977cc4da86951a8fb4e6"
  },
  {
    "url": "assets/js/16.bf661487.js",
    "revision": "0f7c68a161566b520f08bf6a04e15f1d"
  },
  {
    "url": "assets/js/17.afd2a642.js",
    "revision": "cd201049c903070d1ae1bbd0d2ad092b"
  },
  {
    "url": "assets/js/18.d9ea35db.js",
    "revision": "2d0de4fa0b52ed9fe5ca052790cdaa58"
  },
  {
    "url": "assets/js/19.c8666feb.js",
    "revision": "b0d1629056a9f5e768cd5597cb2d8c20"
  },
  {
    "url": "assets/js/2.b042aed3.js",
    "revision": "f4e3563e14309762b97cc5cdc96d09de"
  },
  {
    "url": "assets/js/20.d835c1f5.js",
    "revision": "6890a533f140595f934f419531913fdb"
  },
  {
    "url": "assets/js/21.3c2037ea.js",
    "revision": "ea712000a06ea96f1c7d3a6565e3a3ed"
  },
  {
    "url": "assets/js/22.d124373b.js",
    "revision": "dbf08b0ff52bde079c5ecda200c88db7"
  },
  {
    "url": "assets/js/23.2551f417.js",
    "revision": "24d0f1796058beef8479c660653ae1d1"
  },
  {
    "url": "assets/js/24.5beebfef.js",
    "revision": "74789d9cd267adebfa586c0359ae7958"
  },
  {
    "url": "assets/js/25.24e31a11.js",
    "revision": "3da77c0e1b83f9bd46d05d096ea25623"
  },
  {
    "url": "assets/js/26.39d23b91.js",
    "revision": "0fe395aa5e36b5273856eba21531cda5"
  },
  {
    "url": "assets/js/27.f94fb7d4.js",
    "revision": "8921fafb5ce1101dc2e85e4d67fe40dd"
  },
  {
    "url": "assets/js/28.99671b6c.js",
    "revision": "c11392ec77a726e6e3a2f4d34d047ae5"
  },
  {
    "url": "assets/js/3.de8876ed.js",
    "revision": "2b5c42fe1493ac52f1806b5328dc6ea3"
  },
  {
    "url": "assets/js/4.2fa49934.js",
    "revision": "0147b5ef4e8830967515ea6ba00826d4"
  },
  {
    "url": "assets/js/5.98b8f772.js",
    "revision": "9ee0dbd1a7726110804245f11a01addc"
  },
  {
    "url": "assets/js/6.a4b1459c.js",
    "revision": "85c956d7d956a2788185715ec327c77e"
  },
  {
    "url": "assets/js/7.f77a5c2f.js",
    "revision": "27b96a8665bcf9483d07de76f300c1a1"
  },
  {
    "url": "assets/js/8.ec25bbab.js",
    "revision": "f53844c9c47a1d173bcbf380ba24b048"
  },
  {
    "url": "assets/js/9.16e8c944.js",
    "revision": "9bd738716431dce50b3c54988f888d43"
  },
  {
    "url": "assets/js/app.27fbe7ee.js",
    "revision": "a42d492756268c1b875d9a838a15e8cf"
  },
  {
    "url": "frontend/angular.html",
    "revision": "69f8fcc1cfed2ff47ee996d203899bf3"
  },
  {
    "url": "frontend/babel.html",
    "revision": "8b23deb22276e040088c8d66ac422b11"
  },
  {
    "url": "frontend/build.html",
    "revision": "830754807ae73d616f509365cba2604f"
  },
  {
    "url": "frontend/css.html",
    "revision": "2c320a5e3865a5d5c08d16c2c87d69c2"
  },
  {
    "url": "frontend/html.html",
    "revision": "c4f05c06e28960195f47a94069cb1e86"
  },
  {
    "url": "frontend/index.html",
    "revision": "cd32e2401e9d4b0d93d569e908880d75"
  },
  {
    "url": "frontend/jquery.html",
    "revision": "848c469f2012381cec807369e4beb8f0"
  },
  {
    "url": "frontend/js.html",
    "revision": "f199d36020aebc8b88bcb5fe4b813a87"
  },
  {
    "url": "frontend/node.html",
    "revision": "4db6a275eef610637a3b5b2e610c25f1"
  },
  {
    "url": "frontend/preprocessor.html",
    "revision": "9d08ca916f7d91edda6ac98824a68349"
  },
  {
    "url": "frontend/react.html",
    "revision": "3faff6d66d1baa6d92ccb05166e67b3d"
  },
  {
    "url": "frontend/tech_noun.html",
    "revision": "51dc60ad8812c65aac91941c758d02f2"
  },
  {
    "url": "frontend/ts.html",
    "revision": "a3f6cabc7a9cdfe7e2b98f6827eb7f41"
  },
  {
    "url": "frontend/vue.html",
    "revision": "8018e4bd22b4e074597e9de9b2dc0285"
  },
  {
    "url": "index.html",
    "revision": "1009682b5bd6e4aea698ac55cdecd046"
  },
  {
    "url": "interview/index.html",
    "revision": "2a87e4f30146df07d8cb312fb5a0ae50"
  },
  {
    "url": "other/index.html",
    "revision": "11fe8f6fb151f5bd94ea26af6e48d6f6"
  },
  {
    "url": "other/nav.html",
    "revision": "16cce8ffea979fb8935ac528908b1092"
  },
  {
    "url": "other/window的Bat命令学习.html",
    "revision": "69307be1c6768dd8c09b570e29c007a3"
  },
  {
    "url": "wechat/index.html",
    "revision": "f6cfc2281ed65ddd4bebbc9534a7a542"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
