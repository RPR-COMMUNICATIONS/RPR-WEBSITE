import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Cpu,
  Layers,
  Terminal as TerminalIcon,
  Activity,
  Globe,
  ShieldAlert,
  Zap
} from 'lucide-react';

/**
 * TS-Λ3 // LABS SECTION [v8.0.0]
 * Path: src/components/labs.tsx
 * Mission: Substrate Expansion // Content Depth Escalation
 * Authority: THE OVERWATCH // SG-CANONICAL-2026
 * Fix: Added "Research Vectors", "Node Infrastructure", and "Terminal Stream" sections.
 */

// 🧬 AUTHORITATIVE UI LATCHES
import { SectionHeading } from './sectionheading.tsx';
import SymbolTile from './icons/symboltile.tsx';

// 🛡️ BRAND ASSETS (Sovereign Substrate)
import { MyAuditLogo } from '../brand/myauditlogo.tsx';
import { RprVerifyLogo } from '../brand/rprverifylogo.tsx';

const FRAMEWORK_IDS = ['sentinel', 'ram', 'rbaa', 'cstride'] as const;

const GLYPHS: Record<string, string> = {
  sentinel: 'shield',
  ram: 'memory',
  rbaa: 'science',
  cstride: 'monitoring'
};

const RESEARCH_VECTORS = [
  {
    title: "Agentic Fiscal Synthesis",
    tag: "RES-771",
    desc: "Autonomous reconciliation of decentralized ledger entries across multi-jurisdictional tax boundaries.",
    progress: 84
  },
  {
    title: "Veritas Compliance Mesh",
    tag: "VER-902",
    desc: "Real-time cryptographic verification of source documents via Singapore Node specialized vision engines.",
    progress: 92
  },
  {
    title: "C-STRIDE Predictive Drift",
    tag: "DRIFT-440",
    desc: "Forecasting operational anomalies in AI accounting agents before they manifest in the trial balance.",
    progress: 61
  }
];

