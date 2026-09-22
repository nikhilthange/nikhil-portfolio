import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { WORK_EXPERIENCE } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative z-10 scroll-mt-16 lg:scroll-mt-0">
      {/* Section Header */}
      <div className="space-y-2 mb-8 sm:mb-12 text-left">
        <h2 className="text-[10px] sm:text-xs font-space tracking-[0.2em] sm:tracking-[0.25em] text-[#00D9FF] uppercase font-semibold">
          02 // EXPERIENCE // RECORD
        </h2>
        <h3 className="text-xl sm:text-2xl md:text-3xl font-light font-space tracking-wider uppercase text-white leading-snug">
          TECHNICAL TENURE & PRODUCTION ACHIEVEMENTS
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 font-light max-w-3xl leading-relaxed">
          Tenure history documenting high-throughput microservices, AWS cloud architecture, and React 19 performance optimizations.
        </p>
      </div>

      <div className="space-y-6 sm:space-y-8">
        {WORK_EXPERIENCE.map((exp) => (
          <div
            key={exp.id}
            className="p-4 sm:p-6 md:p-8 bg-black/80 border border-[#00D9FF]/20 corner-crosshair space-y-5 sm:space-y-6 hover:border-[#00D9FF]/50 transition-all duration-300"
          >
            {/* Header / Meta */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[10px] sm:text-[11px] font-space tracking-widest uppercase text-[#00D9FF] bg-[#00D9FF]/10 px-2 py-0.5 border border-[#00D9FF]/30">
                    {exp.type}
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    ACTIVE_ROLE
                  </span>
                </div>

                <h4 className="text-lg sm:text-xl md:text-2xl font-space font-medium text-white tracking-wide uppercase mt-1.5 leading-snug">
                  {exp.role} <span className="text-[#00D9FF]">@ {exp.company}</span>
                </h4>
              </div>

              <div className="flex flex-row sm:flex-col sm:items-end text-xs font-mono text-slate-400 gap-2 sm:gap-1 flex-wrap">
                <span className="flex items-center gap-1.5 text-slate-200">
                  <Calendar className="w-3.5 h-3.5 text-[#00D9FF] shrink-0" />
                  {exp.period}
                </span>
                <span className="flex items-center gap-1 text-slate-500">
                  <MapPin className="w-3.5 h-3.5 shrink-0" />
                  {exp.location}
                </span>
              </div>
            </div>

            {/* Impact Telemetry Chips */}
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
              {exp.metrics.map((m) => (
                <div
                  key={m.label}
                  className="p-3 bg-slate-950/90 border border-white/5 hover:border-[#00D9FF]/30 transition-all"
                >
                  <div className="text-base sm:text-lg md:text-xl font-bold font-mono text-[#00D9FF]">
                    {m.value}
                  </div>
                  <div className="text-[11px] font-semibold text-slate-200 mt-0.5 font-space tracking-wide">
                    {m.label}
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-slate-400 mt-1 leading-tight font-light">
                    {m.detail}
                  </div>
                </div>
              ))}
            </div>

            {/* Key Deliverables Bullet Points */}
            <div className="space-y-2 pt-1">
              <div className="text-[10px] sm:text-xs font-space tracking-widest text-slate-400 uppercase">
                DELIVERABLES // ENGINEERING_WINS:
              </div>

              <div className="space-y-2">
                {exp.achievements.map((item, idx) => {
                  const [title, ...rest] = item.split(':');
                  return (
                    <div
                      key={idx}
                      className="p-3 bg-black/60 border border-white/5 flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed font-light"
                    >
                      <span className="text-[#00D9FF] font-mono mt-0.5 shrink-0">&gt;</span>
                      <div>
                        <strong className="text-white font-medium">{title}:</strong>{' '}
                        <span className="text-slate-300">{rest.join(':')}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div className="pt-3 border-t border-white/10 flex flex-wrap gap-1.5">
              {exp.technologies.map((t) => (
                <span key={t} className="cyber-tag text-[10px] sm:text-[11px]">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
