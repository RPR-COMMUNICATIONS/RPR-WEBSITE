import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

/**
 * TS-Λ3 // HEADER SUBSTRATE [v1.8.7]
 * Bugfix: Logo Rollback & Semantic Anchor Strike.
 * Mission: Restore canonical RPRCOMMS wordmark + 60% Mobile Overlay.
 * Authority: hello@butterdime.com
 */

const NAV_ITEMS = [
  { id: 'foundations', label: 'FOUNDATIONS' },
  { id: 'methods', label: 'METHODS' },
  { id: 'overwatch', label: 'OVERWATCH' }
];

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 lg:h-20 flex items-center justify-between">

        {/* 1. LOGO SUBSTRATE (v1.8.7: Rollback to Canonical) */}
        <a href="/" className="flex items-center gap-3 h-full group">
          <div className="flex items-center justify-center p-1.5 bg-slate-900 border border-slate-800 rounded-lg group-hover:border-sky-500/50 transition-colors">
            <img
              src="/rpr-logo-icon.svg"
              alt="RPR LOGO"
              className="w-6 h-6 sm:w-8 sm:h-8 transition-all duration-300"
              onError={(e) => (e.currentTarget.src = "https://raw.githubusercontent.com/lucide-react/lucide/main/icons/shield.svg")}
            />
          </div>
          <div className="flex items-center">
            <span className="text-xl font-black text-white italic tracking-tighter uppercase leading-none group-hover:text-sky-500 transition-colors">
              RPR<span className="text-sky-500">COMMS</span>
            </span>
          </div>
        </a>

        {/* 2. DESKTOP NAV (Semantic anchors + Locked Labels) */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-xs font-mono text-white/80 hover:text-white tracking-widest transition-colors uppercase"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* 3. MOBILE TRIGGER */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 text-white transition-colors"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* 4. MOBILE OVERLAY (60% Transparency Locked) */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden flex flex-col items-center justify-center animate-in fade-in duration-300">
          <div
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-xl"
            onClick={() => setIsMenuOpen(false)}
          />

          <nav className="relative z-50 flex flex-col items-center gap-10">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl text-white/90 py-4 font-mono tracking-wider uppercase hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
