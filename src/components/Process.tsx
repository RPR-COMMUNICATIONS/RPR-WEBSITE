import React from 'react';

export const Process: React.FC = () => {
  const steps = [
    {
      label: 'DISCOVER',
      icon: 'search',
      description: 'Mapping patterns and forensic gaps in the existing substrate.',
      output: 'Discovery Report // Gap Analysis'
    },
    {
      label: 'DELIVER',
      icon: 'send',
      description: 'Execution with high-fidelity accuracy across the Singapore harbor.',
      output: 'Production Artifacts // Live Revised Node'
    },
    {
      label: 'MEASURE',
      icon: 'bar_chart',
      description: 'Compare results to the agreed metrics: what moved and what signals came from users.',
      output: 'Forensic Performance Audit'
    },
    {
      label: 'IMPROVE',
      icon: 'build',
      description: 'Refining the loop for next cycle based on forensic telemetry.',
      output: 'Refined Substrate // Optimized Workflow'
    }
  ];

  return (
    <section className="bg-black py-32 px-6 md:px-12 border-b border-zinc-800" id="process">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-left">
          THE PROCESS
        </h2>
        <div className="w-16 h-1 bg-cyan-400 mb-8"></div>
        <p className="text-left text-white/60 text-base md:text-lg leading-relaxed mb-12 max-w-3xl">
          Closing the loop on brand experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, i) => (
            <article
              key={i}
              className="flex flex-col gap-6 p-8 bg-[#0A0A0A] border border-zinc-800 rounded-xl group hover:border-white/20 transition-all"
            >
              {/* UNIFIED CONTAINER SPECIFICATION */}
              <div className="rounded-2xl bg-black/80 shadow-[0_0_40px_rgba(0,0,0,0.6)] p-3 mb-2">
                <div className="w-10 h-10 rounded-2xl bg-neutral-900 flex items-center justify-center">
                  <span className="material-symbols-outlined text-cyan-400 text-2xl">
                    {step.icon}
                  </span>
                </div>
              </div>


              <div className="space-y-4">
                <h4 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight font-sans">
                  {step.label}
                </h4>
                <p className="text-sm text-zinc-400 leading-relaxed uppercase font-mono tracking-widest text-[10px]">
                  {step.description}
                </p>
                <div className="pt-4 border-t border-zinc-800">
                  <p className="text-[9px] font-mono text-cyan-500 uppercase tracking-[0.2em]">
                    {step.output}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};