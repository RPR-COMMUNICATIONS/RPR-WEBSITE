import React, { useState } from "react";
import { SentinelVisualizer } from "./SentinelVisualizer";

// ICON CONTRACT IMPORTS (Verified v2.1.3)
import CompassCalibrationIcon from "./icons/standalone_harborA.01.the.source.of.truth.compass_calibration.svg";
import InputCircleIcon from "./icons/standalone_harborA.02.user.insight.input_circle.svg";
import ConversionPathIcon from "./icons/standalone_harborA.03.the.consumer.journey.conversion_path.svg";

/**
 * TS-Λ3 // FOUNDATIONS SUBSTRATE [v2.2.1]
 * Section: // THE FOUNDATIONS
 * Pillars: The Data, The Insight, The Journey
 * Visualizer Header: // THE MOTHERSHIP ARCHITECTURE
 */

interface MetricPillar {
  title: string;
  icon: string;
  paragraphs: string[];
}

const pillars: MetricPillar[] = [
  {
    title: "THE DATA",
    icon: CompassCalibrationIcon,
    paragraphs: [
      "A pretty story sitting on top of bad data is not a brand strategy; it is a very expensive lie we tell ourselves until the numbers don't add up and the contract gets handed to the next agency down the street. ",
      "Bad data quietly bleeds budgets, derails strategy, and breaks the journeys your customers experience, manifesting as confusion, inconsistency, and distrust. For most small and mid-sized businesses, the issue is not a lack of tools; it is that every tool is working from its own version of the truth. The result is noise. ",
      "We work to identify what actually matters, where it lives, and how to measure it across every touchpoint and outcome. Then we structure every message, test and retest it until we're satisfied that it accurately reflects that truth."
    ]
  },
  {
    title: "THE INSIGHT",
    icon: InputCircleIcon,
    paragraphs: [
      "Your customers are not short on information; they are exhausted, conflicted, and trying to make sense of a world where human judgment was quietly outsourced to dashboards and algorithms. ",
      "Somewhere along the way, big data and \"best practice\" replaced the simple act of sitting with people, listening properly, and learning what they actually need. ",
      "The mismatch is simple: your customers are still human, but the systems around them now treat them as rows in a report. This drift didn't come from bad intentions; it came from a culture that worships scale and efficiency, even when it quietly erases context, nuance, and basic empathy from everyday decisions. When every insight must fit a database, whole parts of your customers' reality simply stop being seen. We aim to ground consumer insight in measurable reality using the right tools."
    ]
  },
  {
    title: "THE JOURNEY",
    icon: ConversionPathIcon,
    paragraphs: [
      "We try to get the moments that matter right. We use the right tools to get the job done, not the other way around. Your team feels this every day: the same issues repeating in every channel and across every industry, the same escalations, the same misunderstandings cycling through. ",
      "You are not short on data; you are short on a way to turn what is happening into fewer, better problems to fix. We observe what people actually do—not what we are told—and continuously adjust the words and steps to surface where friction exists and where momentum builds. ",
      "Every change has to earn its place by showing measurable progress toward clearer, more manageable problems. Over time, this reveals what actually works."
    ]
  }
];

export const Foundations: React.FC = () => {
  const [openPillar, setOpenPillar] = useState<string | null>(null);

  const togglePillar = (title: string) =>
    setOpenPillar((current) => (current === title ? null : title));

  return (
    <section id="foundations" className="px-6 py-24 bg-black border-t border-white/5">
      <div className="max-w-screen-2xl mx-auto">
        {/* SECTION TITLE */}
        <h2 className="text-xs tracking-[0.4em] uppercase text-cyan-400 mb-16 font-mono font-bold">
          // THE FOUNDATIONS
        </h2>

        {/* PILLARS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-24">
          {pillars.map((pillar) => {
            const isOpen = openPillar === pillar.title;
            return (
              <article
                key={pillar.title}
                className="border border-white/10 rounded-[2.5rem] bg-white/5 p-8 lg:p-10 flex flex-col transition-all duration-500 hover:border-cyan-500/20"
              >
                <div className="mb-8">
                  <img
                    src={pillar.icon}
                    alt={pillar.title}
                    className="w-16 h-16 object-contain mb-6"
                  />
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight mb-4">
                  {pillar.title}
                </h3>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[600px] mt-4 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="text-sm text-white/60 leading-relaxed space-y-4 border-t border-white/5 pt-6">
                    {pillar.paragraphs.map((text, idx) => (
                      <p key={idx}>{text}</p>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => togglePillar(pillar.title)}
                  className="mt-6 inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  {isOpen ? "Collapse" : "Read full"}
                  <span className="material-symbols-outlined text-[16px] leading-none">
                    {isOpen ? "expand_less" : "expand_more"}
                  </span>
                </button>
              </article>
            );
          })}
        </div>

        {/* VISUALIZER HEADER + SENTINEL VISUALIZER */}
        <div className="border-t border-white/10 pt-24">
          <div className="space-y-4 mb-16 text-left border-l-2 border-cyan-400 pl-8">
            <h2 className="text-cyan-400 font-mono text-xl md:text-2xl font-bold uppercase tracking-widest">
              // THE MOTHERSHIP ARCHITECTURE
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
