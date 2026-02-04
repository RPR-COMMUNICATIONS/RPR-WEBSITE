import React, { useState } from 'react';

/**
 * TS-Λ3 // HEADER SUBSTRATE [v2.1.2]
 * Feature: Firebase Google OAuth Handshake Wired
 * Mission: Restore canonical labels + 60% Mobile Overlay + Identity Latch.
 * Authority: SG-CANONICAL-2026
 */

const LogoIcon = () => (
  <svg viewBox="0 0 512 512" className="w-8 h-8 lg:w-9 lg:h-9 fill-white shrink-0" xmlns="http://www.w3.org/2000/svg">
    <path d="M366.26,256L256,56L145.74,256L35.48,456H256h220.52L366.26,256z M462.43,448.02H327.14
		c-52.29-17.46-99.26-47.08-123.05-72.78c12.09,3.24,29.59,6.3,53.32,6.78c43.69,0.87,71.69-14.09,71.69-14.09s-0.04-0.49-0.13-1.36
		l0.44,1.33c10.53-38.31,14.66-76.67,9.8-143.39l20.22,36.67L462.43,448.02z M255.21,246.4c0,0,17.34,12.57,41.66,53.19
		c15.5,25.89,23.07,61.65,23.07,61.65s-27.12,11.27-63.76,11.1c-37.52-0.53-63.59-9.51-63.59-9.51s5.81-34.7,21.66-61.82
		C230.29,270.35,255.21,246.4,255.21,246.4z M153.41,261.17L256.42,74.33l70.68,128.2c8.42,51.22,5.65,107.88-2.38,140.27
		c-3.5-14.36-9.64-32.72-20.28-49.2c-28.27-43.79-47.74-58.99-47.74-58.99s-0.36,0.2-1.01,0.63
		c-42.74,11.66-77.73,28.09-123.62,64.64L153.41,261.17z M50.4,448.02l69.84-126.68c39.4-37.4,94.72-65.51,118.02-70.6
		c-9.71,10.52-22.24,27.08-35.09,52.2c-18.12,35.42-20.61,64.11-20.61,64.11s0.59,0.37,1.78,0.99l-1.55-0.36
		c29.53,30.52,56.36,49.88,116.46,80.35h-42.83H50.4z" />
  </svg>
);

const UserAuthIcon = () => (
  <svg width="32" height="32" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feFlood floodColor="white" floodOpacity="0.8" result="flood" />
        <feComposite in="flood" in2="SourceAlpha" operator="in" result="mask" />
        <feGaussianBlur in="mask" stdDeviation="4" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <rect width="100%" height="100%" rx="8px" fill="#000000" filter="url(#glow)" />
    <text
      x="50%" y="50%"
      dominantBaseline="central"
      textAnchor="middle"
      fontFamily="Material Symbols Outlined"
      fontSize="40"
      fill="#FFFFFF"
      style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 48" }}
    >
      g_mobiledata
    </text>
  </svg>
);

const NAV_ITEMS = [
  { id: 'foundations', label: 'FOUNDATIONS' },
  { id: 'methods', label: 'METHODS' },
  { id: 'overwatch', label: 'OVERWATCH' }
];

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, loading, signInWithGoogleRedirect, signOut } = useAuth();

  const handleAuthStrike = async () => {
    if (user) {
      if (window.confirm("Disconnect Sovereign Identity?")) {
        await signOut();
      } else {
        window.location.href = "https://kontrol.rprcomms.com";
      }
    } else {
      await signInWithGoogleRedirect();
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 lg:h-20 flex items-center justify-between">

        {/* 1. LOGO SUBSTRATE (Brand Kit) */}
        <a href="/" className="flex items-center gap-3">
          <svg
            width="32"
            height="32"
            viewBox="0 0 512 512"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="white"
              d="M366.26,256L256,56L145.74,256L35.48,456H256h220.52L366.26,256z M462.43,448.02H327.14
      c-52.29-17.46-99.26-47.08-123.05-72.78c12.09,3.24,29.59,6.3,53.32,6.78c43.69,0.87,71.69-14.09,71.69-14.09s-0.04-0.49-0.13-1.36
      l0.44,1.33c10.53-38.31,14.66-76.67,9.8-143.39l20.22,36.67L462.43,448.02z M255.21,246.4c0,0,17.34,12.57,41.66,53.19
      c15.5,25.89,23.07,61.65,23.07,61.65s-27.12,11.27-63.76,11.1c-37.52-0.53-63.59-9.51-63.59-9.51s5.81-34.7,21.66-61.82
      C230.29,270.35,255.21,246.4,255.21,246.4z M153.41,261.17L256.42,74.33l70.68,128.2c8.42,51.22,5.65,107.88-2.38,140.27
      c-3.5-14.36-9.64-32.72-20.28-49.2c-28.27-43.79-47.74-58.99-47.74-58.99s-0.36,0.2-1.01,0.63
      c-42.74,11.66-77.73,28.09-123.62,64.64L153.41,261.17z M50.4,448.02l69.84-126.68c39.4-37.4,94.72-65.51,118.02-70.6
      c-9.71,10.52-22.24,27.08-35.09,52.2c-18.12,35.42-20.61,64.11-20.61,64.11s0.59,0.37,1.78,0.99l-1.55-0.36
      c29.53,30.52,56.36,49.88,116.46,80.35h-42.83H50.4z"
            />
          </svg>
          <span className="font-bold tracking-wider text-lg">
            RPR COMMUNICATIONS
          </span>
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

        {/* TASK 1: DESKTOP CONTROLS */}
        <div className="hidden lg:flex items-center gap-4">
          <span className="text-xs font-mono uppercase tracking-wider text-white/60">KONTROL</span>
          <span className="material-symbols-outlined text-white text-xl hidden lg:block">account_circle</span>
        </div>


        {/* 3. MOBILE TRIGGER */}
        <div className="flex items-center gap-3 lg:hidden">
          {/* G icon (no auth wiring yet) */}
          <button
            type="button"
            className="text-white hover:text-cyan-400 transition-colors"
            aria-label="Open KONTROL"
          >
            <span className="material-symbols-outlined text-2xl">
              g_mobiledata
            </span>
          </button>

          {/* Hamburger / Close */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-white transition-colors"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <span className="material-symbols-outlined text-2xl">
              {isMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* 4. MOBILE OVERLAY (60% Transparency + backdrop-blur-2xl) */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col items-center justify-center animate-in fade-in duration-300">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-2xl"
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

            {/* Mobile Identity Handshake */}
            <button
              onClick={handleAuthStrike}
              className="flex items-center gap-6 p-4 px-8 bg-white/5 rounded-2xl border border-white/10 mt-4 backdrop-blur-md"
            >
              <span className="text-[10px] font-black text-slate-400 tracking-[0.3em] uppercase">Identity Latch</span>
              <div className="w-8 h-8 rounded-md overflow-hidden border border-cyan-400/30">
                 {user ? (
                    <img src={user.photoURL || ''} alt="User" className="w-full h-full object-cover" />
                 ) : (
                    <UserAuthIcon />
                 )}
              </div>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
