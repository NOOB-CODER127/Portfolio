import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Github, ChevronDown, ChevronUp, Layers } from 'lucide-react';

export const ProjectGrid: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section id="projects" className="py-10">
      <div className="max-w-3xl mx-auto px-6">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold">
            Selected Projects
          </h2>
          <span className="text-xs font-mono text-zinc-500">
            {PROJECTS.length} Systems
          </span>
        </div>

        <div className="space-y-5">
          {PROJECTS.map((project, idx) => {
            const isExpanded = expandedIndex === idx;

            return (
              <div
                key={project.title}
                className="group p-5 sm:p-6 rounded-2xl bg-surface/50 border border-border hover:border-zinc-700/80 transition-all duration-200 hover:bg-surface/70 shadow-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2.5">
                    <h3 className="text-base font-semibold text-zinc-100 group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                    {project.status && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-zinc-800/90 text-zinc-300 border border-zinc-700/60 font-medium">
                        {project.status}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3 text-xs font-mono text-zinc-400">
                    <span>{project.year}</span>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-white transition-colors"
                        title="View on GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-sm text-zinc-300 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technical details toggle */}
                <div className="text-xs">
                  <button
                    onClick={() => toggleExpand(idx)}
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-zinc-400 hover:text-emerald-400 transition-colors mb-2 font-medium"
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>{isExpanded ? 'Hide Architecture Details' : 'Architecture & Details'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  {isExpanded && (
                    <div className="mt-2.5 p-4 rounded-xl bg-canvas border border-border-subtle text-zinc-300 leading-relaxed font-sans text-xs space-y-2 animate-in fade-in duration-150">
                      <div className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                        System Architecture:
                      </div>
                      <p>{project.details}</p>
                    </div>
                  )}
                </div>

                {/* Tech Stack Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-canvas/80 text-zinc-300 border border-border-subtle"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
