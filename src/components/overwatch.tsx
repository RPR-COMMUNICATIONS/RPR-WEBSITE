import React from 'react';
import { useTranslation } from 'react-i18next';
import { Linkedin, BookOpen, Quote, Activity } from 'lucide-react';

/**
 * TS-Λ3 // OVERWATCH COMMAND AXIS [v7.5.4]
 * Path: src/components/overwatch.tsx
 * Mission: Identity Substrate Calibration // Outline Glyph Latch
 * Authority: THE OVERWATCH // SG-CANONICAL-2026
 * Status: AUTHORITATIVE // LATCHED
 * Fix: Reverted to 'FILL' 0 per user directive for outline aesthetic.
 * Fix: Maintained 80px container to preserve negative space.
 * Fix: Point-locked to White Monochrome theme (Glyph + Glow + Border).
 * Fix: Local style override synchronized to outline variation settings.
 */

// 🧬 EXTERNAL PRIMITIVE LATCHES
import Chessboard from './chessboard.tsx';
import OverwatchLabyrinth from './overwatchlabyrinth.tsx';
import SymbolTile from './icons/symboltile.tsx';

const TacticalProgress: React.FC<{ label?: string }> = ({ label = 'STABILITY_INDEX' }) => (
  <div className="w-full flex items-center justify-between gap-4 text-[8px] font-mono uppercase tracking-[0.35em] text-slate-600">
    <span>{label}</span>
    <div className="flex-1 flex gap-1 h-0.5">
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className={`flex-1 rounded-sm transition-all duration-1000 ${i < 7 ? 'bg-cyan-500 shadow-[0_0_8px_rgba(34,211,238,0.4)]' : 'bg-slate-800'}`}
          style={{ transitionDelay: `${i * 50}ms` }}
        />
      ))}
    </div>
    <span className="text-[7px] tracking-[0.3em] animate-pulse">LATCHING...</span>
  </div>
);

