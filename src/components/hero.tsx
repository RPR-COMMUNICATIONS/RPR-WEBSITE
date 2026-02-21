import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ChevronDown, ArrowRight } from 'lucide-react';

/**
 * TS-Λ3 // HERO SECTION [v9.8.6]
 * Path: src/components/hero.tsx
 * Mission: Authoritative Content Latch // Liquidation of Black Void Anomaly
 * Authority: THE OVERWATCH // SG-CANONICAL-2026
 * Status: AUTHORITATIVE // LATCHED
 * Fix: Moving key-value mapping into a single scope to resolve ReferenceError on 'n'.
 * Fix: Strict equality check (value === key) for safe i18n failure detection.
 */

import SymbolTile from './icons/symboltile.tsx';
import { SectionHeading } from './sectionheading.tsx';

export const Hero: React.FC = () => {
  /**
   * 🛰️ i18n LATCH
   * Namespace: 'harbora' (Standardized lowercase mandate)
   */
  const { t, i18n } = useTranslation('harbora');
  const navigate = useNavigate();
  const [openId, setOpenId] = useState<string | null>(null);

  const ACT_IDS = ['a1', 'a2', 'a3'] as const;

  /**
   * 🧬 RENDER BODY
   * Forensic extraction of act paragraphs.
   * Treats value === key as a "missing translation" state.
   */
  const renderBody = (actId: string) => {
    // 🛡️ RECOVERY LATCH: Capture entries as objects to keep 'n' and 'key' in scope.
    const rawEntries = [1, 2, 3, 4, 5, 6].map((n) => {
      const key = `hero.acts.${actId}.body_p${n}`;
      const value = t(key);
      return { key, value };
    });

    const paragraphs = rawEntries
      .map(({ key, value }) => {
        // If i18next returns the key, the JSON substrate is missing this entry.
        if (!value || value === key) {
          return null;
        }
        return value;
      })
      .filter((p): p is string => !!p);

    // 🕵️ FORENSIC FALLBACK: Pulsating marker if the panel is empty.
    if (paragraphs.length === 0) {
      return (
        <div className="py-12 border-y border-white/5 bg-white/[0.01]">
          <p className="text-cyan-500/40 font-mono text-[10px] animate-pulse tracking-[0.3em] uppercase">
            {`INITIATING_FORENSIC_INGESTION_FOR_${actId.toUpperCase()}...`}
          </p>
          <p className="text-slate-700 text-[8px] mt-2 font-mono uppercase italic">
            {`Substrate: ${i18n.language || 'UNKNOWN'} // Node: asia-southeast1`}
          </p>
        </div>
      );
    }

    return (
      <div className="text-slate-300 text-sm md:text-base leading-relaxed text-center space-y-8 max-w-4xl mx-auto uppercase font-mono tracking-tight pb-6">
        {paragraphs.map((p, i) => (
          <p
            key={i}
            className="animate-in fade-in slide-in-from-bottom-2 duration-700"
            style={{ animationDelay: `${i * 150}ms` }}
          >
            {p}
          </p>
        ))}

        {/* 🎭 QUOTE AXIS LATCH (ACT II Only) */}
        {actId === 'a2' && (() => {
          const quoteKey = 'hero.acts.a2.quote';
          const quoteVal = t(quoteKey);
          return quoteVal && quoteVal !== quoteKey ? (
            <div className="pt-10 mt-10 border-t border-white/10">
              <p className="text-cyan-200 italic text-lg font-sans lowercase opacity-80">
                {quoteVal}
              </p>
            </div>
          ) : null;
        })()}
      </div>
    );
  };

  return (
    <section id="hero" className="relative min-h-screen bg-black pt-32 pb-48 overflow-hidden flex flex-col items-center">
      <style>{`.clinical-smallcaps { font-variant-caps: all-small-caps; letter-spacing: 0.12em; }`}</style>

      {/* 🌌 AMBIENT SUBSTRATE */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-cyan-500/5 blur-[180px] rounded-full opacity-30 animate-pulse" />
      </div>

      <div className="max-w-screen-2xl mx-auto px-6 relative z-10 text-center mb-64 flex flex-col items-center">
        <div className="mb-6">
          <span className="clinical-smallcaps text-[11px] tracking-[0.5em] uppercase text-cyan-400 font-black">
            {t('hero.kicker', 'enterprise intelligence infrastructure')}
          </span>
        </div>

        <h1 className="text-5xl sm:text-7xl md:text-[10rem] font-black uppercase italic tracking-tighter leading-[0.8] mb-12 select-none">
          <span className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
            {t('hero.title_line_1', 'sovereign')}
          </span>
          <br />
          <span className="bg-gradient-to-b from-cyan-400 to-cyan-100 bg-clip-text text-transparent">
            {t('hero.title_line_2', 'business OS')}
          </span>
        </h1>

        <div className="max-w-3xl mx-auto border-y border-white/10 py-12 mb-20 italic text-slate-400 text-center uppercase tracking-[0.08em] text-sm md:text-xl leading-relaxed">
          {t('hero.mandate', 'the mothership is the business operating platform that turns a real company into a living digital twin.')}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 w-full sm:w-auto">
          <button
            onClick={() => navigate('/labs')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-6 bg-cyan-500 text-black pr-12 pl-6 py-5 rounded-2xl hover:bg-cyan-400 transition-all duration-500 font-black text-[11px] tracking-[0.2em] uppercase shadow-[0_20px_60px_rgba(6,182,212,0.15)] group"
          >
            <SymbolTile glyph="experiment" size={28} variant="square" color="#000000" className="bg-black/5 border-transparent" glow={true} />
            {t('hero.btns.labs', 'access labs')} <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
          </button>

          <Link
            to="/labs/library"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-6 bg-black border border-white/10 text-white pr-12 pl-6 py-5 rounded-2xl hover:border-cyan-500/50 hover:bg-white/[0.02] transition-all duration-500 font-black text-[11px] tracking-[0.2em] uppercase"
          >
            <SymbolTile glyph="description" size={28} variant="square" active={false} />
            {t('hero.btns.whitepaper', 'whitepaper')}
          </Link>
        </div>
      </div>

      {/* 🛡️ CHRONICLE SUBSTRATE (THE ACTS) */}
      <div className="max-w-5xl mx-auto w-full px-6 relative z-10">
        <div className="mb-32">
          <SectionHeading
            kicker={t('hero.origin_story_meta', 'TEMPORAL SUBSTRATE // CHRONICLE SG-2026')}
            title={t('hero.origin_story_title_part1', 'WHY')}
            accent={t('hero.origin_story_title_part2', 'WE MADE THIS')}
          />
        </div>

        <div className="grid grid-cols-1 gap-8">
          {ACT_IDS.map((id) => (
            <div
              key={id}
              className={`group bg-zinc-950/40 backdrop-blur-3xl border transition-all duration-1000 rounded-[3rem] overflow-hidden ${openId === id ? 'border-cyan-500/40 shadow-[0_0_80px_rgba(6,182,212,0.05)]' : 'border-white/5 hover:border-white/10'
                }`}
            >
              <button
                onClick={() => setOpenId(openId === id ? null : id)}
                className="flex w-full items-center gap-10 p-10 sm:p-14 text-left"
              >
                <SymbolTile
                  size={56}
                  glyph={id === 'a1' ? 'counter_1' : id === 'a2' ? 'counter_2' : 'counter_3'}
                  active={openId === id}
                  iconFill={openId === id ? 1 : 0}
                />
                <div className="flex-grow">
                  <p className="text-[10px] font-mono text-slate-600 uppercase tracking-[0.4em] mb-2 font-bold group-hover:text-cyan-500/60 transition-colors">
                    {t(`hero.acts.${id}.kicker`, `ACT_${id.slice(1).toUpperCase()}`)} // {t(`hero.acts.${id}.loop`, 'SYSTEM_LOOP')}
                  </p>
                  <h3 className="text-3xl font-black tracking-widest uppercase italic text-white group-hover:translate-x-1 transition-transform duration-500">
                    {t(`hero.acts.${id}.title`, 'LATCHING_TITLE...')}
                  </h3>
                </div>
                <ChevronDown className={`transition-all duration-700 text-slate-700 ${openId === id ? 'rotate-180 text-cyan-400' : 'group-hover:text-slate-400'}`} size={28} />
              </button>

              <div className={`transition-all duration-1000 ease-in-out overflow-hidden ${openId === id ? 'max-h-[3000px] opacity-100 pb-16 px-10 sm:px-14' : 'max-h-0 opacity-0'
                }`}>
                <div className="max-w-4xl mx-auto border-t border-white/5 pt-12">
                  <p className="font-bold text-white uppercase italic tracking-widest text-2xl leading-tight mb-12 text-center border-b border-white/5 pb-12 opacity-90">
                    {t(`hero.acts.${id}.thesis`, 'THE_STRATEGIC_THESIS_IS_PENDING_INGESTION...')}
                  </p>
                  <div className="text-center">{renderBody(id)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;