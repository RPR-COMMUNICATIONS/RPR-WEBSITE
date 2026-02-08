import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { SentinelVisualizer } from './SentinelVisualizer';

/**
 * TS-Λ3 // FOUNDATIONS SUBSTRATE [v2.1.3]
 * Resolution: DNA Pillars Accordion + Integrated SentinelVisualizer.
 * Mission: Mothership Header Alignment & Content Purge.
 * Authority: hello@butterdime.com
 */

const dnaPillars = [
  {
    id: "truth",
    title: "Source of Truth",
    content: "We reject the 'pretty story' sitting on top of bad data. Our governance mandates that every strategic message is seated in reality."
  },
  {
    id: "insight",
    title: "The Insight (UI)",
    content: "High-fidelity substrates for Agencies and SMEs require forensic clarity."
  },
  {
    id: "experience",
    title: "The Experience (UX)",
    content: "We fix fewer, better problems by auditing the friction within the creative lifecycle."
  }
];

export const Foundations: React.FC = () => {
  const [openPillar, setOpenPillar] = useState<string | null>("truth");

  return (
    <section id="foundations" className="py-24 relative overflow-hidden bg-[#050505] border-t border-white/5">
      <div className="max-w-screen-2xl mx-auto px-6">
        
        {/* MOTHERSHIP HEADER ALIGNMENT [v2.1.3] */}
        <div className="space-y-4 mb-16 text-left border-l-2 border-cyan-400 pl-8">
          <h2 className="text-white text-4xl md:text-6xl font-bold uppercase tracking-tight italic font-sans">
            THE <span className="text-cyan-400">MOTHERSHIP</span>
          </h2>
          <p className="text-cyan-400 font-mono tracking-widest text-xs md:text-sm uppercase leading-relaxed max-w-xl">
            Crafting a virtual clone of your physical business entity
          </p>
        </div>

        {/* DNA PILLARS ACCORDION */}
        <div className="space-y-4 mb-24">
          {dnaPillars.map((p) => (
            <div
              key={p.id}
              className={`border border-slate-800/60 rounded-[2rem] overflow-hidden transition-all duration-500 ${
                openPillar === p.id ? 'bg-slate-900/20 border-cyan-500/30' : 'bg-transparent'
              }`}
            >
              <button
                onClick={() => setOpenPillar(openPillar === p.id ? null : p.id)}
                className="w-full flex items-center justify-between p-8 text-left group"
              >
                <span className={`text-xl font-bold uppercase tracking-tight ${
                  openPillar === p.id ? 'text-white' : 'text-slate-500'
                }`}>
                  {p.title}
                </span>
                <ChevronDown className={`w-5 h-5 transition-transform ${
                  openPillar === p.id ? 'rotate-180 text-cyan-500' : 'text-slate-700'
                }`} />
              </button>
              {openPillar === p.id && (
                <div className="px-8 pb-8 text-slate-400 text-sm leading-relaxed max-w-3xl animate-in fade-in slide-in-from-top-2">
                  {p.content}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* INTEGRATED VISUALIZER SUBSTRATE */}
        <div className="border-t border-slate-800/40 pt-20">
          <SentinelVisualizer />
        </div>
      </div>
    </section>
  );
};
