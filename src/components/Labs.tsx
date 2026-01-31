import React from 'react';
import { Cpu, Shield, Zap, Globe } from 'lucide-react';

/**
 * TS-Λ3 // LABS SUBSTRATE [v1.8.2]
 * 4-Tier Forensic Evolution Descriptions.
 */
export const Labs: React.FC = () => {
  const tiers = [
    {
      id: "tier-1",
      title: "Tier I: Sentinel Protocol",
      icon: Shield,
      desc: "The core governance engine managing the forensic evolution of creative substrates. All intent is governed by high-fidelity TypeScript constraint sets.",
      color: "text-white"
    },
    {
      id: "tier-2",
      title: "Tier II: The Elders & Divisions",
      icon: Cpu,
      desc: "The Advisory triad (Perplexity, Gemini, Sentinel) bridging strategic intent with operational System 3 divisions (Creative, Art, Video, Dev).",
      color: "text-slate-200"
    },
    {
      id: "tier-3",
      title: "Tier III: The Forge",
      icon: Zap,
      desc: "Internal Intelligence Lab (Jules) staging specialized modules (IKON, Logo, Video) in Firebase Studio for production graduation.",
      color: "text-slate-400"
    },
    {
      id: "tier-4",
      title: "Tier IV: Client Instances",
      icon: Globe,
      desc: "Isolated sovereign clones (Labyrinth, MYAUDIT) deployed as standalone DASHBOARD-MAINSITE instances for external governance.",
      color: "text-slate-500"
    }
  ];

  return (
    <section id="labs" className="py-24 bg-[#020617] relative">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-20 text-center">
          <h2 className="text-5xl font-black text-white uppercase tracking-tighter italic mb-4">
            PROTOTYPE <span className="text-sky-500">ENCLAVE</span>
          </h2>
          <p className="text-slate-500 font-mono text-[10px] uppercase tracking-[0.4em]">
            Sovereign Evolution // Product Graduation Path
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className="group bg-slate-900/20 border border-slate-800/50 p-8 rounded-[2rem] hover:border-sky-500/30 transition-all duration-700"
            >
              <tier.icon className="w-6 h-6 text-sky-500 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className={`text-lg font-bold uppercase mb-4 ${tier.color}`}>
                {tier.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed font-sans">
                {tier.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};