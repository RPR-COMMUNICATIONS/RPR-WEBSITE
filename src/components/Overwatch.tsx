import React from 'react';
import { ShieldAlert, Activity, Fingerprint } from 'lucide-react';

/**
 * TS-Λ3 // OVERWATCH SUBSTRATE [v2.1.0]
 * Mission: Strategic Authority & Founder Interface.
 * Authority: hello@butterdime.com
 */
export const Overwatch: React.FC = () => {
  return (
    <section id="overwatch" className="py-24 relative overflow-hidden bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION HEADER: Re-aligned to v2.1.0 Governance */}
        <header className="mb-20 border-l-2 border-red-500 pl-8">
          <span className="text-red-500 font-mono text-[10px] uppercase tracking-[0.5em] block mb-4">
            Phase 1 // Strategic Authority
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter italic leading-none">
            THE <span className="text-red-500 font-black">OVERWATCH</span> COMMAND
          </h2>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <p className="text-slate-400 text-sm leading-relaxed max-w-xl font-sans uppercase tracking-tight">
              The Overwatch substrate is the final sovereign decision authority.
              It serves as the interface between Founder Authority and the Advisor loop,
              governing the graduation of prototypes from The Forge into production-ready sovereign solutions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: Fingerprint, label: "Founder Latch" },
                { icon: ShieldAlert, label: "Sentinel Protocol" }
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-[2.5rem] bg-slate-900/10 border border-slate-800 flex items-center gap-4 group hover:border-red-500/30 transition-all duration-700">
                  <item.icon className="w-5 h-5 text-red-500 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-red-500/5 rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative p-10 rounded-[2.5rem] border border-slate-800 bg-black flex flex-col justify-between min-h-[300px] shadow-2xl">
              <Activity className="w-8 h-8 text-red-500 animate-pulse mb-8" />
              <div>
                <span className="text-[9px] font-mono text-red-400 uppercase tracking-widest block mb-2">Operational Status // LATCHED</span>
                <p className="text-2xl font-bold text-white uppercase italic tracking-tight leading-none">Sovereign Gatekeeper</p>
                <p className="text-slate-600 text-[10px] mt-4 font-mono uppercase">Audit ID: CLEANUP-STRIKE-v2.1.0-COMPLETE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
