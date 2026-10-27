import React from 'react';
import { BIO } from '../data/portfolioData';
import { ArrowUpRight, Github, Mail, ArrowRight } from 'lucide-react';
import { TabId } from './Navbar';

interface HeroProps {
  onSelectTab: (tab: TabId) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectTab }) => {
  return (
    <section className="py-10">
      <div className="max-w-3xl mx-auto px-6">
        {/* Availability / Status indicator */}
        <div className="inline-flex items-center gap-2 mb-6 text-xs font-mono text-zinc-400">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-zinc-300">{BIO.status}</span>
        </div>

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100 mb-2">
          {BIO.name}
        </h1>
        <p className="text-sm font-mono text-emerald-400/90 mb-6">
          {BIO.role} • {BIO.location}
        </p>

        {/* Intro text */}
        <div className="space-y-3.5 text-sm text-zinc-300 leading-relaxed max-w-2xl mb-8">
          {BIO.summary.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* Quick Tab Jump Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 pt-6 border-t border-border-subtle">
          <button
            onClick={() => onSelectTab('projects')}
            className="p-3.5 rounded-xl bg-surface/50 border border-border hover:border-zinc-700 text-left transition-all group"
          >
            <div className="text-xs font-mono text-zinc-400 mb-1 flex items-center justify-between">
              <span>Selected Work</span>
              <ArrowRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-emerald-400 transition-colors" />
            </div>
            <div className="text-sm font-medium text-zinc-200 group-hover:text-emerald-400 transition-colors">
              SpyderXDR, HexStrike & more
            </div>
          </button>

          <button
            onClick={() => onSelectTab('skills')}
            className="p-3.5 rounded-xl bg-surface/50 border border-border hover:border-zinc-700 text-left transition-all group"
          >
            <div className="text-xs font-mono text-zinc-400 mb-1 flex items-center justify-between">
              <span>Stack & Arsenal</span>
              <ArrowRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-emerald-400 transition-colors" />
            </div>
            <div className="text-sm font-medium text-zinc-200 group-hover:text-emerald-400 transition-colors">
              Detection, Offensive & Systems
            </div>
          </button>

          <button
            onClick={() => onSelectTab('experience')}
            className="p-3.5 rounded-xl bg-surface/50 border border-border hover:border-zinc-700 text-left transition-all group"
          >
            <div className="text-xs font-mono text-zinc-400 mb-1 flex items-center justify-between">
              <span>Timeline</span>
              <ArrowRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-emerald-400 transition-colors" />
            </div>
            <div className="text-sm font-medium text-zinc-200 group-hover:text-emerald-400 transition-colors">
              NullChapter & Open Source
            </div>
          </button>
        </div>

        {/* Quick links */}
        <div className="flex items-center gap-4 text-xs font-mono">
          <a
            href={BIO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            <span>github.com/{BIO.handle}</span>
            <ArrowUpRight className="w-3 h-3 text-zinc-500" />
          </a>
          <span className="text-zinc-700">•</span>
          <a
            href={`mailto:${BIO.email}`}
            className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>{BIO.email}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
