import React from 'react';

/**
 * TS-Λ3 // HARBOR A HERO SECTION [v6.2.0]
 * PRIMARY ACTIVATION: Global Intelligence, Experiential Activation
 * OPERATIONAL LATCH: LABS + ASK OLLIE dual navigation
 */
export const Hero: React.FC = () => {
  return (
    <section className="px-[20px] md:px-32 py-24 md:py-40 max-w-7xl mx-auto grid-bg">
      <div className="flex flex-col gap-10 max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold tracking-widest uppercase w-fit">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
          EST. 2025 // Experiential Communications
        </div>
        
        <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] text-white uppercase">
          Global Intelligence<br/>
          <span className="text-primary">Experiential Activation.</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-slate-400 leading-relaxed font-light max-w-2xl uppercase tracking-tight">
          We're a boutique agency and experience studio that actually cares if the campaign moves the needle. We plan campaigns based on real world results through digital, virtual and the physical spaces..with the messy bits in between.
        </p>

        {/* CTA Buttons with Icons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <a
            href="/#labs"
            className="flex items-center justify-center gap-2 px-8 py-3 bg-primary text-[#050505] font-bold uppercase text-sm rounded-lg hover:brightness-110 transition-all"
          >
            <span className="material-symbols-outlined text-base">science</span>
            Labs
          </a>
          <a
            href="/#chat"
            className="flex items-center justify-center gap-2 px-8 py-3 border border-white/20 text-white font-bold uppercase text-sm rounded-lg hover:border-primary hover:text-primary transition-all"
          >
            <span className="material-symbols-outlined text-base">chat</span>
            Ask Ollie
          </a>
        </div>
      </div>
    </section>
  );
};