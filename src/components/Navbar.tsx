import React, { useState } from 'react';
import { BIO } from '../data/portfolioData';
import { Copy, Check, User, FolderGit2, Cpu, History, Mail } from 'lucide-react';

export type TabId = 'about' | 'projects' | 'skills' | 'experience' | 'contact';

interface NavbarProps {
  activeTab: TabId;
  onSelectTab: (tab: TabId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onSelectTab }) => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(BIO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const tabs: { id: TabId; label: string; icon: React.ReactNode }[] = [
    { id: 'about', label: 'About', icon: <User className="w-3.5 h-3.5" /> },
    { id: 'projects', label: 'Projects', icon: <FolderGit2 className="w-3.5 h-3.5" /> },
    { id: 'skills', label: 'Skills', icon: <Cpu className="w-3.5 h-3.5" /> },
    { id: 'experience', label: 'Experience', icon: <History className="w-3.5 h-3.5" /> },
    { id: 'contact', label: 'Contact', icon: <Mail className="w-3.5 h-3.5" /> },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-canvas/90 backdrop-blur-md border-b border-border-subtle py-3.5 transition-colors">
      <div className="max-w-3xl mx-auto px-6 flex items-center justify-between gap-4">
        {/* Name / Brand */}
        <button
          onClick={() => onSelectTab('about')}
          className="flex items-center gap-2 group text-left"
        >
          <span className="font-mono font-medium text-xs sm:text-sm text-zinc-100 group-hover:text-emerald-400 transition-colors">
            Prabhath Guntupalli
          </span>
          <span className="text-zinc-600 font-mono text-xs hidden sm:inline">/</span>
          <span className="text-zinc-500 font-mono text-xs hidden sm:inline">Sec</span>
        </button>

        {/* Tab Navigation */}
        <nav className="flex items-center gap-1 sm:gap-1.5 text-xs font-mono">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onSelectTab(tab.id)}
                className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg transition-all duration-150 ${
                  isActive
                    ? 'text-zinc-100 bg-surface border border-border font-medium shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-surface/50'
                }`}
              >
                <span className={isActive ? 'text-emerald-400' : 'text-zinc-500'}>
                  {tab.icon}
                </span>
                <span>{tab.label}</span>
              </button>
            );
          })}

          <button
            onClick={copyEmail}
            className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-surface/50 border border-border-subtle text-zinc-400 hover:text-white hover:border-zinc-700 transition-all text-xs ml-1"
            title="Copy email address"
          >
            {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
            <span>{copied ? 'Copied' : 'Email'}</span>
          </button>
        </nav>
      </div>
    </header>
  );
};
