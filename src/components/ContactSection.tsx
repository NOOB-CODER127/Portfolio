import React, { useState } from 'react';
import { BIO } from '../data/portfolioData';
import { Copy, Check, ArrowUpRight, Send, Mail } from 'lucide-react';

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
    const body = encodeURIComponent(`Hi Prabhath,\n\n${message}\n\nFrom: ${name} (${email})`);
    window.open(`mailto:${BIO.email}?subject=${subject}&body=${body}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-10">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-6">
          <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold mb-2">
            Get in Touch
          </h2>
          <p className="text-sm text-zinc-300">
            Have questions about my projects, want to collaborate, or connect? Reach out directly below.
          </p>
        </div>

        {/* Direct Email Card */}
        <div className="p-5 rounded-2xl bg-surface/60 border border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-canvas border border-border text-emerald-400">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs text-zinc-500 font-mono mb-0.5">Direct Email Address</div>
              <div className="text-sm font-mono text-zinc-200 font-medium">{BIO.email}</div>
            </div>
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

        {/* Message Form */}
        {submitted ? (
          <div className="p-5 rounded-2xl bg-surface border border-emerald-500/40 text-xs font-mono text-emerald-300 space-y-2">
            <div className="font-semibold text-sm text-emerald-400">Draft Prepared!</div>
            <p>Your default email client has opened with your message. You can also email me directly at {BIO.email}.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 rounded-2xl bg-surface/40 border border-border space-y-4 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-zinc-300 mb-1.5">Your Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alex Morgan"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-canvas border border-border focus:border-emerald-500/80 focus:ring-1 focus:ring-emerald-500/50 text-xs text-zinc-200 outline-none font-sans transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-zinc-300 mb-1.5">Your Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex@example.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-canvas border border-border focus:border-emerald-500/80 focus:ring-1 focus:ring-emerald-500/50 text-xs text-zinc-200 outline-none font-sans transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-300 mb-1.5">Message</label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your message or inquiry..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-canvas border border-border focus:border-emerald-500/80 focus:ring-1 focus:ring-emerald-500/50 text-xs text-zinc-200 outline-none font-sans transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 font-semibold text-xs font-mono transition-all flex items-center gap-2 shadow-sm hover:shadow"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Send Message</span>
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
