import React from 'react';
import { useTranslation } from 'react-i18next';
import { Linkedin, BookOpen } from 'lucide-react';
import Chessboard from './chessboard.tsx';
import OverwatchLabyrinth from './overwatchlabyrinth.tsx';
import SymbolTile from './icons/symboltile.tsx';

/**
 * TS-Λ3 // OVERWATCH COMMAND AXIS [v8.7.0]
 * Path: src/components/overwatch.tsx
 * Mission: 2x2 Bio Grid + Experiment Narrative + Substack Dispatch Hub
 * Authority: THE OVERWATCH // SG-CANONICAL-2026
 * Status: AUTHORITATIVE // LATCHED
 */

export const Overwatch: React.FC = () => {
  const { t } = useTranslation('harbora');

  return (
    <section
      id="overwatch"
      className="relative overflow-hidden border-t border-white/5 bg-black py-20 md:py-24"
    >
      <style>{`
        .overwatch-identity-latch .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48 !important;
        }
      `}</style>

      <div className="pointer-events-none absolute inset-0 bg-cyan-500/[0.02] blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-screen-2xl px-6">
        <div className="mb-10 flex items-end justify-between gap-8 text-left">
          <div className="space-y-3">
            <span className="block font-mono text-[9px] font-black uppercase tracking-[0.5em] text-cyan-500">
              {t('overwatch.kicker')}
            </span>

            <h2 className="text-4xl font-black uppercase italic leading-none tracking-tighter text-white md:text-6xl">
              {t('overwatch.title_main')}{' '}
              <span className="text-cyan-400">{t('overwatch.title_accent')}</span>
            </h2>
          </div>

          <div className="hidden items-center gap-5 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-md md:flex">
            <div className="overwatch-identity-latch">
              <SymbolTile
                glyph="skull"
                size={44}
                variant="square"
                active={true}
                iconFill={0}
                color="#ffffff"
                glow={true}
                className="!bg-zinc-950 !border-white/30 !text-white shadow-[0_0_30px_rgba(255,255,255,0.12)]"
              />
            </div>

            <div className="space-y-1 text-left">
              <p className="font-mono text-[10px] font-black uppercase tracking-[0.28em] text-white">
                {t('overwatch.role')}
              </p>
              <p className="font-mono text-[8px] uppercase tracking-[0.32em] text-slate-500">
                {t('overwatch.status')}
              </p>
            </div>

            <div className="flex gap-4 pl-2">
              <a
                href="https://www.linkedin.com/in/puvan-sivanasan-29707726"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin
                  size={14}
                  className="text-slate-400 transition-colors hover:text-cyan-400"
                />
              </a>

              <a
                href="https://substack.com/@butterdime"
                target="_blank"
                rel="noreferrer"
                aria-label="Substack"
              >
                <BookOpen
                  size={14}
                  className="text-slate-400 transition-colors hover:text-orange-400"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.01] shadow-2xl backdrop-blur-sm">
          <div className="grid grid-cols-1 divide-y divide-white/10 lg:grid-cols-2 lg:divide-x lg:divide-y-0">
            <div className="aspect-square bg-black/20">
              <div className="flex h-full w-full items-center p-8 md:p-10 lg:p-12">
                <div className="w-full text-left">
                  <p className="text-[1.02rem] leading-[1.58] text-slate-200 md:text-[1.14rem] md:leading-[1.62] lg:text-[1.34rem] lg:leading-[1.64]">
                    {t('overwatch.bio_p2')}
                  </p>
                </div>
              </div>
            </div>

            <div className="aspect-square bg-black/40">
              <div className="flex h-full w-full items-center justify-center p-6 md:p-8 lg:p-10">
                <div className="aspect-square w-full max-w-[520px]">
                  <Chessboard />
                </div>
              </div>
            </div>

            <div className="aspect-square bg-black/20">
              <div className="flex h-full w-full items-center p-8 md:p-10 lg:p-12">
                <div className="w-full text-left">
                  <p className="text-[1.02rem] leading-[1.58] text-slate-200 md:text-[1.14rem] md:leading-[1.62] lg:text-[1.34rem] lg:leading-[1.64]">
                    {t('overwatch.bio_p1')}
                  </p>
                </div>
              </div>
            </div>

            <div className="aspect-square bg-black/40">
              <div className="flex h-full w-full items-center justify-center p-6 md:p-8 lg:p-10">
                <div className="aspect-square w-full max-w-[520px]">
                  <OverwatchLabyrinth />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 overflow-hidden rounded-[2.5rem] border border-cyan-500/20 bg-gradient-to-b from-cyan-500/[0.06] to-transparent">
          <div className="px-8 py-10 md:px-12 md:py-14">
            <div className="mx-auto max-w-5xl">
              <div className="mb-8 space-y-3 text-left">
                <span className="block font-mono text-[9px] font-black uppercase tracking-[0.45em] text-cyan-400/80">
                  {t('overwatch.experiment_title')}
                </span>
                <h3 className="max-w-4xl text-3xl font-black uppercase italic leading-[0.95] tracking-tight text-white md:text-5xl">
                  THE HUMAN–AI <span className="text-cyan-400">EXPERIMENT</span>
                </h3>
              </div>

              <div className="mx-auto space-y-6 text-left">
                <p className="text-base leading-relaxed text-slate-200 md:text-xl lg:text-2xl">
                  {t('overwatch.experiment_p1')}
                </p>
                <p className="text-base leading-relaxed text-slate-300 md:text-lg lg:text-xl opacity-90">
                  {t('overwatch.experiment_p2')}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.01]">
          <div className="px-8 py-8 md:px-12 md:py-10">
            <div className="mx-auto max-w-5xl">
              <div className="mb-4 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                <div className="text-left">
                  <p className="font-mono text-[9px] font-black uppercase tracking-[0.45em] text-cyan-400/80">
                    {t('overwatch.discoveries_heading')}
                  </p>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">
                    {t('overwatch.discoveries_subtitle')}
                  </p>
                </div>
                <a
                  href="https://butterdime.substack.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-slate-100 transition hover:border-cyan-400/60 hover:bg-cyan-500/10"
                >
                  <BookOpen size={14} className="text-orange-300" />
                  <span>{t('overwatch.discoveries_cta')}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overwatch;
