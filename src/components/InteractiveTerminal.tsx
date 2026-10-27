import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft, Send } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, SERVICES, SKILL_GROUPS } from '../data/portfolioData';

interface InteractiveTerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandHistoryItem {
  id: string;
  command: string;
  output: React.ReactNode;
  time: string;
}

export const InteractiveTerminal: React.FC<InteractiveTerminalProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandHistoryItem[]>([]);
  const [isMaximized, setIsMaximized] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      if (history.length === 0) {
        // Initial welcome command
        runCommand('help', false);
      }
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const getTime = () => {
    const d = new Date();
    return d.toTimeString().split(' ')[0];
  };

  const runCommand = (cmdStr: string, recordCommand = true) => {
    const trimmed = cmdStr.trim().toLowerCase();
    const parts = trimmed.split(/\s+/);
    const mainCmd = parts[0];
    const arg = parts.slice(1).join(' ');

    let output: React.ReactNode = null;

    switch (mainCmd) {
      case 'help':
        output = (
          <div className="space-y-1.5 text-xs font-mono">
            <p className="text-emerald-400 font-semibold">Available Shell Commands:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-slate-300">
              <div><span className="text-cyan-400 font-bold">whoami</span> - Display Prab's bio & background</div>
              <div><span className="text-cyan-400 font-bold">projects</span> - List flagship cybersecurity platforms</div>
              <div><span className="text-cyan-400 font-bold">cat &lt;project&gt;</span> - Inspect (e.g. `cat spyderxdr`, `cat hexstrike`)</div>
              <div><span className="text-cyan-400 font-bold">skills</span> - Display offensive, defensive & dev arsenal</div>
              <div><span className="text-cyan-400 font-bold">services</span> - Review client consulting offerings</div>
              <div><span className="text-cyan-400 font-bold">hire</span> - Quick contact & booking channels</div>
              <div><span className="text-cyan-400 font-bold">clear</span> - Clear the terminal output</div>
            </div>
            <p className="text-slate-400 pt-1">Tip: Click any quick command button below to run instantly.</p>
          </div>
        );
        break;

      case 'whoami':
        output = (
          <div className="space-y-2 text-xs font-mono text-slate-300">
            <div className="text-emerald-400 font-bold text-sm">{PERSONAL_INFO.name} ({PERSONAL_INFO.handle})</div>
            <p className="text-slate-200">{PERSONAL_INFO.title}</p>
            <p className="text-slate-400">{PERSONAL_INFO.tagline}</p>
            <div className="border-l-2 border-emerald-500 pl-3 py-1 space-y-1 text-slate-300">
              <p>• Location: {PERSONAL_INFO.location}</p>
              <p>• Email: {PERSONAL_INFO.email}</p>
              <p>• GitHub: {PERSONAL_INFO.github}</p>
              <p>• Focus: XDR/EDR Engineering, AI Agents (MCP), CTF Architecture & Offensive Pentesting</p>
            </div>
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="space-y-2 text-xs font-mono">
            <p className="text-emerald-400 font-semibold">Flagship Production Systems:</p>
            {PROJECTS.map((p) => (
              <div key={p.id} className="p-2 rounded bg-cyber-900 border border-cyber-800">
                <div className="flex items-center justify-between">
                  <span className="text-cyan-400 font-bold">{p.title}</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">{p.status}</span>
                </div>
                <p className="text-slate-300 mt-0.5">{p.tagline}</p>
                <div className="flex flex-wrap gap-1 mt-1 text-[11px] text-slate-400">
                  <span className="text-slate-500">Tech:</span> {p.techStack.join(', ')}
                </div>
                <div className="mt-1 text-[11px] text-emerald-400">
                  Run command: <span className="bg-cyber-950 px-1 rounded text-cyan-300 font-bold">cat {p.id.split('-')[0]}</span> for deep architecture
                </div>
              </div>
            ))}
          </div>
        );
        break;

      case 'cat':
        if (!arg) {
          output = <p className="text-amber-400 text-xs font-mono">Usage: cat &lt;project-name&gt; (try: `cat spyderxdr`, `cat hexstrike`, `cat nullbox`)</p>;
        } else {
          const match = PROJECTS.find(p => p.id.includes(arg) || p.title.toLowerCase().includes(arg));
          if (match) {
            output = (
              <div className="space-y-2 text-xs font-mono text-slate-300 p-2 rounded bg-cyber-900 border border-cyber-700">
                <div className="text-emerald-400 font-bold text-sm">{match.title} - Architecture & Spec</div>
                <p className="text-slate-300">{match.description}</p>
                <div className="mt-2 space-y-1">
                  <p className="text-cyan-400 font-semibold">Architecture Highlights:</p>
                  {match.architectureDetails.map((item, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-slate-300">
                      <span className="text-emerald-400">▶</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-2 pt-2 border-t border-cyber-800 flex items-center gap-2">
                  <span className="text-slate-400">Tech Stack:</span>
                  <span className="text-indigo-300">{match.techStack.join(' • ')}</span>
                </div>
              </div>
            );
          } else {
            output = <p className="text-red-400 text-xs font-mono">Project not found: "{arg}". Available: spyderxdr, hexstrike, nullbox, koth, vaultseeker.</p>;
          }
        }
        break;

      case 'skills':
        output = (
          <div className="space-y-3 text-xs font-mono">
            {SKILL_GROUPS.map((group, idx) => (
              <div key={idx} className="space-y-1">
                <p className="text-cyan-400 font-semibold">[{group.category}]</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-slate-300">
                  {group.skills.map((s, i) => (
                    <div key={i} className="flex items-center justify-between pr-2">
                      <span>• {s.name}</span>
                      <span className="text-emerald-400 font-bold">{s.level}%</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
        break;

      case 'services':
        output = (
          <div className="space-y-2 text-xs font-mono">
            <p className="text-emerald-400 font-semibold">Available Client & Advisory Services:</p>
            {SERVICES.map((s) => (
              <div key={s.id} className="p-2 rounded bg-cyber-900/80 border border-cyber-800">
                <div className="flex items-center justify-between">
                  <span className="text-cyan-300 font-bold">{s.title}</span>
                  <span className="text-[10px] text-emerald-400">{s.badge}</span>
                </div>
                <p className="text-slate-300 text-[11px] mt-0.5">{s.description}</p>
                <p className="text-slate-400 text-[11px] mt-1"><span className="text-slate-500">Ideal for:</span> {s.idealFor}</p>
              </div>
            ))}
            <p className="text-slate-400">Type <span className="text-cyan-400 font-bold">hire</span> to start an inquiry.</p>
          </div>
        );
        break;

      case 'hire':
      case 'contact':
        output = (
          <div className="p-3 rounded bg-emerald-950/40 border border-emerald-600/50 space-y-2 text-xs font-mono">
            <p className="text-emerald-300 font-bold">Direct Channels for Clients & Hiring Managers:</p>
            <p className="text-slate-200">Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-emerald-400 underline font-bold">{PERSONAL_INFO.email}</a></p>
            <p className="text-slate-300">GitHub: <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-cyan-400 underline">{PERSONAL_INFO.github}</a></p>
            <p className="text-slate-300">Status: <span className="text-emerald-400 font-bold">Open for Freelance Security Audits & Engineering Roles</span></p>
            <div className="pt-2">
              <a 
                href="#contact" 
                onClick={onClose}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-400 text-cyber-950 font-bold rounded hover:bg-emerald-300 transition-colors"
              >
                <Send className="w-3 h-3" />
                <span>Jump to Contact Form</span>
              </a>
            </div>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      case '':
        output = null;
        break;

      default:
        output = (
          <p className="text-red-400 text-xs font-mono">
            Command not recognized: <span className="text-white font-bold">{trimmed}</span>. Type <span className="text-emerald-400 font-bold">help</span> to view all commands.
          </p>
        );
    }

    const newItem: CommandHistoryItem = {
      id: Math.random().toString(36).substring(7),
      command: recordCommand ? cmdStr : 'help',
      output,
      time: getTime()
    };

    setHistory(prev => [...prev, newItem]);
    setInput('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    runCommand(input, true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div 
        className={`w-full flex flex-col bg-cyber-950 border border-emerald-500/40 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ${
          isMaximized 
            ? 'h-[96vh] max-w-6xl' 
            : 'h-[85vh] sm:h-[650px] max-w-4xl'
        }`}
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-cyber-900 border-b border-cyber-800">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer" onClick={onClose} title="Close" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80 cursor-pointer" onClick={() => setIsMaximized(!isMaximized)} title="Maximize" />
            <div className="ml-2 flex items-center gap-1.5 text-xs font-mono text-slate-300">
              <TerminalIcon className="w-3.5 h-3.5 text-emerald-400" />
              <span>prab@security-lab: ~ (Interactive Cyber Console)</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-slate-400">
            <button 
              onClick={() => setIsMaximized(!isMaximized)} 
              className="p-1 hover:text-white rounded hover:bg-cyber-800 hidden sm:block"
            >
              {isMaximized ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
            <button 
              onClick={onClose} 
              className="p-1 hover:text-red-400 rounded hover:bg-cyber-800"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quick Command Action Bar */}
        <div className="px-4 py-2 bg-cyber-900/60 border-b border-cyber-800/80 flex items-center gap-2 overflow-x-auto text-xs font-mono">
          <span className="text-slate-400 text-[11px] whitespace-nowrap">Quick Run:</span>
          {['whoami', 'projects', 'cat spyderxdr', 'skills', 'services', 'hire', 'clear'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => runCommand(cmd, true)}
              className="px-2 py-0.5 rounded bg-cyber-800 hover:bg-emerald-950 text-slate-300 hover:text-emerald-400 border border-cyber-700/60 hover:border-emerald-500/40 whitespace-nowrap transition-all"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Terminal Body */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4 font-mono text-xs text-slate-200">
          <div className="p-3 rounded-lg bg-cyber-900/40 border border-cyber-800/60 text-slate-300 text-xs">
            <p className="text-emerald-400 font-bold mb-1">=== PRABAKARAN SECURITY TERMINAL v2.6 ===</p>
            <p>Specialization: Detection & Response (EDR), AI Security Agents (MCP), CTF Architecture.</p>
            <p className="text-slate-400 mt-1">Type <span className="text-cyan-400 font-bold">help</span> or tap any quick command chip above.</p>
          </div>

          {history.map((item) => (
            <div key={item.id} className="space-y-1">
              <div className="flex items-center gap-2 text-slate-400 text-xs">
                <span className="text-emerald-400 font-bold">prab@kali:~$</span>
                <span className="text-white font-semibold">{item.command}</span>
                <span className="text-[10px] text-slate-600 ml-auto">{item.time}</span>
              </div>
              <div className="pl-4">{item.output}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Command Input Bar */}
        <form onSubmit={handleSubmit} className="p-3 bg-cyber-900 border-t border-cyber-800 flex items-center gap-2">
          <span className="text-emerald-400 font-mono font-bold text-sm">prab@kali:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a command (e.g., whoami, projects, hire, clear)..."
            className="flex-1 bg-transparent border-none outline-none text-white font-mono text-xs sm:text-sm placeholder:text-slate-500"
          />
          <button
            type="submit"
            className="p-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500 text-emerald-400 hover:text-cyber-950 transition-colors"
            title="Execute Command"
          >
            <CornerDownLeft className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
