import React from 'react';
import { SentinelBadge } from './SentinelBadge';

export const Overwatch: React.FC = () => {
  return (
    <section className="px-[20px] md:px-12 py-32 max-w-7xl mx-auto" id="overwatch">
      <div className="border border-border-dark p-10 md:p-20 relative overflow-hidden rounded-3xl bg-white/[0.01]">
        <div className="flex flex-col md:flex-row gap-20 items-start relative z-10">
          
          {/* 342px STRATEGIC CHESS GRID (Ghost Move Animation) */}
          <div className="w-full md:w-[342px] aspect-square bg-black border border-white/10 relative rounded-xl overflow-hidden p-1">
            <div className="grid grid-cols-8 grid-rows-8 h-full w-full opacity-40">
              {/* 8x8 Tactical pattern */}
              {Array.from({ length: 8 }).map((_, row) => (
                <React.Fragment key={row}>
                  {Array.from({ length: 8 }).map((_, col) => (
                    <div 
                      key={col} 
                      className={row % 2 === col % 2 ? 'bg-zinc-900/40' : 'bg-transparent'}
                    />
                  ))}
                </React.Fragment>
              ))}
            </div>
            {/* Ghost Move Highlight */}
            <div className="absolute top-[25%] left-[37.5%] w-[12.5%] h-[12.5%] bg-governance/40 border border-governance shadow-[0_0_20px_#8B5CFF] animate-pulse"></div>
            <div className="absolute bottom-[12.5%] right-[25%] w-[12.5%] h-[12.5%] bg-primary/20 border border-primary/40"></div>
            
            <div className="absolute bottom-4 left-4 flex gap-3">
              <div className="bg-black/60 backdrop-blur-md p-2 border border-white/5 rounded">
                <p className="text-[7px] text-white/40 uppercase tracking-widest">Latency</p>
                <p className="text-[10px] font-mono text-primary">12ms</p>
              </div>
              <div className="bg-black/60 backdrop-blur-md p-2 border border-white/5 rounded">
                <p className="text-[7px] text-white/40 uppercase tracking-widest">Node</p>
                <p className="text-[10px] font-mono text-white">AS1-V4</p>
              </div>
            </div>
          </div>
          
          <div className="flex-1 flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <h2 className="text-primary font-bold tracking-[0.4em] text-[10px] flex items-center gap-4 uppercase">
                // THE OVERWATCH
              </h2>
              <SentinelBadge />
            </div>
            <div>
              <h3 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tighter uppercase">Puvan Sivanasan</h3>
              <p className="text-primary font-bold text-xs tracking-[0.3em] uppercase">Founder & Principal Strategist</p>
            </div>
            <p className="text-slate-400 leading-relaxed text-lg uppercase tracking-tight">
              Leveraging artificial constructs to apply knowledge discovery, systems thinking, and polymathic research within human frameworks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};