import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-14 border-b border-border-subtle">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
            Technical Stack
          </h2>
        </div>

        <div className="space-y-6">
          {SKILL_CATEGORIES.map((cat) => (
            <div key={cat.name} className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
              <span className="text-xs font-mono text-zinc-400 sm:w-44 shrink-0">
                {cat.name}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono px-2 py-0.5 rounded bg-surface border border-border-subtle text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
