/**
 * engine/theme.js — Gestion du thème clair/sombre
 * Chargé par index.html (root) et par chaque certif/index.html
 */

const THEME_KEY = "certifs.theme";

function getTheme() {
  try { return localStorage.getItem(THEME_KEY) || ""; } catch(e) { return ""; }
}

function setThemeStorage(t) {
  try { localStorage.setItem(THEME_KEY, t); } catch(e) {}
}

function applyTheme(t) {
  if (t === "dark") document.documentElement.setAttribute("data-theme", "dark");
  else if (t === "light") document.documentElement.setAttribute("data-theme", "light");
  else document.documentElement.removeAttribute("data-theme");
  updateThemeBtn();
}

function updateThemeBtn() {
  const btn = document.getElementById("themeToggle");
  if (!btn) return;
  const cur = document.documentElement.getAttribute("data-theme") || "";
  const isDark = cur === "dark" || (cur === "" && window.matchMedia("(prefers-color-scheme:dark)").matches);
  btn.textContent = isDark ? "☀️" : "🌙";
  btn.title = isDark ? "Passer en mode clair" : "Passer en mode sombre";
}

function toggleTheme() {
  const cur = document.documentElement.getAttribute("data-theme") || "";
  const isDark = cur === "dark" || (cur === "" && window.matchMedia("(prefers-color-scheme:dark)").matches);
  const next = isDark ? "light" : "dark";
  setThemeStorage(next);
  applyTheme(next);
}

// Init au chargement
(function initTheme() {
  const saved = getTheme();
  if (saved) applyTheme(saved); else updateThemeBtn();
  window.matchMedia("(prefers-color-scheme:dark)").addEventListener("change", updateThemeBtn);
  // Brancher le bouton si déjà dans le DOM, sinon attendre DOMContentLoaded
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function() {
      const btn = document.getElementById("themeToggle");
      if (btn) btn.onclick = toggleTheme;
    });
  } else {
    const btn = document.getElementById("themeToggle");
    if (btn) btn.onclick = toggleTheme;
  }
})();
