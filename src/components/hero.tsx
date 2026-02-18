import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';
import SymbolTile from './icons/symboltile.tsx';

/**
 * TS-Λ3 // HERO SECTION [v9.4.2]
 * Path: src/components/hero.tsx
 * Mission: Cyan Accent + Text Glow Removal
 * Authority: THE OVERWATCH // SG-CANONICAL-2026
 * Status: CLINICAL // BUILD_STABILIZED
 */

export const Hero: React.FC = () => {
  const { t } = useTranslation('harborA');
  const [openId, setOpenId] = useState<string | null>(null);

  const ACT_IDS = ['a1', 'a2', 'a3'] as const;

  const renderBody = (actId: string) => {
    const paragraphs = [1, 2, 3, 4, 5, 6]
      .map((n) => t(`hero.acts.${actId}.body_p${n}`, ''))
      .filter((p) => p !== '');

    return (
      <div className="text-slate-300 text-base leading-relaxed text-center space-y-6 max-w-4xl mx-auto">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        {actId === 'a2' && t('hero.acts.a2.quote', '') && (
          <p className="text-white italic text-lg border-t border-white/5 pt-6 mt-6">
            {t('hero.acts.a2.quote')}
          </p>
        )}
      </div>
    );
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-black pt-32 pb-24 overflow-hidden flex flex-col items-center"
    >
      {/* 🌌 VISUAL SUBSTRATE */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/5 blur-[120px] rounded-full opacity-40 animate-pulse" />
      </div>

      <div className="max-w-screen-2xl mx-auto px-6 relative z-10 text-center mb-32 flex flex-col items-center">
        <div className="mb-4">
          <span className="font-mono text-xs tracking-[0.4em] uppercase opacity-60 text-cyan-400">
            {t('hero.kicker')}
          </span>
        </div>

        {/* 🏛️ RESPONSIVE TITLE LATCH */}
        <h1 className="text-3xl sm:text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-[0.9] mb-12 animate-in fade-in slide-in-from-top-4 duration-1000">
          <span className="text-white">{t('hero.title_line_1')}</span>
          <br />
          <span className="bg-gradient-to-b from-cyan-400 to-cyan-200 bg-clip-text text-transparent">
            {t('hero.title_line_2')}
          </span>
        </h1>

        <div className="max-w-4xl mx-auto border-y border-cyan-500/40 py-8 mb-16 italic text-cyan-200/80 text-center uppercase tracking-tight">
          {t('hero.mandate')}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="/labs"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-5 bg-cyan-400 text-black pr-10 pl-4 py-4 rounded-2xl hover:bg-cyan-300 transition-all duration-300 font-black text-xs tracking-widest uppercase shadow-[0_0_30px_rgba(255,255,255,0.65)] group"
          >
            <SymbolTile
              glyph="experiment"
              size={24}
              variant="square"
              color="#000000"
              className="bg-black/5 border-transparent"
              glow={true}
            />
            {t('hero.btns.labs')}
          </a>
          <button className="w-full sm:w-auto inline-flex items-center justify-center gap-5 bg-black border border-cyan-500/40 text-cyan-200 pr-10 pl-4 py-4 rounded-2xl hover:border-cyan-300 hover:text-cyan-100 transition-all duration-300 font-black text-xs tracking-widest uppercase backdrop-blur-sm shadow-[0_0_25px_rgba(255,255,255,0.55)] group">
            <SymbolTile
              glyph="smart_toy"
              size={24}
              variant="square"
              active={false}
            />
            {t('hero.btns.ollie')}
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto w-full px-6">
        <div className="flex items-center gap-6 mb-12">
          <div className="h-px flex-grow bg-cyan-500/30" />
          <span className="font-mono text-[10px] text-cyan-300 uppercase tracking-[0.6em] font-black opacity-70">
            {t('hero.origin_story')}
          </span>
          <div className="h-px flex-grow bg-cyan-500/30" />
        </div>

        <div className="grid grid-cols-1 gap-6">
          {ACT_IDS.map((id) => (
            <div
              key={id}
              className={`
                group bg-[#0a0a0a]/40 backdrop-blur-md border transition-all duration-700 rounded-[2rem] overflow-hidden
                ${openId === id
                  ? 'border-cyan-400/70 shadow-[0_0_40px_rgba(34,211,238,0.35)]'
                  : 'border-white/10'
                }
              `}
            >
              <button
                onClick={() => setOpenId(openId === id ? null : id)}
                className="flex w-full items-center gap-8 p-6 sm:p-10 text-left transition-colors hover:bg-white/[0.02]"
              >
                <SymbolTile
                  size={56}
                  glyph={t(
                    `hero.acts.${id}.glyph`,
                    id === 'a1' ? 'counter_1' : id === 'a2' ? 'counter_2' : 'counter_3',
                  )}
                  active={openId === id}
                  iconFill={openId === id ? 1 : 0}
                />
                <div className="flex-grow">
                  <p className="text-[9px] font-mono text-slate-500 uppercase tracking-widest mb-1 font-bold group-hover:text-cyan-200/80 transition-colors">
                    {t(`hero.acts.${id}.kicker`)} // {t(`hero.acts.${id}.loop`)}
                  </p>
                  <h3 className="text-xl font-black tracking-widest uppercase italic leading-tight text-white group-hover:text-cyan-100 transition-colors">
                    {t(`hero.acts.${id}.title`)}
                  </h3>
                </div>
                <ChevronDown
                  className={`transition-all duration-500 text-slate-600 ${openId === id ? 'rotate-180 text-cyan-300' : ''
                    }`}
                  size={24}
                />
              </button>

              <div
                className={`px-6 sm:px-10 pb-10 border-t border-white/5 pt-8 transition-all duration-700 ease-in-out overflow-hidden ${openId === id ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
              >
                <div className="max-w-4xl mx-auto">
                  <p className="font-bold text-white uppercase italic tracking-tighter text-lg leading-snug mb-8 text-center border-b border-white/5 pb-8">
                    {t(`hero.acts.${id}.thesis`)}
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
