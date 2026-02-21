import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

/**
 * TS-Λ3 // FOUNDATIONS [v9.9.6]
 * Path: src/components/foundations.tsx
 * Mission: Font Alignment & Linguistic Latch
 * Authority: THE OVERWATCH // SG-CANONICAL-2026
 * Status: AUTHORITATIVE // LATCHED
 * Fix: Standardized "highlighted" Thesis to text-[17px] to prevent wrap drift.
 * Fix: Forced h-full and items-stretch to ensure physical alignment of the 3 pillars.
 * Fix: Liquidated legacy 'harborA' namespace to resolve content ingestion failure.
 */

// 🧬 AUTHORITATIVE UI LATCHES
import { SectionHeading } from './sectionheading.tsx';
import SymbolTile from './icons/symboltile.tsx';

const PILLAR_IDS = ['truth', 'insight', 'journey'] as const;
const GLYPHS = {
  truth: 'compass_calibration',
  insight: 'insights',
  journey: 'near_me'
} as const;

export const Foundations: React.FC = () => {
  // 🛰️ i18n LATCH: Targeting authoritative lowercase namespace
  const { t } = useTranslation('harbora');

  const [openId, setOpenId] = useState<string | null>(null);
  const [iconSize, setIconSize] = useState(64);

  /**
   * 📐 RESPONSIVE ICON CALIBRATION
   * Dynamically adjusts SymbolTile geometry based on viewport telemetry.
   */
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const update = () => setIconSize(mq.matches ? 64 : 36);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  /**
   * 📐 PILLAR BODY RENDERING
   * Font sizes standardized to text-sm to ensure 1:1 vertical rhythm.
   */
  const renderPillarBody = (pId: 'truth' | 'insight' | 'journey') => {
    const base = `foundations.pillars.${pId}`;
    if (pId === 'truth') {
      return (
        <div className="space-y-4 text-sm">
          <p>{t(`${base}.body_p1`)}</p>
          <p className="text-cyan-400/80 italic font-medium">{t(`${base}.body_p2`)}</p>
          <p>{t(`${base}.body_p3`)}</p>
        </div>
      );
    }
    if (pId === 'insight') {
      return (
        <div className="space-y-4 text-sm">
          <p>{t(`${base}.body_p1`)}</p>
          <p className="text-white/60 font-medium">{t(`${base}.body_p2`)}</p>
          <p>{t(`${base}.body_p3`)}</p>
        </div>
      );
    }
    return (
      <div className="space-y-4 text-sm">
        <p>{t(`${base}.body_p1`)}</p>
        <p>{t(`${base}.body_p2`)}</p>
        <p className="text-cyan-400/80 italic font-medium">{t(`${base}.body_p3`)}</p>
      </div>
    );
  };

  return (
    <section id="foundations" className="relative bg-black py-24 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-screen-2xl mx-auto">
        <SectionHeading
          kicker={t('foundations.kicker', 'CORE DNA // STRATEGIC SUBSTRATE')}
          title={t('foundations.title', 'THE')}
          accent={t('foundations.accent', 'FOUNDATIONS')}
          className="mb-20"
        />

        {/* 📐 GRID: items-stretch ensures all cards in the row share the same height boundary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PILLAR_IDS.map((pId) => (
            <div
              key={pId}
              className={`
                group bg-[#0a0a0a] border transition-all duration-500 rounded-[2.5rem] overflow-hidden flex flex-col h-full
                ${openId === pId ? 'border-cyan-500/40 shadow-[0_0_40px_rgba(34,211,238,0.05)]' : 'border-white/10'}
              `}
            >
              {/* CARD TRIGGER AXIS */}
              <button
                onClick={() => setOpenId(openId === pId ? null : pId)}
                className="flex w-full items-center gap-6 p-8 md:p-10 pb-4 text-left transition-colors hover:bg-white/[0.02]"
              >
                <SymbolTile
                  size={iconSize}
                  glyph={GLYPHS[pId]}
                  active={openId === pId}
                  iconFill={openId === pId ? 1 : 0}
                />
                <div className="flex-grow">
                  <h3 className="text-lg font-black tracking-widest uppercase italic leading-tight line-clamp-2 min-h-[3.5rem] flex items-center">
                    {t(`foundations.pillars.${pId}.title`)}
                  </h3>
                </div>
                <ChevronDown
                  className={`transition-transform duration-500 text-slate-500 ${openId === pId ? 'rotate-180 text-cyan-500' : ''}`}
                  size={20}
                />
              </button>

              {/* CARD CONTENT SUBSTRATE */}
              <div className="px-8 md:px-10 pb-8 flex-1 flex flex-col">
                <p className="font-bold text-white uppercase italic tracking-tighter text-[17px] leading-snug">
                  {t(`foundations.pillars.${pId}.thesis`)}
                </p>

                {/* COLLAPSIBLE FORENSIC BODY */}
                <div
                  className={`
                    transition-all duration-700 ease-in-out overflow-hidden
                    ${openId === pId ? 'max-h-[1200px] opacity-100 mt-6' : 'max-h-0 opacity-0 mt-0'}
                  `}
                >
                  <div className="text-slate-400 leading-relaxed border-t border-white/5 pt-6">
                    {renderPillarBody(pId)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Foundations;