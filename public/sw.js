// Pitmaster Log service worker. Core routes are cached after a successful response.
const CACHE = "pitmasterlog-v2";
const SHELL = ["/", "/log/", "/tools/", "/guides/", "/manifest.webmanifest"];

async function cacheShell() {
  const cache = await caches.open(CACHE);
  await Promise.all(
    SHELL.map(async (path) => {
      try {
        const response = await fetch(new Request(path, { cache: "reload" }));
        if (!response.ok) return false;
        await cache.put(path, response);
        return true;
      } catch {
        // A single unavailable route should not block the remaining app shell.
        return false;
      }
    }),
  );
}

async function cacheSuccessfulResponse(request, response) {
  if (!response.ok) return;
  try {
    const cache = await caches.open(CACHE);
    await cache.put(request, response.clone());
  } catch {
    // Cache storage is an enhancement; preserve the successful network response.
  }
}

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      await cacheShell();
      await self.skipWaiting();
    })(),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys().catch(() => []);
      await Promise.all(
        keys.filter((key) => key !== CACHE).map((key) => caches.delete(key).catch(() => false)),
      );
      await self.clients.claim();
    })(),
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return; // Don't cache cross-origin fonts, analytics, or ads.

  // Network-first for navigations, then the requested cached page, then the home shell.
  if (request.mode === "navigate") {
    event.respondWith(
      (async () => {
        try {
          const response = await fetch(request);
          await cacheSuccessfulResponse(request, response);
          return response;
        } catch {
          return (await caches.match(request)) || (await caches.match("/")) || Response.error();
        }
      })(),
    );
    return;
  }

  // Cache-first for same-origin static assets.
  event.respondWith(
    (async () => {
      const cached = await caches.match(request);
      if (cached) return cached;
      try {
        const response = await fetch(request);
        await cacheSuccessfulResponse(request, response);
        return response;
      } catch {
        return Response.error();
      }
    })(),
  );
});
