import React from 'react';
import { useTranslation } from 'react-i18next';

/**
 * TS-Λ3 // ASK OLLIE LAUNCHER [v2.9.2]
 * Path: src/components/askollielauncher.tsx
 * Mission: Physical Image Restoration // Old Black Pill Latch
 * Authority: THE OVERWATCH // SG-CANONICAL-2026
 * Reference: image_e35bc8.png (Black Substrate / White Italic Text / Cyan Icon)
 * Status: AUTHORITATIVE // LATCHED
 * Fix: React camelCase SVG attribute alignment.
 */

interface AskOllieLauncherProps {
  onClick: () => void;
}

export const AskOllieLauncher: React.FC<AskOllieLauncherProps> = ({ onClick }) => {
  const { t } = useTranslation('harborA');

  return (
    <button
      onClick={onClick}
      className="fixed bottom-10 right-8 z-[150] flex items-center gap-4 bg-black border border-white/20 py-3 px-8 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all hover:scale-105 active:scale-95 group ring-1 ring-cyan-500/10"
    >
      {/* 🤖 AUTHENTIC OLD ICON: Cyan Robot Signature */}
      <div className="text-cyan-400 flex items-center justify-center">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C13.1046 2 14 2.89543 14 4V5H10V4C10 2.89543 10.8954 2 12 2Z" fill="currentColor"></path>
          <path
            d="M4 11C4 7.13401 7.13401 4 11 4H13C16.866 4 20 7.13401 20 11V15C20 18.866 16.866 22 13 22H11C7.13401 22 4 18.866 4 15V11Z"
            fill="currentColor"
            fillOpacity="0.2"
          ></path>
          <path
            d="M7 9H17M7 13H17M7 17H11"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2"
          ></path>
          <circle cx="8.5" cy="7.5" fill="currentColor" r="1"></circle>
          <circle cx="15.5" cy="7.5" fill="currentColor" r="1"></circle>
        </svg>
      </div>

      {/* 🔡 AUTHENTIC OLD TEXT: White Italic Bold */}
      <span className="text-[11px] font-black italic uppercase tracking-[0.2em] text-white group-hover:text-cyan-400 transition-colors">
        {t('hero.btns.ollie', 'ASK OLLIE')}
      </span>

      {/* 🧬 LIVE PULSE */}
      <div className="absolute top-1 right-3 flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
      </div>
    </button>
  );
};

export default AskOllieLauncher;