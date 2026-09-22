import React, { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const name = "NIKHIL ANKUSH THANGE";
  const [visibleCount, setVisibleCount] = useState(0);
  const [subtitleVisible, setSubtitleVisible] = useState(false);
  const [fadingOut, setFadingOut] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Reveal letters one by one
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
    }, 45);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (subtitleVisible) {
      const timer = setTimeout(() => {
        setFadingOut(true);
      }, 700);

      const hideTimer = setTimeout(() => {
        setHidden(true);
        onComplete?.();
      }, 1200);

      return () => {
        clearTimeout(timer);
        clearTimeout(hideTimer);
      };
    }
  }, [subtitleVisible, onComplete]);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center transition-opacity duration-700 pointer-events-none select-none ${
        fadingOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="text-center space-y-6 px-6 max-w-4xl">
        <h1 className="text-white text-2xl sm:text-4xl md:text-6xl font-light tracking-[0.35em] sm:tracking-[0.4em] font-space leading-relaxed pr-[-0.4em]">
          {name.split('').map((char, index) => (
            <span
              key={index}
              className={`transition-opacity duration-300 ${
                index < visibleCount ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {char}
            </span>
          ))}
        </h1>

        <div className="overflow-hidden">
          <div
            className={`text-[#00D9FF] text-[11px] sm:text-xs md:text-sm tracking-[0.5em] sm:tracking-[0.6em] font-space uppercase transition-all duration-500 transform ${
              subtitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            FULL STACK & AI SYSTEMS ENGINEER
          </div>
        </div>
      </div>
    </div>
  );
};
