import React, { useState } from 'react';
import { Shield, Users, Hammer, LayoutGrid } from 'lucide-react';
import { MermaidViewer } from './MermaidViewer';
import { sentinelDiagrams } from '../c4-diagrams/C4DiagramDefinitions-Final';

/**
 * TS-Λ3 // FOUNDATIONS [v1.8.2]
 * Integrated interactive visualizer for the Foundations section.
 * Note: DNA Pillars (3 pillars) logic is preserved in the first container block.
 */
const foundations = [
  {
    id: '01',
    title: 'Source of Truth',
    content: `A pretty story sitting on top of bad data is not a brand strategy; it is a very expensive lie we tell ourselves until the numbers don't add up and the contract gets handed to the next agency down the street. Bad data quietly bleeds budgets, derails strategy, and breaks the journeys your customers experience, manifesting as confusion, inconsistency, and distrust. For most small and mid-sized businesses, the issue is not a lack of tools; it is that every tool is working from its own version of the truth. Marketing has one view of the data, finance has another, operations have a third, and your AI assistants are being trained on whatever happens to be in front of them that day. The result is noise: conflicting reports, misread signals, and "performance" that no one can tie back to reality. We work to identify what actually matters, where it lives, and how to measure it across every touchpoint and outcome. Then we structure every message, test and retest it until we're satisfied that it accurately reflects that truth. Your decisions are then based on reality instead of the meaningless fantasy we keep seeing each day.`,
    materialIcon: 'align_horizontal_center',
  },
  {
    id: '02',
    title: 'The Insight (UI)',
    content: `Your customers are not short on information; they are exhausted, conflicted, and trying to make sense of a world where human judgment was quietly outsourced to dashboards and algorithms. Somewhere along the way, big data and "best practice" replaced the simple act of sitting with people, listening properly, and learning what they actually need. The mismatch is simple: your customers are still human, but the systems around them now treat them as rows in a report, so they answer with guesswork, silence, or whatever they think the machine wants to hear. This drift didn't come from bad intentions; it came from a culture that worships scale and efficiency, even when it quietly erases context, nuance, and basic empathy from everyday decisions. When every insight must fit a database and every feeling must become a metric, whole parts of your customers' reality simply stop being seen. We aim to ground consumer insight in measurable reality using the right tools. Which to us is not a slide or a chart. It's a small set of human truths your team recognizes as real, confirmed by numbers that actually reflect what's happening, not what they guaranteed would happen. Nobody can guarantee outcomes, but we can show you how we try.`,
    materialIcon: 'lightbulb',
  },
  {
    id: '03',
    title: 'The Experience (UX)',
    content: `We try to get the moments that matter right. We use the right tools to get the job done, not the other way around. We hear our clients facing the same issues repeating in every channel and across every industry, the same escalations, the same misunderstandings cycling through. You are not short on data; you are short on a way to turn what is happening on the screen and off the screen into fewer, better problems to fix. We observe what people actually do—not what we are told—and continuously adjust the words and steps to surface where friction exists and where momentum builds. Every change has to earn its place by showing measurable progress toward clearer, more manageable problems. Over time, this reveals what actually works versus what you assumed would work, so you're building on evidence rather than on hope.`,
    materialIcon: 'assistant_navigation',
  },
];

export const Foundations: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<keyof typeof sentinelDiagrams>('l1_overwatch');

  const tabs = [
    { id: 'l1_overwatch', label: 'L1: Overwatch', icon: Shield },
    { id: 'l2_elders', label: 'L2: Elders', icon: Users },
    { id: 'l3_forge', label: 'L3: Forge', icon: Hammer },
    { id: 'l4_instances', label: 'L4: Instances', icon: LayoutGrid }
  ];

  return (
    <section id="foundations" className="bg-[#050505] border-b border-white/5 py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-12">
        <header className="mb-16">
          <span className="text-sky-500 font-mono text-[10px] uppercase tracking-[0.5em] block mb-4">
            Phase 1 // The Foundations
          </span>
          <h2 className="text-white text-4xl md:text-6xl font-bold uppercase tracking-[-0.05em] font-sans italic">
            THE <span className="text-sky-500">MOTHERSHIP</span> SUBSTRATE
          </h2>
        </header>

        <div className="grid gap-6">
          <p className="text-slate-400 font-mono text-xs uppercase tracking-widest mb-4">
            [ DNA PILLARS // AUTHORITATIVE MAPPING ]
          </p>
          {foundations.map((item) => (
            <div key={item.id} className="border-b border-zinc-800 pb-6 group">
              <button
                onClick={() => setOpenId(openId === item.id ? null : item.id)}
                className="w-full flex items-center gap-6 text-left py-4"
                aria-expanded={openId === item.id}
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#0A0A0A] border border-zinc-800 rounded-xl flex items-center justify-center group-hover:border-white/20 transition-all">
                  <span className="material-symbols-outlined text-white text-2xl md:text-3xl">
                    {item.materialIcon}
                  </span>
                </div>

                <span className="flex-grow text-white text-xl md:text-3xl font-bold uppercase tracking-[-0.05em] font-sans">
                  {item.title}
                </span>

                <span
                  className={`material-symbols-outlined text-zinc-500 transition-transform ${openId === item.id ? 'rotate-180' : ''}`}
                  style={{ fontSize: '32px' }}
                >
                  expand_more
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-700 ease-in-out ${openId === item.id
                  ? 'max-h-[1500px] opacity-100 mt-6'
                  : 'max-h-0 opacity-0'
                  }`}
              >
                <p className="text-zinc-400 text-lg md:text-xl max-w-3xl ml-16 md:ml-20 leading-relaxed tracking-tight pb-12">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 🛰️ 2. ARCHITECTURAL INJECTION (THE SENTINEL BIBLE) */}
        <div className="mt-24 border-t border-slate-800/40 pt-20">
          <div className="flex flex-col md:flex-row items-center gap-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight italic">
              SENTINEL <span className="text-sky-500">PROTOCOL</span> BIBLE
            </h2>
            <div className="hidden md:block h-px flex-1 bg-gradient-to-r from-slate-800 to-transparent"></div>
          </div>

          <div className="mt-16 bg-[#080808] rounded-[2.5rem] border border-slate-800/50 p-8 md:p-12 shadow-2xl">
            <nav className="flex flex-wrap gap-2 mb-10 bg-slate-900/30 p-2 rounded-2xl border border-slate-800/40">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex-1 min-w-[120px] py-4 rounded-xl transition-all duration-500 flex flex-col items-center gap-1.5 ${activeTab === tab.id ? 'bg-sky-600 text-white shadow-lg' : 'text-slate-500 hover:bg-slate-800/30'
                    }`}
                >
                  <tab.icon className="w-4 h-4" />
                  <span className="text-[10px] font-black uppercase tracking-widest">{tab.label}</span>
                </button>
              ))}
            </nav>
            <div className="flex flex-col gap-2 mb-6 ml-2">
              <h3 className="text-xl font-bold text-white uppercase">{sentinelDiagrams[activeTab].title}</h3>
              <p className="text-slate-400 text-xs font-mono uppercase tracking-widest">{sentinelDiagrams[activeTab].description}</p>
            </div>
            <MermaidViewer
              definition={sentinelDiagrams[activeTab].definition}
              className="min-h-[450px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};