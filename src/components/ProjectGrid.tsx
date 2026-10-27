import React, { useState } from 'react';
import { PROJECTS, Project } from '../data/portfolioData';
import { ArrowUpRight, Github, ChevronDown, ChevronUp } from 'lucide-react';

export const ProjectGrid: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section id="projects" className="py-14 border-b border-border-subtle">
      <div className="max-w-3xl mx-auto px-6">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
            Selected Projects
          </h2>
          <span className="text-xs font-mono text-zinc-600">
            {PROJECTS.length} systems
          </span>
        </div>

        <div className="space-y-6">
          {PROJECTS.map((project, idx) => {
            const isExpanded = expandedIndex === idx;

            return (
              <div
                key={project.title}
                className="group p-5 rounded-xl bg-surface/50 border border-border hover:border-zinc-700 transition-all duration-200"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2.5">
                    <h3 className="text-base font-semibold text-zinc-100 group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                    {project.status && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300">
                        {project.status}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3 text-xs font-mono text-zinc-500">
                    <span>{project.year}</span>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-white transition-colors"
                        title="GitHub source"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-sm text-zinc-300 leading-relaxed mb-3">
                  {project.description}
                </p>

                {/* Technical details toggle */}
                <div className="text-xs">
                  <button
                    onClick={() => toggleExpand(idx)}
                    className="inline-flex items-center gap-1 font-mono text-zinc-400 hover:text-emerald-400 transition-colors mb-2"
                  >
                    <span>{isExpanded ? 'Hide details' : 'Architecture & details'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  {isExpanded && (
                    <div className="mt-2 p-3 rounded bg-canvas border border-border-subtle text-zinc-300 leading-relaxed font-sans text-xs">
                      {project.details}
                    </div>
                  )}
                </div>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-canvas text-zinc-400 border border-border-subtle"
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
