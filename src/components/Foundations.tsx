import React, { useState } from 'react';
import { MermaidViewer } from './MermaidViewer';
import { THE_MOTHERSHIP } from '../data/theMothership';

/**
 * TS-Λ3 // THE FOUNDATIONS // DNA PILLARS + THE MOTHERSHIP [v7.6.0]
 * STYLE: Inter Bold 700, -0.05em tracking, Black Substrate, Univsersal Symbology
 * RECTIFIED: Switched to Material Symbols Variable Font.
 */

const foundations = [
  // THE DNA PILLARS (01-03)
  {
    id: "01",
    title: "Source of Truth",
    content: "A pretty story sitting on top of bad data is not a brand strategy; it is a very expensive lie we tell ourselves until the numbers don't add up. We verify the underlying substrate before constructing the narrative.",
    materialIcon: "align_horizontal_center"
  },
  {
    id: "02",
    title: "The Insight (UI)",
    content: "Your customers are not short on information; they are exhausted, conflicted, and trying to make sense of a world where human judgment was quietly outsourced to bots. We restore clarity via high-fidelity interface logic.",
    materialIcon: "lightbulb"
  },
  {
    id: "03",
    title: "The Journey (CX)",
    content: "We try to get the moments that matter right. We use the right tools to get the job done, not the other way around. Our focus remains on the human experience in a bot-saturated theater.",
    materialIcon: "assistant_navigation"
  }
];

export const Foundations: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>("01");

  return (
    <section id="foundations" className="bg-[#050505] py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="space-y-4">
          <h2 className="text-white text-4xl md:text-6xl font-bold uppercase tracking-[-0.05em] font-sans">
            THE FOUNDATIONS
          </h2>
          <p className="text-cyan-400 font-mono tracking-[0.2em] text-sm uppercase">The DNA Pillars</p>
        </div>

        <div className="grid gap-6">
          {foundations.map((item) => (
            <div key={item.id} className="border-b border-zinc-800 pb-6 group">
              <button
                onClick={() => setOpenId(openId === item.id ? null : item.id)}
                className="w-full flex items-center gap-6 text-left py-4"
              >
                {/* METHODS-STYLE ICON CONTAINER */}
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#0A0A0A] border border-zinc-800 rounded-xl flex items-center justify-center group-hover:border-cyan-500/50 transition-all">
                  <span className="material-symbols-outlined text-cyan-400 text-2xl md:text-3xl">
                    {item.materialIcon}
                  </span>
                </div>

                <span className="flex-grow text-white text-xl md:text-3xl font-bold uppercase tracking-[-0.05em] font-sans">
                  {item.id} {item.title}
                </span>

                <span className={`material-symbols-outlined text-zinc-500 transition-transform ${openId === item.id ? 'rotate-180' : ''}`} style={{ fontSize: '32px' }}>
                  expand_more
                </span>
              </button>

              {/* EXPANSION LOGIC */}
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openId === item.id
                ? 'max-h-[1200px] opacity-100 mt-4'
                : 'max-h-0 opacity-0'
                }`}>
                <p className="text-zinc-400 text-lg md:text-xl max-w-3xl ml-16 md:ml-20 leading-relaxed tracking-tight">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* THE MOTHERSHIP Section */}
        <div className="mt-16 space-y-6 border-t border-zinc-800 pt-16">
          <div className="space-y-2">
            <h3 className="text-white text-3xl md:text-5xl font-bold uppercase tracking-[-0.05em] font-sans">
              THE MOTHERSHIP
            </h3>
            <p className="text-sm text-zinc-400 tracking-[-0.01em] max-w-3xl">
              Command flow from The Overwatch through THE ELDERS to the Product Platform Layer, visualizing the sovereign structure.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-[#0A0A0A] p-6 overflow-x-auto">
            <MermaidViewer definition={THE_MOTHERSHIP} />
          </div>
        </div>
      </div>
    </section>
  );
};