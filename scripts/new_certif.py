#!/usr/bin/env python3
"""
new_certif.py — Générateur de nouvelle certification pour crachdev.github.io/Certifs/

Usage :
  python new_certif.py                        # mode interactif
  python new_certif.py --validate <dossier>  # valider un questions.js existant
  python new_certif.py --add-day <dossier> <N>  # vérifier qu'un jour N est rempli

Modèle : aws-clf-c02 (Cloud Practitioner)
"""

import os
import sys
import re
import json
import shutil
import argparse
import subprocess
from pathlib import Path

# ── Racine du repo ───────────────────────────────────────────────────────────
REPO = Path(__file__).parent.parent.resolve()


# ════════════════════════════════════════════════════════════════════════════
# COULEURS ACCENT PAR TYPE DE CERTIF
# ════════════════════════════════════════════════════════════════════════════
ACCENT_PRESETS = {
    "aws":        ("#e07e22", "#fdf0e0", "#ffaa55", "#3a2200"),  # orange AWS
    "azure":      ("#0078d4", "#e6f2fc", "#5ba4e7", "#002244"),  # bleu Azure
    "gcp":        ("#4285f4", "#e8f0fe", "#7baaf7", "#0d2050"),  # bleu GCP
    "terraform":  ("#844fba", "#f4eeff", "#b07fdf", "#2a0050"),  # violet Terraform
    "kubernetes": ("#326ce5", "#e6edfc", "#6e9af0", "#0a1a4a"),  # bleu K8s
    "docker":     ("#2496ed", "#e6f4fc", "#5cb3f3", "#062a44"),  # bleu Docker
    "default":    ("#2747c9", "#e6ebfb", "#8ea4ff", "#1f2a4d"),  # bleu générique
}

EMOJI_PRESETS = {
    "aws": "🛠", "azure": "☁️", "gcp": "🌐",
    "terraform": "🏗", "kubernetes": "⚙️", "docker": "🐳", "default": "📋",
}


def pick_accent(slug: str):
    for key in ACCENT_PRESETS:
        if key in slug.lower():
            return ACCENT_PRESETS[key], EMOJI_PRESETS.get(key, "📋")
    return ACCENT_PRESETS["default"], EMOJI_PRESETS["default"]


# ════════════════════════════════════════════════════════════════════════════
# TEMPLATE questions.js
# ════════════════════════════════════════════════════════════════════════════
def make_questions_js(cfg: dict) -> str:
    slug      = cfg["slug"]
    title     = cfg["title"]
    code      = cfg["code"]
    days      = cfg["days"]
    pass_score = cfg.get("pass_score", 70)
    exam_mins  = cfg.get("exam_mins", 90)
    rules      = cfg.get("rules", [])
    doc_url    = cfg.get("doc_url", "https://docs.aws.amazon.com/")
    has_fiche  = cfg.get("has_fiche", True)

    # Bloc rules
    rules_js = ""
    for label, value in rules:
        rules_js += f'\n    ["{label}","{value}"],'
    if rules_js:
        rules_js = rules_js.rstrip(",")

    # Bloc QUIZ_PLAN (un objet par jour, sections vides à remplir)
    plan_items = []
    for d in range(1, days + 1):
        plan_items.append(
            f' {{d:{d},theme:"À définir — Jour {d}",dom:["Domaine X"],time:"≈ 1 h lecture + 1 h quiz",\n'
            f'  sections:[],\n'
            f'  read:[],\n'
            f'  links:[["Documentation officielle",_G]],\n'
            f'  focus:[]}}'
        )
    plan_js = ",\n".join(plan_items)

    # Bloc QDATA (tableaux vides par jour)
    qdata_items = []
    for d in range(1, days + 1):
        qdata_items.append(f"\n  {d}: [\n    // J{d} — À remplir\n  ]")
    qdata_js = ",".join(qdata_items)

    fiche_line = f'\n  fiche:"fiche.html",' if has_fiche else ""

    return f"""// Questions {title} — {code}
// Format: window.QDATA[jour] = [{{t, q, o, a, e}}, ...]
// t: thème  q: question (FR)  o: options ["A. ...", ...]  a: index réponse (0-based, ou tableau)  e: explication

window.QKEY = "{slug}";

// ── Métadonnées examen ──────────────────────────────────────────────────────
window.QUIZ_META={{
  title:"{title}",
  code:"{code}",
  exam:"{title} {code}",
  passScore:{pass_score},
  examMins:{exam_mins},{fiche_line}
  rules:[{rules_js}
  ],
  totalQ: 0
}};

// ── Plan de révision {days} jours ────────────────────────────────────────────────
const _G="{doc_url}";
window.QUIZ_PLAN=[
{plan_js}
];

// ── Questions ────────────────────────────────────────────────────────────────
window.QDATA = {{{qdata_js}

}};
"""


