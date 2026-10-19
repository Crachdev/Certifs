// firebase.js — Tracking des erreurs multi-appareils
// Chargé après firebase-config.js dans chaque page quiz

(function () {
  "use strict";

  // ── Constantes ──────────────────────────────────────────────────────────
  const FB_CDN = "https://www.gstatic.com/firebasejs/10.12.2/";

  // ── Init async ──────────────────────────────────────────────────────────
  let _db = null;
  let _ready = false;
  let _queue = []; // appels en attente pendant l'init

  async function initFirebase() {
    try {
      const { initializeApp, getApps } =
        await import(FB_CDN + "firebase-app.js");
      const { getFirestore, collection, doc, setDoc, getDocs,
              query, orderBy, serverTimestamp } =
        await import(FB_CDN + "firebase-firestore.js");

      // Évite double-init si le module est chargé plusieurs fois
      const app = getApps().length
        ? getApps()[0]
        : initializeApp(window.FIREBASE_CONFIG);

      _db = getFirestore(app);
      _ready = true;

      // Injecter les fonctions Firestore dans le scope du module
      window._FS = {
        db: _db,
        collection, doc, setDoc, getDocs, query, orderBy, serverTimestamp
      };

      // Vider la file d'attente
      _queue.forEach(fn => fn());
      _queue = [];
    } catch (e) {
      console.warn("[certifs] Firebase non disponible :", e.message);
    }
  }

  function whenReady(fn) {
    if (_ready) fn();
    else _queue.push(fn);
  }

  // ── Structure Firestore ──────────────────────────────────────────────────
  // Collection : errors
  // Document   : "<cert>__<day>-<idx>"  (ex: "clf7.v2__3-12")
  // Champs     :
  //   cert     : string  — clé de la cert (window.QKEY)
  //   day      : number
  //   idx      : number
  //   theme    : string
  //   question : string (premiers 120 chars)
  //   attempts : number — nb total de tentatives ratées
  //   lastFail : Timestamp
  //   firstFail: Timestamp
  //   successes: number — nb de fois réussi après avoir été raté
  //   lastPass : Timestamp | null

  function docId(cert, day, idx) {
    return cert.replace(/[^a-z0-9_]/gi, "_") + "__" + day + "-" + idx;
  }

  // ── logError(cert, day, idx, theme, question) ────────────────────────────
  // Appelé chaque fois qu'une réponse est fausse (hors session libre)
  window.logError = function (cert, day, idx, theme, question) {
    whenReady(async () => {
      if (!_db) return;
      const { db, collection, doc, setDoc, getDocs, query,
              serverTimestamp } = window._FS;
      const id = docId(cert, day, idx);
      const ref = doc(collection(db, "errors"), id);

      // Lire le doc existant pour incrémenter
      let existing = null;
      try {
        const snap = await getDocs(
          query(collection(db, "errors"))
        );
        snap.forEach(d => { if (d.id === id) existing = d.data(); });
      } catch (_) {}

      const now = serverTimestamp();
      const data = existing
        ? {
            attempts:  (existing.attempts  || 0) + 1,
            lastFail:  now,
            firstFail: existing.firstFail || now,
            successes: existing.successes  || 0,
            lastPass:  existing.lastPass   || null,
            // on ne remet pas à jour les champs stables
          }
        : {
            cert, day, idx,
            theme,
            question: String(question).slice(0, 120),
            attempts:  1,
            lastFail:  now,
            firstFail: now,
            successes: 0,
            lastPass:  null,
          };

      try {
        await setDoc(ref, data, { merge: true });
      } catch (e) {
        console.warn("[certifs] logError échoué :", e.message);
      }
    });
  };

  // ── logSuccess(cert, day, idx) ───────────────────────────────────────────
  // Appelé quand une question précédemment ratée est réussie
  window.logSuccess = function (cert, day, idx) {
    whenReady(async () => {
      if (!_db) return;
      const { db, collection, doc, setDoc, getDocs, query,
              serverTimestamp } = window._FS;
      const id = docId(cert, day, idx);
      const ref = doc(collection(db, "errors"), id);

      // Vérifier que le doc existe (on ne crée rien pour une réussite pure)
      let exists = false;
      try {
        const snap = await getDocs(query(collection(db, "errors")));
        snap.forEach(d => { if (d.id === id) exists = true; });
      } catch (_) {}

      if (!exists) return;

      try {
        await setDoc(ref, {
          successes: (window._FS._cache?.[id]?.successes || 0) + 1,
          lastPass:  serverTimestamp()
        }, { merge: true });
      } catch (e) {
        console.warn("[certifs] logSuccess échoué :", e.message);
      }
    });
  };

  // ── getErrors(cert) → Promise<Array> ────────────────────────────────────
  // Retourne tous les docs d'erreurs pour une cert donnée,
  // triés par nombre d'échecs décroissant
  window.getErrors = async function (cert) {
    if (!_ready || !_db) return [];
    try {
      const { db, collection, getDocs, query } = window._FS;
      const snap = await getDocs(query(collection(db, "errors")));
      const rows = [];
      snap.forEach(d => {
        const data = d.data();
        if (data.cert === cert) rows.push({ id: d.id, ...data });
      });
      rows.sort((a, b) => (b.attempts || 0) - (a.attempts || 0));
      return rows;
    } catch (e) {
      console.warn("[certifs] getErrors échoué :", e.message);
      return [];
    }
  };

  // ── Lancer l'init ────────────────────────────────────────────────────────
  initFirebase();
})();
