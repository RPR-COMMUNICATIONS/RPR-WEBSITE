import React from "react";
import { ShieldAlert, Activity, Fingerprint } from "lucide-react";

/**
 * TS-Λ3 // OVERWATCH SUBSTRATE [v2.2.4]
 * Mission: Bio Seating & Icon Stability
 * Authority: SG-CANONICAL-2026 // v2.2.1 Master Content Manifest
 * Status: HARDENED // EXIT 0 ALIGNED
 */

export const Overwatch: React.FC = () => {
  return (
    <section
      id="overwatch"
      className="py-24 relative overflow-hidden bg-[#050505] border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* SECTION HEADER: Red Sovereignty Latch */}
        <header className="mb-20 border-l-2 border-red-500 pl-8">
          <span className="text-red-500 font-mono text-[10px] uppercase tracking-[0.5em] block mb-4">
            Phase 1 // Strategic Authority
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter italic leading-none font-sans">
            THE <span className="text-red-500 font-black">OVERWATCH</span> COMMAND
          </h2>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            {/* MANDATED CONTENT: Character-for-Character Bio */}
            <div className="text-slate-400 text-sm leading-relaxed max-w-xl font-sans space-y-6 italic">
              <p>
                Having spent 20 years in corporate communications and brand activation—from local event firms to
                international creative agencies—he has worked on everything from on-ground activations to award-winning
                campaigns for global corporations. What began as a fascination with human behaviour and systems, and a
                belief that technology should be used to improve people's lives rather than just generate TikTok likes,
                has evolved into a multidisciplinary approach to customer experience.
              </p>
              <p>
                While experimenting with AI for his own personal writings and ideas, a pattern he noticed in a client
                problem raised a different question: how can a sentient being leverage an artificial construct to apply
                its knowledge in knowledge discovery, systems thinking, and polymathic research—within the same human
                framework of systems and silos—to create something better?
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8">
              {[
                { icon: Fingerprint, label: "Identity Latch" },
                { icon: ShieldAlert, label: "Sovereign Proxy" }
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 rounded-[2rem] bg-slate-900/10 border border-slate-800 flex items-center gap-4 group hover:border-red-500/30 transition-all duration-700"
                >
                  <item.icon className="w-5 h-5 text-red-500 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-300 font-mono">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* STATUS PANEL: Forensic Pulse */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-red-500/5 rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition duration-1000" />
            <div className="relative p-10 rounded-[2.5rem] border border-slate-800 bg-black flex flex-col justify-between min-h-[350px] shadow-2xl">
              <Activity className="w-8 h-8 text-red-500 animate-pulse mb-8" />
              <div>
                <span className="text-[9px] font-mono text-red-400 uppercase tracking-widest block mb-2">
                  Operational Status // LATCHED
                </span>
                <p className="text-2xl font-bold text-white uppercase italic tracking-tight leading-none font-sans">
                  Sovereign Gatekeeper
                </p>
                <div className="mt-6 pt-6 border-t border-white/5">
                  <p className="text-slate-600 text-[9px] font-mono uppercase tracking-widest">
                    Audit ID: STABILIZATION-v2.2.0-RECOVERY
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
