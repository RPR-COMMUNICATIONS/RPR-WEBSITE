import React from 'react';
import SentinelIcon from './icons/the_sentinel_protocol.svg';
import BishopIcon from './icons/rpr-icon-chess_bishop.svg';
import AssistantDeviceIcon from './icons/perplexity_command-icon-assistant_device.svg';
import KnightIcon from './icons/rpr-icon-chess_knight.svg';

/**
 * TS-Λ3 // LABS SUBSTRATE [v2.1.0]
 * Resolution: Aligned with 4-Tier graduation narrative and Bauhaus icon contract.
 * Authority: hello@butterdime.com
 */
export const Labs: React.FC = () => {
  const tiers = [
    {
      id: "t1",
      title: "Tier I: SENTINEL Protocol",
      icon: SentinelIcon,
      desc: "The core governance engine managing the forensic evolution of creative substrates."
    },
    {
      id: "t2",
      title: "Tier II: THE ELDERS",
      icon: BishopIcon,
      desc: "The Advisory triad bridging strategic intent with operational System 3 divisions."
    },
    {
      id: "t3",
      title: "Tier III: THE FORGE",
      icon: AssistantDeviceIcon,
      desc: "Internal Intelligence Lab staging specialized modules (IKON, Logo, Video) in Firebase Studio."
    },
    {
      id: "t4",
      title: "Tier IV: INSTANCES",
      icon: KnightIcon,
      desc: "Isolated sovereign clones (Labyrinth, MYAUDIT) deployed as standalone dashboard instances."
    }
  ];

  return (
    <section id="labs" className="py-24 bg-[#050505] border-t border-white/5">
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
          {tiers.map((t) => (
            <div
              key={t.id}
              className="group bg-slate-900/10 border border-slate-800/50 p-8 rounded-[2.5rem] hover:border-sky-500/30 transition-all duration-700"
            >
              <div className="mb-6 w-8 h-8 flex items-center justify-center">
                <img
                  src={t.icon}
                  alt={t.title}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform invert brightness-200"
                />
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
