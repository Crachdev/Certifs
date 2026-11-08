/**
 * Service Worker — Certifs Quiz
 * Stratégie : Network-first avec cache de secours pour les assets statiques.
 * Permet l'installation PWA + notifications push (Feature 12).
 */

const CACHE_NAME = "certifs-v11";

// Assets à précacher au premier install (shell minimal)
const PRECACHE = [
  "/Certifs/",
  "/Certifs/index.html",
  "/Certifs/engine/quiz.js",
  "/Certifs/engine/notifications.js",
  "/Certifs/icons/icon-192.png",
  "/Certifs/icons/icon-512.png",
  "/Certifs/manifest.json"
];

/* ── Install ── */
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE))
      .then(() => self.skipWaiting())
      .catch(() => self.skipWaiting()) // ne pas bloquer si un asset manque
  );
});

/* ── Activate ── */
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

/* ── Fetch : Network-first, fallback cache ── */
self.addEventListener("fetch", event => {
  // Ne pas intercepter les requêtes non-GET ni les API Firebase
  if (event.request.method !== "GET") return;
  if (event.request.url.includes("firestore") || event.request.url.includes("firebase")) return;
  if (event.request.url.includes("fonts.googleapis") || event.request.url.includes("fonts.gstatic")) return;

  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Mettre en cache si réponse valide
        if (response && response.status === 200 && response.type !== "opaque") {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});

/* ── Push notifications (Feature 12) ── */
self.addEventListener("message", event => {
  if (!event.data || event.data.type !== "SHOW_NOTIF") return;
  const { title, body, url } = event.data;
  event.waitUntil(
    self.registration.showNotification(title, {
      body: body || "Clique pour réviser →",
      icon: "/Certifs/icons/icon-192.png",
      badge: "/Certifs/icons/icon-192.png",
      tag: "certifs-daily",
      requireInteraction: false,
      data: { url }
    })
  );
});

self.addEventListener("notificationclick", event => {
  event.notification.close();
  const url = (event.notification.data && event.notification.data.url) || "/Certifs/";
  event.waitUntil(
    clients.matchAll({ type: "window", includeUncontrolled: true }).then(list => {
      for (const client of list) {
        if (client.url.includes("/Certifs/") && "focus" in client) {
          client.navigate(url);
          return client.focus();
        }
      }
      if (clients.openWindow) return clients.openWindow(url);
    })
  );
});
