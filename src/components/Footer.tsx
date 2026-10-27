import React from 'react';
import { Shield, ArrowUp, Github, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-cyber-950 border-t border-cyber-900 py-12 text-slate-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyber-900 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <div className="font-bold text-white text-sm">
                {PERSONAL_INFO.name}
              </div>
              <div className="text-[11px] text-slate-500">
                {PERSONAL_INFO.handle} • Security Engineering & Tools
              </div>
            </div>
          </div>

          {/* Status pill */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyber-900 border border-cyber-800 text-[11px]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-slate-300">Available for Contract Engagements & Roles</span>
          </div>

          {/* Links & Scroll to top */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-cyber-900 hover:text-white border border-cyber-800 transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 rounded-lg bg-cyber-900 hover:text-white border border-cyber-800 transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-cyber-900 hover:text-emerald-400 border border-cyber-800 transition-colors flex items-center gap-1"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="text-[10px]">Top</span>
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-cyber-900/80 text-center text-slate-600 text-[11px]">
          &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. Built for high security and maximum client impact.
        </div>
      </div>
    </footer>
  );
};
