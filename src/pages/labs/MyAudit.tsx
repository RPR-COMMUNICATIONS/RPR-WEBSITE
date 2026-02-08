import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { C4Icon } from '../../components/c4-elements';
import SentinelIcon from '../../components/icons/the_sentinel_protocol.svg';
import OverwatchIcon from '../../components/icons/overwatch.svg';
import KnightIcon from '../../components/icons/rpr-icon-chess_knight.svg';

/**
 * TS-Λ3 // MYAUDIT CLIENT INSTANCE [v2.1.0]
 * Path: /labs/myaudit
 * Identity: Standalone Forensic reporting for Malaysian SMEs.
 * Bauhaus Icon Alignment: Unified img-based rendering.
 */

export const MyAudit: React.FC = () => {
  const [timestamp, setTimestamp] = useState(new Date().toISOString());

  // Simulated real-time forensic drift
  useEffect(() => {
    const timer = setInterval(() => setTimestamp(new Date().toISOString()), 5000);
    return () => clearInterval(timer);
  }, []);

  const metrics = [
    { label: "Compliance Health", value: "99.8%", status: "OPTIMAL", icon: SentinelIcon },
    { label: "Anomaly Detection", value: "0.02%", status: "LOW", iconName: "error" },
    { label: "Ledger Mirroring", value: "SYNCED", status: "STABLE", iconName: "database" },
    { label: "Audit Readiness", value: "TIER 1", status: "CERTIFIED", icon: KnightIcon }
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans selection:bg-sky-500/30">
      {/* 1. TOP-DOWN COMMAND BRIDGE */}
      <nav className="fixed top-0 w-full z-50 border-b border-slate-800/60 bg-[#020617]/80 backdrop-blur-md px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group transition-all">
            <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-sky-500/50">
              <C4Icon iconName="arrow_back" className="text-sm text-slate-400 group-hover:text-sky-400" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 group-hover:text-slate-200">
              Return to Overwatch
            </span>
          </Link>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 bg-sky-500/10 rounded-full border border-sky-500/20">
              <C4Icon iconName="monitoring" className="text-xs text-sky-500 animate-pulse" />
              <span className="text-[8px] font-black text-sky-400 tracking-widest uppercase">
                Live Substrate
              </span>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* 2. INSTANCE HEADER */}
          <header className="mb-16 border-l-2 border-sky-500 pl-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sky-500/60 font-mono text-[10px] uppercase tracking-[0.5em]">
                Tier IV // Client Instance
              </span>
              <div className="h-px w-12 bg-slate-800"></div>
              <span className="text-slate-600 font-mono text-[10px] uppercase tracking-[0.3em]">
                MY-KL-001
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter italic mb-4">
              MY<span className="text-sky-500">AUDIT</span>
            </h1>
            <p className="text-slate-400 text-sm max-w-2xl leading-relaxed">
              Cloud-based AI accounting and tax system for Malaysian SMEs. Replacing manual bank-to-ledger bookkeeping with audit-ready records and automated tax planning.
            </p>
          </header>

          {/* 3. FORENSIC METRICS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {metrics.map((m) => (
              <div key={m.label} className="bg-slate-900/20 border border-slate-800/60 p-6 rounded-[2rem] hover:border-sky-500/30 transition-all duration-500 group">
                <div className="flex items-center justify-between mb-6">
                  {m.icon ? (
                    <img
                      src={m.icon}
                      className="w-5 h-5 object-contain opacity-50 group-hover:opacity-100 transition-opacity invert brightness-200"
                      alt={m.label}
                    />
                  ) : m.iconName ? (
                    <C4Icon iconName={m.iconName} className="text-xl text-sky-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                  ) : null}
                  <span className="text-[8px] font-black text-slate-500 tracking-[0.2em]">{m.status}</span>
                </div>
                <h3 className="text-slate-500 text-[10px] font-mono uppercase tracking-[0.2em] mb-1">{m.label}</h3>
                <p className="text-2xl font-black text-white italic">{m.value}</p>
              </div>
            ))}
          </div>

          {/* 4. GOVERNANCE LEDGER VIEW */}
          <section className="bg-slate-900/10 border border-slate-800/40 rounded-[2.5rem] overflow-hidden">
            <div className="p-8 border-b border-slate-800/40 flex justify-between items-center bg-slate-900/20">
              <h2 className="text-xl font-bold uppercase tracking-tight text-white italic">Governance Ledger</h2>
              <div className="flex items-center gap-2 text-slate-500 font-mono text-[9px]">
                <C4Icon iconName="schedule" className="text-xs" />
                {timestamp}
              </div>
            </div>
            
            <div className="p-8 space-y-6">
              <div className="flex items-start gap-4 p-6 bg-[#050505] rounded-2xl border border-slate-800/60">
                <C4Icon iconName="bar_chart" className="text-xl text-sky-500 mt-1" />
                <div>
                  <h4 className="text-white text-sm font-bold uppercase mb-2 tracking-wide">Financial Intent Orchestration</h4>
                  <p className="text-slate-400 text-xs leading-relaxed max-w-3xl">
                    Every ledger entry is validated against the Malaysian SME tax mandate. 
                    Sentinel Protocol ensures that bank-to-ledger transitions are mirrored across the sovereign substrate 
                    without human intervention in the data loop.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl border border-slate-800/40 bg-slate-900/5 hover:border-sky-500/20 transition-all">
                  <h4 className="text-[10px] font-black text-sky-400 uppercase tracking-widest mb-3">Regional Compliance</h4>
                  <ul className="text-slate-500 text-[10px] font-mono space-y-2 uppercase">
                    <li className="flex items-center gap-2">
                      <img src={OverwatchIcon} className="w-2 h-2 object-contain invert brightness-200" alt="compliance" />
                      LHDN Integration Active
                    </li>
                    <li className="flex items-center gap-2">
                      <img src={OverwatchIcon} className="w-2 h-2 object-contain invert brightness-200" alt="compliance" />
                      SST Audit-Ready
                    </li>
                    <li className="flex items-center gap-2">
                      <img src={OverwatchIcon} className="w-2 h-2 object-contain invert brightness-200" alt="compliance" />
                      Digital Ledger Sovereignty
                    </li>
                  </ul>
                </div>
                <div className="p-6 rounded-2xl border border-slate-800/40 bg-slate-900/5 hover:border-sky-500/20 transition-all">
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Forensic Security</h4>
                  <ul className="text-slate-500 text-[10px] font-mono space-y-2 uppercase">
                    <li className="flex items-center gap-2">
                      <img src={SentinelIcon} className="w-2 h-2 object-contain invert brightness-200" alt="security" />
                      SG-CANONICAL-2026 Tagged
                    </li>
                    <li className="flex items-center gap-2">
                      <img src={SentinelIcon} className="w-2 h-2 object-contain invert brightness-200" alt="security" />
                      End-to-End Encryption
                    </li>
                    <li className="flex items-center gap-2">
                      <img src={SentinelIcon} className="w-2 h-2 object-contain invert brightness-200" alt="security" />
                      Harbor-C Isolation Active
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="py-12 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <span className="text-[8px] font-mono text-slate-600 uppercase tracking-widest">
            MYAUDIT // FORENSIC SUBSTRATE // TS-Λ3
          </span>
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.4)]" />
        </div>
      </footer>
    </div>
  );
};

export default MyAudit;
