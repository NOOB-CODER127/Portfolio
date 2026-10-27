import React from 'react';
import { EXPERIENCE_MILESTONES } from '../data/portfolioData';
import { Calendar, CheckCircle, Award } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-cyber-900/40 border-t border-cyber-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-950/80 border border-emerald-800/60 text-xs font-mono text-emerald-400 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>BACKGROUND & TRACK RECORD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Experience & Leadership
          </h2>
          <p className="mt-3 text-base text-slate-300">
            A history of designing cybersecurity architectures, running high-scale CTF competitions, and building production tooling.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto space-y-8">
          {EXPERIENCE_MILESTONES.map((item, index) => (
            <div
              key={index}
              className="relative p-6 sm:p-8 rounded-2xl bg-cyber-950/80 border border-cyber-800 hover:border-emerald-500/40 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {item.role}
                  </h3>
                  <div className="text-sm font-semibold text-emerald-400 font-mono">
                    {item.entity}
                  </div>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-cyber-900 text-slate-300 border border-cyber-700 w-fit">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{item.period}</span>
                </div>
              </div>

              <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                {item.description}
              </p>

              {/* Achievements */}
              <div className="space-y-2 pt-2 border-t border-cyber-900">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">
                  Key Accomplishments:
                </div>
                {item.achievements.map((ach, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{ach}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
