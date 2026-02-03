import React from 'react';

/**
 * TS-Λ3 // HARBOR A HERO SECTION [v6.2.0]
 * PRIMARY ACTIVATION: Global Intelligence, Experiential Activation
 * OPERATIONAL LATCH: LABS + ASK OLLIE dual navigation
 */
export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-16">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <div className="inline-block border border-white/10 rounded-full px-4 py-1.5 font-mono text-[10px] tracking-[0.15em] uppercase font-medium text-white/70">
          EST. 2025 // EXPERIENTIAL COMMUNICATIONS
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-tight">
          <span className="text-white">GLOBAL INTELLIGENCE,</span>
          <br />
          <span className="text-cyan-400">EXPERIENTIAL ACTIVATION.</span>
        </h1>

        <p className="max-w-3xl mx-auto text-base lg:text-lg text-white/60 leading-relaxed">
          WE'RE A BOUTIQUE AGENCY AND EXPERIENCE STUDIO THAT ACTUALLY CARES IF THE CAMPAIGN MOVES THE NEEDLE. WE PLAN CAMPAIGNS BASED ON REAL WORLD RESULTS THROUGH DIGITAL, VIRTUAL AND THE PHYSICAL SPACES..WITH THE MESSY BITS IN BETWEEN.
        </p>

        <div className="flex items-center justify-center gap-4">
          <a
            href="https://rprcomms.com/labs"
            className="inline-flex items-center gap-2 bg-cyan-500 text-black px-6 py-3 rounded hover:bg-cyan-400 transition-colors text-sm font-semibold tracking-wider uppercase"
          >
            HIGHLIGHTS
          </a>
          <button
            className="inline-flex items-center gap-2 bg-transparent border border-white/20 text-white/80 px-6 py-3 rounded hover:border-white/40 hover:text-white transition-colors text-sm font-semibold tracking-wider uppercase"
          >
            <span className="material-symbols-outlined text-sky-500">smart_toy</span>
            ASK OLLIE
          </button>
        </div>
      </div>
    </section>
  );
};