# ════════════════════════════════════════════════════════════════════════════
# TEMPLATE index.html  (basé sur aws-clf-c02/index.html)
# ════════════════════════════════════════════════════════════════════════════
def make_index_html(cfg: dict, accent_colors: tuple, emoji: str) -> str:
    ac_light, ac_soft_light, ac_dark, ac_soft_dark = accent_colors
    title  = cfg["title"]
    code   = cfg["code"]
    days   = cfg["days"]
    slug   = cfg["slug"]

    return f"""<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="theme-color" content="#232f3e">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="default">
<meta name="apple-mobile-web-app-title" content="Certifs">
<link rel="manifest" href="../manifest.json">
<link rel="apple-touch-icon" href="../icons/icon-192.png">
<title>Sprint {title}</title>
<link rel="icon" href="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2032%2032%22%3E%3Ctext%20y=%2228%22%20font-size=%2228%22%3E{emoji}%3C/text%3E%3C/svg%3E">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700&family=Public+Sans:wght@400;500;600&family=JetBrains+Mono:wght@500&display=swap">
<style>
:root{{
  --paper:#f4f6f8; --sheet:#ffffff; --ink:#15202b; --muted:#5b6876; --line:#d9e0e7;
  --accent:{ac_light}; --accent-soft:{ac_soft_light}; --ok:#1d7a4f; --ok-soft:#e3f3ea; --ko:#b4372f; --ko-soft:#f9e6e4;
  --f-display:"Bricolage Grotesque", "Avenir Next", system-ui, sans-serif;
  --f-body:"Public Sans", "Segoe UI", system-ui, sans-serif;
  --f-mono:"JetBrains Mono", ui-monospace, Menlo, monospace;
}}
@media (prefers-color-scheme: dark){{:root:not([data-theme="light"]){{
  --paper:#0f151c; --sheet:#17202a; --ink:#e5ebf1; --muted:#97a4b2; --line:#2b3744;
  --accent:{ac_dark}; --accent-soft:{ac_soft_dark}; --ok:#5ccf95; --ok-soft:#163327; --ko:#f08a80; --ko-soft:#3a1d1b; color-scheme:dark}}}}
:root[data-theme="dark"]{{
  --paper:#0f151c; --sheet:#17202a; --ink:#e5ebf1; --muted:#97a4b2; --line:#2b3744;
  --accent:{ac_dark}; --accent-soft:{ac_soft_dark}; --ok:#5ccf95; --ok-soft:#163327; --ko:#f08a80; --ko-soft:#3a1d1b; color-scheme:dark}}
:root[data-theme="light"]{{
  --paper:#f4f6f8; --sheet:#ffffff; --ink:#15202b; --muted:#5b6876; --line:#d9e0e7;
  --accent:{ac_light}; --accent-soft:{ac_soft_light}; color-scheme:light}}
*,*::before,*::after{{box-sizing:border-box;margin:0;padding:0}}
body{{background:var(--paper);color:var(--ink);font-family:var(--f-body);font-size:16px;line-height:1.6;min-height:100vh}}
</style>
</head>
<body>
<script>
// Thème
(function(){{const t=localStorage.getItem("theme");if(t)document.documentElement.setAttribute("data-theme",t)}})();
</script>
<script src="../engine/theme.js"></script>
<script src="questions.js"></script>
<script src="../engine/quiz.js"></script>
</body>
</html>
"""


