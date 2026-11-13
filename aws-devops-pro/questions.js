// Questions AWS DevOps Engineer Professional — socle (questions à enrichir)
// Format: window.QDATA[jour] = [{t, q, o, a, e}, ...]

window.QKEY = "aws-devops-pro";

// ── Métadonnées examen ──────────────────────────────────────────────────────
window.QUIZ_META = {
  title: "AWS DevOps Engineer Pro",
  code: "DOP-C02",
  exam: "AWS Certified DevOps Engineer – Professional",
  passScore: 75,
  examMins: 180,
  fiche: "fiche.html",
  rules: [
    ["75 q · 180 min", "QCM/réponses multiples"],
    ["750 / 1000", "score de réussite"],
    ["0 pénalité", "ne jamais laisser vide"],
    ["D1 › D2=D6 › D3=D4", "22 · 17 · 15 %"]
  ],
  totalQ: 0
};

// ── Plan de révision 7 jours ────────────────────────────────────────────────
const _DOC = "https://docs.aws.amazon.com/";
window.QUIZ_PLAN = [
  {
    d: 1,
    theme: "CI/CD — CodePipeline, CodeBuild, CodeDeploy",
    dom: ["D1 · SDLC automation · 22 %"],
    time: "≈ 1 h 15 lecture + 1 h 15 quiz",
    sections: [
      { id: "s1", titre: "🔄 CodePipeline : stages, actions, artifacts" },
      { id: "s2", titre: "🏗 CodeBuild : buildspec.yml, caching" },
      { id: "s3", titre: "🚀 CodeDeploy : in-place, blue/green, AppSpec" }
    ],
    read: [
      "AWS docs : CodePipeline concepts",
      "AWS docs : CodeBuild buildspec reference",
      "AWS docs : CodeDeploy deployment types"
    ],
    links: [
      ["CodePipeline", _DOC + "codepipeline/latest/userguide/welcome.html"],
      ["CodeBuild", _DOC + "codebuild/latest/userguide/welcome.html"],
      ["CodeDeploy", _DOC + "codedeploy/latest/userguide/welcome.html"]
    ],
    focus: [
      "CodeDeploy : AllAtOnce vs OneAtATime vs HalfAtATime",
      "Blue/green EC2 vs ECS vs Lambda",
      "CodeBuild : phases install / pre_build / build / post_build"
    ]
  },
  {
    d: 2,
    theme: "Configuration & Infrastructure as Code",
    dom: ["D2 · Configuration management · 17 %"],
    time: "≈ 1 h 15 lecture + 1 h 15 quiz",
    sections: [
      { id: "s4", titre: "☁️ CloudFormation : stacks, change sets, drift" },
      { id: "s5", titre: "⚙️ AWS CDK & Systems Manager" }
    ],
    read: [
      "AWS docs : CloudFormation resource types",
      "AWS docs : Systems Manager overview"
    ],
    links: [
      ["CloudFormation", _DOC + "AWSCloudFormation/latest/UserGuide/Welcome.html"],
      ["Systems Manager", _DOC + "systems-manager/latest/userguide/what-is-systems-manager.html"],
      ["CDK", "https://docs.aws.amazon.com/cdk/v2/guide/home.html"]
    ],
    focus: [
      "CloudFormation : DependsOn, CreationPolicy, UpdatePolicy",
      "SSM Parameter Store vs Secrets Manager",
      "SSM Run Command vs Patch Manager vs Session Manager"
    ]
  },
  {
    d: 3,
    theme: "Monitoring, logging & observabilité",
    dom: ["D3 · Monitoring & logging · 15 %"],
    time: "≈ 1 h lecture + 1 h 15 quiz",
    sections: [
      { id: "s6", titre: "📊 CloudWatch : métriques, alarmes, Logs Insights" },
      { id: "s7", titre: "🔎 X-Ray, EventBridge & CloudTrail" }
    ],
    read: [
      "AWS docs : CloudWatch overview",
      "AWS docs : X-Ray concepts",
      "AWS docs : EventBridge"
    ],
    links: [
      ["CloudWatch", _DOC + "AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html"],
      ["X-Ray", _DOC + "xray/latest/devguide/aws-xray.html"],
      ["EventBridge", _DOC + "eventbridge/latest/userguide/eb-what-is.html"]
    ],
    focus: [
      "CloudWatch Logs : log groups, streams, metric filters",
      "X-Ray : segments, subsegments, annotations, traces",
      "EventBridge rules : event pattern vs schedule"
    ]
  },
  {
    d: 4,
    theme: "Haute disponibilité & résilience",
    dom: ["D4 · Policies & standards · 15 %"],
    time: "≈ 1 h lecture + 1 h 15 quiz",
    sections: [
      { id: "s8", titre: "🔁 Auto Scaling avancé & ELB" },
      { id: "s9", titre: "🌍 Multi-region, DR, backup" }
    ],
    read: [
      "AWS docs : Auto Scaling lifecycle hooks",
      "AWS docs : Elastic Load Balancing"
    ],
    links: [
      ["Auto Scaling", _DOC + "autoscaling/ec2/userguide/what-is-amazon-ec2-auto-scaling.html"],
      ["ELB", _DOC + "elasticloadbalancing/latest/userguide/what-is-load-balancing.html"],
      ["Backup", _DOC + "aws-backup/latest/devguide/whatisbackup.html"]
    ],
    focus: [
      "Lifecycle hooks : pending:wait vs terminating:wait",
      "ALB : sticky sessions, weighted target groups",
      "RTO vs RPO : choisir la bonne stratégie DR"
    ]
  },
  {
    d: 5,
    theme: "Sécurité DevOps — IAM, KMS, Secrets",
    dom: ["D5 · Incident & event response · 14 %"],
    time: "≈ 1 h lecture + 1 h quiz",
    sections: [
      { id: "s10", titre: "🔒 IAM avancé : rôles, SCPs, boundaries" },
      { id: "s11", titre: "🗝 KMS, ACM, Secrets Manager" }
    ],
    read: [
      "AWS docs : IAM permissions boundaries",
      "AWS docs : KMS concepts"
    ],
    links: [
      ["IAM", _DOC + "IAM/latest/UserGuide/introduction.html"],
      ["KMS", _DOC + "kms/latest/developerguide/overview.html"],
      ["Secrets Manager", _DOC + "secretsmanager/latest/userguide/intro.html"]
    ],
    focus: [
      "SCP : blocage org-level vs permission boundary : blocage IAM entity",
      "KMS : CMK, data key, envelope encryption",
      "Rotation automatique : Secrets Manager vs Parameter Store"
    ]
  },
  {
    d: 6,
    theme: "Conteneurs & serverless sur AWS",
    dom: ["D6 · Automated testing · 17 %"],
    time: "≈ 1 h 15 lecture + 1 h quiz",
    sections: [
      { id: "s12", titre: "📦 ECS, EKS, ECR — déploiement conteneurs" },
      { id: "s13", titre: "⚡ Lambda, SAM, Step Functions" }
    ],
    read: [
      "AWS docs : ECS deployment types",
      "AWS docs : Lambda deployment"
    ],
    links: [
      ["ECS", _DOC + "AmazonECS/latest/developerguide/Welcome.html"],
      ["Lambda", _DOC + "lambda/latest/dg/welcome.html"],
      ["Step Functions", _DOC + "step-functions/latest/dg/welcome.html"]
    ],
    focus: [
      "ECS : task definition, service, capacity provider",
      "Lambda : aliases, versions, traffic shifting (10 %)",
      "Step Functions : Express vs Standard workflows"
    ]
  },
  {
    d: 7,
    theme: "Examen blanc & révision finale",
    dom: ["D1", "D2", "D3", "D4", "D5", "D6"],
    time: "180 min chrono + 45 min révision",
    sections: [
      { id: "s14", titre: "⚠️ Pièges classiques Pro" },
      { id: "s15", titre: "🔑 Services à ne pas confondre" }
    ],
    read: [
      "Révision : tous les services CI/CD",
      "Révision : CloudFormation vs CDK vs SAM"
    ],
    links: [
      ["Exam guide DOP-C02", "https://d1.awsstatic.com/training-and-certification/docs-devops-pro/AWS-Certified-DevOps-Engineer-Professional_Exam-Guide.pdf"],
      ["Tutorials Dojo", "https://portal.tutorialsdojo.com/courses/aws-certified-devops-engineer-professional-practice-exams/"]
    ],
    focus: [
      "CloudFormation StackSets vs Nested Stacks",
      "CodeDeploy Hooks : BeforeInstall, AfterInstall, ApplicationStart",
      "EventBridge Pipes vs EventBridge Rules"
    ],
    extra: "Rejoue tes erreurs des jours 1–6 dans l'onglet « Mes erreurs »."
  }
];

// ── Questions ────────────────────────────────────────────────────────────────
// À enrichir — format : { t: "thème", q: "question", o: ["A","B","C","D"], a: 0, e: "explication" }
window.QDATA = {};
