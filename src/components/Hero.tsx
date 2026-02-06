import React from 'react';
import { Icon } from './Icon';

/**
 * TS-Λ3 // HERO SUBSTRATE [v1.8.9 HYBRID - RECOVERY]
 * Layout: Left Aligned Content (v1.8.8 Spec)
 * Headline: White / Cyan-400 Italic (v1.8.8 Spec)
 * Copy: The "Needle Mandate" (Authoritative Content)
 * CTA: LABS (Linked to #labs)
 * Authority: hello@butterdime.com
 */

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-start bg-black overflow-hidden pt-20 px-6 lg:px-24 text-left">
      {/* Background Gradient Pulse */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black pointer-events-none opacity-50" />

      <div className="max-w-5xl relative z-10 flex flex-col items-start">
        {/* BADGE */}
        <div className="inline-block border border-white/10 rounded-full px-4 py-1.5 mb-10">
          <span className="text-[10px] font-mono font-medium text-white/40 uppercase tracking-[0.2em]">
            EST. 2025 // EXPERIENTIAL COMMUNICATIONS
          </span>
        </div>

        {/* HEADLINE */}
        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-8 uppercase italic font-sans">
          <span className="text-white block">GLOBAL INTELLIGENCE,</span>
          <span className="text-cyan-400 block mt-2">EXPERIENTIAL ACTIVATION.</span>
        </h1>

        {/* BODY (The Needle Mandate) */}
        <p className="max-w-2xl text-base lg:text-lg text-white/60 leading-relaxed font-normal mb-12 uppercase font-mono tracking-tight">
          WE'RE A BOUTIQUE AGENCY AND EXPERIENCE STUDIO THAT ACTUALLY CARES IF THE CAMPAIGN MOVES THE NEEDLE.
          WE PLAN CAMPAIGNS BASED ON REAL WORLD RESULTS THROUGH DIGITAL, VIRTUAL AND THE PHYSICAL SPACES..WITH THE MESSY BITS IN BETWEEN.
        </p>

        {/* CTA GROUP */}
        <div className="flex flex-col sm:flex-row items-center gap-5">
          <a
            href="#labs"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-cyan-500 text-black px-10 py-4 rounded-xl hover:bg-cyan-400 transition-colors text-xs font-black tracking-widest uppercase font-mono shadow-[0_0_20px_rgba(6,182,212,0.2)]"
          >
            LABS
          </a>
          <button
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-transparent border border-white/20 text-white/80 px-10 py-4 rounded-xl hover:border-white/40 hover:text-white transition-all text-xs font-black tracking-widest uppercase font-mono group"
          >
            <Icon name="smart_toy" className="text-cyan-400" size="22px" />
            ASK OLLIE
          </button>
        </div>
      </div>
    </section>
  );
};