# ════════════════════════════════════════════════════════════════════════════
# VALIDATION questions.js via Node.js
# ════════════════════════════════════════════════════════════════════════════
def validate_questions_js(path: Path) -> dict:
    """Valide un questions.js via Node.js. Retourne un dict avec résultat."""
    code = path.read_text(encoding="utf-8")
    node_script = """
const window = {};
try {
  eval(require('fs').readFileSync(process.argv[2], 'utf8'));
  const d = window.QDATA;
  const days = Object.keys(d).map(Number).sort((a,b)=>a-b);
  let total = 0;
  const details = [];
  days.forEach(n => {
    const count = d[n].length;
    total += count;
    // Vérifier la structure de chaque question
    d[n].forEach((q, i) => {
      if (!q.t) details.push('J'+n+' q'+(i+1)+': champ t manquant');
      if (!q.q) details.push('J'+n+' q'+(i+1)+': champ q manquant');
      if (!Array.isArray(q.o) || q.o.length < 2) details.push('J'+n+' q'+(i+1)+': champ o invalide');
      if (q.a === undefined || q.a === null) details.push('J'+n+' q'+(i+1)+': champ a manquant');
      if (!q.e) details.push('J'+n+' q'+(i+1)+': champ e manquant');
    });
    console.log('J'+n+': '+count+' questions');
  });
  console.log('TOTAL: '+total);
  console.log('QKEY: '+window.QKEY);
  console.log('totalQ_meta: '+window.QUIZ_META.totalQ);
  if (window.QUIZ_META.totalQ !== total) console.log('WARN: totalQ_meta ('+window.QUIZ_META.totalQ+') !== total reel ('+total+')');
  if (details.length > 0) { console.log('ERRORS:'); details.forEach(e => console.log('  '+e)); }
  else { console.log('OK: structure valide'); }
} catch(e) {
  console.log('SYNTAX_ERROR: '+e.message);
  process.exit(1);
}
"""
    script_path = Path("/tmp/validate_qs.js")
    script_path.write_text(node_script)
    result = subprocess.run(
        ["node", str(script_path), str(path)],
        capture_output=True, text=True
    )
    return {
        "stdout": result.stdout.strip(),
        "stderr": result.stderr.strip(),
        "ok": result.returncode == 0,
    }


# ════════════════════════════════════════════════════════════════════════════
# COLLECTE INTERACTIVE
# ════════════════════════════════════════════════════════════════════════════
def ask(prompt, default=None):
    if default:
        val = input(f"  {prompt} [{default}] : ").strip()
        return val if val else default
    while True:
        val = input(f"  {prompt} : ").strip()
        if val:
            return val
        print("  ⚠ Champ obligatoire.")


def collect_config() -> dict:
    print("\n" + "═" * 60)
    print("  🎓 Nouveau quiz de certification")
    print("═" * 60)

    slug      = ask("Slug du dossier (ex: aws-sysops-c02, az-104)")
    title     = ask("Titre court (ex: AWS SysOps Administrator)")
    code      = ask("Code examen (ex: SOA-C02)")
    days      = int(ask("Nombre de jours de révision", "7"))
    pass_score = int(ask("Score de réussite (%)", "70"))
    exam_mins  = int(ask("Durée de l'examen (minutes)", "90"))
    doc_url   = ask("URL doc officielle principale")

    print("\n  Règles de l'examen (laissez vide pour terminer) :")
    rules = []
    while True:
        label = input("    Label (ex: '65 q · 90 min') : ").strip()
        if not label:
            break
        value = input("    Valeur (ex: 'dont 15 non notées') : ").strip()
        rules.append((label, value))

    has_fiche = input("\n  Créer un fichier fiche.html vide ? [O/n] : ").strip().lower() != "n"

    return {
        "slug": slug,
        "title": title,
        "code": code,
        "days": days,
        "pass_score": pass_score,
        "exam_mins": exam_mins,
        "doc_url": doc_url,
        "rules": rules,
        "has_fiche": has_fiche,
    }


