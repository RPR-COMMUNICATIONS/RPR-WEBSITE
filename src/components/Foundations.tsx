import React from 'react';
import { SentinelVisualizer } from './SentinelVisualizer';

/**
 * TS-Λ3 // FOUNDATIONS SUBSTRATE [v1.8.9]
 * Mission: Restore 3-pillar FOUNDATIONS grid + Mothership C4 visualizer with collapsible cards.
 * Source of truth: HarborAWebsiteMap.html foundations section (v1.8.7 SPA map).
 * Authority: hello@butterdime.com
 *
 * ENFORCEMENT:
 * - Do NOT change icon names, label strings, colors, or spacing without approval.
 * - This file may NOT modify Header/Hero; it is scoped to #foundations only.
 */

const foundationsMetrics = [
  {
    icon: 'flag',
    label: 'METRIC_01',
    title: 'THE SOURCE OF TRUTH',
    summary:
      'A pretty story sitting on top of bad data is not a brand strategy; it is a very expensive lie we tell ourselves until the numbers don\'t add up and the contract gets handed to the next agency down the street.',
    details: `
Bad data quietly bleeds budgets, derails strategy, and breaks the journeys your customers experience, manifesting as confusion, inconsistency, and distrust.

For most small and mid-sized businesses, the issue is not a lack of tools; it is that every tool is working from its own version of the truth. Marketing has one view of the data, finance has another, operations have a third, and your AI assistants are being trained on whatever happens to be in front of them that day. The result is noise: conflicting reports, misread signals, and "performance" that no one can tie back to reality.

We work to identify what actually matters, where it lives, and how to measure it across every touchpoint and outcome. Then we structure every message, test and retest it until we're satisfied that it accurately reflects that truth. Your decisions are then based on reality instead of the meaningless fantasy we keep seeing each day.
    `.trim(),
  },
  {
    icon: 'insights',
    label: 'METRIC_02',
    title: 'THE INSIGHT (UI)',
    summary:
      'Your customers are not short on information; they are exhausted, conflicted, and trying to make sense of a world where human judgment was quietly outsourced to dashboards and algorithms.',
    details: `
Somewhere along the way, big data and "best practice" replaced the simple act of sitting with people, listening properly, and learning what they actually need. The mismatch is simple: your customers are still human, but the systems around them now treat them as rows in a report, so they answer with guesswork, silence, or whatever they think the machine wants to hear.

This drift didn't come from bad intentions; it came from a culture that worships scale and efficiency, even when it quietly erases context, nuance, and basic empathy from everyday decisions. When every insight must fit a database and every feeling must become a metric, whole parts of your customers' reality simply stop being seen.

We aim to ground consumer insight in measurable reality using the right tools. Which to us is not a slide or a chart. It's a small set of human truths your team recognizes as real, confirmed by numbers that actually reflect what's happening, not what they guaranteed would happen. Nobody can guarantee outcomes, but we can show you how we try.
    `.trim(),
  },
  {
    icon: 'near_me',
    label: 'METRIC_03',
    title: 'THE JOURNEY (CX)',
    summary:
      'We try to get the moments that matter right. We use the right tools to get the job done, not the other way around.',
    details: `
Your team feels this every day: the same issues repeating in every channel and across every industry, the same escalations, the same misunderstandings cycling through. You are not short on data; you are short on a way to turn what is happening on the screen and off the screen into fewer, better problems to fix.

We observe what people actually do—not what we are told—and continuously adjust the words and steps to surface where friction exists and where momentum builds. Every change has to earn its place by showing measurable progress toward clearer, more manageable problems. Over time, this reveals what actually works versus what you assumed would work, so you're building on evidence rather than on hope.
    `.trim(),
  },
];

export const Foundations: React.FC = () => {
  const [openMetric, setOpenMetric] = React.useState<string | null>(null);

  const toggleMetric = (label: string) => {
    setOpenMetric((current) => (current === label ? null : label));
  };

  return (
    <section id="foundations" className="px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-screen-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-left">
          THE FOUNDATIONS
        </h2>
        <div className="w-16 h-1 bg-cyan-400 mb-8"></div>
        <p className="text-left text-white/60 text-base md:text-lg leading-relaxed mb-12 max-w-3xl">
          Three pillars to align truth, insight, and journey before we touch any campaign.
        </p>

        {/* THREE-PILLAR GRID (SOURCE OF TRUTH / INSIGHT / JOURNEY) */}
        <div className="flex flex-col gap-6 md:grid md:grid-cols-3 md:gap-8 lg:gap-12 mb-16">
          {foundationsMetrics.map((metric) => {
            const isOpen = openMetric === metric.label;

            return (
              <article
                key={metric.label}
                className="border border-white/10 rounded-3xl bg-white/5 p-8 backdrop-blur-sm flex flex-col"
              >
                <header className="mb-4 text-left">
                  <div className="mb-4">
                    <div className="rounded-2xl bg-black/80 shadow-[0_0_40px_rgba(0,0,0,0.6)] p-3">
                      <div className="w-10 h-10 rounded-2xl bg-neutral-900 flex items-center justify-center">
                        <span className="material-symbols-outlined text-cyan-400 text-2xl">
                          {metric.icon}
                        </span>
                      </div>
                    </div>

                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {metric.title}
                  </h3>
                  <span className="block text-xs text-white/20 tracking-widest uppercase font-mono mt-1">
                    {metric.label}
                  </span>
                </header>

                {/* SUMMARY (always visible) */}
                <div className="text-sm text-white/60 leading-relaxed space-y-4">
                  <p>{metric.summary}</p>
                </div>

                {/* COLLAPSIBLE DETAILS */}
                <div
                  className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${isOpen ? 'max-h-[1500px] mt-4' : 'max-h-0'
                    }`}
                >
                  <div className="text-sm text-white/60 leading-relaxed space-y-4 whitespace-pre-line">
                    {metric.details}
                  </div>
                </div>

                {/* TOGGLE BUTTON */}
                <button
                  type="button"
                  onClick={() => toggleMetric(metric.label)}
                  className="mt-4 inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  {isOpen ? 'Collapse' : 'Read full'}
                  <span className="material-symbols-outlined text-base">
                    {isOpen ? 'expand_less' : 'expand_more'}
                  </span>
                </button>
              </article>
            );
          })}
        </div>

        {/* THE MOTHERSHIP // SENTINEL C4 VISUALIZER */}
        <section aria-labelledby="mothership-heading">
          <div className="mb-6">
            <p className="text-sm tracking-[0.3em] uppercase text-cyan-400 font-mono">
              // THE MOTHERSHIP
            </p>
            <p className="text-xs text-white/40 tracking-widest uppercase font-mono mt-2">
              SENTINEL GOVERNANCE C4 DIAGRAMS
            </p>
          </div>

          {/* NOTE: SentinelVisualizer owns the 4-tab selector (L1–L4 C4 diagrams). */}
          <div className="border border-white/10 rounded-3xl bg-black/40 p-6 lg:p-8 backdrop-blur-sm">
            <SentinelVisualizer />
          </div>
        </section>
      </div>
    </section>
  );
};
