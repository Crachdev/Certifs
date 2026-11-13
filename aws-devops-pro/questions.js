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
// Format : { t: "thème", q: "question", o: ["A","B","C","D"], a: 0|[0,2], e: "explication" }
window.QDATA = {

1: [
  // ─── CodePipeline : structure & stages ────────────────────────────────────
  {
    t: "CodePipeline structure",
    q: "Dans CodePipeline, quel est l'ordre correct des catégories d'actions standard ?",
    o: [
      "Build → Source → Test → Deploy → Approval",
      "Source → Build → Test → Deploy → Approval",
      "Source → Test → Build → Approval → Deploy",
      "Approval → Source → Build → Test → Deploy"
    ],
    a: 1,
    e: "Le flux canonique CodePipeline est Source (récupérer le code) → Build (compiler/packager) → Test (valider) → Deploy (déployer). Approval peut s'intercaler entre Deploy ou Test selon le besoin, mais Source est toujours en premier."
  },
  {
    t: "CodePipeline structure",
    q: "Un pipeline CodePipeline peut-il avoir plusieurs actions dans le même stage qui s'exécutent en parallèle ?",
    o: [
      "Non, les actions dans un stage sont toujours séquentielles",
      "Oui, en ne spécifiant pas d'ordre (runOrder) ou en donnant le même runOrder à plusieurs actions",
      "Oui, mais uniquement pour les actions de type Build",
      "Non, le parallélisme n'est possible qu'entre stages"
    ],
    a: 1,
    e: "Dans un stage CodePipeline, les actions avec le même runOrder s'exécutent en parallèle. Par défaut (runOrder=1), toutes les actions du stage tournent en parallèle. Pour les séquencer, on donne des runOrder différents (1, 2, 3…)."
  },
  {
    t: "CodePipeline structure",
    q: "Qu'est-ce qu'une 'transition' dans CodePipeline et quel est son intérêt opérationnel ?",
    o: [
      "Une transition est le déclencheur initial du pipeline depuis la source",
      "Une transition est le lien entre deux stages ; la désactiver bloque l'exécution sans supprimer le pipeline",
      "Une transition est une action de type Approval obligatoire entre chaque stage",
      "Une transition est un webhook vers un service externe pour notifier la progression"
    ],
    a: 1,
    e: "Les transitions relient les stages entre eux. On peut désactiver une transition pour geler le déploiement vers un environnement (ex : gel de prod en fin d'année) sans supprimer ni modifier le pipeline. Les exécutions s'accumulent en attente et reprennent quand on réactive."
  },
  {
    t: "CodePipeline déclencheurs",
    q: "Une équipe veut déclencher son pipeline CodePipeline automatiquement à chaque push sur la branche 'main' d'un dépôt GitHub. Quelle est la méthode recommandée par AWS ?",
    o: [
      "Utiliser l'action Source avec le provider CodeCommit et configurer un miroir GitHub",
      "Utiliser AWS CodeStar Connections (GitHub v2) avec un webhook géré par EventBridge",
      "Configurer un webhook GitHub manuel pointant vers l'API CodePipeline",
      "Utiliser CodePipeline en mode polling (vérification toutes les 60s) sur le repo GitHub"
    ],
    a: 1,
    e: "AWS recommande AWS CodeStar Connections (GitHub v2) : il crée un webhook sécurisé géré par AWS qui déclenche le pipeline via EventBridge dès qu'un push arrive sur la branche configurée. Le polling est l'ancienne méthode, moins réactif et déprécié pour GitHub."
  },
  {
    t: "CodePipeline déclencheurs",
    q: "Un pipeline CodePipeline doit se déclencher uniquement quand un objet spécifique est mis à jour dans un bucket S3. Comment configurer cela correctement ?",
    o: [
      "Configurer le polling S3 dans l'action Source avec le préfixe de l'objet",
      "Créer une règle EventBridge sur l'événement S3 PutObject avec un filtre sur la clé de l'objet",
      "Activer les notifications S3 → SNS → CodePipeline directement",
      "Utiliser une Lambda qui appelle StartPipelineExecution après chaque upload S3"
    ],
    a: 1,
    e: "La méthode recommandée est une règle EventBridge filtrant sur l'événement S3 PutObject avec le préfixe/suffixe de l'objet. EventBridge déclenche le pipeline sans polling. Le polling S3 fonctionne mais est lent (~1 min) et déprécié. La Lambda fonctionne aussi mais c'est une complexité inutile."
  },
  {
    t: "CodePipeline artifact store",
    q: "Où CodePipeline stocke-t-il les artifacts entre les stages (ex : le package buildé entre Build et Deploy) ?",
    o: [
      "Dans un bucket EFS partagé entre les actions",
      "Dans un bucket S3 configuré comme artifact store, chiffré par défaut",
      "Dans ECR si c'est une image Docker, sinon dans CodeCommit",
      "Dans DynamoDB sous forme de métadonnées binaires"
    ],
    a: 1,
    e: "CodePipeline utilise un bucket S3 (artifact store) pour passer les artifacts entre stages. Par défaut il est chiffré avec SSE-S3 ; on peut utiliser une CMK KMS customer-managed pour plus de contrôle (obligatoire pour les pipelines cross-account)."
  },
  {
    t: "CodePipeline artifact store",
    q: "Pour un pipeline CodePipeline multi-compte (compte A build, compte B deploy), quelle configuration est obligatoire pour que le compte B puisse lire les artifacts du compte A ?",
    o: [
      "Activer S3 Cross-Region Replication entre les deux comptes",
      "Utiliser une CMK KMS customer-managed partagée entre les deux comptes + bucket policy permettant au compte B",
      "Utiliser uniquement SSE-S3 et ajouter le compte B en tant que membre de l'organisation",
      "Dupliquer l'artifact store dans chaque compte avec une Lambda de synchronisation"
    ],
    a: 1,
    e: "Le pipeline cross-account nécessite : (1) une CMK KMS customer-managed dans le compte A que le compte B peut utiliser (via key policy), (2) un bucket S3 avec une bucket policy autorisant le compte B à lire. SSE-S3 ne fonctionne pas car les clés ne sont pas partageables cross-account."
  },
  // ─── Variables & configuration ────────────────────────────────────────────
  {
    t: "CodePipeline variables",
    q: "Comment référencer une variable produite par une action CodeBuild dans une action Deploy du même pipeline ?",
    o: [
      "#{BuildAction.IMAGE_TAG} en utilisant le namespace de l'action source",
      "$(BuildAction.IMAGE_TAG) en utilisant la syntaxe bash",
      "{{BuildAction.IMAGE_TAG}} en utilisant la syntaxe Handlebars",
      "Les variables ne peuvent pas traverser les stages, seulement les actions du même stage"
    ],
    a: 0,
    e: "CodePipeline utilise la syntaxe #{Namespace.Variable} pour les variables. On configure un namespace sur l'action qui produit la variable (ex: namespace='BuildVars'), puis on la consomme avec #{BuildVars.IMAGE_TAG} dans une action ultérieure. Les variables peuvent traverser les stages."
  },
  {
    t: "CodePipeline variables",
    q: "Quelles sont les sources de variables disponibles nativement dans CodePipeline ? (choisir 2)",
    o: [
      "Variables de pipeline définies au niveau du pipeline (PipelineVariables)",
      "Variables système comme #{codepipeline.PipelineExecutionId}",
      "Variables Lambda lues depuis Parameter Store automatiquement",
      "Variables issues de DynamoDB via un connecteur natif CodePipeline"
    ],
    a: [0, 1],
    e: "CodePipeline propose : (1) des variables de pipeline définies par l'utilisateur au lancement (StartPipelineExecution avec variables), (2) des variables système comme #{codepipeline.PipelineExecutionId}, #{codepipeline.PipelineArn}. Les variables d'actions (ex: CodeBuild) sont une troisième source. Parameter Store et DynamoDB nécessitent une Lambda intermédiaire."
  },
  {
    t: "CodePipeline Approval",
    q: "Une action Approval dans CodePipeline attend une validation manuelle. Que se passe-t-il si personne n'approuve dans le délai configuré (7 jours par défaut) ?",
    o: [
      "L'exécution du pipeline est abandonnée (Failed) automatiquement",
      "Le pipeline recommence depuis la Source",
      "L'action Approval est ignorée et l'exécution continue",
      "L'action reste en attente indéfiniment jusqu'à une action manuelle"
    ],
    a: 0,
    e: "Une action Approval expire après 7 jours (configurable via le token d'approbation). À l'expiration, l'exécution du pipeline passe en état Failed. Le pipeline ne recommence pas automatiquement — il faut relancer manuellement ou via une règle EventBridge."
  },
  // ─── Sources ──────────────────────────────────────────────────────────────
  {
    t: "CodePipeline sources",
    q: "Quelle différence fondamentale existe-t-il entre l'action Source CodeCommit v1 et la détection de changements via EventBridge pour CodePipeline ?",
    o: [
      "CodeCommit v1 utilise le polling toutes les minutes ; EventBridge déclenche le pipeline en temps réel",
      "CodeCommit v1 déclenche le pipeline en temps réel ; EventBridge utilise le polling",
      "Les deux sont identiques mais EventBridge coûte plus cher",
      "EventBridge ne supporte pas CodeCommit comme source"
    ],
    a: 0,
    e: "L'action Source CodeCommit en mode v1 (ancien) utilise le polling CloudWatch Events toutes ~1 minute. La méthode recommandée est de créer une règle EventBridge sur l'événement 'referenceCreated/referenceUpdated' de CodeCommit → déclenchement quasi-instantané et plus fiable."
  },
  {
    t: "CodePipeline sources",
    q: "Un pipeline CodePipeline utilise S3 comme source. Quelle condition est nécessaire pour que CodePipeline détecte les changements d'objets S3 via EventBridge ?",
    o: [
      "Activer S3 Event Notifications vers SNS",
      "Activer CloudTrail pour le bucket S3 (Data events) afin qu'EventBridge reçoive les événements PutObject",
      "Configurer le polling S3 dans les paramètres du pipeline",
      "Activer S3 Versioning uniquement"
    ],
    a: 1,
    e: "EventBridge ne reçoit les événements S3 PutObject que si CloudTrail Data Events est activé pour le bucket. Sans CloudTrail, EventBridge ne voit pas les opérations d'objets S3. S3 Versioning est requis séparément pour que CodePipeline lise la bonne version."
  },
  // ─── Notifications & monitoring ───────────────────────────────────────────
  {
    t: "CodePipeline monitoring",
    q: "Comment recevoir une notification Slack quand une exécution CodePipeline échoue ?",
    o: [
      "Configurer une règle CloudWatch Logs sur les logs CodePipeline → SNS → Lambda → Slack",
      "Créer une règle EventBridge sur l'événement 'codepipeline:pipeline:execution:failed' → SNS ou Lambda → Slack",
      "Activer CodePipeline Insights et configurer une alerte email dans la console",
      "Utiliser CodePipeline Notifications avec un chatbot AWS Chatbot connecté à Slack"
    ],
    a: 3,
    e: "La méthode la plus directe est CodePipeline Notifications → AWS Chatbot. On crée une règle de notification dans CodePipeline (onglet Notifications) sur l'événement d'échec, on la connecte à un topic SNS, puis AWS Chatbot relie le topic à un canal Slack. EventBridge + Lambda fonctionne aussi mais est plus complexe."
  },
  {
    t: "CodePipeline monitoring",
    q: "Quels événements CodePipeline peut-on cibler avec une règle EventBridge ? (choisir 2)",
    o: [
      "codepipeline:pipeline:execution:started",
      "codepipeline:action:execution:failed",
      "codepipeline:artifact:uploaded",
      "codepipeline:stage:execution:resumed"
    ],
    a: [0, 1],
    e: "EventBridge supporte les événements de niveau pipeline (started, succeeded, failed, superseded), stage (started, succeeded, failed, resumed) et action (started, succeeded, failed, canceled). Il n'y a pas d'événement 'artifact:uploaded' — les artifacts sont gérés en interne. 'stage:execution:resumed' existe bien aussi en option C."
  },
  // ─── IAM & sécurité ───────────────────────────────────────────────────────
  {
    t: "CodePipeline IAM",
    q: "Quel rôle IAM CodePipeline utilise-t-il pour accéder aux services cibles (S3, CodeBuild, CodeDeploy) lors de l'exécution d'un pipeline ?",
    o: [
      "Le rôle de l'utilisateur qui a créé le pipeline",
      "Un service role CodePipeline créé/assigné au pipeline avec les permissions nécessaires",
      "Le rôle AWSCodePipelineFullAccess automatiquement attaché",
      "Le rôle de la fonction Lambda associée au pipeline"
    ],
    a: 1,
    e: "Chaque pipeline CodePipeline est associé à un service role IAM. Ce rôle doit avoir les permissions pour accéder à l'artifact store S3, appeler les services des actions (CodeBuild, CodeDeploy, ECS, Lambda…). En mode cross-account, ce rôle doit aussi pouvoir assumer des rôles dans les comptes cibles."
  },
  {
    t: "CodePipeline IAM",
    q: "Pour une action Invoke Lambda dans CodePipeline, quelles permissions le service role du pipeline doit-il avoir ?",
    o: [
      "lambda:InvokeFunction uniquement",
      "lambda:InvokeFunction + s3:GetObject + s3:PutObject pour accéder à l'artifact store",
      "lambda:InvokeFunction + codepipeline:PutJobSuccessResult + codepipeline:PutJobFailureResult",
      "lambda:InvokeFunction + iam:PassRole"
    ],
    a: 0,
    e: "Pour une action Invoke, le service role du pipeline a besoin de lambda:InvokeFunction. C'est la Lambda elle-même qui appelle codepipeline:PutJobSuccessResult / PutJobFailureResult pour signaler le résultat — ces permissions sont donc sur le rôle de la Lambda, pas sur le service role du pipeline."
  },
  // ─── Exécutions & états ───────────────────────────────────────────────────
  {
    t: "CodePipeline exécutions",
    q: "Que se passe-t-il si un nouveau commit arrive pendant qu'une exécution CodePipeline est déjà en cours ?",
    o: [
      "Le pipeline lance immédiatement une deuxième exécution en parallèle",
      "Le nouveau commit est ignoré et perdu",
      "Le nouveau commit est mis en attente ; si une troisième exécution arrive, la deuxième en attente est annulée (superseded)",
      "Le pipeline arrête l'exécution courante et recommence avec le nouveau commit"
    ],
    a: 2,
    e: "CodePipeline ne lance qu'une exécution à la fois par défaut. Le nouveau commit est mis en attente (Queued). Si un autre commit arrive encore, le précédent en attente est marqué 'Superseded' et annulé — seul le commit le plus récent attend. Ce comportement évite les déploiements en rafale."
  },
  {
    t: "CodePipeline exécutions",
    q: "Comment forcer CodePipeline à traiter chaque commit individuellement sans qu'aucun ne soit 'superseded' ?",
    o: [
      "Activer le mode 'QUEUED' dans la configuration ExecutionMode du pipeline",
      "Créer un pipeline par branche",
      "Augmenter le MaxConcurrency dans les paramètres avancés du pipeline",
      "Il est impossible d'éviter le superseded dans CodePipeline"
    ],
    a: 0,
    e: "CodePipeline propose ExecutionMode : SUPERSEDED (défaut — annule les exécutions en attente), QUEUED (traite chaque exécution dans l'ordre sans en annuler), PARALLEL (plusieurs exécutions simultanées). QUEUED garantit qu'aucun commit n'est sauté mais peut créer un backlog important."
  },
  {
    t: "CodePipeline exécutions",
    q: "Une exécution CodePipeline est bloquée sur une action Deploy depuis 2 heures. L'équipe décide de l'arrêter. Quelle API utiliser ?",
    o: [
      "StopPipelineExecution avec le paramètre abandon=true",
      "DeletePipelineExecution",
      "DisablePipelineTransition pour bloquer les stages suivants puis attendre le timeout",
      "PutApprovalResult avec 'Rejected' pour forcer l'arrêt"
    ],
    a: 0,
    e: "StopPipelineExecution permet d'arrêter une exécution en cours. Le paramètre 'abandon' (true/false) détermine si l'action en cours est abandonnée immédiatement (abandon=true) ou si on attend qu'elle termine avant d'arrêter le pipeline (abandon=false)."
  },
  // ─── Intégrations & patterns ──────────────────────────────────────────────
  {
    t: "CodePipeline intégrations",
    q: "Une équipe veut ajouter un scan de sécurité (SAST) via un outil tiers non supporté nativement par CodePipeline. Quelle est la meilleure approche ?",
    o: [
      "Inclure le scan dans le buildspec.yml de CodeBuild",
      "Utiliser une action de type 'Invoke' avec une Lambda qui orchestre l'outil tiers",
      "Créer une action de type Custom Provider en enregistrant le provider tiers",
      "Les deux premières options A et B sont valides selon le contexte"
    ],
    a: 3,
    e: "Les deux approches sont valides : (A) intégrer l'outil SAST dans le buildspec CodeBuild si l'outil a un CLI (SonarQube, Checkmarx CLI…) — simple mais couplé au Build stage. (B) Lambda Invoke si l'outil a une API REST et qu'on veut un stage dédié. Un Custom Provider tiers (option C) est aussi possible mais plus complexe à maintenir."
  },
  {
    t: "CodePipeline intégrations",
    q: "CodePipeline doit déployer sur ECS en utilisant une image Docker dont le tag est produit dynamiquement par CodeBuild. Comment passer ce tag à l'action Deploy ECS ?",
    o: [
      "Écrire le tag dans un fichier imagedefinitions.json dans les artifacts de CodeBuild",
      "Utiliser les variables de pipeline : CodeBuild exporte IMAGE_TAG, l'action ECS le lit via #{BuildNS.IMAGE_TAG}",
      "Hardcoder le tag 'latest' et laisser ECS récupérer la dernière image",
      "Les options A et B sont toutes les deux correctes selon le type d'action ECS utilisé"
    ],
    a: 3,
    e: "Pour l'action ECS standard, on utilise le fichier imagedefinitions.json dans les artifacts (format [{name, imageUri}]). Pour l'action ECS (Blue/Green) avec CodeDeploy, on utilise imageDetail.json. Les variables de pipeline (option B) peuvent aussi passer le tag si l'action ECS supporte les variables — les deux méthodes coexistent selon le type d'action."
  },
  {
    t: "CodePipeline intégrations",
    q: "Quelle action CodePipeline permet de déclencher un pipeline dans un autre compte AWS ?",
    o: [
      "Une action Source cross-account avec AssumeRole",
      "Une action Invoke Lambda qui appelle StartPipelineExecution dans le compte cible via AssumeRole",
      "Une action Deploy de type CloudFormation StackSet cross-account",
      "CodePipeline ne supporte pas le déclenchement cross-account direct"
    ],
    a: 1,
    e: "Il n'existe pas d'action native 'TriggerPipeline' dans CodePipeline. La méthode courante est une action Invoke Lambda dans le compte A, où la Lambda assume un rôle dans le compte B et appelle StartPipelineExecution. EventBridge cross-account peut aussi router un événement pour déclencher le pipeline cible."
  },
  // ─── Scénarios Pro niveau difficile ──────────────────────────────────────
  {
    t: "CodePipeline scénario avancé",
    q: "Un pipeline CodePipeline déploie une Lambda via CloudFormation. L'équipe veut s'assurer que le déploiement est rollback automatiquement si les erreurs CloudWatch Logs dépassent un seuil dans les 10 minutes suivant le déploiement. Quelle combinaison de services utiliser ?",
    o: [
      "CodePipeline Approval + CloudWatch Alarm → désactiver la transition manuellement",
      "CloudFormation rollback triggers : associer une CloudWatch Alarm au stack Update → rollback auto si ALARM",
      "CodeDeploy Lambda canary avec CloudWatch Alarm configurée comme rollback trigger",
      "Les options B et C sont toutes les deux valides selon l'architecture"
    ],
    a: 3,
    e: "Les deux approches fonctionnent : (B) CloudFormation rollback triggers permettent d'associer des alarmes CloudWatch au déploiement CFN — si l'alarme se déclenche pendant ou juste après l'update, CFN rollback auto. (C) Si CodeDeploy est utilisé pour la Lambda (canary/linear), les CloudWatch Alarms configurées comme rollback triggers stoppent et rollback le déploiement. Le choix dépend de si on utilise CFN direct ou CodeDeploy."
  },
  {
    t: "CodePipeline scénario avancé",
    q: "Une entreprise a 50 microservices chacun avec son propre pipeline CodePipeline. Elle veut un tableau de bord central montrant l'état de tous les pipelines. Quelle solution AWS native est la plus appropriée ?",
    o: [
      "Amazon CodeGuru Profiler avec l'intégration CodePipeline",
      "AWS Developer Tools Console — vue 'Pipelines' qui liste tous les pipelines",
      "Une Lambda qui poll ListPipelines + GetPipelineState → écrit dans DynamoDB → CloudWatch Dashboard",
      "EventBridge → Kinesis Firehose → S3 → Athena + QuickSight pour visualiser les événements"
    ],
    a: 1,
    e: "La console AWS Developer Tools (console.aws.amazon.com/codesuite) offre une vue centrale de tous les pipelines CodePipeline avec leur état en temps réel — c'est la solution native la plus simple. Pour un dashboard custom enrichi, la Lambda/DynamoDB ou EventBridge/QuickSight sont des options valides mais surdimensionnées pour l'usage de base."
  },
  {
    t: "CodePipeline scénario avancé",
    q: "Après un déploiement CodePipeline, l'équipe remarque que l'exécution montre 'Superseded' pour plusieurs commits. Quel est le problème et quelle est la solution ?",
    o: [
      "Le pipeline est mal configuré ; il faut désactiver le mode SUPERSEDED dans les paramètres avancés",
      "C'est le comportement normal par défaut — passer en mode QUEUED si on veut traiter tous les commits",
      "Les commits sont perdus et ne peuvent pas être rejoués ; il faut reconfigurer les webhooks",
      "Le comportement indique un problème réseau entre GitHub et CodePipeline"
    ],
    a: 1,
    e: "Le mode SUPERSEDED est le comportement par défaut de CodePipeline : si un commit arrive pendant qu'un autre est en attente, l'attente est annulée. Ce n'est pas une erreur — c'est intentionnel pour éviter les backlogs. Si l'équipe veut que chaque commit soit déployé, elle doit passer en mode QUEUED dans la configuration ExecutionMode."
  },
  {
    t: "CodePipeline scénario avancé",
    q: "Une équipe utilise CodePipeline avec GitHub v2 (Connections). Après un changement de credentials GitHub, les déclenchements de pipeline ont cessé. Quelle est la cause probable ?",
    o: [
      "Le webhook S3 a expiré et doit être régénéré",
      "La connexion AWS CodeStar Connections est passée en état 'PENDING' et doit être réautorisée dans la console",
      "Le rôle IAM du pipeline n'a plus les permissions GitHub",
      "EventBridge a perdu la règle de déclenchement et doit être recréée"
    ],
    a: 1,
    e: "AWS CodeStar Connections (GitHub v2) utilise un token OAuth lié à l'installation de l'AWS Connector for GitHub. Si les credentials changent ou si l'application GitHub est révoquée, la connexion passe en état PENDING. Il faut aller dans la console Developer Tools → Connections et réautoriser la connexion GitHub."
  },
  {
    t: "CodePipeline Connections",
    q: "Une équipe veut connecter CodePipeline à un dépôt GitHub Enterprise Server hébergé on-premises. Quelle solution AWS supporte ce cas ?",
    o: [
      "GitHub v1 avec un Personal Access Token stocké dans Secrets Manager",
      "AWS CodeStar Connections avec un VPC Host créé pour GitHub Enterprise Server",
      "Mirroring vers CodeCommit via une Lambda déclenchée par webhook",
      "Ce cas n'est pas supporté nativement — il faut utiliser Jenkins comme intermédiaire"
    ],
    a: 1,
    e: "AWS CodeStar Connections supporte GitHub Enterprise Server via la création d'un 'Host' (un endpoint représentant le serveur GHE on-prem). La connexion transite via AWS et ne nécessite pas d'exposer le serveur publiquement — un VPC et AWS PrivateLink peuvent sécuriser le flux."
  },
  // ─── Cas d'erreur & troubleshooting ──────────────────────────────────────
  {
    t: "CodePipeline troubleshooting",
    q: "Une action Source CodeCommit dans un pipeline ne se déclenche plus après une période de fonctionnement normal. Les commits sont bien poussés. Quelle est la première vérification à faire ?",
    o: [
      "Vérifier que la branche configurée dans l'action Source n'a pas été supprimée ou renommée",
      "Vérifier les quotas CodePipeline et demander une augmentation",
      "Recréer entièrement le pipeline avec les mêmes paramètres",
      "Vérifier les permissions du rôle CodeBuild"
    ],
    a: 0,
    e: "La cause la plus fréquente est que la branche cible a été renommée (ex: master → main) ou supprimée. L'action Source CodeCommit ne déclenche plus si la branche n'existe plus. La deuxième vérification est l'état de la règle EventBridge associée (elle peut avoir été supprimée ou désactivée accidentellement)."
  },
  {
    t: "CodePipeline troubleshooting",
    q: "Un pipeline CodePipeline échoue avec l'erreur 'Access Denied' lors de l'accès à l'artifact S3. Quelles sont les deux causes les plus probables ? (choisir 2)",
    o: [
      "Le service role du pipeline n'a pas les permissions s3:GetObject / s3:PutObject sur le bucket artifact",
      "La CMK KMS du bucket n'est pas accessible par le service role du pipeline",
      "Le bucket S3 artifact est dans une région différente du pipeline",
      "Le service role a trop de permissions et AWS refuse par précaution"
    ],
    a: [0, 1],
    e: "Les deux causes les plus fréquentes d'Access Denied sur l'artifact store S3 sont : (1) permissions IAM insuffisantes sur le service role (s3:GetObject, s3:PutObject, s3:GetBucketVersioning), (2) si le bucket est chiffré avec une CMK KMS, le service role doit avoir kms:GenerateDataKey + kms:Decrypt. La région différente (option C) n'est pas un blocage — CodePipeline supporte les cross-region artifacts."
  },
  {
    t: "CodePipeline troubleshooting",
    q: "Après un déploiement bloqué, un ingénieur supprime et recrée le pipeline CodePipeline avec exactement les mêmes paramètres. Le nouveau pipeline ne se déclenche pas automatiquement. Pourquoi ?",
    o: [
      "Le webhook GitHub est lié à l'ARN de l'ancien pipeline et doit être recréé manuellement",
      "La règle EventBridge créée automatiquement pour l'ancien pipeline a été supprimée avec lui et est recrée pour le nouveau",
      "Le nouveau pipeline est en mode PAUSED par défaut",
      "CodePipeline impose un délai de 24h avant d'activer un nouveau pipeline"
    ],
    a: 1,
    e: "Quand on crée un pipeline CodePipeline, AWS crée automatiquement une règle EventBridge pour détecter les changements de source. Quand on supprime le pipeline, la règle EventBridge est supprimée aussi. Quand on recrée le pipeline, la règle est recrée — donc le comportement est normal. Si le déclenchement ne fonctionne pas, c'est une autre cause (connexion GitHub, branche…)."
  },
  // ─── Multi-région ─────────────────────────────────────────────────────────
  {
    t: "CodePipeline multi-région",
    q: "Comment configurer CodePipeline pour déployer dans plusieurs régions AWS dans le même pipeline ?",
    o: [
      "Créer un pipeline par région et les enchaîner via EventBridge",
      "Ajouter des actions avec un paramètre 'region' spécifique dans le stage Deploy — CodePipeline gère automatiquement les artifact buckets dans chaque région",
      "Utiliser CloudFormation StackSets depuis une action Deploy dans le pipeline",
      "Les pipelines CodePipeline sont mono-région par conception"
    ],
    a: 1,
    e: "CodePipeline supporte les déploiements multi-région nativement : on spécifie la région dans les paramètres de l'action. CodePipeline crée automatiquement des 'support buckets' dans chaque région cible pour répliquer les artifacts nécessaires. Pas besoin de créer des pipelines séparés."
  },
  {
    t: "CodePipeline multi-région",
    q: "Pour une action Deploy CodePipeline dans une région secondaire (ex: eu-west-1) depuis un pipeline principal en us-east-1, que doit contenir la configuration du pipeline ?",
    o: [
      "Un paramètre 'crossRegionArtifactBuckets' listant le bucket S3 dans eu-west-1 pour les artifacts",
      "Une règle EventBridge cross-région pour synchroniser les artifacts",
      "Un rôle IAM avec AssumeRole vers eu-west-1",
      "Un stage dédié 'RegionSync' avant le Deploy stage"
    ],
    a: 0,
    e: "Pour les actions cross-region, CodePipeline a besoin d'un bucket S3 dans la région cible pour les artifacts (crossRegionArtifactBuckets dans la définition du pipeline). Ce bucket doit exister avant la création/modification du pipeline. CodePipeline copie automatiquement les artifacts vers ce bucket avant d'exécuter l'action dans la région cible."
  },
  // ─── Questions sur les limites & quotas ───────────────────────────────────
  {
    t: "CodePipeline limites",
    q: "Quelle est la limite par défaut du nombre maximum de stages dans un pipeline CodePipeline ?",
    o: [
      "5 stages maximum",
      "10 stages maximum",
      "50 stages maximum — limite souple augmentable via Support",
      "Pas de limite documentée sur le nombre de stages"
    ],
    a: 2,
    e: "La limite par défaut est de 50 stages par pipeline (limite souple). Le nombre d'actions par stage est limité à 50 aussi. Ces limites peuvent être augmentées via un ticket AWS Support. Dans la pratique, un pipeline avec plus de 10-15 stages est rare et indique souvent une architecture à revoir."
  },
  {
    t: "CodePipeline limites",
    q: "CodePipeline peut-il avoir plusieurs pipelines déclenchés par la même source (même repo/branche) ?",
    o: [
      "Non, une source ne peut déclencher qu'un seul pipeline",
      "Oui, plusieurs pipelines peuvent écouter la même source sans conflit",
      "Oui, mais uniquement avec des filtres de chemin différents",
      "Non, sauf si on utilise SNS comme intermédiaire"
    ],
    a: 1,
    e: "Plusieurs pipelines peuvent être configurés sur la même source (même repo/branche). Chaque pipeline a sa propre règle EventBridge et son propre artifact store. Il n'y a pas de conflit — AWS déclenche tous les pipelines abonnés à la source en parallèle."
  },
  // ─── Comparaisons & choix d'architecture ─────────────────────────────────
  {
    t: "CodePipeline vs alternatives",
    q: "Une startup utilise déjà GitHub Actions pour son CI/CD. Pourquoi pourrait-elle préférer passer à CodePipeline ? (choisir 2)",
    o: [
      "Intégration native avec les services AWS (CodeDeploy, ECS, Lambda, CloudFormation) sans tokens",
      "Mécanisme d'Approval actions intégré pour les gates de déploiement",
      "Support des workflows YAML plus expressif que GitHub Actions",
      "CodePipeline est moins cher que GitHub Actions pour tous les cas d'usage"
    ],
    a: [0, 1],
    e: "Les avantages principaux de CodePipeline vs GitHub Actions pour AWS : (1) intégration native sans gestion de tokens/secrets pour accéder aux services AWS — CodePipeline utilise des rôles IAM, (2) les Approval actions permettent des gates humains directement dans le pipeline. GitHub Actions a des workflows YAML plus expressifs (option C est fausse). Le coût (D) dépend du cas d'usage."
  },
  {
    t: "CodePipeline vs alternatives",
    q: "Quelle est la principale différence entre CodePipeline et AWS Step Functions pour orchestrer un workflow de déploiement ?",
    o: [
      "CodePipeline est dédié aux workflows CI/CD avec notion de source/build/deploy ; Step Functions est un orchestrateur généraliste pour workflows complexes avec branchements conditionnels avancés",
      "Step Functions ne peut pas appeler des services AWS tandis que CodePipeline le peut",
      "CodePipeline supporte les boucles et retry natifs, Step Functions non",
      "Les deux sont identiques mais Step Functions est plus récent"
    ],
    a: 0,
    e: "CodePipeline est spécialisé CI/CD : modèle linéaire (stages/actions), intégrations natives Build/Deploy, notion de source code. Step Functions est un orchestrateur généraliste : workflows avec Choice (conditions), Parallel, Map, Retry/Catch sophistiqués — idéal pour des processus métier complexes ou des workflows multi-services. Pour du CI/CD pur, CodePipeline est plus adapté."
  },
  // ─── Coûts ────────────────────────────────────────────────────────────────
  {
    t: "CodePipeline coûts",
    q: "Quel est le modèle de facturation de CodePipeline ?",
    o: [
      "Facturation à la minute d'exécution du pipeline",
      "Facturation par pipeline actif par mois (pas de facturation si le pipeline ne tourne pas)",
      "Facturation par action exécutée dans le pipeline",
      "CodePipeline est inclus gratuitement dans AWS sans limite"
    ],
    a: 1,
    e: "CodePipeline facture par pipeline actif par mois (1 dollar par pipeline actif). Un pipeline est 'actif' s'il a eu au moins une exécution dans le mois. Les 30 premiers jours sont gratuits pour chaque nouveau pipeline. Il y a aussi un free tier de 1 pipeline gratuit par compte AWS."
  },
  // ─── Scénarios complexes supplémentaires ─────────────────────────────────
  {
    t: "CodePipeline scénario avancé",
    q: "Une équipe veut implémenter un pipeline GitOps où les changements d'infrastructure (Terraform) sont d'abord appliqués en 'plan only' pour revue, puis nécessitent une approbation manuelle avant l'apply. Quelle architecture CodePipeline utiliser ?",
    o: [
      "Stage 1 (Source) → Stage 2 (Build: terraform plan) → Stage 3 (Approval) → Stage 4 (Build: terraform apply)",
      "Stage 1 (Source) → Stage 2 (Deploy: terraform plan + apply en une seule action)",
      "Stage 1 (Source) → Stage 2 (Lambda: terraform plan) → Stage 3 (Approval: afficher le plan) → Stage 4 (Lambda: terraform apply)",
      "Les options A et C sont valides ; A est plus simple, C affiche le plan dans l'Approval"
    ],
    a: 3,
    e: "Les deux approches fonctionnent : (A) utilise CodeBuild pour plan puis apply dans deux stages séparés avec Approval au milieu — simple et standard. (C) utilise Lambda avec la possibilité de passer le résumé du plan terraform dans le message d'Approval — plus informatif. En pratique, l'option A avec CodeBuild est la plus courante pour Terraform dans CodePipeline."
  },
  {
    t: "CodePipeline scénario avancé",
    q: "Un pipeline CodePipeline doit déployer séquentiellement sur 3 environnements (dev, staging, prod) avec un Approval obligatoire avant prod uniquement. Quelle est la structure minimale correcte ?",
    o: [
      "4 stages : Source → DeployDev → DeployStaging → ApprovalProd+DeployProd (actions parallèles dans le dernier stage)",
      "5 stages : Source → DeployDev → DeployStaging → ApprovalProd → DeployProd",
      "3 stages : Source → Deploy(dev+staging parallèle) → Approval+DeployProd",
      "6 stages : Source → ApprovalDev → DeployDev → ApprovalStaging → DeployStaging → DeployProd"
    ],
    a: 1,
    e: "La structure correcte est 5 stages : Source → DeployDev → DeployStaging → ApprovalProd → DeployProd. L'Approval est un stage dédié (ou une action dans un stage dédié). On ne peut pas mettre Approval et Deploy dans le même stage avec l'Approval en gate — le stage ne commencerait qu'après validation mais les deux actions commenceraient en même temps."
  },
  {
    t: "CodePipeline scénario avancé",
    q: "Une action Custom dans CodePipeline (custom action type) utilise le modèle 'job worker'. Comment le worker externe sait-il qu'il y a un job à traiter ?",
    o: [
      "CodePipeline envoie un webhook HTTP POST vers le worker quand un job est disponible",
      "Le worker poll CodePipeline via l'API PollForJobs en continu",
      "CodePipeline publie un message SQS que le worker consomme",
      "EventBridge notifie le worker via une règle créée automatiquement"
    ],
    a: 1,
    e: "Les custom action workers utilisent le modèle 'poll' : le worker appelle régulièrement l'API PollForJobs pour vérifier si des jobs sont disponibles. Quand CodePipeline renvoie un job, le worker l'exécute puis appelle PutJobSuccessResult ou PutJobFailureResult. Il n'y a pas de push/webhook natif — c'est entièrement pull-based."
  },
  {
    t: "CodePipeline scénario avancé",
    q: "Un ingénieur DevOps doit auditer tous les changements apportés aux pipelines CodePipeline d'un compte AWS sur les 30 derniers jours. Quel service utiliser ?",
    o: [
      "CodePipeline History — onglet 'Pipeline changes' dans la console",
      "AWS CloudTrail — chercher les événements API CodePipeline (CreatePipeline, UpdatePipeline, DeletePipeline)",
      "Amazon CodeGuru Reviewer — analyse les modifications de configuration",
      "AWS Config — règle codepipeline-deployment-required-actions"
    ],
    a: 1,
    e: "CloudTrail enregistre toutes les API calls AWS incluant CodePipeline (CreatePipeline, UpdatePipeline, DeletePipeline, StartPipelineExecution…). Pour auditer les changements de configuration, on filtre sur les événements 'write' de CodePipeline dans CloudTrail. AWS Config peut aussi aider pour l'état actuel des ressources mais CloudTrail est la source d'audit historique."
  },
  {
    t: "CodePipeline scénario avancé",
    q: "Une entreprise utilise AWS Organizations avec 20 comptes. Elle veut standardiser les pipelines CodePipeline avec une structure commune (mêmes stages, mêmes règles d'approval). Quelle approche est la plus scalable ?",
    o: [
      "Créer les pipelines manuellement dans chaque compte avec un document de convention",
      "Utiliser Service Catalog avec un produit CloudFormation définissant le pipeline standard — les équipes lancent le produit pour créer leur pipeline",
      "Déployer les pipelines via une Lambda centralisée dans le compte de gestion",
      "Utiliser AWS CodePipeline Templates (fonctionnalité native de standardisation)"
    ],
    a: 1,
    e: "Service Catalog est la réponse scalable pour standardiser des ressources AWS dans une organisation : l'équipe centrale publie un produit CloudFormation définissant le pipeline standard, les équipes le lancent via le catalogue. Les contraintes Service Catalog peuvent empêcher les modifications non autorisées. Il n'existe pas de 'CodePipeline Templates' en tant que fonctionnalité native (option D)."
  },
  {
    t: "CodePipeline Connections",
    q: "Une règle EventBridge déclenchant un pipeline CodePipeline depuis Bitbucket Cloud a cessé de fonctionner. Quelle vérification est prioritaire ?",
    o: [
      "Vérifier que le webhook Bitbucket pointe toujours vers le bon endpoint CodePipeline",
      "Vérifier l'état de la connexion AWS CodeStar Connections dans la console Developer Tools",
      "Vérifier les permissions EventBridge sur le rôle du pipeline",
      "Recréer la règle EventBridge depuis la console CodePipeline"
    ],
    a: 1,
    e: "Bitbucket Cloud est supporté via AWS CodeStar Connections. Si les déclenchements cessent, la première vérification est l'état de la connexion dans Developer Tools → Connections. Elle peut être en état PENDING (token expiré, révocation OAuth) et nécessiter une réauthorisation. C'est la cause la plus fréquente pour les connexions tierce-partie."
  },
  {
    t: "CodePipeline sécurité",
    q: "Une équipe de sécurité veut s'assurer qu'aucun pipeline CodePipeline ne peut déployer directement en production sans approbation. Comment implémenter ce contrôle de manière préventive et centralisée pour tous les comptes de l'organisation ?",
    o: [
      "Créer une convention de nommage et demander aux équipes de mettre une Approval action",
      "Créer une SCP AWS Organizations qui empêche StartPipelineExecution sur les pipelines de production",
      "Utiliser AWS Config avec une règle custom qui détecte les pipelines sans Approval et envoie une alerte",
      "Utiliser Service Catalog pour imposer des templates de pipeline incluant l'Approval action obligatoire"
    ],
    a: 3,
    e: "Service Catalog avec des contraintes de lancement est l'approche la plus scalable pour imposer une structure de pipeline incluant l'Approval. Une SCP (option B) ne peut pas filtrer finement sur la structure d'un pipeline — elle bloquerait toutes les exécutions ou aucune. Config (option C) est détectif, pas préventif. La convention (option A) n'est pas enforced."
  },
  {
    t: "CodePipeline Webhook",
    q: "Quelle est la différence entre GitHub v1 (Webhook) et GitHub v2 (Connections) dans CodePipeline ?",
    o: [
      "GitHub v1 nécessite un Personal Access Token stocké dans CodePipeline ; GitHub v2 utilise OAuth via AWS CodeStar Connections sans token dans CodePipeline",
      "GitHub v2 supporte uniquement les organisations GitHub, pas les repos personnels",
      "GitHub v1 déclenche via EventBridge ; GitHub v2 utilise le polling",
      "Les deux sont identiques mais GitHub v2 est plus récent et légèrement plus cher"
    ],
    a: 0,
    e: "GitHub v1 stockait un PAT (Personal Access Token) dans CodePipeline et créait un webhook GitHub qui pointait directement vers CodePipeline. GitHub v2 (Connections) utilise OAuth/GitHub App — AWS CodeStar Connections gère l'authentification sans stocker de token dans CodePipeline. GitHub v2 est plus sécurisé, recommandé et supporte GitHub App au niveau organisation."
  },
  {
    t: "CodePipeline notification",
    q: "Un manager veut recevoir un email de synthèse quotidien de l'état de tous les pipelines (combien ont réussi, échoué, sont en cours). Quelle architecture serverless construire ?",
    o: [
      "EventBridge Scheduler → Lambda (liste l'état via ListPipelines + GetPipelineState → envoie SES)",
      "CloudWatch Dashboard avec widget email configuré sur un schedule quotidien",
      "CodePipeline Notifications avec SNS en mode digest quotidien",
      "Amazon CodeGuru Reviewer génère un rapport quotidien des pipelines"
    ],
    a: 0,
    e: "La solution serverless correcte : EventBridge Scheduler crée un trigger quotidien → Lambda appelle ListPipelines puis GetPipelineState pour chaque pipeline → agrège les résultats → envoie l'email via SES. CodePipeline Notifications (option C) envoie des notifications par événement, pas de digest — il faudrait les agréger soi-même. Il n'existe pas de widget email CloudWatch."
  },
  {
    t: "CodePipeline scénario avancé",
    q: "Un pipeline CodePipeline en mode PARALLEL permet plusieurs exécutions simultanées. Quel risque opérationnel cela introduit-il pour un déploiement sur un environnement partagé ?",
    o: [
      "Augmentation des coûts S3 car plusieurs artifact stores sont créés",
      "Race condition : deux exécutions peuvent déployer simultanément sur le même environnement et se corrompre mutuellement",
      "CodePipeline refuse automatiquement les exécutions PARALLEL sur les stages Deploy",
      "Le mode PARALLEL ne s'applique qu'aux stages Build, pas Deploy"
    ],
    a: 1,
    e: "Le mode PARALLEL permet réellement des déploiements simultanés — c'est un risque majeur si les deux exécutions déploient sur le même environnement (même ECS service, même Lambda, même EC2 ASG). Il peut y avoir des race conditions ou des états incohérents. PARALLEL est adapté pour déployer des branches indépendantes sur des envs isolés, pas pour le déploiement sur un environnement partagé."
  },
  {
    t: "CodePipeline fondamentaux",
    q: "Quel format utilise CodePipeline pour définir un pipeline en Infrastructure as Code (IaC) ?",
    o: [
      "Un fichier YAML 'pipeline.yml' à la racine du dépôt source",
      "La ressource AWS::CodePipeline::Pipeline dans CloudFormation / CDK",
      "Un fichier JSON 'buildspec.json' similaire à CodeBuild",
      "Un fichier HCL pour Terraform uniquement — CloudFormation ne supporte pas CodePipeline"
    ],
    a: 1,
    e: "CodePipeline se définit en IaC via la ressource CloudFormation AWS::CodePipeline::Pipeline (ou via CDK avec aws-cdk-lib/aws-codepipeline). Il n'y a pas de fichier de configuration dans le repo (contrairement à GitHub Actions ou GitLab CI). Terraform supporte aussi CodePipeline via aws_codepipeline resource."
  },
  {
    t: "CodePipeline fondamentaux",
    q: "Dans CodePipeline, qu'est-ce qu'un 'artifact' et comment est-il passé entre les stages ?",
    o: [
      "Un artifact est un message JSON échangé via SQS entre les actions du pipeline",
      "Un artifact est un fichier ou répertoire zippé stocké dans S3, référencé par nom entre les actions",
      "Un artifact est un conteneur Docker stocké dans ECR entre les stages Build et Deploy",
      "Un artifact est une entrée DynamoDB contenant les métadonnées de l'exécution"
    ],
    a: 1,
    e: "Dans CodePipeline, un artifact est un fichier ou répertoire compressé (ZIP) stocké dans le bucket S3 artifact store. Chaque action déclare ses InputArtifacts (ce qu'elle consomme) et OutputArtifacts (ce qu'elle produit). Les artifacts sont référencés par nom (ex: 'SourceOutput', 'BuildOutput') et CodePipeline gère automatiquement le transfert S3."
  },
  {
    t: "CodePipeline fondamentaux",
    q: "Une action Source CodePipeline utilisant CodeCommit produit un artifact. Que contient cet artifact par défaut ?",
    o: [
      "Uniquement le fichier modifié par le dernier commit",
      "Le contenu complet du dépôt CodeCommit à la révision du commit déclencheur, zippé",
      "Les métadonnées Git du commit (author, message, hash) au format JSON",
      "Un lien S3 pré-signé vers le code source dans CodeCommit"
    ],
    a: 1,
    e: "L'action Source CodeCommit produit un artifact ZIP contenant le contenu complet du dépôt à la révision du commit qui a déclenché le pipeline. Ce n'est pas un delta — c'est un snapshot complet. CodeBuild peut ensuite dézipper cet artifact pour accéder à tout le code source."
  },
  {
    t: "CodePipeline fondamentaux",
    q: "Comment CodePipeline gère-t-il les secrets (tokens API, mots de passe) nécessaires aux actions du pipeline ?",
    o: [
      "En les stockant chiffrés directement dans la définition JSON du pipeline",
      "En référençant des paramètres AWS Secrets Manager ou SSM Parameter Store dans la configuration des actions",
      "En passant les secrets comme variables d'environnement en clair dans les actions CodeBuild",
      "CodePipeline ne gère pas les secrets — ils doivent être codés en dur dans buildspec.yml"
    ],
    a: 1,
    e: "La meilleure pratique est de stocker les secrets dans AWS Secrets Manager ou SSM Parameter Store (SecureString) et de les référencer depuis les actions (ex: dans CodeBuild via la section 'parameter-store' ou 'secrets-manager' du buildspec.yml). Les secrets ne doivent jamais être dans la définition du pipeline ni en dur dans le code."
  },
  {
    t: "CodePipeline fondamentaux",
    q: "Un pipeline CodePipeline a 3 stages : Source, Build, Deploy. L'action Build échoue. Que se passe-t-il pour le stage Deploy ?",
    o: [
      "Deploy s'exécute quand même avec le dernier artifact valide",
      "Deploy est ignoré et marqué 'Skipped'",
      "L'exécution du pipeline s'arrête ; Deploy ne s'exécute pas tant que Build ne réussit pas",
      "Deploy s'exécute en parallèle avec Build et n'est pas affecté"
    ],
    a: 2,
    e: "Dans CodePipeline, les stages s'exécutent séquentiellement. Si un stage échoue, l'exécution s'arrête et les stages suivants ne s'exécutent pas. L'exécution reste en état 'Failed'. Pour relancer, soit on corrige le code (nouveau commit déclenche une nouvelle exécution), soit on relance manuellement depuis la console ou via RetryStageExecution."
  }
],

2: [
  // ─── buildspec.yml ─────────────────────────────────────────────────────────
  {
    t: "CodeBuild buildspec",
    q: "Dans un fichier buildspec.yml CodeBuild, quelle section contient les commandes qui compilent le code source ?",
    o: [
      "phases.install",
      "phases.build",
      "phases.pre_build",
      "artifacts"
    ],
    a: 1,
    e: "Le buildspec.yml définit 4 phases : install (outils/dépendances), pre_build (login ECR, tests préliminaires), build (compilation réelle), post_build (packaging, push image). La compilation va dans phases.build. install et pre_build sont des étapes préparatoires."
  },
  {
    t: "CodeBuild buildspec",
    q: "Comment passer une variable d'environnement sensible (mot de passe DB) à un build CodeBuild sans l'exposer en clair dans le buildspec.yml ?",
    o: [
      "La définir en clair dans la section 'env.variables' du buildspec",
      "La référencer via 'env.parameter-store' (SSM) ou 'env.secrets-manager' dans le buildspec",
      "La passer en argument de la commande docker build --build-arg",
      "L'encoder en base64 dans les variables d'environnement CodeBuild"
    ],
    a: 1,
    e: "CodeBuild supporte nativement SSM Parameter Store (env.parameter-store) et Secrets Manager (env.secrets-manager) dans le buildspec. CodeBuild récupère la valeur au runtime et l'injecte comme variable d'environnement — la valeur n'apparaît jamais en clair dans le buildspec ou la console (masquée dans les logs si marquée sensible)."
  },
  {
    t: "CodeBuild buildspec",
    q: "Que contient la section 'artifacts' d'un buildspec.yml CodeBuild ?",
    o: [
      "Les logs du build à envoyer vers CloudWatch",
      "Les fichiers à uploader dans le bucket S3 artifact store après le build",
      "Les images Docker à pousser vers ECR",
      "Les rapports de tests générés pendant le build"
    ],
    a: 1,
    e: "La section 'artifacts' définit les fichiers que CodeBuild doit packager et uploader dans l'artifact store S3 après le build (pour transmission à l'étape suivante du pipeline). Les logs vont dans 'reports' ou CloudWatch. Les images ECR sont poussées explicitement dans la phase post_build. Les rapports de tests ont leur propre section 'reports'."
  },
  {
    t: "CodeBuild buildspec",
    q: "Dans un buildspec.yml, quelle est la différence entre 'finally' et 'post_build' ?",
    o: [
      "'finally' s'exécute toujours, même si le build échoue ; 'post_build' ne s'exécute qu'en cas de succès",
      "'post_build' s'exécute toujours ; 'finally' est un alias de 'post_build'",
      "Les deux sont identiques — 'finally' est la nouvelle syntaxe de 'post_build'",
      "'finally' est disponible uniquement dans la phase 'install', pas dans les autres phases"
    ],
    a: 0,
    e: "Chaque phase du buildspec (install, pre_build, build, post_build) peut contenir une section 'finally'. Les commandes dans 'finally' s'exécutent toujours, même si les commandes principales de la phase échouent. Utile pour le nettoyage, l'envoi de notifications ou le reporting — peu importe le résultat du build."
  },
  // ─── Images & environnements ───────────────────────────────────────────────
  {
    t: "CodeBuild environnement",
    q: "Une équipe utilise une image Docker custom hébergée dans ECR privé comme environnement CodeBuild. Quelle permission est nécessaire ?",
    o: [
      "Le rôle de service CodeBuild doit avoir ecr:GetAuthorizationToken + ecr:BatchGetImage + ecr:GetDownloadUrlForLayer",
      "Le rôle de service CodeBuild doit avoir ec2:DescribeImages",
      "L'image ECR doit être en accès public",
      "Aucune permission spéciale — CodeBuild accède à ECR nativement sans IAM"
    ],
    a: 0,
    e: "Pour utiliser une image ECR privée, le rôle de service CodeBuild doit avoir : ecr:GetAuthorizationToken (pour s'authentifier) + ecr:BatchGetImage + ecr:GetDownloadUrlForLayer (pour puller l'image). Sans ces permissions, le build échoue avec 'Error pulling image'."
  },
  {
    t: "CodeBuild environnement",
    q: "Quels sont les types d'environnement de compute disponibles dans CodeBuild ? (choisir 2)",
    o: [
      "Conteneur Linux (Amazon Linux, Ubuntu)",
      "Machine virtuelle EC2 dédiée",
      "Conteneur Windows Server",
      "Fonction Lambda"
    ],
    a: [0, 2],
    e: "CodeBuild propose des environnements conteneurisés Linux (Amazon Linux 2, Ubuntu) et Windows Server. Il n'y a pas d'EC2 dédié ni de Lambda — le compute CodeBuild est géré et conteneurisé. CodeBuild on Lambda existe (CodeBuild Lambda compute) pour des builds courts et légers."
  },
  {
    t: "CodeBuild environnement",
    q: "Un build CodeBuild nécessite Docker-in-Docker (construire une image Docker pendant le build). Quelle option doit être activée ?",
    o: [
      "Activer le mode 'Privileged' dans la configuration de l'environnement CodeBuild",
      "Monter le socket Docker /var/run/docker.sock dans le buildspec",
      "Utiliser une AMI EC2 custom avec Docker pré-installé",
      "Docker-in-Docker est toujours disponible sans configuration"
    ],
    a: 0,
    e: "Pour utiliser Docker commands (docker build, docker push) dans CodeBuild, il faut activer le mode Privileged dans la configuration de l'environnement. Cela donne accès aux namespaces Linux nécessaires pour Docker. Sans Privileged, 'docker build' échoue avec une erreur de permissions."
  },
  // ─── Cache ─────────────────────────────────────────────────────────────────
  {
    t: "CodeBuild cache",
    q: "Quel est l'avantage principal du cache local CodeBuild par rapport au cache S3 ?",
    o: [
      "Le cache local persiste entre différents comptes AWS",
      "Le cache local est plus rapide car il est stocké sur le worker CodeBuild (pas de téléchargement S3)",
      "Le cache local supporte plus de types de cache (npm, pip, Maven)",
      "Le cache local est gratuit alors que le cache S3 est facturé"
    ],
    a: 1,
    e: "Le cache local CodeBuild est stocké directement sur l'instance de build — pas d'aller-retour S3. Il est donc beaucoup plus rapide pour les caches lourds (node_modules, .m2). L'inconvénient : il ne persiste que pour les builds sur le même worker (pas garanti). Le cache S3 persiste toujours mais est plus lent."
  },
  {
    t: "CodeBuild cache",
    q: "Quels types de cache CodeBuild propose-t-il nativement ? (choisir 2)",
    o: [
      "Cache S3 — upload/download vers un bucket S3 entre builds",
      "Cache local source — garde le répertoire source entre builds",
      "Cache local Docker layers — cache les layers Docker pour accélérer docker build",
      "Cache ElastiCache Redis — pour les dépendances npm/pip"
    ],
    a: [0, 2],
    e: "CodeBuild propose : (1) Cache S3 : zip les chemins configurés → S3 → restaure au prochain build. (2) Cache local avec plusieurs modes : SOURCE (repo git), DOCKER_LAYER (layers Docker), CUSTOM (chemins arbitraires). ElastiCache n'est pas un type de cache CodeBuild natif."
  },
  // ─── Reports & tests ───────────────────────────────────────────────────────
  {
    t: "CodeBuild rapports de tests",
    q: "Comment CodeBuild peut-il afficher les résultats de tests unitaires (JUnit, pytest) directement dans la console AWS ?",
    o: [
      "En uploadant les résultats dans S3 et en les liant au projet CodeBuild",
      "En configurant la section 'reports' dans le buildspec.yml avec le chemin du fichier de résultats XML",
      "Les résultats de tests ne sont visibles que dans CloudWatch Logs",
      "En utilisant CodeGuru Reviewer pour analyser les tests"
    ],
    a: 1,
    e: "La section 'reports' du buildspec.yml permet de configurer les rapports de tests. On spécifie le type (JUnit XML, Cucumber JSON, TestNG XML, etc.) et le chemin du fichier généré. CodeBuild parse le fichier et affiche les résultats (tests passés/échoués, durée) directement dans la console sous l'onglet 'Test reports'."
  },
  {
    t: "CodeBuild rapports de tests",
    q: "Un build CodeBuild génère un rapport de couverture de code. Comment le configurer dans le buildspec.yml ?",
    o: [
      "Ajouter une phase 'coverage' dédiée dans le buildspec",
      "Sous la section 'reports', ajouter un groupe de rapport avec file-format: 'CLOVERXML', 'COBERTURAXML' ou 'JACOCOXML'",
      "Uploader manuellement le rapport vers CodeGuru Profiler",
      "La couverture de code n'est pas supportée par CodeBuild nativement"
    ],
    a: 1,
    e: "CodeBuild supporte les rapports de couverture de code dans la section 'reports' avec les formats : CLOVERXML (Clover), COBERTURAXML (Cobertura/Python), JACOCOXML (JaCoCo/Java). Les résultats apparaissent dans la console sous 'Coverage reports' avec le % de lignes/branches couvertes."
  },
  // ─── VPC & réseau ─────────────────────────────────────────────────────────
  {
    t: "CodeBuild réseau",
    q: "Un build CodeBuild doit accéder à une base de données RDS dans un VPC privé. Quelle configuration est nécessaire ?",
    o: [
      "Rendre la base RDS publique temporairement pendant le build",
      "Configurer CodeBuild pour s'exécuter dans le VPC en spécifiant le VPC ID, les subnets et les security groups",
      "Utiliser VPC Peering entre le VPC CodeBuild et le VPC RDS",
      "CodeBuild accède automatiquement aux VPC du compte — aucune configuration nécessaire"
    ],
    a: 1,
    e: "CodeBuild peut être configuré pour s'exécuter dans un VPC spécifique : on spécifie le VPC ID, les subnets privés (pour l'isolation) et les security groups. CodeBuild crée alors une ENI dans ce VPC, donnant accès aux ressources privées comme RDS, ElastiCache, etc. Les subnets doivent avoir une route NAT pour accéder à internet (packages)."
  },
  {
    t: "CodeBuild réseau",
    q: "Un build CodeBuild configuré dans un VPC privé ne peut plus télécharger les packages npm. Quelle est la cause probable ?",
    o: [
      "npm n'est pas supporté dans un VPC privé",
      "Les subnets du VPC n'ont pas d'accès internet (pas de NAT Gateway ou route vers internet)",
      "Le security group CodeBuild bloque le port 443 sortant",
      "Les options B et C sont toutes les deux des causes probables"
    ],
    a: 3,
    e: "Les deux causes sont fréquentes : (B) un subnet privé sans NAT Gateway n'a pas d'accès internet — npm.registry.com est inaccessible. (C) si le security group bloque le port 443 (HTTPS) sortant, les téléchargements échouent aussi. Pour un build dans un VPC privé, il faut un NAT Gateway dans un subnet public ET un security group autorisant le trafic HTTPS sortant."
  },
  // ─── IAM & sécurité ───────────────────────────────────────────────────────
  {
    t: "CodeBuild IAM",
    q: "Quel rôle IAM CodeBuild utilise-t-il pour accéder aux ressources AWS pendant le build (S3, ECR, Secrets Manager…) ?",
    o: [
      "Le rôle de l'utilisateur qui a lancé le build",
      "Un service role CodeBuild créé et assigné au projet avec les permissions nécessaires",
      "Le rôle AWSCodeBuildAdminAccess attaché automatiquement",
      "Aucun rôle — CodeBuild utilise des credentials temporaires générés à la volée"
    ],
    a: 1,
    e: "Chaque projet CodeBuild est associé à un service role IAM. Ce rôle définit ce que le build peut faire (lire S3, pousser vers ECR, lire Secrets Manager…). Les credentials de ce rôle sont injectés automatiquement dans l'environnement de build via les variables AWS_DEFAULT_REGION, AWS_ACCESS_KEY_ID, etc."
  },
  {
    t: "CodeBuild IAM",
    q: "Un build CodeBuild doit pousser une image vers ECR et déployer sur ECS. Quelles permissions minimales le service role doit-il avoir ? (choisir 2)",
    o: [
      "ecr:GetAuthorizationToken + ecr:BatchCheckLayerAvailability + ecr:PutImage + ecr:InitiateLayerUpload + ecr:UploadLayerPart + ecr:CompleteLayerUpload",
      "ecs:RegisterTaskDefinition + ecs:UpdateService (ou ecs:CreateService)",
      "ec2:RunInstances pour créer les instances ECS",
      "iam:PassRole pour le rôle d'exécution ECS"
    ],
    a: [0, 1],
    e: "Pour pousser vers ECR : ecr:GetAuthorizationToken + les permissions d'upload (BatchCheckLayerAvailability, PutImage, InitiateLayerUpload, UploadLayerPart, CompleteLayerUpload). Pour déployer sur ECS : ecs:RegisterTaskDefinition + ecs:UpdateService. iam:PassRole peut aussi être nécessaire si le build enregistre une task definition qui référence un nouveau rôle d'exécution."
  },
  // ─── Triggers & intégrations ──────────────────────────────────────────────
  {
    t: "CodeBuild déclencheurs",
    q: "Comment déclencher un build CodeBuild automatiquement à chaque push sur une branche GitHub ?",
    o: [
      "Configurer une règle EventBridge sur l'événement 'codebuild:build:stateChanged'",
      "Configurer un webhook dans le projet CodeBuild (Build triggers > Webhook) pour déclencher sur PUSH",
      "Créer une Lambda qui poll GitHub toutes les minutes",
      "Utiliser CodePipeline obligatoirement — CodeBuild seul ne supporte pas les webhooks"
    ],
    a: 1,
    e: "CodeBuild supporte les webhooks natifs : dans les paramètres du projet, 'Build triggers' permet de configurer un webhook GitHub/Bitbucket/GitLab. On peut filtrer sur le type d'événement (PUSH, PULL_REQUEST_CREATED, etc.) et les branches. AWS crée le webhook dans GitHub automatiquement via CodeStar Connections ou un PAT."
  },
  {
    t: "CodeBuild déclencheurs",
    q: "Un projet CodeBuild est déclenché depuis CodePipeline. Comment le build retourne-t-il son résultat (succès/échec) au pipeline ?",
    o: [
      "Via une Lambda de callback qui appelle PutJobSuccessResult",
      "CodeBuild notifie CodePipeline automatiquement via l'intégration native — pas besoin de callback manuel",
      "Via un message SNS envoyé par le build",
      "Via un fichier JSON 'result.json' dans le bucket artifact store"
    ],
    a: 1,
    e: "L'intégration CodeBuild-CodePipeline est native : CodePipeline démarre le build via l'API CodeBuild et poll son état. Quand le build se termine (SUCCESS/FAILURE), CodePipeline le détecte automatiquement et fait avancer ou stopper l'exécution du pipeline. Aucun callback manuel n'est nécessaire."
  },
  // ─── Scénarios avancés ─────────────────────────────────────────────────────
  {
    t: "CodeBuild scénario avancé",
    q: "Une équipe veut réduire le temps de build de 15 min à moins de 5 min. Le build est lent à cause du téléchargement de dépendances npm. Quelles stratégies adopter ? (choisir 2)",
    o: [
      "Activer le cache CodeBuild sur le répertoire node_modules avec cache S3 ou local",
      "Utiliser une image de build custom ECR avec les dépendances npm pré-installées",
      "Passer à une instance CodeBuild plus grande (compute type)",
      "Désactiver les tests unitaires pour accélérer le build"
    ],
    a: [0, 1],
    e: "Les deux stratégies efficaces pour les dépendances npm lentes : (A) Cache CodeBuild sur node_modules — au premier build on télécharge, aux suivants on restaure depuis le cache (S3 ou local). (B) Image ECR custom avec les dépendances communes pré-installées — npm install ne télécharge que les delta. Passer à une instance plus grande (C) n'aide pas si le bottleneck est réseau. Désactiver les tests (D) n'est pas acceptable."
  },
  {
    t: "CodeBuild scénario avancé",
    q: "Comment exécuter des tests en parallèle dans CodeBuild pour réduire le temps total de test ?",
    o: [
      "Utiliser plusieurs phases dans le buildspec (pre_build, build, post_build) en parallèle",
      "Utiliser CodeBuild Batch Build avec buildType: BUILD_LIST ou BUILD_MATRIX pour lancer plusieurs builds en parallèle",
      "Utiliser des threads dans le script de test (niveau applicatif)",
      "Le parallélisme n'est pas possible dans CodeBuild — les tests sont toujours séquentiels"
    ],
    a: 1,
    e: "CodeBuild Batch Build permet d'orchestrer plusieurs builds en parallèle : BUILD_LIST lance une liste de builds indépendants, BUILD_MATRIX lance toutes les combinaisons de variables (ex: Node 16 × Linux + Node 16 × Windows). Chaque build est indépendant. Les phases d'un buildspec s'exécutent séquentiellement (option A est fausse)."
  },
  {
    t: "CodeBuild scénario avancé",
    q: "Un buildspec.yml doit construire des binaires différents selon l'environnement cible (dev/staging/prod). Comment passer l'environnement cible au build depuis CodePipeline ?",
    o: [
      "Créer un projet CodeBuild séparé par environnement",
      "Utiliser les variables de pipeline CodePipeline passées à l'action CodeBuild, lues dans le buildspec via $CODEBUILD_VAR",
      "Hardcoder les trois environnements dans le buildspec avec des conditions if/else",
      "Utiliser des branches Git différentes pour chaque environnement"
    ],
    a: 1,
    e: "CodePipeline peut passer des variables à une action CodeBuild (EnvironmentVariablesOverride). Dans le buildspec, on lit la variable avec $ENV_NAME (ou ${ENV_NAME}). Le même buildspec et le même projet CodeBuild servent les trois environnements — seule la variable change selon le stage du pipeline."
  },
  {
    t: "CodeBuild scénario avancé",
    q: "Une entreprise veut s'assurer que tous les builds CodeBuild utilisent uniquement des images Docker approuvées (whitelist). Comment implémenter ce contrôle ?",
    o: [
      "Créer une SCP qui liste les ARN d'images ECR autorisées",
      "Utiliser AWS Config avec une règle custom qui vérifie l'image configurée dans chaque projet CodeBuild",
      "Utiliser Service Catalog avec des templates de projets CodeBuild pré-approuvés",
      "Les options B et C sont complémentaires — Config pour détecter, Service Catalog pour prévenir"
    ],
    a: 3,
    e: "Les deux approches sont complémentaires : (B) AWS Config avec une règle custom détecte les projets CodeBuild qui utilisent des images non approuvées (détectif). (C) Service Catalog avec des templates pré-approuvés empêche la création de projets non conformes (préventif). En combinaison, on a une couverture complète."
  },
  // ─── Monitoring & logs ─────────────────────────────────────────────────────
  {
    t: "CodeBuild monitoring",
    q: "Où CodeBuild envoie-t-il ses logs de build par défaut ?",
    o: [
      "Dans S3 uniquement",
      "Dans CloudWatch Logs (groupe /aws/codebuild/nom-du-projet) et optionnellement dans S3",
      "Dans CloudTrail uniquement",
      "Les logs ne sont pas conservés — ils s'affichent dans la console pendant le build uniquement"
    ],
    a: 1,
    e: "Par défaut, CodeBuild envoie les logs vers CloudWatch Logs dans le groupe /aws/codebuild/{project-name}. On peut aussi configurer l'envoi vers S3 (logs.s3Logs dans la config du projet). Les deux destinations peuvent être actives simultanément. Les logs sont visibles en temps réel dans la console pendant le build et consultables après via CloudWatch."
  },
  {
    t: "CodeBuild monitoring",
    q: "Quelles métriques CodeBuild sont disponibles dans CloudWatch ? (choisir 2)",
    o: [
      "Builds — nombre total de builds déclenchés",
      "FailedBuilds — nombre de builds en échec",
      "CPUUtilization — utilisation CPU de l'instance de build",
      "CacheHitRate — taux de réussite du cache"
    ],
    a: [0, 1],
    e: "CodeBuild publie dans CloudWatch : Builds (total déclenchés), SucceededBuilds, FailedBuilds, StoppedBuilds, BuildDuration. CPUUtilization n'est pas une métrique CodeBuild native (l'environnement est géré, pas accessible comme une EC2). CacheHitRate n'existe pas non plus comme métrique CloudWatch standard."
  },
  {
    t: "CodeBuild monitoring",
    q: "Une équipe veut être alertée si un build dépasse 20 minutes. Quelle architecture utiliser ?",
    o: [
      "Configurer le timeout CodeBuild à 20 minutes — le build échouera automatiquement",
      "Créer une alarme CloudWatch sur la métrique CodeBuild BuildDuration > 1200 secondes → SNS",
      "Créer une règle EventBridge sur codebuild:build:stateChanged avec un filtre de durée",
      "Utiliser CodeGuru Profiler pour monitorer la durée des builds"
    ],
    a: 1,
    e: "CloudWatch Metrics publie des métriques CodeBuild dont BuildDuration. On crée une alarme CloudWatch sur BuildDuration > 1200s (20 min) → notification SNS (email, Slack via Chatbot). Le timeout CodeBuild (option A) arrête le build — c'est pour imposer une limite dure, pas pour observer. EventBridge (option C) sur stateChanged ne filtre pas par durée nativement."
  },
  // ─── Coûts ────────────────────────────────────────────────────────────────
  {
    t: "CodeBuild coûts",
    q: "Quel est le modèle de facturation de CodeBuild ?",
    o: [
      "Facturation par build déclenché (prix fixe par build)",
      "Facturation à la minute de build, selon le type de compute (small, medium, large, 2xlarge)",
      "Facturation mensuelle fixe par projet CodeBuild actif",
      "CodeBuild est gratuit dans la limite du free tier AWS permanent"
    ],
    a: 1,
    e: "CodeBuild facture à la minute de build selon le type de compute : small (moins cher), medium, large, 2xlarge, ARM. Le free tier donne 100 minutes/mois de build sur un general1.small. On paie uniquement pendant l'exécution du build — pas de frais fixes. Les logs CloudWatch et S3 sont facturés séparément."
  },
  // ─── Troubleshooting ──────────────────────────────────────────────────────
  {
    t: "CodeBuild troubleshooting",
    q: "Un build CodeBuild échoue avec 'DOWNLOAD_SOURCE failed: Unable to access source'. Quelles sont les causes probables ? (choisir 2)",
    o: [
      "Le rôle de service CodeBuild n'a pas les permissions pour accéder au dépôt source (CodeCommit, S3)",
      "La connexion CodeStar Connections utilisée pour GitHub est en état PENDING",
      "Le buildspec.yml contient une erreur de syntaxe YAML",
      "Le projet CodeBuild est dans une région différente de la source"
    ],
    a: [0, 1],
    e: "DOWNLOAD_SOURCE échoue à la récupération du code source : (A) permissions IAM insuffisantes (codecommit:GitPull ou s3:GetObject selon la source). (B) connexion CodeStar Connections PENDING pour GitHub. Les erreurs de syntaxe buildspec.yml (C) provoquent un échec lors de la phase d'exécution, pas au téléchargement. La région (D) n'est pas un blocage — CodeBuild peut sourcer cross-region."
  },
  {
    t: "CodeBuild troubleshooting",
    q: "Un build CodeBuild réussit en local (docker run) mais échoue en CI avec 'Permission denied' sur un répertoire. Quelle est la cause la plus probable ?",
    o: [
      "CodeBuild utilise un utilisateur différent de root et n'a pas accès au répertoire (permissions Unix)",
      "Le bucket S3 artifact store n'a pas les permissions d'écriture",
      "Le buildspec.yml n'est pas dans le bon répertoire",
      "CodeBuild ne supporte pas les commandes qui modifient le filesystem"
    ],
    a: 0,
    e: "En local, le développeur tourne probablement en root ou en tant que l'owner du répertoire. Dans CodeBuild, le processus tourne avec un UID spécifique. Si l'image Docker crée des fichiers appartenant à root (UID 0) et que CodeBuild tourne en non-root, les accès échouent. Solution : vérifier les permissions dans le Dockerfile ou utiliser 'run-as: root' (si justifié)."
  },
  // ─── Multi-comptes & intégrations avancées ────────────────────────────────
  {
    t: "CodeBuild multi-comptes",
    q: "Un projet CodeBuild dans le compte de CI doit pousser des images vers ECR dans le compte de production. Quelle configuration est requise ?",
    o: [
      "Créer un rôle IAM dans le compte de production, ajouter une politique de confiance pour le service role CodeBuild du compte CI, et laisser CodeBuild assumer ce rôle cross-account",
      "Activer ECR cross-account replication depuis le compte CI vers le compte prod",
      "Créer un bucket S3 intermédiaire partagé entre les deux comptes",
      "Utiliser CodeArtifact comme intermédiaire pour les images Docker"
    ],
    a: 0,
    e: "Pour pousser vers ECR cross-account : (1) créer un rôle IAM dans le compte prod avec les permissions ECR push, (2) ajouter une trust policy permettant au service role CodeBuild du compte CI d'assumer ce rôle, (3) dans le buildspec, appeler aws sts assume-role pour récupérer les credentials temporaires du compte prod, (4) utiliser ces credentials pour docker login et docker push vers ECR prod."
  },
  {
    t: "CodeBuild intégrations",
    q: "Comment intégrer des scans de sécurité SAST (analyse statique) dans un projet CodeBuild ? (choisir 2)",
    o: [
      "Installer et exécuter l'outil SAST (Semgrep, Bandit, ESLint security) dans la phase build ou post_build du buildspec",
      "Utiliser Amazon CodeGuru Reviewer intégré nativement dans CodeBuild",
      "Configurer AWS Security Hub pour intercepter les builds CodeBuild",
      "Utiliser l'action native 'SecurityScan' disponible dans CodeBuild"
    ],
    a: [0, 1],
    e: "Pour les SAST dans CodeBuild : (A) les outils CLI (Semgrep, Bandit, Checkmarx, ESLint security) s'installent dans buildspec.install et s'exécutent dans build/post_build — résultats dans le rapport CodeBuild ou envoyés à un serveur SAST. (B) CodeGuru Reviewer s'intègre avec CodeBuild via une action dédiée pour les projets Java et Python. Il n'y a pas d'action 'SecurityScan' native (D est fausse)."
  },
  {
    t: "CodeBuild intégrations",
    q: "Dans un pipeline CodePipeline, le stage CodeBuild produit une image Docker. Comment passer le tag exact de l'image au stage Deploy ECS suivant ?",
    o: [
      "Le tag est toujours 'latest' — pas besoin de le passer",
      "CodeBuild exporte le tag via une variable de namespace (exported-variables dans buildspec) consommée par l'action Deploy via #{Namespace.IMAGE_TAG}",
      "Écrire le tag dans un fichier tag.txt dans les artifacts que CodeDeploy lit",
      "Le tag est transmis automatiquement via le fichier imagedefinitions.json dans les artifacts"
    ],
    a: 1,
    e: "CodeBuild peut exporter des variables via la section 'exported-variables' du buildspec (sous env). Ces variables sont disponibles dans les actions suivantes du pipeline via la syntaxe #{Namespace.Variable}. Pour ECS, l'approche classique est aussi d'écrire imagedefinitions.json dans les artifacts (option D) — les deux méthodes fonctionnent selon le type d'action ECS utilisé."
  },
  // ─── Scénarios Pro niveau difficile ──────────────────────────────────────
  {
    t: "CodeBuild scénario Pro",
    q: "Une équipe veut implémenter un 'Build once, deploy many' : une seule image Docker construite en CI, déployée sur dev/staging/prod sans rebuild. Comment structurer le pipeline CodePipeline ?",
    o: [
      "Build stage (CodeBuild → docker build → push ECR avec tag du commit SHA) → Deploy dev → Deploy staging → Approval → Deploy prod (tous utilisent le même tag)",
      "Build stage (CodeBuild) → Deploy dev (CodeBuild rebuild) → Deploy staging (CodeBuild rebuild) → Deploy prod",
      "Un pipeline par environnement, chacun avec son propre Build stage",
      "Utiliser CodeDeploy uniquement — il gère le versionning d'image automatiquement"
    ],
    a: 0,
    e: "Le pattern 'Build once, deploy many' : CodeBuild construit l'image une seule fois et la pousse vers ECR avec le tag du commit SHA (immuable). Chaque stage de déploiement utilise ce tag exact. On évite les rebuilds qui introduiraient des variations. Le tag 'latest' est à proscrire car il n'est pas immuable. Les approches avec rebuild par env (B, C) violent le principe."
  },
  {
    t: "CodeBuild scénario Pro",
    q: "Une entreprise a des centaines de microservices avec des pipelines CodeBuild. Elle veut une vue centralisée des builds qui échouent en production (branche main). Quelle architecture serverless construire ?",
    o: [
      "EventBridge → (filtre: source=codebuild, detail.buildStatus=FAILED, detail.sourceVersion~main) → Lambda → DynamoDB + notification SNS",
      "CloudWatch Dashboard avec un widget par projet CodeBuild",
      "CodeBuild Batch Build avec un projet de monitoring central",
      "AWS Config + règle codebuild-project-environment-check"
    ],
    a: 0,
    e: "La solution optimale : règle EventBridge filtrant les événements CodeBuild (source: 'aws.codebuild', detail.buildStatus: 'FAILED', detail.sourceVersion contenant 'main' ou 'refs/heads/main') → Lambda qui enregistre dans DynamoDB + envoie une notification SNS/Slack. Un dashboard CloudWatch (B) nécessite un widget par projet — pas scalable à des centaines de projets."
  },
  // ─── Fondamentaux ─────────────────────────────────────────────────────────
  {
    t: "CodeBuild fondamentaux",
    q: "Qu'est-ce qu'un 'projet CodeBuild' par rapport à un 'build CodeBuild' ?",
    o: [
      "Le projet définit la configuration (source, environnement, buildspec, artifacts) ; le build est une exécution du projet",
      "Le build est la configuration ; le projet est l'exécution",
      "Les deux termes sont synonymes dans CodeBuild",
      "Le projet est un groupe de builds liés par un tag commun"
    ],
    a: 0,
    e: "Un projet CodeBuild est la configuration persistante : source du code, type d'environnement, buildspec, artifacts, logs, timeouts, rôle IAM. Un build est une exécution concrète d'un projet à un instant donné. Un projet peut avoir des centaines de builds associés. On modifie le projet pour changer la configuration ; chaque build a son propre log et état."
  },
  {
    t: "CodeBuild fondamentaux",
    q: "Quelle est la durée maximale d'un build CodeBuild par défaut, et peut-on la modifier ?",
    o: [
      "30 minutes, non modifiable",
      "60 minutes par défaut, configurable de 5 minutes à 480 minutes (8h)",
      "120 minutes par défaut, configurable jusqu'à 24h",
      "Il n'y a pas de limite de durée — un build peut durer indéfiniment"
    ],
    a: 1,
    e: "Le timeout par défaut d'un build CodeBuild est 60 minutes. Il est configurable entre 5 minutes et 480 minutes (8 heures) dans la configuration du projet (buildTimeoutInMinutes). Si un build dépasse ce timeout, CodeBuild l'arrête avec l'état FAILED. Penser à adapter le timeout pour les builds longs (compilation C++, builds mobile)."
  },
  {
    t: "CodeBuild fondamentaux",
    q: "Comment CodeBuild gère-t-il l'isolation entre les builds de différents projets ?",
    o: [
      "Chaque build s'exécute dans un conteneur Docker isolé, supprimé après la fin du build",
      "Les builds partagent le même conteneur mais dans des répertoires séparés",
      "Chaque build s'exécute dans une VM EC2 dédiée",
      "CodeBuild n'isole pas les builds — ils partagent l'environnement"
    ],
    a: 0,
    e: "Chaque build CodeBuild s'exécute dans un conteneur Docker frais et isolé, créé au démarrage du build et détruit à sa fin. Les builds ne partagent pas de filesystem, de processus ou de réseau entre eux. Le cache est la seule persistance intentionnelle entre builds d'un même projet."
  },
  {
    t: "CodeBuild fondamentaux",
    q: "Un buildspec.yml définit la section 'env.exported-variables'. À quoi servent ces variables exportées ?",
    o: [
      "Elles sont disponibles dans les builds suivants du même projet (persistance)",
      "Elles sont disponibles dans les actions CodePipeline suivantes via la syntaxe #{Namespace.Variable}",
      "Elles sont automatiquement ajoutées aux variables d'environnement du prochain stage Docker",
      "Elles sont publiées dans Parameter Store automatiquement"
    ],
    a: 1,
    e: "Les variables dans 'exported-variables' du buildspec sont rendues disponibles aux actions suivantes dans le même pipeline CodePipeline. On les consomme avec #{NamespaceAction.VariableName}. Exemple : CodeBuild exporte IMAGE_TAG → l'action Deploy ECS la consomme pour déployer la bonne version. Ces variables ne persistent pas entre exécutions du pipeline."
  },
  {
    t: "CodeBuild vs alternatives",
    q: "Pourquoi utiliser CodeBuild plutôt que GitHub Actions pour le CI dans un contexte AWS ? (choisir 2)",
    o: [
      "Accès IAM natif aux ressources AWS (ECR, S3, Secrets Manager) sans gestion de secrets GitHub",
      "Intégration native dans CodePipeline comme action Build",
      "Syntaxe YAML plus simple que GitHub Actions",
      "CodeBuild supporte plus de langages de programmation que GitHub Actions"
    ],
    a: [0, 1],
    e: "Les avantages de CodeBuild vs GitHub Actions pour AWS : (A) les credentials AWS sont injectés via le service role IAM — pas besoin de stocker des access keys dans GitHub Secrets. (B) CodeBuild s'intègre nativement comme action dans CodePipeline. GitHub Actions a une syntaxe YAML plus riche (C est fausse) et supporte autant de langages (D est fausse)."
  }
],

3: [
  // ─── Fondamentaux CodeDeploy ──────────────────────────────────────────────
  {
    t: "CodeDeploy fondamentaux",
    q: "Quelles sont les plateformes de déploiement supportées par CodeDeploy ? (choisir 2)",
    o: [
      "Instances EC2/On-premises (agent CodeDeploy requis)",
      "AWS Lambda (déploiements de fonctions Lambda)",
      "Amazon ECS (déploiements Blue/Green sur Fargate et EC2)",
      "Amazon RDS (déploiements de schémas de base de données)"
    ],
    a: [0, 2],
    e: "CodeDeploy supporte trois plateformes : (1) EC2/On-premises — l'agent CodeDeploy est installé sur les instances. (2) Lambda — déploiements canary/linear/all-at-once des fonctions. (3) ECS — déploiements Blue/Green sur les services ECS. RDS n'est pas une plateforme CodeDeploy."
  },
  {
    t: "CodeDeploy fondamentaux",
    q: "Qu'est-ce qu'un 'Deployment Group' dans CodeDeploy ?",
    o: [
      "Un groupe de fichiers à déployer (l'artifact)",
      "Un ensemble d'instances EC2/ECS services/Lambda functions cibles, avec sa configuration de déploiement",
      "Un groupe d'utilisateurs IAM autorisés à déclencher des déploiements",
      "Un groupe de règles CloudWatch Alarms associées au déploiement"
    ],
    a: 1,
    e: "Un Deployment Group définit les cibles du déploiement et comment les atteindre : les instances EC2 (par tags ou AutoScaling Groups), le service ECS ou la fonction Lambda, la configuration de déploiement (vitesse), les hooks, et les alarmes de rollback. Une application CodeDeploy peut avoir plusieurs Deployment Groups (dev, staging, prod)."
  },
  {
    t: "CodeDeploy fondamentaux",
    q: "Quel est le rôle du fichier appspec.yml dans un déploiement CodeDeploy EC2 ?",
    o: [
      "Définir le code source à compiler",
      "Définir les fichiers à copier et les scripts hooks à exécuter à chaque étape du déploiement",
      "Configurer les variables d'environnement de l'application",
      "Spécifier les instances EC2 cibles du déploiement"
    ],
    a: 1,
    e: "L'appspec.yml est le manifeste de déploiement CodeDeploy. Pour EC2 : section 'files' (source → destination des fichiers à copier) et section 'hooks' (scripts à exécuter à chaque lifecycle event : ApplicationStop, BeforeInstall, AfterInstall, ApplicationStart, ValidateService). Sans appspec.yml, CodeDeploy ne sait pas quoi faire avec l'artifact."
  },
  // ─── In-place deployment ──────────────────────────────────────────────────
  {
    t: "CodeDeploy in-place",
    q: "Dans un déploiement In-Place CodeDeploy sur EC2, dans quel ordre les lifecycle hooks s'exécutent-ils ?",
    o: [
      "BeforeInstall → AfterInstall → ApplicationStart → ValidateService",
      "ApplicationStop → DownloadBundle → BeforeInstall → Install → AfterInstall → ApplicationStart → ValidateService",
      "Install → BeforeInstall → AfterInstall → ValidateService → ApplicationStart",
      "DownloadBundle → Install → ApplicationStart → ValidateService"
    ],
    a: 1,
    e: "L'ordre complet des lifecycle events pour un In-Place EC2 est : ApplicationStop → DownloadBundle → BeforeInstall → Install → AfterInstall → ApplicationStart → ValidateService. ApplicationStop arrête l'app existante. DownloadBundle récupère l'artifact. BeforeInstall/AfterInstall sont des crochets custom. Install copie les fichiers. ApplicationStart lance la nouvelle version. ValidateService vérifie le déploiement."
  },
  {
    t: "CodeDeploy in-place",
    q: "Un script dans le hook 'ValidateService' de CodeDeploy effectue un health check HTTP. Si le service renvoie 500, que se passe-t-il ?",
    o: [
      "CodeDeploy ignore l'erreur et marque le déploiement comme réussi",
      "Le script doit retourner un exit code non-zéro pour signaler l'échec à CodeDeploy, qui déclenche un rollback automatique",
      "CodeDeploy réessaie le hook ValidateService 3 fois avant d'échouer",
      "CodeDeploy envoie une notification SNS mais continue le déploiement"
    ],
    a: 1,
    e: "CodeDeploy interprète l'exit code des scripts de lifecycle hooks : exit 0 = succès, exit non-zéro = échec. Si ValidateService échoue, CodeDeploy marque le déploiement comme FAILED et peut déclencher un rollback automatique (si configuré). Le script doit donc retourner exit 1 (ou tout code non-zéro) quand le health check échoue."
  },
  // ─── Blue/Green deployment ────────────────────────────────────────────────
  {
    t: "CodeDeploy Blue/Green",
    q: "Dans un déploiement Blue/Green CodeDeploy sur EC2 avec ALB, quelle est la séquence correcte ?",
    o: [
      "Démarrer nouvelles instances (Green) → déployer sur Green → tester → basculer le trafic ALB vers Green → terminer les Blue",
      "Terminer les instances Blue → démarrer les Green → déployer → basculer le trafic",
      "Déployer sur les instances Blue existantes → créer les Green → basculer",
      "Basculer le trafic ALB vers Green → déployer sur Green → tester → terminer Blue"
    ],
    a: 0,
    e: "Le processus Blue/Green CodeDeploy EC2 : (1) provisioner un nouveau groupe d'instances (Green), (2) déployer l'application sur Green, (3) ré-enregistrer les instances Green dans le Target Group ALB, (4) CodeDeploy redirige le trafic vers Green, (5) après le délai de rétention configuré, terminer les instances Blue. Le trafic ne bascule qu'après validation du déploiement Green."
  },
  {
    t: "CodeDeploy Blue/Green",
    q: "Dans un déploiement Blue/Green CodeDeploy sur ECS, qu'est-ce qui remplace les instances EC2 dans le concept Blue/Green ?",
    o: [
      "Les task definitions ECS (ancienne vs nouvelle version)",
      "Les Target Groups ALB/NLB (un pour le trafic de production, un pour le test)",
      "Les clusters ECS (un cluster Blue, un cluster Green)",
      "Les images Docker dans ECR (image Blue et image Green)"
    ],
    a: 1,
    e: "Pour ECS Blue/Green, les deux 'environnements' sont représentés par deux Target Groups : le Target Group de production (Blue, reçoit 100% du trafic initialement) et le Target Group de test (Green, reçoit le nouveau déploiement). CodeDeploy déploie la nouvelle task definition sur Green, permet le testing via le listener de test, puis bascule le trafic production vers Green."
  },
  {
    t: "CodeDeploy Blue/Green",
    q: "Pendant un déploiement Blue/Green ECS, comment tester la nouvelle version avant de basculer le trafic de production ?",
    o: [
      "Accéder directement aux tâches ECS Green via leur IP privée",
      "Utiliser le listener de test ALB (généralement port 8080) qui pointe vers le Target Group Green pendant le déploiement",
      "Créer un DNS Route 53 temporaire vers le Target Group Green",
      "Le test automatique n'est pas possible — il faut inspecter les logs CloudWatch"
    ],
    a: 1,
    e: "Pendant un Blue/Green ECS, l'ALB est configuré avec deux listeners : le listener de production (port 443/80) pointant vers Blue, et un listener de test (souvent port 8080) pointant vers Green. Pendant le déploiement, Green reçoit le nouveau code et on peut le tester via le listener de test avant le basculement final. CodeDeploy peut aussi exécuter des Lambda de test automatique."
  },
  // ─── Deployment configurations ────────────────────────────────────────────
  {
    t: "CodeDeploy configuration",
    q: "Quelle est la différence entre CodeDeployDefault.OneAtATime et CodeDeployDefault.AllAtOnce ?",
    o: [
      "OneAtATime déploie sur une instance à la fois (disponibilité maximale) ; AllAtOnce déploie sur toutes les instances simultanément (rapidité maximale mais downtime possible)",
      "AllAtOnce est pour les environnements de prod ; OneAtATime pour les environnements de dev",
      "OneAtATime est pour Lambda ; AllAtOnce est pour EC2",
      "Les deux configurations sont identiques pour les environnements à instance unique"
    ],
    a: 0,
    e: "OneAtATime : une instance à la fois hors du LB, déploiement, retour dans le LB — disponibilité maximale mais déploiement lent. AllAtOnce : toutes les instances simultanément — plus rapide mais downtime pendant le déploiement. HalfAtATime : moitié des instances simultanément. Pour la production, OneAtATime ou HalfAtATime sont recommandés. AllAtOnce convient aux environnements non-critiques."
  },
  {
    t: "CodeDeploy configuration",
    q: "Dans un déploiement Lambda CodeDeploy, qu'est-ce que le mode 'Canary10Percent5Minutes' ?",
    o: [
      "10% des utilisateurs reçoivent la nouvelle version pendant 5 minutes, puis 100% basculent",
      "La nouvelle version reçoit 10% du trafic pendant 5 minutes, puis si les alarmes sont OK, 100% basculent",
      "Le déploiement prend 5 minutes avec 10% de rollback automatique",
      "10% des fonctions Lambda sont mises à jour toutes les 5 minutes"
    ],
    a: 1,
    e: "CodeDeploy Lambda Canary : on envoie un petit pourcentage du trafic (10%) vers la nouvelle version de la Lambda pendant une durée définie (5 minutes). Pendant ce temps, CodeDeploy surveille les CloudWatch Alarms. Si aucune alarme ne se déclenche, 100% du trafic bascule vers la nouvelle version. Sinon, rollback automatique vers l'ancienne version. Les modes disponibles : Canary (deux steps) et Linear (incréments réguliers)."
  },
  {
    t: "CodeDeploy configuration",
    q: "Quels modes de déploiement CodeDeploy sont disponibles pour Lambda ? (choisir 2)",
    o: [
      "Canary — envoie un pourcentage du trafic vers la nouvelle version, puis bascule tout",
      "Linear — augmente progressivement le pourcentage de trafic vers la nouvelle version",
      "BlueGreen — maintient deux versions de la fonction en parallèle",
      "RollingWithAdditionalBatch — ajoute des instances avant de déployer"
    ],
    a: [0, 1],
    e: "Pour Lambda, CodeDeploy propose : (1) Canary : X% du trafic vers la nouvelle version pendant N minutes, puis 100% si OK. Ex: Canary10Percent5Minutes. (2) Linear : augmentation progressive par incréments fixes. Ex: Linear10PercentEvery1Minute. Plus AllAtOnce (migration immédiate). Les modes BlueGreen et Rolling sont pour EC2/ECS, pas Lambda."
  },
  // ─── AppSpec ──────────────────────────────────────────────────────────────
  {
    t: "CodeDeploy AppSpec",
    q: "Voici un appspec.yml pour ECS. Que spécifie la section 'Resources' ?",
    o: [
      "Les fichiers à copier depuis l'artifact S3",
      "Le service ECS cible et la task definition à déployer (nom de famille + container/port)",
      "Les instances EC2 cibles du déploiement",
      "Les scripts hooks à exécuter pendant le déploiement"
    ],
    a: 1,
    e: "Dans un appspec.yml ECS, la section 'Resources' spécifie : le service ECS cible (clusterName + serviceName), la task definition à déployer (taskDefinitionArn), et le container/port du load balancer (containerName + containerPort). C'est la description de ce qui doit tourner, pas des fichiers à copier (c'est pour EC2)."
  },
  {
    t: "CodeDeploy AppSpec",
    q: "Dans un appspec.yml EC2, comment exécuter un script de validation de santé après le démarrage de l'application ?",
    o: [
      "Ajouter le script dans la section 'files' avec le flag 'execute: true'",
      "Ajouter le script dans la section 'hooks' sous 'ValidateService' avec le chemin et le timeout",
      "Mettre le script dans la section 'environment' du buildspec.yml",
      "Créer une règle CloudWatch Events qui appelle le script"
    ],
    a: 1,
    e: "Dans l'appspec.yml EC2, la section 'hooks' mappe les lifecycle events vers des scripts : ValidateService est l'événement approprié pour un health check post-démarrage. Format : ValidateService: [{location: scripts/health_check.sh, timeout: 300, runas: ec2-user}]. Le timeout définit la durée max d'exécution du script."
  },
  // ─── Rollback ─────────────────────────────────────────────────────────────
  {
    t: "CodeDeploy rollback",
    q: "Comment configurer un rollback automatique dans CodeDeploy ? (choisir 2)",
    o: [
      "Configurer 'Automatic rollback on failure' dans les paramètres du Deployment Group",
      "Associer des CloudWatch Alarms au Deployment Group — si elles se déclenchent, rollback automatique",
      "Mettre un script de rollback dans le hook 'ApplicationStop'",
      "Activer 'Auto Rollback' dans le fichier appspec.yml"
    ],
    a: [0, 1],
    e: "CodeDeploy propose deux mécanismes de rollback automatique : (A) 'Rollback when a deployment fails' dans la configuration du Deployment Group — si un hook échoue, rollback vers la dernière révision connue bonne. (B) CloudWatch Alarms — si une alarme configurée se déclenche pendant ou après le déploiement, rollback automatique. Les deux peuvent être actifs simultanément."
  },
  {
    t: "CodeDeploy rollback",
    q: "Qu'est-ce qu'un 'rollback' CodeDeploy techniquement ?",
    o: [
      "CodeDeploy réapplique les changements inversés (git revert) sur les instances",
      "CodeDeploy re-déploie la dernière révision connue bonne comme un nouveau déploiement",
      "CodeDeploy restaure un snapshot EBS pris avant le déploiement",
      "CodeDeploy réinstalle le package précédent depuis le registre de packages"
    ],
    a: 1,
    e: "Un rollback CodeDeploy est en réalité un nouveau déploiement de la révision précédente — ce n'est pas une opération inverse. CodeDeploy exécute tous les lifecycle hooks normalement mais avec l'ancienne révision. Cela signifie que si les hooks ont effectué des migrations de base de données non réversibles, le rollback ne les annulera pas automatiquement."
  },
  // ─── Intégrations & scénarios ─────────────────────────────────────────────
  {
    t: "CodeDeploy intégrations",
    q: "Comment intégrer CodeDeploy dans un pipeline CodePipeline pour déployer sur EC2 ?",
    o: [
      "Ajouter un stage 'Deploy' avec l'action provider 'CodeDeploy', en spécifiant l'application et le Deployment Group",
      "CodeDeploy s'intègre automatiquement dans CodePipeline sans configuration",
      "Créer une action custom dans CodePipeline qui appelle l'API CodeDeploy via Lambda",
      "Utiliser l'action 'ElasticBeanstalk' qui inclut CodeDeploy nativement"
    ],
    a: 0,
    e: "Dans CodePipeline, un stage de déploiement EC2 utilise l'action provider 'CodeDeploy'. On spécifie l'application CodeDeploy, le Deployment Group, et optionnellement le fichier appspec (sinon cherché à la racine de l'artifact). CodePipeline attend la fin du déploiement et propage succès/échec."
  },
  {
    t: "CodeDeploy intégrations",
    q: "Une équipe veut déployer une application sur des instances EC2 On-Premises (datacenter) avec CodeDeploy. Quelle est la prérequis principale ?",
    o: [
      "Établir une connexion VPN entre le datacenter et AWS",
      "Installer l'agent CodeDeploy sur les serveurs on-premises et enregistrer les instances avec un profil IAM via aws configure ou un IAM user",
      "Utiliser AWS Outposts pour étendre le datacenter",
      "Les serveurs on-premises ne sont pas supportés — CodeDeploy est AWS uniquement"
    ],
    a: 1,
    e: "CodeDeploy supporte les instances on-premises : (1) installer l'agent CodeDeploy sur chaque serveur, (2) créer un IAM user ou utiliser les credentials STS pour chaque instance, (3) enregistrer les instances on-premises dans CodeDeploy avec register-on-premises-instance. Les instances apparaissent dans la console comme des instances taggables, traitées de la même façon que les EC2."
  },
  {
    t: "CodeDeploy scénario avancé",
    q: "Un déploiement CodeDeploy Blue/Green ECS nécessite 10 minutes pour être validé par les tests automatiques avant le basculement final. Comment configurer ce délai ?",
    o: [
      "Mettre un sleep(600) dans le hook AfterAllowTestTraffic de l'appspec.yml",
      "Configurer 'Wait time before rerouting traffic' dans les paramètres du Deployment Group",
      "Créer une alarme CloudWatch qui déclenche le basculement après 10 minutes",
      "Le basculement est toujours immédiat — on ne peut pas configurer de délai"
    ],
    a: 1,
    e: "Dans la configuration du Deployment Group ECS Blue/Green, le paramètre 'Wait time before rerouting traffic (minutes)' permet de configurer une fenêtre de test avant le basculement. Pendant ce délai, les testeurs (ou des tests automatiques via le hook AfterAllowTestTraffic) peuvent valider la version Green via le listener de test. Après le délai, le trafic bascule vers Green."
  },
  {
    t: "CodeDeploy scénario avancé",
    q: "Comment CodeDeploy gère-t-il les déploiements sur un Auto Scaling Group qui scale pendant le déploiement ?",
    o: [
      "Le déploiement échoue si le groupe scale pendant l'opération",
      "CodeDeploy déploie automatiquement sur les nouvelles instances lancées par l'ASG via un hook de lifecycle ASG",
      "Les nouvelles instances lancées pendant le déploiement reçoivent l'ancienne version jusqu'au prochain déploiement",
      "CodeDeploy suspend temporairement l'Auto Scaling pendant le déploiement"
    ],
    a: 1,
    e: "CodeDeploy s'intègre avec Auto Scaling via un lifecycle hook ASG. Quand une nouvelle instance est lancée pendant ou après un déploiement, CodeDeploy détecte l'événement via le hook et déploie automatiquement la dernière révision réussie sur la nouvelle instance avant qu'elle ne passe en service. Cela garantit que toutes les instances de l'ASG ont toujours la même version."
  },
  {
    t: "CodeDeploy scénario avancé",
    q: "Une application utilise CodeDeploy avec le mode 'OneAtATime' sur 10 instances EC2. Après le déploiement de la 3ème instance, une erreur est détectée. Que se passe-t-il si le rollback automatique est activé ?",
    o: [
      "CodeDeploy rolback uniquement les 3 instances déjà mises à jour vers l'ancienne version",
      "CodeDeploy arrête le déploiement sur les 7 instances restantes, puis re-déploie la version précédente sur toutes les 10 instances",
      "CodeDeploy arrête le déploiement sur les 7 instances restantes. Les 3 mises à jour gardent la nouvelle version",
      "CodeDeploy ne peut pas rollback un déploiement partiel — intervention manuelle requise"
    ],
    a: 1,
    e: "Quand le rollback automatique est déclenché pendant un déploiement partiel : CodeDeploy arrête immédiatement le déploiement sur les instances restantes (7 non touchées), puis exécute un nouveau déploiement de la version précédente sur TOUTES les 10 instances — y compris les 3 déjà mises à jour. L'objectif est de remettre toutes les instances dans un état cohérent avec la version précédente."
  },
  // ─── Monitoring ───────────────────────────────────────────────────────────
  {
    t: "CodeDeploy monitoring",
    q: "Comment suivre l'avancement d'un déploiement CodeDeploy en temps réel ?",
    o: [
      "Via la console CodeDeploy → Deployments → Deployment ID (statut par instance + lifecycle events)",
      "Via CloudTrail uniquement",
      "Via les logs d'accès ALB",
      "CodeDeploy n'offre pas de suivi en temps réel — seulement les résultats finaux"
    ],
    a: 0,
    e: "La console CodeDeploy offre un suivi détaillé en temps réel : statut global du déploiement, nombre d'instances par état (Pending/In Progress/Succeeded/Failed/Skipped), et pour chaque instance les lifecycle events avec leur résultat et les logs des scripts. L'API DescribeDeploymentInstances retourne les mêmes informations programmatiquement."
  },
  {
    t: "CodeDeploy monitoring",
    q: "Quels événements CodeDeploy peut-on envoyer vers EventBridge pour déclencher des automations ? (choisir 2)",
    o: [
      "DeploymentStart — début d'un déploiement",
      "DeploymentSuccess — déploiement réussi",
      "DeploymentFailure — déploiement échoué",
      "InstanceHealthCheck — résultat du health check de chaque instance"
    ],
    a: [1, 2],
    e: "CodeDeploy publie des événements vers EventBridge : DEPLOYMENT_SUCCESS, DEPLOYMENT_FAILURE, DEPLOYMENT_STOP, DEPLOYMENT_ROLLBACK_START, DEPLOYMENT_ROLLBACK_SUCCESS, INSTANCE_START, INSTANCE_SUCCESS, INSTANCE_FAILURE. On peut créer des règles EventBridge pour envoyer des notifications SNS, déclencher des Lambdas, ou créer des tickets Jira automatiquement sur échec."
  },
  // ─── Troubleshooting ──────────────────────────────────────────────────────
  {
    t: "CodeDeploy troubleshooting",
    q: "Un déploiement CodeDeploy échoue avec 'The deployment failed because no instances were found in your deployment group'. Quelle est la cause ?",
    o: [
      "L'artifact S3 est vide ou corrompu",
      "Aucune instance EC2 dans le Deployment Group ne correspond aux tags configurés ou ne tourne l'agent CodeDeploy",
      "Le rôle IAM CodeDeploy n'a pas les permissions EC2:DescribeInstances",
      "Le fichier appspec.yml est manquant dans l'artifact"
    ],
    a: 1,
    e: "Cette erreur signifie que CodeDeploy ne trouve aucune instance à cibler. Causes : (1) aucune instance EC2 avec les tags configurés dans le Deployment Group ne tourne, (2) l'agent CodeDeploy n'est pas installé/running sur les instances, (3) les instances sont dans un état non-éligible (stopped, terminated). Vérifier les tags EC2, l'état des instances et le statut de l'agent (service codedeploy-agent status)."
  },
  {
    t: "CodeDeploy troubleshooting",
    q: "Un déploiement CodeDeploy échoue au hook 'AfterInstall' avec exit code 1. Comment déboguer ?",
    o: [
      "Consulter les logs de l'agent CodeDeploy sur l'instance EC2 (/var/log/aws/codedeploy-agent/)",
      "Vérifier les CloudTrail API logs",
      "Consulter les logs ALB Access Logs",
      "Redémarrer le service CodeDeploy-Agent sur toutes les instances"
    ],
    a: 0,
    e: "Pour déboguer un hook échoué : (1) logs de l'agent CodeDeploy sur l'instance : /var/log/aws/codedeploy-agent/codedeploy-agent.log et /opt/codedeploy-agent/deployment-root/{deployment-id}/{instance-id}/logs/scripts.log. (2) Dans la console CodeDeploy, cliquer sur l'instance failed → voir les lifecycle events → cliquer sur le hook failed → voir les logs. Ces logs contiennent l'output stdout/stderr du script."
  },
  // ─── Comparaisons & patterns Pro ─────────────────────────────────────────
  {
    t: "CodeDeploy patterns Pro",
    q: "Une équipe hésite entre In-Place et Blue/Green pour déployer une API critique. Quels sont les avantages du Blue/Green ? (choisir 2)",
    o: [
      "Zéro downtime — le trafic bascule instantanément de la version Blue à la version Green",
      "Rollback instantané — il suffit de rebascule le trafic vers Blue si un problème est détecté",
      "Coût réduit — Blue/Green nécessite moins d'instances EC2",
      "Compatible avec les bases de données sans schéma de migration"
    ],
    a: [0, 1],
    e: "Les avantages principaux du Blue/Green : (A) Zéro downtime — les nouvelles instances Green sont prêtes avant que le trafic ne bascule, contrairement à l'In-Place où les instances sont temporairement hors service. (B) Rollback rapide — rebascule le LB vers Blue en quelques secondes si problème. L'inconvénient est le coût : on paie temporairement deux environnements. Les migrations DB sont un défi dans les deux cas."
  },
  {
    t: "CodeDeploy patterns Pro",
    q: "Comment implémenter un déploiement 'Canary' sur EC2 avec CodeDeploy ? (Lambda le supporte nativement, mais EC2 ?) ",
    o: [
      "Utiliser la configuration CodeDeployDefault.Canary disponible pour EC2",
      "EC2 ne supporte pas le Canary nativement — simuler avec deux Deployment Groups (un petit pour le canary, un grand pour la suite)",
      "Utiliser AWS Global Accelerator avec CodeDeploy pour le traffic shifting EC2",
      "Canary n'est pas possible sur EC2 — uniquement sur Lambda et ECS"
    ],
    a: 1,
    e: "EC2 ne dispose pas de mode Canary natif dans CodeDeploy (contrairement à Lambda). Le pattern recommandé : créer deux Deployment Groups — un 'Canary' cible un petit sous-ensemble d'instances (ex: 5% via tag 'env=canary'), l'autre 'Production' cible le reste. On déploie d'abord sur Canary, on monitore, puis on déploie sur Production. Cette approche nécessite une gestion manuelle ou via pipeline."
  },
  {
    t: "CodeDeploy patterns Pro",
    q: "Une application monolithique déploie 500 MB d'artifacts via CodeDeploy S3. Les déploiements sont lents (10+ min juste pour le téléchargement). Comment accélérer ?",
    o: [
      "Augmenter la taille de bande passante des instances EC2",
      "Utiliser CodeDeploy avec Amazon S3 Transfer Acceleration",
      "Optimiser l'artifact : ne packager que les fichiers modifiés (delta deployment) ou utiliser un bucket S3 dans la même région que les instances",
      "Passer à un bucket EFS partagé entre toutes les instances"
    ],
    a: 2,
    e: "Pour accélérer les téléchargements CodeDeploy : (1) s'assurer que le bucket S3 est dans la même région que les instances — le transfert intra-région est plus rapide et sans coût. (2) Réduire la taille des artifacts en ne packager que les fichiers nécessaires (pas les node_modules ou les assets non modifiés). (3) Utiliser la compression gzip. (4) Envisager un cache de proxy S3 local si les déploiements sont très fréquents."
  },
  // ─── IAM ──────────────────────────────────────────────────────────────────
  {
    t: "CodeDeploy IAM",
    q: "Quels sont les deux rôles IAM requis pour utiliser CodeDeploy ? (choisir 2)",
    o: [
      "Service role CodeDeploy — permet à CodeDeploy d'appeler les services AWS (EC2, ECS, ALB, ASG…)",
      "Instance profile EC2 — permet à l'agent CodeDeploy de lire les artifacts depuis S3",
      "Deployment role — permet aux développeurs de déclencher des déploiements",
      "Hook role — permet aux scripts de lifecycle d'appeler des services AWS"
    ],
    a: [0, 1],
    e: "Deux rôles IAM sont essentiels : (A) Service role CodeDeploy (attaché à l'application) : permet à CodeDeploy d'accéder aux instances EC2, ALB, ASG, ECS — policy AWSCodeDeployRole. (B) Instance profile EC2 (attaché aux instances) : permet à l'agent CodeDeploy sur l'instance de lire l'artifact depuis S3 et d'appeler les APIs CodeDeploy pour le reporting. Sans l'un ou l'autre, le déploiement échoue."
  }
],

4: [
  // ─── CodeGuru Reviewer ────────────────────────────────────────────────────
  {
    t: "CodeGuru Reviewer",
    q: "Qu'est-ce qu'Amazon CodeGuru Reviewer et quel est son rôle dans le SDLC ?",
    o: [
      "Un outil de profilage des performances à l'exécution (runtime)",
      "Un service d'analyse statique de code (SAST) ML qui détecte bugs, vulnérabilités et déviations des best practices lors des code reviews",
      "Un outil de génération de code automatique basé sur l'IA",
      "Un service de monitoring des métriques applicatives en production"
    ],
    a: 1,
    e: "CodeGuru Reviewer utilise le ML pour analyser le code Java et Python soumis via Pull Requests (CodeCommit, GitHub, Bitbucket) ou associations de repos. Il identifie : vulnérabilités de sécurité (OWASP), fuites de ressources, problèmes de concurrence, déviations des best practices AWS, secrets hardcodés. Les recommandations apparaissent directement dans la PR comme commentaires."
  },
  {
    t: "CodeGuru Reviewer",
    q: "Comment intégrer CodeGuru Reviewer dans un workflow GitHub/CodeCommit ?",
    o: [
      "Installer l'agent CodeGuru sur chaque machine de développeur",
      "Associer le repo à CodeGuru Reviewer — il analysera automatiquement chaque nouvelle Pull Request",
      "Exécuter codeGuruReviewer analyze dans le CI pipeline",
      "CodeGuru Reviewer nécessite un accès direct au code source chiffré"
    ],
    a: 1,
    e: "L'intégration se fait en deux étapes : (1) Associer le repo dans la console CodeGuru (CodeCommit natif, GitHub/Bitbucket via CodeConnections). (2) À chaque PR créée/mise à jour, CodeGuru analyse automatiquement les changements et poste ses recommandations comme commentaires de code review dans la PR. Pas d'agent à installer, pas de modification du pipeline CI."
  },
  {
    t: "CodeGuru Reviewer",
    q: "CodeGuru Reviewer détecte des 'hard-coded credentials' dans une PR. Quel type de détecteur utilise-t-il pour cela ?",
    o: [
      "Secrets detector — analyse les patterns de secrets (AWS keys, passwords, API tokens) dans le code",
      "OWASP detector — règles OWASP A2:Broken Authentication",
      "Dependency checker — vérifie les dépendances pour des vulnérabilités connues",
      "Network detector — analyse les endpoints hardcodés"
    ],
    a: 0,
    e: "CodeGuru Reviewer inclut un détecteur de secrets qui scanne le code pour des patterns de credentials hardcodés : AWS access keys, API tokens, mots de passe en clair, certificats. Il utilise des modèles ML entraînés pour détecter ces patterns et fait partie des Security Detectors de CodeGuru. C'est un contrôle complémentaire à AWS Secrets Manager."
  },
  // ─── CodeGuru Profiler ────────────────────────────────────────────────────
  {
    t: "CodeGuru Profiler",
    q: "Quelle est la différence entre CodeGuru Reviewer et CodeGuru Profiler ?",
    o: [
      "Reviewer analyse le code statiquement pendant les PRs ; Profiler analyse les performances à l'exécution (runtime)",
      "Reviewer est pour Java ; Profiler est pour Python",
      "Reviewer est gratuit ; Profiler est payant",
      "Les deux font la même chose — Profiler est l'ancien nom de Reviewer"
    ],
    a: 0,
    e: "CodeGuru est composé de deux services distincts : (1) Reviewer — analyse STATIQUE du code pendant les code reviews, détecte bugs et vulnérabilités avant le déploiement. (2) Profiler — analyse DYNAMIQUE des performances à l'exécution (CPU, latence, coûts), identifie les hotspots de code en production. Les deux sont complémentaires : Reviewer avant déploiement, Profiler après."
  },
  {
    t: "CodeGuru Profiler",
    q: "Comment CodeGuru Profiler collecte-t-il les données de performance d'une application ?",
    o: [
      "Via des sondes instrumentées manuellement dans le code",
      "Via un agent léger ajouté à l'application (JAR pour Java/JVM, bibliothèque Python) qui échantillonne la pile d'exécution",
      "Via les métriques CloudWatch de l'instance EC2",
      "Via les traces X-Ray de l'application"
    ],
    a: 1,
    e: "CodeGuru Profiler utilise un agent de profiling léger : pour Java/JVM, le JAR agent est ajouté en JVM argument (-javaagent:codeguru-profiler-java-agent.jar) ; pour Python, la bibliothèque est importée. L'agent échantillonne périodiquement la call stack à faible overhead (< 5% CPU). Les données sont envoyées vers le service CodeGuru Profiler pour analyse."
  },
  // ─── CodeArtifact ─────────────────────────────────────────────────────────
  {
    t: "CodeArtifact fondamentaux",
    q: "Qu'est-ce qu'Amazon CodeArtifact et quel problème résout-il ?",
    o: [
      "Un service de stockage de fichiers statiques comme S3",
      "Un gestionnaire de packages entièrement géré qui centralise et contrôle les dépendances (npm, Maven, pip, NuGet…) pour les équipes de développement",
      "Un service de déploiement de packages comme CodeDeploy",
      "Un registre de containers Docker pour remplacer ECR"
    ],
    a: 1,
    e: "CodeArtifact est un référentiel d'artefacts managé qui permet de : (1) stocker et partager des packages internes (bibliothèques maison), (2) proxifier les registres publics (npm, PyPI, Maven Central) avec mise en cache, (3) contrôler quels packages sont autorisés (gouvernance), (4) auditer les accès. Formats supportés : npm, pip, Maven, NuGet, Cargo, RubyGems, SwiftPM."
  },
  {
    t: "CodeArtifact fondamentaux",
    q: "Dans CodeArtifact, quelle est la différence entre un 'domain' et un 'repository' ?",
    o: [
      "Un domain est un compte AWS ; un repository est une région",
      "Un domain est un conteneur organisationnel regroupant plusieurs repositories ; un repository est un référentiel de packages spécifique à un format ou une équipe",
      "Un repository contient plusieurs domains",
      "Les deux termes sont synonymes dans CodeArtifact"
    ],
    a: 1,
    e: "Hiérarchie CodeArtifact : (1) Domain — container de haut niveau pour une organisation, peut regrouper des repositories de plusieurs comptes AWS. (2) Repository — référentiel de packages pour un format ou une équipe spécifique (ex: npm-internal, python-team-a). Un domain peut contenir de nombreux repositories. Le domain permet une gestion centralisée des permissions et des politiques."
  },
  {
    t: "CodeArtifact fondamentaux",
    q: "Comment CodeArtifact peut-il proxifier npm pour mettre en cache les packages publics ?",
    o: [
      "Configurer un 'upstream repository' pointant vers npmjs.com dans les paramètres du repository CodeArtifact",
      "Créer une règle DNS qui redirige npm.registry vers CodeArtifact",
      "Les packages npm doivent être uploadés manuellement dans CodeArtifact",
      "CodeArtifact ne supporte pas le proxy pour npm — uniquement Maven"
    ],
    a: 0,
    e: "CodeArtifact supporte les 'upstream repositories' — des connexions vers des registres publics externes (npmjs.com, PyPI, Maven Central). Quand un package est demandé et n'est pas dans le repo local, CodeArtifact le récupère depuis l'upstream, le met en cache, et le retourne. Les builds suivants utilisent le cache local. Cela résout les problèmes de disponibilité des registres publics en production CI."
  },
  {
    t: "CodeArtifact IAM",
    q: "Comment authentifier une commande 'npm install' pour qu'elle utilise CodeArtifact ?",
    o: [
      "Configurer npm avec un token AWS permanent dans ~/.npmrc",
      "Exécuter 'aws codeartifact login --tool npm' qui génère un token temporaire et configure automatiquement ~/.npmrc",
      "Créer un IAM user dédié avec un access key pour npm",
      "npm ne supporte pas CodeArtifact directement — utiliser un wrapper Python"
    ],
    a: 1,
    e: "La commande 'aws codeartifact login --tool npm --domain mondomaine --repository mon-repo' : (1) appelle l'API GetAuthorizationToken de CodeArtifact pour obtenir un token temporaire (valide 12h par défaut, max 12h), (2) configure automatiquement ~/.npmrc avec le registry URL et le token d'authentification. Les builds CI doivent exécuter cette commande avant npm install."
  },
  {
    t: "CodeArtifact gouvernance",
    q: "Une organisation veut que toutes les équipes utilisent uniquement des packages approuvés (allowlist). Comment implémenter cela avec CodeArtifact ?",
    o: [
      "Créer des bucket policies S3 qui bloquent l'accès aux registres publics",
      "Configurer des repository policies CodeArtifact qui refusent les actions non autorisées, et utiliser des Security Groups pour bloquer l'accès aux registres publics depuis les instances de build",
      "Utiliser AWS Firewall Manager pour bloquer npm.registry et PyPI",
      "Les deux approches B sont complémentaires pour une défense en profondeur"
    ],
    a: 1,
    e: "La stratégie complète : (1) repository policies CodeArtifact contrôlent qui peut publier/consommer des packages (defense au niveau packages), (2) bloquer l'accès direct aux registres publics au niveau réseau (NACLs/Security Groups pour les instances de build dans VPC, ou AWS Network Firewall) force le passage par CodeArtifact. Les deux couches ensemble créent une allowlist effective."
  },
  {
    t: "CodeArtifact multi-comptes",
    q: "Comment partager un repository CodeArtifact entre plusieurs comptes AWS d'une organisation ?",
    o: [
      "Dupliquer le repository dans chaque compte",
      "Configurer une resource policy sur le domain CodeArtifact pour autoriser les autres comptes, puis créer des repositories dans les comptes consommateurs avec un upstream vers le compte central",
      "Utiliser VPC Peering entre les comptes pour accéder au repository",
      "Exporter les packages vers S3 et partager le bucket cross-account"
    ],
    a: 1,
    e: "Le pattern multi-comptes CodeArtifact : (1) compte central maintient le domain et les repositories 'sources' (packages internes), (2) resource policy sur le domain autorise les autres comptes à se connecter, (3) chaque compte consommateur crée ses propres repositories avec un upstream vers le compte central. Les packages circulent via les connexions upstream. AWS RAM peut aussi être utilisé pour partager des domains."
  },
  // ─── CodeCommit avancé ───────────────────────────────────────────────────
  {
    t: "CodeCommit avancé",
    q: "Comment implémenter des protections de branches dans CodeCommit (bloquer les push directs sur main) ?",
    o: [
      "Via les paramètres 'Branch protection' dans la console CodeCommit",
      "Via les IAM policies — refuser codecommit:GitPush sur la ressource branche main pour les développeurs, forcer les Pull Requests",
      "Via un hook pre-receive sur le serveur Git CodeCommit",
      "CodeCommit ne supporte pas les protections de branches"
    ],
    a: 1,
    e: "CodeCommit n'a pas de feature native de 'branch protection' (contrairement à GitHub). La solution IAM : créer une policy qui permet codecommit:GitPush sur toutes les branches SAUF main, et refuser explicitement codecommit:GitPush sur arn:aws:codecommit:region:account:repo/*/branch/main. Les développeurs doivent alors passer par des Pull Requests pour merger sur main."
  },
  {
    t: "CodeCommit avancé",
    q: "Comment CodeCommit peut-il déclencher automatiquement une action (Lambda, SNS) sur un événement (push, PR créée) ?",
    o: [
      "Via des webhooks HTTP configurés dans CodeCommit",
      "Via des 'triggers' CodeCommit (notification vers SNS ou invocation Lambda) ou des règles EventBridge sur les événements CodeCommit",
      "Via des hooks Git (pre-commit, post-commit) stockés dans le repo",
      "CodeCommit ne supporte pas les événements automatiques"
    ],
    a: 1,
    e: "CodeCommit propose deux mécanismes d'événements : (1) Triggers natifs (simple, configurés dans le repo) : notifient un topic SNS ou invoquent une Lambda sur push, création de branche, etc. (2) EventBridge : tous les événements CodeCommit (push, PR create/update/merge, commentaires, etc.) sont publiés vers EventBridge. EventBridge est plus flexible et supporte plus d'événements."
  },
  {
    t: "CodeCommit avancé",
    q: "Une équipe veut que les commits soient signés GPG pour garantir l'authenticité. CodeCommit supporte-t-il la vérification des signatures GPG ?",
    o: [
      "Oui, CodeCommit vérifie automatiquement les signatures GPG",
      "Non, CodeCommit ne vérifie pas les signatures GPG nativement — les commits non-signés sont acceptés",
      "Oui, mais uniquement pour les branches protégées",
      "Oui, via une option dans la configuration du repo CodeCommit"
    ],
    a: 1,
    e: "CodeCommit accepte les commits GPG-signés (git stocke la signature dans le commit) mais ne vérifie pas leur validité nativement. Pour enforcer la signature GPG, il faut : (1) une Lambda déclenchée par un trigger CodeCommit qui vérifie la signature avant d'accepter, ou (2) une CodePipeline avec une étape de vérification. C'est une lacune connue de CodeCommit vs GitHub (qui a la feature native)."
  },
  {
    t: "CodeCommit avancé",
    q: "Comment auditer tous les accès et modifications à un repo CodeCommit (qui a pushé quoi, quand) ?",
    o: [
      "Consulter les logs Git (git log) directement dans le repo",
      "Activer CloudTrail pour capturer toutes les API calls CodeCommit (GitPush, GetBlob, MergePullRequest…) avec l'identité IAM de l'appelant",
      "Utiliser CodeGuru Reviewer pour l'audit des accès",
      "Les accès CodeCommit ne sont pas auditables"
    ],
    a: 1,
    e: "CloudTrail enregistre toutes les API calls CodeCommit : GitPush (qui a pushé), GitPull (qui a cloné/pullé), MergePullRequestByFastForward (qui a mergé), CreatePullRequest, DeleteBranch, etc. Chaque événement inclut l'identité IAM (user/role ARN), l'IP source, la date/heure. Ces logs sont essentiels pour la conformité et l'investigation forensique."
  },
  {
    t: "CodeCommit avancé",
    q: "Un développeur distant veut cloner un repo CodeCommit. Quelles méthodes d'authentification sont disponibles ? (choisir 2)",
    o: [
      "HTTPS avec credentials Git générées depuis la console IAM (nom d'utilisateur/mot de passe spécifiques à CodeCommit)",
      "SSH avec une clé SSH publique uploadée dans le profil IAM",
      "OAuth via un fournisseur d'identité externe (GitHub SSO)",
      "HTTPS avec username/password du compte root AWS"
    ],
    a: [0, 1],
    e: "CodeCommit supporte deux méthodes d'authentification : (1) HTTPS — credentials Git générées par IAM (console IAM → Security credentials → HTTPS Git credentials for CodeCommit). (2) SSH — clé SSH publique uploadée dans le profil IAM, utilisée avec git@git-codecommit.region.amazonaws.com. Les deux sont spécifiques à CodeCommit. Pour les scripts/CI, HTTPS avec git-remote-codecommit (utilise les credentials AWS) est préféré."
  },
  {
    t: "CodeCommit avancé",
    q: "Comment configurer des notifications de Pull Request dans CodeCommit pour alerter les reviewers ?",
    o: [
      "CodeCommit envoie automatiquement des emails aux reviewers",
      "Via AWS Chatbot ou SNS : créer une règle de notification dans CodeCommit → SNS → email/Slack",
      "Via des webhooks GitHub connectés à CodeCommit",
      "Les notifications de PR ne sont pas supportées dans CodeCommit"
    ],
    a: 1,
    e: "CodeCommit intègre les notifications via le service AWS Notifications : dans la console CodeCommit, 'Notify' → créer une règle qui connecte les événements CodeCommit (PR created, PR updated, PR comment) vers un topic SNS. SNS peut envoyer des emails, des notifications Slack (via AWS Chatbot), ou déclencher d'autres automations. Alternative : règle EventBridge sur les événements PR CodeCommit."
  },
  {
    t: "CodeCommit avancé",
    q: "Une organisation utilise CodeCommit avec plusieurs équipes. Comment implémenter le principe de moindre privilège pour l'accès aux repos ?",
    o: [
      "Créer un IAM user par repo",
      "Utiliser des IAM policies basées sur les ressources (ARN de repo) et des tags pour contrôler finement l'accès read/write par équipe et par repo",
      "Tous les développeurs doivent avoir accès à tous les repos — CodeCommit ne supporte pas les permissions granulaires",
      "Utiliser des KMS keys différentes par équipe pour chiffrer les repos"
    ],
    a: 1,
    e: "CodeCommit supporte des permissions IAM granulaires par repo via l'ARN (arn:aws:codecommit:region:account:repo-name). On peut créer des policies qui accordent codecommit:GitPull sur les repos d'une équipe spécifique, codecommit:GitPush uniquement sur certaines branches, etc. L'utilisation de tags de repos avec des conditions IAM (aws:ResourceTag) permet une gestion dynamique."
  },
  // ─── Cross-service patterns ───────────────────────────────────────────────
  {
    t: "CodeCommit + CodePipeline",
    q: "Comment CodePipeline détecte-t-il les nouveaux commits sur CodeCommit pour déclencher le pipeline ?",
    o: [
      "CodePipeline poll CodeCommit toutes les minutes",
      "Via une règle EventBridge automatiquement créée par CodePipeline qui détecte les push sur la branche configurée",
      "Via un webhook HTTP que CodePipeline enregistre dans CodeCommit",
      "Via CloudTrail — chaque GitPush déclenche CodePipeline"
    ],
    a: 1,
    e: "Quand on crée un pipeline CodePipeline avec CodeCommit comme source, CodePipeline crée automatiquement une règle EventBridge sur l'événement 'CodeCommit Repository State Change' (référence mise à jour). Ce mécanisme est quasi-temps réel (quelques secondes). L'ancien mécanisme de polling est toujours disponible mais déprécié en faveur d'EventBridge."
  },
  {
    t: "CodeCommit + CodeArtifact",
    q: "Une équipe veut publier automatiquement une bibliothèque interne dans CodeArtifact à chaque merge sur main dans CodeCommit. Quelle architecture proposer ?",
    o: [
      "CodeCommit → EventBridge (merge sur main) → CodePipeline (Build + Publish) → CodeArtifact",
      "CodeCommit → S3 → CodeArtifact (upload direct)",
      "CodeCommit → CodeDeploy → CodeArtifact",
      "Un cron CloudWatch Events qui vérifie les commits CodeCommit toutes les heures"
    ],
    a: 0,
    e: "Le pipeline recommandé : CodeCommit trigger → CodePipeline source (détection de merge sur main via EventBridge) → CodeBuild (compile, exécute les tests, construit le package : npm pack, mvn package, python setup.py sdist) → CodeBuild (publish : aws codeartifact login + npm publish / mvn deploy / twine upload). CodeArtifact reçoit et stocke le nouveau package versionné."
  },
  {
    t: "CodeGuru Security",
    q: "Quelle est la différence entre CodeGuru Reviewer et Amazon CodeGuru Security ?",
    o: [
      "CodeGuru Security est l'ancien nom de CodeGuru Reviewer",
      "CodeGuru Security est un service dédié à la détection de vulnérabilités (SAST) basé sur ML avec scoring CVSS ; CodeGuru Reviewer est plus large (style, bugs, sécurité)",
      "CodeGuru Security est pour les applications en production ; Reviewer est pour le développement",
      "CodeGuru Security est gratuit ; Reviewer est payant"
    ],
    a: 1,
    e: "Amazon CodeGuru Security est un service autonome (né du détecteur de sécurité de Reviewer) focalisé sur la détection de vulnérabilités avec scoring CVSS, remédiation guidée et tracking des findings. Il supporte plus de langages et s'intègre dans le CI/CD. CodeGuru Reviewer couvre la sécurité mais aussi la qualité de code, les best practices, les performance issues. Pour l'examen DOP-C02, les deux peuvent être mentionnés."
  },
  {
    t: "CodeArtifact scénario Pro",
    q: "Un build CI télécharge 500 packages npm à chaque exécution (20 min de téléchargement). L'équipe veut réduire ce temps. CodeArtifact peut-il aider ?",
    o: [
      "Non — CodeArtifact est plus lent que npm.registry car il ajoute un layer de proxy",
      "Oui — CodeArtifact met en cache les packages npm dans la même région que le build (CodeBuild). Le premier download est depuis npmjs.com, les suivants depuis le cache CodeArtifact (intra-région, plus rapide)",
      "Oui — CodeArtifact pré-installe les packages sur les instances de build",
      "Non — CodeArtifact ne supporte que les packages internes, pas le proxy npm"
    ],
    a: 1,
    e: "CodeArtifact avec un upstream npmjs.com : le premier build télécharge les packages depuis npm public et les met en cache dans CodeArtifact (même région AWS que le build CodeBuild). Les builds suivants téléchargent depuis CodeArtifact via le réseau intra-région AWS (très rapide, pas de latence internet). En pratique, cela peut réduire le temps de téléchargement de 80-90% pour des builds fréquents."
  }
],

5: [
  // ─── CloudFormation fondamentaux ─────────────────────────────────────────
  {
    t: "CloudFormation concepts",
    q: "Qu'est-ce qu'AWS CloudFormation et quel est son rôle fondamental dans le DevOps ?",
    o: [
      "Un outil de monitoring des ressources AWS",
      "Un service d'Infrastructure as Code (IaC) qui permet de décrire et provisionner l'infrastructure AWS via des templates déclaratifs (JSON/YAML)",
      "Un service de déploiement d'applications similaire à CodeDeploy",
      "Un outil de gestion de configuration similaire à Ansible"
    ],
    a: 1,
    e: "CloudFormation est le service IaC natif d'AWS. Il permet de définir l'infrastructure AWS dans des templates YAML/JSON (déclaratif), puis de créer/modifier/supprimer des stacks (ensembles cohérents de ressources). Avantages : reproductibilité, versioning, drift detection, rollback automatique. C'est la fondation du paradigme Infrastructure as Code sur AWS."
  },
  {
    t: "CloudFormation structure",
    q: "Quelles sont les sections obligatoires et optionnelles d'un template CloudFormation ?",
    o: [
      "Obligatoires : AWSTemplateFormatVersion, Resources. Optionnelles : toutes les autres",
      "Obligatoire : Resources uniquement. Optionnelles : AWSTemplateFormatVersion, Description, Metadata, Parameters, Mappings, Conditions, Transform, Outputs",
      "Obligatoires : AWSTemplateFormatVersion, Resources, Outputs",
      "Obligatoires : Resources, Parameters. Optionnelles : toutes les autres"
    ],
    a: 1,
    e: "La seule section OBLIGATOIRE dans un template CloudFormation est 'Resources' — elle contient les ressources AWS à créer. Toutes les autres sections sont optionnelles : AWSTemplateFormatVersion (version du format), Description (texte libre), Metadata (données arbitraires), Parameters (valeurs d'entrée), Mappings (lookup tables), Conditions (logique conditionnelle), Transform (macros SAM/etc.), Outputs (valeurs exportées)."
  },
  {
    t: "CloudFormation Parameters",
    q: "Comment passer une valeur dynamique (ex: nom d'environnement) à un template CloudFormation ?",
    o: [
      "Via des variables d'environnement dans le template",
      "Via la section 'Parameters' — déclarer le paramètre dans le template et le référencer avec !Ref ou !Sub, puis passer la valeur au moment de la création/mise à jour de la stack",
      "En éditant directement le template à chaque déploiement",
      "Via des tags CloudFormation"
    ],
    a: 1,
    e: "Les Parameters permettent de rendre les templates réutilisables. Déclaration : Parameters: EnvName: Type: String. Référence : !Ref EnvName ou !Sub 'bucket-${EnvName}'. Passage de valeur : via la console (prompt), CLI (--parameters ParameterKey=EnvName,ParameterValue=prod), ou CodePipeline (ParameterOverrides). Les types supportés incluent String, Number, List, AWS::EC2::Image::Id, etc."
  },
  {
    t: "CloudFormation Mappings",
    q: "À quoi sert la section 'Mappings' dans un template CloudFormation ?",
    o: [
      "Pour mapper des ressources à des régions AWS",
      "Pour définir des tables de correspondance statiques (clé/valeur) utilisées avec !FindInMap — utile pour des valeurs qui varient selon la région ou l'environnement",
      "Pour mapper des paramètres à des conditions",
      "Pour configurer le mapping des tags sur les ressources"
    ],
    a: 1,
    e: "Mappings définit des tables de lookup statiques. Exemple : Mappings: RegionMap: us-east-1: AMI: ami-123 eu-west-1: AMI: ami-456. Utilisation : !FindInMap [RegionMap, !Ref AWS::Region, AMI]. Avantage : permet d'adapter automatiquement les valeurs selon la région, l'environnement ou le type d'instance sans modifier le template. Contrairement aux Parameters, les Mappings sont statiques dans le template."
  },
  {
    t: "CloudFormation Outputs",
    q: "Pourquoi utiliser les 'Outputs' dans CloudFormation et comment les partager entre stacks ?",
    o: [
      "Les Outputs servent uniquement à l'affichage dans la console",
      "Les Outputs permettent d'exporter des valeurs depuis une stack (via Export: Name) et de les importer dans d'autres stacks avec !ImportValue — permet les stacks croisées",
      "Les Outputs remplacent les Parameters pour les valeurs dynamiques",
      "Les Outputs sont automatiquement envoyés à CloudWatch"
    ],
    a: 1,
    e: "Les Outputs servent à deux fins : (1) afficher des informations post-déploiement (URL de l'ALB, endpoint RDS, etc.), (2) exporter des valeurs vers d'autres stacks avec Export: Name: MonExport. L'autre stack importe avec !ImportValue MonExport. Important : une stack avec des exports ne peut pas être supprimée tant qu'une autre stack l'importe. Cela crée une dépendance explicite entre stacks."
  },
  {
    t: "CloudFormation Conditions",
    q: "Comment créer une ressource uniquement en environnement de production avec CloudFormation ?",
    o: [
      "Utiliser un Parameter de type Boolean",
      "Définir une Condition basée sur un Parameter (ex: !Equals [!Ref Env, prod]) et attacher la condition à la ressource avec 'Condition: IsProd'",
      "Créer deux templates séparés (prod et non-prod)",
      "Utiliser des tags CloudFormation pour filtrer les ressources"
    ],
    a: 1,
    e: "Pattern standard avec Conditions : Parameters: Env: Type: String. Conditions: IsProd: !Equals [!Ref Env, prod]. Dans la ressource : Type: AWS::RDS::DBInstance Condition: IsProd. La ressource n'est créée que si la condition est vraie. Les Conditions peuvent aussi être utilisées dans les Outputs (!If [IsProd, valeur-prod, valeur-non-prod]) et pour les valeurs de propriétés."
  },
  {
    t: "CloudFormation intrinsic functions",
    q: "Quelle est la différence entre !Ref et !GetAtt dans CloudFormation ?",
    o: [
      "!Ref retourne l'ID de la ressource ; !GetAtt retourne un attribut spécifique de la ressource",
      "!Ref est pour les Parameters ; !GetAtt est pour les Resources",
      "!Ref retourne l'ARN ; !GetAtt retourne le nom",
      "Les deux sont identiques — !GetAtt est l'alias de !Ref"
    ],
    a: 0,
    e: "!Ref retourne la valeur 'principale' de la ressource (souvent l'ID ou le nom) : !Ref MonBucket retourne le nom du bucket S3, !Ref MonSG retourne l'ID du Security Group. !GetAtt retourne un attribut spécifique : !GetAtt MonALB.DNSName retourne le DNS de l'ALB, !GetAtt MonLambda.Arn retourne l'ARN de la Lambda. Chaque type de ressource définit ce que !Ref retourne et quels attributs sont disponibles via !GetAtt."
  },
  {
    t: "CloudFormation intrinsic functions",
    q: "Comment construire une chaîne dynamique dans CloudFormation, par exemple un nom de bucket qui inclut l'environnement et la région ?",
    o: [
      "!Join ['mon-bucket', !Ref Env, !Ref AWS::Region]",
      "!Sub 'mon-bucket-${Env}-${AWS::Region}' où Env est un Parameter et AWS::Region une pseudo-variable",
      "!Concat [mon-bucket, !Ref Env, !Ref AWS::Region]",
      "!Format 'mon-bucket-{Env}-{region}'"
    ],
    a: 1,
    e: "!Sub (substitution) est la fonction la plus puissante pour construire des strings. !Sub 'mon-bucket-${Env}-${AWS::Region}' substitue ${Env} par la valeur du Parameter et ${AWS::Region} par la pseudo-variable de région. !Join peut aussi faire ça : !Join ['-', [mon-bucket, !Ref Env, !Ref AWS::Region]]. !Sub est généralement plus lisible pour des patterns complexes."
  },
  {
    t: "CloudFormation pseudo-parameters",
    q: "Quelles pseudo-variables CloudFormation permettent d'obtenir l'ID de compte AWS et la région sans les coder en dur ?",
    o: [
      "!Ref AWS::AccountNumber et !Ref AWS::RegionName",
      "!Ref AWS::AccountId et !Ref AWS::Region",
      "!GetAtt AWS::Account.Id et !GetAtt AWS::Stack.Region",
      "Variables::AccountId et Variables::Region"
    ],
    a: 1,
    e: "Les pseudo-paramètres CloudFormation sont des variables prédéfinies disponibles dans tout template : AWS::AccountId (ID du compte), AWS::Region (région du déploiement, ex: eu-west-1), AWS::StackId (ARN de la stack), AWS::StackName (nom de la stack), AWS::NoValue (supprimer une propriété conditionnellement). Ils s'utilisent avec !Ref : !Ref AWS::AccountId."
  },
  {
    t: "CloudFormation stack operations",
    q: "Qu'est-ce qu'un Change Set CloudFormation et pourquoi l'utiliser avant une mise à jour ?",
    o: [
      "Un historique des modifications passées d'une stack",
      "Un aperçu des modifications qui seraient apportées à une stack avant de les appliquer — permet de valider les changements sans risque avant la mise à jour",
      "Un mécanisme de rollback automatique",
      "Un export des ressources de la stack vers un fichier"
    ],
    a: 1,
    e: "Un Change Set CloudFormation montre exactement ce qui va se passer lors d'une mise à jour : quelles ressources seront ajoutées (Add), modifiées (Modify), ou supprimées (Remove), et si une modification nécessite un remplacement de ressource (remplacement = interruption de service potentielle). Bonne pratique obligatoire avant toute mise à jour en production. Workflow : create-change-set, review, execute-change-set."
  },
  {
    t: "CloudFormation rollback",
    q: "Que se passe-t-il par défaut si une ressource échoue à créer lors d'un déploiement CloudFormation ?",
    o: [
      "CloudFormation s'arrête à la ressource en échec et laisse les autres ressources créées",
      "CloudFormation effectue un rollback automatique — toutes les ressources déjà créées dans le déploiement en cours sont supprimées, la stack revient à l'état précédent",
      "CloudFormation réessaie la création 3 fois avant d'échouer",
      "CloudFormation crée la stack partiellement et signale l'erreur dans les tags"
    ],
    a: 1,
    e: "Par défaut, CloudFormation utilise le comportement ROLLBACK_ON_FAILURE : si une ressource échoue, toutes les ressources créées pendant ce déploiement sont supprimées et la stack revient à son état précédent (ou est supprimée si c'est une création). Option --on-failure DO_NOTHING permet de garder les ressources pour le debug. L'option ROLLBACK (depuis 2022) préserve les ressources réussies et retente uniquement les ressources en échec."
  },
  {
    t: "CloudFormation DependsOn",
    q: "Dans quel cas utiliser 'DependsOn' dans CloudFormation ?",
    o: [
      "Pour chaque ressource dans le template",
      "Quand une ressource doit être créée après une autre, mais qu'il n'y a pas de référence directe (pas de !Ref ou !GetAtt) entre elles — CloudFormation ne détecte pas automatiquement cette dépendance",
      "Pour éviter que CloudFormation crée des ressources en parallèle",
      "DependsOn est équivalent à !Ref et peut être utilisé à la place"
    ],
    a: 1,
    e: "CloudFormation détecte automatiquement les dépendances via !Ref et !GetAtt et crée les ressources dans le bon ordre. DependsOn est nécessaire uniquement quand la dépendance est implicite : par exemple, une instance EC2 qui doit démarrer APRÈS un Internet Gateway attaché au VPC, même si l'instance ne référence pas l'IGW directement. Sans DependsOn, les deux pourraient se créer en parallèle et l'instance pourrait échouer."
  },
  {
    t: "CloudFormation deletion policies",
    q: "Comment éviter qu'une base de données RDS soit supprimée quand on supprime la stack CloudFormation ?",
    o: [
      "CloudFormation ne supprime jamais les ressources RDS",
      "Ajouter 'DeletionPolicy: Retain' sur la ressource RDS — la ressource reste dans AWS même si la stack est supprimée",
      "Mettre un tag 'Protected: true' sur la ressource RDS",
      "Utiliser 'DependsOn' pour empêcher la suppression"
    ],
    a: 1,
    e: "DeletionPolicy contrôle ce qui arrive à une ressource quand la stack est supprimée : (1) Delete (défaut pour la plupart) : la ressource est supprimée. (2) Retain : la ressource reste dans AWS, non managée par CloudFormation. (3) Snapshot (pour RDS, ElastiCache, Redshift) : un snapshot final est créé avant suppression. Pour les données critiques, DeletionPolicy: Retain ET UpdateReplacePolicy: Retain protègent contre les suppressions accidentelles."
  },
  {
    t: "CloudFormation nested stacks",
    q: "Pourquoi utiliser des 'nested stacks' (stacks imbriquées) dans CloudFormation ?",
    o: [
      "Les nested stacks sont plus rapides à déployer",
      "Pour dépasser la limite de 500 ressources par stack et pour modulariser l'infrastructure en composants réutilisables (VPC, security, app...)",
      "Pour créer des ressources dans plusieurs régions simultanément",
      "Les nested stacks permettent de partager des credentials IAM entre stacks"
    ],
    a: 1,
    e: "Les nested stacks (Type: AWS::CloudFormation::Stack) permettent de : (1) dépasser la limite de 500 ressources par stack, (2) modulariser l'infrastructure en séparant VPC, IAM, RDS, App en stacks séparées, (3) réutiliser un même template de VPC par plusieurs équipes. La stack parente passe des paramètres aux stacks enfants et peut récupérer leurs Outputs. Différent des StackSets qui ciblent plusieurs comptes et régions."
  },
  {
    t: "CloudFormation scénario Pro",
    q: "Une mise à jour CloudFormation va remplacer une instance EC2 (Replacement: True dans le Change Set). Quelle est l'implication et comment minimiser l'impact ?",
    o: [
      "Le remplacement est transparent — CloudFormation maintient deux instances pendant la transition",
      "Le remplacement signifie que l'ancienne instance sera supprimée et une nouvelle créée. Avec un ASG et un rolling update policy, l'impact est minimisé ; sans ASG, cela peut causer une interruption de service",
      "Replacement: True signifie simplement que les tags seront mis à jour",
      "CloudFormation garde automatiquement l'ancienne instance pendant 24h après le remplacement"
    ],
    a: 1,
    e: "Replacement: True dans un Change Set indique que la modification d'une propriété immutable (ex: AMI ID) nécessite la création d'une NOUVELLE ressource et la suppression de l'ancienne. Pour EC2 : ancienne instance terminée, nouvelle créée avec un nouvel ID. Stratégies : (1) utiliser un ASG avec UpdatePolicy (AutoScalingRollingUpdate), (2) déployer Blue/Green via CodeDeploy, (3) planifier une fenêtre de maintenance."
  },
  {
    t: "CloudFormation scénario Pro",
    q: "Une stack CloudFormation est bloquée en état 'UPDATE_ROLLBACK_FAILED'. Comment récupérer ?",
    o: [
      "Supprimer et recréer la stack depuis zéro",
      "Utiliser 'continue-update-rollback' avec --resources-to-skip pour ignorer les ressources bloquant le rollback, puis résoudre le problème manuellement",
      "Attendre que CloudFormation termine le rollback automatiquement",
      "Contacter AWS Support pour débloquer la stack"
    ],
    a: 1,
    e: "UPDATE_ROLLBACK_FAILED signifie que le rollback lui-même a échoué (souvent car une ressource hors CloudFormation a été modifiée manuellement). Récupération : (1) identifier la ressource bloquante dans les événements de la stack, (2) résoudre manuellement le problème, ou (3) utiliser 'aws cloudformation continue-update-rollback --stack-name X --resources-to-skip [ResourceName]' pour ignorer la ressource bloquante. La stack passe ensuite en UPDATE_ROLLBACK_COMPLETE."
  },
  {
    t: "CloudFormation scénario Pro",
    q: "Comment détecter et corriger une 'drift' (dérive) entre la stack CloudFormation et l'état réel des ressources AWS ?",
    o: [
      "CloudFormation détecte automatiquement et corrige les drifts en temps réel",
      "Lancer une détection de drift (detect-stack-drift), identifier les ressources dérivées, puis mettre à jour la stack ou les ressources pour les resynchroniser",
      "Supprimer et recréer la stack pour corriger automatiquement toutes les drifts",
      "Les drifts ne peuvent pas être détectées — c'est une limitation de CloudFormation"
    ],
    a: 1,
    e: "Drift detection : 'aws cloudformation detect-stack-drift --stack-name X' lance une détection asynchrone. 'describe-stack-resource-drifts' liste les ressources avec statut MODIFIED, DELETED, NOT_CHECKED. Pour corriger : (1) mettre à jour le template pour refléter les changements manuels (si voulus), ou (2) modifier manuellement les ressources pour revenir à l'état du template, ou (3) mettre à jour la stack. La gouvernance IaC doit interdire les modifications manuelles en production."
  },
  {
    t: "CloudFormation StackSets",
    q: "Quelle est la différence entre une CloudFormation Stack et un CloudFormation StackSet ?",
    o: [
      "Un StackSet est une stack avec plus de 500 ressources",
      "Un StackSet permet de déployer un même template CloudFormation dans plusieurs comptes AWS et/ou plusieurs régions simultanément",
      "Un StackSet est une stack privée non partageable",
      "Un StackSet regroupe plusieurs templates en un seul déploiement"
    ],
    a: 1,
    e: "CloudFormation StackSets extend les stacks : un StackSet définit le template et les cibles (comptes et régions), et crée automatiquement des Stack Instances dans chaque cible. Cas d'usage : déployer une configuration de sécurité baseline dans tous les comptes d'une Organisation AWS, déployer des ressources multi-régions. Deux modes : SELF_MANAGED (rôles IAM manuels) et SERVICE_MANAGED (intégration AWS Organizations automatique)."
  },
  {
    t: "CloudFormation StackSets",
    q: "Comment déployer automatiquement une stack de compliance dans tous les nouveaux comptes AWS d'une Organisation via StackSets ?",
    o: [
      "Créer un cron EventBridge qui surveille la création de nouveaux comptes",
      "Activer l'option 'Automatic Deployments' dans les StackSets avec AWS Organizations : les nouvelles accounts dans les OUs cibles reçoivent automatiquement une Stack Instance",
      "Utiliser AWS Config Rules pour déployer automatiquement des stacks",
      "Les StackSets ne supportent pas le déploiement automatique sur nouveaux comptes"
    ],
    a: 1,
    e: "StackSets avec SERVICE_MANAGED (AWS Organizations) supporte les Automatic Deployments : quand un compte rejoint une OU cible, CloudFormation crée automatiquement une Stack Instance dans ce compte. Quand un compte quitte l'OU, la Stack Instance peut être supprimée automatiquement (RetainStacksOnAccountRemoval: false). C'est le pattern standard pour les account vending machines et architectures Landing Zone."
  }
],

6: [
  // ─── CloudFormation avancé ────────────────────────────────────────────────
  {
    t: "CloudFormation Custom Resources",
    q: "Qu'est-ce qu'une Custom Resource CloudFormation et quand l'utiliser ?",
    o: [
      "Une ressource propriétaire d'un fournisseur tiers",
      "Un mécanisme permettant d'exécuter du code arbitraire (Lambda) lors des opérations Create/Update/Delete de CloudFormation — pour gérer des ressources non supportées nativement",
      "Un type de ressource créé par AWS Support",
      "Une ressource qui nécessite une approbation manuelle avant création"
    ],
    a: 1,
    e: "Les Custom Resources (Type: Custom::NomRessource ou AWS::CloudFormation::CustomResource) délèguent la logique à une Lambda. CloudFormation envoie un événement (RequestType: Create/Update/Delete, StackId, ResourceProperties) à la Lambda via SNS ou directement. La Lambda effectue l'action (créer un cert ACM, configurer un DNS externe, initialiser une DB) et renvoie SUCCESS/FAILED avec un PhysicalResourceId. Indispensable pour des ressources hors AWS ou des opérations custom."
  },
  {
    t: "CloudFormation Custom Resources",
    q: "Une Custom Resource Lambda doit créer un enregistrement DNS dans un registrar externe. Que doit retourner la Lambda à CloudFormation en cas de succès ?",
    o: [
      "HTTP 200 OK",
      "Un PUT vers le ResponseURL pré-signé S3 fourni dans l'événement avec Status: SUCCESS, PhysicalResourceId et les Data optionnelles",
      "Un SNS message vers le topic CloudFormation",
      "Un return statement avec {success: true}"
    ],
    a: 1,
    e: "Le protocole Custom Resource : CloudFormation envoie l'événement avec un ResponseURL (URL S3 pré-signée). La Lambda DOIT faire un HTTP PUT vers ce ResponseURL avec un body JSON : {Status: SUCCESS|FAILED, PhysicalResourceId: 'id-unique', StackId: event.StackId, RequestId: event.RequestId, LogicalResourceId: event.LogicalResourceId, Data: {clé: valeur}}. Si la Lambda ne PUT pas vers le ResponseURL dans le délai (défaut 1h), la stack se bloque en attente."
  },
  {
    t: "CloudFormation macros et Transform",
    q: "Qu'est-ce que la section 'Transform' dans un template CloudFormation SAM ?",
    o: [
      "Une transformation de format entre JSON et YAML",
      "Une déclaration qui indique à CloudFormation d'appliquer une macro (ex: AWS::Serverless-2016-10-31) pour transformer le template avant déploiement",
      "Un outil de migration de templates entre régions",
      "La section Transform remplace la section Resources"
    ],
    a: 1,
    e: "Transform applique des macros CloudFormation avant le déploiement. La plus connue : 'Transform: AWS::Serverless-2016-10-31' (SAM — Serverless Application Model). Cette macro transforme des ressources SAM simplifiées (AWS::Serverless::Function) en ressources CloudFormation complètes (Lambda + IAM Role + Log Group). CloudFormation crée d'abord un Change Set de transformation, puis déploie les ressources résultantes. Les macros personnalisées utilisent une Lambda."
  },
  {
    t: "CloudFormation cfn-init",
    q: "Comment utiliser CloudFormation pour configurer automatiquement le contenu d'une instance EC2 au démarrage (packages, fichiers, services) ?",
    o: [
      "Via des User Data scripts uniquement",
      "Via AWS::CloudFormation::Init dans les Metadata de l'instance EC2 et cfn-init dans le User Data — permet une configuration déclarative avec packages, files, commands, services",
      "Via SSM Run Command lancé par CloudFormation",
      "CloudFormation ne peut pas configurer le contenu interne d'une instance EC2"
    ],
    a: 1,
    e: "Le pattern cfn-init : (1) définir AWS::CloudFormation::Init dans les Metadata de la ressource EC2 avec des configSets (packages, files, commands, services), (2) dans UserData : appeler cfn-init --stack X --resource EC2Instance --configsets default, (3) cfn-signal pour signaler la réussite à CloudFormation. cfn-init est déclaratif et idempotent contrairement aux scripts User Data. cfn-hup permet la re-configuration sur mise à jour de la stack."
  },
  {
    t: "CloudFormation cfn-signal",
    q: "Qu'est-ce que cfn-signal et pourquoi est-il crucial pour la fiabilité des déploiements EC2 avec CloudFormation ?",
    o: [
      "cfn-signal est un outil de monitoring de performance EC2",
      "cfn-signal permet à l'instance EC2 de signaler à CloudFormation que son initialisation est terminée (ou a échoué) — sans ce signal, CloudFormation ne sait pas si l'application est prête",
      "cfn-signal gère le scaling automatique des instances",
      "cfn-signal envoie des alertes CloudWatch quand une instance démarre"
    ],
    a: 1,
    e: "Sans cfn-signal, CloudFormation considère une instance EC2 comme déployée dès que l'API EC2 indique 'running' — mais l'application peut ne pas être encore prête. cfn-signal (combiné avec WaitCondition ou CreationPolicy: ResourceSignal) fait attendre CloudFormation que l'application confirme son état. Si cfn-signal --exit-code $? retourne non-zéro, CloudFormation déclenche un rollback. C'est essentiel pour la fiabilité des bootstrapping d'instances."
  },
  // ─── AWS CDK ──────────────────────────────────────────────────────────────
  {
    t: "CDK concepts",
    q: "Qu'est-ce qu'AWS CDK (Cloud Development Kit) et en quoi diffère-t-il de CloudFormation pur ?",
    o: [
      "CDK est un outil de monitoring de stacks CloudFormation",
      "CDK permet de définir l'infrastructure AWS dans un langage de programmation (Python, TypeScript, Java...) qui génère du CloudFormation. Avantage : logique, boucles, abstraction vs le YAML déclaratif",
      "CDK remplace CloudFormation — les stacks CDK ne passent pas par CloudFormation",
      "CDK est uniquement disponible pour Python et TypeScript"
    ],
    a: 1,
    e: "CDK est une couche d'abstraction au-dessus de CloudFormation. On écrit du code (TypeScript, Python, Java, C#, Go) avec des Constructs (abstractions de ressources AWS) et CDK synthétise un template CloudFormation ('cdk synth'). Avantages : réutilisation avec des classes, logique conditionnelle native, typage fort, tests unitaires de l'infrastructure. CDK déploie toujours via CloudFormation ('cdk deploy' = cdk synth + cfn deploy)."
  },
  {
    t: "CDK concepts",
    q: "Qu'est-ce qu'un 'Construct' dans AWS CDK et quels sont les trois niveaux de constructs ?",
    o: [
      "Un Construct est un déploiement CDK ; il n'y a que deux niveaux",
      "Un Construct est un composant d'infrastructure réutilisable. L3 (L1: ressource CloudFormation brute, L2: ressource avec defaults sensés, L3: pattern multi-ressources)",
      "Un Construct est équivalent à une stack CloudFormation",
      "Les Constructs ne sont disponibles que pour les ressources de compute (EC2, Lambda)"
    ],
    a: 1,
    e: "Les trois niveaux de Constructs CDK : (L1) Cfn Constructs (CfnBucket) : mapping direct 1:1 avec CloudFormation, propriétés identiques — généré automatiquement depuis les schemas CFN. (L2) Constructs de haut niveau (s3.Bucket) : ressources avec des valeurs par défaut sensées, méthodes pratiques (bucket.grantRead(role)) et logique intégrée. (L3/Patterns) : patterns multi-ressources comme ApplicationLoadBalancedFargateService qui crée ECS, ALB, Security Groups, IAM en une ligne."
  },
  {
    t: "CDK workflow",
    q: "Quelles sont les étapes du workflow CDK pour déployer une infrastructure ?",
    o: [
      "cdk init → code → cdk push",
      "cdk init → écrire les Constructs → cdk synth (génère CFN) → cdk diff (preview) → cdk deploy (déploie via CFN)",
      "cdk init → cdk build → cdk release",
      "cdk template → cdk validate → cdk apply"
    ],
    a: 1,
    e: "Workflow CDK complet : (1) cdk init app --language typescript (initialise le projet). (2) Écrire les Constructs dans le code. (3) cdk synth : génère le template CloudFormation dans cdk.out/. (4) cdk diff : compare l'état actuel de la stack avec les changements (équivalent Change Set). (5) cdk deploy : synthétise + déploie via CloudFormation. (6) cdk destroy : supprime la stack. cdk bootstrap est requis une fois par compte/région pour créer les ressources CDK (bucket S3 pour les assets)."
  },
  {
    t: "CDK bootstrap",
    q: "Qu'est-ce que 'cdk bootstrap' et pourquoi est-il nécessaire ?",
    o: [
      "Une commande pour initialiser un nouveau projet CDK",
      "Une commande qui crée des ressources d'infrastructure CDK (CDKToolkit stack) dans un compte/région — bucket S3 pour les assets, ECR repository, IAM roles — nécessaire avant le premier déploiement",
      "Une commande pour mettre à jour la version de CDK",
      "Bootstrap initialise la connexion entre CDK et CloudFormation"
    ],
    a: 1,
    e: "cdk bootstrap crée la CDKToolkit stack dans le compte/région cible : un bucket S3 (cdk-bootstrap-...) pour stocker les assets (Lambda zip, Docker images), un ECR repository pour les images Docker, et des IAM roles pour les opérations CDK. Sans bootstrap, cdk deploy échoue si l'app a des assets (fichiers, images). Le bootstrap est requis une fois par combinaison compte+région. Les organisations peuvent personnaliser le bootstrap template."
  },
  {
    t: "CDK aspects",
    q: "Qu'est-ce que les 'Aspects' dans CDK et comment les utiliser pour appliquer des politiques de tagging à toute une stack ?",
    o: [
      "Les Aspects sont des métadonnées CDK",
      "Les Aspects permettent d'appliquer une opération (visit) à tous les Constructs d'un scope — utilisés pour le tagging automatique, les vérifications de conformité, ou la modification en masse de propriétés",
      "Les Aspects sont des décorateurs TypeScript uniquement",
      "Les Aspects remplacent les CloudFormation Conditions"
    ],
    a: 1,
    e: "Les Aspects CDK implémentent le pattern Visitor : ils itèrent sur tous les Constructs d'un scope (Stack, App). Le cas d'usage le plus courant : Tags.of(app).add('Projet', 'mon-projet') qui ajoute le tag à TOUTES les ressources de l'app. Autres utilisations : vérification de conformité (s'assurer que tous les buckets ont le chiffrement activé), modification en masse de propriétés. Les Aspects s'exécutent lors du 'synth' avant la génération du template."
  },
  {
    t: "CDK testing",
    q: "Comment tester une infrastructure CDK avant de la déployer ?",
    o: [
      "Le testing n'est pas supporté par CDK — utiliser la console AWS pour valider",
      "Via les assertions CDK (aws-cdk-lib/assertions) : fine-grained assertions (vérifier une propriété spécifique), snapshot tests (comparer le template généré) et matchers (correspondance partielle)",
      "Via des tests d'intégration uniquement — déployer dans un compte de test",
      "Via CloudFormation Linter uniquement"
    ],
    a: 1,
    e: "CDK fournit un framework de test basé sur Jest (TS) ou pytest (Python) : (1) Fine-grained assertions : template.hasResourceProperties('AWS::S3::Bucket', {VersioningConfiguration: {Status: 'Enabled'}}) — vérifie des propriétés spécifiques dans le template généré. (2) Snapshot tests : template.toJSON() comparé à un snapshot précédent — détecte les changements inattendus. (3) Match matchers pour des correspondances partielles. Les tests s'exécutent en ms sans déploiement réel."
  },
  {
    t: "CDK vs Terraform",
    q: "Quelles sont les principales différences entre AWS CDK et Terraform pour la gestion de l'infrastructure AWS ?",
    o: [
      "Terraform est uniquement pour GCP ; CDK est uniquement pour AWS",
      "CDK utilise des langages de programmation (TS, Python) et génère du CloudFormation (AWS uniquement) ; Terraform utilise HCL, est multi-cloud, maintient son propre state file et dispose d'un plus grand ecosystème de providers",
      "CDK est open source ; Terraform est propriétaire",
      "Terraform est plus rapide à déployer que CDK"
    ],
    a: 1,
    e: "CDK vs Terraform : CDK avantages : vrais langages de prog (TypeScript/Python/Java), intégration native AWS (L2/L3 Constructs), CI/CD native avec CDK Pipelines, state géré par CloudFormation. Terraform avantages : multi-cloud (AWS + GCP + Azure + providers personnalisés), HCL plus lisible pour certains, state file (terraform.tfstate) flexible (S3 remote backend), plus grand écosystème de modules. Pour AWS uniquement : CDK est souvent préféré ; multi-cloud : Terraform."
  },
  {
    t: "CDK Pipelines",
    q: "Qu'est-ce que CDK Pipelines et quelle est sa valeur ajoutée ?",
    o: [
      "CDK Pipelines est un alias pour CodePipeline",
      "CDK Pipelines est un Construct L3 qui crée un pipeline CI/CD self-mutating — le pipeline se met à jour automatiquement quand le code CDK change",
      "CDK Pipelines déploie uniquement vers un seul environnement",
      "CDK Pipelines remplace CodeBuild pour les builds"
    ],
    a: 1,
    e: "CDK Pipelines (aws-cdk-lib/pipelines.CodePipeline) est un Construct L3 qui crée un pipeline CodePipeline complet avec : source (CodeCommit/GitHub), build (CodeBuild : cdk synth), et stages de déploiement vers plusieurs environnements. La propriété clé : self-mutating — si on ajoute un stage au pipeline en code CDK, le pipeline se met à jour lui-même lors du prochain run avant de déployer les autres changements. Idéal pour le GitOps d'infrastructure."
  },
  {
    t: "CDK scénario Pro",
    q: "Un équipe veut partager des Constructs CDK réutilisables entre plusieurs équipes dans une organisation. Quelle approche recommander ?",
    o: [
      "Copier-coller le code CDK entre les projets",
      "Créer une bibliothèque de Constructs CDK publiée dans CodeArtifact (ou npm) que les équipes installent comme dépendance npm/pip — permet la versioning et la maintenance centralisée",
      "Utiliser des snippets CloudFormation partagés",
      "CDK ne supporte pas le partage de Constructs entre équipes"
    ],
    a: 1,
    e: "Le pattern recommandé : (1) créer une lib CDK (cdk init lib) avec les Constructs réutilisables (VpcConstruct, DatabaseConstruct, etc.), (2) packager avec jsii (permet d'utiliser en TypeScript, Python, Java, C# depuis un seul code TS), (3) publier dans CodeArtifact (npm pour TS, pip pour Python), (4) les équipes consommatrices installent la lib comme dépendance. Projen automatise la gestion de ce type de projet. AWS Construct Hub répertorie les Constructs publics."
  }
]

};
