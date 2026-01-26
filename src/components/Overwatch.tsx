import React from 'react';
import { SentinelBadge } from './SentinelBadge';

/**
 * TS-Λ3 // THE OVERWATCH [v7.0.0]
 * Founder narrative with animated strategic game visuals
 * RECTIFIED: Switched to Material Symbols Variable Font (Chess Symbology).
 */
export const Overwatch: React.FC = () => {
  const roles = [
    { label: 'Architect', icon: 'chess_knight', purpose: 'Design Sovereignty' },
    { label: 'Engineer', icon: 'chess_bishop', purpose: 'Technical Oversight' },
    { label: 'Sentinel', icon: 'chess_rook', purpose: 'Operational Security' },
  ];

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
              Strategy is not a document; it is an act of sovereign observation. Much like a blindfold chess match, we do not react to what is visible on the board—we anticipate the substrate of the game itself. My role is to maintain the Sentinel Protocol, ensuring every move from Discovery to Repeat is executed with high-fidelity forensic accuracy.
            </p>

            {/* Tripartite Roles: Squircle Latch Implementation */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
              {roles.map((role) => (
                <div key={role.label} className="group relative bg-[#0A0A0A] border border-zinc-800 p-6 rounded-xl hover:border-cyan-500/50 transition-all flex flex-col items-center text-center gap-4">
                  {/* UNIFIED CONTAINER SPECIFICATION */}
                  <div className="w-12 h-12 bg-black border border-zinc-800 rounded-xl flex items-center justify-center group-hover:border-cyan-500/50 transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                    <span className="material-symbols-outlined text-cyan-400 text-2xl group-hover:text-white transition-colors">
                      {role.icon}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white">{role.label}</p>
                    <p className="text-[8px] font-mono uppercase tracking-widest text-zinc-500">{role.purpose}</p>
                  </div>
                </div>
              ))}
            </div>
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

              {/* Substrate Label */}
              <div className="absolute bottom-4 left-4 text-[8px] font-mono text-zinc-500 uppercase tracking-widest">
                Substrate: Active
              </div>
            </div>

            {/* Tactical Brief */}
            <div className="p-6 bg-zinc-900/30 border border-white/5 rounded-xl">
              <p className="text-[10px] font-mono text-zinc-400 leading-relaxed">
                <span className="text-cyan-500 font-bold">// TACTICAL DIRECTIVE:</span> Maintaining continuous downward slope in all logic. 100% health required for Singapore Node deployment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};