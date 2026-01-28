/**
 * TS-Λ3 // GLOBAL HEADER // MINIMAL G IDENTITY [v6.1.0]
 * RECTIFIED: Purged KONTROL [G]. Only G Login (Identity Latch) remains.
 * RESPONSIVE: Hamburger menu locked to mobile viewports only.
 */
import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';
import RprMasterLogo from './brand/RprMasterLogo';

export const Header: React.FC = () => {
  const { user, signIn } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'FOUNDATIONS', href: '/#foundations' },
    { name: 'METHODS', href: '/#methods' },
    { name: 'PROCESS', href: '/#process' },
    { name: 'OVERWATCH', href: '/#overwatch' },
  ];

  return (
    <header className="fixed top-0 w-full z-[100] bg-black/80 backdrop-blur-md border-b border-white/10 h-[108px]">
      <div className="max-w-7xl mx-auto h-full w-full flex items-center justify-between px-4 md:px-12 relative z-10">

        {/* Left: Branding */}
        <div className="flex items-center gap-4 py-2">
          <Link to="/">
            <RprMasterLogo />
          </Link>
        </div>

        {/* Center: Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-[10px] font-black tracking-[0.2em] uppercase text-zinc-500">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-white transition-colors font-sans">
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right: Identity Latch */}
        <div className="flex items-center gap-x-3 md:gap-4">
          {/* G-Button: Active only when user is unauthenticated */}
          {!user && (
            <button 
              onClick={signIn} 
              className="flex-shrink-0 transition-all hover:opacity-80 p-2 group" 
              aria-label="Identity Latch"
            >
              <span className="material-symbols-outlined text-white text-3xl group-hover:text-cyan-400 transition-colors">
                account_circle
              </span>
            </button>
          )}

          {/* Identity Avatar: Active when session is live */}
          {user && (
            <div className="w-10 h-10 rounded-full border border-cyan-500/50 overflow-hidden shadow-[0_0_15px_rgba(0,224,255,0.3)]">
              <img 
                src={user.photoURL || ''} 
                alt={user.displayName || 'User'} 
                className="w-full h-full object-cover" 
              />
            </div>
          )}

          {/* Mobile Menu Toggle (Locked to lg:hidden) */}
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center text-zinc-500 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[108px] bg-black z-50 p-6 flex flex-col gap-8 animate-in fade-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-2xl font-black tracking-widest text-zinc-500 hover:text-cyan-500 uppercase transition-colors font-sans"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};