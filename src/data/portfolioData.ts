export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'Defense & EDR' | 'AI & Automation' | 'CTF & Cloud' | 'Offensive Tools';
  featured: boolean;
  metrics: string[];
  description: string;
  architectureDetails: string[];
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  status: 'Production' | 'Active Development' | 'Open Source';
  iconName: string;
}

export interface Service {
  id: string;
  title: string;
  badge: string;
  description: string;
  deliverables: string[];
  idealFor: string;
  iconName: string;
}

export interface SkillGroup {
  category: string;
  icon: string;
  skills: { name: string; level: number; tags: string[] }[];
}

export const PERSONAL_INFO = {
  name: "Prabakaran (Prab)",
  handle: "NOOB-CODER127",
  title: "Cybersecurity Engineer & Security Tooling Specialist",
  tagline: "Building high-performance Extended Detection & Response (EDR) platforms, autonomous AI security agents, and offensive security tooling.",
  email: "007praba20@gmail.com",
  github: "https://github.com/NOOB-CODER127",
  location: "India • Available Worldwide (Remote / Relocation)",
  availability: "Available for Freelance Consulting & Full-time Engineering Roles",
  stats: [
    { label: "Security Tools Integrated", value: "150+", highlight: "HexStrike AI Platform" },
    { label: "Autonomous Security Agents", value: "12+", highlight: "MCP Framework" },
    { label: "Enterprise & CTF Platforms Built", value: "4+", highlight: "SpyderXDR & NullBox" },
    { label: "Threat Telemetry Processing", value: "<100ms", highlight: "Kafka / Sysmon" },
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "spyderxdr",
    title: "SpyderXDR Platform",
    tagline: "Enterprise Extended Detection & Response (XDR) with Real-Time Telemetry & ML Detections",
    category: "Defense & EDR",
    featured: true,
    status: "Production",
    iconName: "ShieldAlert",
    metrics: ["Sub-second Alert Ingestion", "Sysmon & Kafka Pipeline", "MITRE ATT&CK Mapped"],
    description: "An enterprise-grade open-source XDR platform engineered for real-time endpoint telemetry collection, behavioral threat detection, and automated incident triage. Features deep process, network, and registry monitoring with automated SOAR escalation.",
    architectureDetails: [
      "Distributed agent telemetry collection utilizing Windows Sysmon, Linux auditd, and custom lightweight agent daemons.",
      "High-throughput event streaming via Kafka & Fluentd, processing telemetry into an anomaly-detection ML engine.",
      "Automated MITRE ATT&CK technique classification with real-time alert triage and Jira/ServiceNow dispatch.",
      "File Integrity Monitoring (FIM) and automated endpoint quarantine containment capabilities."
    ],
    techStack: ["FastAPI", "React", "Docker", "Sysmon", "Kafka", "Fluentd", "Python", "SQLite / Postgres"],
    githubUrl: "https://github.com/NOOB-CODER127",
  },
  {
    id: "hexstrike-ai",
    title: "HexStrike AI MCP Agents",
    tagline: "Autonomous AI-Powered Penetration Testing Platform with 150+ Tool Integrations",
    category: "AI & Automation",
    featured: true,
    status: "Production",
    iconName: "Bot",
    metrics: ["150+ Security Tools", "12+ AI Agents", "Model Context Protocol (MCP)"],
    description: "Advanced cybersecurity orchestration framework bridging cutting-edge LLMs with 150+ battle-tested offensive security tools via the Model Context Protocol (MCP). Allows autonomous multi-agent reconnaissance, vulnerability assessment, and compliance reporting.",
    architectureDetails: [
      "Modular MCP server implementation exposing tools like Nmap, Metasploit, Burp Suite, Sqlmap, and Ffuf to LLMs.",
      "Autonomous 12+ agent swarm architecture: Reconnaissance Agent, Vulnerability Correlator, Exploit Validator, and Executive Reporter.",
      "Strict sandboxing and human-in-the-loop guardrails to ensure safe and authorized security scanning.",
      "Dynamic prompt routing and structured JSON output normalization for deterministic assessment tracking."
    ],
    techStack: ["Python 3.11", "Model Context Protocol (MCP)", "LLM Orchestration", "AsyncIO", "Docker", "RESTful APIs"],
    githubUrl: "https://github.com/NOOB-CODER127",
  },
  {
    id: "nullbox-ctf",
    title: "NullBox CTF Infrastructure",
    tagline: "Dynamic Container-Based CTF Platform with On-Demand Isolated Challenge Sandboxes",
    category: "CTF & Cloud",
    featured: true,
    status: "Production",
    iconName: "Server",
    metrics: ["On-Demand Docker Pods", "Zero Cross-Pollution", "Dynamic Scoring Engine"],
    description: "Scalable capture-the-flag platform designed for NullChapter VIT-AP to host competitive security competitions. Dynamically spins up private, ephemeral Docker containers for every team to prevent flag snooping and shared state collisions.",
    architectureDetails: [
      "Microservice architecture orchestrating Docker daemon on-demand challenge provisioning per participant team.",
      "Dynamic scoring algorithm adjusting flag values based on solve count, timestamp decay, and difficulty.",
      "Role-based secure authentication system tailored for institutional and enterprise competition environments.",
      "Real-time WebSocket scoreboard with instant verification feedback and anti-bruteforce rate limiting."
    ],
    techStack: ["Docker SDK", "Python", "FastAPI", "WebSockets", "Redis", "Tailwind CSS"],
    githubUrl: "https://github.com/NOOB-CODER127",
  },
  {
    id: "koth-cyber-range",
    title: "KOTH Cyber Arena",
    tagline: "Real-Time King-of-the-Hill Attack & Defense Competition Environment",
    category: "Offensive Tools",
    featured: false,
    status: "Active Development",
    iconName: "Flame",
    metrics: ["Real-time Flag King Tracking", "Automated Service Health Checks", "Anti-Tamper Monitor"],
    description: "An attack-defense cyber range where competitors battle for dominance over shared vulnerable hosts. Incorporates live service validation, scoring ticks, and telemetry to verify service uptime alongside host control.",
    architectureDetails: [
      "Custom kernel telemetry and cron monitoring to verify king status without excessive CPU overhead.",
      "Automated service polling verifying HTTP, SSH, and DB availability to penalize scorched-earth defacing.",
      "Live socket-driven dashboard with real-time territory takeover animations and logs."
    ],
    techStack: ["Python", "Linux Internals", "Socket.IO", "Bash Scripting", "Docker"],
    githubUrl: "https://github.com/NOOB-CODER127",
  },
  {
    id: "vaultseeker",
    title: "VaultSeeker Recon Engine",
    tagline: "High-Performance Secret Scanner & Artifact Discovery Engine",
    category: "Offensive Tools",
    featured: false,
    status: "Open Source",
    iconName: "Key",
    metrics: ["Multithreaded Scanning", "Entropy Analysis", "CI/CD & Memory Dump Support"],
    description: "Specialized reconnaissance and vulnerability discovery utility engineered to extract leaked secrets, API keys, credentials, and token patterns from source trees, memory dumps, and misconfigured endpoints.",
    architectureDetails: [
      "Compiled regex rulesets coupled with Shannon entropy calculations to drastically reduce false positives.",
      "Configurable output formats: SARIF, JSON, and clean CLI reporting ready for penetration testing reports.",
      "Supports scanning large local archives, git commit histories, and remote endpoint response bodies."
    ],
    techStack: ["Python", "AST Parsing", "Entropy Algorithms", "Git Hooks"],
    githubUrl: "https://github.com/NOOB-CODER127",
  }
];

