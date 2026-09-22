import React, { useEffect } from 'react';
import { X, Download, ExternalLink, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const resumePath = PERSONAL_INFO.resumeUrl || '/thangenikhil.pdf';
  const downloadFileName = PERSONAL_INFO.resumeFileName || 'Nikhil_Thange_Resume.pdf';

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 xs:p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-5xl h-[92vh] flex flex-col bg-[#070b14] border border-[#00D9FF]/40 corner-crosshair shadow-2xl overflow-hidden font-sans"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 px-4 sm:px-6 py-3 bg-[#0d1322] border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="p-1 bg-black border border-[#00D9FF]/40 text-[#00D9FF]">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <span className="font-space font-medium text-white text-xs sm:text-sm tracking-wider uppercase block">
                {PERSONAL_INFO.name} — OFFICIAL DOSSIER
              </span>
              <span className="text-[10px] font-mono text-[#8BE9FD]">
                /public/thangenikhil.pdf
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* View in new tab */}
            <a
              href={resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cyber-outline py-1.5 px-3 text-xs flex items-center gap-1.5"
              title="Open PDF in new tab"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#00D9FF]" />
              <span className="hidden xs:inline">[ View Tab ]</span>
            </a>

            {/* Direct Download */}
            <a
              href={resumePath}
              download={downloadFileName}
              className="btn-cyber-primary py-1.5 px-3.5 text-xs shadow-[0_0_15px_rgba(0,217,255,0.3)] flex items-center gap-1.5"
              title="Download exact PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>[ Download ]</span>
            </a>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1.5 bg-black border border-white/20 text-slate-300 hover:text-white hover:border-[#00D9FF] transition-colors ml-1"
              aria-label="Close Resume Modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Live Interactive PDF Viewer */}
        <div className="flex-1 bg-black overflow-hidden relative">
          <iframe
            src={`${resumePath}#toolbar=1&navpanes=0&scrollbar=1`}
            title="Nikhil Thange Resume Viewer"
            className="w-full h-full border-0"
          />

          {/* Fallback bar */}
          <div className="absolute bottom-2 left-2 right-2 sm:hidden bg-black/95 p-2.5 border border-white/20 text-xs font-mono text-center flex items-center justify-around">
            <a href={resumePath} target="_blank" rel="noreferrer" className="text-[#00D9FF] underline font-semibold">
              Open Full Screen PDF
            </a>
            <a href={resumePath} download={downloadFileName} className="text-emerald-400 underline font-semibold">
              Download File
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
