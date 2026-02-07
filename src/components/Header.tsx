import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

import { useAuth } from '../contexts/AuthContext';

/**
 * TS-Λ3 // HEADER SUBSTRATE [v2.5.0]
 * CLASSIFICATION: SOVEREIGN IDENTITY
 * AUTHORITY: hello@butterdime.com
 */

const UserAuthIcon = () => (
  <svg width="40" height="40" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#008B8B" />
        <stop offset="100%" stop-color="#00D9FF" />
      </linearGradient>

      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feFlood flood-color="white" flood-opacity="0.8" result="flood" />
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
      fontSize="64"
      fill="#FFFFFF"
      stroke="none"
      strokeWidth="0"
      style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 48", maxWidth: '100%', maxHeight: '100%' }}
    >g_mobiledata</text>
  </svg>
);

const UserAvatar = ({ user }: { user: any }) => (
  <div className="w-8 h-8 rounded-md bg-black border border-cyan-400 flex items-center justify-center shadow-[0_0_15px_#22D3EE99] transition-all overflow-hidden">
    {user?.photoURL ? (
      <img src={user.photoURL} alt={user.displayName || 'User'} className="w-full h-full object-cover" />
    ) : (
      <span className="text-[10px] font-black text-cyan-400">
        {user?.displayName ? user.displayName.split(' ').map((n: string) => n[0]).join('').toUpperCase() : '??'}
      </span>
    )}
  </div>
);

const NAV_ITEMS = [
  { id: 'foundations', label: 'THE FOUNDATIONS' },
  { id: 'methods', label: 'THE METHODS' },
  { id: 'mothership', label: 'THE MOTHERSHIP' },
  { id: 'overwatch', label: 'OVERWATCH' }
];

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, signIn } = useAuth();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10 h-20 flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">

        {/* LOGO INJECTION [v2.6.2] - INLINED */}
        <a href="/" className="flex items-center no-underline group shrink-0">
          <svg
            width="503"
            height="104"
            viewBox="0 0 503 104"
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-auto text-white"
          >
            <defs>
              <style type="text/css">
                {`
                  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap');
                  .logo-text { font-family: 'Inter', sans-serif; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em; }
                  .glow-filter { filter: drop-shadow(0 0 10px #FFFFFF66); }
                `}
              </style>
            </defs>
            <g className="glow-filter">
              <g transform="translate(40, 31.2)">
                <g transform="translate(0, 0) scale(0.08125)">
                  <path
                    d="M366.26,256L256,56L145.74,256L35.48,456H256h220.52L366.26,256z M462.43,448.02H327.14     c-52.29-17.46-99.26-47.08-123.05-72.78c12.09,3.24,29.59,6.3,53.32,6.78c43.69,0.87,71.69-14.09,71.69-14.09s-0.04-0.49-0.13-1.36     l0.44,1.33c10.53-38.31,14.66-76.67,9.8-143.39l20.22,36.67L462.43,448.02z M255.21,246.4c0,0,17.34,12.57,41.66,53.19     c15.5,25.89,23.07,61.65,23.07,61.65s-27.12,11.27-63.76,11.1c-37.52-0.53-63.59-9.51-63.59-9.51s5.81-34.7,21.66-61.82     C230.29,270.35,255.21,246.4,255.21,246.4z M153.41,261.17L256.42,74.33l70.68,128.2c8.42,51.22,5.65,107.88-2.38,140.27     c-3.5-14.36-9.64-32.72-20.28-49.2c-28.27-43.79-47.74-58.99-47.74-58.99s-0.36,0.2-1.01,0.63     c-42.74,11.66-77.73,28.09-123.62,64.64L153.41,261.17z M50.4,448.02l69.84-126.68c39.4-37.4,94.72-65.51,118.02-70.6     c-9.71,10.52-22.24,27.08-35.09,52.2c-18.12,35.42-20.61,64.11-20.61,64.11s0.59,0.37,1.78,0.99l-1.55-0.36     c29.53,30.52,56.36,49.88,116.46,80.35h-42.83H50.4z"
                    fill="currentColor"
                  />
                </g>
              </g>
              <text x="88.6" y="52" className="logo-text" fontSize="32" dominantBaseline="central">
                <tspan fill="#FFFFFF">RPR</tspan>
                <tspan fill="#FFFFFF" dx="10">COMMUNICATIONS</tspan>
              </text>
            </g>
          </svg>
        </a>

        {/* DESKTOP NAV [v2.1.2] */}
        <nav className="hidden lg:flex items-center gap-10">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-[11px] font-bold text-white/60 hover:text-white transition-all uppercase tracking-tighter italic font-mono"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={user ? undefined : signIn}
            className={`hidden lg:block transition-all hover:scale-105 ${!user ? 'w-10 h-10 rounded-md overflow-hidden' : ''}`}
          >
            {user ? <UserAvatar user={user} /> : <UserAuthIcon />}
          </button>

          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-white/60 hover:text-white transition-colors">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE OVERLAY [v2.5.0] */}
      {isOpen && (
        <div className="fixed inset-0 z-40 lg:hidden flex flex-col items-center justify-center animate-in fade-in duration-300">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-2xl" onClick={() => setIsOpen(false)} />
          <nav className="relative z-50 flex flex-col items-center gap-10">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-black text-white italic tracking-tighter hover:text-cyan-500 transition-all uppercase"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={user ? undefined : signIn}
              className={`transition-all hover:scale-105 ${!user ? 'w-10 h-10 rounded-md overflow-hidden' : ''}`}
            >
              {user ? <UserAvatar user={user} /> : <UserAuthIcon />}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
