// firebase.js — Tracking des erreurs multi-appareils (Firebase compat mode)
// Chargé après firebase-config.js dans chaque page quiz.
// Utilise les scripts compat (pas d'import() dynamique → compatible GitHub Pages CSP)

(function () {
  "use strict";

  const COMPAT_BASE = "https://www.gstatic.com/firebasejs/10.12.2/";

  let _db = null;
  let _ready = false;
  let _queue = [];

  function whenReady(fn) {
    if (_ready) fn();
    else _queue.push(fn);
  }

  function flushQueue() {
    _queue.forEach(fn => { try { fn(); } catch(e){} });
    _queue = [];
  }

  // ── Chargement des scripts Firebase compat via <script> tags ─────────────
  // GitHub Pages autorise gstatic.com via script src (pas via import())
  function loadScript(src) {
    return new Promise((resolve, reject) => {
      // Éviter le double chargement
      if (document.querySelector('script[src="' + src + '"]')) { resolve(); return; }
      const s = document.createElement("script");
      s.src = src;
      s.onload = resolve;
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }

  async function initFirebase() {
    if (!window.FIREBASE_CONFIG) {
      console.warn("[certifs] FIREBASE_CONFIG absent — tracking désactivé");
      return;
    }
    try {
      // Charger Firebase App + Firestore en mode compat (SDK v9 compat layer)
      await loadScript(COMPAT_BASE + "firebase-app-compat.js");
      await loadScript(COMPAT_BASE + "firebase-firestore-compat.js");

      // Éviter la double initialisation
      if (!firebase.apps.length) {
        firebase.initializeApp(window.FIREBASE_CONFIG);
      }

      _db = firebase.firestore();
      _ready = true;
      flushQueue();
    } catch (e) {
      console.warn("[certifs] Firebase init échoué :", e.message);
    }
  }

  // ── Structure Firestore ───────────────────────────────────────────────────
  // Collection : errors
  // Document   : "<cert>__<day>-<idx>"  (ex: "ai901__3-12")
  // Champs : cert, day, idx, theme, question, attempts, lastFail, firstFail,
  //          successes, lastPass

  function docId(cert, day, idx) {
    return cert.replace(/[^a-z0-9_]/gi, "_") + "__" + day + "-" + idx;
  }

  // ── logError ─────────────────────────────────────────────────────────────
  window.logError = function (cert, day, idx, theme, question, pseudo) {
    whenReady(async () => {
      if (!_db) return;
      const id = docId(cert, day, idx);
      const ref = _db.collection("errors").doc(id);
      try {
        const snap = await ref.get();
        const userField = pseudo ? { user: String(pseudo).slice(0, 30) } : {};
        if (snap.exists) {
          await ref.update({
            attempts:  firebase.firestore.FieldValue.increment(1),
            lastFail:  firebase.firestore.FieldValue.serverTimestamp(),
            ...userField
          });
        } else {
          await ref.set({
            cert, day, idx,
            theme,
            question: String(question).slice(0, 120),
            attempts:  1,
            lastFail:  firebase.firestore.FieldValue.serverTimestamp(),
            firstFail: firebase.firestore.FieldValue.serverTimestamp(),
            successes: 0,
            lastPass:  null,
            ...userField
          });
        }
      } catch (e) {
        console.warn("[certifs] logError échoué :", e.message);
      }
    });
  };

  // ── logSuccess ───────────────────────────────────────────────────────────
  window.logSuccess = function (cert, day, idx, pseudo) {
    whenReady(async () => {
      if (!_db) return;
      const id = docId(cert, day, idx);
      const ref = _db.collection("errors").doc(id);
      try {
        const snap = await ref.get();
        if (!snap.exists) return;
        const userField = pseudo ? { user: String(pseudo).slice(0, 30) } : {};
        await ref.update({
          successes: firebase.firestore.FieldValue.increment(1),
          lastPass:  firebase.firestore.FieldValue.serverTimestamp(),
          ...userField
        });
      } catch (e) {
        console.warn("[certifs] logSuccess échoué :", e.message);
      }
    });
  };

  // ── Utilitaire : parse le User-Agent ────────────────────────────────────
  function parseDevice(ua) {
    // OS
    let os = "Unknown";
    if (/Windows NT/.test(ua))         os = "Windows";
    else if (/iPhone|iPad/.test(ua))   os = /iPhone/.test(ua) ? "iOS (iPhone)" : "iOS (iPad)";
    else if (/Android/.test(ua))       os = "Android";
    else if (/Macintosh|Mac OS X/.test(ua)) os = "macOS";
    else if (/Linux/.test(ua))         os = "Linux";

    // Type d'appareil
    let type = "desktop";
    if (/Mobi|Android|iPhone/.test(ua))          type = "mobile";
    else if (/iPad|Tablet/.test(ua))             type = "tablet";

    // Navigateur
    let browser = "Unknown";
    if (/Edg\//.test(ua))             browser = "Edge";
    else if (/OPR\/|Opera/.test(ua))  browser = "Opera";
    else if (/Firefox\//.test(ua))    browser = "Firefox";
    else if (/Chrome\//.test(ua))     browser = "Chrome";
    else if (/Safari\//.test(ua))     browser = "Safari";

    // Marque (mobile)
    let brand = null;
    if (/iPhone|iPad/.test(ua))                                brand = "Apple";
    else if (/Samsung/.test(ua))                               brand = "Samsung";
    else if (/Huawei/.test(ua))                                brand = "Huawei";
    else if (/Xiaomi|MIUI/.test(ua))                           brand = "Xiaomi";
    else if (/Pixel/.test(ua))                                 brand = "Google";
    else if (/OnePlus/.test(ua))                               brand = "OnePlus";
    else if (/Macintosh|Mac OS X/.test(ua) && type === "desktop") brand = "Apple";

    return { os, type, browser, ...(brand ? { brand } : {}) };
  }

  // ── Utilitaire : récupère l'IP publique (best-effort, timeout 3s) ────────
  async function fetchIP() {
    try {
      const ctrl = new AbortController();
      const tid = setTimeout(() => ctrl.abort(), 3000);
      const r = await fetch("https://api.ipify.org?format=json", { signal: ctrl.signal });
      clearTimeout(tid);
      if (!r.ok) return null;
      const data = await r.json();
      return data.ip || null;
    } catch (e) {
      return null;
    }
  }

  // ── logSession ───────────────────────────────────────────────────────────
  // Enregistre une connexion dans Firestore
  // Collection : sessions
  // Document   : auto-id
  // Champs : pseudo, cert, connectedAt, ua, ip, os, type, browser, brand?
  window.logSession = function (cert, pseudo) {
    whenReady(async () => {
      if (!_db || !pseudo || pseudo === "Anonyme") return;
      try {
        const ua = navigator.userAgent;
        const device = parseDevice(ua);
        const ip = await fetchIP(); // best-effort, peut être null
        const doc = {
          cert,
          pseudo:      String(pseudo).slice(0, 30),
          connectedAt: firebase.firestore.FieldValue.serverTimestamp(),
          ua:          ua.slice(0, 160),
          os:          device.os,
          deviceType:  device.type,
          browser:     device.browser,
        };
        if (device.brand) doc.brand = device.brand;
        if (ip)           doc.ip    = ip;
        await _db.collection("sessions").add(doc);
      } catch (e) {
        console.warn("[certifs] logSession échoué :", e.message);
      }
    });
  };

  // ── saveProgression ──────────────────────────────────────────────────────
  // Sauvegarde store.r dans Firestore
  // Collection : progression
  // Document   : "<pseudo>__<cert>"  (ex: "RB__az802.v1")
  window.saveProgression = function (cert, pseudo, results) {
    whenReady(async () => {
      if (!_db || !pseudo || pseudo === "Anonyme") return;
      const docId = String(pseudo).slice(0, 30).replace(/[^a-z0-9_-]/gi, "_") + "__" + cert;
      try {
        await _db.collection("progression").doc(docId).set({
          cert,
          pseudo: String(pseudo).slice(0, 30),
          results, // objet { "1-0": 1, "1-1": 0, … }
          updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        }, { merge: false });
      } catch (e) {
        console.warn("[certifs] saveProgression échoué :", e.message);
      }
    });
  };

  // ── loadProgression ──────────────────────────────────────────────────────
  // Retourne store.r depuis Firestore (ou null si absent)
  // Attend que Firebase soit prêt (max 8s) avant de lire
  window.loadProgression = async function (cert, pseudo) {
    if (!pseudo || pseudo === "Anonyme") return null;
    // Attendre que Firebase soit prêt si ce n'est pas encore le cas
    if (!_ready) {
      await new Promise((resolve) => {
        const start = Date.now();
        const check = () => {
          if (_ready) { resolve(); return; }
          if (Date.now() - start > 8000) { resolve(); return; } // timeout 8s
          setTimeout(check, 200);
        };
        check();
      });
    }
    if (!_ready || !_db) return null;
    const docId = String(pseudo).slice(0, 30).replace(/[^a-z0-9_-]/gi, "_") + "__" + cert;
    try {
      const snap = await _db.collection("progression").doc(docId).get();
      if (snap.exists) return snap.data().results || null;
      return null;
    } catch (e) {
      console.warn("[certifs] loadProgression échoué :", e.message);
      return null;
    }
  };

  // ── getErrors ────────────────────────────────────────────────────────────
  window.getErrors = async function (cert) {
    if (!_ready || !_db) return [];
    try {
      const snap = await _db.collection("errors")
        .where("cert", "==", cert)
        .orderBy("attempts", "desc")
        .get();
      return snap.docs.map(d => ({ id: d.id, ...d.data() }));
    } catch (e) {
      // Fallback sans index (orderBy peut nécessiter un index Firestore)
      try {
        const snap2 = await _db.collection("errors")
          .where("cert", "==", cert)
          .get();
        const rows = snap2.docs.map(d => ({ id: d.id, ...d.data() }));
        rows.sort((a, b) => (b.attempts || 0) - (a.attempts || 0));
        return rows;
      } catch(e2) {
        console.warn("[certifs] getErrors échoué :", e2.message);
        return [];
      }
    }
  };

  // ── Lancer l'init au chargement du DOM ───────────────────────────────────
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initFirebase);
  } else {
    initFirebase();
  }

})();
