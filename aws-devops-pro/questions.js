// Questions AWS DevOps Engineer Professional — DOP-C02
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
    ["D1 › D2=D6 › D3=D4=D5", "22 · 17 · 15 · 15 · 14 %"]
  ],
  totalQ: 0
};

// ── Plan de révision 20 jours ───────────────────────────────────────────────
const _DOC = "https://docs.aws.amazon.com/";
window.QUIZ_PLAN = [
  // ═══════════════════════════════════════════════════════════════════════════
  // DOMAINE 1 : SDLC Automation — 22 % — 4 jours (J1–J4)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    d: 1,
    theme: "CI/CD — CodePipeline fondamentaux",
    dom: ["D1 · SDLC Automation · 22 %"],
    time: "≈ 1 h 30 lecture + 1 h 30 quiz",
    sections: [
      { id: "s1", titre: "🔄 CodePipeline : structure, stages, actions, transitions" },
      { id: "s2", titre: "🔗 Sources : CodeCommit, GitHub, S3, ECR" },
      { id: "s3", titre: "⚙️ Actions parallèles, variables, déclencheurs" }
    ],
    read: [
      "AWS docs : CodePipeline — concepts, pipeline structure, action categories",
      "AWS docs : CodePipeline — variables, action types reference",
      "AWS docs : CodePipeline — triggers, EventBridge integration"
    ],
    links: [
      ["CodePipeline concepts", _DOC + "codepipeline/latest/userguide/concepts.html"],
      ["CodePipeline action types", _DOC + "codepipeline/latest/userguide/reference-pipeline-structure.html"],
      ["CodePipeline variables", _DOC + "codepipeline/latest/userguide/reference-variables.html"],
      ["CodePipeline cross-account", _DOC + "codepipeline/latest/userguide/pipelines-create-cross-account.html"],
      ["CodePipeline with GitHub", _DOC + "codepipeline/latest/userguide/connections-github.html"]
    ],
    focus: [
      "Structure pipeline : Source → Build → Test → Deploy → Approval (ordre logique)",
      "Action categories : Source, Build, Test, Deploy, Approval, Invoke",
      "Actions en parallèle dans un stage vs stages séquentiels",
      "Déclencheurs : webhook GitHub v2 (Connections), CloudWatch Events, EventBridge, polling S3",
      "Variables de pipeline : namespace + variable name → ${Namespace.Variable}",
      "Artifact store : S3 bucket chiffré (CMK ou SSE-S3)",
      "Transitions : désactiver une transition pour bloquer sans supprimer le pipeline"
    ]
  },
  {
    d: 2,
    theme: "CI/CD — CodeBuild & tests automatisés",
    dom: ["D1 · SDLC Automation · 22 %"],
    time: "≈ 1 h 30 lecture + 1 h 30 quiz",
    sections: [
      { id: "s4", titre: "🏗 CodeBuild : buildspec.yml, phases, environnements" },
      { id: "s5", titre: "⚡ Caching, rapports de test, badge de statut" },
      { id: "s6", titre: "🧪 Tests automatisés dans les pipelines CI" }
    ],
    read: [
      "AWS docs : CodeBuild — buildspec reference, phases lifecycle",
      "AWS docs : CodeBuild — caching strategies (local + S3)",
      "AWS docs : CodeBuild — test reporting, coverage reports, batch builds"
    ],
    links: [
      ["CodeBuild buildspec", _DOC + "codebuild/latest/userguide/build-spec-ref.html"],
      ["CodeBuild caching", _DOC + "codebuild/latest/userguide/build-caching.html"],
      ["CodeBuild test reports", _DOC + "codebuild/latest/userguide/test-reporting.html"],
      ["CodeBuild batch builds", _DOC + "codebuild/latest/userguide/batch-build.html"],
      ["CodeBuild environment variables", _DOC + "codebuild/latest/userguide/build-env-ref-env-vars.html"]
    ],
    focus: [
      "Phases buildspec : install → pre_build → build → post_build (ordre garanti)",
      "Failure : phase échoue → phases suivantes skippées SAUF post_build (toujours exécuté)",
      "Local caching : source, docker layer, custom → plus rapide mais éphémère",
      "S3 caching : partagé entre builds, utile pour dependencies (.m2, node_modules)",
      "Variables : CODEBUILD_BUILD_ID, CODEBUILD_RESOLVED_SOURCE_VERSION, CODEBUILD_SRC_DIR",
      "Test reporting : JUnit XML, Cucumber JSON → rapport dans console CodeBuild",
      "Batch builds : build-graph (DAG) ou build-list — paralléliser sur plusieurs envs"
    ]
  },
  {
    d: 3,
    theme: "CI/CD — CodeDeploy & stratégies de déploiement",
    dom: ["D1 · SDLC Automation · 22 %"],
    time: "≈ 1 h 30 lecture + 1 h 30 quiz",
    sections: [
      { id: "s7", titre: "🚀 CodeDeploy : in-place, blue/green, AppSpec, hooks" },
      { id: "s8", titre: "🎯 Stratégies : canary, linear, all-at-once — EC2, ECS, Lambda" },
      { id: "s9", titre: "🔁 Rollback automatique, alarmes & déploiement sécurisé" }
    ],
    read: [
      "AWS docs : CodeDeploy — deployment types, AppSpec file reference",
      "AWS docs : CodeDeploy — lifecycle event hooks EC2, ECS, Lambda",
      "AWS docs : CodeDeploy — automatic rollbacks, deployment configurations"
    ],
    links: [
      ["CodeDeploy deployment types", _DOC + "codedeploy/latest/userguide/welcome.html"],
      ["CodeDeploy AppSpec reference", _DOC + "codedeploy/latest/userguide/reference-appspec-file.html"],
      ["CodeDeploy hooks EC2", _DOC + "codedeploy/latest/userguide/reference-appspec-file-structure-hooks.html"],
      ["CodeDeploy hooks Lambda", _DOC + "codedeploy/latest/userguide/reference-appspec-file-structure-hooks.html#appspec-hooks-lambda"],
      ["CodeDeploy rollback", _DOC + "codedeploy/latest/userguide/deployments-rollback-and-redeploy.html"]
    ],
    focus: [
      "Hooks EC2 in-place : BeforeInstall → AfterInstall → ApplicationStart → ValidateService",
      "Hooks Lambda : BeforeAllowTraffic / AfterAllowTraffic (validation pre/post shift)",
      "ECS Blue/Green : task set blue reste jusqu'à validation → remplacement par green",
      "Lambda canary/linear : alias + weighted routing entre deux versions",
      "Rollback auto : déclenché par CloudWatch Alarm ou seuil d'échec CodeDeploy",
      "Deployment config : HalfAtATime, OneAtATime, AllAtOnce — ou custom",
      "EC2 Blue/Green : LB bascule → original fleet terminée après grace period (configurable)"
    ]
  },
  {
    d: 4,
    theme: "Artifacts, secrets & pipelines multi-compte",
    dom: ["D1 · SDLC Automation · 22 %"],
    time: "≈ 1 h 15 lecture + 1 h quiz",
    sections: [
      { id: "s10", titre: "📦 CodeArtifact & EC2 Image Builder" },
      { id: "s11", titre: "🗝 Secrets dans les pipelines (SSM, Secrets Manager, OIDC)" },
      { id: "s12", titre: "🌐 Pipelines multi-compte & multi-région" }
    ],
    read: [
      "AWS docs : CodeArtifact — repositories, domains, upstream sources, tokens",
      "AWS docs : EC2 Image Builder — pipelines, recipes, components",
      "AWS docs : CodePipeline — cross-account pipelines, CMK KMS requirements"
    ],
    links: [
      ["CodeArtifact", _DOC + "codeartifact/latest/ug/welcome.html"],
      ["EC2 Image Builder", _DOC + "imagebuilder/latest/userguide/what-is-image-builder.html"],
      ["Secrets Manager rotation", _DOC + "secretsmanager/latest/userguide/rotating-secrets.html"],
      ["SSM Parameter Store", _DOC + "systems-manager/latest/userguide/systems-manager-parameter-store.html"],
      ["ECR image scanning", _DOC + "AmazonECR/latest/userguide/image-scanning.html"]
    ],
    focus: [
      "CodeArtifact : domain → repository → upstream (connecte npmjs, PyPI, Maven central)",
      "EC2 Image Builder : recipe (base + components) → pipeline → AMI + ECR image",
      "SSM Parameter Store : Standard (4 KB) vs Advanced (8 KB), SecureString chiffré KMS",
      "Secrets Manager : rotation auto via Lambda, TTL, force-rotation — différent de SSM",
      "Pipeline cross-account : CMK KMS partagée + rôles croisés sur S3 artifact bucket",
      "OIDC provider : GitHub Actions / GitLab assument un rôle IAM sans clés statiques",
      "ECR : lifecycle policies (expirent images non-taguées), image scanning (Enhanced = Inspector)"
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // DOMAINE 2 : Configuration Management & IaC — 17 % — 4 jours (J5–J8)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    d: 5,
    theme: "CloudFormation fondamentaux & stacks avancées",
    dom: ["D2 · Configuration & IaC · 17 %"],
    time: "≈ 1 h 30 lecture + 1 h 30 quiz",
    sections: [
      { id: "s13", titre: "☁️ CloudFormation : stacks, change sets, drift, rollback" },
      { id: "s14", titre: "🧩 StackSets & Nested Stacks" },
      { id: "s15", titre: "📋 Policies : stack policy, DeletionPolicy, UpdateReplacePolicy" }
    ],
    read: [
      "AWS docs : CloudFormation — stack policies, rollback triggers, drift detection",
      "AWS docs : CloudFormation StackSets — deployment models, permission modes",
      "AWS docs : CloudFormation — DependsOn, DeletionPolicy, CreationPolicy, UpdatePolicy"
    ],
    links: [
      ["CloudFormation User Guide", _DOC + "AWSCloudFormation/latest/UserGuide/Welcome.html"],
      ["CloudFormation StackSets", _DOC + "AWSCloudFormation/latest/UserGuide/what-is-cfnstacksets.html"],
      ["CloudFormation Drift Detection", _DOC + "AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html"],
      ["CloudFormation DependsOn", _DOC + "AWSCloudFormation/latest/UserGuide/aws-attribute-dependson.html"],
      ["CloudFormation UpdatePolicy", _DOC + "AWSCloudFormation/latest/UserGuide/aws-attribute-updatepolicy.html"]
    ],
    focus: [
      "DependsOn : forcer ordre de création explicite (non implicite via Ref/GetAtt)",
      "CreationPolicy + WaitCondition : signaler succès depuis une instance EC2 (cfn-signal)",
      "UpdatePolicy : AutoScalingRollingUpdate (MaxBatchSize, MinInstancesInService, PauseTime)",
      "Change sets : prévisualiser avant appliquer — ADD, MODIFY, REMOVE, IMPORT",
      "StackSets SELF_MANAGED : rôles AWSCloudFormationStackSetAdministration + Execution",
      "StackSets SERVICE_MANAGED : via AWS Organizations, déploiement automatique",
      "Nested stacks : module réutilisable → Parent référence l'Output de l'Enfant",
      "DeletionPolicy Retain/Snapshot : protéger les données en cas de suppression de stack"
    ]
  },
  {
    d: 6,
    theme: "CloudFormation avancé — Custom Resources & CDK",
    dom: ["D2 · Configuration & IaC · 17 %"],
    time: "≈ 1 h 30 lecture + 1 h 30 quiz",
    sections: [
      { id: "s16", titre: "⚙️ Custom Resources, macros, transforms SAM" },
      { id: "s17", titre: "🏗 AWS CDK v2 : constructs L1/L2/L3, apps, stacks, bootstrapping" },
      { id: "s18", titre: "🔄 CDK Pipelines & drift management" }
    ],
    read: [
      "AWS docs : CloudFormation — custom resources (Lambda + SNS), macros",
      "AWS docs : CloudFormation — AWS::Serverless transform (SAM)",
      "AWS docs : CDK v2 — constructs library, apps, environments, bootstrapping"
    ],
    links: [
      ["CloudFormation Custom Resources", _DOC + "AWSCloudFormation/latest/UserGuide/template-custom-resources.html"],
      ["CloudFormation Macros", _DOC + "AWSCloudFormation/latest/UserGuide/template-macros.html"],
      ["AWS SAM", _DOC + "serverless-application-model/latest/developerguide/what-is-sam.html"],
      ["AWS CDK v2", "https://docs.aws.amazon.com/cdk/v2/guide/home.html"],
      ["CDK Constructs Library", "https://docs.aws.amazon.com/cdk/api/v2/"]
    ],
    focus: [
      "Custom Resource Lambda : RequestType (Create/Update/Delete), ResponseURL (pre-signed S3)",
      "Custom Resource DOIT renvoyer physicalResourceId et Status (SUCCESS/FAILED)",
      "Macro : Lambda transforme le template entier → appliquer avec Transform: MyMacro",
      "AWS::Serverless transform : SAM → CloudFormation natif (Lambda, API Gateway, DynamoDB)",
      "CDK L1 (Cfn*) = 1:1 CloudFormation, L2 = abstractions haut niveau, L3 = patterns",
      "CDK synth → CloudFormation template, CDK deploy → deploy la stack",
      "CDK bootstrapping : cdk bootstrap → CDKToolkit stack (S3 + ECR + IAM roles)",
      "CDK Pipelines : self-mutating pipeline → se déploie lui-même avant les autres stages"
    ]
  },
  {
    d: 7,
    theme: "SSM — Systems Manager complet",
    dom: ["D2 · Configuration & IaC · 17 %"],
    time: "≈ 1 h 30 lecture + 1 h 30 quiz",
    sections: [
      { id: "s19", titre: "🔧 Run Command, Session Manager, Inventory" },
      { id: "s20", titre: "📋 State Manager, Patch Manager, Maintenance Windows" },
      { id: "s21", titre: "⚡ SSM Automation : runbooks, rate controls, approbations" }
    ],
    read: [
      "AWS docs : Systems Manager — documents, Run Command, Session Manager",
      "AWS docs : Systems Manager — Patch Manager, patch baselines, groups",
      "AWS docs : Systems Manager Automation — runbooks, approvals, rate controls"
    ],
    links: [
      ["SSM Run Command", _DOC + "systems-manager/latest/userguide/run-command.html"],
      ["SSM Session Manager", _DOC + "systems-manager/latest/userguide/session-manager.html"],
      ["SSM Patch Manager", _DOC + "systems-manager/latest/userguide/systems-manager-patch.html"],
      ["SSM State Manager", _DOC + "systems-manager/latest/userguide/systems-manager-state.html"],
      ["SSM Automation", _DOC + "systems-manager/latest/userguide/systems-manager-automation.html"]
    ],
    focus: [
      "SSM Agent : pré-installé sur AMI AWS récentes, nécessite rôle IAM AmazonSSMManagedInstanceCore",
      "Run Command : exécuter documents sur flotte — targets = tags, instance IDs, resource groups",
      "Session Manager : shell sans port ouvert, sans bastion, audit dans CloudTrail/S3",
      "State Manager : association = document + targets + schedule → enforcer config continue",
      "Patch Manager : patch baselines (AWS managed vs custom), patch groups (tag Patch Group)",
      "Maintenance Window : fenêtre de tâches planifiées (Run Command, Automation, Lambda)",
      "SSM Automation runbooks : AWSSupport-* (prédéfinis) ou custom YAML/JSON",
      "Rate controls : MaxConcurrency (% ou nb) + MaxErrors (% ou nb) → arrêt sécurisé"
    ]
  },
  {
    d: 8,
    theme: "AWS Config, Control Tower & Service Catalog",
    dom: ["D2 · Configuration & IaC · 17 %"],
    time: "≈ 1 h 15 lecture + 1 h quiz",
    sections: [
      { id: "s22", titre: "📋 AWS Config : rules, remediation, conformance packs" },
      { id: "s23", titre: "🏢 Organizations, Control Tower & SCPs" },
      { id: "s24", titre: "📦 Service Catalog & AppConfig" }
    ],
    read: [
      "AWS docs : AWS Config — rules, remediation actions, conformance packs",
      "AWS docs : Control Tower — landing zones, guardrails, Account Factory",
      "AWS docs : AppConfig — deployment strategies, validators, rollback"
    ],
    links: [
      ["AWS Config Rules", _DOC + "config/latest/developerguide/evaluate-config.html"],
      ["AWS Config Remediation", _DOC + "config/latest/developerguide/remediation.html"],
      ["AWS Organizations SCPs", _DOC + "organizations/latest/userguide/orgs_manage_policies_scps.html"],
      ["Control Tower", _DOC + "controltower/latest/userguide/what-is-control-tower.html"],
      ["Service Catalog", _DOC + "servicecatalog/latest/adminguide/introduction.html"],
      ["AWS AppConfig", _DOC + "appconfig/latest/userguide/what-is-appconfig.html"]
    ],
    focus: [
      "AWS Config : évaluation continue COMPLIANT/NON_COMPLIANT sur chaque changement",
      "Config remediation : SSM Automation document déclenché auto ou manuellement",
      "Conformance packs : collection de rules + remediation packagée (ex: CIS Benchmark)",
      "SCPs : ne donnent PAS de permissions — bloquent seulement (effet Deny implicite sur tout l'OU)",
      "SCPs ne s'appliquent PAS au compte root de l'organisation",
      "Control Tower guardrails : préventifs (SCP) vs détectifs (Config rules)",
      "Account Factory : crée des comptes AWS normalisés depuis Control Tower",
      "Service Catalog : admin publie produits CloudFormation, end-users lancent en self-service",
      "AppConfig : feature flags + config data avec validation (Lambda ou JSON Schema) et rollback"
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // DOMAINE 3 : Resilient Cloud Solutions — 15 % — 3 jours (J9–J11)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    d: 9,
    theme: "Haute disponibilité — ELB, Auto Scaling, Route 53",
    dom: ["D3 · Resilient Cloud Solutions · 15 %"],
    time: "≈ 1 h 30 lecture + 1 h 30 quiz",
    sections: [
      { id: "s25", titre: "⚖️ Elastic Load Balancing — ALB, NLB, GWLB" },
      { id: "s26", titre: "📈 EC2 Auto Scaling — policies, lifecycle hooks, warm pools" },
      { id: "s27", titre: "🌍 Route 53 : routing policies & health checks" }
    ],
    read: [
      "AWS docs : Application Load Balancer — listener rules, weighted target groups",
      "AWS docs : EC2 Auto Scaling — scaling policies, lifecycle hooks, warm pools",
      "AWS docs : Route 53 — routing policies, health checks, failover"
    ],
    links: [
      ["ALB listener rules", _DOC + "elasticloadbalancing/latest/application/listener-update-rules.html"],
      ["EC2 Auto Scaling policies", _DOC + "autoscaling/ec2/userguide/as-scaling-simple-step.html"],
      ["Auto Scaling lifecycle hooks", _DOC + "autoscaling/ec2/userguide/lifecycle-hooks.html"],
      ["Auto Scaling warm pools", _DOC + "autoscaling/ec2/userguide/ec2-auto-scaling-warm-pools.html"],
      ["Route 53 routing policies", _DOC + "Route53/latest/DeveloperGuide/routing-policy.html"]
    ],
    focus: [
      "ALB = Layer 7 (HTTP/HTTPS/gRPC/WebSocket), NLB = Layer 4 (TCP/UDP/TLS), GWLB = Layer 3",
      "ALB weighted target groups : A/B testing et blue/green progressif (poids 0–100)",
      "Auto Scaling lifecycle hooks : Pending:Wait (init) et Terminating:Wait (drain)",
      "Scaling policies : simple, step, target tracking — suspendre des processus AS",
      "Warm pools : instances pré-initialisées → scale-out sans délai de boot/init",
      "Route 53 failover : actif-passif avec health check sur primaire",
      "Route 53 latency-based : dirige vers la région AWS avec la plus basse latence mesurée",
      "Route 53 geoproximity : bias pour attirer/repousser le trafic d'une région"
    ]
  },
  {
    d: 10,
    theme: "Multi-AZ, bases de données hautement disponibles",
    dom: ["D3 · Resilient Cloud Solutions · 15 %"],
    time: "≈ 1 h 30 lecture + 1 h 30 quiz",
    sections: [
      { id: "s28", titre: "🗄 RDS Multi-AZ, Aurora Global, DynamoDB Global Tables" },
      { id: "s29", titre: "🔄 ElastiCache HA, SQS pour découplage" },
      { id: "s30", titre: "🏗 Architectures résilientes : Lambda, ECS, conteneurs" }
    ],
    read: [
      "AWS docs : RDS — Multi-AZ, read replicas, failover process",
      "AWS docs : Aurora — Global Database, Multi-Master, Serverless v2",
      "AWS docs : DynamoDB — Global Tables, on-demand, DAX"
    ],
    links: [
      ["RDS Multi-AZ", _DOC + "AmazonRDS/latest/UserGuide/Concepts.MultiAZ.html"],
      ["Aurora Global Database", _DOC + "AmazonRDS/latest/AuroraUserGuide/aurora-global-database.html"],
      ["DynamoDB Global Tables", _DOC + "amazondynamodb/latest/developerguide/GlobalTables.html"],
      ["ElastiCache Redis", _DOC + "AmazonElastiCache/latest/red-ug/WhatIs.html"],
      ["ECS service rolling update", _DOC + "AmazonECS/latest/developerguide/deployment-type-ecs.html"]
    ],
    focus: [
      "RDS Multi-AZ : failover automatique ~60s, synchronous replication standby (pas lisible)",
      "RDS Read Replicas : asynchronous, lisibles, peuvent être promus — pas auto-failover",
      "Aurora Global : réplication < 1s, secondaire peut être promu en < 1 min (RPO~0)",
      "DynamoDB Global Tables : active-active multi-région, last-write-wins",
      "ElastiCache Redis cluster mode : sharding + réplication, Multi-AZ avec auto-failover",
      "ECS rolling update : minimumHealthyPercent / maximumPercent (ex: 100/200 = 0 downtime)",
      "Lambda : multi-AZ par défaut dans une région, concurrence provisionnée pour latence"
    ]
  },
  {
    d: 11,
    theme: "Disaster Recovery & Backup",
    dom: ["D3 · Resilient Cloud Solutions · 15 %"],
    time: "≈ 1 h 15 lecture + 1 h quiz",
    sections: [
      { id: "s31", titre: "🔁 Stratégies DR : pilot light, warm standby, multi-site" },
      { id: "s32", titre: "💾 AWS Backup, S3 Replication, Elastic Disaster Recovery" }
    ],
    read: [
      "AWS docs : AWS Backup — backup plans, vault, cross-region/cross-account copy",
      "AWS docs : Elastic Disaster Recovery (DRS) — replication, failover, fallback",
      "AWS docs : S3 — Cross-Region Replication, Same-Region Replication, Replication Time Control"
    ],
    links: [
      ["AWS Backup", _DOC + "aws-backup/latest/devguide/whatisbackup.html"],
      ["Elastic Disaster Recovery", _DOC + "drs/latest/userguide/what-is-drs.html"],
      ["S3 Cross-Region Replication", _DOC + "AmazonS3/latest/userguide/replication.html"],
      ["CloudFront failover", _DOC + "AmazonCloudFront/latest/DeveloperGuide/high_availability_origin_failover.html"]
    ],
    focus: [
      "DR spectrum : backup/restore > pilot light > warm standby > multi-site active/active",
      "RTO : temps pour restaurer le service | RPO : données perdues acceptables (fenêtre)",
      "Pilot light : noyau minimal répliqué (DB), scale rapide lors d'un incident",
      "Warm standby : version réduite en prod secondaire, scale up en cas de failover",
      "AWS Backup : vaults (coffres), backup plans (schedules + retention), cross-account copy",
      "DRS : réplication continue vers AWS → failover + fallback, RPO proche de 0",
      "S3 CRR (cross-region) vs SRR (same-region) — avec ou sans delete markers répliqués",
      "S3 Replication Time Control (RTC) : 99,99% des objets répliqués en 15 min (SLA)"
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // DOMAINE 4 : Monitoring & Logging — 15 % — 3 jours (J12–J14)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    d: 12,
    theme: "CloudWatch métriques, alarmes & dashboards",
    dom: ["D4 · Monitoring & Logging · 15 %"],
    time: "≈ 1 h 30 lecture + 1 h 30 quiz",
    sections: [
      { id: "s33", titre: "📊 Métriques : namespaces, dimensions, custom metrics, math" },
      { id: "s34", titre: "🔔 Alarmes : composite, anomaly detection, actions" },
      { id: "s35", titre: "🔎 X-Ray : traces, segments, annotations, service maps" }
    ],
    read: [
      "AWS docs : CloudWatch — metrics, namespaces, dimensions, metric math",
      "AWS docs : CloudWatch Alarms — composite alarms, anomaly detection",
      "AWS docs : AWS X-Ray — segments, subsegments, annotations, metadata, groups"
    ],
    links: [
      ["CloudWatch Metrics", _DOC + "AmazonCloudWatch/latest/monitoring/working_with_metrics.html"],
      ["CloudWatch Alarms", _DOC + "AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html"],
      ["CloudWatch Anomaly Detection", _DOC + "AmazonCloudWatch/latest/monitoring/CloudWatch_Anomaly_Detection.html"],
      ["X-Ray concepts", _DOC + "xray/latest/devguide/xray-concepts.html"],
      ["X-Ray sampling rules", _DOC + "xray/latest/devguide/xray-console-sampling.html"]
    ],
    focus: [
      "Standard resolution (1 min) vs high resolution (1 s) — coût élevé pour HR",
      "Métriques custom : namespace propre + dimensions (service, instance, env)",
      "Metric Math : combiner métriques → ex: ErrorRate = Errors / Requests * 100",
      "Composite alarms : combinent ALARM states avec AND/OR — réduire alert fatigue",
      "Anomaly detection : bande EXPECTED ± écart-type, utile pour saisonnalité",
      "X-Ray trace = ensemble de segments à travers microservices d'une requête",
      "X-Ray annotations : indexées → filtrables | metadata : non indexées",
      "X-Ray sampling : par défaut 1 req/s + 5 % — custom sampling rules dans console"
    ]
  },
  {
    d: 13,
    theme: "CloudWatch Logs & observabilité avancée",
    dom: ["D4 · Monitoring & Logging · 15 %"],
    time: "≈ 1 h 30 lecture + 1 h 30 quiz",
    sections: [
      { id: "s36", titre: "📜 CloudWatch Logs : groupes, streams, metric filters, Insights" },
      { id: "s37", titre: "🔔 EventBridge : rules, event buses, Pipes, Scheduler" },
      { id: "s38", titre: "📡 Kinesis Data Streams, Firehose & OpenSearch" }
    ],
    read: [
      "AWS docs : CloudWatch Logs — metric filters, subscription filters, Logs Insights",
      "AWS docs : EventBridge — event buses, rules, targets, Pipes, Scheduler",
      "AWS docs : Kinesis Data Streams vs Firehose — use cases, delivery streams"
    ],
    links: [
      ["CloudWatch Logs Insights", _DOC + "AmazonCloudWatch/latest/logs/AnalyzingLogData.html"],
      ["CloudWatch subscription filters", _DOC + "AmazonCloudWatch/latest/logs/CrossAccountSubscriptions.html"],
      ["EventBridge rules", _DOC + "eventbridge/latest/userguide/eb-rules.html"],
      ["EventBridge Pipes", _DOC + "eventbridge/latest/userguide/eb-pipes.html"],
      ["Kinesis Data Streams", _DOC + "streams/latest/dev/introduction.html"],
      ["Kinesis Firehose", _DOC + "firehose/latest/dev/what-is-this-service.html"]
    ],
    focus: [
      "Metric filters : extraire métriques de logs → alarme sur erreur 5xx, pattern matching",
      "Logs Insights : requêtes sur log groups multi-sources, queries prédéfinies",
      "Subscription filters : streamer logs vers Lambda, Kinesis, Firehose en temps réel",
      "EventBridge event bus : default (services AWS) vs custom bus vs partner bus",
      "EventBridge rules : event pattern matching (JSON) vs schedule (cron/rate)",
      "EventBridge Pipes : source (SQS/Kinesis/DDB) → filter → enrich → target — point-à-point",
      "Kinesis Streams : temps réel, consumers lisent, retention 1–365 jours, shards",
      "Kinesis Firehose : near-real-time (buffer 60s min), livraison S3/Redshift/OpenSearch"
    ]
  },
  {
    d: 14,
    theme: "CloudTrail, audit continu & observabilité sécurité",
    dom: ["D4 · Monitoring & Logging · 15 %"],
    time: "≈ 1 h 15 lecture + 1 h quiz",
    sections: [
      { id: "s39", titre: "🕵️ CloudTrail : event types, Insights, intégrité des logs" },
      { id: "s40", titre: "🌐 VPC Flow Logs, DNS Logs & centralisation des logs" }
    ],
    read: [
      "AWS docs : CloudTrail — event types, log file integrity, Insights events",
      "AWS docs : VPC Flow Logs — log format, Athena analysis, traffic mirroring",
      "AWS docs : CloudWatch — cross-account log centralization, Observability Access Manager"
    ],
    links: [
      ["CloudTrail Insights", _DOC + "awscloudtrail/latest/userguide/logging-insights-events-with-cloudtrail.html"],
      ["CloudTrail log integrity", _DOC + "awscloudtrail/latest/userguide/cloudtrail-log-file-validation-intro.html"],
      ["VPC Flow Logs", _DOC + "vpc/latest/userguide/flow-logs.html"],
      ["CloudWatch cross-account", _DOC + "AmazonCloudWatch/latest/monitoring/Cross-Account-Cross-Region.html"]
    ],
    focus: [
      "CloudTrail : Management events (toujours actifs) vs Data events (S3 PutObject, Lambda invoke) — coût",
      "CloudTrail Insights : détecte activités inhabituelles (nb appels API anormal vs baseline)",
      "Log integrity : digest files SHA-256 signés → vérifier non-altération des logs",
      "Organisation trails : trail multi-compte depuis le compte de gestion",
      "VPC Flow Logs : ACCEPT/REJECT par flux IP, analyser dans Athena, détecter scans",
      "VPC Traffic Mirroring : capture paquets réels (deep inspection) vers NLB + appliance",
      "Centralisation logs : CloudWatch Observability Access Manager pour cross-account"
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // DOMAINE 5 : Incident & Event Response — 14 % — 3 jours (J15–J17)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    d: 15,
    theme: "Réponse aux incidents & automatisation des reméditations",
    dom: ["D5 · Incident & Event Response · 14 %"],
    time: "≈ 1 h 30 lecture + 1 h 30 quiz",
    sections: [
      { id: "s41", titre: "🚨 AWS Health, OpsCenter & Incident Manager" },
      { id: "s42", titre: "⚡ Automatisation EventBridge → Lambda → SSM Automation" },
      { id: "s43", titre: "🔍 Analyse d'échecs : CodePipeline, CodeBuild, CodeDeploy" }
    ],
    read: [
      "AWS docs : AWS Health — Health Dashboard, EventBridge integration",
      "AWS docs : Systems Manager OpsCenter — OpsItems, runbooks",
      "AWS docs : Systems Manager Incident Manager — response plans, runbooks"
    ],
    links: [
      ["AWS Health API", _DOC + "health/latest/ug/what-is-aws-health.html"],
      ["SSM OpsCenter", _DOC + "systems-manager/latest/userguide/OpsCenter.html"],
      ["SSM Incident Manager", _DOC + "incident-manager/latest/userguide/what-is-incident-manager.html"],
      ["AWS FIS", _DOC + "fis/latest/userguide/what-is.html"]
    ],
    focus: [
      "AWS Health : événements de service AWS + événements de compte → EventBridge rule → SNS/Lambda",
      "OpsCenter : OpsItems créés auto depuis CloudWatch Alarms, Config, Security Hub",
      "Incident Manager : response plan → escalation plan → engagement (PagerDuty, Slack)",
      "SSM Automation : runbook AWSSupport-* et custom → corriger automatiquement",
      "Chaos engineering : AWS Fault Injection Simulator (FIS) — experiments, stop conditions",
      "Echec CodeDeploy : deployment.log + agent logs sur instance → BeforeInstall timeout",
      "Echec CodePipeline : action en error → voir CloudWatch Logs de l'action Build/Deploy",
      "Auto recovery EC2 : CloudWatch alarm → recover action (réhabilite l'instance même AZ)"
    ]
  },
  {
    d: 16,
    theme: "Event-driven architectures — SQS & SNS",
    dom: ["D5 · Incident & Event Response · 14 %"],
    time: "≈ 1 h 30 lecture + 1 h 30 quiz",
    sections: [
      { id: "s44", titre: "📨 SQS : queues standard vs FIFO, DLQ, visibilité, polling" },
      { id: "s45", titre: "📢 SNS : topics, subscriptions, fan-out, message filtering" },
      { id: "s46", titre: "🔗 Patterns : fan-out SQS/SNS, dead-letter, retry" }
    ],
    read: [
      "AWS docs : SQS — message lifecycle, visibility timeout, DLQ, long polling",
      "AWS docs : SNS — message filtering, FIFO topics, fanout patterns, delivery retries",
      "AWS docs : Lambda — SQS event source mapping, batch windows, error handling"
    ],
    links: [
      ["SQS concepts", _DOC + "AWSSimpleQueueService/latest/SQSDeveloperGuide/welcome.html"],
      ["SQS Dead-Letter Queues", _DOC + "AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html"],
      ["SNS message filtering", _DOC + "sns/latest/dg/sns-message-filtering.html"],
      ["SNS FIFO topics", _DOC + "sns/latest/dg/sns-fifo-topics.html"]
    ],
    focus: [
      "SQS standard : ordre best-effort, au moins 1x | SQS FIFO : ordre garanti, exactement 1x",
      "Visibility timeout : message invisible pendant traitement — ChangeMessageVisibility si besoin",
      "DLQ : receiveCount > maxReceiveCount → déplacé, alerter via CloudWatch Metric",
      "SQS long polling (20s) vs short polling : réduire coût et faux positifs",
      "Lambda SQS ESM : batch size + batch window → échec partiel avec reportBatchItemFailures",
      "SNS → SQS fan-out : découpler producteur/consommateurs, durabilité et rejeu",
      "SNS filter policies : livrer seulement si attributs correspondent (JSON)",
      "SNS FIFO + SQS FIFO : strictement ordonné et déduplication end-to-end"
    ]
  },
  {
    d: 17,
    theme: "Step Functions & orchestration d'incidents",
    dom: ["D5 · Incident & Event Response · 14 %"],
    time: "≈ 1 h 15 lecture + 1 h quiz",
    sections: [
      { id: "s47", titre: "🔄 Step Functions : workflows standard vs express, states" },
      { id: "s48", titre: "🛡 Patterns avancés : callback, waitForTaskToken, map" }
    ],
    read: [
      "AWS docs : Step Functions — state types, error handling, callbacks, Express vs Standard",
      "AWS docs : Step Functions — Map state, Parallel state, waitForTaskToken"
    ],
    links: [
      ["Step Functions Standard vs Express", _DOC + "step-functions/latest/dg/concepts-standard-vs-express.html"],
      ["Step Functions error handling", _DOC + "step-functions/latest/dg/concepts-error-handling.html"],
      ["Step Functions callback pattern", _DOC + "step-functions/latest/dg/connect-to-resource.html"]
    ],
    focus: [
      "Standard : longue durée (1 an), async, audit complet, at-most-once → fiables",
      "Express : hautes perf (5 min), at-least-once, synchrone possible → IoT/streaming",
      "States : Task, Choice, Wait, Parallel, Map, Pass, Succeed, Fail",
      "Error handling : Catch (Try/Catch) + Retry (exponential backoff, maxAttempts, jitter)",
      "Callback pattern : task token → Lambda → SendTaskSuccess/SendTaskFailure",
      "Map state : itérer sur tableau (Inline = max 40 items, Distributed = illimité)",
      "Parallel state : branches en parallèle — toutes doivent réussir, sinon Catch global"
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // DOMAINE 6 : Security & Compliance — 17 % — 3 jours (J18–J19) + révision J20
  // ═══════════════════════════════════════════════════════════════════════════
  {
    d: 18,
    theme: "IAM avancé, KMS & protection des données",
    dom: ["D6 · Security & Compliance · 17 %"],
    time: "≈ 1 h 30 lecture + 1 h 30 quiz",
    sections: [
      { id: "s49", titre: "🔒 IAM avancé : rôles, boundaries, Identity Center, OIDC" },
      { id: "s50", titre: "🗝 KMS, CloudHSM, ACM & gestion des clés" },
      { id: "s51", titre: "🔐 Secrets Manager, Macie & data protection" }
    ],
    read: [
      "AWS docs : IAM — permission boundaries, identity federation, IAM Identity Center",
      "AWS docs : KMS — CMK types, key policies, grants, envelope encryption",
      "AWS docs : ACM — public vs private CA, certificate lifecycle"
    ],
    links: [
      ["IAM Permission Boundaries", _DOC + "IAM/latest/UserGuide/access_policies_boundaries.html"],
      ["IAM Identity Center", _DOC + "singlesignon/latest/userguide/what-is.html"],
      ["KMS Key Management", _DOC + "kms/latest/developerguide/concepts.html"],
      ["KMS Envelope Encryption", _DOC + "kms/latest/developerguide/concepts.html#enveloping"],
      ["CloudHSM", _DOC + "cloudhsm/latest/userguide/introduction.html"],
      ["Amazon Macie", _DOC + "macie/latest/user/what-is-macie.html"]
    ],
    focus: [
      "Permission boundary : plafond des permissions, nécessaire pour déléguer la création de rôles",
      "SCP vs permission boundary : SCP = niveau org, boundary = niveau IAM entity",
      "IAM Identity Center (SSO) : portail unique, fédération SAML/OIDC, permission sets",
      "KMS CMK : AWS managed, customer managed (CMK), customer provided (BYOK — CloudHSM)",
      "Envelope encryption : CMK chiffre la data key, data key chiffre les données",
      "KMS key policy : DOIT permettre explicitement le compte root (sinon clé inaccessible!)",
      "CloudHSM : FIPS 140-2 Level 3, contrôle total des clés — pour compliance stricte",
      "ACM Private CA : autorité interne pour services internes, intégration ELB/API Gateway",
      "Macie : ML pour découvrir/classifier PII dans S3, alertes sur expositions accidentelles"
    ]
  },
  {
    d: 19,
    theme: "Sécurité réseau, audit & GuardDuty",
    dom: ["D6 · Security & Compliance · 17 %"],
    time: "≈ 1 h 30 lecture + 1 h 30 quiz",
    sections: [
      { id: "s52", titre: "🛡 GuardDuty, Security Hub, Detective & Inspector" },
      { id: "s53", titre: "🌐 WAF, Shield, Network Firewall & sécurité réseau" },
      { id: "s54", titre: "🏛 Conformité continue : Config, audit & remédiation" }
    ],
    read: [
      "AWS docs : GuardDuty — threat intelligence, finding types, suppression rules",
      "AWS docs : Security Hub — standards, findings aggregation, automated response",
      "AWS docs : AWS WAF — Web ACLs, rule groups, managed rules, rate-based rules"
    ],
    links: [
      ["GuardDuty", _DOC + "guardduty/latest/ug/what-is-guardduty.html"],
      ["Security Hub", _DOC + "securityhub/latest/userguide/what-is-securityhub.html"],
      ["Amazon Detective", _DOC + "detective/latest/adminguide/what-is-detective.html"],
      ["Amazon Inspector", _DOC + "inspector/latest/user/what-is-inspector.html"],
      ["AWS WAF", _DOC + "waf/latest/developerguide/waf-chapter.html"],
      ["AWS Shield Advanced", _DOC + "waf/latest/developerguide/ddos-overview.html"],
      ["Network Firewall", _DOC + "network-firewall/latest/developerguide/what-is-aws-network-firewall.html"]
    ],
    focus: [
      "GuardDuty : analyse CloudTrail + VPC Flow Logs + DNS → menaces (crypto mining, exfil)",
      "Security Hub : agrège findings GuardDuty/Inspector/Config → score sécurité, standards (CIS, PCI)",
      "Amazon Detective : investigation forensique — graphe de comportement à partir de GuardDuty",
      "Inspector : scan vulnérabilités EC2 (agent) + ECR images + Lambda (sans agent)",
      "WAF : WebACL → rule groups → rules (IP set, geo, rate-based, SQL injection, XSS)",
      "Shield Standard (gratuit) vs Shield Advanced (DRT + cost protection + application layer)",
      "Network Firewall : inspection stateful + stateless dans le VPC (pare-feu au niveau subnet)",
      "Config + Security Hub : findings consolidés → EventBridge → Lambda → remediation auto"
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // JOUR 20 : Révision finale & examen blanc
  // ═══════════════════════════════════════════════════════════════════════════
  {
    d: 20,
    theme: "Révision finale, pièges Pro & examen blanc",
    dom: ["D1", "D2", "D3", "D4", "D5", "D6"],
    time: "180 min examen blanc chrono + 1 h révision ciblée",
    sections: [
      { id: "s55", titre: "⚠️ Les 15 pièges classiques du niveau Pro" },
      { id: "s56", titre: "🔑 Services à ne pas confondre — les 10 paires piégeuses" },
      { id: "s57", titre: "📊 Révision ciblée par domaine selon vos scores J1–J19" }
    ],
    read: [
      "Révision D1 : CodePipeline → CodeBuild → CodeDeploy → CodeArtifact",
      "Révision D2 : CloudFormation StackSets vs Nested Stacks vs CDK vs SSM",
      "Révision D6 : GuardDuty vs Inspector vs Detective vs Security Hub — rôles distincts"
    ],
    links: [
      ["Exam guide DOP-C02 PDF", "https://d1.awsstatic.com/training-and-certification/docs-devops-pro/AWS-Certified-DevOps-Engineer-Professional_Exam-Guide.pdf"],
      ["AWS docs DOP-C02 officiel", "https://docs.aws.amazon.com/aws-certification/latest/devops-engineer-professional-02/devops-engineer-professional-02.html"],
      ["Tutorials Dojo — examens blancs", "https://portal.tutorialsdojo.com/courses/aws-certified-devops-engineer-professional-practice-exams/"],
      ["Stephane Maarek — cours Udemy", "https://www.udemy.com/course/aws-certified-devops-engineer-professional-hands-on/"]
    ],
    focus: [
      "Piège 1 : SCP ne donnent PAS de permissions — uniquement des guardrails deny sur l'OU",
      "Piège 2 : CloudFormation Custom Resource → toujours renvoyer un physicalResourceId",
      "Piège 3 : CodeDeploy in-place ECS/Lambda n'existe PAS — toujours blue/green",
      "Piège 4 : SSM Parameter Store SecureString ≠ Secrets Manager — pas de rotation auto SSM",
      "Piège 5 : EventBridge Rules vs Pipes — Pipes = connexion point-à-point avec filtering",
      "Piège 6 : X-Ray annotations (indexées, filtrables) vs metadata (non indexées)",
      "Piège 7 : KMS CMK key policy DOIT autoriser le compte root (sinon clé inutilisable)",
      "Piège 8 : GuardDuty trouve les menaces, Inspector les vulnérabilités, Detective investigue",
      "Piège 9 : CloudFormation UpdatePolicy s'applique aux ASG, pas DependsOn",
      "Piège 10 : Kinesis Firehose = near-real-time (buffer 60s min), Streams = réel temps réel",
      "Piège 11 : RDS Multi-AZ standby = NON lisible — uniquement pour failover",
      "Piège 12 : CDK bootstrapping requis avant tout CDK deploy (CDKToolkit stack)",
      "Piège 13 : CodeBuild post_build s'exécute MÊME si build échoue",
      "Piège 14 : Config rules évaluent les changements, pas les events temps réel (slight delay)",
      "Piège 15 : Shield Advanced ≠ Shield Standard — DRT + SLA + protection coûts DDoS"
    ],
    extra: "Rejoue tes erreurs des jours 1–19 dans l'onglet « Mes erreurs » avant l'examen."
  }
];

// ── Questions ────────────────────────────────────────────────────────────────
// Format : { t: "thème", q: "question", o: ["A","B","C","D"], a: 0, e: "explication" }
window.QDATA = {};
