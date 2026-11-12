// Questions Terraform Associate — socle (questions à enrichir)
// Format: window.QDATA[jour] = [{t, q, o, a, e}, ...]

window.QKEY = "terraform-assoc-004";

// ── Métadonnées examen ──────────────────────────────────────────────────────
window.QUIZ_META = {
  title: "Terraform Associate",
  code: "003/004",
  exam: "HashiCorp Certified: Terraform Associate",
  passScore: 70,
  examMins: 60,
  fiche: null,
  rules: [
    ["57 q · 60 min", ""],
    ["~70 %", "score de réussite"],
    ["0 pénalité", "ne jamais laisser vide"],
    ["IaC · State · Modules", "8 domaines"]
  ],
  totalQ: 0
};

// ── Plan de révision 5 jours ────────────────────────────────────────────────
window.QUIZ_PLAN = [
  {
    d: 1,
    theme: "Infrastructure as Code & workflow Terraform",
    dom: ["D1 · IaC concepts", "D2 · Terraform purpose"],
    time: "≈ 1 h lecture + 45 min quiz",
    sections: [
      { id: "s1", titre: "🏗 Concepts IaC" },
      { id: "s2", titre: "⚡ Workflow Terraform (init · plan · apply)" }
    ],
    read: [
      "Terraform docs : What is IaC",
      "Terraform docs : Core workflow"
    ],
    links: [
      ["Terraform IaC overview", "https://developer.hashicorp.com/terraform/intro"],
      ["Core workflow", "https://developer.hashicorp.com/terraform/intro/core-workflow"]
    ],
    focus: [
      "IaC déclaratif vs impératif",
      "terraform init / plan / apply / destroy",
      "Avantages : idempotence, versioning, collaboration"
    ]
  },
  {
    d: 2,
    theme: "Langage HCL — providers, resources, variables",
    dom: ["D3 · HCL basics", "D4 · Terraform CLI"],
    time: "≈ 1 h lecture + 1 h quiz",
    sections: [
      { id: "s3", titre: "📝 HCL : blocks, arguments, expressions" },
      { id: "s4", titre: "🔌 Providers & resources" },
      { id: "s5", titre: "📊 Variables, outputs, locals" }
    ],
    read: [
      "Terraform docs : HCL language",
      "Terraform docs : Providers",
      "Terraform docs : Input variables"
    ],
    links: [
      ["HCL language", "https://developer.hashicorp.com/terraform/language"],
      ["Providers", "https://developer.hashicorp.com/terraform/language/providers"],
      ["Variables", "https://developer.hashicorp.com/terraform/language/values/variables"]
    ],
    focus: [
      "resource / data / variable / output / locals blocks",
      "terraform.tfvars vs .auto.tfvars vs env vars",
      "depends_on, lifecycle, meta-arguments"
    ]
  },
  {
    d: 3,
    theme: "State Terraform — gestion et backends",
    dom: ["D5 · Terraform modules", "D6 · Terraform state"],
    time: "≈ 1 h lecture + 1 h quiz",
    sections: [
      { id: "s6", titre: "💾 State : purpose & remote backends" },
      { id: "s7", titre: "🔒 State locking & workspaces" }
    ],
    read: [
      "Terraform docs : State",
      "Terraform docs : Backends",
      "Terraform docs : Workspaces"
    ],
    links: [
      ["State overview", "https://developer.hashicorp.com/terraform/language/state"],
      ["Remote backends", "https://developer.hashicorp.com/terraform/language/settings/backends"],
      ["Workspaces", "https://developer.hashicorp.com/terraform/language/state/workspaces"]
    ],
    focus: [
      "terraform.tfstate — rôle et risques de le versionner",
      "Backend S3 + DynamoDB locking",
      "terraform state mv / rm / pull / push"
    ]
  },
  {
    d: 4,
    theme: "Modules, registry et bonnes pratiques",
    dom: ["D5 · Modules", "D7 · Terraform Cloud"],
    time: "≈ 1 h lecture + 1 h quiz",
    sections: [
      { id: "s8", titre: "📦 Modules : source, versioning, outputs" },
      { id: "s9", titre: "🌐 Terraform Registry & HCP Terraform" }
    ],
    read: [
      "Terraform docs : Modules",
      "Terraform docs : Module sources",
      "HCP Terraform overview"
    ],
    links: [
      ["Modules overview", "https://developer.hashicorp.com/terraform/language/modules"],
      ["Module sources", "https://developer.hashicorp.com/terraform/language/modules/sources"],
      ["HCP Terraform", "https://developer.hashicorp.com/terraform/cloud-docs"]
    ],
    focus: [
      "source = \"registry/module\" vs chemin local",
      "version contraints : ~>, >=, =",
      "HCP Terraform : remote runs, sentinel policies"
    ]
  },
  {
    d: 5,
    theme: "Révision générale & examen blanc",
    dom: ["D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8"],
    time: "60 min chrono + 30 min révision",
    sections: [
      { id: "s10", titre: "⚠️ Pièges classiques" },
      { id: "s11", titre: "🔑 Commandes à connaître" }
    ],
    read: [
      "Révision : tous les blocs HCL",
      "Révision : workflow state"
    ],
    links: [
      ["Exam review guide", "https://developer.hashicorp.com/certifications/infrastructure-automation/terraform-associate-003"],
      ["Study guide", "https://developer.hashicorp.com/terraform/tutorials/certification-003/associate-study-003"]
    ],
    focus: [
      "terraform fmt / validate / taint / import",
      "count vs for_each — quand utiliser quoi",
      "sensitive = true dans les variables et outputs"
    ],
    extra: "Fais un test blanc sur Udemy (Zeal Vora) ou freeCodeCamp pour mesurer ton niveau."
  }
];

// ── Questions ────────────────────────────────────────────────────────────────
// À enrichir — format : { t: "thème", q: "question", o: ["A","B","C","D"], a: 0, e: "explication" }
window.QDATA = {};
