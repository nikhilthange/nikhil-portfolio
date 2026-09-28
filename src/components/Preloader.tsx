import React, { useEffect, useState, useCallback } from 'react';

interface PreloaderProps {
  onComplete?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const name = "NIKHIL ANKUSH THANGE";
  const [visibleCount, setVisibleCount] = useState(0);
  const [subtitleVisible, setSubtitleVisible] = useState(false);
  const [fadingOut, setFadingOut] = useState(false);
  const [hidden, setHidden] = useState(() => {
    try {
      return sessionStorage.getItem('nt_preloader_seen') === '1';
    } catch {
      return false;
    }
  });

  const dismissPreloader = useCallback(() => {
    try {
      sessionStorage.setItem('nt_preloader_seen', '1');
    } catch {
      // Ignore sessionStorage errors
    }
    setFadingOut(true);
    setTimeout(() => {
      setHidden(true);
      onComplete?.();
    }, 250);
  }, [onComplete]);

  // Keyboard shortcut (Escape or Space) to skip preloader instantly
  useEffect(() => {
    if (hidden) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === ' ') {
        e.preventDefault();
        dismissPreloader();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [hidden, dismissPreloader]);

  useEffect(() => {
    if (hidden) return;

    // Fast reveal: 16ms per character (~300ms total)
    const interval = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev < name.length) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setSubtitleVisible(true);
          return prev;
        }
      });
    }, 16);

    return () => clearInterval(interval);
  }, [hidden]);

  useEffect(() => {
    if (hidden || !subtitleVisible) return;

    const timer = setTimeout(() => {
      setFadingOut(true);
    }, 280);

    const hideTimer = setTimeout(() => {
      try {
        sessionStorage.setItem('nt_preloader_seen', '1');
      } catch {
        // Ignore
      }
      setHidden(true);
      onComplete?.();
    }, 550);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, [subtitleVisible, hidden, onComplete]);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center transition-opacity duration-300 select-none ${
        fadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      onClick={dismissPreloader}
    >
      <div className="text-center space-y-5 px-6 max-w-4xl cursor-pointer">
        <h1 className="text-white text-2xl sm:text-4xl md:text-6xl font-light tracking-[0.3em] sm:tracking-[0.35em] font-space leading-relaxed">
          {name.split('').map((char, index) => (
            <span
              key={index}
              className={`transition-opacity duration-150 ${
                index < visibleCount ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {char}
            </span>
          ))}
        </h1>

        <div className="overflow-hidden">
          <div
            className={`text-[#00D9FF] text-[10px] sm:text-xs md:text-sm tracking-[0.4em] sm:tracking-[0.5em] font-space uppercase transition-all duration-300 transform ${
              subtitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
          >
            FULL STACK & AI SYSTEMS ENGINEER
          </div>
        </div>
      </div>

      {/* Instant Skip & Enter Cue for Recruiters */}
      <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between pointer-events-none">
        <span className="text-[10px] font-mono text-slate-400 hidden sm:inline">
          [ Click anywhere or press ESC to enter immediately ]
        </span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            dismissPreloader();
          }}
          className="pointer-events-auto ml-auto px-3.5 py-1.5 bg-black/90 border border-[#00D9FF] text-[#00D9FF] hover:bg-[#00D9FF] hover:text-black transition-all text-[11px] font-mono uppercase tracking-wider flex items-center gap-1.5 shadow-[0_0_15px_rgba(0,217,255,0.3)]"
          aria-label="Skip cinematic preloader and enter portfolio"
        >
          <span>[ ENTER PORTFOLIO (ESC) &rarr; ]</span>
        </button>
      </div>
    </div>
  );
};
