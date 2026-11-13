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

// ── Plan de révision 15 jours ───────────────────────────────────────────────
const _DOC = "https://docs.aws.amazon.com/";
window.QUIZ_PLAN = [
  // ═══════════════════════════════════════════════════════════════════════════
  // DOMAINE 1 : SDLC Automation — 22 % — 3 jours (J1–J3)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    d: 1,
    theme: "CI/CD — CodePipeline & CodeBuild",
    dom: ["D1 · SDLC Automation · 22 %"],
    time: "≈ 1 h 30 lecture + 1 h 30 quiz",
    sections: [
      { id: "s1", titre: "🔄 CodePipeline : stages, actions, transitions, artifacts" },
      { id: "s2", titre: "🏗 CodeBuild : buildspec.yml, phases, caching, rapports" },
      { id: "s3", titre: "🧪 Tests automatisés dans les pipelines CI" }
    ],
    read: [
      "AWS docs : CodePipeline — concepts, pipeline structure, action types",
      "AWS docs : CodeBuild — buildspec reference, caching strategies",
      "AWS docs : CodeBuild — test reporting, coverage reports"
    ],
    links: [
      ["CodePipeline concepts", _DOC + "codepipeline/latest/userguide/concepts.html"],
      ["CodePipeline action types", _DOC + "codepipeline/latest/userguide/reference-pipeline-structure.html"],
      ["CodeBuild buildspec", _DOC + "codebuild/latest/userguide/build-spec-ref.html"],
      ["CodeBuild caching", _DOC + "codebuild/latest/userguide/build-caching.html"],
      ["CodeBuild test reports", _DOC + "codebuild/latest/userguide/test-reporting.html"]
    ],
    focus: [
      "CodePipeline : structure pipeline — Source, Build, Test, Deploy, Approval",
      "CodeBuild : phases install / pre_build / build / post_build — ordre et comportement",
      "CodeBuild : local caching (source, docker layer) vs S3 caching",
      "Déclencheurs : webhook GitHub, CloudWatch Events, EventBridge",
      "Variables d'environnement : CODEBUILD_BUILD_ID, CODEBUILD_RESOLVED_SOURCE_VERSION",
      "Intégration : CodePipeline → CodeBuild → rapport de tests (JUnit/Cucumber)"
    ]
  },
  {
    d: 2,
    theme: "CI/CD — CodeDeploy & stratégies de déploiement",
    dom: ["D1 · SDLC Automation · 22 %"],
    time: "≈ 1 h 30 lecture + 1 h 30 quiz",
    sections: [
      { id: "s4", titre: "🚀 CodeDeploy : in-place, blue/green, AppSpec, hooks" },
      { id: "s5", titre: "🎯 Stratégies : canary, linear, all-at-once — EC2, ECS, Lambda" },
      { id: "s6", titre: "📦 CodeArtifact & EC2 Image Builder" }
    ],
    read: [
      "AWS docs : CodeDeploy — deployment types, AppSpec file reference",
      "AWS docs : CodeDeploy — lifecycle event hooks",
      "AWS docs : CodeArtifact — repositories, domains, upstream sources",
      "AWS docs : EC2 Image Builder — pipelines, recipes, components"
    ],
    links: [
      ["CodeDeploy deployment types", _DOC + "codedeploy/latest/userguide/welcome.html"],
      ["CodeDeploy AppSpec reference", _DOC + "codedeploy/latest/userguide/reference-appspec-file.html"],
      ["CodeDeploy hooks EC2", _DOC + "codedeploy/latest/userguide/reference-appspec-file-structure-hooks.html"],
      ["CodeArtifact", _DOC + "codeartifact/latest/ug/welcome.html"],
      ["EC2 Image Builder", _DOC + "imagebuilder/latest/userguide/what-is-image-builder.html"]
    ],
    focus: [
      "CodeDeploy hooks EC2 : BeforeInstall → AfterInstall → ApplicationStart → ValidateService",
      "CodeDeploy hooks Lambda : BeforeAllowTraffic / AfterAllowTraffic",
      "Blue/green EC2 : LB switche le trafic → original fleet terminée après grace period",
      "ECS rolling update : minimumHealthyPercent / maximumPercent",
      "Lambda canary/linear : alias + weighted routing entre versions",
      "CodeArtifact : domain → repository → upstream (connecte npmjs, PyPI, Maven central)",
      "EC2 Image Builder : recipe (base + components) → pipeline → AMI + ECR image"
    ]
  },
  {
    d: 3,
    theme: "Artifacts, gestion des secrets & multi-compte",
    dom: ["D1 · SDLC Automation · 22 %"],
    time: "≈ 1 h 15 lecture + 1 h quiz",
    sections: [
      { id: "s7", titre: "🗝 Gestion des secrets dans les pipelines (SSM, Secrets Manager)" },
      { id: "s8", titre: "🌐 Pipelines multi-compte & multi-région" },
      { id: "s9", titre: "🔒 Sécurité CI/CD : IAM roles, ECR policies, OIDC" }
    ],
    read: [
      "AWS docs : Secrets Manager — secret rotation, cross-account access",
      "AWS docs : Systems Manager Parameter Store — SecureString, hierarchies",
      "AWS docs : CodePipeline — cross-account pipelines, cross-region actions"
    ],
    links: [
      ["Secrets Manager rotation", _DOC + "secretsmanager/latest/userguide/rotating-secrets.html"],
      ["SSM Parameter Store", _DOC + "systems-manager/latest/userguide/systems-manager-parameter-store.html"],
      ["CodePipeline cross-account", _DOC + "codepipeline/latest/userguide/pipelines-create-cross-account.html"],
      ["ECR image scanning", _DOC + "AmazonECR/latest/userguide/image-scanning.html"]
    ],
    focus: [
      "SSM Parameter Store : Standard (4 KB) vs Advanced (8 KB), SecureString chiffré KMS",
      "Secrets Manager : rotation automatique via Lambda, TTL, force-rotation",
      "Pipeline cross-account : CMK KMS partagée + rôles croisés sur S3 artifact bucket",
      "OIDC provider : permet aux GitHub Actions / GitLab d'assumer un rôle IAM sans clés",
      "ECR : lifecycle policies (expirent les images non-taguées), image scanning (Enhanced = Inspector)",
      "Pièges : buildspec référence SSM → le rôle CodeBuild doit avoir ssm:GetParameter"
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // DOMAINE 2 : Configuration Management & IaC — 17 % — 3 jours (J4–J6)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    d: 4,
    theme: "CloudFormation avancé",
    dom: ["D2 · Configuration & IaC · 17 %"],
    time: "≈ 1 h 30 lecture + 1 h 30 quiz",
    sections: [
      { id: "s10", titre: "☁️ CloudFormation : stacks, change sets, drift, rollback" },
      { id: "s11", titre: "🧩 StackSets, Nested Stacks, modules" },
      { id: "s12", titre: "⚙️ Custom Resources, macros, transforms" }
    ],
    read: [
      "AWS docs : CloudFormation — stack policies, rollback triggers, drift detection",
      "AWS docs : CloudFormation StackSets — deployment across accounts and regions",
      "AWS docs : CloudFormation — custom resources, macros, AWS::Serverless transform"
    ],
    links: [
      ["CloudFormation User Guide", _DOC + "AWSCloudFormation/latest/UserGuide/Welcome.html"],
      ["CloudFormation StackSets", _DOC + "AWSCloudFormation/latest/UserGuide/what-is-cfnstacksets.html"],
      ["CloudFormation Custom Resources", _DOC + "AWSCloudFormation/latest/UserGuide/template-custom-resources.html"],
      ["CloudFormation Drift Detection", _DOC + "AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html"],
      ["CloudFormation Macros", _DOC + "AWSCloudFormation/latest/UserGuide/template-macros.html"]
    ],
    focus: [
      "DependsOn : forcer un ordre de création explicite",
      "CreationPolicy + WaitCondition : signaler succès depuis une instance EC2",
      "UpdatePolicy : AutoScalingRollingUpdate (MaxBatchSize, MinInstancesInService, PauseTime)",
      "Change sets : prévisualiser avant appliquer — IMPORT, ADD, MODIFY, REMOVE",
      "StackSets : SELF_MANAGED (rôles admin+exec) vs SERVICE_MANAGED (org AWS)",
      "Nested stacks : découper en modules réutilisables — attention aux circular deps",
      "Custom Resource : Lambda ou SNS — ResponseURL, RequestType (Create/Update/Delete)",
      "AWS::Serverless transform → SAM → CloudFormation natif"
    ]
  },
  {
    d: 5,
    theme: "CDK, SSM & AWS Config",
    dom: ["D2 · Configuration & IaC · 17 %"],
    time: "≈ 1 h 30 lecture + 1 h 30 quiz",
    sections: [
      { id: "s13", titre: "🏗 AWS CDK v2 : constructs L1/L2/L3, apps, stacks" },
      { id: "s14", titre: "🔧 Systems Manager : Run Command, State Manager, Patch Manager" },
      { id: "s15", titre: "📋 AWS Config : rules, remediation, conformance packs" }
    ],
    read: [
      "AWS docs : CDK v2 — constructs library, apps, environments",
      "AWS docs : Systems Manager — documents, Run Command, Patch Manager, Session Manager",
      "AWS docs : AWS Config — rules, remediation actions, conformance packs"
    ],
    links: [
      ["AWS CDK v2", "https://docs.aws.amazon.com/cdk/v2/guide/home.html"],
      ["CDK Constructs Library", "https://docs.aws.amazon.com/cdk/api/v2/"],
      ["SSM Documents", _DOC + "systems-manager/latest/userguide/sysman-ssm-docs.html"],
      ["SSM Patch Manager", _DOC + "systems-manager/latest/userguide/systems-manager-patch.html"],
      ["AWS Config Rules", _DOC + "config/latest/developerguide/evaluate-config.html"],
      ["AWS Config Remediation", _DOC + "config/latest/developerguide/remediation.html"]
    ],
    focus: [
      "CDK : L1 (Cfn*) = 1:1 CloudFormation, L2 = abstractions haut niveau, L3 = patterns",
      "CDK synth → CloudFormation template, CDK deploy → deploy la stack",
      "SSM Run Command : exécuter des commandes sur flotte sans SSH/RDP",
      "SSM Session Manager : shell sécurisé sans port ouvert, audit dans CloudTrail",
      "SSM State Manager : enforcer un état config — association = document + targets",
      "SSM Patch Manager : patch baselines, maintenance windows, patch groups",
      "AWS Config : évaluation continue des ressources (COMPLIANT/NON_COMPLIANT)",
      "Config remediation : SSM Automation document déclenché automatiquement",
      "Conformance packs : collection de rules + remediation packagée (ex: CIS Benchmark)"
    ]
  },
  {
    d: 6,
    theme: "Multi-compte, Control Tower & Service Catalog",
    dom: ["D2 · Configuration & IaC · 17 %"],
    time: "≈ 1 h 15 lecture + 1 h quiz",
    sections: [
      { id: "s16", titre: "🏢 AWS Organizations & Control Tower" },
      { id: "s17", titre: "📦 Service Catalog, OpsWorks & AppConfig" }
    ],
    read: [
      "AWS docs : AWS Organizations — SCPs, OUs, consolidated billing",
      "AWS docs : Control Tower — landing zones, guardrails, Account Factory",
      "AWS docs : Service Catalog — portfolios, products, constraints",
      "AWS docs : AppConfig — deployment strategies, validators, rollback"
    ],
    links: [
      ["AWS Organizations SCPs", _DOC + "organizations/latest/userguide/orgs_manage_policies_scps.html"],
      ["Control Tower", _DOC + "controltower/latest/userguide/what-is-control-tower.html"],
      ["Service Catalog", _DOC + "servicecatalog/latest/adminguide/introduction.html"],
      ["AWS AppConfig", _DOC + "appconfig/latest/userguide/what-is-appconfig.html"],
      ["AWS OpsWorks", _DOC + "opsworks/latest/userguide/welcome.html"]
    ],
    focus: [
      "SCPs : ne donnent PAS de permissions — bloquent seulement (effet Deny implicite)",
      "SCPs s'appliquent à TOUS les comptes de l'OU SAUF le compte root de l'org",
      "Control Tower : landing zone + Account Factory + guardrails (préventifs = SCP, détectifs = Config)",
      "Permission boundary : limite max d'un rôle/user IAM — ne délègue pas, encadre",
      "Service Catalog : admin publie des produits CloudFormation, utilisateurs lancent",
      "AppConfig : feature flags + configuration data avec validation et rollback automatique",
      "OpsWorks Stacks (en fin de vie) vs OpsWorks for Chef/Puppet : savoir les distinguer"
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // DOMAINE 3 : Resilient Cloud Solutions — 15 % — 2 jours (J7–J8)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    d: 7,
    theme: "Haute disponibilité — Auto Scaling, ELB, multi-AZ",
    dom: ["D3 · Resilient Cloud Solutions · 15 %"],
    time: "≈ 1 h 30 lecture + 1 h 30 quiz",
    sections: [
      { id: "s18", titre: "⚖️ Elastic Load Balancing — ALB, NLB, GWLB" },
      { id: "s19", titre: "📈 EC2 Auto Scaling avancé — policies, lifecycle hooks" },
      { id: "s20", titre: "🌍 Architectures multi-AZ et multi-région" }
    ],
    read: [
      "AWS docs : Application Load Balancer — listener rules, target groups, weighted routing",
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
      "ALB vs NLB : ALB = Layer 7 (HTTP/HTTPS/gRPC), NLB = Layer 4 (TCP/UDP/TLS)",
      "ALB weighted target groups : A/B testing, blue/green progressif",
      "Auto Scaling lifecycle hooks : pending:wait (init) et terminating:wait (drain)",
      "Scaling policies : simple, step, target tracking — suspendre des processus",
      "Warm pools : instances pré-initialisées → scale-out plus rapide",
      "Route 53 : failover actif-passif, latency-based, geolocation, geoproximity",
      "RDS Multi-AZ : failover automatique ~60s, synchronous replication standby",
      "DynamoDB Global Tables : active-active multi-région, résolution de conflits last-write-wins"
    ]
  },
  {
    d: 8,
    theme: "Disaster Recovery — RTO/RPO, backup, résilience",
    dom: ["D3 · Resilient Cloud Solutions · 15 %"],
    time: "≈ 1 h 15 lecture + 1 h quiz",
    sections: [
      { id: "s21", titre: "🔁 Stratégies DR : pilot light, warm standby, multi-site active/active" },
      { id: "s22", titre: "💾 AWS Backup, S3 Replication, Elastic Disaster Recovery" },
      { id: "s23", titre: "🧩 Architectures scalables : serverless, conteneurs, caching" }
    ],
    read: [
      "AWS docs : AWS Backup — backup plans, vault, cross-region/cross-account copy",
      "AWS docs : Elastic Disaster Recovery (DRS) — replication, failover",
      "AWS docs : ElastiCache — Redis cluster mode, replication groups"
    ],
    links: [
      ["AWS Backup", _DOC + "aws-backup/latest/devguide/whatisbackup.html"],
      ["Elastic Disaster Recovery", _DOC + "drs/latest/userguide/what-is-drs.html"],
      ["ElastiCache Redis", _DOC + "AmazonElastiCache/latest/red-ug/WhatIs.html"],
      ["S3 Cross-Region Replication", _DOC + "AmazonS3/latest/userguide/replication.html"],
      ["CloudFront failover", _DOC + "AmazonCloudFront/latest/DeveloperGuide/high_availability_origin_failover.html"]
    ],
    focus: [
      "DR spectrum : backup/restore → pilot light → warm standby → multi-site active/active",
      "RTO : temps pour restaurer le service | RPO : données perdues acceptables",
      "Pilot light : noyau minimal répliqué (DB), scale rapide lors d'un incident",
      "Warm standby : version réduite en prod secondaire, scale up en cas de failover",
      "AWS Backup : vaults (coffres), backup plans (schedules + retention), cross-account copy",
      "DRS : réplication continue vers AWS → failover + fallback possibles",
      "ElastiCache Redis cluster mode : sharding + réplication, Multi-AZ avec auto-failover",
      "S3 Replication : CRR (cross-region) vs SRR (same-region), avec ou sans delete marker"
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // DOMAINE 4 : Monitoring & Logging — 15 % — 2 jours (J9–J10)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    d: 9,
    theme: "CloudWatch, X-Ray & observabilité",
    dom: ["D4 · Monitoring & Logging · 15 %"],
    time: "≈ 1 h 30 lecture + 1 h 30 quiz",
    sections: [
      { id: "s24", titre: "📊 CloudWatch : métriques, dimensions, alarmes, dashboards" },
      { id: "s25", titre: "📜 CloudWatch Logs : groupes, streams, metric filters, Logs Insights" },
      { id: "s26", titre: "🔎 X-Ray : traces, segments, annotations, service maps" }
    ],
    read: [
      "AWS docs : CloudWatch — metrics, namespaces, dimensions, metric math",
      "AWS docs : CloudWatch Alarms — composite alarms, anomaly detection",
      "AWS docs : CloudWatch Logs Insights — query syntax",
      "AWS docs : AWS X-Ray — segments, subsegments, annotations, metadata, groups"
    ],
    links: [
      ["CloudWatch Metrics", _DOC + "AmazonCloudWatch/latest/monitoring/working_with_metrics.html"],
      ["CloudWatch Alarms", _DOC + "AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html"],
      ["CloudWatch Anomaly Detection", _DOC + "AmazonCloudWatch/latest/monitoring/CloudWatch_Anomaly_Detection.html"],
      ["CloudWatch Logs Insights", _DOC + "AmazonCloudWatch/latest/logs/AnalyzingLogData.html"],
      ["X-Ray concepts", _DOC + "xray/latest/devguide/xray-concepts.html"],
      ["X-Ray sampling rules", _DOC + "xray/latest/devguide/xray-console-sampling.html"]
    ],
    focus: [
      "CloudWatch standard resolution (1 min) vs high resolution (1 s) — coût élevé",
      "Métriques custom : namespace propre + dimensions (service, instance, env)",
      "Composite alarms : combinent ALARM states avec AND/OR — réduire alert fatigue",
      "Anomaly detection : bande EXPECTED ± écart-type, utile pour saisonnalité",
      "Logs Insights : requêtes sur log groups multi-sources, queries prédéfinies",
      "Metric filters : extraire métriques de logs → alarme sur erreur 5xx",
      "X-Ray : trace = ensemble de segments à travers microservices",
      "X-Ray annotations : indexées → filtrables | metadata : non indexées",
      "X-Ray sampling : par défaut 1 req/s + 5 % — custom sampling rules"
    ]
  },
  {
    d: 10,
    theme: "EventBridge, CloudTrail & monitoring avancé",
    dom: ["D4 · Monitoring & Logging · 15 %"],
    time: "≈ 1 h 15 lecture + 1 h quiz",
    sections: [
      { id: "s27", titre: "🔔 EventBridge : rules, event buses, Pipes, Scheduler" },
      { id: "s28", titre: "🕵️ CloudTrail, AWS Config & audit continu" },
      { id: "s29", titre: "📡 Kinesis Data Streams, Firehose & OpenSearch" }
    ],
    read: [
      "AWS docs : EventBridge — event buses, rules, targets, Pipes",
      "AWS docs : CloudTrail — event types, log file integrity, Insights",
      "AWS docs : Kinesis Data Streams vs Firehose — use cases, delivery streams"
    ],
    links: [
      ["EventBridge rules", _DOC + "eventbridge/latest/userguide/eb-rules.html"],
      ["EventBridge Pipes", _DOC + "eventbridge/latest/userguide/eb-pipes.html"],
      ["CloudTrail Insights", _DOC + "awscloudtrail/latest/userguide/logging-insights-events-with-cloudtrail.html"],
      ["Kinesis Data Streams", _DOC + "streams/latest/dev/introduction.html"],
      ["Kinesis Firehose", _DOC + "firehose/latest/dev/what-is-this-service.html"],
      ["OpenSearch Service", _DOC + "opensearch-service/latest/developerguide/what-is.html"]
    ],
    focus: [
      "EventBridge event bus : default (services AWS) vs custom bus vs partner bus",
      "EventBridge rules : event pattern matching (JSON) vs schedule (cron/rate)",
      "EventBridge Pipes : source (SQS/Kinesis/DynamoDB) → filter → enrich → target",
      "CloudTrail : Management events (toujours) vs Data events (S3 PutObject, Lambda invoke) — coût",
      "CloudTrail Insights : détecte activités inhabituelles (nb appels API anormal)",
      "CloudTrail log integrity : digest files SHA-256 signés → vérifier non-altération",
      "Kinesis Streams : temps réel, consumers lisent, retention 1–365 jours",
      "Kinesis Firehose : near-real-time, livraison vers S3/Redshift/OpenSearch, transformations Lambda",
      "CloudWatch → Kinesis Firehose subscription filter → S3 archivage long terme"
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // DOMAINE 5 : Incident & Event Response — 14 % — 2 jours (J11–J12)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    d: 11,
    theme: "Réponse aux incidents & automatisation des reméditations",
    dom: ["D5 · Incident & Event Response · 14 %"],
    time: "≈ 1 h 30 lecture + 1 h 30 quiz",
    sections: [
      { id: "s30", titre: "🚨 AWS Health, OpsCenter & Systems Manager Incident Manager" },
      { id: "s31", titre: "⚡ Automatisation EventBridge → Lambda → SSM Automation" },
      { id: "s32", titre: "🔍 Analyse d'échecs : CodePipeline, CodeBuild, CodeDeploy" }
    ],
    read: [
      "AWS docs : AWS Health — Health Dashboard, EventBridge integration",
      "AWS docs : Systems Manager OpsCenter — OpsItems, runbooks",
      "AWS docs : Systems Manager Incident Manager — response plans, runbooks",
      "AWS docs : SSM Automation — runbooks, approvals, rate controls"
    ],
    links: [
      ["AWS Health API", _DOC + "health/latest/ug/what-is-aws-health.html"],
      ["SSM OpsCenter", _DOC + "systems-manager/latest/userguide/OpsCenter.html"],
      ["SSM Incident Manager", _DOC + "incident-manager/latest/userguide/what-is-incident-manager.html"],
      ["SSM Automation", _DOC + "systems-manager/latest/userguide/systems-manager-automation.html"],
      ["AWS FIS", _DOC + "fis/latest/userguide/what-is.html"]
    ],
    focus: [
      "AWS Health : événements de service AWS + événements de compte → EventBridge rule → SNS/Lambda",
      "OpsCenter : OpsItems créés auto depuis CloudWatch Alarms, Config, Security Hub",
      "Incident Manager : response plan → escalation plan → engagement (PagerDuty, Slack)",
      "SSM Automation : runbook AWSSupport-* et custom → corriger automatiquement",
      "Chaos engineering : AWS Fault Injection Simulator (FIS) — experiments, stop conditions",
      "Echec CodeDeploy : analyser deployment.log, agent logs sur instance → BeforeInstall timeout",
      "Echec CodePipeline : action en error → voir CloudWatch Logs de l'action Build/Deploy",
      "Auto recovery EC2 : CloudWatch alarm → recover action (réhabilite l'instance même AZ)"
    ]
  },
  {
    d: 12,
    theme: "Event-driven architectures — SQS, SNS, Step Functions",
    dom: ["D5 · Incident & Event Response · 14 %"],
    time: "≈ 1 h 15 lecture + 1 h quiz",
    sections: [
      { id: "s33", titre: "📨 SQS : queues standard vs FIFO, DLQ, visibilité, polling" },
      { id: "s34", titre: "📢 SNS : topics, subscriptions, fan-out, message filtering" },
      { id: "s35", titre: "🔄 Step Functions : workflows standard vs express, states" }
    ],
    read: [
      "AWS docs : SQS — message lifecycle, visibility timeout, DLQ, long polling",
      "AWS docs : SNS — message filtering, FIFO topics, fanout patterns",
      "AWS docs : Step Functions — state types, error handling, callbacks, Express vs Standard"
    ],
    links: [
      ["SQS concepts", _DOC + "AWSSimpleQueueService/latest/SQSDeveloperGuide/welcome.html"],
      ["SQS Dead-Letter Queues", _DOC + "AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html"],
      ["SNS message filtering", _DOC + "sns/latest/dg/sns-message-filtering.html"],
      ["Step Functions Standard vs Express", _DOC + "step-functions/latest/dg/concepts-standard-vs-express.html"],
      ["Step Functions error handling", _DOC + "step-functions/latest/dg/concepts-error-handling.html"]
    ],
    focus: [
      "SQS standard : ordre best-effort, au moins 1x | SQS FIFO : ordre garanti, exactement 1x",
      "Visibility timeout : message invisible pendant traitement — ChangeMessageVisibility si besoin",
      "DLQ : receiveCount > maxReceiveCount → déplacé, alerter via CloudWatch Metric",
      "SQS long polling (20s) vs short polling : réduire coût et faux positifs",
      "SNS → SQS fan-out : découpler producteur/consommateurs, durabilité",
      "SNS filter policies : livrer seulement si attributs correspondent",
      "Step Functions Standard : longue durée (1 an), async | Express : hautes perf (5 min)",
      "Step Functions error handling : Catch (Try/Catch) + Retry (exponential backoff)",
      "Callback pattern : task token → Lambda → SendTaskSuccess/SendTaskFailure"
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // DOMAINE 6 : Security & Compliance — 17 % — 2 jours (J13–J14)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    d: 13,
    theme: "IAM avancé, KMS & protection des données",
    dom: ["D6 · Security & Compliance · 17 %"],
    time: "≈ 1 h 30 lecture + 1 h 30 quiz",
    sections: [
      { id: "s36", titre: "🔒 IAM avancé : rôles, SCPs, boundaries, Identity Center" },
      { id: "s37", titre: "🗝 KMS, CloudHSM, ACM : gestion des clés & certificats" },
      { id: "s38", titre: "🔐 Secrets Manager, Macie & data protection" }
    ],
    read: [
      "AWS docs : IAM — permission boundaries, identity federation, IAM Identity Center",
      "AWS docs : KMS — CMK types, key policies, grants, envelope encryption",
      "AWS docs : CloudHSM vs KMS — when to use each",
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
      "KMS CMK : AWS managed, customer managed (CMK), customer provided (BYOK)",
      "Envelope encryption : CMK chiffre la data key, data key chiffre les données",
      "KMS key policy : doit permettre explicitement le compte root (sinon clé inaccessible)",
      "CloudHSM : FIPS 140-2 Level 3, contrôle total des clés — pour compliance stricte",
      "ACM Private CA : autorité interne pour services internes, intégration ELB/API Gateway",
      "Macie : ML pour découvrir/classifier PII dans S3, alertes sur expositions"
    ]
  },
  {
    d: 14,
    theme: "Sécurité réseau, audit & GuardDuty",
    dom: ["D6 · Security & Compliance · 17 %"],
    time: "≈ 1 h 30 lecture + 1 h 30 quiz",
    sections: [
      { id: "s39", titre: "🛡 GuardDuty, Security Hub, Detective & Inspector" },
      { id: "s40", titre: "🌐 WAF, Shield, Network Firewall & sécurité réseau" },
      { id: "s41", titre: "🏛 Audit continu : Config, CloudTrail, VPC Flow Logs" }
    ],
    read: [
      "AWS docs : GuardDuty — threat intelligence, findings types, suppression rules",
      "AWS docs : Security Hub — standards, findings aggregation, automated response",
      "AWS docs : AWS WAF — Web ACLs, rule groups, managed rules",
      "AWS docs : VPC Flow Logs — log format, Athena analysis"
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
      "Inspector : scan de vulnérabilités EC2 (agent) + ECR images + Lambda (sans agent)",
      "WAF : WebACL → rule groups → rules (IP set, geo, rate-based, SQL injection, XSS)",
      "Shield Standard (gratuit) vs Shield Advanced (DRT + cost protection + application layer)",
      "Network Firewall : inspection stateful + stateless dans le VPC (pare-feu au niveau subnet)",
      "VPC Flow Logs : ACCEPT/REJECT par flux, analyser dans Athena, détecter scans",
      "Config : enregistrer chaque changement de ressource + évaluer rules → non-compliant → remediation"
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // JOUR 15 : Révision finale, pièges & examen blanc
  // ═══════════════════════════════════════════════════════════════════════════
  {
    d: 15,
    theme: "Révision finale, pièges Pro & examen blanc",
    dom: ["D1", "D2", "D3", "D4", "D5", "D6"],
    time: "180 min examen blanc chrono + 1 h révision ciblée",
    sections: [
      { id: "s42", titre: "⚠️ Pièges classiques du niveau Pro" },
      { id: "s43", titre: "🔑 Services à ne pas confondre — les 10 paires piégeuses" },
      { id: "s44", titre: "📊 Révision par domaine selon vos scores J1–J14" }
    ],
    read: [
      "Révision : tous les services D1 CI/CD — CodePipeline, Build, Deploy, Artifact",
      "Révision : CloudFormation StackSets vs Nested Stacks vs CDK",
      "Révision : GuardDuty vs Inspector vs Detective vs Security Hub — rôles distincts"
    ],
    links: [
      ["Exam guide DOP-C02 PDF", "https://d1.awsstatic.com/training-and-certification/docs-devops-pro/AWS-Certified-DevOps-Engineer-Professional_Exam-Guide.pdf"],
      ["AWS docs DOP-C02 officiel", "https://docs.aws.amazon.com/aws-certification/latest/devops-engineer-professional-02/devops-engineer-professional-02.html"],
      ["Tutorials Dojo — examens blancs", "https://portal.tutorialsdojo.com/courses/aws-certified-devops-engineer-professional-practice-exams/"],
      ["Stephane Maarek — cours Udemy", "https://www.udemy.com/course/aws-certified-devops-engineer-professional-hands-on/"]
    ],
    focus: [
      "Piège 1 : SCP ne donnent PAS de permissions — uniquement des guardrails deny",
      "Piège 2 : CloudFormation Custom Resource → toujours renvoyer un physicalResourceId",
      "Piège 3 : CodeDeploy in-place ECS/Lambda n'existe PAS — toujours blue/green",
      "Piège 4 : SSM Parameter Store SecureString ≠ Secrets Manager — pas de rotation auto",
      "Piège 5 : EventBridge Rules vs Pipes — Pipes = connexion point-à-point avec filtering",
      "Piège 6 : X-Ray annotations (indexées, filtrables) vs metadata (non indexées)",
      "Piège 7 : KMS CMK key policy DOIT autoriser le compte root (sinon clé inutilisable)",
      "Piège 8 : GuardDuty trouve les menaces, Inspector trouve les vulnérabilités, Detective investigue",
      "Piège 9 : CloudFormation UpdatePolicy s'applique aux ASG, pas DependsOn",
      "Piège 10 : Kinesis Firehose = near-real-time (buffer 60s min), Streams = réel temps réel"
    ],
    extra: "Rejoue tes erreurs des jours 1–14 dans l'onglet « Mes erreurs » avant l'examen."
  }
];

// ── Questions ────────────────────────────────────────────────────────────────
// Format : { t: "thème", q: "question", o: ["A","B","C","D"], a: 0, e: "explication" }
window.QDATA = {};
