import React from 'react';
import { X, Github, Shield, Layers, Cpu } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div 
        className="w-full max-w-3xl max-h-[90vh] bg-cyber-900 border border-cyber-700 rounded-2xl shadow-2xl overflow-y-auto flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-cyber-900/95 border-b border-cyber-800 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-emerald-950/80 text-emerald-400 border border-emerald-800/60">
              {project.category}
            </span>
            <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-cyber-800 text-slate-300">
              {project.status}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-cyber-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Title & Tagline */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              {project.title}
            </h2>
            <p className="text-base text-emerald-400 font-mono">
              {project.tagline}
            </p>
          </div>

          {/* Key Metrics Banner */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {project.metrics.map((metric, i) => (
              <div key={i} className="p-3 rounded-xl bg-cyber-950/80 border border-cyber-800 flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                <span className="text-xs font-mono font-semibold text-slate-200">{metric}</span>
              </div>
            ))}
          </div>

          {/* Overview & Problem Solved */}
          <div className="space-y-3">
            <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <Shield className="w-4 h-4 text-emerald-400" />
              <span>System Overview</span>
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Architecture & Engineering Details */}
          <div className="space-y-3">
            <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>Architectural Implementation</span>
            </h3>
            <div className="space-y-2.5">
              {project.architectureDetails.map((detail, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-cyber-950/40 border border-cyber-800/80">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                  <p className="text-xs sm:text-sm text-slate-300 leading-normal">{detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div className="space-y-3">
            <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-indigo-400" />
              <span>Technologies & Tools Employed</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-cyber-800/80 text-slate-200 border border-cyber-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 z-10 px-6 py-4 bg-cyber-900 border-t border-cyber-800 flex items-center justify-between">
          <div className="text-xs font-mono text-slate-400 hidden sm:block">
            Production-grade Security Architecture
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyber-800 hover:bg-cyber-700 text-white text-xs font-semibold border border-cyber-700 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>
            )}
            <a
              href="#contact"
              onClick={onClose}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-400 hover:bg-emerald-300 text-cyber-950 text-xs font-bold transition-colors"
            >
              <span>Inquire About Similar Architecture</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
