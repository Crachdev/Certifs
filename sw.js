/**
 * Service Worker — Certifs Quiz
 * Stratégie : Network-first avec cache de secours pour les assets statiques.
 * Permet l'installation PWA + notifications push (Feature 12).
 */

const CACHE_NAME = "certifs-v12";

// Assets à précacher au premier install (shell complet)
const PRECACHE = [
  "/Certifs/",
  "/Certifs/index.html",
  "/Certifs/engine/quiz.js",
  "/Certifs/engine/notifications.js",
  "/Certifs/icons/icon-192.png",
  "/Certifs/icons/icon-512.png",
  "/Certifs/manifest.json",
  // AI-900 (retirée)
  "/Certifs/ai-900-azure-ai-fundamentals/index.html",
  "/Certifs/ai-900-azure-ai-fundamentals/questions.js",
  "/Certifs/ai-900-azure-ai-fundamentals/fiche.html",
  // AI-901
  "/Certifs/ai-901-azure-ai-fundamentals/index.html",
  "/Certifs/ai-901-azure-ai-fundamentals/questions.js",
  "/Certifs/ai-901-azure-ai-fundamentals/fiche.html",
  // AWS AI Practitioner
  "/Certifs/aws-ai-practitioner/index.html",
  "/Certifs/aws-ai-practitioner/questions.js",
  "/Certifs/aws-ai-practitioner/fiche.html",
  // AWS CLF-C02
  "/Certifs/aws-clf-c02/index.html",
  "/Certifs/aws-clf-c02/questions.js",
  "/Certifs/aws-clf-c02/fiche.html",
  // AZ-802
  "/Certifs/az-802-windows-server/index.html",
  "/Certifs/az-802-windows-server/questions.js",
  "/Certifs/az-802-windows-server/fiche.html",
  // AZ-900
  "/Certifs/az-900-azure-fundamentals/index.html",
  "/Certifs/az-900-azure-fundamentals/questions.js",
  "/Certifs/az-900-azure-fundamentals/fiche.html",
  // GitHub Foundations
  "/Certifs/github-foundations/index.html",
  "/Certifs/github-foundations/questions.js",
  "/Certifs/github-foundations/fiche.html",
  // Google Cloud Digital Leader
  "/Certifs/google-cloud-digital-leader/index.html",
  "/Certifs/google-cloud-digital-leader/questions.js",
  "/Certifs/google-cloud-digital-leader/fiche.html",
  // MS-900
  "/Certifs/ms-900-microsoft-365/index.html",
  "/Certifs/ms-900-microsoft-365/questions.js",
  "/Certifs/ms-900-microsoft-365/fiche.html",
  // SC-900
  "/Certifs/sc-900-security-compliance-identity/index.html",
  "/Certifs/sc-900-security-compliance-identity/questions.js",
  "/Certifs/sc-900-security-compliance-identity/fiche.html"
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
