import React, { useState, useEffect } from 'react';
import { Terminal, FileText, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

interface HeroProps {
  onOpenTerminal: () => void;
  onOpenResumeModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTerminal, onOpenResumeModal }) => {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTagline = PERSONAL_INFO.taglines[taglineIndex];
    let timer: number;

    if (!isDeleting && displayedText.length < currentTagline.length) {
      timer = window.setTimeout(() => {
        setDisplayedText(currentTagline.substring(0, displayedText.length + 1));
      }, 55);
    } else if (!isDeleting && displayedText.length === currentTagline.length) {
      timer = window.setTimeout(() => {
        setIsDeleting(true);
      }, 2400);
    } else if (isDeleting && displayedText.length > 0) {
      timer = window.setTimeout(() => {
        setDisplayedText(currentTagline.substring(0, displayedText.length - 1));
      }, 30);
    } else if (isDeleting && displayedText.length === 0) {
      timer = window.setTimeout(() => {
        setIsDeleting(false);
        setTaglineIndex((prev) => (prev + 1) % PERSONAL_INFO.taglines.length);
      }, 180);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, taglineIndex]);

  return (
    <section id="hero" className="relative min-h-[90vh] sm:min-h-[95vh] flex flex-col justify-center pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 cyber-glow-bg cyber-grid">
      <div className="max-w-6xl mx-auto w-full space-y-6 sm:space-y-8 relative z-10 text-left">
        {/* Status Callouts */}
        <div className="flex flex-wrap items-center gap-2.5">
          <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 bg-black/80 border border-[#00D9FF]/40 text-[#00D9FF] text-[10px] sm:text-xs font-space tracking-[0.15em] sm:tracking-[0.2em] uppercase">
            <span className="w-2 h-2 rounded-full bg-[#00D9FF] animate-pulse shrink-0" />
            <span>SYSTEM_INIT // PROTOCOL_ONLINE</span>
          </div>

          <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 text-[10px] sm:text-xs font-mono uppercase">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span>AVAILABLE IMMEDIATELY: SDE INTERN & FULL-TIME (2026–2027)</span>
          </div>
        </div>

        {/* Massive Name Typography */}
        <div className="space-y-2 sm:space-y-3">
          <h1 className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-[0.1em] xs:tracking-[0.15em] sm:tracking-[0.25em] font-space text-white leading-tight uppercase select-none break-words">
            NIKHIL <span className="text-[#00D9FF] font-semibold">THANGE</span>
          </h1>

          <div className="text-[11px] xs:text-xs sm:text-sm md:text-base font-space tracking-[0.15em] sm:tracking-[0.25em] md:tracking-[0.35em] text-[#8BE9FD] uppercase font-light leading-relaxed">
            FULL STACK SOFTWARE ENGINEER // DISTRIBUTED SYSTEMS & AI PIPELINES
          </div>
        </div>

        {/* Dynamic Terminal Prompt Line */}
        <div className="p-3 sm:p-4 bg-black/90 border border-[#00D9FF]/30 corner-crosshair max-w-3xl overflow-hidden">
          <div className="flex items-start sm:items-center gap-2 text-xs font-mono text-[#00D9FF] flex-wrap sm:flex-nowrap">
            <span className="text-emerald-400 font-bold shrink-0">$</span>
            <span className="text-slate-400 shrink-0">arch-sys &gt;</span>
            <span className="text-white font-medium break-all sm:break-normal">{displayedText}</span>
            <span className="inline-block w-2 h-4 bg-[#00D9FF] animate-blink shrink-0" />
          </div>
        </div>

        {/* Bio Paragraph */}
        <p className="text-xs xs:text-sm sm:text-base text-slate-300 font-light max-w-3xl leading-relaxed tracking-wide">
          Full Stack Software Engineer specializing in <strong className="text-white font-medium">high-concurrency microservices</strong>, 
          reactive <strong className="text-[#00D9FF] font-medium">React 19 / TypeScript</strong> architectures, and 
          <strong className="text-[#8BE9FD] font-medium"> computer vision AI pipelines</strong>. Engineered distributed backends sustaining 
          <strong className="text-emerald-400 font-mono font-medium"> 500+ concurrent requests (sub-50ms P95)</strong> with Redis/MongoDB and deployed production applications on AWS with automated CI/CD.
        </p>

        {/* Recruiter Quick Snapshot */}
        <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono text-slate-400 pt-1">
          <span className="text-[#00D9FF]">RECRUITER_QUICKVIEW:</span>
          <span className="px-2 py-0.5 bg-black/70 border border-white/10 text-slate-300">Mumbai, India (Open to Remote / Relocation)</span>
          <span className="px-2 py-0.5 bg-black/70 border border-white/10 text-slate-300">B.E. IT (Mumbai Univ, 2027) • 7.50 CGPA</span>
          <span className="px-2 py-0.5 bg-black/70 border border-emerald-500/30 text-emerald-400">Notice: Immediate</span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col xs:flex-row flex-wrap items-stretch xs:items-center gap-2.5 sm:gap-3.5 pt-2">
          <a
            id="hero-view-projects"
            href="#projects"
            className="btn-cyber-primary shadow-[0_0_15px_rgba(0,217,255,0.25)] w-full xs:w-auto text-center"
          >
            [ 01 // View Projects ]
          </a>

          {onOpenResumeModal ? (
            <button
              id="hero-quick-resume"
              onClick={onOpenResumeModal}
              className="btn-cyber-outline w-full xs:w-auto text-center flex items-center justify-center gap-1.5"
              title="Inspect ATS Resume in interactive modal"
            >
              <FileText className="w-3.5 h-3.5 text-[#00D9FF]" />
              <span>[ 02 // Inspect Resume ]</span>
            </button>
          ) : (
            <a
              id="hero-download-resume"
              href="#resume"
              className="btn-cyber-outline w-full xs:w-auto text-center"
            >
              [ 02 // Resume Record ]
            </a>
          )}

          <a
            id="hero-direct-download"
            href={PERSONAL_INFO.resumeUrl}
            download={PERSONAL_INFO.resumeFileName}
            className="btn-cyber-outline text-[#00D9FF] border-[#00D9FF]/40 w-full xs:w-auto text-center flex items-center justify-center gap-1.5"
            title="Download PDF directly to device"
          >
            <Download className="w-3.5 h-3.5" />
            <span>[ Download PDF ]</span>
          </a>

          <a
            id="hero-contact-me"
            href="#contact"
            className="btn-cyber-outline w-full xs:w-auto text-center"
          >
            [ 03 // Contact Me ]
          </a>

          <button
            onClick={onOpenTerminal}
            className="btn-cyber-outline text-slate-300 border-white/20 w-full xs:w-auto text-center flex items-center justify-center gap-1.5"
          >
            <Terminal className="w-3.5 h-3.5 text-[#00D9FF]" />
            <span>[ CLI Shell ]</span>
          </button>
        </div>

        {/* Direct Social & Channels */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-4 border-t border-white/10 text-slate-400 text-xs font-mono">
          <span className="text-slate-400 font-space tracking-wider uppercase">VERIFIED_CHANNELS:</span>
          <a
            href={PERSONAL_INFO.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00D9FF] transition-colors flex items-center gap-1.5"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
            <span>github.com/nikhilthange</span>
          </a>
          <span className="text-slate-700 hidden xs:inline">|</span>
          <a
            href={PERSONAL_INFO.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00D9FF] transition-colors flex items-center gap-1.5"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4" />
            <span>linkedin.com/in/nikhil-thange</span>
          </a>
        </div>
      </div>
    </section>
  );
};
