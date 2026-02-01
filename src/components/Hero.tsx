import React from 'react';

/**
 * TS-Λ3 // HERO SUBSTRATE [v1.8.8 FREEZE]
 * Spec: Vercel Frozen Baseline - White/Cyan-400 Title.
 * Authority: hello@butterdime.com
 */
export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Background Pulse */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900/20 via-black to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 flex flex-col items-center text-center">
        {/* Badge */}
        <div className="mb-10 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
          <span className="text-white/40 text-[10px] font-mono uppercase tracking-[0.3em]">
            EST. 2025 // EXPERIENTIAL COMMUNICATIONS
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-black tracking-tighter italic leading-[0.9] uppercase mb-10">
          <span className="text-white block">GLOBAL INTELLIGENCE,</span>
          <span className="text-cyan-400 block">EXPERIENTIAL ACTIVATION.</span>
        </h1>

        {/* Body */}
        <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-3xl mb-12 font-medium">
          We're a boutique agency and experience studio that actually cares if the campaign moves the needle. We plan campaigns based on real world results through digital, virtual and the physical spaces..with the messy bits in between.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#foundations"
            className="px-8 py-4 bg-cyan-500 text-black rounded-xl font-black text-xs uppercase tracking-widest hover:bg-cyan-400 transition-colors shadow-[0_0_20px_rgba(6,182,212,0.3)]"
          >
            HIGHLIGHTS
          </a>
          <a
            href="#labs"
            className="px-8 py-4 border border-white/20 text-white/80 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-white/5 transition-colors flex items-center gap-2 group"
          >
            <span className="material-symbols-outlined text-[18px] text-cyan-400 group-hover:scale-110 transition-transform">smart_toy</span>
            ASK OLLIE
          </a>
        </div>
      </div>
    </section>
  );
};
