import React, { useState, useEffect } from 'react';
import { Shield, Terminal, Menu, X, Send, Github, Check, Copy } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenTerminal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navLinks = [
    { label: 'Projects', href: '#projects' },
    { label: 'Services & Hire', href: '#services' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-cyber-950/85 backdrop-blur-md border-b border-cyber-800/80 shadow-lg shadow-black/40 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-cyber-900 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:border-emerald-400 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all">
              <Shield className="w-5 h-5 text-emerald-400 transition-transform group-hover:scale-110" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-lg text-white group-hover:text-emerald-400 transition-colors">
                  prab<span className="text-emerald-400">.sec</span>
                </span>
                <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-mono bg-emerald-950/80 text-emerald-400 border border-emerald-800/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  OPEN FOR WORK
                </span>
              </div>
              <span className="text-xs text-slate-400 font-mono hidden sm:block">Security Engineer & Tool Builder</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-emerald-400 rounded-lg hover:bg-cyber-900/60 transition-all"
              >
                {link.label}
              </a>
            ))}

            {/* Quick Terminal Trigger */}
            <button
              onClick={onOpenTerminal}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-cyan-400 bg-cyan-950/40 hover:bg-cyan-950/70 border border-cyan-800/50 hover:border-cyan-500 rounded-lg transition-all ml-1"
              title="Open Interactive Cyber Console"
            >
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>Console</span>
            </button>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={handleCopyEmail}
              className="p-2 text-slate-400 hover:text-slate-100 bg-cyber-900/60 hover:bg-cyber-800 border border-cyber-800 rounded-lg transition-all text-xs flex items-center gap-1.5"
              title="Copy Email"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span className="font-mono text-[11px]">{copied ? 'Copied!' : 'Copy Email'}</span>
            </button>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white bg-cyber-900/60 hover:bg-cyber-800 border border-cyber-800 rounded-lg transition-all"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-cyber-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg shadow-sm hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all"
            >
              <Send className="w-4 h-4" />
              <span>Hire Me</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenTerminal}
              className="p-2 text-cyan-400 bg-cyan-950/40 border border-cyan-800/50 rounded-lg"
              title="Interactive Terminal"
            >
              <Terminal className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white bg-cyber-900/80 border border-cyber-800 rounded-lg"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-cyber-800 bg-cyber-950/98 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-emerald-400 hover:bg-cyber-900/80"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-cyber-800/80 flex flex-col gap-2.5">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-400 text-cyber-950 font-semibold text-sm"
            >
              <Send className="w-4 h-4" />
              <span>Hire Me / Get in Touch</span>
            </a>
            <button
              onClick={handleCopyEmail}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-cyber-900 border border-cyber-800 text-slate-300 font-mono text-xs"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Email Copied!' : PERSONAL_INFO.email}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
