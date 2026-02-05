import React from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';

/**
 * TS-Λ3 // HOME HERO SUBSTRATE [v1.8.7]
 * Bugfix: Replaced Ollie icon with Material Symbols 'smart_toy'.
 * Mission: Align with Station 1 Governance standards.
 * Authority: hello@butterdime.com
 */
export const HomeHero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-20 overflow-hidden bg-[#020617]">
      {/* Ambient Background Substrate */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-sky-500/10 blur-[120px] rounded-full opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <header className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900/50 border border-sky-500/20 rounded-full mb-8">
            <ShieldCheck className="w-4 h-4 text-sky-500" />
            <span className="text-[10px] font-black text-sky-400 uppercase tracking-[0.3em]">
              Sovereign Governance // Station 1
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black text-white uppercase italic tracking-tighter leading-none mb-6">
            Architecting <span className="text-sky-500">Forensic</span><br />
            AI Substrates
          </h1>

          <p className="max-w-2xl mx-auto text-slate-400 text-sm md:text-base font-sans leading-relaxed">
            High-fidelity identity and audit engines for Agencies, Clinical Clinics, and SMEs.
            Seated in reality, governed by the SENTINEL Protocol.
          </p>
        </header>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <button className="px-8 py-5 bg-sky-500 text-slate-950 rounded-2xl font-black uppercase text-xs flex items-center gap-3 hover:bg-sky-400 transition-all group">
            INITIATE STRIKE
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* 🤖 ASK OLLIE BUTTON (BUGFIX: Seated smart_toy icon) */}
          <button className="px-8 py-5 bg-slate-900/40 text-white border border-slate-800 rounded-2xl font-black uppercase text-xs flex items-center gap-3 hover:bg-slate-800 transition-all">
            <span className="material-symbols-outlined text-xs md:text-sm text-sky-500">
              smart_toy
            </span>
            ASK OLLIE
          </button>
        </div>
      </div>
    </section>
  );
};
