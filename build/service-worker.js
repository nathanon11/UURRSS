"use strict";var precacheConfig=[["/index.html","d1a2a8fe0516a112c98a1cf943f5a339"],["/static/css/main.d88629df.css","22c5ae5f2a60cf3646a84024ad6e55f4"],["/static/js/main.88c7491d.js","23aa612d1d04eabb8bcf15ea36ec524a"],["/static/media/22.6d3d61da.png","6d3d61da9598154043dc50a70be85a05"],["/static/media/e.9bfb5853.png","9bfb585373a71c751ff18eae7381851b"],["/static/media/kidney-stone 1.48353e92.png","48353e92bf2806847618728975a205b9"],["/static/media/kidney.2f854f0b.jpg","2f854f0b5b408c8e2f3b21f58f9ee703"],["/static/media/ll.c794d7f1.png","c794d7f12c558b3cf043f89a88b68c1e"],["/static/media/pic.172e0975.jpg","172e09755f45f2429b54ae035ec1968e"],["/static/media/pp.54ed305a.png","54ed305a99ad12881bf1c6a6e72faefd"],["/static/media/qq.e3811da5.png","e3811da5885faf26aa46d92b19caa143"],["/static/media/themify.2c454669.eot","2c454669bdf3aebf32a1bd8ac1e0d2d6"],["/static/media/themify.9c8e96ec.svg","9c8e96ecc7fa01e6ebcd196495ed2db5"],["/static/media/themify.a1ecc3b8.woff","a1ecc3b826d01251edddf29c3e4e1e97"],["/static/media/themify.e23a7dca.ttf","e23a7dcaefbde4e74e263247aa42ecd7"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){e=new URL(e);return"/"===e.pathname.slice(-1)&&(e.pathname+=t),e.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){e=new URL(e);return n&&e.pathname.match(n)||(e.search+=(e.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),e.toString()},isPathWhitelisted=function(e,t){var a;return 0===e.length||(a=new URL(t).pathname,e.some(function(e){return a.match(e)}))},stripIgnoredUrlParameters=function(e,a){e=new URL(e);return e.hash="",e.search=e.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),e.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],e=e[1],t=new URL(t,self.location),e=createCacheKey(t,hashParamName,e,/\.\w{8}\./);return[t.toString(),e]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){var e;if(!a.has(t))return e=new Request(t,{credentials:"same-origin"}),fetch(e).then(function(e){if(e.ok)return cleanResponse(e).then(function(e){return n.put(t,e)});throw new Error("Request for "+t+" returned a response with status "+e.status)})}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){var a,e,n;"GET"===t.request.method&&(a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html",(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a)),n="/index.html",!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e)&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))});