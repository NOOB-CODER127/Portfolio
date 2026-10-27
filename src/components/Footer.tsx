import React from 'react';
import { BIO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-border-subtle text-xs font-mono text-zinc-500">
      <div className="max-w-3xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div>
          {BIO.name} ({BIO.handle})
        </div>
        <div className="flex items-center gap-4">
          <a
            href={BIO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-300 transition-colors"
          >
            GitHub
          </a>
          <span>•</span>
          <a
            href={`mailto:${BIO.email}`}
            className="hover:text-zinc-300 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};
