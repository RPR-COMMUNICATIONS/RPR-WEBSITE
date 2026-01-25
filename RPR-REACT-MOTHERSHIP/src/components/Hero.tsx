import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="px-[20px] md:px-32 py-24 md:py-40 max-w-7xl mx-auto grid-bg">
      <div className="flex flex-col gap-10 max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold tracking-widest uppercase w-fit">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
          EST. 2025 // Experiential Communications
        </div>
        
        <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] text-white uppercase">
          Global Intelligence,<br/>
          <span className="text-primary">Experiential Activation.</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-slate-400 leading-relaxed font-light max-w-2xl uppercase tracking-tight">
          Boutique agency and experience studio. Designing brand work that lives in the real world—digital products and forensic substrates.
        </p>
        
        <div className="flex flex-col md:flex-row items-stretch md:items-start gap-4 mt-8">
          <a href="#products" className="bg-primary text-black px-12 py-5 font-bold uppercase tracking-widest text-xs flex items-center gap-4 group justify-center">
            View Products 
            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </a>
          <a href="#ask-ollie" className="border border-slate-700 px-12 py-5 font-bold uppercase tracking-widest text-xs hover:bg-zinc-900 transition-colors text-center">
            Inquire Ollie
          </a>
        </div>
      </div>
    </section>
  );
};