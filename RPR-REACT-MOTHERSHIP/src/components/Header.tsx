import React, { useState } from 'react';
import logo from '../assets/branding/rpr-communications-white.svg';
import googleAuth from '../assets/branding/google-auth-black.svg';
import { Icon } from './Icon';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const gridDelays = [1, 4, 2, 7, 3, 8, 5, 2, 6, 1, 9, 3, 5, 2, 8, 4];
  
  return (
    <>
      <header className="h-[108px] fixed top-0 w-full z-[100] bg-black/80 backdrop-blur-md border-b border-border-dark flex items-center px-[20px] md:px-12 overflow-hidden">
        {/* Background Strategy Grid */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <div className="grid grid-cols-8 grid-rows-2 h-full w-full">
            {gridDelays.map((delay, i) => (
              <div 
                key={i} 
                className="border-[0.5px] border-primary/10 grid-square-anim" 
                style={{ animationDelay: `${delay}s` }}
              />
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto w-full flex justify-between items-center relative z-10">
          {/* Brand Latch (Left) */}
          <div className="flex items-center gap-4">
            <div className="relative group h-10 w-10 flex items-center justify-center">
              <div className="absolute inset-0 bg-primary/20 blur-lg group-hover:bg-primary/40 transition-all duration-700"></div>
              <img src={logo} alt="RPR Communications" className="h-10 w-10 relative z-10" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-black text-xl tracking-tighter uppercase text-white">RPR</span>
              <span className="text-[9px] font-bold text-primary tracking-[0.3em] uppercase mt-1">Communications</span>
            </div>
          </div>
          
          {/* Strategic Navigation (Center) */}
          <nav className="hidden md:flex items-center gap-12 text-[10px] font-black tracking-[0.2em] uppercase text-slate-400">
            <a className="hover:text-primary transition-colors" href="#foundations">Methods</a>
            <a className="hover:text-primary transition-colors" href="#products">Products</a>
            <a className="hover:text-primary transition-colors" href="#overwatch">Overwatch</a>
          </nav>
          
          {/* KONTROL LATCH (Right) */}
          <div className="flex items-center gap-6">
            <div className="hidden lg:flex flex-col items-end border-r border-white/10 pr-6">
              <span className="text-[9px] font-black text-white/20 uppercase tracking-widest leading-none mb-1">Auth Principal</span>
              <span className="text-[11px] font-mono text-primary leading-none uppercase">hello@butterdime.com</span>
            </div>

            <a href="https://kontrol.rprcomms.com" className="hidden md:flex items-center gap-3 bg-card-dark border border-border-dark hover:border-primary/50 px-4 py-2.5 rounded transition-all group shadow-sm">
              <span className="flex h-6 w-6 items-center justify-center rounded-sm bg-white">
                <img src={googleAuth} alt="Google Auth" className="h-4 w-4" />
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] group-hover:text-primary transition-colors text-white whitespace-nowrap">KONTROL LATCH</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-white hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              <Icon name={mobileMenuOpen ? 'close' : 'menu'} size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[99] bg-black/95 backdrop-blur-md md:hidden pt-[108px]">
          <nav className="flex flex-col gap-8 p-8 text-center">
            <a 
              href="#foundations" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-black uppercase tracking-widest text-slate-400 hover:text-primary transition-colors"
            >
              Methods
            </a>
            <a 
              href="#products" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-black uppercase tracking-widest text-slate-400 hover:text-primary transition-colors"
            >
              Products
            </a>
            <a 
              href="#overwatch" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-black uppercase tracking-widest text-slate-400 hover:text-primary transition-colors"
            >
              Overwatch
            </a>
            <a 
              href="https://kontrol.rprcomms.com" 
              onClick={() => setMobileMenuOpen(false)}
              className="mt-8 px-6 py-3 bg-card-dark border border-border-dark hover:border-primary/50 rounded transition-all text-[10px] font-black uppercase tracking-[0.2em] text-white"
            >
              KONTROL LATCH
            </a>
          </nav>
        </div>
      )}
    </>
  );
};