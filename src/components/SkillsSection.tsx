import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Shield, Crosshair, Code2 } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const getCategoryIcon = (name: string) => {
    if (name.includes('Defensive')) return <Shield className="w-4 h-4 text-emerald-400" />;
    if (name.includes('Offensive')) return <Crosshair className="w-4 h-4 text-cyan-400" />;
    return <Code2 className="w-4 h-4 text-indigo-400" />;
  };

  return (
    <section id="skills" className="py-10">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold">
            Technical Stack & Capabilities
          </h2>
        </div>

        <div className="space-y-6">
          {SKILL_CATEGORIES.map((cat) => (
            <div 
              key={cat.name} 
              className="p-5 sm:p-6 rounded-2xl bg-surface/50 border border-border flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 shadow-sm"
            >
              <div className="sm:w-52 shrink-0 flex items-center gap-2">
                {getCategoryIcon(cat.name)}
                <span className="text-xs font-mono font-medium text-zinc-200">
                  {cat.name}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-canvas/80 border border-border-subtle text-zinc-300"
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
