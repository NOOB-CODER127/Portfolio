import React from 'react';
import { ArrowRight, Terminal, Shield, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenTerminal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTerminal }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-cyan-500/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Availability badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyber-900/90 border border-emerald-500/30 text-xs sm:text-sm font-mono text-emerald-400 mb-6 shadow-sm backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{PERSONAL_INFO.availability}</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
            Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">Cybersecurity Platforms</span> & Autonomous AI Tooling
          </h1>

          {/* Subtitle with direct project callouts */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-8 font-normal leading-relaxed">
            I am <span className="text-white font-semibold">{PERSONAL_INFO.name}</span>, a Security Engineer & Tool Developer. Builder of <span className="text-emerald-400 font-mono font-medium">SpyderXDR</span> (enterprise endpoint detection), <span className="text-cyan-400 font-mono font-medium">HexStrike AI</span> (MCP platform with 150+ security tools), and <span className="text-indigo-400 font-mono font-medium">NullBox</span> (containerized CTF platform).
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <a
              href="#projects"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-cyber-950 font-bold text-base shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/35 transition-all group"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#services"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-cyber-900/90 hover:bg-cyber-800 text-slate-200 border border-cyber-700/80 hover:border-emerald-500/50 font-semibold text-base transition-all"
            >
              <Shield className="w-4 h-4 text-emerald-400" />
              <span>Hire Me / Client Services</span>
            </a>

            <button
              onClick={onOpenTerminal}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-cyan-950/40 hover:bg-cyan-950/70 border border-cyan-800/60 hover:border-cyan-400 font-mono text-cyan-300 text-sm transition-all"
            >
              <Terminal className="w-4 h-4" />
              <span>$ Launch Console</span>
            </button>
          </div>

          {/* Key Value Metrics Ticker */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto text-left">
            {PERSONAL_INFO.stats.map((stat, idx) => (
              <div 
                key={idx}
                className="p-4 sm:p-5 rounded-2xl bg-cyber-900/60 border border-cyber-800 hover:border-emerald-500/40 transition-all backdrop-blur-sm group hover:-translate-y-0.5"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono mb-1 group-hover:text-emerald-400 transition-colors">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-300 mb-1">
                  {stat.label}
                </div>
                <div className="text-[11px] font-mono text-emerald-400/80 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span>{stat.highlight}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Quick trust bar */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-mono">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              Offensive & Defensive Security
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              Model Context Protocol (MCP)
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
              MITRE ATT&CK Telemetry
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              Docker Sandbox Isolation
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};
