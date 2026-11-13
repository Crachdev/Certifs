#!/usr/bin/env python3
"""
generate_questions.py — Génère les questions pour une certif scaffoldée

Usage :
  python generate_questions.py <dossier>          # génère tous les jours manquants
  python generate_questions.py <dossier> --day N  # génère uniquement le jour N
  python generate_questions.py <dossier> --regen  # regénère même si déjà rempli

Le script :
  1. Lit le QUIZ_PLAN du questions.js (thème, domaines, focus, liens)
  2. Pour chaque jour vide, appelle l'API Claude pour générer ~20 questions
  3. Injecte les questions dans window.QDATA du fichier
  4. Valide la syntaxe Node.js à la fin
  5. Met à jour totalQ dans QUIZ_META

Format de sortie (compatible avec le moteur quiz.js, basé sur aws-clf-c02) :
  window.QDATA[N] = [
    {id:"<qkey>-jN-X", q:"...", choices:["A. ...","B. ...","C. ...","D. ..."], answer:0, exp:"..."},
    ...
  ];

Prérequis :
  - ANTHROPIC_API_KEY dans l'environnement (ou fichier .env à la racine du repo)
  - pip install anthropic python-dotenv
"""

import os
import sys
import re
import json
import time
import argparse
import subprocess
from pathlib import Path

# ── Racine du repo ───────────────────────────────────────────────────────────
REPO = Path(__file__).parent.parent.resolve()

# ── Constantes ───────────────────────────────────────────────────────────────
QUESTIONS_PER_DAY = 20          # nombre de questions générées par jour
MODEL             = "claude-opus-4-5"   # modèle à utiliser
MAX_RETRIES       = 3           # tentatives si échec de parsing
DELAY_BETWEEN_DAYS = 1.0        # secondes entre chaque appel API (rate limit)


# ════════════════════════════════════════════════════════════════════════════
# CHARGEMENT API
# ════════════════════════════════════════════════════════════════════════════

def load_api_key():
    """Cherche ANTHROPIC_API_KEY dans l'env ou dans un .env à la racine."""
    key = os.environ.get("ANTHROPIC_API_KEY")
    if key:
        return key
    env_file = REPO / ".env"
    if env_file.exists():
        for line in env_file.read_text().splitlines():
            if line.startswith("ANTHROPIC_API_KEY="):
                return line.split("=", 1)[1].strip().strip('"').strip("'")
    return None


def get_client():
    """Retourne l'API key Anthropic (utilise urllib stdlib, pas de dépendance externe)."""
    api_key = load_api_key()
    if not api_key:
        print("\n  ❌ ANTHROPIC_API_KEY introuvable.")
        print("     Exporte-la : export ANTHROPIC_API_KEY=sk-ant-...")
        print("     Ou crée un fichier .env à la racine du repo avec :")
        print("     ANTHROPIC_API_KEY=sk-ant-...")
        sys.exit(1)
    return api_key


# ════════════════════════════════════════════════════════════════════════════
# PARSING DU questions.js EXISTANT
# ════════════════════════════════════════════════════════════════════════════

def parse_questions_js(path: Path) -> dict:
    """
    Exécute le questions.js via Node.js et extrait :
      - qkey, meta (title, code, passScore, examMins, totalQ)
      - plan (liste de jours avec thème/focus/links)
      - qdata (dict jour → liste de questions déjà présentes)
    """
    # Utiliser --stack-size élevé + passer le chemin en argument
    js_code = f"""
const window = {{}};
const fs = require('fs');
const src = fs.readFileSync({json.dumps(str(path))}, 'utf8');
// Remplacer les accès window.QDATA[N] par window.QDATA = window.QDATA || {{}}; window.QDATA[N]
const patched = 'window.QDATA = window.QDATA || {{}}; window.QUIZ_PLAN = window.QUIZ_PLAN || [];\\n' + src;
(new Function('window', patched))(window);
process.stdout.write(JSON.stringify({{
  qkey: window.QKEY,
  meta: window.QUIZ_META,
  plan: window.QUIZ_PLAN,
  qdata: window.QDATA
}}));
"""
    try:
        result = subprocess.run(
            ["node", "--stack-size=65536", "-e", js_code],
            capture_output=True, text=True, timeout=30
        )

        if result.returncode != 0:
            print(f"  ❌ Erreur Node.js :\n{result.stderr[:500]}")
            sys.exit(1)

        data = json.loads(result.stdout)
        return data

    except FileNotFoundError:
        print("  ❌ Node.js introuvable. Installe Node.js.")
        sys.exit(1)
    except json.JSONDecodeError as e:
        print(f"  ❌ Impossible de parser la sortie Node.js : {e}")
        print(f"  Sortie brute : {result.stdout[:200]}")
        sys.exit(1)


