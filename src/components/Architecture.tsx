import React from 'react';

/**
 * TS-Λ3 // ARCHITECTURE REGISTRY [v2.4.2]
 * Authority: SG-CANONICAL-2026
 * Status: HARDENED
 */

export const SYSTEMS = [
  { id: 'foundations', label: 'THE FOUNDATIONS' },
  { id: 'mothership', label: 'THE MOTHERSHIP' },
  { id: 'overwatch', label: 'OVERWATCH' },
  { id: 'methods', label: 'THE METHODS' }
];

export const Architecture: React.FC = () => {
  return (
    <section id="architecture" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xs font-mono text-cyan-400 tracking-[0.5em] uppercase mb-16">System Architecture</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SYSTEMS.map((system) => (
            <a
              key={system.id}
              href={`#${system.id}`}
              className="p-8 border border-white/10 rounded-2xl bg-white/5 hover:border-cyan-500/30 transition-all group"
            >
              <span className="text-[10px] font-mono text-white/40 block mb-4">SYSTEM_0{SYSTEMS.indexOf(system) + 1}</span>
              <h3 className="text-lg font-bold text-white tracking-widest group-hover:text-cyan-400 transition-colors">
                {system.label}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
