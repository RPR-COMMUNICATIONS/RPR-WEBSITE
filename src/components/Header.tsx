import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

/**
 * TS-Λ3 // HEADER SUBSTRATE [v1.8.8 FREEZE]
 * Spec: Vercel Frozen Baseline - Top Left Logo, Center Nav, Right Avatar.
 * Authority: hello@butterdime.com
 */

const NAV_ITEMS = [
  { id: 'methods', label: 'METHODS' },
  { id: 'labs', label: 'LABS' },
  { id: 'overwatch', label: 'OVERWATCH' }
];

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-[50] h-16 lg:h-20 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">

        {/* LOGO SECTION (Top Left) */}
        <a href="/" className="flex items-center gap-4 group">
          <div className="w-8 h-8 flex items-center justify-center">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-full h-full">
              <path fill="white" d="M366.26,256L256,56L145.74,256L35.48,456H256h220.52L366.26,256z M462.43,448.02H327.14
                c-52.29-17.46-99.26-47.08-123.05-72.78c12.09,3.24,29.59,6.3,53.32,6.78c43.69,0.87,71.69-14.09,71.69-14.09s-0.04-0.49-0.13-1.36
                l0.44,1.33c10.53-38.31,14.66-76.67,9.8-143.39l20.22,36.67L462.43,448.02z M255.21,246.4c0,0,17.34,12.57,41.66,53.19
                c15.5,25.89,23.07,61.65,23.07,61.65s-27.12,11.27-63.76,11.1c-37.52-0.53-63.59-9.51-63.59-9.51s5.81-34.7,21.66-61.82
                C230.29,270.35,255.21,246.4,255.21,246.4z M153.41,261.17L256.42,74.33l70.68,128.2c8.42,51.22,5.65,107.88-2.38,140.27
                c-3.5-14.36-9.64-32.72-20.28-49.2c-28.27-43.79-47.74-58.99-47.74-58.99s-0.36,0.2-1.01,0.63
                c-42.74,11.66-77.73,28.09-123.62,64.64L153.41,261.17z M50.4,448.02l69.84-126.68c39.4-37.4,94.72-65.51,118.02-70.6
                c-9.71,10.52-22.24,27.08-35.09,52.2c-18.12,35.42-20.61,64.11-20.61,64.11s0.59,0.37,1.78,0.99l-1.55-0.36
                c29.53,30.52,56.36,49.88,116.46,80.35h-42.83H50.4z" />
            </svg>
          </div>
          <span className="font-['JetBrains_Mono'] font-bold uppercase tracking-[0.2em] text-sm lg:text-base text-white">
            RPR COMMUNICATIONS
          </span>
        </a>

        {/* NAVIGATION (Center) */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-[11px] font-bold text-white/60 tracking-[0.2em] font-mono hover:text-white transition-colors uppercase"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* ACTION GROUP (Right) */}
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center overflow-hidden shrink-0">
             <svg viewBox="0 0 48 48" className="w-5 h-5">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
             </svg>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-white/60 hover:text-white transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE OVERLAY */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[40] lg:hidden flex flex-col items-center justify-center animate-in fade-in duration-300">
          <div
            className="absolute inset-0 bg-black/90 backdrop-blur-xl"
            onClick={() => setIsMenuOpen(false)}
          />

          <nav className="relative z-[50] flex flex-col items-center gap-10">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-bold text-white tracking-widest hover:text-cyan-400 transition-all uppercase font-mono"
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
