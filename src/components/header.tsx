import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, Menu, ShieldCheck, Zap, Cpu, Wifi } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../contexts/authcontext.tsx';

/**
 * TS-Λ3 // GLOBAL HEADER [v23.0.5]
 * Path: src/components/header.tsx
 * Mission: HUD Refinement // Action Liquidation
 * Authority: THE OVERWATCH // SG-CANONICAL-2026
 * Fix: Liquidated "Enter Mothership" button per user directive.
 * Fix: Maintained clinical-smallcaps and architectural telemetry.
 * Status: AUTHORITATIVE // LATCHED
 */

// 🧬 AUTHORITATIVE BRAND & UI LATCHES
import { RprMasterLogo } from '../brand/rprmasterlogo.tsx';
import LanguageSwitcher from './languageswitcher.tsx';
import SymbolTile from './icons/symboltile.tsx';

export const Header: React.FC = () => {
  const { user, signInWithGoogleRedirect, signOut, loading } = useAuth();
  const { t } = useTranslation('harbora');
  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [latency, setLatency] = useState(14);
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 1024 : false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    const checkSize = () => setIsMobile(window.innerWidth < 1024);

    // 🛰️ LATENCY SIMULATOR: Point-locked to 12-16ms boundary
    const latencyPulse = setInterval(() => {
      setLatency(Math.floor(Math.random() * (16 - 12 + 1)) + 12);
    }, 5000);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkSize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkSize);
      clearInterval(latencyPulse);
    };
  }, []);

  // 🚥 NAV REGISTRY: Sequence Foundations -> Methods -> Mothership -> Visualizer -> Overwatch
  const NAV_ITEMS = [
    { id: 'foundations', label: t('nav.foundations', 'Foundations'), path: '/#foundations' },
    { id: 'methods', label: t('nav.methods', 'Methods'), path: '/#methods' },
    { id: 'mothership', label: t('nav.mothership', 'Mothership'), path: '/#mothership' },
    { id: 'visualizer', label: t('nav.visualizer', 'Visualizer'), path: '/#visualizer' },
    { id: 'overwatch', label: t('nav.overwatch', 'Overwatch'), path: '/#overwatch' }
  ];

  return (
    <>
      {/* 🧬 GLOBAL STYLE INJECTION: Smallcaps Mandate */}
      <style>{`
        .clinical-smallcaps {
          font-variant-caps: all-small-caps;
          letter-spacing: 0.12em;
        }
        .header-glass {
          background: rgba(0, 0, 0, 0.65);
          backdrop-filter: blur(24px) saturate(180%);
          -webkit-backdrop-filter: blur(24px) saturate(180%);
        }
      `}</style>

      <header className="fixed top-0 left-0 w-full z-[100] transition-all duration-700">

        {/* 🛰️ 01. TOP TELEMETRY BAND (Visible in default state) */}
        <div className={`w-full bg-white/[0.03] border-b border-white/5 py-2 px-6 md:px-12 flex justify-between items-center transition-all duration-700 ${scrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-8 opacity-100'}`}>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Zap size={10} className="text-cyan-500" />
              <span className="clinical-smallcaps text-[9px] text-slate-500 font-bold uppercase tracking-widest">System_Status: <span className="text-cyan-400">Latched</span></span>
            </div>
            <div className="hidden sm:flex items-center gap-2 border-l border-white/10 pl-6">
              <Cpu size={10} className="text-slate-600" />
              <span className="clinical-smallcaps text-[9px] text-slate-500 font-bold uppercase tracking-widest">Node: <span className="text-white">Asia-Southeast1</span></span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Wifi size={10} className="text-slate-600" />
              <span className="clinical-smallcaps text-[9px] text-slate-500 font-bold uppercase tracking-widest">Latency: <span className="text-green-500">{latency}ms</span></span>
            </div>
            <span className="clinical-smallcaps text-[9px] text-slate-600 font-bold uppercase tracking-widest">SG-CANONICAL-2026</span>
          </div>
        </div>

        {/* 🏛️ 02. PRIMARY HUD SUBSTRATE */}
        <div className={`header-glass border-b border-white/5 flex items-center px-6 md:px-12 transition-all duration-500 ${scrolled ? 'h-16 lg:h-20 shadow-2xl' : 'h-16 lg:h-[108px]'}`}>
          <div className="max-w-screen-2xl mx-auto w-full flex items-center justify-between">

            <div className="flex items-center gap-8 md:gap-12">
              <Link
                to="/"
                onClick={() => {
                  setIsMenuOpen(false);
                  if (location.pathname === '/') window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group transition-transform hover:scale-[1.01]"
              >
                {/* 🧬 LOGO: Scaling logic handled within MothershipOSLogo (Mobile Only) */}
                <RprMasterLogo size={isMobile ? 24 : 52} />
              </Link>
            </div>

            <div className="flex items-center gap-10">
              {/* 🖥️ DESKTOP NAVIGATION */}
              <nav className="hidden lg:flex items-center gap-8 font-mono text-slate-500">
                {NAV_ITEMS.filter(item => item.id !== 'visualizer').map((item) => (
                  <a
                    key={item.id}
                    href={item.path}
                    className="clinical-smallcaps text-[13px] font-black hover:text-cyan-400 transition-all duration-300 whitespace-nowrap group/link relative"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-500 transition-all duration-500 group-hover/link:w-full opacity-50" />
                  </a>
                ))}
              </nav>

              <div className="flex items-center gap-4 md:gap-6">
                <div className="hidden sm:block">
                  <LanguageSwitcher />
                </div>

                {!loading && (
                  <div className="flex items-center gap-4">
                    {/* 👤 AUTH ENCLAVE */}
                    <button
                      onClick={user ? () => signOut() : signInWithGoogleRedirect}
                      className="group relative transition-all duration-500"
                      aria-label={user ? 'SIGN_OUT' : 'SIGN_IN'}
                    >
                      {user ? (
                        <div className="w-8 h-8 lg:w-11 lg:h-11 rounded-lg lg:rounded-xl overflow-hidden border border-white/10 bg-zinc-900/40 p-0.5 group-hover:border-cyan-500/50 transition-colors">
                          <img
                            src={user.photoURL || ''}
                            alt="U"
                            className="w-full h-full object-cover rounded-md lg:rounded-lg grayscale group-hover:grayscale-0 transition-all duration-700"
                          />
                        </div>
                      ) : (
                        <SymbolTile
                          glyph="g_mobiledata"
                          size={isMobile ? 32 : 44}
                          variant="square"
                          className="hover:border-cyan-500/40 group-hover:bg-white/5"
                        />
                      )}

                      {/* 🟢 ONLINE PULSE */}
                      {user && (
                        <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-black animate-pulse" />
                      )}
                    </button>

                    {/* 🛑 ENTER_MOTHERSHIP BUTTON LIQUIDATED PER DIRECTIVE v23.0.5 */}
                  </div>
                )}

                <button
                  onClick={() => setIsMenuOpen(true)}
                  className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 group active:scale-90 transition-all"
                >
                  <Menu className="text-white w-6 h-6 group-hover:text-cyan-400 transition-colors" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 🧬 SCROLL PROGRESS SUBSTRATE */}
        <div className={`h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent transition-opacity duration-1000 ${scrolled ? 'opacity-100' : 'opacity-0'}`} />
      </header>

      {/* 📱 MOBILE OVERLAY SUBSTRATE */}
      <div className={`fixed inset-0 z-[110] transition-all duration-500 ${isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>
        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-2xl" onClick={() => setIsMenuOpen(false)} />

        <div className={`absolute top-0 right-0 h-full w-full max-w-sm bg-black border-l border-white/10 transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1) ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col p-10`}>

          <header className="flex justify-between items-center mb-16">
            <span className="clinical-smallcaps text-[10px] text-slate-500 font-bold tracking-[0.4em]">Tactical_Menu</span>
            <button onClick={() => setIsMenuOpen(false)} className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors">
              <X className="text-white w-6 h-6" />
            </button>
          </header>

          <div className="mb-16 flex justify-center">
            <LanguageSwitcher />
          </div>

          <nav className="flex flex-col gap-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={item.path}
                onClick={() => setIsMenuOpen(false)}
                className="group flex items-end justify-between py-4 border-b border-white/5"
              >
                <div className="flex flex-col">
                  <span className="clinical-smallcaps text-[24px] text-white font-black italic uppercase tracking-tighter transition-all group-hover:text-cyan-400 group-hover:pl-4">
                    {item.label}
                  </span>
                  <span className="clinical-smallcaps text-[8px] text-slate-600 tracking-[0.5em] font-bold mt-1">
                    TS-L3_VECTOR_{item.id.toUpperCase()}
                  </span>
                </div>
                <ShieldCheck size={16} className="text-slate-800 group-hover:text-cyan-900 transition-colors mb-2" />
              </a>
            ))}
          </nav>

          <div className="mt-auto pt-10 border-t border-white/10 flex flex-col gap-4">
            <div className="flex justify-between items-center opacity-30">
              <span className="clinical-smallcaps text-[9px] text-slate-500">Residency_Lock</span>
              <span className="clinical-smallcaps text-[9px] text-cyan-500">Active</span>
            </div>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                user ? signOut() : signInWithGoogleRedirect();
              }}
              className="w-full py-4 bg-white/5 border border-white/10 rounded-lg clinical-smallcaps text-[11px] font-black text-white hover:bg-white/10 transition-all"
            >
              {user ? 'Terminate_Session' : 'Establish_Handshake'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;