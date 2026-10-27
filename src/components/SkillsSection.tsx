import React, { useState } from 'react';
import { SKILL_GROUPS } from '../data/portfolioData';
import { Shield, Crosshair, Code2, Cpu } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Shield':
        return <Shield className="w-5 h-5 text-emerald-400" />;
      case 'Crosshair':
        return <Crosshair className="w-5 h-5 text-cyan-400" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-indigo-400" />;
      default:
        return <Cpu className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 bg-cyber-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-950/80 border border-indigo-800/60 text-xs font-mono text-indigo-400 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Engineering & Security Arsenal
          </h2>
          <p className="mt-3 text-base text-slate-300">
            A comprehensive overview of offensive tools, defensive detection telemetry, and production software engineering skills.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {SKILL_GROUPS.map((group, idx) => (
            <button
              key={group.category}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeTab === idx
                  ? 'bg-cyber-900 text-white border-2 border-emerald-400/80 shadow-lg shadow-emerald-500/10'
                  : 'bg-cyber-900/50 text-slate-400 hover:text-slate-200 border border-cyber-800'
              }`}
            >
              {getIcon(group.icon)}
              <span>{group.category}</span>
            </button>
          ))}
        </div>

        {/* Active Skill Group Panel */}
        <div className="max-w-4xl mx-auto bg-cyber-900/60 border border-cyber-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
          <div className="space-y-6">
            {SKILL_GROUPS[activeTab].skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-white">{skill.name}</span>
                    <div className="flex gap-1">
                      {skill.tags.map((t) => (
                        <span key={t} className="px-1.5 py-0.2 rounded text-[10px] font-mono bg-cyber-950 text-slate-400 border border-cyber-800">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="font-mono text-xs font-bold text-emerald-400">
                    {skill.level}% Proficiency
                  </span>
                </div>

                {/* Progress bar */}
                <div className="h-2 w-full rounded-full bg-cyber-950 overflow-hidden border border-cyber-800/80">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 transition-all duration-700 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Quick Tools Badge Row */}
          <div className="mt-8 pt-6 border-t border-cyber-800 flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-slate-400">
            <span className="text-slate-500 mr-2">Featured Toolsets:</span>
            {['Burp Suite Professional', 'Windows Sysmon', 'Docker Engine', 'Kafka', 'FastAPI', 'Fluentd', 'Model Context Protocol (MCP)', 'Linux Kali', 'Metasploit', 'Nmap'].map((t) => (
              <span key={t} className="px-2.5 py-1 rounded bg-cyber-950 border border-cyber-800 text-slate-300">
                {t}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
