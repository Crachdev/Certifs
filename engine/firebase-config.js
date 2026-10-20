// firebase-config.js — Configuration Firebase pour le tracking des erreurs
// ⚠️  CE FICHIER EST DANS .gitignore — Ne jamais committer les clés API !
//
// Pour activer le tracking multi-appareils :
//   1. Ce fichier doit être présent localement (jamais pushé sur GitHub)
//   2. Chaque page quiz doit charger (dans cet ordre) :
//        <script src="../engine/firebase-config.js"></script>
//        <script src="../engine/firebase.js"></script>
//        <script src="../engine/quiz.js"></script>
//
// Firestore : projet certifs-quiz-rb, collection "errors"

window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyCrGHp8XXr8HfMpRJELVpVX6X97MOIh2Nc",
  authDomain: "certifs-quiz-rb.firebaseapp.com",
  projectId: "certifs-quiz-rb",
  storageBucket: "certifs-quiz-rb.firebasestorage.app",
  messagingSenderId: "590989073340",
  appId: "1:590989073340:web:1082aefb5e7b6eca63ea80"
};
