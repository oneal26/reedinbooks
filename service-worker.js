!function(){"use strict";const e=["client/about.90b7cb22.js","client/index.3461b863.js","client/[slug].bc0681b6.js","client/screenplay.fc689f88.js","client/index.ba4d3a9c.js","client/chunk.fa59cb36.js","client/client.a36551de.js"].concat(["service-worker-index.html","botanicalscreenplaycover.jpg","coop.ttf","cooperregular.ttf","favicon.png","global.css","great-success.png","logo-192.png","logo-512.png","manifest.json","monstera.png","pdf/Botanical.epub","pdf/Botanical.pages","pdf/BotanicalLocked.pdf","pdf/BotanicalUnlocked.pdf","pdf/botanicalVert.pdf","reedcat.png","rubber.png"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1562124473035").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1562124473035"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const c=new URL(e.request.url);c.protocol.startsWith("http")&&(c.hostname===self.location.hostname&&c.port!==self.location.port||(c.host===self.location.host&&t.has(c.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1562124473035").then(async t=>{try{const c=await fetch(e.request);return t.put(e.request,c.clone()),c}catch(c){const n=await t.match(e.request);if(n)return n;throw c}}))))})}();
