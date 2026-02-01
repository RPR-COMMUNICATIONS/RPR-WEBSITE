import React from 'react';
import { Cpu, Shield, Zap, Globe } from 'lucide-react';

/**
 * TS-Λ3 // LABS SUBSTRATE [v1.8.7]
 * Resolution: Aligned with 4-Tier graduation narrative and Foundations styling.
 * Alternating: bg-[#050505]
 */
export const Labs: React.FC = () => {
  const tiers = [
    {
      id: "t1",
      title: "Tier I: SENTINEL Protocol",
      icon: Shield,
      desc: "The core governance engine managing the forensic evolution of creative substrates."
    },
    {
      id: "t2",
      title: "Tier II: THE ELDERS",
      icon: Cpu,
      desc: "The Advisory triad bridging strategic intent with operational System 3 divisions."
    },
    {
      id: "t3",
      title: "Tier III: THE FORGE",
      icon: Zap,
      desc: "Internal Intelligence Lab staging specialized modules (IKON, Logo, Video) in Firebase Studio."
    },
    {
      id: "t4",
      title: "Tier IV: CLIENT INSTANCES",
      icon: Globe,
      desc: "Isolated sovereign clones (Labyrinth, MYAUDIT) deployed as standalone dashboard instances."
    }
  ];

  return (
    <section id="labs" className="py-24 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-20 text-center">
          <h2 className="text-5xl font-black text-white uppercase tracking-tighter italic mb-4">
            PROTOTYPE <span className="text-cyan-400">ENCLAVE</span>
          </h2>
          <p className="text-white/40 font-mono text-[10px] uppercase tracking-[0.4em]">
            Sovereign Evolution // Product Graduation Path
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tiers.map((t) => (
            <div
              key={t.id}
              className="group bg-white/5 border border-white/10 p-8 rounded-[2.5rem] hover:border-cyan-500/30 transition-all duration-700"
            >
              <t.icon className="w-6 h-6 text-cyan-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold uppercase mb-4 text-white">{t.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
