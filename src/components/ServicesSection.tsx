import React from 'react';
import { SERVICES } from '../data/portfolioData';
import { Check } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-14 border-b border-border-subtle">
      <div className="max-w-3xl mx-auto px-6">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
            Client Services & Advisory
          </h2>
          <span className="text-xs font-mono text-zinc-600">
            Freelance & Contracts
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="p-5 rounded-xl bg-surface/50 border border-border flex flex-col justify-between"
            >
              <div>
                <h3 className="text-sm font-semibold text-zinc-100 mb-2">
                  {service.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  {service.description}
                </p>

                <div className="space-y-1.5 mb-4">
                  {service.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                      <span className="text-emerald-400 font-mono text-[11px] mt-0.5">›</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#contact"
                className="text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors pt-2 border-t border-border-subtle inline-block"
              >
                Inquire about this &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
