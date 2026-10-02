import React, { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Preloader } from './components/Preloader';
import { ParticleBackground } from './components/ParticleBackground';
import { Sidebar } from './components/Sidebar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { InteractiveTerminal } from './components/InteractiveTerminal';
import { ResumeModal } from './components/ResumeModal';

export const App: React.FC = () => {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  // Global Keyboard Shortcut: Ctrl+K or ` / ~ to toggle CLI
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
      } else if (e.key === '`' && !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
      } else if (e.key === 'Escape') {
        setIsTerminalOpen(false);
        setIsResumeModalOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Ensure landing page starts at the top (Hero) and prevent browsers from restoring previous scrolled positions
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    if (!window.location.hash || window.location.hash === '#hero') {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative selection:bg-[#00D9FF] selection:text-black flex flex-col lg:flex-row">
      {/* Cinematic Intro Preloader */}
      <Preloader
        onComplete={() => {
          if (!window.location.hash || window.location.hash === '#hero') {
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
          }
        }}
      />

      {/* Ambient Neural Particle Background */}
      <ParticleBackground />

      {/* Sleek Fixed Cyber HUD Sidebar Navigation */}
      <Sidebar onOpenTerminal={() => setIsTerminalOpen(true)} />

      {/* Main Content Area with Desktop Left Margin for Sidebar */}
      <div className="flex-1 lg:pl-64 xl:pl-72 w-full min-w-0 flex flex-col">
        <main className="relative z-10 flex-1">
          {/* 00 // HOME */}
          <Hero
            onOpenTerminal={() => setIsTerminalOpen(true)}
            onOpenResumeModal={() => setIsResumeModalOpen(true)}
          />

          {/* 01 // ABOUT */}
          <About />

          {/* 02 // EXPERIENCE */}
          <Experience />

          {/* 03 // PROJECTS */}
          <Projects />

          {/* 04 // SKILLS */}
          <Skills />

          {/* 05 // RESUME */}
          <Resume />

          {/* 06 // CONTACT */}
          <Contact />
        </main>

        {/* Cyber HUD Footer */}
        <Footer onOpenTerminal={() => setIsTerminalOpen(true)} />
      </div>

      {/* Interactive Developer CLI Shell */}
      <InteractiveTerminal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />

      {/* Resume Modal for quick standalone popups */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

      {/* Vercel Analytics — tracks every portfolio visit automatically */}
      <Analytics />
    </div>
  );
};

export default App;
