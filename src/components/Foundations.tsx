import React, { useState } from 'react';
import { SentinelVisualizer } from './SentinelVisualizer';

// ICON CONTRACT IMPORTS (Verified v2.1.3)
import CompassCalibrationIcon from './icons/standalone_harborA.01.the.source.of.truth.compass_calibration.svg';
import InputCircleIcon from './icons/standalone_harborA.02.user.insight.input_circle.svg';
import ConversionPathIcon from './icons/standalone_harborA.03.the.consumer.journey.conversion_path.svg';

/**
 * TS-Λ3 // FOUNDATIONS SUBSTRATE [v2.2.0]
 * Mission: Fix build-blocking syntax (TS1005 / TS17002)
 * Status: HARDENED // v2.1.0 ALIGNED
 */

interface MetricPillar {
  title: string;
  icon: string;
  details: string;
}

const metrics: MetricPillar[] = [
  {
    title: 'THE SOURCE OF TRUTH',
    icon: CompassCalibrationIcon,
    details: `Data is the only single source of truth. We work to identify what actually matters, where it lives, and how to measure it across every touchpoint and outcome. Then we structure every message, test and retest it until we're satisfied that it accurately reflects that truth.`
  },
  {
    title: 'THE INSIGHT (UI)',
    icon: InputCircleIcon,
    details: `Customer insight is the bridge between data and intent. Somewhere along the way, big data replaced the simple act of listening properly to what people actually need. We restore context and nuance to everyday decisions.`
  },
  {
    title: 'THE JOURNEY (CX)',
    icon: ConversionPathIcon,
    details: `Getting moments right means choosing evidence over hope. We fix fewer, better problems by auditing friction within the creative lifecycle and turning observations into actionable momentum.`
  }
];

export const Foundations: React.FC = () => {
  const [openMetric, setOpenMetric] = useState<string | null>(null);

  const toggleMetric = (title: string) =>
    setOpenMetric((current) => (current === title ? null : title));

  return (
    <section id="foundations" className="px-6 py-24 bg-black border-t border-white/5">
      <div className="max-w-screen-2xl mx-auto">
        <h2 className="text-xs tracking-[0.4em] uppercase text-cyan-400 mb-16 font-mono font-bold">THE FOUNDATIONS</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-24">
          {metrics.map((m) => {
            const isOpen = openMetric === m.title;
            return (
              <article key={m.title} className="border border-white/10 rounded-[2.5rem] bg-white/5 p-8 lg:p-10 flex flex-col transition-all duration-500 hover:border-cyan-500/20">
                <div className="mb-8">
                  <img src={m.icon} alt={m.title} className="w-16 h-16 object-contain mb-6" />
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight mb-4">{m.title}</h3>

                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="text-sm text-white/60 leading-relaxed space-y-4 whitespace-pre-line border-t border-white/5 pt-6">
                    {m.details}
                  </div>
                </div>

                <button
                  onClick={() => toggleMetric(m.title)}
                  className="mt-6 inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  {isOpen ? 'Collapse' : 'Read full'}
                  <span className="material-symbols-outlined text-[16px] leading-none">
                    {isOpen ? 'expand_less' : 'expand_more'}
                  </span>
                </button>
              </article>
            );
          })}
        </div>

        <div className="border-t border-white/10 pt-24">
          <div className="space-y-4 mb-16 text-left border-l-2 border-cyan-400 pl-8">
            <h2 className="text-cyan-400 font-mono text-xl md:text-2xl font-bold uppercase tracking-widest">
              THE MOTHERSHIP
            </h2>
            <p className="text-white/40 font-mono tracking-[0.1em] text-xs md:text-sm uppercase leading-relaxed max-w-2xl">
              Crafting a virtual clone of your physical business entity.
            </p>
          </div>

          <div className="border border-white/10 rounded-3xl bg-black/40 p-6 lg:p-12 overflow-hidden shadow-2xl">
            <SentinelVisualizer />
          </div>
        </div>
      </div>
    </section>
  );
};