import React from 'react';
import { Link } from 'react-router-dom';
import { Lock, Activity, Globe, Fingerprint, ShieldAlert, ArrowLeft } from 'lucide-react';

/**
 * TS-Λ3 // RPR VERIFY LANDING SUBSTRATE [v1.1.0]
 * Path: src/pages/labs/verify.tsx
 * Mission: Resolve [plugin:vite:import-analysis] // Architectural Realignment
 * Authority: THE OVERWATCH // SG-CANONICAL-2026
 * Fix: Liquidated broken local SVG imports (SentinelIcon, BishopIcon, etc.).
 * Fix: Point-locked to SymbolTile (Material Symbols) and Lucide-React axis.
 * Status: HARDENED // EXIT 0
 */

// 🧬 AUTHORITATIVE UI LATCHES
import SymbolTile from '../../components/icons/symboltile.tsx';
import SovereignGlass from '../../components/sovereignglass.tsx';
import { RprVerifyLogo } from '../../brand/rprverifylogo.tsx';

export const Verify: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-slate-100 font-sans selection:bg-cyan-500/30 overflow-x-hidden antialiased">

      {/* 🛰️ NAVIGATION SUBSTRATE */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/80 backdrop-blur-md px-6 md:px-10 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-4 group">
            <div className="p-2 rounded-full border border-white/10 group-hover:border-cyan-500/50 transition-all">
              <ArrowLeft size={16} className="text-slate-500 group-hover:text-cyan-400 group-hover:-translate-x-1 transition-all" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-500 group-hover:text-white transition-colors">
              MOTHERSHIP_COMMAND
            </span>
          </Link>

          <div className="flex items-center gap-8">
            <div className="hidden md:flex items-center gap-3 border-r border-white/10 pr-8">
              <span className="text-[8px] font-mono text-slate-600 uppercase tracking-widest">Sovereign_Node</span>
              <span className="text-[10px] font-mono text-cyan-500 font-bold uppercase tracking-tighter">SG_NODE_12.4</span>
            </div>
            <div className="flex h-2 w-2 rounded-full bg-cyan-500 animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
          </div>
        </div>
      </nav>

      <main className="pt-40 pb-32 px-6 md:px-12 max-w-7xl mx-auto">

        {/* 🏛️ HERO AXIS: THE PROGENY OF NECESSITY */}
        <header className="mb-32 border-l-4 border-cyan-500 pl-8 md:pl-12 relative">
          <div className="absolute -left-1.5 top-0 h-12 w-1.5 bg-white shadow-[0_0_15px_white]" />

          <div className="mb-12">
            <RprVerifyLogo size={96} />
          </div>

          <div className="max-w-4xl space-y-8 text-left">
            <h1 className="text-4xl md:text-7xl font-black text-white uppercase italic tracking-tighter leading-[0.95]">
              FORENSIC INGESTION <br />
              <span className="text-cyan-400">WITHOUT HALLUCINATION.</span>
            </h1>

            <div className="text-slate-400 text-base md:text-xl leading-relaxed uppercase font-mono tracking-tight opacity-90 border-t border-white/5 pt-8">
              HIGH-STAKES COMPLIANCE CANNOT TOLERATE THE "BLACK BOX" SILENCE OF LEGACY AI.
              <span className="block mt-6 text-white italic">
                RPR-VERIFY ENFORCES VERITAS COMPLIANCE ACROSS IDENTITY AND OWNERSHIP MODULES VIA THE RAM + SENTINEL PROTOCOL.
              </span>
            </div>
          </div>
        </header>

        {/* 🧬 FORENSIC PILLARS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-32">
          {[
            {
              title: "VERITAS COMPLIANCE",
              glyph: "verified_user",
              desc: "100% type coverage. We don't just process data; we enforce it via the RAM framework to ensure role-based data integrity."
            },
            {
              title: "ERROR TOPOLOGY",
              glyph: "troubleshoot",
              desc: "Mapping non-deterministic failures in real-time. We catch the silent failures that standard agents ignore."
            },
            {
              title: "REGIONAL LOCK",
              glyph: "lan",
              desc: "Sovereign data residency point-locked to the Singapore Node. Security enforced at the infrastructure root."
            }
          ].map((item, i) => (
            <SovereignGlass key={i} className="group hover:border-cyan-500/40 transition-all duration-700 relative overflow-hidden h-full flex flex-col">
              <div className="mb-8">
                {/* 🛡️ SYMBOL LATCH: Utilizing Material Symbols glyphs */}
                <SymbolTile glyph={item.glyph} size={48} active={true} iconFill={1} />
              </div>
              <h3 className="text-xl font-black text-white uppercase italic mb-6 tracking-widest leading-none">{item.title}</h3>
              <p className="text-xs font-mono text-slate-500 uppercase tracking-tighter leading-relaxed flex-grow">{item.desc}</p>
            </SovereignGlass>
          ))}
        </div>

        {/* 🛡️ THE AUDIT TERMINAL (Forensic Simulation) */}
        <section className="bg-zinc-900/10 border border-white/10 rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-16 pb-8 border-b border-white/5">
            <div className="flex items-center gap-5">
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:border-cyan-500/30 transition-all">
                <ShieldAlert className="text-cyan-500 w-8 h-8" />
              </div>
              <div>
                <h2 className="text-2xl font-black uppercase text-white italic tracking-[0.1em] leading-none">
                  Sovereign Audit Terminal
                </h2>
                <p className="text-[10px] font-mono text-slate-500 mt-2 uppercase tracking-[0.2em]">ENFORCEMENT_PROTOCOL // ACTIVE</p>
              </div>
            </div>

            <div className="flex gap-12 text-left">
              <div className="space-y-1">
                <p className="text-[9px] font-mono text-slate-600 uppercase tracking-widest">Case_ID</p>
                <p className="text-sm font-mono text-cyan-500 font-bold uppercase">VERIFY-ID-9932</p>
              </div>
              <div className="space-y-1">
                <p className="text-[9px] font-mono text-slate-600 uppercase tracking-widest">Status</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <p className="text-sm font-mono text-red-500 font-bold uppercase tracking-tighter">RED_ESCALATION</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
            <div className="space-y-10">
              <div className="p-8 bg-red-500/10 border border-red-500/30 rounded-3xl relative overflow-hidden animate-in fade-in slide-in-from-left duration-1000">
                <div className="flex items-start gap-6">
                  <Activity className="text-red-500 w-6 h-6 shrink-0 mt-1" />
                  <div>
                    <p className="text-xs font-black text-red-500 uppercase tracking-[0.3em] mb-3">IDENTITY_MISMATCH_DETECTED</p>
                    <p className="text-sm text-slate-300 font-mono leading-relaxed uppercase italic">
                      "Non-deterministic parsing detected in POA module. Expected Name format mismatch with Bank Ownership Latch. Triggering Overwatch intervention via Sentinel."
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {[
                  { label: "POI VALIDATION", state: "SUCCESS", color: "text-cyan-500" },
                  { label: "POA LATCH", state: "FAILED", color: "text-red-500" },
                  { label: "BANK SYNC", state: "STALLED", color: "text-orange-500" },
                  { label: "GEO FENCE", state: "LOCKED", color: "text-white" }
                ].map((stat, i) => (
                  <div key={i} className="p-5 bg-white/5 border border-white/10 rounded-2xl flex justify-between items-center group-hover:bg-white/[0.08] transition-all">
                    <span className="text-[10px] font-mono text-slate-500 uppercase font-black">{stat.label}</span>
                    <span className={`text-[10px] font-black uppercase ${stat.color}`}>{stat.state}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center justify-center p-12 border border-dashed border-white/10 rounded-[3rem] bg-white/[0.01] relative overflow-hidden group/geo">
              <div className="absolute inset-0 bg-cyan-500/[0.02] opacity-0 group-hover/geo:opacity-100 transition-opacity duration-700" />
              <Globe className="w-20 h-20 text-cyan-500/10 mb-8 transform group-hover/geo:scale-110 transition-transform duration-1000" />
              <div className="text-center space-y-6 relative z-10">
                <div className="space-y-2">
                  <div className="text-white font-black text-sm uppercase tracking-[0.6em] leading-none">
                    SINGAPORE_NODE_LATCH
                  </div>
                  <p className="text-slate-500 font-mono text-[10px] uppercase tracking-[0.3em] italic">
                      // DATA_RESIDENCY_ENFORCED
                  </p>
                </div>
                <div className="pt-8 w-full">
                  <button className="w-full bg-cyan-500 text-black py-5 px-8 rounded-sm font-black uppercase text-xs tracking-[0.3em] hover:bg-cyan-400 transition-all flex items-center justify-center gap-3">
                    <Lock size={16} /> AUTHORIZE FORENSIC AUDIT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 🧬 FOOTER LATCH */}
      <footer className="py-20 border-t border-white/5 bg-black/50 backdrop-blur-sm mt-32">
        <div className="max-w-7xl mx-auto px-10 flex flex-col md:flex-row justify-between items-center gap-12 opacity-30 select-none grayscale hover:grayscale-0 hover:opacity-60 transition-all duration-700">
          <div className="flex items-center gap-4">
            <Fingerprint size={24} className="text-white" />
            <span className="text-[10px] font-mono uppercase tracking-[0.8em] text-white">RPR-VERIFY-PROTOCOL-v12.4</span>
          </div>
          <span className="text-[9px] font-mono uppercase tracking-[0.4em] text-slate-500">SG-CANONICAL-2026 // ALL RIGHTS RESERVED</span>
        </div>
      </footer>

    </div>
  );
};

export default Verify;