# ════════════════════════════════════════════════════════════════════════════
# GÉNÉRATION DES QUESTIONS VIA L'API
# ════════════════════════════════════════════════════════════════════════════

def build_prompt(qkey: str, meta: dict, day_plan: dict, day_num: int,
                 n_questions: int) -> str:
    """Construit le prompt pour générer les questions d'un jour."""

    theme = day_plan.get("theme", f"Jour {day_num}")
    domains = ", ".join(day_plan.get("dom", []))
    focus_points = day_plan.get("focus", [])
    focus_str = "\n".join(f"- {f}" for f in focus_points) if focus_points else "Concepts généraux du domaine"

    # Liens de la doc
    links = day_plan.get("links", [])
    links_str = "\n".join(f"- {title}: {url}" for title, url in links) if links else ""

    prompt = f"""Tu es un expert en certifications AWS. Génère exactement {n_questions} questions QCM en FRANÇAIS pour préparer l'examen **{meta.get('exam', meta.get('title', ''))
}** ({meta.get('code', '')}).

## Contexte du jour {day_num}
**Thème** : {theme}
**Domaines** : {domains}

## Points clés à couvrir (focus)
{focus_str}

## Sources officielles
{links_str if links_str else "(documentation AWS officielle)"}

## Instructions strictes
1. Génère exactement {n_questions} questions, numérotées 1 à {n_questions}
2. Chaque question doit être réaliste, au niveau de difficulté de l'examen {meta.get('code', '')}
3. 4 options de réponse (A, B, C, D) — une seule réponse correcte
4. Les distracteurs doivent être plausibles (erreurs fréquentes des candidats)
5. L'explication doit être concise mais pédagogique (1-3 phrases)
6. Varie les types : cas concrets, questions "lequel choisir", "PIÈGE", "2 réponses vraies parmi 4"
7. Ne jamais utiliser de backticks ` dans les textes
8. Ne jamais utiliser de guillemets doubles " à l'intérieur des chaînes

## Format de sortie — JSON STRICT, rien d'autre
Réponds UNIQUEMENT avec un tableau JSON valide, sans aucun texte avant ou après :

[
  {{
    "id": "{qkey}-j{day_num}-1",
    "q": "texte de la question ?",
    "choices": ["A. option A", "B. option B", "C. option C", "D. option D"],
    "answer": 0,
    "exp": "Explication concise."
  }},
  ...
]

**answer** est l'index 0-based de la bonne réponse dans choices.
"""
    return prompt


def call_claude(api_key: str, prompt: str, day_num: int) -> list | None:
    """Appelle Claude via urllib (stdlib) et retourne la liste de questions parsée."""
    import urllib.request
    import urllib.error

    payload = json.dumps({
        "model": MODEL,
        "max_tokens": 8000,
        "messages": [{"role": "user", "content": prompt}]
    }).encode("utf-8")

    for attempt in range(1, MAX_RETRIES + 1):
        try:
            req = urllib.request.Request(
                "https://api.anthropic.com/v1/messages",
                data=payload,
                headers={
                    "Content-Type": "application/json",
                    "x-api-key": api_key,
                    "anthropic-version": "2023-06-01"
                },
                method="POST"
            )
            with urllib.request.urlopen(req, timeout=120) as resp:
                body = json.loads(resp.read().decode("utf-8"))
            raw = body["content"][0]["text"].strip()

            # Extraire le JSON même si Claude ajoute du texte autour
            json_match = re.search(r'\[\s*\{.*\}\s*\]', raw, re.DOTALL)
            if not json_match:
                print(f"    ⚠️  Tentative {attempt}/{MAX_RETRIES} : pas de JSON trouvé")
                if attempt < MAX_RETRIES:
                    time.sleep(2)
                continue

            questions = json.loads(json_match.group())

            # Validation minimale
            for q in questions:
                if not all(k in q for k in ("id", "q", "choices", "answer", "exp")):
                    raise ValueError(f"Champ manquant dans : {q}")
                if not isinstance(q["choices"], list) or len(q["choices"]) != 4:
                    raise ValueError(f"4 choix requis pour : {q['id']}")
                if not isinstance(q["answer"], int) or not (0 <= q["answer"] <= 3):
                    raise ValueError(f"answer invalide pour : {q['id']}")

            return questions

        except (json.JSONDecodeError, ValueError) as e:
            print(f"    ⚠️  Tentative {attempt}/{MAX_RETRIES} — parsing échoué : {e}")
            if attempt < MAX_RETRIES:
                time.sleep(2)
        except Exception as e:
            print(f"    ⚠️  Tentative {attempt}/{MAX_RETRIES} — erreur API : {e}")
            if attempt < MAX_RETRIES:
                time.sleep(3)

    print(f"    ❌ Jour {day_num} : échec après {MAX_RETRIES} tentatives")
    return None


