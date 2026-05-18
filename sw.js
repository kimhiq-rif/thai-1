// Thai Trainer v1.5 self-destroying service worker.
// This removes old cached versions and does not intercept future requests.
self.addEventListener('install', event => { self.skipWaiting(); });
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k.startsWith('thai-trainer')).map(k => caches.delete(k)));
    await self.registration.unregister();
    const clientsList = await self.clients.matchAll({type:'window'});
    clientsList.forEach(client => client.navigate(client.url));
  })());
});