export const Overwatch: React.FC = () => {
  const { t } = useTranslation('harbora');

  return (
    <section id="overwatch" className="py-20 md:py-24 relative overflow-hidden bg-black border-t border-white/5">
      {/* 🧬 LOCAL STYLE OVERRIDE: Enforce outline state ('FILL' 0) for the identity axis */}
      <style>{`
        .overwatch-identity-latch .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48 !important;
        }
      `}</style>

      <div className="absolute inset-0 bg-cyan-500/[0.02] blur-[160px] pointer-events-none" />

      <div className="max-w-screen-2xl mx-auto px-6 relative z-10">
        {/* 📑 SECTION HEADER */}
        <div className="mb-10 flex items-end justify-between gap-8">
          <div className="space-y-3 text-left">
            <span className="text-[9px] font-mono text-cyan-500 tracking-[0.5em] uppercase font-black block">
              {t('overwatch.kicker', 'The sole human in the business setup.')}
            </span>
            <h2 className="text-4xl md:text-6xl font-black italic text-white uppercase tracking-tighter leading-none">
              {t('overwatch.title_main')} <span className="text-cyan-400">{t('overwatch.title_accent')}</span>
            </h2>
          </div>
          <div className="hidden md:block px-4 py-2 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md">
            <p className="font-mono text-[8px] text-slate-500 uppercase tracking-[0.4em]">
              SYSTEM_STATUS: <span className="text-cyan-500 font-black animate-pulse">LATCHED_PRIMARY</span>
            </p>
          </div>
        </div>

        {/* 🏛️ FORENSIC 2×2 GRID CARD */}
        <div className="bg-white/[0.01] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 divide-white/10 lg:divide-x lg:divide-y-0">

            {/* 👤 QUADRANT 1: IDENTITY */}
            <div className="border-b lg:border-b border-white/10 p-8 md:p-12 flex flex-col justify-between bg-black/20">
              <div className="space-y-10 overwatch-identity-latch">
                <div className="flex items-start gap-8">

                  {/* 🧬 RECALIBRATED 80PX WHITE OUTLINE IDENTITY TILE */}
                  <SymbolTile
                    glyph="skull"
                    size={80}
                    variant="square"
                    active={true}
                    iconFill={0} // Outlined state enforced
                    color="#ffffff"
                    glow={true}
                    className="shadow-[0_0_50px_rgba(255,255,255,0.15)] !bg-zinc-950 !border-white/40 !text-white"
                  />

                  <div className="space-y-1 text-left pt-2">
                    <p className="font-mono text-[10px] text-white font-black tracking-[0.3em] uppercase italic">{t('overwatch.role')}</p>
                    <p className="font-mono text-[8px] text-slate-500 uppercase tracking-widest opacity-60">{t('overwatch.status')}</p>
                    <div className="flex gap-4 pt-3">
                      <a href="https://www.linkedin.com/in/puvan-sivanasan-29707726" target="_blank" rel="noreferrer"><Linkedin size={14} className="text-slate-400 hover:text-cyan-400 transition-colors" /></a>
                      <a href="https://substack.com/@butterdime" target="_blank" rel="noreferrer"><BookOpen size={14} className="text-slate-400 hover:text-orange-400 transition-colors" /></a>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 text-slate-300 text-sm md:text-base leading-relaxed pr-4 text-left">
                  <p>{t('overwatch.bio_p1')}</p>
                  <p className="text-slate-400 border-l border-white/10 pl-4 italic">{t('overwatch.bio_p2')}</p>
                </div>
              </div>
              <div className="mt-12 pt-6 border-t border-white/5"><TacticalProgress label="IDENTITY_LATCHED" /></div>
            </div>

            {/* ♟️ QUADRANT 2: CHESSBOARD FILL */}
            <div className="border-b border-white/10 flex items-center justify-center bg-black/40 relative min-h-[400px]">
              <Chessboard />
            </div>

            {/* 🧪 QUADRANT 3: NARRATIVE */}
            <div className="lg:border-r border-white/10 p-8 md:p-12 flex flex-col justify-between space-y-12 bg-black/20">
              <div className="space-y-8 text-left">
                <header className="space-y-2">
                  <div className="flex items-center gap-2 opacity-40">
                    <Activity className="w-3 h-3 text-cyan-500 animate-pulse" />
                    <span className="text-[7px] font-mono text-cyan-500 tracking-[0.5em] uppercase font-black">Narrative_Axis</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black italic text-white uppercase tracking-tighter leading-none font-sans">{t('overwatch.experiment_title')}</h3>
                </header>
                <div className="space-y-5 text-slate-400 text-[11px] md:text-xs font-mono uppercase leading-relaxed tracking-tighter opacity-80 italic">
                  <p>{t('overwatch.experiment_p1')}</p>
                  <p>{t('overwatch.experiment_p2')}</p>
                  <p className="text-white border-l-2 border-cyan-500 pl-4 font-medium not-italic">{t('overwatch.experiment_p3')}</p>
                </div>
              </div>
              <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row md:items-center gap-6 group/quote">
                <div className="relative">
                  <Quote className="absolute -left-6 -top-1 w-4 h-4 text-cyan-500/10" />
                  <blockquote className="text-[11px] md:text-xs font-black italic uppercase leading-tight text-slate-500 tracking-tighter group-hover/quote:text-slate-300 transition-colors duration-700 text-left">{t('overwatch.quote')}</blockquote>
                </div>
              </div>
            </div>

            {/* 🌀 QUADRANT 4: LABYRINTH FILL */}
            <div className="flex items-center justify-center bg-black/40 relative min-h-[400px]">
              <OverwatchLabyrinth />
            </div>
          </div>
        </div>

        {/* ⚓ TERMINUS LATCH */}
        <div className="mt-12 flex justify-between items-center opacity-10 select-none font-mono text-[7px] uppercase tracking-[0.8em]">
          <span>SG-CANONICAL-2026 // OVERWATCH_v7.5.4</span>
          <div className="flex items-center gap-2">
            <span
              className="material-symbols-outlined !text-[10px]"
              style={{ fontVariationSettings: "'FILL' 0" }}
            >
              skull
            </span>
            <span>LIVE_AUDIT_ACTIVE</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overwatch;