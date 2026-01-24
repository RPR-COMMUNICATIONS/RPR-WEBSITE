import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="h-[70px] fixed bottom-0 w-full z-[100] bg-black border-t border-border-dark flex items-center px-[20px] md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center relative">
        
        <div className="flex items-center gap-3 text-[10px] font-bold tracking-widest text-slate-500 uppercase">
          <span className="material-symbols-outlined text-primary text-xl">radar</span>
          <span>RPR COMMUNICATIONS LLC</span>
        </div>

        {/* ENGINEER LAYER: LOGIC OXO (Centered) */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center h-full">
          <div className="grid grid-cols-3 grid-rows-3 gap-1 opacity-40">
            <div className="w-4 h-4 border border-primary/20 flex items-center justify-center text-[10px] font-mono text-primary oxo-anim-x">X</div>
            <div className="w-4 h-4 border border-primary/20"></div>
            <div className="w-4 h-4 border border-primary/20 flex items-center justify-center text-[10px] font-mono text-primary oxo-anim-x">X</div>
            <div className="w-4 h-4 border border-primary/20"></div>
            <div className="w-4 h-4 border border-primary/20 flex items-center justify-center text-[10px] font-mono text-primary oxo-anim-o">O</div>
            <div className="w-4 h-4 border border-primary/20"></div>
            <div className="w-4 h-4 border border-primary/20"></div>
            <div className="w-4 h-4 border border-primary/20"></div>
            <div className="w-4 h-4 border border-primary/20"></div>
          </div>
        </div>

        <div className="flex gap-8 text-[10px] font-bold uppercase text-slate-600">
          <a className="hover:text-primary transition-colors" href="#">Sovereign Terms</a>
          <span className="text-white/5 font-mono">TS-Λ3</span>
        </div>

      </div>
    </footer>
  );
};