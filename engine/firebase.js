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

  // ── logSession ───────────────────────────────────────────────────────────
  // Enregistre une connexion dans Firestore
  // Collection : sessions
  // Document   : auto-id
  // Champs : pseudo, cert, connectedAt, ua (navigateur)
  window.logSession = function (cert, pseudo) {
    whenReady(async () => {
      if (!_db || !pseudo || pseudo === "Anonyme") return;
      try {
        await _db.collection("sessions").add({
          cert,
          pseudo: String(pseudo).slice(0, 30),
          connectedAt: firebase.firestore.FieldValue.serverTimestamp(),
          ua: navigator.userAgent.slice(0, 120)
        });
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
  window.loadProgression = async function (cert, pseudo) {
    if (!_ready || !_db || !pseudo || pseudo === "Anonyme") return null;
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
