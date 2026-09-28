import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  ExternalLink, 
  Eye, 
  Check, 
  Copy, 
  ShieldCheck, 
  Sparkles, 
  Layers, 
  Award,
  Maximize2
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Resume: React.FC = () => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [showEmbeddedPreview, setShowEmbeddedPreview] = useState(true);

  const resumePath = PERSONAL_INFO.resumeUrl || '/thangenikhil.pdf';
  const downloadFileName = PERSONAL_INFO.resumeFileName || 'Nikhil_Thange_Resume.pdf';

  const handleCopyLink = () => {
    const fullUrl = `${window.location.origin}${resumePath}`;
    navigator.clipboard.writeText(fullUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <section id="resume" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative z-10 scroll-mt-16 lg:scroll-mt-0">
      {/* Section Header */}
      <div className="space-y-2 mb-8 sm:mb-10 text-left">
        <h2 className="text-[10px] sm:text-xs font-space tracking-[0.2em] sm:tracking-[0.25em] text-[#00D9FF] uppercase font-semibold">
          05 // RESUME // OFFICIAL_DOSSIER
        </h2>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-light font-space tracking-wider uppercase text-white leading-snug">
              CURRICULUM VITAE & TECHNICAL DOSSIER
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 font-light max-w-2xl leading-relaxed mt-1">
              Access the official, verified ATS-compatible PDF resume of Nikhil Ankush Thange. Available for direct in-browser inspection and instant high-resolution download.
            </p>
          </div>

          {/* Quick Action Buttons on top */}
          <div className="flex flex-wrap items-center gap-2.5 self-stretch sm:self-auto">
            {/* View in new tab */}
            <a
              id="view-resume-top-btn"
              href={resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cyber-outline py-2 px-3.5 text-xs flex-1 sm:flex-initial"
              title="Open PDF in a new tab"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#00D9FF]" />
              <span>[ Open In New Tab ]</span>
            </a>

            {/* Download Button */}
            <a
              id="download-resume-top-btn"
              href={resumePath}
              download={downloadFileName}
              className="btn-cyber-primary py-2 px-4 text-xs shadow-[0_0_15px_rgba(0,217,255,0.3)] flex-1 sm:flex-initial"
              title="Download exact PDF resume file"
            >
              <Download className="w-3.5 h-3.5" />
              <span>[ Download Resume ]</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Resume Hub Card */}
      <div className="bg-[#050913]/90 border border-[#00D9FF]/25 corner-crosshair shadow-2xl p-5 sm:p-8 space-y-6 text-slate-200">
        {/* Dossier Meta Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-none bg-black border border-[#00D9FF]/40 flex items-center justify-center text-[#00D9FF] shrink-0 shadow-[0_0_15px_rgba(0,217,255,0.2)]">
              <FileText className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>

            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <h4 className="text-base sm:text-lg font-space font-medium text-white tracking-wide uppercase">
                  {PERSONAL_INFO.name} — Resume.pdf
                </h4>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono uppercase">
                  <ShieldCheck className="w-3 h-3" /> VERIFIED & ATS-OPTIMIZED
                </span>
              </div>
              <p className="text-xs font-mono text-[#8BE9FD]">
                Full Stack Software Engineer • High-Concurrency Systems & AI
              </p>
            </div>
          </div>

          {/* Telemetry / File Specs Badges */}
          <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono text-slate-300">
            <div className="px-2.5 py-1 bg-black/60 border border-white/10">
              <span className="text-slate-500">FORMAT:</span> <span className="text-white">PDF Document</span>
            </div>
            <div className="px-2.5 py-1 bg-black/60 border border-white/10">
              <span className="text-slate-500">SIZE:</span> <span className="text-[#00D9FF]">~200 KB</span>
            </div>
            <div className="px-2.5 py-1 bg-black/60 border border-white/10">
              <span className="text-slate-500">YEAR:</span> <span className="text-emerald-400">2026 Updated</span>
            </div>
          </div>
        </div>

        {/* Highlighted Engineering Summary Tags */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="p-3 bg-black/50 border border-white/10 flex items-start gap-3">
            <Layers className="w-4 h-4 text-[#00D9FF] shrink-0 mt-0.5" />
            <div className="space-y-0.5 text-xs">
              <span className="font-space font-medium text-white block">Full Stack Stack</span>
              <span className="text-slate-400 font-light text-[11px] leading-relaxed">
                React 19, TypeScript, Node.js, Express, PostgreSQL, MongoDB, Redis
              </span>
            </div>
          </div>

          <div className="p-3 bg-black/50 border border-white/10 flex items-start gap-3">
            <Sparkles className="w-4 h-4 text-[#8BE9FD] shrink-0 mt-0.5" />
            <div className="space-y-0.5 text-xs">
              <span className="font-space font-medium text-white block">AI & Computer Vision</span>
              <span className="text-slate-400 font-light text-[11px] leading-relaxed">
                YOLOv8 PyTorch Pipeline (91.4% mAP50), NVIDIA NIM LLM Streaming
              </span>
            </div>
          </div>

          <div className="p-3 bg-black/50 border border-white/10 flex items-start gap-3">
            <Award className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div className="space-y-0.5 text-xs">
              <span className="font-space font-medium text-white block">Experience & Honors</span>
              <span className="text-slate-400 font-light text-[11px] leading-relaxed">
                SDE Intern at Chitralai • Top 7 MUSA Codex • Quasar Finalist • IBM Certified
              </span>
            </div>
          </div>
        </div>

        {/* Primary Interactive Action Bar */}
        <div className="p-4 sm:p-5 bg-black/80 border border-[#00D9FF]/30 flex flex-col sm:flex-row items-center justify-between gap-3.5">
          <div className="text-center sm:text-left">
            <div className="text-xs font-space uppercase tracking-wider text-white font-medium">
              Official Document Access Protocol
            </div>
            <div className="text-[11px] text-slate-400 font-mono mt-0.5">
              Target File: <span className="text-[#00D9FF]">/public/thangenikhil.pdf</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2.5 w-full sm:w-auto">
            {/* View Fullscreen in New Window */}
            <a
              id="resume-view-btn"
              href={resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cyber-outline py-2 px-4 text-xs font-space flex items-center justify-center gap-2 flex-1 sm:flex-initial"
            >
              <Eye className="w-3.5 h-3.5 text-[#00D9FF]" />
              <span>[ VIEW RESUME ]</span>
            </a>

            {/* Direct Download File */}
            <a
              id="resume-download-btn"
              href={resumePath}
              download={downloadFileName}
              className="btn-cyber-primary py-2 px-5 text-xs font-space flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,217,255,0.4)] flex-1 sm:flex-initial"
            >
              <Download className="w-3.5 h-3.5" />
              <span>[ DOWNLOAD PDF ]</span>
            </a>

            {/* Toggle Embedded Frame */}
            <button
              onClick={() => setShowEmbeddedPreview(!showEmbeddedPreview)}
              className="btn-cyber-outline py-2 px-3 text-xs hidden md:inline-flex items-center gap-1.5"
              title="Toggle in-page document preview"
            >
              <Maximize2 className="w-3 h-3" />
              <span>{showEmbeddedPreview ? '[ Hide Preview ]' : '[ Show Preview ]'}</span>
            </button>

            {/* Copy Direct URL */}
            <button
              onClick={handleCopyLink}
              className="btn-cyber-outline py-2 px-3 text-xs flex items-center gap-1.5"
              title="Copy direct file URL"
            >
              {copiedLink ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
              <span>{copiedLink ? '[ Copied! ]' : '[ Copy Link ]'}</span>
            </button>
          </div>
        </div>

        {/* Live Interactive In-Page PDF Frame Viewer */}
        {showEmbeddedPreview && (
          <div className="space-y-2 pt-2 animate-fadeIn">
            <div className="flex items-center justify-between px-3 py-2 bg-[#090e1a] border border-white/10 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00D9FF] animate-ping" />
                <span className="text-[#00D9FF] font-semibold">LIVE_PDF_STREAM</span>
                <span className="hidden sm:inline text-slate-500">| thangenikhil.pdf</span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00D9FF] transition-colors flex items-center gap-1 text-[11px]"
                >
                  <ExternalLink className="w-3 h-3" /> Open Native Viewer
                </a>
              </div>
            </div>

            <div className="w-full h-[550px] sm:h-[700px] lg:h-[800px] bg-black border border-[#00D9FF]/20 overflow-hidden relative">
              <iframe
                src={`${resumePath}#toolbar=1&navpanes=0&scrollbar=1`}
                title="Nikhil Thange Resume PDF Viewer"
                className="w-full h-full border-0"
              />
              
              {/* Fallback Overlay Info for browsers with blocked iframes/mobile view */}
              <div className="absolute bottom-3 right-3 sm:hidden bg-black/90 p-2 border border-white/20 text-[10px] font-mono">
                <a href={resumePath} target="_blank" rel="noreferrer" className="text-[#00D9FF] underline">
                  Tap to view full PDF &rarr;
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