# ════════════════════════════════════════════════════════════════════════════
# INJECTION DES QUESTIONS DANS LE FICHIER
# ════════════════════════════════════════════════════════════════════════════

def questions_to_js(questions: list, day_num: int) -> str:
    """Convertit une liste de questions en bloc JS pour le fichier."""
    lines = [f"window.QDATA[{day_num}] = ["]
    for i, q in enumerate(questions):
        comma = "," if i < len(questions) - 1 else ""
        # Échapper les caractères problématiques
        def esc(s):
            return str(s).replace("\\", "\\\\").replace('"', '\\"')

        choices_str = ", ".join(f'"{esc(c)}"' for c in q["choices"])
        line = (
            f'  {{id:"{esc(q["id"])}", '
            f'q:"{esc(q["q"])}", '
            f'choices:[{choices_str}], '
            f'answer:{q["answer"]}, '
            f'exp:"{esc(q["exp"])}" }}{comma}'
        )
        lines.append(line)
    lines.append("];")
    return "\n".join(lines)


def inject_day(content: str, day_num: int, questions: list) -> str:
    """
    Remplace le bloc window.QDATA[N] vide par le contenu généré.
    Si le bloc n'existe pas encore, l'ajoute avant la ligne }; finale.
    """
    new_block = questions_to_js(questions, day_num)

    # Chercher un bloc existant window.QDATA[N] = [ ... ];
    pattern = rf'window\.QDATA\[{day_num}\]\s*=\s*\[[\s\S]*?\];'
    if re.search(pattern, content):
        return re.sub(pattern, new_block, content)

    # Pas trouvé → ajouter à la fin du fichier
    return content.rstrip() + "\n\n" + new_block + "\n"


def update_total_q(content: str, total: int) -> str:
    """Met à jour totalQ dans QUIZ_META."""
    return re.sub(r'(totalQ\s*:\s*)\d+', rf'\g<1>{total}', content)


# ════════════════════════════════════════════════════════════════════════════
# VALIDATION FINALE
# ════════════════════════════════════════════════════════════════════════════

def validate(path: Path) -> bool:
    """Valide la syntaxe Node.js du fichier."""
    js_code = f"""
const window = {{}};
try {{
  eval(require('fs').readFileSync('{path}', 'utf8'));
  const days = Object.keys(window.QDATA || {{}});
  let total = 0;
  for (const d of days) {{
    const n = (window.QDATA[d] || []).length;
    total += n;
    console.log(`J${{d}}: ${{n}} questions`);
  }}
  console.log(`TOTAL: ${{total}}`);
  console.log(`totalQ_meta: ${{(window.QUIZ_META || {{}}).totalQ || 0}}`);
  if (total === (window.QUIZ_META || {{}}).totalQ) {{
    console.log('OK: totalQ cohérent');
  }} else {{
    console.log(`WARN: totalQ_meta=${{(window.QUIZ_META || {{}}).totalQ}} mais compté=${{total}}`);
  }}
}} catch(e) {{
  process.stderr.write('SyntaxError: ' + e.message + '\\n');
  process.exit(1);
}}
"""
    result = subprocess.run(["node", "-e", js_code],
                            capture_output=True, text=True, timeout=15)
    print(result.stdout.strip())
    if result.returncode != 0:
        print(f"  ❌ {result.stderr.strip()}")
        return False
    return True


# ════════════════════════════════════════════════════════════════════════════
# COMMANDE PRINCIPALE
# ════════════════════════════════════════════════════════════════════════════

