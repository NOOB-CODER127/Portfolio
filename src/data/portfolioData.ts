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

export const BIO = {
  name: "Prabhath Guntupalli",
  handle: "NOOB-CODER127",
  role: "Security Engineer & Systems Developer",
  status: "Security Engineering • Systems & Threat Detection",
  location: "India • Remote",
  email: "007praba20@gmail.com",
  github: "https://github.com/NOOB-CODER127",
  summary: [
    "I focus on endpoint detection & response (EDR), security automation, stealth mesh networking, and offensive tooling.",
    "Currently building SpyderXDR, an enterprise detection platform that ingests real-time endpoint telemetry via Sysmon and Kafka, HexStrike AI for autonomous LLM security agent orchestration, and AegisRay, an ultra-stealth P2P mesh VPN.",
    "I also engineer CTF infrastructure, having developed NullBox to provision on-demand, isolated Docker containers for live security competitions."
  ]
};

export const PROJECTS: Project[] = [
  {
    title: "SpyderXDR",
    year: "2024",
    status: "Active",
    description: "Extended Detection & Response platform for real-time endpoint telemetry and incident response.",
    details: "Built a high-throughput telemetry pipeline processing Windows Sysmon and Linux audit logs through Kafka and Fluentd. Correlates process, network, and registry events against MITRE ATT&CK techniques with sub-second alert latency and automated containment actions.",
    tags: ["FastAPI", "React", "Docker", "Sysmon", "Kafka", "Fluentd", "Python"],
    githubUrl: "https://github.com/NOOB-CODER127",
  },
  {
    title: "AegisRay",
    year: "2024 — 2025",
    status: "Active",
    description: "Security-focused P2P mesh VPN featuring mutual TLS, zero-trust peer admission, and multi-hop routing for hostile networks.",
    details: "Engineered a decentralized overlay network in Go with WireGuard/TUN interfaces. Implements zero-trust peer admission with Ed25519 identity keys, X25519 key exchange, and XChaCha20-Poly1305 encryption. Features SNI masquerading to blend handshakes with ordinary HTTPS traffic and built-in STUN UDP hole punching for strict NAT traversal.",
    tags: ["Go", "WireGuard / TUN", "Cryptography", "P2P Mesh", "NAT Traversal", "Docker"],
    githubUrl: "https://github.com/NOOB-CODER127/AegisRay",
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
    year: "2023 — 2024",
    status: "Production",
    description: "Container-based CTF infrastructure with on-demand isolated challenge environments.",
    details: "Engineered to host dynamic security competitions. Spawns ephemeral, private Docker containers per team on demand to eliminate challenge state collisions and flag leaks. Features real-time dynamic scoring and WebSocket scoreboards.",
    tags: ["Docker SDK", "Python", "FastAPI", "Redis", "WebSockets"],
    githubUrl: "https://github.com/NOOB-CODER127",
  }
];

export const SKILL_CATEGORIES = [
  {
    name: "Defensive & Detection",
    skills: ["EDR / XDR Architecture", "Sysmon & Linux Auditd", "Kafka & Fluentd Pipelines", "MITRE ATT&CK", "Incident Triage", "File Integrity Monitoring (FIM)"]
  },
  {
    name: "Offensive & Assessment",
    skills: ["Web & API Penetration Testing", "Burp Suite Pro", "Nmap & Network Recon", "Metasploit", "Reverse Engineering Basics", "Exploit PoC Development"]
  },
  {
    name: "Development & Systems",
    skills: ["Go (Golang)", "Python (FastAPI, AsyncIO)", "WireGuard / TUN", "Docker & Container Security", "Model Context Protocol (MCP)", "TypeScript & React", "Linux Internals & Bash"]
  }
];

export const EXPERIENCE = [
  {
    role: "Lead Platform Architect & Security Researcher",
    entity: "SpyderXDR, AegisRay & HexStrike",
    period: "2024 — Present",
    points: [
      "Designed and implemented SpyderXDR, an enterprise EDR platform featuring sub-second Sysmon log streaming and ML threat detection.",
      "Engineered AegisRay, an ultra-stealth P2P mesh VPN in Go with zero-trust Ed25519 peer admission and SNI obfuscation.",
      "Developed HexStrike AI, orchestrating 150+ security tools via the Model Context Protocol for automated penetration testing.",
      "Engineered automated containment playbooks and MITRE ATT&CK alert classification."
    ]
  },
  {
    role: "CTF Infrastructure Architect & Challenge Developer",
    entity: "Security Competitions & Cyber Ranges",
    period: "2023 — Present",
    points: [
      "Built NullBox, an on-demand containerized CTF platform providing zero-collision Docker sandbox environments for competitors.",
      "Authored 25+ technical challenges spanning Web exploitation, Reverse Engineering, and Cryptography.",
      "Conducted technical workshops on endpoint telemetry, network analysis, and vulnerability exploitation."
    ]
  }
];
