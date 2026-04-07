import React from 'react';
import { useTranslation } from 'react-i18next';
import { SectionHeading } from './sectionheading.tsx';
import { FileText, Zap, ExternalLink } from 'lucide-react';

/**
 * TS-Λ3 // MOTHERSHIP SECTION [v20.4.3]
 * Path: src/components/mothershipsection.tsx
 * Mission: Strategic Positioning // Singapore Benchmark Latch
 * Status: AUTHORITATIVE
 * Update: Replaced placeholder with "THE BRIGHT LIGHTS // WITH EMPTY SHELLS
 */

export const MothershipSection: React.FC = () => {
  const { t } = useTranslation('harbora');

  const pills = [
    t('mothership.pills.sentinel'),
    t('mothership.pills.ram'),
    t('mothership.pills.rbaa'),
    t('mothership.pills.cstride'),
  ];

  const intro = t('mothership.intro');

  // 🛰️ NARRATIVE RESIDENCY: Linked to i18n for future-proofing
  const singaporeParagraphs = [
    t('mothership.singapore_p1'),
    t('mothership.singapore_p2'),
    t('mothership.singapore_p3'),
  ];

  const standardsParagraphs = [
    t('mothership.standards_p1'),
    t('mothership.standards_p2'),
  ];

  const dataAvailability = t('mothership.data_availability', '');

  return (
    <section id="mothership" className="relative bg-black py-12 md:py-24">
      <div className="relative z-10 w-full px-4 md:px-20">
        <div className="mb-10 md:mb-22">
          <SectionHeading
            kicker={t('mothership.kicker')}
            title={t('mothership.title')}
            accent={t('mothership.accent')}
          />
        </div>

        <div className="border-t border-white/10 pt-10 md:pt-18">
          <div className="mx-auto max-w-5xl space-y-8 md:space-y-12">

            {/* 🛰️ SOVEREIGN IP LATCH: Singapore Positioning Title */}
            <div className="max-w-4xl border-l-4 border-cyan-400 pl-5 md:pl-7">
              <span className="mb-2 block font-mono text-[9px] uppercase tracking-[0.4em] text-cyan-400">
                {t('mothership.singapore_kicker', 'SOVEREIGN_REFERENCE')}
              </span>
              <h3 className="mb-4 text-xl font-black uppercase tracking-[-0.04em] text-white md:text-3xl">
                {t('mothership.singapore_title', 'THE BRIGHT LIGHTS // WITH EMPTY SHELLS')}
              </h3>
            </div>

            <div className="max-w-4xl">
              <p className="text-sm leading-relaxed text-zinc-200 md:text-lg">
                {intro}
              </p>
            </div>

            {/* Singapore Narrative Block */}
            <div className="border-l border-white/10 pl-4 md:pl-7">
              <div className="max-w-4xl space-y-4 md:space-y-5">
                {singaporeParagraphs.map((paragraph, idx) => (
                  <p
                    key={`sg-p-${idx}`}
                    className="text-sm leading-relaxed text-zinc-300 md:text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Jensen Huang Quote Enclave */}
            <figure className="rounded-[1.5rem] md:rounded-[2rem] border border-white/10 bg-white/[0.015] px-5 py-8 md:px-10 md:py-14">
              <blockquote
                cite="https://singjupost.com/transcript-jensen-huangs-interview-cisco-ai-summit-2026/"
                className="relative max-w-4xl text-xl font-semibold italic leading-tight tracking-tight text-white md:text-5xl lg:text-6xl"
              >
                <span className="pointer-events-none absolute -left-2 -top-4 select-none text-4xl leading-none text-cyan-400/85 md:-left-3 md:-top-7 md:text-7xl">
                  “
                </span>
                <p className="pl-4 md:pl-7">
                  {t(
                    'mothership.quote',
                    'We need to develop AI to a level that is useful to people.'
                  )}
                </p>
              </blockquote>

              <figcaption className="mt-6 flex items-center gap-3 pl-4 md:pl-7">
                <div className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.45)]" />
                <cite className="not-italic font-mono text-[9px] font-bold uppercase tracking-widest text-zinc-500 md:text-xs">
                  {t(
                    'mothership.cite',
                    'Jensen Huang — NVIDIA CEO — 2026'
                  )}
                </cite>
              </figcaption>
            </figure>

            {/* Standards Block */}
            <div className="border-l border-cyan-400/30 pl-4 md:pl-7">
              <div className="max-w-4xl space-y-4 md:space-y-5">
                {standardsParagraphs.map((paragraph, idx) => (
                  <p
                    key={`std-p-${idx}`}
                    className="text-sm leading-relaxed text-zinc-200 md:text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {dataAvailability && (
              <p className="max-w-4xl text-[10px] leading-relaxed text-zinc-500 md:text-xs">
                {dataAvailability}
              </p>
            )}

            {/* Whitepaper & Babble CTA Enclave */}
            <div className="pt-2">
              <div className="rounded-[1.5rem] md:rounded-[2rem] border border-white/10 bg-white/[0.02] p-6 md:p-10">
                <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                  <div className="max-w-2xl text-left">
                    <h4 className="mb-2 text-lg font-black uppercase tracking-tight text-white md:text-2xl">
                      {t('mothership.card_title', 'MOTHERSHIP WHITEPAPER')}
                    </h4>
                    <p className="text-xs leading-relaxed text-zinc-500 md:text-base">
                      {t('mothership.card_body', 'Read the academic paper outlining the Relational Accountability Model (RAM) behind MOTHERSHIP OS.')}
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 w-full md:w-auto md:min-w-[320px]">
                    <button
                      onClick={() => window.open('https://ssrn.com/abstract=6307238', '_blank')}
                      className="flex w-full items-center justify-center gap-3 bg-white px-6 py-4 text-[9px] font-black uppercase tracking-[0.2em] text-black transition-all hover:bg-cyan-400"
                    >
                      <FileText size={16} />
                      {t('mothership.btns.whitepaper', 'READ ON SSRN')}
                    </button>

                    <button
                      onClick={() => window.location.href = '/labs/babble'}
                      className="flex w-full items-center justify-center gap-3 border border-white/10 bg-white/5 px-6 py-3 text-[9px] font-black uppercase tracking-[0.2em] text-zinc-400 transition-all hover:border-cyan-400/50 hover:text-white"
                    >
                      <ExternalLink size={14} />
                      {t('mothership.btns.babble', 'BABBLE_FRAMEWORK')}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Operational Frameworks Pills */}
        <div className="mt-16 border-t border-white/5 pt-12 md:mt-36 md:pt-24">
          <div className="mb-6 flex items-center gap-4">
            <Zap className="h-4 w-4 text-cyan-400 md:h-6 md:w-6" />
            <span className="font-mono text-[9px] font-black uppercase tracking-[0.5em] text-cyan-400">
              {t('mothership.operational_frameworks', 'OPERATIONAL_FRAMEWORKS')}
            </span>
          </div>

          <div className="flex flex-wrap gap-3 md:gap-5">
            {pills.map((pill) => (
              <span
                key={pill}
                className="cursor-default border border-white/10 bg-white/[0.02] px-6 py-3 font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-500 transition-all hover:border-cyan-400 hover:text-white md:px-10"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MothershipSection;