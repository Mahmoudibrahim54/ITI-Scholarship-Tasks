//console.log(self);
const cacheName="cache-v2";
const cacheResources=[
    '/',
    'index.html',
    'styles/main.css',
    'images/space1.jpg'
];
self.addEventListener('install',event=>{
    self.skipWaiting();
    event.waitUntil(
     caches.open(cacheName).then(cache=>{
        return cache.addAll(cacheResources)
     })
    )
    console.log("installed")
})

self.addEventListener('activate',event=>{
    console.log('activated')
})

self.addEventListener('fetch',event=>{
    console.log('Fetching:::::',event.request.url)
    event.respondWith(caches.match(event.request)
    .then(response=>{
        if(response){
            return response
        }
        return fetch(event.request)
    }))

})
