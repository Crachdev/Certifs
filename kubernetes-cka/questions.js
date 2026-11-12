// Questions Kubernetes CKA — socle (questions à enrichir)
// Format: window.QDATA[jour] = [{t, q, o, a, e}, ...]

window.QKEY = "kubernetes-cka";

// ── Métadonnées examen ──────────────────────────────────────────────────────
window.QUIZ_META = {
  title: "Kubernetes CKA",
  code: "CKA",
  exam: "Certified Kubernetes Administrator",
  passScore: 66,
  examMins: 120,
  fiche: null,
  rules: [
    ["~17 tâches · 120 min", "examen pratique terminal"],
    ["66 / 100", "score de réussite"],
    ["accès docs K8s", "autorisé pendant l'examen"],
    ["Troublesh › Archi › Net", "30 · 25 · 20 %"]
  ],
  totalQ: 0
};

// ── Plan de révision 5 jours ────────────────────────────────────────────────
const _K8S = "https://kubernetes.io/docs/";
window.QUIZ_PLAN = [
  {
    d: 1,
    theme: "Architecture K8s & workloads de base",
    dom: ["Cluster Architecture · 25 %"],
    time: "≈ 1 h 15 lecture + 1 h quiz",
    sections: [
      { id: "s1", titre: "🏛 Architecture : control plane, worker nodes" },
      { id: "s2", titre: "📦 Pods, ReplicaSets, Deployments" }
    ],
    read: [
      "K8s docs : Cluster architecture overview",
      "K8s docs : Workloads resources"
    ],
    links: [
      ["Cluster architecture", _K8S + "concepts/architecture/"],
      ["Pods", _K8S + "concepts/workloads/pods/"],
      ["Deployments", _K8S + "concepts/workloads/controllers/deployment/"]
    ],
    focus: [
      "kube-apiserver, etcd, scheduler, controller-manager, kubelet, kube-proxy",
      "kubectl run / create / apply / get / describe / delete",
      "Deployment : replicas, rolling update, rollback"
    ]
  },
  {
    d: 2,
    theme: "Réseau Kubernetes — services, ingress, DNS",
    dom: ["Networking · 20 %"],
    time: "≈ 1 h 15 lecture + 1 h quiz",
    sections: [
      { id: "s3", titre: "🌐 Services : ClusterIP, NodePort, LoadBalancer" },
      { id: "s4", titre: "🔀 Ingress, NetworkPolicies & CoreDNS" }
    ],
    read: [
      "K8s docs : Services",
      "K8s docs : Ingress",
      "K8s docs : Network policies"
    ],
    links: [
      ["Services", _K8S + "concepts/services-networking/service/"],
      ["Ingress", _K8S + "concepts/services-networking/ingress/"],
      ["Network policies", _K8S + "concepts/services-networking/network-policies/"]
    ],
    focus: [
      "ClusterIP (interne) vs NodePort (port statique) vs LB (cloud)",
      "Ingress controller vs Ingress resource",
      "NetworkPolicy : ingress/egress rules, podSelector, namespaceSelector"
    ]
  },
  {
    d: 3,
    theme: "Stockage — PV, PVC, StorageClasses",
    dom: ["Storage · 10 %"],
    time: "≈ 1 h lecture + 1 h quiz",
    sections: [
      { id: "s5", titre: "💾 PersistentVolume, PVC, StorageClass" },
      { id: "s6", titre: "📁 ConfigMaps & Secrets — volumes et envVars" }
    ],
    read: [
      "K8s docs : Persistent volumes",
      "K8s docs : ConfigMaps"
    ],
    links: [
      ["Persistent volumes", _K8S + "concepts/storage/persistent-volumes/"],
      ["Storage classes", _K8S + "concepts/storage/storage-classes/"],
      ["ConfigMaps", _K8S + "concepts/configuration/configmap/"]
    ],
    focus: [
      "accessModes : RWO, ROX, RWX — qui supporte quoi",
      "Reclaim policies : Retain, Recycle, Delete",
      "Secret base64 ≠ chiffrement — étapes pour les consommer"
    ]
  },
  {
    d: 4,
    theme: "Sécurité K8s — RBAC, SecurityContext, TLS",
    dom: ["Security · 15 %"],
    time: "≈ 1 h lecture + 1 h quiz",
    sections: [
      { id: "s7", titre: "🔒 RBAC : Role, ClusterRole, Bindings" },
      { id: "s8", titre: "🛡 SecurityContext, ServiceAccounts, TLS" }
    ],
    read: [
      "K8s docs : RBAC authorization",
      "K8s docs : Configure a security context"
    ],
    links: [
      ["RBAC", _K8S + "reference/access-authn-authz/rbac/"],
      ["Security context", _K8S + "tasks/configure-pod-container/security-context/"],
      ["TLS in K8s", _K8S + "tasks/tls/"]
    ],
    focus: [
      "Role (namespace) vs ClusterRole (cluster) ; RoleBinding vs ClusterRoleBinding",
      "kubectl auth can-i — vérifier les permissions",
      "runAsNonRoot, readOnlyRootFilesystem, capabilities"
    ]
  },
  {
    d: 5,
    theme: "Troubleshooting & révision finale",
    dom: ["Troubleshooting · 30 %"],
    time: "120 min exercices pratiques + 30 min révision",
    sections: [
      { id: "s9", titre: "🔍 Diagnostic : node, pod, service failures" },
      { id: "s10", titre: "⚠️ Commandes kubectl indispensables" }
    ],
    read: [
      "K8s docs : Troubleshooting applications",
      "K8s docs : Troubleshoot clusters"
    ],
    links: [
      ["Troubleshoot apps", _K8S + "tasks/debug/debug-application/"],
      ["Troubleshoot clusters", _K8S + "tasks/debug/debug-cluster/"],
      ["kubectl cheat sheet", _K8S + "reference/kubectl/quick-reference/"]
    ],
    focus: [
      "kubectl describe pod / events / logs / exec -it",
      "Node NotReady : vérifier kubelet, containerd, network plugin",
      "Pendant l'examen : utiliser kubernetes.io/docs sans restriction"
    ],
    extra: "Entraîne-toi sur Killer.sh (2 sessions incluses avec l'achat de l'examen CKA)."
  }
];

// ── Questions ────────────────────────────────────────────────────────────────
// Note : Le CKA est un examen PRATIQUE terminal, pas QCM.
// Ces questions servent à réviser les concepts théoriques avant l'exam.
// À enrichir — format : { t: "thème", q: "question", o: ["A","B","C","D"], a: 0, e: "explication" }
window.QDATA = {};