export const Labs: React.FC = () => {
  const { t } = useTranslation('harborA');
  const [openId, setOpenId] = useState<string | null>(null);
  const [logs, setLogs] = useState<string[]>([]);

  // 🛰️ TERMINAL STREAM SIMULATION
  useEffect(() => {
    const messages = [
      "LATCHING_TO_ASIA_SOUTHEAST1...",
      "INGESTING_RESEARCH_VECTORS...",
      "SENTINEL_PROTOCOL_ACTIVE",
      "CHECKING_TBA_POLICY_ALIGNMENT...",
      "RESOURCE_LOCK_CONFIRMED",
      "NODE_TELEMETRY_SYNCED",
      "OVERWATCH_HANDSHAKE_COMPLETE"
    ];
    let i = 0;
    const interval = setInterval(() => {
      setLogs(prev => [messages[i % messages.length], ...prev.slice(0, 5)]);
      i++;
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const bodyKeys = (id: string) => [
    t(`labs.frameworks.${id}.b1`),
    t(`labs.frameworks.${id}.b2`),
    t(`labs.frameworks.${id}.b3`)
  ];

  return (
    <section id="labs" className="py-24 bg-black border-t border-white/5 min-h-screen relative overflow-hidden">
      {/* 🌌 AMBIENT OVERLAY */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-cyan-500/[0.02] blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading
          title={t('labs.title')}
          accent={t('labs.accent')}
          kicker={t('labs.kicker')}
        />

        {/* 🧬 01. OPERATIONAL FRAMEWORKS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {FRAMEWORK_IDS.map(id => {
            const open = openId === id;
            return (
              <div
                key={id}
                className={`group bg-zinc-900/10 border p-8 rounded-[2.5rem] transition-all duration-700 flex flex-col ${open ? 'border-cyan-500/30 bg-cyan-500/5 shadow-[0_0_40px_rgba(34,211,238,0.05)]' : 'border-white/10 hover:border-white/20'
                  }`}
              >
                <div className="mb-6 flex justify-center">
                  <SymbolTile
                    glyph={GLYPHS[id]}
                    size={56}
                    active={open}
                    iconFill={open ? 1 : 0}
                  />
                </div>
                <h3 className="text-sm font-black uppercase mb-2 text-white tracking-tight italic text-center">
                  {t(`labs.frameworks.${id}.title`)}
                </h3>
                <p className="text-slate-400 text-[11px] opacity-70 leading-relaxed text-center mb-6">
                  {t(`labs.frameworks.${id}.summary`)}
                </p>
                <button
                  type="button"
                  onClick={() => setOpenId(open ? null : id)}
                  className="mt-auto text-[10px] font-mono text-cyan-400 uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:text-white transition-colors"
                >
                  {open ? t('labs.btn_hide') : t('labs.btn_show')}
                  <span className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}>▾</span>
                </button>

                {open && (
                  <div className="mt-4 pt-4 border-t border-white/5 text-[11px] text-slate-300 space-y-3 animate-in fade-in duration-500">
                    {bodyKeys(id).map((line, idx) => (
                      <div key={idx} className="flex gap-2 font-mono">
                        <span className="text-cyan-500/50">•</span>
                        <p>{line}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* 🧪 02. ACTIVE RESEARCH VECTORS */}
        <div className="mb-32">
          <div className="flex items-center gap-6 mb-12">
            <Layers className="text-cyan-400 w-5 h-5" />
            <h2 className="text-xs font-mono tracking-[0.4em] text-white uppercase">ACTIVE_RESEARCH_VECTORS</h2>
            <div className="h-px flex-grow bg-white/10" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {RESEARCH_VECTORS.map((vector, i) => (
              <div key={i} className="p-8 bg-zinc-900/20 border border-white/5 rounded-3xl group hover:border-cyan-500/30 transition-all">
                <div className="flex justify-between items-start mb-6">
                  <span className="px-2 py-1 bg-cyan-500/10 text-cyan-400 text-[8px] font-mono rounded border border-cyan-500/20">
                    {vector.tag}
                  </span>
                  <Activity className="text-slate-700 group-hover:text-cyan-400 transition-colors w-4 h-4" />
                </div>
                <h4 className="text-white font-black text-sm uppercase italic mb-3">{vector.title}</h4>
                <p className="text-slate-500 text-[11px] leading-relaxed mb-6">{vector.desc}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-[9px] font-mono text-slate-600">
                    <span>LATCH_INTEGRITY</span>
                    <span>{vector.progress}%</span>
                  </div>
                  <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-cyan-500/40" style={{ width: `${vector.progress}%` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 🧪 03. L4 SPECIALIST INSTANCES */}
        <div className="mb-32">
          <div className="flex items-center gap-6 mb-12">
            <Cpu className="text-cyan-400 w-5 h-5" />
            <h2 className="text-xs font-mono tracking-[0.4em] text-white uppercase">L4_SPECIALIST_INSTANCES</h2>
            <div className="h-px flex-grow bg-white/10" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link to="/labs/myaudit" className="group bg-white/[0.01] border border-white/10 p-10 rounded-[2.5rem] hover:border-cyan-500/40 transition-all flex flex-col items-center text-center shadow-2xl">
              <MyAuditLogo size={40} className="mb-8 group-hover:scale-105 transition-transform" />
              <p className="text-slate-500 text-[10px] uppercase font-mono tracking-widest mb-8">AI ACCOUNTING & TAX AUTOMATION</p>
              <span className="text-[9px] font-black uppercase text-cyan-400 flex items-center gap-2 group-hover:text-white transition-colors">
                ACCESS NODE <SymbolTile glyph="arrow_forward" size={16} variant="none" glow={false} className="border-transparent" />
              </span>
            </Link>
            <Link to="/labs/verify" className="group bg-white/[0.01] border border-white/10 p-10 rounded-[2.5rem] hover:border-cyan-500/40 transition-all flex flex-col items-center text-center shadow-2xl">
              <RprVerifyLogo size={52} className="mb-8 group-hover:scale-105 transition-transform" />
              <p className="text-slate-500 text-[10px] uppercase font-mono tracking-widest mb-8">INTELLIGENT COMPLIANCE & ONBOARDING</p>
              <span className="text-[9px] font-black uppercase text-cyan-400 flex items-center gap-2 group-hover:text-white transition-colors">
                ACCESS NODE <SymbolTile glyph="arrow_forward" size={16} variant="none" glow={false} className="border-transparent" />
              </span>
            </Link>
          </div>
        </div>

        {/* 🛰️ 04. NODE INFRASTRUCTURE SUBSTRATE */}
        <div className="mb-32 grid grid-cols-1 lg:grid-cols-3 gap-12 border-y border-white/5 py-16">
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center gap-4 text-cyan-400 font-mono text-xs font-black uppercase tracking-[0.3em]">
              <Globe className="w-4 h-4" />
              Harbor A Residency
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-white uppercase italic leading-none">
              Singapore Node <br />
              <span className="text-slate-500 text-lg">asia-southeast1</span>
            </h3>
            <p className="text-slate-400 text-xs font-mono uppercase leading-relaxed max-w-xl">
              Mothership OS research is point-locked to the Singapore Node to ensure compliance with the Sovereign Constitution v12.4. All forensic ingestion is processed within a 14ms latency boundary to preserve ledger integrity.
            </p>
            <div className="flex gap-8">
              <div className="space-y-2">
                <span className="text-[8px] font-mono text-slate-600 uppercase tracking-widest">Protocol_Handshake</span>
                <p className="text-[10px] font-black text-cyan-400 uppercase">AES-256-GCM</p>
              </div>
              <div className="space-y-2">
                <span className="text-[8px] font-mono text-slate-600 uppercase tracking-widest">Residency_Status</span>
                <p className="text-[10px] font-black text-green-400 uppercase">LATCHED</p>
              </div>
              <div className="space-y-2">
                <span className="text-[8px] font-mono text-slate-600 uppercase tracking-widest">Security_Axis</span>
                <p className="text-[10px] font-black text-white uppercase">SG-CANONICAL-2026</p>
              </div>
            </div>
          </div>
          <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 flex flex-col justify-center gap-8">
            <div className="flex items-center gap-4">
              <ShieldAlert className="text-orange-500 w-5 h-5" />
              <span className="text-[10px] font-black text-white uppercase tracking-widest">Substrate Safety</span>
            </div>
            <div className="space-y-4 font-mono text-[10px]">
              <div className="flex justify-between items-center text-slate-500 border-b border-white/5 pb-2">
                <span>PII_REDACTION</span>
                <span className="text-green-500">ENABLED</span>
              </div>
              <div className="flex justify-between items-center text-slate-500 border-b border-white/5 pb-2">
                <span>FORENSIC_ECHO</span>
                <span className="text-green-500">ACTIVE</span>
              </div>
              <div className="flex justify-between items-center text-slate-500 border-b border-white/5 pb-2">
                <span>AGENT_DRIFT_GUARD</span>
                <span className="text-green-500">LATCHED</span>
              </div>
            </div>
          </div>
        </div>

        {/* 📊 05. LIVE STATUS AUDIT */}
        <div className="mt-24">
          <h3 className="text-xs font-mono text-slate-500 uppercase tracking-[0.35em] mb-8 font-black">
            {t('labs.status_title')}
          </h3>

          <div className="p-10 mb-12 bg-zinc-950 border border-white/5 rounded-[2rem] text-center max-w-2xl mx-auto shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              {t('labs.pricing_tba')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all flex items-center gap-2">
                <Zap className="w-3 h-3 text-cyan-400" />
                {t('labs.btns.interest')}
              </button>
              <button className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">
                {t('labs.btns.waitlist')}
              </button>
              {/* 🚥 FINANCIAL HIBERNATION LATCH: Redirecting to internal holding page */}
              <Link to="/labs/checkout-pending" className="px-6 py-3 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-[10px] font-black uppercase tracking-widest text-cyan-400 hover:bg-cyan-500/20 transition-all shadow-lg shadow-cyan-500/10">
                {t('labs.btns.storefront')}
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-[11px] text-slate-300 font-mono mb-24">
            <div className="space-y-4">
              <p className="text-slate-500 uppercase tracking-[0.2em] border-b border-white/5 pb-2 font-bold">{t('labs.phases_label')}</p>
              <ul className="space-y-3">
                <li className="flex justify-between items-center">
                  <span className="text-slate-400">{t('labs.phases.p1')}</span>
                  <span className="text-slate-600 font-black">{t('labs.status.complete')}</span>
                </li>
                <li className="flex justify-between items-center text-white">
                  <span className="animate-pulse">{t('labs.phases.p2')}</span>
                  <span className="text-cyan-400 font-black">{t('labs.status.active')}</span>
                </li>
                <li className="flex justify-between items-center opacity-30">
                  <span>{t('labs.phases.p3')}</span>
                  <span>{t('labs.status.pending')}</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <p className="text-slate-500 uppercase tracking-[0.2em] border-b border-white/5 pb-2 font-bold">{t('labs.milestones_label')}</p>
              <ul className="space-y-3">
                {[1, 2, 3, 4].map(num => (
                  <li key={num} className="flex justify-between items-center">
                    <span className={num === 2 ? "text-white" : "text-slate-400"}>{t(`labs.milestones.m${num}`)}</span>
                    <span className={`font-black ${num === 2 ? "text-cyan-400" : "text-cyan-500/40"}`}>
                      {num === 2 ? t('labs.status.active') : t('labs.status.complete')}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 💻 06. MOTHERSHIP OS TERMINAL STREAM */}
        <div className="bg-zinc-950/80 border border-white/10 rounded-2xl p-6 font-mono overflow-hidden h-40 relative group">
          <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
            <TerminalIcon className="text-cyan-400 w-4 h-4" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-3 mb-2 text-cyan-400 text-[9px] font-black uppercase">
              <span className="animate-pulse">●</span>
              SYSTEM_LOG_STREAM // ASIA-SOUTHEAST1
            </div>
            {logs.map((log, i) => (
              <div key={i} className={`text-[10px] ${i === 0 ? 'text-white' : 'text-slate-600'} flex gap-3`}>
                <span className="opacity-30">{`[${1000 + i}]`}</span>
                <span className={i === 0 ? 'animate-in slide-in-from-left duration-300' : ''}>{log}</span>
              </div>
            ))}
          </div>
          <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-zinc-950 to-transparent" />
        </div>

        <div className="mt-16 p-6">
          <p className="text-[9px] text-slate-600 font-mono italic leading-relaxed text-center opacity-50 uppercase tracking-widest">
            {t('labs.notice')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Labs;