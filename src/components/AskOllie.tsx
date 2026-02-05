/**
 * TS-Λ3 // ASK OLLIE // AI INTERFACE [v1.0.0]
 * RECTIFIED: Switched to Material Symbols Variable Font and White Icons.
 */
import React from 'react';

export const AskOllie: React.FC = () => {
  return (
    <section id="chat" className="bg-black py-32 px-6 md:px-12">
      <div className="max-w-4xl mx-auto border border-zinc-800 rounded-2xl bg-[#0A0A0A] overflow-hidden shadow-2xl">
        <div className="p-6 border-b border-zinc-800 flex items-center justify-between bg-zinc-900/50">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-cyan-500 rounded-sm flex items-center justify-center">
              <span className="material-symbols-outlined text-black text-[20px]">
                auto_awesome
              </span>
            </div>
            <div>
              <h3 className="text-white text-xs font-black tracking-widest font-mono uppercase">OLLIE // SENTINEL AI</h3>
              <p className="text-[8px] text-cyan-500 font-mono uppercase">Status: Operational</p>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
          </div>
        </div>

        <div className="h-96 p-6 flex flex-col justify-end gap-4 overflow-y-auto font-mono text-[10px] tracking-tight text-zinc-500 uppercase">
          <div className="flex gap-4">
            <span className="text-cyan-500 flex-shrink-0">[SYSTEM]:</span>
            <p>Mothership substrate confirmed. Awaiting strategic query...</p>
          </div>
        </div>

        <div className="p-4 bg-zinc-950 border-t border-zinc-800">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="ASK OLLIE..."
              className="w-full bg-black border border-zinc-800 rounded-lg py-4 px-6 text-xs font-mono text-white placeholder:text-zinc-700 focus:outline-none focus:border-cyan-500/50 transition-all"
            />
            <button className="absolute right-4 p-2 text-zinc-500 hover:text-white transition-colors">
              <span className="material-symbols-outlined text-[18px]">
                send
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};