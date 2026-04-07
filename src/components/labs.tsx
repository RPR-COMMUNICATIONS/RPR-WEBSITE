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
  Zap,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

/**
 * ⚓ TS-Λ3 // LABS SECTION [v8.5.2]
 * Path: src/components/labs.tsx
 * Mission: Layout Stabilization // Overflow Remediation
 * Authority: RPR COMMUNICATIONS LLC // CASE #00260103
 * Status: AUTHORITATIVE // MECHANICAL_FIX_LATCHED
 */

// 🧬 DATA SEED INGESTION (Point-locked to April 5th Strike)
import { MOTHERSHIP_UPDATE_2026_04_05 } from '../data/updates/2026-04-05-mothership-os.ts';

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
    desc: "Real-time cryptographic verification of source documents via specialized vision engines.",
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
  const { t } = useTranslation('harbora');
  const [openId, setOpenId] = useState<string | null>(null);
  const [logs, setLogs] = useState<string[]>([]);

  // 🛰️ TERMINAL STREAM SIMULATION
  useEffect(() => {
    const messages = [
      "LATCHING_TO_ASIA_SOUTHEAST1...",
      "VAULT_RESIDENCY_VERIFIED",
      "SENTINEL_PROTOCOL_ACTIVE",
      "7,553_PULSE_HEARTBEAT_DETECTED",
      "SSRN_ABSTRACT_6307238_LATCHED",
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
    <section id="labs" className="py-12 md:py-24 bg-black border-t border-white/5 min-h-screen relative overflow-hidden">
      {/* 🌌 AMBIENT OVERLAY */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-cyan-500/[0.02] blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <SectionHeading
          title={t('labs.title', 'THE')}
          accent={t('labs.accent', 'LABS')}
          kicker={t('labs.kicker', 'L3 // THE WORKSHOP')}
        />

        {/* 📑 00. FORENSIC UPDATE LOG (Narrative Lead for Case #00260103) */}
        <div className="mb-24 md:mb-32 max-w-5xl mx-auto">
          <div className="group relative p-6 md:p-12 bg-zinc-950 border border-cyan-500/20 rounded-[2rem] md:rounded-[3rem] hover:border-cyan-500/50 transition-all duration-700 shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-100 transition-opacity">
              <ShieldCheck className="text-cyan-400 w-8 h-8 animate-pulse" />
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-white/5 pb-8">
              <div className="space-y-2 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 shrink-0 rounded-full bg-cyan-500 animate-pulse" />
                  <span className="text-[9px] md:text-[10px] font-mono text-cyan-400 tracking-[0.2em] md:tracking-[0.4em] font-black uppercase truncate">
                    {MOTHERSHIP_UPDATE_2026_04_05.classification}
                  </span>
                </div>
                <h2 className="text-xl md:text-3xl font-black text-white uppercase italic tracking-tighter break-words">
                  {MOTHERSHIP_UPDATE_2026_04_05.title}
                </h2>
              </div>
              <div className="bg-white/5 p-3 md:p-4 rounded-xl md:rounded-2xl border border-white/5 text-left md:text-right">
                <p className="text-[7px] md:text-[8px] font-mono text-zinc-600 uppercase tracking-widest mb-1">Audit_Latch_Time</p>
                <p className="text-[9px] md:text-[10px] font-mono text-zinc-400">{MOTHERSHIP_UPDATE_2026_04_05.timestamp}</p>
              </div>
            </div>

            <p className="text-xs md:text-base text-zinc-400 leading-relaxed mb-8 uppercase font-light max-w-3xl break-words">
              {MOTHERSHIP_UPDATE_2026_04_05.summary}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-10">
              <div className="space-y-1 min-w-0">
                <p className="text-[7px] md:text-[8px] font-mono text-zinc-600 uppercase tracking-widest truncate">SSRN_Reference</p>
                <p className="text-[10px] md:text-[11px] font-black text-cyan-500 truncate">ID: {MOTHERSHIP_UPDATE_2026_04_05.ssrn_id}</p>
              </div>
              <div className="space-y-1 min-w-0">
                <p className="text-[7px] md:text-[8px] font-mono text-zinc-600 uppercase tracking-widest truncate">Substrate_Telemetry</p>
                <p className="text-[10px] md:text-[11px] font-black text-white truncate">{MOTHERSHIP_UPDATE_2026_04_05.pulse_count.toLocaleString()} PULSES</p>
              </div>
              <div className="space-y-1 min-w-0">
                <p className="text-[7px] md:text-[8px] font-mono text-zinc-600 uppercase tracking-widest truncate">Residency</p>
                <p className="text-[10px] md:text-[11px] font-black text-green-400 italic truncate">ASIA-SOUTHEAST1</p>
              </div>
              <div className="space-y-1 min-w-0">
                <p className="text-[7px] md:text-[8px] font-mono text-zinc-600 uppercase tracking-widest truncate">Audit_Authority</p>
                <p className="text-[10px] md:text-[11px] font-black text-white truncate">RPR_LLC</p>
              </div>
            </div>

            <Link to="/labs/vault" className="inline-flex items-center justify-center text-center gap-3 px-6 md:px-8 py-4 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-[9px] md:text-[10px] font-black uppercase text-cyan-400 hover:bg-cyan-500/20 hover:text-white transition-all tracking-[0.1em] md:tracking-[0.2em] shadow-lg shadow-cyan-500/5 w-full md:w-auto">
              ACCESS_SOVEREIGN_VAULT_DEEP_INTEL
              <ChevronRight size={14} className="shrink-0" />
            </Link>
          </div>
        </div>

        {/* 🧬 01. OPERATIONAL FRAMEWORKS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-32">
          {FRAMEWORK_IDS.map(id => {
            const open = openId === id;
            return (
              <div
                key={id}
                className={`group bg-zinc-900/10 border p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] transition-all duration-700 flex flex-col min-w-0 ${open ? 'border-cyan-500/30 bg-cyan-500/5 shadow-[0_0_40px_rgba(34,211,238,0.05)]' : 'border-white/10 hover:border-white/20'
                  }`}
              >
                <div className="mb-6 flex justify-center shrink-0">
                  <SymbolTile
                    glyph={GLYPHS[id]}
                    size={48}
                    active={open}
                    iconFill={open ? 1 : 0}
                  />
                </div>
                <h3 className="text-xs md:text-sm font-black uppercase mb-2 text-white tracking-tight italic text-center break-words">
                  {t(`labs.frameworks.${id}.title`)}
                </h3>
                <p className="text-slate-400 text-[10px] md:text-[11px] opacity-70 leading-relaxed text-center mb-6 break-words">
                  {t(`labs.frameworks.${id}.summary`)}
                </p>
                <button
                  type="button"
                  onClick={() => setOpenId(open ? null : id)}
                  className="mt-auto text-[9px] md:text-[10px] font-mono text-cyan-400 uppercase tracking-[0.1em] md:tracking-[0.2em] flex items-center justify-center gap-2 hover:text-white transition-colors py-2"
                >
                  {open ? t('labs.btn_hide', 'CLOSE_DATA') : t('labs.btn_show', 'EXPAND_INTEL')}
                  <span className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}>▾</span>
                </button>

                {open && (
                  <div className="mt-4 pt-4 border-t border-white/5 text-[10px] md:text-[11px] text-slate-300 space-y-3 animate-in fade-in duration-500 min-w-0 overflow-hidden">
                    {bodyKeys(id).map((line, idx) => (
                      <div key={idx} className="flex gap-2 font-mono">
                        <span className="text-cyan-500/50 shrink-0">•</span>
                        <p className="break-words min-w-0">{line}</p>
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
          <div className="flex items-center gap-4 md:gap-6 mb-12">
            <Layers className="text-cyan-400 w-5 h-5 shrink-0" />
            <h2 className="text-[10px] md:text-xs font-mono tracking-[0.2em] md:tracking-[0.4em] text-white uppercase whitespace-nowrap">ACTIVE_RESEARCH_VECTORS</h2>
            <div className="h-px flex-grow bg-white/10" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {RESEARCH_VECTORS.map((vector, i) => (
              <div key={i} className="p-6 md:p-8 bg-zinc-900/20 border border-white/5 rounded-2xl md:rounded-3xl group hover:border-cyan-500/30 transition-all min-w-0">
                <div className="flex justify-between items-start mb-6">
                  <span className="px-2 py-1 bg-cyan-500/10 text-cyan-400 text-[8px] font-mono rounded border border-cyan-500/20 truncate">
                    {vector.tag}
                  </span>
                  <Activity className="text-slate-700 group-hover:text-cyan-400 transition-colors w-4 h-4 shrink-0" />
                </div>
                <h4 className="text-white font-black text-xs md:text-sm uppercase italic mb-3 break-words">{vector.title}</h4>
                <p className="text-slate-500 text-[10px] md:text-[11px] leading-relaxed mb-6 break-words">{vector.desc}</p>
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
          <div className="flex items-center gap-4 md:gap-6 mb-12">
            <Cpu className="text-cyan-400 w-5 h-5 shrink-0" />
            <h2 className="text-[10px] md:text-xs font-mono tracking-[0.2em] md:tracking-[0.4em] text-white uppercase whitespace-nowrap">L4_SPECIALIST_INSTANCES</h2>
            <div className="h-px flex-grow bg-white/10" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            <Link to="/labs/myaudit" className="group bg-white/[0.01] border border-white/10 p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] hover:border-cyan-500/40 transition-all flex flex-col items-center text-center shadow-2xl min-w-0">
              <MyAuditLogo size={40} className="mb-6 md:mb-8 group-hover:scale-105 transition-transform shrink-0" />
              <p className="text-slate-500 text-[9px] md:text-[10px] uppercase font-mono tracking-widest mb-6 md:mb-8 break-words max-w-xs">AI ACCOUNTING & TAX AUTOMATION</p>
              <span className="text-[9px] font-black uppercase text-cyan-400 flex items-center gap-2 group-hover:text-white transition-colors">
                ACCESS NODE <ChevronRight size={12} className="shrink-0" />
              </span>
            </Link>
            <Link to="/labs/verify" className="group bg-white/[0.01] border border-white/10 p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] hover:border-cyan-500/40 transition-all flex flex-col items-center text-center shadow-2xl min-w-0">
              <RprVerifyLogo size={52} className="mb-6 md:mb-8 group-hover:scale-105 transition-transform shrink-0" />
              <p className="text-slate-500 text-[9px] md:text-[10px] uppercase font-mono tracking-widest mb-6 md:mb-8 break-words max-w-xs">INTELLIGENT COMPLIANCE & ONBOARDING</p>
              <span className="text-[9px] font-black uppercase text-cyan-400 flex items-center gap-2 group-hover:text-white transition-colors">
                ACCESS NODE <ChevronRight size={12} className="shrink-0" />
              </span>
            </Link>
          </div>
        </div>

        {/* 🛰️ 04. NODE INFRASTRUCTURE SUBSTRATE */}
        <div className="mb-32 grid grid-cols-1 lg:grid-cols-3 gap-12 border-y border-white/5 py-12 md:py-16">
          <div className="lg:col-span-2 space-y-8 min-w-0">
            <div className="flex items-center gap-4 text-cyan-400 font-mono text-[10px] md:text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.3em]">
              <Globe className="w-4 h-4 shrink-0" />
              Harbor A Residency
            </div>
            <h3 className="text-xl md:text-3xl font-black text-white uppercase italic leading-none break-words">
              Singapore Node <br />
              <span className="text-slate-500 text-base md:text-lg">asia-southeast1</span>
            </h3>
            <p className="text-slate-400 text-[10px] md:text-xs font-mono uppercase leading-relaxed max-w-xl break-words">
              Mothership OS research is point-locked to the Singapore Node to ensure compliance with the Sovereign Constitution v12.4. All forensic ingestion is processed within a 14ms latency boundary to preserve ledger integrity.
            </p>
            <div className="flex flex-wrap gap-6 md:gap-8">
              <div className="space-y-1 min-w-0">
                <span className="text-[7px] md:text-[8px] font-mono text-slate-600 uppercase tracking-widest truncate">Protocol_Handshake</span>
                <p className="text-[9px] md:text-[10px] font-black text-cyan-400 uppercase truncate">AES-256-GCM</p>
              </div>
              <div className="space-y-1 min-w-0">
                <span className="text-[7px] md:text-[8px] font-mono text-slate-600 uppercase tracking-widest truncate">Residency_Status</span>
                <p className="text-[9px] md:text-[10px] font-black text-green-400 uppercase truncate">LATCHED</p>
              </div>
              <div className="space-y-1 min-w-0">
                <span className="text-[7px] md:text-[8px] font-mono text-slate-600 uppercase tracking-widest truncate">Security_Axis</span>
                <p className="text-[9px] md:text-[10px] font-black text-white uppercase truncate">SG-CANONICAL-2026</p>
              </div>
            </div>
          </div>
          <div className="bg-white/[0.02] border border-white/5 rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col justify-center gap-6 md:gap-8">
            <div className="flex items-center gap-4">
              <ShieldAlert className="text-orange-500 w-5 h-5 shrink-0" />
              <span className="text-[10px] font-black text-white uppercase tracking-widest truncate">Substrate Safety</span>
            </div>
            <div className="space-y-4 font-mono text-[10px]">
              <div className="flex justify-between items-center text-slate-500 border-b border-white/5 pb-2 min-w-0">
                <span className="truncate mr-2">PII_REDACTION</span>
                <span className="text-green-500 shrink-0">ENABLED</span>
              </div>
              <div className="flex justify-between items-center text-slate-500 border-b border-white/5 pb-2 min-w-0">
                <span className="truncate mr-2">FORENSIC_ECHO</span>
                <span className="text-green-500 shrink-0">ACTIVE</span>
              </div>
              <div className="flex justify-between items-center text-slate-500 border-b border-white/5 pb-2 min-w-0">
                <span className="truncate mr-2">AGENT_DRIFT_GUARD</span>
                <span className="text-green-500 shrink-0">LATCHED</span>
              </div>
            </div>
          </div>
        </div>

        {/* 📊 05. LIVE STATUS AUDIT */}
        <div className="mt-24 min-w-0">
          <h3 className="text-[10px] md:text-xs font-mono text-slate-500 uppercase tracking-[0.2em] md:tracking-[0.35em] mb-8 font-black text-center md:text-left">
            {t('labs.status_title', 'SYSTEM_STATUS_AUDIT')}
          </h3>

          <div className="p-6 md:p-10 mb-12 bg-zinc-950 border border-white/5 rounded-[1.5rem] md:rounded-[2rem] text-center max-w-2xl mx-auto shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-8 break-words">
              {t('labs.pricing_tba', 'Access to specialist instances is strictly governed. Public storefront and pricing models are currently being calculated within the workshop.')}
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-4">
              <button className="px-5 md:px-6 py-3 bg-white/5 border border-white/10 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                <Zap className="w-3 h-3 text-cyan-400 shrink-0" />
                {t('labs.btns.interest', 'SIGNAL_INTEREST')}
              </button>
              <button className="px-5 md:px-6 py-3 bg-white/5 border border-white/10 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all text-center">
                {t('labs.btns.waitlist', 'JOIN_WAITLIST')}
              </button>
              <Link to="/labs/checkout-pending" className="px-5 md:px-6 py-3 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest text-cyan-400 hover:bg-cyan-500/20 transition-all shadow-lg shadow-cyan-500/10 text-center">
                {t('labs.btns.storefront', 'ACCESS_STOREFRONT')}
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-[10px] md:text-[11px] text-slate-300 font-mono mb-24">
            <div className="space-y-4 min-w-0">
              <p className="text-slate-500 uppercase tracking-[0.2em] border-b border-white/5 pb-2 font-bold break-words">{t('labs.phases_label', 'DEPLOYMENT_PHASES')}</p>
              <ul className="space-y-3">
                <li className="flex justify-between items-center gap-4">
                  <span className="text-slate-400 break-all md:break-normal">{t('labs.phases.p1', 'PHASE_01: ARCHITECTURAL_LATCH')}</span>
                  <span className="text-slate-600 font-black shrink-0">{t('labs.status.complete', 'COMPLETE')}</span>
                </li>
                <li className="flex justify-between items-center text-white gap-4">
                  <span className="animate-pulse break-all md:break-normal">{t('labs.phases.p2', 'PHASE_02: FORENSIC_INGESTION')}</span>
                  <span className="text-cyan-400 font-black shrink-0">{t('labs.status.active', 'ACTIVE')}</span>
                </li>
                <li className="flex justify-between items-center opacity-30 gap-4">
                  <span className="break-all md:break-normal">{t('labs.phases.p3', 'PHASE_03: PUBLIC_STRIKE')}</span>
                  <span className="shrink-0">{t('labs.status.pending', 'PENDING')}</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4 min-w-0">
              <p className="text-slate-500 uppercase tracking-[0.2em] border-b border-white/5 pb-2 font-bold break-words">{t('labs.milestones_label', 'OPERATIONAL_MILESTONES')}</p>
              <ul className="space-y-3">
                {[1, 2, 3, 4].map(num => (
                  <li key={num} className="flex justify-between items-center gap-4">
                    <span className={num === 2 ? "text-white break-all md:break-normal" : "text-slate-400 break-all md:break-normal"}>{t(`labs.milestones.m${num}`, `MILESTONE_0${num}`)}</span>
                    <span className={`font-black shrink-0 ${num === 2 ? "text-cyan-400" : "text-cyan-500/40"}`}>
                      {num === 2 ? t('labs.status.active', 'ACTIVE') : t('labs.status.complete', 'COMPLETE')}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 💻 06. MOTHERSHIP OS TERMINAL STREAM */}
        <div className="bg-zinc-950/80 border border-white/10 rounded-2xl p-4 md:p-6 font-mono overflow-hidden h-40 relative group">
          <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
            <TerminalIcon className="text-cyan-400 w-4 h-4 shrink-0" />
          </div>
          <div className="flex flex-col gap-1 min-w-0">
            <div className="flex items-center gap-3 mb-2 text-cyan-400 text-[8px] md:text-[9px] font-black uppercase">
              <span className="animate-pulse shrink-0">●</span>
              <span className="truncate">SYSTEM_LOG_STREAM // ASIA-SOUTHEAST1</span>
            </div>
            {logs.map((log, i) => (
              <div key={i} className={`text-[9px] md:text-[10px] ${i === 0 ? 'text-white' : 'text-slate-600'} flex gap-3 min-w-0`}>
                <span className="opacity-30 shrink-0">{`[${1000 + i}]`}</span>
                <span className={`truncate ${i === 0 ? 'animate-in slide-in-from-left duration-300' : ''}`}>{log}</span>
              </div>
            ))}
          </div>
          <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-zinc-950 to-transparent" />
        </div>

        <div className="mt-12 md:mt-16 p-4 md:p-6">
          <p className="text-[8px] md:text-[9px] text-slate-600 font-mono italic leading-relaxed text-center opacity-50 uppercase tracking-widest break-words">
            {t('labs.notice', 'NOTICE: ALL RESEARCH VECTORS OPERATE UNDER THE SENTINEL PROTOCOL. UNAUTHORIZED ACCESS TO DATA SUBSTRATES IS LOGGED.')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Labs;