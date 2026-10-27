import React, { useState, useEffect } from 'react';
import { Send, Github, Check, Copy, MessageSquare, Clock, Shield } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  selectedService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ selectedService }) => {
  const [intent, setIntent] = useState<'client' | 'recruiter'>('client');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('');
  const [budgetOrRole, setBudgetOrRole] = useState('');
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedService) {
      setIntent('client');
      setTopic(selectedService);
    }
  }, [selectedService]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Prepare mailto link
    const subject = encodeURIComponent(
      intent === 'client' 
        ? `[Client Inquiry] ${topic || 'Security Project'} - ${name}`
        : `[Job Opportunity] ${budgetOrRole || 'Engineering Role'} - ${name}`
    );
    const body = encodeURIComponent(
      `Hi Prab,\n\nName: ${name}\nEmail: ${email}\nType: ${intent === 'client' ? 'Client Project' : 'Job Opportunity'}\nFocus: ${topic}\nDetails / Scope: ${budgetOrRole}\n\nMessage:\n${message}\n\nSent from Portfolio Website`
    );

    window.open(`mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-cyber-950 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-emerald-500/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-950/80 border border-emerald-800/60 text-xs font-mono text-emerald-400 mb-3">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>START A CONVERSATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Let's Build Something Resilient
            </h2>
            <p className="mt-3 text-base text-slate-300">
              Whether you need a security audit, custom AI/EDR tooling, or want to discuss a full-time role, I'm ready to connect.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Contact Card */}
            <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-cyber-900/70 border border-cyber-800">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Direct Channels</h3>
                  <p className="text-xs text-slate-400">Prefer direct email or checking code? Reach out right away.</p>
                </div>

                {/* Email Copy Card */}
                <div className="p-4 rounded-xl bg-cyber-950 border border-cyber-800 space-y-2">
                  <div className="text-xs text-slate-400 font-mono">Direct Email Address</div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs sm:text-sm font-mono text-emerald-400 font-semibold truncate">
                      {PERSONAL_INFO.email}
                    </span>
                    <button
                      onClick={handleCopyEmail}
                      className="p-1.5 rounded-lg bg-cyber-800 hover:bg-cyber-700 text-slate-300 hover:text-white transition-colors shrink-0"
                      title="Copy Email"
                    >
                      {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* GitHub Card */}
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-cyber-950 border border-cyber-800 hover:border-emerald-500/40 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-cyber-900 text-slate-300 group-hover:text-emerald-400 transition-colors">
                      <Github className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">
                        GitHub Profile
                      </div>
                      <div className="text-xs font-mono text-slate-400">
                        {PERSONAL_INFO.handle}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-emerald-400">Visit ↗</span>
                </a>

                {/* Service Commitment */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                    <Clock className="w-4 h-4 text-emerald-400" />
                    <span>Response timeframe: &lt; 24 hours</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                    <Shield className="w-4 h-4 text-cyan-400" />
                    <span>Confidentiality & NDA friendly</span>
                  </div>
                </div>
              </div>

              {/* Status pill */}
              <div className="mt-8 p-3 rounded-lg bg-emerald-950/40 border border-emerald-900/60 text-xs text-emerald-300 font-mono">
                ● Currently accepting new Q4/Q1 engagements & interview discussions.
              </div>
            </div>

            {/* Right Form Card */}
            <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-cyber-900/90 border border-cyber-800 shadow-xl">
              {/* Intent Toggle */}
              <div className="flex rounded-xl bg-cyber-950 p-1 mb-6 border border-cyber-800">
                <button
                  type="button"
                  onClick={() => setIntent('client')}
                  className={`flex-1 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all ${
                    intent === 'client'
                      ? 'bg-emerald-400 text-cyber-950 font-bold shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Client Project / Consulting
                </button>
                <button
                  type="button"
                  onClick={() => setIntent('recruiter')}
                  className={`flex-1 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all ${
                    intent === 'recruiter'
                      ? 'bg-emerald-400 text-cyber-950 font-bold shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Job / Engineering Role
                </button>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto">
                    <Check className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Inquiry Draft Prepared!</h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Your email client has been opened with your message pre-filled. If it didn't open automatically, you can send an email directly to <span className="text-emerald-400 font-mono font-bold">{PERSONAL_INFO.email}</span>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 rounded-lg bg-cyber-800 hover:bg-cyber-700 text-xs font-mono text-slate-200 transition-colors"
                  >
                    Submit Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-cyber-950 border border-cyber-700/80 focus:border-emerald-400 text-white text-sm outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1">Your Email *</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. alex@company.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-cyber-950 border border-cyber-700/80 focus:border-emerald-400 text-white text-sm outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1">
                        {intent === 'client' ? 'Project / Service Type' : 'Position / Team'}
                      </label>
                      <input
                        type="text"
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        placeholder={intent === 'client' ? 'e.g. Penetration Test / AI Tooling' : 'e.g. Security Engineer (Detection)'}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-cyber-950 border border-cyber-700/80 focus:border-emerald-400 text-white text-sm outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1">
                        {intent === 'client' ? 'Estimated Timeline / Budget' : 'Location / Work Model'}
                      </label>
                      <input
                        type="text"
                        value={budgetOrRole}
                        onChange={(e) => setBudgetOrRole(e.target.value)}
                        placeholder={intent === 'client' ? 'e.g. Within 2-3 weeks' : 'e.g. Remote / Relocation'}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-cyber-950 border border-cyber-700/80 focus:border-emerald-400 text-white text-sm outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">Message / Project Details *</label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={
                        intent === 'client'
                          ? 'Describe your project requirements, target scope, or technical challenges...'
                          : 'Tell me about the role, team goals, and what you are looking for...'
                      }
                      className="w-full px-3.5 py-2.5 rounded-lg bg-cyber-950 border border-cyber-700/80 focus:border-emerald-400 text-white text-sm outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-cyber-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/35 transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry to Prab</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
