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
]

};
