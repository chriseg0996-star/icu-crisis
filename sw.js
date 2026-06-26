// ICU Crisis service worker — network-first with cache fallback
const CACHE='icu-crisis-v23';
const ASSETS=[
  './','./index.html','./i18n.js','./fonts.css','./manifest.json','./icon-192.png','./icon-512.png',
  './fonts/orbitron-400.ttf','./fonts/orbitron-700.ttf','./fonts/orbitron-900.ttf','./fonts/share-tech-mono-400.ttf'
];

self.addEventListener('install',e=>{
  e.waitUntil(
    caches.open(CACHE)
      .then(c=>c.addAll(ASSETS))
      .then(()=>self.skipWaiting())
  );
});

self.addEventListener('activate',e=>{
  e.waitUntil(
    caches.keys()
      .then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k))))
      .then(()=>self.clients.claim())
  );
});

self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  e.respondWith(
    fetch(e.request)
      .then(r=>{
        if(r.ok&&new URL(e.request.url).origin===location.origin){
          const clone=r.clone();
          caches.open(CACHE).then(c=>c.put(e.request,clone));
        }
        return r;
      })
      .catch(()=>caches.match(e.request,{ignoreSearch:true}).then(m=>m||caches.match('./index.html')))
  );
});
