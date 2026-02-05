import React from 'react';

// ICON CONTRACT IMPORTS (Source: Gemini v2.1.3)
import AskIcon from './icons/methods_01_ask_dynamic_form.svg';
import PayIcon from './icons/methods_02_pay_send_money.svg';
import MakeIcon from './icons/methods_03_make_construction.svg';
import PlayIcon from './icons/methods_04_play_rocket_launch.svg';
import RepeatIcon from './icons/methods_05_repeat_update.svg';

/**
 * TS-Λ3 // THE METHODS [v2.4.2 FINAL CLINICAL]
 * Integration: Gemini v2.1.3 Icons + Perplexity v2.4.1 Registry Links
 */
const steps = [
  { label: 'ASK', icon: AskIcon, id: '#overwatch', output: 'Intent Schema' },
  { label: 'PAY', icon: PayIcon, id: '/labs', output: 'Project Ledger' },
  { label: 'MAKE', icon: MakeIcon, id: '#methods', output: 'Production Artifacts' },
  { label: 'PLAY', icon: PlayIcon, id: '#methods', output: 'Sovereign Launch' },
  { label: 'REPEAT', icon: RepeatIcon, id: '#foundations', output: 'Substrate Optimization' }
];

export const Methods: React.FC = () => {
  return (
    <section id="methods" className="bg-black py-24 px-6 md:px-12 border-t border-white/5 scroll-mt-20">
      <div className="max-w-screen-2xl mx-auto">
        <div className="space-y-4 mb-16 text-left border-l-2 border-cyan-400 pl-8">
          <h2 className="text-white text-4xl md:text-6xl font-bold uppercase tracking-tight italic font-sans">
            THE <span className="text-cyan-400">METHODS</span>
          </h2>
          <p className="text-white/40 font-mono tracking-[0.2em] text-[10px] uppercase">
            Developing tailor-made solutions to our corporate clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((step, i) => (
            <a 
              key={i} 
              href={step.id}
              className="flex flex-col gap-6 p-8 bg-white/5 border border-white/10 rounded-[2.5rem] group hover:border-cyan-500/30 transition-all duration-700"
            >
              <div className="mb-2">
                <img src={step.icon} alt={step.label} className="w-16 h-16 object-contain mb-4" />
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-white uppercase tracking-tight">{step.label}</h4>
                <div className="pt-4 border-t border-white/5">
                  <p className="text-[9px] font-mono text-cyan-500 uppercase tracking-widest">{step.output}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
