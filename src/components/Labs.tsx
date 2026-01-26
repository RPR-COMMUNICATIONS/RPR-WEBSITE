import React from 'react';

/**
 * TS-Λ3 // THE LABS // TECHNICAL SHOWCASE [v8.4.0]
 * RECTIFIED: Switched to Material Symbols Variable Font.
 */

const labsItems = [
  {
    title: "THE SENTINEL PROTOCOL",
    icon: "security",
    desc: "Real-time forensic monitoring and operational security latches.",
    status: "ACTIVE"
  },
  {
    title: "THE ELDERS",
    icon: "account_tree",
    desc: "Sovereign structural logic and high-fidelity design governance.",
    status: "ACTIVE"
  },
  {
    title: "RPR KONTROL",
    icon: "terminal",
    desc: "Centralized command substrate for experiential activations.",
    status: "INTERNAL"
  },
  {
    title: "MYAUDIT",
    icon: "database",
    desc: "Harbor C platform for comprehensive data verification and audit trails.",
    status: "PROD",
    link: "https://myaudit-ui.onrender.com/"
  }
];

export const Labs: React.FC = () => {
  return (
    <section id="labs" className="bg-black py-32 px-6 md:px-12 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <h2 className="text-white text-4xl md:text-6xl font-bold uppercase tracking-[-0.05em] font-sans">
              THE LABS
            </h2>
            <p className="text-cyan-400 font-mono tracking-[0.2em] text-sm uppercase">Technical Infrastructure</p>
          </div>

          {/* Global Labs Action Indicator */}
          <div className="flex items-center gap-3 px-4 py-2 bg-[#0A0A0A] border border-zinc-800 rounded-lg">
            <span className="material-symbols-outlined text-cyan-400 text-xl animate-pulse">
              handyman
            </span>
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">System Maintenance: Active</span>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {labsItems.map((item) => (
            <article key={item.title} className="group relative flex flex-col justify-between p-8 bg-[#0A0A0A] border border-zinc-800 rounded-xl hover:border-cyan-500/50 transition-all">
              <div className="space-y-6">
                {/* UNIFIED CONTAINER SPECIFICATION */}
                <div className="w-12 h-12 bg-black border border-zinc-800 rounded-xl flex items-center justify-center transition-all group-hover:border-cyan-500/50">
                  <span className="material-symbols-outlined text-cyan-400 text-2xl">
                    {item.icon}
                  </span>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold tracking-widest font-mono text-xs uppercase">{item.title}</h4>
                  <p className="text-zinc-500 text-[10px] uppercase font-mono leading-relaxed tracking-tight">{item.desc}</p>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-zinc-900 pt-4">
                <span className="text-[8px] font-mono text-cyan-600 tracking-widest">{item.status}</span>
                {item.link && (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-[8px] font-mono text-zinc-400 hover:text-white uppercase tracking-widest">
                    Launch Harbor C →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};