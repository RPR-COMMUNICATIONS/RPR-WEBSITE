import React from 'react';
import { SentinelBadge } from './SentinelBadge';

/**
 * TS-Λ3 // THE OVERWATCH [v7.0.0]
 * Founder narrative with animated strategic game visuals
 */
export const Overwatch: React.FC = () => {
  return (
    <section className="px-[20px] md:px-12 py-32 max-w-7xl mx-auto" id="overwatch">
      <div className="border border-border-dark p-10 md:p-20 relative overflow-hidden rounded-3xl bg-white/[0.01]">
        <div className="flex flex-col md:flex-row gap-20 items-start relative z-10">
          
          {/* Left Pane: Narrative Substrate */}
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
            <p className="text-slate-400 leading-relaxed text-lg md:text-xl max-w-3xl">
              Strategy is not a document; it is an act of sovereign observation. Much like a blindfold chess match, we do not react to what is visible on the board—we anticipate the substrate of the game itself. My role is to maintain the Sentinel Protocol, ensuring every move from Discovery to Improvement is executed with high-fidelity forensic accuracy.
            </p>
          </div>

          {/* Right Pane: Animated Visual Latches */}
          <div className="w-full md:w-[342px] space-y-6">
            
            {/* Top Visual: Blindfold Chess Match (Top-View) */}
            <div className="aspect-square bg-black border border-white/10 relative rounded-xl overflow-hidden p-1">
              <div className="grid grid-cols-8 grid-rows-8 h-full w-full opacity-40">
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
              {/* Ghost Move Highlights - Animated */}
              <div className="absolute top-[25%] left-[37.5%] w-[12.5%] h-[12.5%] bg-purple-500/40 border border-purple-500 shadow-[0_0_20px_#8B5CFF] animate-pulse"></div>
              <div className="absolute bottom-[12.5%] right-[25%] w-[12.5%] h-[12.5%] bg-cyan-500/20 border border-cyan-500/40 animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-[50%] left-[12.5%] w-[12.5%] h-[12.5%] bg-cyan-500/30 border border-cyan-500/50 animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Bottom Visual: Noughts and Crosses (Solved Game) */}
            <div className="aspect-square bg-black border border-white/10 relative rounded-xl overflow-hidden p-4">
              <div className="grid grid-cols-3 grid-rows-3 h-full w-full gap-1">
                {/* Top row */}
                <div className="border border-zinc-800 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 border-2 border-cyan-500 rounded-full"></div>
                </div>
                <div className="border border-zinc-800 flex items-center justify-center">
                  <svg className="w-3/4 h-3/4" viewBox="0 0 100 100" stroke="#00E0FF" strokeWidth="8" fill="none">
                    <line x1="20" y1="20" x2="80" y2="80" strokeLinecap="round" />
                    <line x1="80" y1="20" x2="20" y2="80" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="border border-zinc-800 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 border-2 border-cyan-500 rounded-full"></div>
                </div>
                {/* Middle row */}
                <div className="border border-zinc-800 flex items-center justify-center">
                  <svg className="w-3/4 h-3/4" viewBox="0 0 100 100" stroke="#00E0FF" strokeWidth="8" fill="none">
                    <line x1="20" y1="20" x2="80" y2="80" strokeLinecap="round" />
                    <line x1="80" y1="20" x2="20" y2="80" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="border border-zinc-800 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 border-2 border-cyan-500 rounded-full"></div>
                </div>
                <div className="border border-zinc-800 flex items-center justify-center">
                  <svg className="w-3/4 h-3/4" viewBox="0 0 100 100" stroke="#00E0FF" strokeWidth="8" fill="none">
                    <line x1="20" y1="20" x2="80" y2="80" strokeLinecap="round" />
                    <line x1="80" y1="20" x2="20" y2="80" strokeLinecap="round" />
                  </svg>
                </div>
                {/* Bottom row */}
                <div className="border border-zinc-800 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 border-2 border-cyan-500 rounded-full"></div>
                </div>
                <div className="border border-zinc-800 flex items-center justify-center">
                  <svg className="w-3/4 h-3/4" viewBox="0 0 100 100" stroke="#00E0FF" strokeWidth="8" fill="none">
                    <line x1="20" y1="20" x2="80" y2="80" strokeLinecap="round" />
                    <line x1="80" y1="20" x2="20" y2="80" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="border border-zinc-800 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 border-2 border-cyan-500 rounded-full"></div>
                </div>
              </div>
              {/* Solved indicator */}
              <div className="absolute bottom-2 right-2 text-[8px] font-mono text-cyan-500 uppercase tracking-wider">
                SOLVED
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};