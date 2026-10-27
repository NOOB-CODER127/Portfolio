import React from 'react';
import { BIO } from '../data/portfolioData';
import { ArrowDown, ArrowUpRight, Github, Mail } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="pt-16 pb-14 border-b border-border-subtle">
      <div className="max-w-3xl mx-auto px-6">
        {/* Availability indicator */}
        <div className="inline-flex items-center gap-2 mb-6 text-xs font-mono text-zinc-400">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-zinc-300">{BIO.status}</span>
        </div>

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100 mb-4">
          {BIO.name}
        </h1>
        <p className="text-sm font-mono text-emerald-400/90 mb-6">
          {BIO.role} • {BIO.location}
        </p>

        {/* Intro text */}
        <div className="space-y-3 text-sm text-zinc-300 leading-relaxed max-w-2xl">
          {BIO.summary.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* Quick links */}
        <div className="mt-8 flex items-center gap-4 text-xs font-mono">
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
