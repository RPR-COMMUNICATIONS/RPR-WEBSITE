import React from 'react';
import { useTranslation } from 'react-i18next';

// ICON CONTRACT IMPORTS (Verified v2.1.3)
import CompassCalibrationIcon from './icons/standalone_harborA.01.the.source.of.truth.compass_calibration.svg';
import InputCircleIcon from './icons/standalone_harborA.02.user.insight.input_circle.svg';
import ConversionPathIcon from './icons/standalone_harborA.03.the.consumer.journey.conversion_path.svg';

/**
 * TS-Λ3 // FOUNDATIONS SUBSTRATE [v2.2.0]
 * Mission: Fix build-blocking syntax (TS1005 / TS17002)
 * Status: HARDENED // v2.1.0 ALIGNED
 * Corrective: Removed accordion behavior per governance override.
 */

export const Foundations: React.FC = () => {
  const { t } = useTranslation();

  const metrics_localized = [
    {
      title: t('foundations.pillar_1_title'),
      icon: CompassCalibrationIcon,
      summary: t('foundations.pillar_1_summary'),
      details: t('foundations.pillar_1_details')
    },
    {
      title: t('foundations.pillar_2_title'),
      icon: InputCircleIcon,
      summary: t('foundations.pillar_2_summary'),
      details: t('foundations.pillar_2_details')
    },
    {
      title: t('foundations.pillar_3_title'),
      icon: ConversionPathIcon,
      summary: t('foundations.pillar_3_summary'),
      details: t('foundations.pillar_3_details')
    }
  ];

  return (
    <section id="foundations" className="px-6 py-24 bg-black border-t border-white/5">
      <div className="max-w-screen-2xl mx-auto">
        <h2 className="text-xs tracking-[0.4em] uppercase text-cyan-400 mb-16 font-mono font-bold">
          // {t('foundations.title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-24">
          {metrics_localized.map((m) => {
            return (
              <article key={m.title} className="border border-white/10 rounded-[2.5rem] bg-white/5 p-8 lg:p-10 flex flex-col transition-all duration-500 hover:border-cyan-500/20">
                <div className="mb-8">
                  <img src={m.icon} alt={m.title} className="w-16 h-16 object-contain mb-6" />
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight mb-4">{m.title}</h3>

                <p className="text-sm text-white/60 leading-relaxed mb-6">{m.summary}</p>

                <div className="text-sm text-white/40 leading-relaxed space-y-4 whitespace-pre-line border-t border-white/5 pt-6">
                  {m.details}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
