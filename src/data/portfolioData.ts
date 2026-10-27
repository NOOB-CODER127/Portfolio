export interface Project {
  title: string;
  description: string;
  details: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  year: string;
  status?: string;
}

export interface Service {
  title: string;
  description: string;
  deliverables: string[];
}

export const BIO = {
  name: "Prabakaran",
  handle: "NOOB-CODER127",
  role: "Security Engineer & Systems Developer",
  status: "Available for freelance security audits & full-time roles",
  location: "India • Remote",
  email: "007praba20@gmail.com",
  github: "https://github.com/NOOB-CODER127",
  summary: [
    "I focus on endpoint detection & response (EDR), security automation, and offensive tooling.",
    "Currently building SpyderXDR, an open-source detection platform that ingests real-time endpoint telemetry via Sysmon & Kafka, and HexStrike AI, an MCP framework that connects 150+ security tools to autonomous LLM workflows.",
    "I also lead technical infrastructure at NullChapter (VIT-AP), where I built NullBox to spin up on-demand, isolated Docker containers for CTF challenges."
  ]
};

export const PROJECTS: Project[] = [
  {
    title: "SpyderXDR",
    year: "2024",
    status: "Active",
    description: "Open-source Extended Detection & Response platform for real-time endpoint telemetry and incident response.",
    details: "Built a high-throughput telemetry pipeline processing Windows Sysmon and Linux audit logs through Kafka and Fluentd. Correlates process, network, and registry events against MITRE ATT&CK techniques with sub-second alert latency and automated containment actions.",
    tags: ["FastAPI", "React", "Docker", "Sysmon", "Kafka", "Fluentd", "Python"],
    githubUrl: "https://github.com/NOOB-CODER127",
  },
  {
    title: "HexStrike AI",
    year: "2024",
    status: "Active",
    description: "AI-assisted penetration testing framework using the Model Context Protocol (MCP).",
    details: "Exposes 150+ standard security tools (Nmap, Burp Suite, Metasploit, Sqlmap, Ffuf) as structured MCP tools for autonomous AI agent pipelines. Designed with strict sandboxing and human-in-the-loop guardrails for verifiable recon and vulnerability assessment.",
    tags: ["Python", "Model Context Protocol", "LLM Agents", "AsyncIO", "Docker"],
    githubUrl: "https://github.com/NOOB-CODER127",
  },
  {
    title: "NullBox CTF Platform",
    year: "2023 - 2024",
    status: "Production",
    description: "Container-based CTF infrastructure with on-demand isolated challenge environments.",
    details: "Developed for NullChapter VIT-AP to host dynamic security competitions. Spawns ephemeral, private Docker containers per team on demand to eliminate challenge state collisions and flag leaks. Includes real-time dynamic scoring and WebSocket scoreboards.",
    tags: ["Docker SDK", "Python", "FastAPI", "Redis", "WebSockets"],
    githubUrl: "https://github.com/NOOB-CODER127",
  },
  {
    title: "VaultSeeker",
    year: "2024",
    status: "Open Source",
    description: "Fast secret and credential scanner for source trees, git history, and memory dumps.",
    details: "Multi-threaded scanner that combines compiled regex patterns with Shannon entropy analysis to detect leaked tokens, private keys, and environment variables while minimizing false positives.",
    tags: ["Python", "AST Parsing", "Entropy Analysis"],
    githubUrl: "https://github.com/NOOB-CODER127",
  }
];

export const SERVICES: Service[] = [
  {
    title: "Penetration Testing & Security Audits",
    description: "Manual, scoped assessments of web apps, REST APIs, and cloud infrastructure to identify real-world attack vectors.",
    deliverables: [
      "Executive summary & technical vulnerability report",
      "Reproducible Proof-of-Concept (PoC) exploit scripts",
      "Concrete code and architecture remediation advice",
      "Free re-test after patches are deployed"
    ]
  },
  {
    title: "Custom Security Tooling & AI MCP Agents",
    description: "Tailored automation, tool wrappers, and Model Context Protocol servers to automate repetitive security workflows.",
    deliverables: [
      "Custom MCP servers connecting internal tools to LLMs",
      "Automated recon, triage, and scanning scripts",
      "Containerized deployment & clean documentation"
    ]
  },
  {
    title: "EDR & Detection Engineering",
    description: "Designing telemetry pipelines and building actionable detection rules mapped to attacker tradecraft.",
    deliverables: [
      "Tuned Sysmon and auditd configuration files",
      "Detection-as-Code rules mapped to MITRE ATT&CK",
      "Log ingestion pipelines using Kafka or Fluentd"
    ]
  },
  {
    title: "CTF & Cyber Range Infrastructure",
    description: "Setting up custom security competitions, on-demand Docker challenge sandboxes, and bespoke exploitation labs.",
    deliverables: [
      "Turnkey containerized CTF platform deployment",
      "Custom challenges across Web, Pwn, and Reverse Engineering",
      "Automated scoring and event monitoring"
    ]
  }
];

export const SKILL_CATEGORIES = [
  {
    name: "Defensive & Detection",
    skills: ["EDR / XDR Architecture", "Sysmon & Linux Auditd", "Kafka & Fluentd Pipelines", "MITRE ATT&CK", "Incident Triage", "File Integrity Monitoring (FIM)"]
  },
  {
    name: "Offensive & Assessment",
    skills: ["Web & API Penetration Testing", "Burp Suite Pro", "Nmap & Network Recon", "Metasploit", "Reverse Engineering basics", "Exploit PoC Development"]
  },
  {
    name: "Development & Systems",
    skills: ["Python (FastAPI, AsyncIO)", "Docker & Container Security", "Model Context Protocol (MCP)", "TypeScript & React", "Linux Internals & Bash", "Git & CI/CD"]
  }
];

export const EXPERIENCE = [
  {
    role: "Core Technical Lead & CTF Architect",
    entity: "NullChapter (VIT-AP)",
    period: "2023 — Present",
    points: [
      "Built NullBox, an on-demand containerized CTF platform used to host dynamic security events.",
      "Authored 25+ challenges across web security, reverse engineering, and cryptography.",
      "Mentored members in defensive monitoring, network analysis, and ethical hacking."
    ]
  },
  {
    role: "Independent Security Researcher & Tool Builder",
    entity: "Open Source Projects",
    period: "2023 — Present",
    points: [
      "Designed and launched SpyderXDR, an open-source EDR platform with sub-second Sysmon ingestion.",
      "Developed HexStrike AI, orchestrating 150+ security tools via the Model Context Protocol.",
      "Created VaultSeeker for multi-threaded secret detection in repositories and memory artifacts."
    ]
  }
];