# ════════════════════════════════════════════════════════════════════════════
# CRÉATION DU DOSSIER
# ════════════════════════════════════════════════════════════════════════════
def create_certif(cfg: dict):
    slug = cfg["slug"]
    dest = REPO / slug

    if dest.exists():
        print(f"\n  ⚠ Le dossier '{slug}' existe déjà dans le repo.")
        confirm = input("  Écraser ? [o/N] : ").strip().lower()
        if confirm != "o":
            print("  Annulé.")
            return

    dest.mkdir(exist_ok=True)
    print(f"\n  📁 Création de {dest}")

    # questions.js
    qs_path = dest / "questions.js"
    qs_path.write_text(make_questions_js(cfg), encoding="utf-8")
    print(f"  ✅ questions.js créé")

    # index.html
    accent_colors, emoji = pick_accent(slug)
    idx_path = dest / "index.html"
    idx_path.write_text(make_index_html(cfg, accent_colors, emoji), encoding="utf-8")
    print(f"  ✅ index.html créé  (accent {accent_colors[0]}, emoji {emoji})")

    # fiche.html (vide, à remplir)
    if cfg.get("has_fiche"):
        fiche_path = dest / "fiche.html"
        fiche_path.write_text(
            f"<!doctype html><html lang='fr'><head><meta charset='utf-8'>"
            f"<title>Fiche {cfg['title']}</title></head><body>"
            f"<h1>Fiche {cfg['title']} ({cfg['code']})</h1>"
            f"<p>À compléter.</p></body></html>\n",
            encoding="utf-8"
        )
        print(f"  ✅ fiche.html créé (vide, à compléter)")

    # README.md
    readme_path = dest / "README.md"
    readme_path.write_text(
        f"# {cfg['title']} ({cfg['code']})\n\n"
        f"Quiz de révision — {cfg['days']} jours.\n\n"
        f"Doc officielle : {cfg['doc_url']}\n",
        encoding="utf-8"
    )
    print(f"  ✅ README.md créé")

    # Validation syntaxe
    print(f"\n  🔍 Validation Node.js...")
    result = validate_questions_js(qs_path)
    if result["ok"]:
        print(f"  ✅ Syntaxe valide\n{result['stdout']}")
    else:
        print(f"  ❌ Erreur Node.js :\n{result['stderr']}\n{result['stdout']}")

    # Rappel : entrée index.html principal
    print(f"""
  ─────────────────────────────────────────────────────
  📌 N'oublie pas d'ajouter l'entrée dans index.html :

  <a href="{slug}/index.html" class="cert-card" data-qkey="{slug}">
    <div class="card-stripe" style="background:{accent_colors[0]}"></div>
    <div class="card-body">
      <div class="card-badge">{cfg['title']} · {cfg['code']}</div>
      <h2 class="card-title">{cfg['title']}</h2>
      <p class="card-sub">{cfg['code']}</p>
    </div>
    <div class="card-progress" id="prog-{slug}" hidden>...</div>
    <div class="card-foot"><span>0 questions · {cfg['days']} jours</span>
      <span class="pill" id="pill-{slug}">Quiz</span></div>
  </a>
  ─────────────────────────────────────────────────────
""")


# ════════════════════════════════════════════════════════════════════════════
# MODE --validate
# ════════════════════════════════════════════════════════════════════════════
def cmd_validate(folder: str):
    path = REPO / folder / "questions.js"
    if not path.exists():
        print(f"❌ Fichier introuvable : {path}")
        sys.exit(1)
    print(f"🔍 Validation de {path}")
    result = validate_questions_js(path)
    print(result["stdout"])
    if result["stderr"]:
        print(result["stderr"])
    sys.exit(0 if result["ok"] else 1)


# ════════════════════════════════════════════════════════════════════════════
# MODE --add-day
# ════════════════════════════════════════════════════════════════════════════
def cmd_add_day(folder: str, day: int):
    path = REPO / folder / "questions.js"
    if not path.exists():
        print(f"❌ Fichier introuvable : {path}")
        sys.exit(1)

    node_script = f"""
const window = {{}};
eval(require('fs').readFileSync(process.argv[2], 'utf8'));
const d = window.QDATA;
const n = {day};
if (!d[n]) {{ console.log('MISSING: QDATA['+n+'] inexistant'); process.exit(1); }}
if (d[n].length === 0) {{ console.log('EMPTY: QDATA['+n+'] est vide'); process.exit(1); }}
console.log('OK: J'+n+' — '+d[n].length+' questions');
process.exit(0);
"""
    script_path = Path("/tmp/check_day.js")
    script_path.write_text(node_script)
    result = subprocess.run(["node", str(script_path), str(path)], capture_output=True, text=True)
    print(result.stdout.strip())
    if result.stderr:
        print(result.stderr.strip())
    sys.exit(result.returncode)


# ════════════════════════════════════════════════════════════════════════════
# MAIN
# ════════════════════════════════════════════════════════════════════════════
def main():
    parser = argparse.ArgumentParser(description="Générateur de quiz certification")
    parser.add_argument("--validate", metavar="DOSSIER",
                        help="Valider le questions.js d'un dossier existant")
    parser.add_argument("--add-day", nargs=2, metavar=("DOSSIER", "JOUR"),
                        help="Vérifier que QDATA[JOUR] est rempli")
    args = parser.parse_args()

    if args.validate:
        cmd_validate(args.validate)
    elif args.add_day:
        cmd_add_day(args.add_day[0], int(args.add_day[1]))
    else:
        cfg = collect_config()
        create_certif(cfg)


if __name__ == "__main__":
    main()
