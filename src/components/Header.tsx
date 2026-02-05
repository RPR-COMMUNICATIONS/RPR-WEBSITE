import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext'; // FIX: Seating missing import

/**
 * TS-Λ3 // HEADER SUBSTRATE [v2.1.4]
 * Mission: Resolve TS6133 (Unused LogoIcon) Build Blocker
 * Status: LATCHED // v2.1.0 ALIGNED
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
        <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
      </filter>
    </defs>
    <rect width="100%" height="100%" rx="8px" fill="#000000" filter="url(#glow)" />
    <text
      x="50%" y="50%"
      dominantBaseline="central"
      textAnchor="middle"
      fontFamily="Material Symbols Outlined"
      fontSize="48"
      fill="#FFFFFF"
      style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 48" }}
    >
      g_mobiledata
    </text>
  </svg>
);

const NAV_ITEMS = [
  { id: 'foundations', label: 'THE FOUNDATIONS' },
  { id: 'methods', label: 'THE METHODS' },
  { id: 'overwatch', label: 'OVERWATCH' }
];

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  // FIX: Destructured user and actions; removed unused 'loading' variable
  const { user, signInWithGoogleRedirect, signOut } = useAuth();

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
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10 h-20 flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">

        <a href="/" className="flex items-center gap-4 no-underline group shrink-0">
          {/* FIX: LogoIcon is now rendered here to satisfy compiler */}
          <LogoIcon />
          <span className="text-sm md:text-base font-bold text-white tracking-[0.2em] uppercase font-mono">
            RPR COMMUNICATIONS
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {['FOUNDATIONS', 'METHODS', 'OVERWATCH'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[11px] font-bold text-white/60 hover:text-white transition-colors uppercase tracking-[0.25em] font-mono"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={handleAuthStrike}
            className={`
              hidden lg:block w-8 h-8 rounded-md overflow-hidden transition-all shadow-lg
              ${user ? 'border-2 border-cyan-400' : 'border border-white/10 hover:shadow-cyan-400/20'}
            `}
            aria-label="Identity Latch"
          >
            {user ? (
              <img src={user.photoURL || ''} alt="User" className="w-full h-full object-cover" />
            ) : (
              <UserAuthIcon />
            )}
          </button>

          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-white/60 hover:text-white transition-colors">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 p-8 flex flex-col gap-6 animate-in fade-in">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setIsOpen(false)}
              className="text-lg font-bold text-white uppercase tracking-widest font-mono"
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={handleAuthStrike}
            className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/10 mt-4"
          >
            <span className="text-[10px] font-black text-slate-400 tracking-widest uppercase">Identity Latch</span>
            <div className="w-6 h-6 rounded-md overflow-hidden border border-cyan-400/30">
              {user ? (
                <img src={user.photoURL || ''} alt="User" className="w-full h-full object-cover" />
              ) : (
                <UserAuthIcon />
              )}
            </div>
          </button>
        </div>
      )}
    </header>
  );
};