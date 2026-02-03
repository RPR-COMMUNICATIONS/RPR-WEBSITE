import React from 'react';

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
      icon: "shield",
      desc: "The core governance engine managing the forensic evolution of creative substrates."
    },
    {
      id: "t2",
      title: "Tier II: THE ELDERS",
      icon: "memory",
      desc: "The Advisory triad bridging strategic intent with operational System 3 divisions."
    },
    {
      id: "t3",
      title: "Tier III: THE FORGE",
      icon: "bolt",
      desc: "Internal Intelligence Lab staging specialized modules (IKON, Logo, Video) in Firebase Studio."
    },
    {
      id: "t4",
      title: "Tier IV: CLIENT INSTANCES",
      icon: "public",
      desc: "Isolated sovereign clones (Labyrinth, MYAUDIT) deployed as standalone dashboard instances."
    }
  ];

  return (
    <section id="labs" className="py-24 bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-left">
          LABS
        </h2>
        <div className="w-16 h-1 bg-cyan-400 mb-8"></div>
        <p className="text-left text-white/60 text-base md:text-lg leading-relaxed mb-12 max-w-3xl">
          Our product creation process. From a unified governance to in-house agency run solutions to stand-alone client run products for their own business needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tiers.map((t) => (
            <div
              key={t.id}
              className="group bg-slate-900/10 border border-slate-800/50 p-8 rounded-[2.5rem] hover:border-sky-500/30 transition-all duration-700"
            >
              <div className="flex justify-center mb-6">
                <div className="rounded-2xl bg-black/80 shadow-[0_0_40px_rgba(0,0,0,0.6)] p-3">
                  <div className="w-10 h-10 rounded-2xl bg-neutral-900 flex items-center justify-center">
                    <span className="material-symbols-outlined text-cyan-400 text-2xl">
                      {t.icon}
                    </span>
                  </div>
                </div>

              </div>
              <h3 className="text-lg font-bold uppercase mb-4 text-white">{t.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
