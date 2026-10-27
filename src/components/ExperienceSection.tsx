import React from 'react';
import { EXPERIENCE } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-10">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold">
            Experience & Engineering Activity
          </h2>
        </div>

        <div className="space-y-6">
          {EXPERIENCE.map((item, index) => (
            <div 
              key={index} 
              className="p-5 sm:p-6 rounded-2xl bg-surface/50 border border-border space-y-3 shadow-sm"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div>
                  <h3 className="text-base font-semibold text-zinc-100">
                    {item.role}
                  </h3>
                  <p className="text-xs font-mono text-emerald-400 font-medium">
                    {item.entity}
                  </p>
                </div>
                <span className="text-xs font-mono text-zinc-400">
                  {item.period}
                </span>
              </div>

              <ul className="space-y-2 pt-1 border-t border-border-subtle">
                {item.points.map((pt, i) => (
                  <li key={i} className="text-xs sm:text-sm text-zinc-300 flex items-start gap-2.5 leading-relaxed">
                    <span className="text-emerald-400 font-mono text-xs mt-0.5">›</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