export const SERVICES: Service[] = [
  {
    id: "pentest",
    title: "Penetration Testing & Security Audits",
    badge: "Most Requested",
    description: "Thorough vulnerability assessments and penetration testing for web applications, APIs, network infrastructure, and cloud environments with actionable remediation roadmaps.",
    deliverables: [
      "Executive summary & detailed technical report with CVSS ratings",
      "Step-by-step reproducible proof-of-concept (PoC) exploit scripts",
      "Direct code & architecture remediation recommendations",
      "Free re-test verification following patch deployment"
    ],
    idealFor: "Startups preparing for SOC2/compliance, web platforms launching major releases, and SaaS businesses.",
    iconName: "Crosshair"
  },
  {
    id: "ai-tooling",
    title: "Custom AI & Security Automation Tooling",
    badge: "High ROI",
    description: "Development of custom AI agents, Model Context Protocol (MCP) servers, and automated security pipelines to streamline threat hunting, log triage, and offensive workflows.",
    deliverables: [
      "Tailored MCP servers connecting your LLM of choice to security tools",
      "Automated vulnerability scanning & enrichment pipelines",
      "Custom Python/Go security automation scripts and CLI tooling",
      "Integration documentation and Docker deployment containers"
    ],
    idealFor: "Security teams looking to automate repetitive triage, MSSPs, and tech companies needing custom security tooling.",
    iconName: "Cpu"
  },
  {
    id: "edr-detection",
    title: "EDR, SIEM & Threat Detection Engineering",
    badge: "Enterprise",
    description: "Designing and tuning detection rules, log telemetry pipelines (Sysmon, Kafka, Fluentd), and MITRE ATT&CK alignment to spot attacker behaviors before data exfiltration occurs.",
    deliverables: [
      "Custom Sysmon / auditd configuration files tuned to your threat model",
      "Detection-as-Code rulesets mapped to MITRE ATT&CK techniques",
      "Log pipeline configuration with Kafka, Fluentd, and SIEM ingestion",
      "Automated containment & alert dispatch runbooks"
    ],
    idealFor: "Organizations building or hardening internal blue team capabilities and monitoring posture.",
    iconName: "ShieldCheck"
  },
  {
    id: "ctf-infrastructure",
    title: "CTF & Security Training Infrastructure",
    badge: "Turnkey",
    description: "Design and deployment of bespoke security challenges, attack-defense ranges, and container-isolated CTF platforms for universities, corporate hackathons, and talent assessment.",
    deliverables: [
      "Turnkey containerized CTF platform with on-demand Docker instances",
      "Custom challenge creation across Web, Pwn, Reverse Engineering & Forensics",
      "Automated dynamic scoring engine and real-time scoreboard setup",
      "Full event administration guide and challenge write-ups"
    ],
    idealFor: "Universities, tech communities, and corporate security teams conducting hiring or red team training.",
    iconName: "Trophy"
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Defensive Security & Blue Team",
    icon: "Shield",
    skills: [
      { name: "EDR & Endpoint Telemetry (Sysmon / Auditd)", level: 95, tags: ["SpyderXDR", "Kernel"] },
      { name: "Threat Hunting & MITRE ATT&CK Mapping", level: 92, tags: ["Detection Rules", "Triage"] },
      { name: "Log Pipelines (Kafka, Fluentd, ELK)", level: 88, tags: ["Streaming", "High Throughput"] },
      { name: "Incident Response & Containment SOAR", level: 90, tags: ["FIM", "Automation"] },
      { name: "Malware Analysis & Triage (Mimikatz, ClamAV)", level: 85, tags: ["Reverse", "Memory"] }
    ]
  },
  {
    category: "Offensive Security & Pentesting",
    icon: "Crosshair",
    skills: [
      { name: "Web Application & API Penetration Testing", level: 94, tags: ["OWASP Top 10", "Burp Suite"] },
      { name: "Network Reconnaissance & Vulnerability Assessment", level: 92, tags: ["Nmap", "Metasploit"] },
      { name: "Security Tool Development & Scripting", level: 96, tags: ["Python", "Bash", "CLI"] },
      { name: "CTF Challenge Creation (Web, Pwn, Crypto)", level: 90, tags: ["NullBox", "Docker"] },
      { name: "Exploit Crafting & Proof-of-Concept Dev", level: 87, tags: ["Fuzzing", "Payloads"] }
    ]
  },
  {
    category: "AI, Software & Cloud Systems",
    icon: "Code2",
    skills: [
      { name: "Model Context Protocol (MCP) & AI Agents", level: 95, tags: ["HexStrike AI", "LLM Swarms"] },
      { name: "Python / FastAPI / AsyncIO Architecture", level: 96, tags: ["Backend", "Microservices"] },
      { name: "Docker Containerization & Sandbox Isolation", level: 94, tags: ["On-Demand", "Security"] },
      { name: "Modern Web Interfaces (React, TypeScript, Tailwind)", level: 90, tags: ["Dashboards", "UX"] },
      { name: "Linux System Administration & Internals", level: 95, tags: ["Kali", "Ubuntu", "Debian"] }
    ]
  }
];

