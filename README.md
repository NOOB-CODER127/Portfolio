# 🛡️ Prab's Cybersecurity & Engineering Portfolio

A modern, high-converting portfolio website engineered specifically to showcase flagship security platforms, win client contracts (penetration testing, security automation, CTF infrastructure), and attract high-level engineering job offers.

![Portfolio Preview Banner](https://img.shields.io/badge/Status-Live%20Ready-emerald?style=for-the-badge)
![Tech Stack](https://img.shields.io/badge/React%2018-Vite-Tailwind%20CSS-blue?style=for-the-badge)
![Specialization](https://img.shields.io/badge/Security-XDR%20%7C%20AI%20MCP%20%7C%20CTF-purple?style=for-the-badge)

---

## ⚡ Key Highlights & Features

- **🎯 Client & Recruiter High-Conversion Architecture**:
  - **Availability Indicator**: Pulsing status badge ("Available for Freelance Consulting & Full-time Engineering Roles").
  - **Metrics Ticker**: Prominently highlights `150+ Tools Integrated`, `12+ AI Agents`, and `Sub-second Telemetry`.
  - **Client Services Section**: Clear offerings (Pentests, Custom AI & MCP Tooling, EDR/SIEM Rule Engineering, CTF Infrastructure) with deliverables and instant inquiry buttons.
  - **Interactive Terminal Console**: An interactive terminal emulator where technical visitors and recruiters can type `whoami`, `projects`, `cat spyderxdr`, `skills`, `services`, or `hire`.
  - **Project Deep-Dive Modal**: Interactive architecture breakdown for each flagship platform (SpyderXDR, HexStrike AI MCP, NullBox CTF, KOTH Arena, VaultSeeker).
  - **Dual-Intent Contact Form**: Seamless switcher between "Client Consulting" and "Job Offer", generating instant `mailto` drafts and one-click email copying.

---

## 🚀 Quick Start

### 1. Development Mode
```bash
npm install
npm run dev
```
Open [http://localhost:3002](http://localhost:3002) in your browser.

### 2. Production Build
```bash
npm run build
```
Generates an optimized static bundle in the `dist/` folder ready for deployment.

---

## 🛠️ Easy Customization

All personal details, projects, skills, services, and social links are centrally configured in:
📁 `src/data/portfolioData.ts`

- **Update Bio / Links**: Edit `PERSONAL_INFO` object (name, email, github, bio, stats).
- **Add or Modify Projects**: Update the `PROJECTS` array with new case studies or repository links.
- **Adjust Client Offerings**: Update `SERVICES` array with your latest consulting services and rates.
- **Tune Skills Matrix**: Update `SKILL_GROUPS` to showcase your latest proficiencies.

---

## 🌐 Deploy to Web (1-Click Options)

### Option A: Vercel (Recommended)
1. Push this folder to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "feat: initial cybersecurity portfolio"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```
2. Import repository into [Vercel](https://vercel.com) — framework will automatically be detected as **Vite**.

### Option B: GitHub Pages
Run:
```bash
npm run build
# Deploy the 'dist' directory to gh-pages branch
```

---

## 📬 Contact
- **Email**: [007praba20@gmail.com](mailto:007praba20@gmail.com)
- **GitHub**: [NOOB-CODER127](https://github.com/NOOB-CODER127)
