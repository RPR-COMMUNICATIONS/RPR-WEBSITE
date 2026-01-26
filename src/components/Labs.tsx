import React from 'react';
import { useAuth } from '../contexts/AuthContext';

/**
 * TS-Λ3 // HARBOR A LABS [v1.0.0]
 * Formerly: Products.tsx
 * Objective: High-fidelity intelligence landing for internal tooling.
 */
export const Labs: React.FC = () => {
  const { user } = useAuth();

  return (
    <section className="px-6 md:px-12 py-24 bg-black border-b border-white/10" id="labs">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-4 mb-16">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-[10px] font-black tracking-[0.3em] text-cyan-500 uppercase">
              <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
              INTELLIGENCE SUBSTRATE // LABS
            </div>

            {user && (
              <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
                <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-ping" />
                <span className="text-[8px] font-black text-cyan-500 uppercase tracking-widest">
                  TELEMETRY HYDRATED // {user.email?.split('@')[0]}
                </span>
              </div>
            )}
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
            PROTOTYPE <span className="text-zinc-800">ENCLAVES</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* VERIFY LATCH */}
          <a
            href="https://verify.rprcomms.com"
            className="group relative bg-zinc-900/40 border border-white/5 p-12 rounded-2xl hover:border-cyan-500/30 transition-all overflow-hidden"
          >
            <div className="relative z-10">
              <span className="material-symbols-outlined text-cyan-500 text-4xl mb-6">fingerprint</span>
              <h3 className="text-2xl font-black text-white uppercase mb-4">RPR VERIFY</h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-8 uppercase font-medium">
                Real-time forensic verification engine for clinical data extraction and identity latching.
              </p>
              <div className="text-[10px] font-black text-cyan-500 tracking-widest uppercase flex items-center gap-2">
                INITIATE EXTRACTION <span className="group-hover:translate-x-2 transition-transform">→</span>
              </div>
            </div>
          </a>

          {/* KONTROL GOVERNANCE (Shared with Harbor A) */}
          <a
            href="https://kontrol.rprcomms.com"
            className="group relative bg-zinc-900/40 border border-white/5 p-12 rounded-2xl hover:border-cyan-500/30 transition-all overflow-hidden"
          >
            <div className="relative z-10">
              <span className="material-symbols-outlined text-zinc-500 text-4xl mb-6">token</span>
              <h3 className="text-2xl font-black text-white uppercase mb-4">RPR KONTROL</h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-8 uppercase font-medium">
                The authoritative governance plane for substrate oversight and telemetry auditing.
              </p>
              <div className="text-[10px] font-black text-zinc-500 tracking-widest uppercase flex items-center gap-2">
                ENTER GOVERNANCE <span className="group-hover:translate-x-2 transition-transform">→</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

