import React from 'react';
import { Search, Zap, BarChart3, RefreshCcw } from 'lucide-react';

/**
 * RPR MOTHERSHIP | PROCESS COMPONENT [v4.25.1]
 * Role: Strategic Cycle (PDCA)
 * Update: Liquidated smart quotes to resolve TS1108/syntax drift.
 * Authority: TS-Λ3
 */

export const Process: React.FC = () => {
  const steps = [
    {
      label: 'DISCOVER',
      icon: Search,
      description: 'Mapping patterns and forensic gaps in the existing substrate.',
      output: 'Discovery Report // Gap Analysis'
    },
    {
      label: 'DELIVER',
      icon: Zap,
      description: 'Execution with high-fidelity accuracy across the Singapore harbor.',
      output: 'Production Artifacts // Live Revised Node'
    },
    {
      label: 'MEASURE',
      icon: BarChart3,
      description: 'Compare results to the agreed metrics: what moved, what did not, what signals came from users.',
      output: 'Simple report with a few key numbers and 2-3 insights (this worked / this did not).'
    },
    {
      label: 'IMPROVE',
      icon: RefreshCcw,
      description: 'Refining the loop for next cycle based on forensic telemetry.',
      output: 'Refined Substrate // Optimized Workflow'
    }
  ];

  return (
    <section className="px-[20px] md:px-12 py-32 border-b border-white/5 bg-black" id="process">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-cyan-400 font-bold tracking-[0.4em] text-[10px] mb-4 uppercase font-mono">// THE PROCESS</h2>
        <p className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter font-display mb-16 leading-tight">
          Closing the loop on brand experience
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div 
              key={i} 
              className="flex flex-col items-center p-8 bg-white/[0.02] border border-white/5 rounded-2xl group hover:border-cyan-500/30 transition-all"
            >
              <div className="w-16 h-16 bg-black border border-white/10 rounded-full flex items-center justify-center mb-6 group-hover:shadow-[0_0_20px_rgba(0,224,255,0.2)] transition-all">
                <step.icon size={24} className="text-cyan-400" />
              </div>
              <h4 className="text-xl font-black text-white uppercase mb-2 tracking-widest">{step.label}</h4>
              <div className="space-y-4">
                <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest leading-relaxed">
                  {step.description}
                </p>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest italic">
                    {step.output}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
