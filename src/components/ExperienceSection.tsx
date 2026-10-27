import React from 'react';
import { EXPERIENCE } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-14 border-b border-border-subtle">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
            Experience & Activity
          </h2>
        </div>

        <div className="space-y-8">
          {EXPERIENCE.map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div>
                  <h3 className="text-sm font-semibold text-zinc-100">
                    {item.role}
                  </h3>
                  <p className="text-xs font-mono text-emerald-400">
                    {item.entity}
                  </p>
                </div>
                <span className="text-xs font-mono text-zinc-500">
                  {item.period}
                </span>
              </div>

              <ul className="space-y-1.5 pt-1">
                {item.points.map((pt, i) => (
                  <li key={i} className="text-xs text-zinc-300 flex items-start gap-2">
                    <span className="text-zinc-600 font-mono text-[11px] mt-0.5">•</span>
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
