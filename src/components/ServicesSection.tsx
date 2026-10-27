import React from 'react';
import { SERVICES } from '../data/portfolioData';
import { Crosshair, Cpu, ShieldCheck, Trophy, CheckCircle2, ArrowRight, Zap, Clock, ShieldAlert } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Crosshair':
        return <Crosshair className="w-6 h-6 text-emerald-400" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-cyan-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-indigo-400" />;
      case 'Trophy':
        return <Trophy className="w-6 h-6 text-amber-400" />;
      default:
        return <Zap className="w-6 h-6 text-emerald-400" />;
    }
  };

  const handleInquire = (serviceTitle: string) => {
    onSelectService(serviceTitle);
    const contactEl = document.getElementById('contact');
    contactEl?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-24 bg-cyber-900/50 border-y border-cyber-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/80 border border-cyan-800/60 text-xs font-mono text-cyan-400 mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>CLIENT SERVICES & ADVISORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            How I Can Help Your Team
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Available for freelance security engagements, technical consulting, and high-impact full-time engineering roles.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="flex flex-col justify-between p-7 rounded-2xl bg-cyber-950/90 border border-cyber-800 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-950/30 group"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-cyber-900 border border-cyber-800 group-hover:border-emerald-500/40 transition-colors">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-950/80 text-emerald-400 border border-emerald-800">
                    {service.badge}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="space-y-2.5 mb-6">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                    Core Deliverables:
                  </div>
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom footer & CTA */}
              <div className="pt-5 border-t border-cyber-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="text-xs text-slate-400">
                  <span className="font-semibold text-slate-300">Target Fit:</span> {service.idealFor}
                </div>
                <button
                  onClick={() => handleInquire(service.title)}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-cyber-900 hover:bg-emerald-400 text-slate-200 hover:text-cyber-950 text-xs font-bold border border-cyber-700 hover:border-emerald-400 transition-all whitespace-nowrap"
                >
                  <span>Inquire / Get Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Why Clients Choose Me Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-cyber-950 via-cyber-900 to-cyber-950 border border-cyber-700/80">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-lg bg-emerald-950/60 border border-emerald-800 text-emerald-400 shrink-0">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">Actionable PoCs, Not Noise</h4>
                <p className="text-xs text-slate-400 mt-1">Every finding comes with reproducible scripts, risk-rated impact, and exact lines of remediation.</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-lg bg-cyan-950/60 border border-cyan-800 text-cyan-400 shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">Rapid Turnaround</h4>
                <p className="text-xs text-slate-400 mt-1">Fast execution on scoped pentests and security tools without corporate red tape or unnecessary overhead.</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-lg bg-indigo-950/60 border border-indigo-800 text-indigo-400 shrink-0">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">Both Red & Blue Perspective</h4>
                <p className="text-xs text-slate-400 mt-1">Experience designing both offensive exploitation chains and enterprise EDR detection telemetry.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
