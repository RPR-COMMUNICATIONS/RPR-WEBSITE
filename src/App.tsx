"use client";

import { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Foundations } from './components/Foundations';
import { Labs } from './components/Labs';
import { Overwatch } from './components/Overwatch';

/**
 * TS-Λ3 // HARBOR A MAIN SUBSTRATE [v1.8.8 FIX & FREEZE]
 * Mission: Orchestrate restored components into the frozen marketing baseline.
 * Authority: hello@butterdime.com
 * Status: FROZEN.
 */

export default function App() {
  useEffect(() => {
    // Seating Material Symbols for "smart_toy" icon in Hero CTA
    // Requirement: MAIN-WEBSITE-FIX.md // ASK OLLIE ICON
    if (typeof document !== 'undefined') {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=smart_toy';
      document.head.appendChild(link);
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-cyan-500/30 font-sans">
      {/* GLOBAL HEADER (Frozen v1.8.8 - Top Left Logo, Center Nav, Right Avatar) */}
      <Header />

      <main className="flex flex-col">
        {/* HERO SECTION (Vercel Frozen Baseline - White/Cyan-400 Title) */}
        <Hero />

        {/* FOUNDATIONS (3-Pillar Grid + Sentinel Visualizer) - ID: #foundations */}
        <Foundations />

        {/* METHODS (Dynamic Anchor Block) - ID: #methods */}
        {/* Note: Logic seated here to ensure nav anchor parity if no dedicated component exists */}
        <div id="methods" className="invisible h-0" aria-hidden="true" />

        {/* LABS (Prototype Enclave - 4-Tier Grid) - ID: #labs */}
        <Labs />

        {/* OVERWATCH (Strategic Command Authority) - ID: #overwatch */}
        <Overwatch />
      </main>

      {/* GLOBAL FOOTER (Frozen baseline) */}
      <footer className="py-20 bg-black border-t border-white/5 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[10px] font-mono text-white/40 uppercase tracking-[0.5em] mb-6">
            RPR COMMUNICATIONS, LLC // SG-CANONICAL-2026 // v1.8.8
          </p>

          <nav className="flex justify-center flex-wrap gap-x-12 gap-y-4 text-[9px] font-black text-white/20 uppercase tracking-[0.25em]">
            <a href="#foundations" className="hover:text-cyan-400 transition-colors">THE FOUNDATIONS</a>
            <a href="#methods" className="hover:text-cyan-400 transition-colors">THE METHODS</a>
            <a href="#labs" className="hover:text-cyan-400 transition-colors">LABS</a>
            <a href="#overwatch" className="hover:text-cyan-400 transition-colors">THE OVERWATCH</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
