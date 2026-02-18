import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

/**
 * TS-Λ3 // LABS SECTION [v7.8.5]
 * Path: src/components/labs.tsx
 * Mission: Resolve [plugin:vite:import-analysis] // Architectural Realignment
 * Authority: THE OVERWATCH // SG-CANONICAL-2026
 * Fix: Liquidated broken local SVG imports (SentinelIcon, BishopIcon, etc.).
 * Fix: Point-locked to SymbolTile (Material Symbols) and Lucide-React axis.
 * Fix: Enforced Smallcaps Mandate for all local component imports.
 */

// 🧬 AUTHORITATIVE UI LATCHES
import { SectionHeading } from './sectionheading.tsx';
import SymbolTile from './icons/symboltile.tsx';

// 🛡️ BRAND ASSETS (Sovereign Substrate)
import { MyAuditLogo } from '../brand/myauditlogo.tsx';
import { RprVerifyLogo } from '../brand/rprverifylogo.tsx';

const FRAMEWORK_IDS = ['sentinel', 'ram', 'rbaa', 'cstride'] as const;

/**
 * 🚥 GLYPH REGISTRY
 * Maps framework IDs to authoritative Material Symbols glyphs.
 */
const GLYPHS: Record<string, string> = {
  sentinel: 'shield',
  ram: 'memory',
  rbaa: 'science',
  cstride: 'monitoring'
};

export const Labs: React.FC = () => {
  // 🛰️ i18n LATCH: Point-locked to harborA namespace
  const { t } = useTranslation('harborA');
  const [openId, setOpenId] = useState<string | null>(null);

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
                  {/* 🛡️ SYMBOL LATCH: Standardized glyph intake */}
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

        {/* 🧪 02. L4 SPECIALIST INSTANCES */}
        <div className="mb-32">
          <div className="flex items-center gap-6 mb-12 opacity-40">
            <div className="h-px flex-grow bg-white/20" />
            <h2 className="text-xs font-mono tracking-[0.4em] text-white uppercase">L4_SPECIALIST_INSTANCES</h2>
            <div className="h-px flex-grow bg-white/20" />
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

        {/* 📊 03. LIVE STATUS AUDIT */}
        <div className="mt-24 pt-16 border-t border-white/5">
          <h3 className="text-xs font-mono text-slate-500 uppercase tracking-[0.35em] mb-8 font-black">
            {t('labs.status_title')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-[11px] text-slate-300 font-mono">
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
          <div className="mt-16 p-6 bg-white/[0.01] border border-dashed border-white/5 rounded-2xl">
            <p className="text-[9px] text-slate-600 font-mono italic leading-relaxed text-center">
              {t('labs.notice')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Labs;