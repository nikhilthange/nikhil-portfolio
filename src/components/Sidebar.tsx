import React, { useState, useEffect } from 'react';
import { 
  Home, 
  User, 
  Briefcase, 
  FolderGit2, 
  Cpu, 
  FileText, 
  Send, 
  Terminal, 
  Menu, 
  X, 
  MapPin, 
  Clock,
  Download
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

interface SidebarProps {
  onOpenTerminal: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ onOpenTerminal }) => {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  const navItems = [
    { id: 'hero', label: '00 // HOME', icon: <Home className="w-4 h-4" /> },
    { id: 'about', label: '01 // ABOUT', icon: <User className="w-4 h-4" /> },
    { id: 'experience', label: '02 // EXPERIENCE', icon: <Briefcase className="w-4 h-4" /> },
    { id: 'projects', label: '03 // PROJECTS', icon: <FolderGit2 className="w-4 h-4" /> },
    { id: 'skills', label: '04 // SKILLS', icon: <Cpu className="w-4 h-4" /> },
    { id: 'resume', label: '05 // RESUME', icon: <FileText className="w-4 h-4" /> },
    { id: 'contact', label: '06 // CONTACT', icon: <Send className="w-4 h-4" /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'resume', 'contact'];
      const scrollPosition = window.scrollY + 250;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setCurrentTime(now.toLocaleTimeString('en-US', options));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
    };
  }, []);

  const handleNavClick = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Mobile Top Navigation Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-black/95 backdrop-blur-md border-b border-[#00D9FF]/20 px-4 py-3 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2">
          <div className="px-2 py-0.5 bg-black border border-[#00D9FF] text-[#00D9FF] font-space font-bold text-xs tracking-wider">
            NT // OS
          </div>
          <span className="font-space text-xs font-semibold text-white tracking-wider uppercase truncate max-w-[160px] xs:max-w-none">
            NIKHIL THANGE
          </span>
        </a>

        <div className="flex items-center gap-2">
          <button
            onClick={onOpenTerminal}
            className="p-1.5 bg-black border border-[#00D9FF]/40 text-[#00D9FF] text-xs font-mono"
            aria-label="Open CLI"
          >
            <Terminal className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-1.5 bg-black border border-white/20 text-slate-300 hover:text-white"
            aria-label="Toggle Sidebar Navigation"
          >
            {mobileOpen ? <X className="w-5 h-5 text-[#00D9FF]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Backdrop for Mobile */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/80 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Desktop & Mobile Slide-out Sidebar Drawer */}
      <aside
        className={`fixed top-0 left-0 bottom-0 z-50 w-[80vw] max-w-[280px] lg:w-64 xl:w-72 bg-[#04070d]/95 backdrop-blur-2xl border-r border-[#00D9FF]/20 flex flex-col justify-between p-5 sm:p-6 transition-transform duration-300 ease-in-out select-none overflow-y-auto ${
          mobileOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Top: Brand & Identity */}
        <div className="space-y-5">
          <div className="flex items-start justify-between pb-4 border-b border-white/10">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <div className="px-2 py-0.5 bg-black border border-[#00D9FF] text-[#00D9FF] font-space font-bold text-xs tracking-widest shadow-[0_0_10px_rgba(0,217,255,0.3)]">
                  NT // 01
                </div>
                <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  ONLINE
                </span>
              </div>
              <h1 className="text-sm sm:text-base font-space font-medium tracking-[0.15em] text-white uppercase pt-1">
                NIKHIL THANGE
              </h1>
              <p className="text-[10px] font-mono text-slate-400 tracking-wider">
                FULL STACK & AI SYSTEMS
              </p>
            </div>

            {/* Mobile close button inside sidebar */}
            <button
              onClick={() => setMobileOpen(false)}
              className="lg:hidden p-1.5 text-slate-400 hover:text-white border border-white/10"
              aria-label="Close menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1 font-space text-xs">
            <div className="text-[10px] font-mono text-slate-400 tracking-widest uppercase px-3 pb-1">
              // INDEX_NAV
            </div>
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2 sm:py-2.5 rounded-none text-left tracking-[0.15em] uppercase transition-all duration-200 border-l-2 ${
                    isActive
                      ? 'bg-[#00D9FF]/10 text-[#00D9FF] border-[#00D9FF] font-medium shadow-[inset_0_0_10px_rgba(0,217,255,0.1)]'
                      : 'text-slate-400 hover:text-white hover:bg-white/5 border-transparent'
                  }`}
                >
                  <span className={`${isActive ? 'text-[#00D9FF]' : 'text-slate-400'}`}>
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom: Telemetry, CLI Trigger & Socials */}
        <div className="space-y-3.5 pt-4 border-t border-white/10 font-mono text-xs mt-4">
          {/* Real-time IST Status */}
          <div className="p-2.5 sm:p-3 bg-black/60 border border-white/5 space-y-1">
            <div className="flex items-center justify-between text-[11px] text-slate-400">
              <span className="flex items-center gap-1 text-[#00D9FF]">
                <MapPin className="w-3 h-3" /> MUMBAI
              </span>
              <span className="flex items-center gap-1 text-slate-300">
                <Clock className="w-3 h-3 text-[#8BE9FD]" /> {currentTime || 'IST'}
              </span>
            </div>
            <div className="text-[10px] text-emerald-400 flex items-center gap-1.5 pt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>STATUS: READY_TO_DEPLOY</span>
            </div>
          </div>

          {/* Quick 1-Click Resume Download for Recruiters */}
          <a
            href={PERSONAL_INFO.resumeUrl}
            download={PERSONAL_INFO.resumeFileName}
            className="w-full btn-cyber-primary py-2 text-[11px] flex items-center justify-center gap-2 shadow-[0_0_12px_rgba(0,217,255,0.25)]"
            title="Download ATS-compatible PDF resume file"
          >
            <Download className="w-3.5 h-3.5" />
            <span>[ DOWNLOAD RESUME ]</span>
          </a>

          {/* CLI Launcher Button */}
          <button
            onClick={() => {
              setMobileOpen(false);
              onOpenTerminal();
            }}
            className="w-full btn-cyber-outline py-2 text-[11px] flex items-center justify-center gap-2"
          >
            <Terminal className="w-3.5 h-3.5 text-[#00D9FF]" />
            <span>[ LAUNCH CLI ]</span>
          </button>

          {/* Social Links */}
          <div className="flex items-center justify-between px-1 text-slate-400">
            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noreferrer"
              className="p-1.5 hover:text-[#00D9FF] transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-1.5 hover:text-[#00D9FF] transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-[10px] font-mono hover:text-[#00D9FF] transition-colors truncate max-w-[120px]"
              title={PERSONAL_INFO.email}
            >
              nikhilthange75...
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};
