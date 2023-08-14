self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('cache-name').then(cache => {
        return cache.addAll([
          '/',
          '/index.html',
          '/main.js',
          '/assets/icon.png', // Añade los recursos que quieras cachear
          // ...otros archivos
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request);
      })
    );
  });
  