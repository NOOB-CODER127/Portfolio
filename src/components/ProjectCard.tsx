import React from 'react';
import { ArrowUpRight, Github, Shield, Bot, Server, Flame, Key, Layers, CheckCircle2 } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'ShieldAlert':
        return <Shield className="w-6 h-6 text-emerald-400" />;
      case 'Bot':
        return <Bot className="w-6 h-6 text-cyan-400" />;
      case 'Server':
        return <Server className="w-6 h-6 text-indigo-400" />;
      case 'Flame':
        return <Flame className="w-6 h-6 text-amber-400" />;
      case 'Key':
        return <Key className="w-6 h-6 text-purple-400" />;
      default:
        return <Layers className="w-6 h-6 text-emerald-400" />;
    }
  };

  return (
    <div 
      className="group relative flex flex-col justify-between rounded-2xl bg-cyber-900/70 border border-cyber-800 hover:border-emerald-500/50 transition-all duration-300 p-6 hover:shadow-[0_0_30px_rgba(16,185,129,0.12)] hover:-translate-y-1"
    >
      <div>
        {/* Top bar with category & status */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="p-2.5 rounded-xl bg-cyber-950 border border-cyber-800 group-hover:border-emerald-500/40 transition-colors">
              {getIcon(project.iconName)}
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                {project.category}
              </span>
              <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                {project.status}
              </span>
            </div>
          </div>

          {project.featured && (
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-950 text-emerald-300 border border-emerald-800">
              FEATURED
            </span>
          )}
        </div>

        {/* Title & Tagline */}
        <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-slate-300 mb-4 line-clamp-2 leading-relaxed">
          {project.tagline}
        </p>

        {/* Key Metrics Chips */}
        <div className="space-y-1.5 mb-5">
          {project.metrics.slice(0, 2).map((metric, i) => (
            <div key={i} className="flex items-center gap-1.5 text-xs font-mono text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>{metric}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.techStack.slice(0, 4).map((tech) => (
            <span 
              key={tech}
              className="px-2 py-0.5 rounded text-[11px] font-mono bg-cyber-950 text-slate-400 border border-cyber-800"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="px-1.5 py-0.5 text-[11px] font-mono text-slate-400">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-cyber-800/80 flex items-center justify-between">
          <button
            onClick={() => onSelect(project)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <span>Architecture Breakdown</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-cyber-800 transition-colors"
              title="GitHub Repository"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
