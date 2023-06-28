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
    "revision": "0902523cb7f8b05a1e06760e2763080e"
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
    "url": "assets/js/10.4e1c5118.js",
    "revision": "01ca0a4cb010b041de5cf9a2df90ef5c"
  },
  {
    "url": "assets/js/11.3ac62a3c.js",
    "revision": "7a18ea8ca431279229e228930ac98d94"
  },
  {
    "url": "assets/js/12.d964be94.js",
    "revision": "bee0ca61903253aa9ad2f73a1b0d4ce8"
  },
  {
    "url": "assets/js/13.30940678.js",
    "revision": "99d8a7bb823ec309b98f6923d4def2d3"
  },
  {
    "url": "assets/js/14.92c290b0.js",
    "revision": "251614bd1f9587b74f125daea794f171"
  },
  {
    "url": "assets/js/15.e8778b9d.js",
    "revision": "35e23881199917efebe10380680964bf"
  },
  {
    "url": "assets/js/16.50854b4b.js",
    "revision": "5827a8a9ccbe6156e2e8f7f29365e8d6"
  },
  {
    "url": "assets/js/17.05430543.js",
    "revision": "e079a02f0144b0e96a77b189b4781bee"
  },
  {
    "url": "assets/js/18.30b23a5f.js",
    "revision": "ef4f5022c85e118576a66289554e437a"
  },
  {
    "url": "assets/js/19.46adb168.js",
    "revision": "7af3ef9609413090bf36a2741df87c1d"
  },
  {
    "url": "assets/js/2.b042aed3.js",
    "revision": "f4e3563e14309762b97cc5cdc96d09de"
  },
  {
    "url": "assets/js/20.ecdb3be4.js",
    "revision": "0868236abffa7453bb84d64310199bd3"
  },
  {
    "url": "assets/js/21.4407e8e6.js",
    "revision": "ba916d85aae68c6fca8769a57c4127c7"
  },
  {
    "url": "assets/js/22.75fa31f9.js",
    "revision": "0a4a437a46bf08482129ec52b56bd64e"
  },
  {
    "url": "assets/js/23.ded0adf6.js",
    "revision": "803c9ea83d61927299c36be8c7db4aeb"
  },
  {
    "url": "assets/js/24.5beebfef.js",
    "revision": "74789d9cd267adebfa586c0359ae7958"
  },
  {
    "url": "assets/js/25.a720a1ef.js",
    "revision": "1f84d4a7579972712cfb4f81b47b0e72"
  },
  {
    "url": "assets/js/26.de8bfd2f.js",
    "revision": "f69561ee2e27c23782c6d5579aee0c5b"
  },
  {
    "url": "assets/js/27.0364d039.js",
    "revision": "1c4763bdfd31417e05b278f29359829d"
  },
  {
    "url": "assets/js/3.de8876ed.js",
    "revision": "2b5c42fe1493ac52f1806b5328dc6ea3"
  },
  {
    "url": "assets/js/4.ba7b6556.js",
    "revision": "20f1dffe7b021fafa74118babb6f505b"
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
    "url": "assets/js/9.bb6421a8.js",
    "revision": "bb5584a7ed45ca446b2fb3f1adca8784"
  },
  {
    "url": "assets/js/app.a1069a79.js",
    "revision": "813d9d465f24cb0bbe5c9d4d7c9a7074"
  },
  {
    "url": "frontend/angular.html",
    "revision": "18eac57011b4bbc7372dc49f634a8038"
  },
  {
    "url": "frontend/babel.html",
    "revision": "7b802093bbb237b2b6af310a873790ea"
  },
  {
    "url": "frontend/build.html",
    "revision": "25a51cccfaba9f1819781b9652d7c068"
  },
  {
    "url": "frontend/css.html",
    "revision": "6216c405929168ac511f8bf52a5d16ba"
  },
  {
    "url": "frontend/html.html",
    "revision": "924dd47e4bca9d441230def0aab1459c"
  },
  {
    "url": "frontend/index.html",
    "revision": "4527c6f765e065585507307bc6058f41"
  },
  {
    "url": "frontend/jquery.html",
    "revision": "ceaba4ec76384ce1111b5bc93b3d3ed1"
  },
  {
    "url": "frontend/js.html",
    "revision": "bee4cac1c4ddee5c4f0a45393dc59b2e"
  },
  {
    "url": "frontend/node.html",
    "revision": "a637c9e419f36bf2e8e5658fe07cac41"
  },
  {
    "url": "frontend/preprocessor.html",
    "revision": "126c5d6ea93ac036ea42c5547f24bf84"
  },
  {
    "url": "frontend/react.html",
    "revision": "24168858c87d461b3bf4c33ccdbc6e10"
  },
  {
    "url": "frontend/tech_noun.html",
    "revision": "362fef25e304185e7cb3c96b5937cb47"
  },
  {
    "url": "frontend/ts.html",
    "revision": "9a39337ed1d211bb86cace52d012cb1e"
  },
  {
    "url": "frontend/vue.html",
    "revision": "62714f21b394d860e810e7df6aa94efa"
  },
  {
    "url": "index.html",
    "revision": "3e36018675f2331f67a2b50f842c9820"
  },
  {
    "url": "interview/index.html",
    "revision": "9c6295d981b521c369c8a6b0e52a6f83"
  },
  {
    "url": "other/index.html",
    "revision": "841cb3d0d1d6934cdbd9399ee45e313a"
  },
  {
    "url": "other/nav.html",
    "revision": "a1f481ec320233c71234aa3f6ac19072"
  },
  {
    "url": "wechat/index.html",
    "revision": "81b033088c9482dc389e1f96b111963c"
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
