import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ShieldCheck,
  Database,
  Terminal,
  Search
} from 'lucide-react';

/**
 * TS-Λ3 // MYΛUDIT LAB [v4.1.2]
 * Path: src/pages/labs/myaudit.tsx
 * Mission: Clinical Lint Resolution // Liquidate TS6133
 * Authority: THE OVERWATCH // SG-CANONICAL-2026
 * Fix: Removed unused 'Activity' and 'Lock' icons from lucide-react.
 * Fix: Purged unused 't' variable and 'useTranslation' hook.
 * Status: HARDENED // CLEAN_BUILD
 */

// 🧬 AUTHORITATIVE UI LATCHES
import SymbolTile from '../../components/icons/symboltile.tsx';
import SovereignGlass from '../../components/sovereignglass.tsx';
import { MyAuditLogo } from '../../brand/myauditlogo.tsx';

export const MyAudit: React.FC = () => {
  const [timestamp, setTimestamp] = useState(new Date().toISOString());

  // 📐 TELEMETRY PULSE
  useEffect(() => {
    const timer = setInterval(() => setTimestamp(new Date().toISOString()), 1000);
    return () => clearInterval(timer);
  }, []);

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
              <span className="text-[8px] font-mono text-slate-600 uppercase tracking-widest">Lab_Instance</span>
              <span className="text-[10px] font-mono text-cyan-500 font-bold uppercase tracking-tighter">MYA-L4-PROD</span>
            </div>
            <div className="flex h-2 w-2 rounded-full bg-cyan-500 animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
          </div>
        </div>
      </nav>

      <main className="pt-40 pb-32 px-6 md:px-12 max-w-7xl mx-auto">

        {/* 🏛️ HERO AXIS: THE AUDIT SUBSTRATE */}
        <header className="mb-32 border-l-4 border-cyan-500 pl-8 md:pl-12 relative">
          <div className="absolute -left-1.5 top-0 h-12 w-1.5 bg-white shadow-[0_0_15px_white]" />

          <div className="mb-12">
            <MyAuditLogo size={80} />
          </div>

          <div className="max-w-4xl space-y-8 text-left">
            <h1 className="text-4xl md:text-7xl font-black text-white uppercase italic tracking-tighter leading-[0.95]">
              AI ACCOUNTING <br />
              <span className="text-cyan-400">WITHOUT COMPROMISE.</span>
            </h1>

            <div className="text-slate-400 text-base md:text-xl leading-relaxed uppercase font-mono tracking-tight opacity-90 border-t border-white/5 pt-8">
              DESIGNED FOR BUSINESS OWNERS WHO WANT CLEAN BOOKS AND SMART TAX OUTCOMES WITHOUT RUNNING A TRADITIONAL FINANCE DEPARTMENT.
              <span className="block mt-6 text-white italic">
                MYΛUDIT ENFORCES LEDGER INTEGRITY VIA THE SENTINEL PROTOCOL TO PREVENT AGENT DRIFT AND TAX ANOMALIES.
              </span>
            </div>
          </div>
        </header>

        {/* 🧬 FORENSIC MODULES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-32">
          {[
            {
              title: "SENTINEL GOVERNANCE",
              glyph: "shield",
              desc: "External constraint sets ensure AI agents remain within GAAP and IFRS boundaries at all times."
            },
            {
              title: "OVERWATCH AUDIT",
              glyph: "skull",
              desc: "Direct human approval gates for critical fiscal allocations and high-risk tax classifications."
            },
            {
              title: "LEDGER PROVENANCE",
              glyph: "account_balance",
              desc: "Write-once forensic tracking of every transaction source to ensure 100% audit readiness."
            }
          ].map((item, i) => (
            <SovereignGlass key={i} className="group hover:border-cyan-500/40 transition-all duration-700 relative overflow-hidden h-full flex flex-col">
              <div className="mb-8">
                <SymbolTile glyph={item.glyph} size={48} active={true} iconFill={1} />
              </div>
              <h3 className="text-xl font-black text-white uppercase italic mb-6 tracking-widest leading-none">{item.title}</h3>
              <p className="text-xs font-mono text-slate-500 uppercase tracking-tighter leading-relaxed flex-grow">{item.desc}</p>
            </SovereignGlass>
          ))}
        </div>

        {/* 🛡️ FORENSIC LEDGER TERMINAL */}
        <section className="bg-zinc-900/10 border border-white/10 rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-16 pb-8 border-b border-white/5">
            <div className="flex items-center gap-5">
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:border-cyan-500/30 transition-all">
                <Terminal className="text-cyan-500 w-8 h-8" />
              </div>
              <div>
                <h2 className="text-2xl font-black uppercase text-white italic tracking-[0.1em] leading-none">
                  Live Ledger Ingestion
                </h2>
                <p className="text-[10px] font-mono text-slate-500 mt-2 uppercase tracking-[0.2em]">C-STRIDE_TELEMETRY // LATCHED</p>
              </div>
            </div>

            <div className="text-right">
              <p className="text-[9px] font-mono text-slate-600 uppercase tracking-widest mb-1">Last_Update</p>
              <p className="text-xs font-mono text-cyan-500 font-bold uppercase">{timestamp}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* 📊 MOCK TELEMETRY GRID */}
            <div className="lg:col-span-8 space-y-4">
              {[
                { date: "2026-02-17", desc: "STRIPE_REVENUE_INTAKE", amount: "+$4,200.00", status: "VERIFIED" },
                { date: "2026-02-16", desc: "AWS_CLOUD_INFRA_STRIKE", amount: "-$840.12", status: "VERIFIED" },
                { date: "2026-02-16", desc: "OFFICE_RENTAL_ALLOCATION", amount: "-$2,500.00", status: "PENDING" },
                { date: "2026-02-15", desc: "CLIENT_RETAINER_LATCH", amount: "+$12,000.00", status: "VERIFIED" }
              ].map((row, i) => (
                <div key={i} className="flex items-center justify-between p-5 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.05] transition-all">
                  <div className="flex items-center gap-6">
                    <span className="text-[9px] font-mono text-slate-600 w-20">{row.date}</span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-white">{row.desc}</span>
                  </div>
                  <div className="flex items-center gap-8">
                    <span className={`text-[10px] font-mono font-bold ${row.amount.startsWith('+') ? 'text-cyan-400' : 'text-slate-400'}`}>{row.amount}</span>
                    <span className={`text-[8px] font-mono px-2 py-0.5 rounded border ${row.status === 'VERIFIED' ? 'border-cyan-500/30 text-cyan-500 bg-cyan-500/5' : 'border-orange-500/30 text-orange-500 bg-orange-500/5'}`}>
                      {row.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* 🛡️ SYSTEM LATCH STATUS */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-8 bg-cyan-500/5 border border-cyan-500/20 rounded-3xl space-y-6">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-cyan-500 w-5 h-5" />
                  <span className="text-xs font-black uppercase text-white tracking-widest">Compliance Latch</span>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between text-[9px] font-mono">
                    <span className="text-slate-500">TAX_LIABILITY_PARITY</span>
                    <span className="text-cyan-400 font-bold">100%</span>
                  </div>
                  <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full w-full bg-cyan-500 shadow-[0_0_10px_cyan]" />
                  </div>
                </div>
                <p className="text-[10px] font-mono text-slate-400 leading-relaxed uppercase italic">
                    // "All transactions are cross-referenced with regional statutes at the Singapore Node."
                </p>
              </div>

              <button className="w-full bg-white text-black py-5 px-8 rounded-sm font-black uppercase text-xs tracking-[0.3em] hover:bg-cyan-500 transition-all flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                <Search size={16} /> GENERATE AUDIT REPORT
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* 🧬 FOOTER LATCH */}
      <footer className="py-20 border-t border-white/5 bg-black/50 backdrop-blur-sm mt-32">
        <div className="max-w-7xl mx-auto px-10 flex flex-col md:flex-row justify-between items-center gap-12 opacity-30 select-none grayscale hover:grayscale-0 hover:opacity-60 transition-all duration-700">
          <div className="flex items-center gap-4">
            <Database size={24} className="text-white" />
            <span className="text-[10px] font-mono uppercase tracking-[0.8em] text-white">MYΛUDIT-ENGINE-v4.1.2-LATCHED</span>
          </div>
          <span className="text-[9px] font-mono uppercase tracking-[0.4em] text-slate-500">SG-CANONICAL-2026 // RPR COMMUNICATIONS LLC</span>
        </div>
      </footer>

    </div>
  );
};

export default MyAudit;