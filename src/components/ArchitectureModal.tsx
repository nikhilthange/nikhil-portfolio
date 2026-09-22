import React, { useEffect } from 'react';
import { X, Cpu, Camera, MapPin, Zap, FileText, Mic, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';
import type { Project } from '../data/portfolioData';

interface ArchitectureModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ArchitectureModal: React.FC<ArchitectureModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Camera':
        return <Camera className="w-4 h-4 text-[#00D9FF]" />;
      case 'Cpu':
        return <Cpu className="w-4 h-4 text-[#8BE9FD]" />;
      case 'MapPin':
        return <MapPin className="w-4 h-4 text-emerald-400" />;
      case 'Zap':
        return <Zap className="w-4 h-4 text-[#00D9FF]" />;
      case 'FileText':
        return <FileText className="w-4 h-4 text-[#00D9FF]" />;
      case 'Mic':
        return <Mic className="w-4 h-4 text-[#8BE9FD]" />;
      case 'Sparkles':
        return <Sparkles className="w-4 h-4 text-purple-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-4 h-4 text-emerald-400" />;
      default:
        return <Zap className="w-4 h-4 text-[#00D9FF]" />;
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 xs:p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-[#070b14] border border-[#00D9FF]/30 corner-crosshair p-4 sm:p-6 md:p-8 shadow-2xl space-y-5 sm:space-y-6 font-sans"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-white/10">
          <div>
            <div className="text-xs font-space tracking-widest text-[#00D9FF] uppercase font-semibold">
              SYSTEM_ARCHITECTURE // DATAFLOW_PIPELINE
            </div>
            <h3 className="text-xl sm:text-2xl font-space font-medium uppercase text-white tracking-wide mt-1">
              {project.architecture.title}
            </h3>
            <p className="text-xs text-slate-400 font-mono mt-0.5">
              {project.title} — Subsystem Integration & Processing Stages
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 bg-black border border-white/20 text-slate-300 hover:text-white hover:border-[#00D9FF] transition-colors"
            aria-label="Close Architecture Modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Pipeline Steps Grid */}
        <div className="space-y-3">
          <div className="text-[11px] font-space tracking-widest text-slate-400 uppercase">
            EXECUTION FLOW STAGES:
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {project.architecture.flow.map((item) => (
              <div
                key={item.step}
                className="p-4 bg-black/80 border border-white/10 hover:border-[#00D9FF]/40 transition-colors flex flex-col justify-between space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold text-[#00D9FF] bg-[#00D9FF]/10 px-2 py-0.5 border border-[#00D9FF]/30">
                    STAGE {item.step}
                  </span>
                  <div className="p-1.5 bg-slate-950 border border-white/5">
                    {getStepIcon(item.icon)}
                  </div>
                </div>
                <h4 className="text-sm font-space font-medium text-white tracking-wide">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack & Key Specs */}
        <div className="pt-4 border-t border-white/10 space-y-3">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span key={tech} className="cyber-tag">
                {tech}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
            {project.metrics.map((m) => (
              <div key={m.label} className="p-2.5 bg-slate-950 border border-white/5 text-center">
                <div className="text-base font-bold font-mono text-[#00D9FF]">{m.value}</div>
                <div className="text-[10px] text-slate-400 font-space tracking-wider uppercase mt-0.5">{m.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            BENCHMARKED & PRODUCTION TESTED
          </span>

          <div className="flex items-center gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cyber-primary py-1.5 px-3 text-xs"
              >
                <span>[ Live Deployment ]</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              onClick={onClose}
              className="btn-cyber-outline py-1.5 px-3 text-xs"
            >
              [ Close ]
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
