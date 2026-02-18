import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Globe, X, Menu } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../contexts/authcontext.tsx';

/**
 * TS-Λ3 // GLOBAL HEADER [v22.5.1]
 * Path: src/components/header.tsx
 * Mission: Tactical Geometry Calibration // Ultra-Slim HUD Latch
 * Authority: THE OVERWATCH // SG-CANONICAL-2026
 * Fix: Calibrated mobile logo scale to 24px for a thinner, high-density profile.
 * Fix: Synchronized pt-16 (64px) mobile height with App.tsx main padding.
 * Fix: Maintained strictly lowercase app imports per Smallcaps Mandate.
 */

// 🧬 AUTHORITATIVE BRAND & UI LATCHES
import { RprMasterLogo } from '../brand/rprmasterlogo.tsx';
import SymbolTile from './icons/symboltile.tsx';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation('harborA');

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng.toLowerCase());
  };

  return (
    <div className="flex items-center gap-1 p-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm group/switcher shadow-2xl transition-all duration-500">
      {['EN', 'MY', 'ZH'].map((lang) => {
        const isActive = i18n.language.toUpperCase().startsWith(lang);
        return (
          <button
            key={lang}
            onClick={() => changeLanguage(lang)}
            className={`
              rounded-full font-black tracking-widest transition-all px-2.5 py-1 text-[8px]
              ${isActive ? 'text-cyan-400 bg-white/5' : 'text-slate-500 hover:text-slate-200'}
            `}
          >
            {lang}
          </button>
        );
      })}
      <div className="px-2 border-l border-white/10 ml-1 flex items-center">
        <Globe className="w-3 h-3 text-slate-600" />
      </div>
    </div>
  );
};

export const Header: React.FC = () => {
  const { user, signInWithGoogleRedirect, signOut, loading } = useAuth();
  const { t } = useTranslation('harborA');
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 1024 : false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // 🚥 NAV REGISTRY: Sequence Foundations -> Methods -> Mothership -> Visualizer -> Overwatch
  // 🛡️ LABS PURGED: Entry removed per directive v22.5.0.
  const NAV_ITEMS = [
    { id: 'foundations', label: t('nav.foundations'), path: '/#foundations' },
    { id: 'methods', label: t('nav.methods'), path: '/#methods' },
    { id: 'mothership', label: t('nav.mothership'), path: '/#mothership' },
    { id: 'visualizer', label: t('nav.visualizer'), path: '/#visualizer' },
    { id: 'overwatch', label: t('nav.overwatch'), path: '/#overwatch' }
  ];

  return (
    <>
      {/* 📐 HEIGHT LATCH: h-16 (64px Mobile) -> h-[108px] (Desktop) */}
      <header className="fixed top-0 left-0 w-full z-[100] bg-black/60 backdrop-blur-xl border-b border-white/5 h-16 lg:h-[108px] flex items-center px-6 md:px-12 transition-all duration-500">
        <div className="max-w-screen-2xl mx-auto w-full flex items-center justify-between">
          <Link
            to="/"
            onClick={() => {
              setIsMenuOpen(false);
              if (location.pathname === '/') window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group transition-transform hover:scale-[1.01]"
          >
            {/* 🧬 LOGO CALIBRATION: 24px (Ultra-Slim Mobile) vs 52px (Desktop) */}
            <RprMasterLogo size={isMobile ? 24 : 52} />
          </Link>

          <div className="flex items-center gap-8">
            {/* 🖥️ DESKTOP NAV: 'Visualizer' and 'Labs' are absent per v22.5.0 */}
            <nav className="hidden lg:flex items-center gap-6 font-mono text-[8px] tracking-[0.4em] uppercase font-bold text-slate-500">
              {NAV_ITEMS.filter(item => item.id !== 'visualizer').map((item) => (
                <a
                  key={item.id}
                  href={item.path}
                  className="hover:text-cyan-400 transition-all duration-300 whitespace-nowrap"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <div className="hidden sm:block"><LanguageSwitcher /></div>
              {!loading && (
                <button onClick={user ? () => signOut() : signInWithGoogleRedirect} className="group transition-all duration-500">
                  {user ? (
                    <div className="w-8 h-8 lg:w-11 lg:h-11 rounded-lg lg:rounded-xl overflow-hidden border border-white/10 bg-zinc-900/40 flex items-center justify-center">
                      <img src={user.photoURL || ''} alt="U" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                    </div>
                  ) : (
                    <SymbolTile glyph="g_mobiledata" size={isMobile ? 32 : 44} variant="square" className="hover:border-cyan-500/40" />
                  )}
                </button>
              )}
              <button onClick={() => setIsMenuOpen(true)} className="lg:hidden p-1 group">
                <Menu className="text-white w-6 h-6 group-hover:text-cyan-400 transition-colors" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 📱 MOBILE OVERLAY SUBSTRATE */}
      <div className={`fixed inset-0 z-[110] transition-all duration-500 ${isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>
        <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-xl" onClick={() => setIsMenuOpen(false)} />
        <div className={`absolute top-0 right-0 h-full w-full max-w-sm bg-black border-l border-white/10 transition-transform duration-500 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col items-center justify-center p-8`}>
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-10 right-10 p-2 hover:bg-white/5 rounded-full transition-colors">
            <X className="text-white w-8 h-8" />
          </button>

          <div className="mb-12">
            <LanguageSwitcher />
          </div>

          <nav className="flex flex-col items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={item.path}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg text-white font-black italic uppercase tracking-tighter hover:text-cyan-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};