def main():
    parser = argparse.ArgumentParser(
        description="Génère les questions d'une certif scaffoldée."
    )
    parser.add_argument("dossier",
                        help="Nom du dossier certif (ex: aws-soa-c03) ou chemin absolu")
    parser.add_argument("--day", type=int, default=None,
                        help="Générer uniquement ce jour (ex: --day 3)")
    parser.add_argument("--regen", action="store_true",
                        help="Regénérer même si le jour a déjà des questions")
    parser.add_argument("--questions", type=int, default=QUESTIONS_PER_DAY,
                        help=f"Nombre de questions par jour (défaut: {QUESTIONS_PER_DAY})")
    args = parser.parse_args()

    # Résoudre le chemin
    folder = Path(args.dossier)
    if not folder.is_absolute():
        folder = REPO / args.dossier
    if not folder.exists():
        print(f"  ❌ Dossier introuvable : {folder}")
        sys.exit(1)

    qjs = folder / "questions.js"
    if not qjs.exists():
        print(f"  ❌ questions.js introuvable dans {folder}")
        sys.exit(1)

    print(f"\n{'═'*60}")
    print(f"  🤖 Génération de questions — {folder.name}")
    print(f"{'═'*60}\n")

    # Parser le fichier existant
    print("  📖 Lecture du plan de révision...")
    data = parse_questions_js(qjs)
    qkey = data["qkey"]
    meta = data["meta"]
    plan = data.get("plan") or []
    existing_qdata = data.get("qdata") or {}

    total_days = len(plan)
    print(f"  → Certif : {meta.get('title', qkey)} ({meta.get('code', '')})")
    print(f"  → {total_days} jours au programme")

    # Déterminer les jours à générer
    if args.day is not None:
        days_to_generate = [args.day]
    else:
        days_to_generate = list(range(1, total_days + 1))

    # Filtrer les jours déjà remplis (sauf --regen)
    if not args.regen:
        already_done = []
        to_skip = []
        for d in days_to_generate:
            existing = existing_qdata.get(str(d)) or existing_qdata.get(d) or []
            if existing and len(existing) > 0:
                to_skip.append(d)
            else:
                already_done.append(d)
        days_to_generate = already_done
        if to_skip:
            print(f"  ℹ️  Jours déjà remplis (ignorés) : {to_skip}")
            print(f"     Utilise --regen pour les regénérer.\n")

    if not days_to_generate:
        print("  ✅ Tous les jours ont déjà des questions. Rien à faire.")
        print("     Utilise --regen pour tout regénérer.")
        sys.exit(0)

    print(f"  → {len(days_to_generate)} jours à générer : {days_to_generate}\n")

    # Récupérer l'API key
    api_key = get_client()

    # Lire le contenu brut du fichier
    content = qjs.read_text(encoding="utf-8")

    # Générer jour par jour
    total_generated = 0
    for i, day_num in enumerate(days_to_generate):
        # Trouver le plan du jour
        day_plan = next((p for p in plan if p.get("d") == day_num), {})
        theme = day_plan.get("theme", f"Jour {day_num}")

        print(f"  [{i+1}/{len(days_to_generate)}] Jour {day_num} — {theme}")
        print(f"    Appel API ({MODEL})...", end="", flush=True)

        prompt = build_prompt(qkey, meta, day_plan, day_num, args.questions)
        questions = call_claude(api_key, prompt, day_num)

        if questions is None:
            print(f"    ⏭️  Jour {day_num} ignoré (échec génération)")
            continue

        print(f" {len(questions)} questions générées")

        # Renuméroter les IDs proprement
        for idx, q in enumerate(questions, 1):
            q["id"] = f"{qkey}-j{day_num}-{idx}"

        # Injecter dans le contenu
        content = inject_day(content, day_num, questions)
        total_generated += len(questions)

        # Pause rate limit (sauf dernier)
        if i < len(days_to_generate) - 1:
            time.sleep(DELAY_BETWEEN_DAYS)

    if total_generated == 0:
        print("\n  ⚠️  Aucune question générée.")
        sys.exit(1)

    # Mettre à jour totalQ
    # Compter toutes les questions désormais présentes
    # On re-parse pour être précis
    tmp_path = folder / "_questions_tmp.js"
    tmp_path.write_text(content, encoding="utf-8")
    tmp_data = parse_questions_js(tmp_path)
    tmp_path.unlink(missing_ok=True)

    all_qdata = tmp_data.get("qdata") or {}
    new_total = sum(
        len(v) for v in all_qdata.values() if isinstance(v, list)
    )
    content = update_total_q(content, new_total)

    # Écrire le fichier final
    qjs.write_text(content, encoding="utf-8")
    print(f"\n  ✅ {total_generated} questions injectées ({new_total} total)")

    # Validation finale
    print("\n  🔍 Validation Node.js...")
    ok = validate(qjs)
    if ok:
        print(f"\n  ✅ questions.js valide — {new_total} questions prêtes")
        print(f"     Lance le quiz : {folder.name}/index.html")
    else:
        print(f"\n  ❌ Erreur de validation — vérifie questions.js manuellement")
        sys.exit(1)


if __name__ == "__main__":
    main()
