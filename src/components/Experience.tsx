import React from 'react';
import { Calendar, MapPin, Trophy, Award, Sparkles, GraduationCap, BookOpen } from 'lucide-react';
import { WORK_EXPERIENCE, ACHIEVEMENTS, EDUCATION_LIST } from '../data/portfolioData';

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
                <span className="flex items-center gap-1 text-slate-400">
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

      {/* Formal Academic Foundation */}
      <div className="mt-10 sm:mt-12 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/10">
          <div className="text-[10px] sm:text-xs font-space tracking-widest text-[#00D9FF] uppercase font-semibold flex items-center gap-2">
            <GraduationCap className="w-3.5 h-3.5 text-[#00D9FF]" />
            <span>ACADEMIC FOUNDATION // FORMAL EDUCATION</span>
          </div>
          <span className="text-[10px] font-mono text-emerald-400">
            CLASS OF 2027 • MUMBAI UNIVERSITY
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {EDUCATION_LIST.map((edu, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 bg-black/80 border border-white/10 hover:border-[#00D9FF]/40 transition-all duration-300 corner-crosshair flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-1.5 flex-wrap">
                  <span className="px-2 py-0.5 text-[10px] font-mono uppercase bg-[#00D9FF]/10 border border-[#00D9FF]/30 text-[#00D9FF]">
                    {edu.scoreLabel}: {edu.score}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#00D9FF]" />
                    {edu.period}
                  </span>
                </div>

                <h4 className="text-xs sm:text-sm font-space font-medium text-white tracking-wide uppercase leading-snug">
                  {edu.degree}
                </h4>

                <div className="text-[11px] font-mono text-[#8BE9FD]">
                  {edu.institution}
                </div>

                <div className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                  <MapPin className="w-3 h-3 shrink-0" />
                  {edu.location}
                </div>
              </div>

              {edu.coursework && edu.coursework.length > 0 && (
                <div className="pt-2 border-t border-white/5 space-y-1">
                  <div className="text-[9px] font-space tracking-wider text-slate-400 uppercase flex items-center gap-1">
                    <BookOpen className="w-2.5 h-2.5 text-[#00D9FF]" />
                    <span>Core Coursework:</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {edu.coursework.slice(0, 4).map((c) => (
                      <span key={c} className="text-[9px] font-mono px-1.5 py-0.5 bg-slate-950 text-slate-300 border border-white/5">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Honors, Hackathons & Professional Certifications */}
      <div className="mt-10 sm:mt-12 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/10">
          <div className="text-[10px] sm:text-xs font-space tracking-widest text-[#00D9FF] uppercase font-semibold flex items-center gap-2">
            <Trophy className="w-3.5 h-3.5 text-[#00D9FF]" />
            <span>HONORS // HACKATHONS & CERTIFICATIONS</span>
          </div>
          <span className="text-[10px] font-mono text-slate-400">
            {ACHIEVEMENTS.length} VERIFIED RECOGNITIONS
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ACHIEVEMENTS.map((ach) => {
            const isTrophy = ach.icon === 'Trophy';
            const isAward = ach.icon === 'Award';
            return (
              <div
                key={ach.id}
                className="p-4 sm:p-5 bg-black/80 border border-white/10 hover:border-[#00D9FF]/40 transition-all duration-300 corner-crosshair flex flex-col justify-between space-y-3"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2 py-0.5 text-[10px] font-mono uppercase bg-amber-400/10 border border-amber-400/30 text-amber-300 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                      {ach.badge}
                    </span>
                    {ach.date && (
                      <span className="text-[10px] font-mono text-slate-400">
                        {ach.date}
                      </span>
                    )}
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-slate-950 border border-white/10 shrink-0 text-[#00D9FF]">
                      {isTrophy ? (
                        <Trophy className="w-4 h-4 text-amber-400" />
                      ) : isAward ? (
                        <Award className="w-4 h-4 text-[#00D9FF]" />
                      ) : (
                        <Sparkles className="w-4 h-4 text-emerald-400" />
                      )}
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-space font-medium text-white tracking-wide uppercase leading-snug">
                        {ach.title}
                      </h4>
                      <div className="text-[11px] font-mono text-[#8BE9FD] mt-0.5">
                        {ach.issuer}
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    {ach.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
