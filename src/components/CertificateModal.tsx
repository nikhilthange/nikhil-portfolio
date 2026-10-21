import React, { useEffect } from 'react';
import { X, Download, ExternalLink, Award, CheckCircle2, Building2, Calendar, Phone, Mail, Globe, FileText } from 'lucide-react';

export interface DocumentModalData {
  title: string;
  subtitle: string;
  documentPath: string;
  downloadFileName: string;
  badge?: string;
  organization?: string;
  tenure?: string;
  signatory?: string;
  quote?: string;
  website?: string;
  email?: string;
  phone?: string;
}

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  document?: DocumentModalData | null;
}

const DEFAULT_DOC: DocumentModalData = {
  title: 'CHITRALAI // SDE EXPERIENCE CERTIFICATE',
  subtitle: '14 Jul 2026 – 14 Oct 2026 • Issued: 15-10-2026',
  documentPath: '/chitralai-experience-certificate.pdf',
  downloadFileName: 'Nikhil_Thange_Chitralai_Experience_Certificate.pdf',
  badge: 'VERIFIED',
  organization: 'Chitralai (T-Hub Phase 2, Madhapur, Hyderabad)',
  tenure: '14th July 2026 – 14th October 2026',
  signatory: 'Bindu Potti (Co-Founder)',
  quote: 'During his internship at Chitralai, he contributed to software development activities, including assisting with feature development, writing and reviewing code, testing and debugging application functionality, and supporting software maintenance. He collaborated with the team to troubleshoot technical issues and improve application performance. We found him to be sincere, dedicated, and professional in his work and wish his continued success in future endeavors.',
  website: 'https://www.chitralai.in',
  email: 'contact@chitralai.in',
  phone: '+91-89777 25553'
};

export const CertificateModal: React.FC<CertificateModalProps> = ({ isOpen, onClose, document }) => {
  const activeDoc = document || DEFAULT_DOC;
  const certificatePath = activeDoc.documentPath;
  const downloadFileName = activeDoc.downloadFileName;

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
        className="w-full max-w-5xl h-[94vh] flex flex-col bg-[#070b14] border border-[#00D9FF]/40 corner-crosshair shadow-2xl overflow-hidden font-sans"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-3 bg-[#0d1322] border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 bg-black border border-[#00D9FF]/40 text-[#00D9FF]">
              {activeDoc.badge === 'ACTIVE' ? (
                <FileText className="w-4 h-4 text-emerald-400" />
              ) : (
                <Award className="w-4 h-4 text-emerald-400" />
              )}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-space font-medium text-white text-xs sm:text-sm tracking-wider uppercase block">
                  {activeDoc.title}
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 px-1.5 py-0.2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono">
                  <CheckCircle2 className="w-2.5 h-2.5" /> {activeDoc.badge || 'VERIFIED'}
                </span>
              </div>
              <span className="text-[10px] font-mono text-[#8BE9FD]">
                {activeDoc.subtitle}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* View in new tab */}
            <a
              href={certificatePath}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cyber-outline py-1.5 px-3 text-xs flex items-center gap-1.5"
              title="Open document PDF in new browser tab"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#00D9FF]" />
              <span className="hidden xs:inline">[ View Tab ]</span>
            </a>

            {/* Direct Download */}
            <a
              href={certificatePath}
              download={downloadFileName}
              className="btn-cyber-primary py-1.5 px-3.5 text-xs shadow-[0_0_15px_rgba(0,217,255,0.3)] flex items-center gap-1.5"
              title="Download official PDF document"
            >
              <Download className="w-3.5 h-3.5" />
              <span>[ Download PDF ]</span>
            </a>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1.5 bg-black border border-white/20 text-slate-300 hover:text-white hover:border-[#00D9FF] transition-colors ml-1"
              aria-label="Close Document Modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Corporate & Authority Telemetry Bar */}
        <div className="bg-[#050913] border-b border-white/10 p-3 sm:p-4 text-xs font-mono space-y-2">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-3 text-slate-300 text-[11px]">
              {activeDoc.organization && (
                <span className="flex items-center gap-1 text-[#00D9FF]">
                  <Building2 className="w-3.5 h-3.5" /> {activeDoc.organization}
                </span>
              )}
              {activeDoc.tenure && (
                <>
                  <span className="text-slate-600 hidden sm:inline">|</span>
                  <span className="flex items-center gap-1 text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-emerald-400" /> Tenure: {activeDoc.tenure}
                  </span>
                </>
              )}
              {activeDoc.signatory && (
                <>
                  <span className="text-slate-600 hidden sm:inline">|</span>
                  <span className="text-emerald-400 font-medium">
                    Authority: {activeDoc.signatory}
                  </span>
                </>
              )}
            </div>

            <div className="flex items-center gap-3 text-[10px] text-slate-400">
              {activeDoc.website && (
                <a href={activeDoc.website} target="_blank" rel="noreferrer" className="hover:text-[#00D9FF] flex items-center gap-1 transition-colors">
                  <Globe className="w-3 h-3 text-[#00D9FF]" /> {activeDoc.website.replace('https://', '')}
                </a>
              )}
              {activeDoc.email && (
                <>
                  <span className="text-slate-700">|</span>
                  <a href={`mailto:${activeDoc.email}`} className="hover:text-[#00D9FF] flex items-center gap-1 transition-colors">
                    <Mail className="w-3 h-3 text-[#00D9FF]" /> {activeDoc.email}
                  </a>
                </>
              )}
              {activeDoc.phone && (
                <>
                  <span className="text-slate-700">|</span>
                  <span className="flex items-center gap-1">
                    <Phone className="w-3 h-3 text-[#00D9FF]" /> {activeDoc.phone}
                  </span>
                </>
              )}
            </div>
          </div>

          {activeDoc.quote && (
            <div className="p-2.5 bg-black/60 border border-[#00D9FF]/20 text-[11px] text-slate-300 font-light leading-relaxed">
              <span className="text-[#00D9FF] font-medium font-mono mr-1.5">[OFFICIAL RECORD / DUTIES]:</span>
              <span className="italic text-slate-200">
                &ldquo;{activeDoc.quote}&rdquo;
              </span>
            </div>
          )}
        </div>

        {/* Live Interactive PDF Viewer */}
        <div className="flex-1 bg-black overflow-hidden relative">
          <iframe
            src={`${certificatePath}#toolbar=1&navpanes=0&scrollbar=1`}
            title={activeDoc.title}
            className="w-full h-full border-0"
            tabIndex={-1}
            loading="lazy"
          />

          {/* Mobile Fallback Overlay */}
          <div className="absolute bottom-2 left-2 right-2 sm:hidden bg-black/95 p-2.5 border border-white/20 text-xs font-mono text-center flex items-center justify-around">
            <a href={certificatePath} target="_blank" rel="noreferrer" className="text-[#00D9FF] underline font-semibold">
              Open Full Screen PDF
            </a>
            <a href={certificatePath} download={downloadFileName} className="text-emerald-400 underline font-semibold">
              Download PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateModal;
