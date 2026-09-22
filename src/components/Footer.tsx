import React from 'react';
import { ArrowUp, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

interface FooterProps {
  onOpenTerminal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTerminal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#00D9FF]/20 bg-black text-slate-400 py-10 px-4 sm:px-6 lg:px-8 relative z-10 font-space text-xs">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand & Stack */}
        <div className="flex flex-col items-center sm:items-start gap-1">
          <div className="flex items-center gap-2 text-white font-medium text-xs tracking-widest uppercase">
            <span>{PERSONAL_INFO.name}</span>
            <span className="text-[#00D9FF]">//</span>
            <span className="text-[#8BE9FD]">SYSTEM_OS</span>
          </div>
          <p className="text-slate-500 text-[10px] font-mono">
            React 19 • TypeScript • Tailwind CSS • Vite
          </p>
        </div>

        {/* Telemetry Status */}
        <div className="flex items-center gap-3 px-3 py-1 bg-slate-950 border border-white/10 text-[11px] font-mono">
          <span className="flex items-center gap-1.5 text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            SYS_ONLINE
          </span>
          <span className="text-slate-700">|</span>
          <span className="text-slate-400">P95 &lt; 50ms</span>
          <span className="text-slate-700">|</span>
          <button
            onClick={onOpenTerminal}
            className="text-[#00D9FF] hover:underline flex items-center gap-1"
          >
            <Terminal className="w-3 h-3" />
            <span>[ CLI ]</span>
          </button>
        </div>

        {/* Channels & Back to Top */}
        <div className="flex items-center gap-4">
          <a
            href={PERSONAL_INFO.socials.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#00D9FF] transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#00D9FF] transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <button
            onClick={scrollToTop}
            className="p-2 bg-black border border-white/20 hover:border-[#00D9FF] text-slate-300 hover:text-white transition-colors"
            title="Scroll to Top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
