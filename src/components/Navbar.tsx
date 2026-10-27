import React, { useState } from 'react';
import { BIO } from '../data/portfolioData';
import { ArrowUpRight, Copy, Check } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(BIO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-canvas/80 backdrop-blur-md border-b border-border-subtle py-4 transition-colors">
      <div className="max-w-3xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <span className="font-mono font-medium text-sm text-zinc-100 group-hover:text-emerald-400 transition-colors">
            prab
          </span>
          <span className="text-zinc-600 font-mono text-xs">/</span>
          <span className="text-zinc-500 font-mono text-xs">sec</span>
        </a>

        <nav className="flex items-center gap-5 text-xs font-mono text-zinc-400">
          <a href="#projects" className="hover:text-zinc-100 transition-colors">
            projects
          </a>
          <a href="#services" className="hover:text-zinc-100 transition-colors">
            services
          </a>
          <a href="#experience" className="hover:text-zinc-100 transition-colors">
            experience
          </a>
          <a href="#contact" className="hover:text-zinc-100 transition-colors">
            contact
          </a>
          <button
            onClick={copyEmail}
            className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-surface border border-border text-zinc-300 hover:text-white hover:border-zinc-700 transition-all text-[11px]"
            title="Copy email address"
          >
            {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
            <span>{copied ? 'copied' : 'email'}</span>
          </button>
        </nav>
      </div>
    </header>
  );
};