export const EXPERIENCE_MILESTONES = [
  {
    period: "2024 - Present",
    role: "Lead Security Platform Architect & Founder",
    entity: "HexStrike AI & SpyderXDR Initiatives",
    description: "Designed and engineered enterprise-grade detection systems and AI penetration testing suites. Unified 150+ open-source security tools into autonomous LLM agents via MCP. Built complete SaaS EDR solution with sub-second event ingestion.",
    achievements: [
      "Engineered real-time telemetry pipeline capable of processing Sysmon events with sub-second latency.",
      "Released HexStrike AI MCP framework enabling autonomous offensive security orchestration.",
      "Integrated MITRE ATT&CK automated tagging and ticket automation for incident containment."
    ]
  },
  {
    period: "2023 - Present",
    role: "Technical Core Member & CTF Lead",
    entity: "NullChapter (VIT-AP)",
    description: "Spearheaded technical infrastructure, designed on-demand containerized CTF challenges, and organized cybersecurity workshops for thousands of participants.",
    achievements: [
      "Architected NullBox CTF platform featuring on-demand private Docker container provisioning per team.",
      "Authored 25+ complex challenges spanning Web exploitation, Reverse Engineering, and Cryptography.",
      "Mentored junior security enthusiasts in ethical hacking, network analysis, and secure coding."
    ]
  }
];
