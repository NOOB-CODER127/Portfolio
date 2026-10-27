import React, { useState } from 'react';
import { BIO } from '../data/portfolioData';
import { Copy, Check, ArrowUpRight, Send } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(BIO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`Hi Prab,\n\n${message}\n\nFrom: ${name} (${email})`);
    window.open(`mailto:${BIO.email}?subject=${subject}&body=${body}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-14">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-6">
          <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
            Get in Touch
          </h2>
          <p className="text-sm text-zinc-300">
            Have questions about my projects, want to collaborate, or just want to connect? Reach out below.
          </p>
        </div>

        {/* Direct Email Card */}
        <div className="p-4 rounded-xl bg-surface/60 border border-border flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8">
          <div>
            <div className="text-xs text-zinc-500 font-mono mb-0.5">Direct email</div>
            <div className="text-sm font-mono text-zinc-200">{BIO.email}</div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={copyEmail}
              className="px-3 py-1.5 rounded-lg bg-canvas hover:bg-zinc-800 border border-border text-xs font-mono text-zinc-300 hover:text-white transition-all flex items-center gap-1.5"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
            <a
              href={`mailto:${BIO.email}`}
              className="px-3 py-1.5 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 font-medium text-xs font-mono transition-all flex items-center gap-1"
            >
              <span>Compose</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Minimalist Message Form */}
        {submitted ? (
          <div className="p-4 rounded-xl bg-surface border border-emerald-500/30 text-xs font-mono text-emerald-400">
            Email client opened with your draft. You can also message me directly at {BIO.email}.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-mono text-zinc-400 mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alex"
                  className="w-full px-3 py-2 rounded-lg bg-surface border border-border focus:border-zinc-500 text-xs text-zinc-200 outline-none font-sans"
                />
              </div>
              <div>
                <label className="block text-[11px] font-mono text-zinc-400 mb-1">Your Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex@example.com"
                  className="w-full px-3 py-2 rounded-lg bg-surface border border-border focus:border-zinc-500 text-xs text-zinc-200 outline-none font-sans"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-mono text-zinc-400 mb-1">Message</label>
              <textarea
                required
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your message..."
                className="w-full px-3 py-2 rounded-lg bg-surface border border-border focus:border-zinc-500 text-xs text-zinc-200 outline-none font-sans resize-none"
              />
            </div>

            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-surface hover:bg-surface-elevated border border-border text-zinc-200 hover:text-white text-xs font-mono transition-colors flex items-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5 text-emerald-400" />
              <span>Send Message</span>
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
