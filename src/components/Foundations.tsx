import React from 'react';
import { SentinelVisualizer } from './SentinelVisualizer';

/**
 * TS-Λ3 // FOUNDATIONS SUBSTRATE [v1.8.8 FREEZE]
 * Spec: 3-Pillar Metrics Grid + Integrated SentinelVisualizer.
 * Authority: hello@butterdime.com
 */

const metrics = [
  {
    id: 'metric_01',
    title: 'THE SOURCE OF TRUTH',
    icon: 'flag',
    content: (
      <>
        <p className="mb-4">A pretty story sitting on top of bad data is not a brand strategy; it is a very expensive lie we tell ourselves until the numbers don't add up and the contract gets handed to the next agency down the street.</p>
        <p className="mb-4">Bad data quietly bleeds budgets, derails strategy, and breaks the journeys your customers experience, manifesting as confusion, inconsistency, and distrust.</p>
        <p className="mb-4">For most small and mid-sized businesses, the issue is not a lack of tools; it is that every tool is working from its own version of the truth. Marketing has one view of the data, finance has another, operations have a third, and your AI assistants are being trained on whatever happens to be in front of them that day. The result is noise.</p>
        <p>We work to identify what actually matters, where it lives, and how to measure it across every touchpoint and outcome. Then we structure every message, test and retest it until we're satisfied that it accurately reflects that truth.</p>
      </>
    )
  },
  {
    id: 'metric_02',
    title: 'THE INSIGHT (UI)',
    icon: 'insights',
    content: (
      <>
        <p className="mb-4">Your customers are not short on information; they are exhausted, conflicted, and trying to make sense of a world where human judgment was quietly outsourced to dashboards and algorithms.</p>
        <p className="mb-4">Somewhere along the way, big data and "best practice" replaced the simple act of sitting with people, listening properly, and learning what they actually need. The mismatch is simple: your customers are still human, but the systems around them now treat them as rows in a report.</p>
        <p className="mb-4">This drift didn't come from bad intentions; it came from a culture that worships scale and efficiency, even when it quietly erases context, nuance, and basic empathy from everyday decisions. When every insight must fit a database, whole parts of your customers' reality simply stop being seen.</p>
        <p>We aim to ground consumer insight in measurable reality using the right tools.</p>
      </>
    )
  },
  {
    id: 'metric_03',
    title: 'THE JOURNEY (CX)',
    icon: 'near_me',
    content: (
      <>
        <p className="mb-4">We try to get the moments that matter right. We use the right tools to get the job done, not the other way around.</p>
        <p className="mb-4">Your team feels this every day: the same issues repeating in every channel and across every industry, the same escalations, the same misunderstandings cycling through. You are not short on data; you are short on a way to turn what is happening into fewer, better problems to fix.</p>
        <p className="mb-4">We observe what people actually do—not what we are told—and continuously adjust the words and steps to surface where friction exists and where momentum builds. Every change has to earn its place by showing measurable progress toward clearer, more manageable problems. Over time, this reveals what actually works.</p>
      </>
    )
  }
];

export const Foundations: React.FC = () => {
  return (
    <section id="foundations" className="py-24 bg-black border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-20">
          <span className="text-cyan-500 font-mono text-[10px] uppercase tracking-[0.5em] block mb-4">
            Phase 01 // Foundations
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter italic leading-none">
            THE <span className="text-cyan-400">FOUNDATIONS</span>
          </h2>
        </header>

        {/* METRICS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-32">
          {metrics.map((m) => (
            <div key={m.id} className="flex flex-col">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-cyan-400 text-2xl">{m.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-white uppercase tracking-tight">{m.title}</h3>
              </div>
              <div className="text-white/60 text-sm leading-relaxed font-medium">
                {m.content}
              </div>
            </div>
          ))}
        </div>

        {/* SENTINEL VISUALIZER SEATING */}
        <div className="pt-24 border-t border-white/5">
           <SentinelVisualizer />
        </div>
      </div>
    </section>
  );
};
