import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';

/**
 * TS-Λ3 // HEADER SUBSTRATE [v1.8.2]
 * Mission: Mobile Logo Alignment & 60% Transparency Overlay.
 * Authority: hello@butterdime.com
 */
export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-black/40 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* 1. LOGO SUBSTRATE (MISSION: Mobile size & alignment) */}
        <div className="flex items-center gap-3 h-full">
          <div className="flex items-center justify-center p-1.5 bg-slate-900 border border-slate-800 rounded-lg">
            {/* Logo size reduced to h-6 on mobile, restored to h-10 on sm breakpoint */}
            <img
              src="/rpr-logo-icon.svg"
              alt="RPR LOGO"
              className="w-6 h-6 sm:w-10 sm:h-10 transition-all duration-500"
            />
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="text-lg font-black text-white italic tracking-tighter uppercase leading-none">
              RPR<span className="text-sky-500">COMMS</span>
            </span>
            <span className="text-[7px] font-mono text-slate-500 uppercase tracking-widest mt-1">
              Sovereign Identity // v1.8.2
            </span>
          </div>
        </div>

        {/* 2. DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8">
          {["THE FOUNDATIONS", "THE METHODS", "THE OVERWATCH", "LABS"].map((label) => (
            <button key={label} className="text-[9px] font-black text-slate-400 hover:text-sky-400 tracking-[0.2em] transition-colors uppercase">
              {label}
            </button>
          ))}
          <div className="w-px h-4 bg-white/10 mx-2" />
          <Globe className="w-4 h-4 text-sky-500" />
        </nav>

        {/* 3. MOBILE TRIGGER */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* 4. MOBILE OVERLAY (MISSION: 60% Transparency Adjustment) */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden flex flex-col items-center justify-center animate-in fade-in duration-300">
          {/* Background adjusted to 60% transparency (bg-slate-950/60) per Mission Brief */}
          <div
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-xl"
            onClick={() => setIsMenuOpen(false)}
          />

          <nav className="relative z-50 flex flex-col items-center gap-10">
            {["THE FOUNDATIONS", "THE METHODS", "THE OVERWATCH", "LABS"].map((label) => (
              <button
                key={label}
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-black text-white italic tracking-tighter hover:text-sky-500 transition-all uppercase"
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
