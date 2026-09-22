import React from 'react';
import { TELEMETRY_STATS } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative z-10 scroll-mt-16 lg:scroll-mt-0">
      {/* Section Header */}
      <div className="space-y-2 mb-8 sm:mb-12 text-left">
        <h2 className="text-[10px] sm:text-xs font-space tracking-[0.2em] sm:tracking-[0.25em] text-[#00D9FF] uppercase font-semibold">
          01 // ABOUT // SYSTEM_PROFILE
        </h2>
        <h3 className="text-xl sm:text-2xl md:text-3xl font-light font-space tracking-wider uppercase text-white leading-snug">
          ENGINEERING PHILOSOPHY & DISTRIBUTED SYSTEMS
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 font-light max-w-3xl leading-relaxed">
          Technical overview documenting high-concurrency microservice scaling, custom YOLOv8 computer vision inference, and reactive React 19 architectures.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
        {/* Left Column: Core Dossier */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-4 sm:p-6 bg-black/80 border border-[#00D9FF]/20 corner-crosshair space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-white/10 text-[10px] sm:text-xs font-space tracking-widest text-[#00D9FF] uppercase">
              <span>SYSTEM_SPECIFICATION // PROFILE</span>
              <span className="text-emerald-400">STATUS: PRODUCTION_READY</span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
              I am a <strong className="text-white font-medium">Full Stack Software Engineer</strong> dedicated to building fault-tolerant, high-throughput web applications and AI-driven platforms. My core focus lies in architecting distributed backend services that sustain <strong className="text-[#00D9FF] font-mono">500+ concurrent operations</strong> at sub-50ms P95 latency while optimizing frontend delivery to achieve <strong className="text-[#8BE9FD] font-mono">&lt;800ms First Contentful Paint (FCP)</strong>.
            </p>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
              From fine-tuning <strong className="text-white font-medium">YOLOv8 PyTorch vision models</strong> for real-time civic triage to streaming <strong className="text-[#00D9FF] font-medium">NVIDIA NIM LLMs</strong> over bidirectional WebSockets, I design end-to-end pipelines that bridge machine intelligence with robust, containerized cloud infrastructure on AWS.
            </p>

            {/* Quick Bullet Checklist */}
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 pt-2 text-[11px] sm:text-xs font-mono text-slate-300">
              <div className="flex items-center gap-2 p-2 bg-slate-950/80 border border-white/5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D9FF] shrink-0"></span>
                <span>Sub-50ms P95 Microservices</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-slate-950/80 border border-white/5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D9FF] shrink-0"></span>
                <span>91.4% mAP50 Vision Precision</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-slate-950/80 border border-white/5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D9FF] shrink-0"></span>
                <span>React 19 & TanStack Query SPA</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-slate-950/80 border border-white/5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D9FF] shrink-0"></span>
                <span>85%+ Jest & Supertest CI/CD</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Key Metrics HUD */}
        <div className="lg:col-span-5 space-y-3">
          <div className="text-[10px] sm:text-xs font-space tracking-widest text-[#00D9FF] uppercase">
            TELEMETRY // BENCHMARKS
          </div>

          <div className="space-y-2.5">
            {TELEMETRY_STATS.map((stat) => (
              <div
                key={stat.label}
                className="p-3.5 sm:p-4 bg-black/80 border border-white/10 hover:border-[#00D9FF]/40 transition-colors"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-1 text-xs font-mono">
                  <span className="text-slate-400 uppercase tracking-wider text-[11px] sm:text-xs">{stat.label}</span>
                  <span className="text-sm sm:text-base md:text-lg font-bold font-mono text-[#00D9FF]">
                    {stat.value} <span className="text-[10px] text-slate-400 uppercase font-normal">{stat.unit}</span>
                  </span>
                </div>
                <div className="text-[10px] sm:text-[11px] text-slate-500 font-light mt-1 leading-snug">
                  {stat.subtext}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
