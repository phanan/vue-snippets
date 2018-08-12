const CACHE_NAME = 'vue-snippets-cache-v3'
const urlsToCache = [
  '/'
]

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache)))
})

self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(response => {
    if (response) {
      return response
    }

    const fetchRequest = event.request.clone()

    return fetch(fetchRequest).then(response => {
        if(!response || response.status !== 200) {
          return response
        }

        caches.open(CACHE_NAME).then(cache => cache.put(event.request, response.clone()))

        return response
      }
    )
  }))
})
