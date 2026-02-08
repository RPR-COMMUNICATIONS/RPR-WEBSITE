import React from 'react';

/**
 * TS-Λ3 // METHODS SUBSTRATE [v2.4.1 FINAL CLINICAL]
 * Resolved: Ikon Fragmentation & Header Drift
 * Registry: ASK (#overwatch) / PLAN (#foundations) / PAY (/labs)
 */
export const Methods: React.FC = () => {
  const ikons = [
    { name: 'ASK', id: '#overwatch', icon: 'dynamic_form' },
    { name: 'PLAN', id: '#foundations', icon: 'architecture' },
    { name: 'PAY', id: '/labs', icon: 'send_money' },
    { name: 'PLAY', id: '#methods', icon: 'rocket_launch' },
    { name: 'REPEAT', id: '#foundations', icon: 'update' }
  ];

  return (
    <section id="methods" className="py-24 bg-black border-t border-white/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="text-3xl font-bold uppercase tracking-widest text-white">THE METHODS</h2>
        <div className="w-12 h-1 bg-cyan-500 my-4" />
        <p className="text-white/60 text-sm font-mono uppercase tracking-widest">
          DEVELOPING TAILOR-MADE SOLUTIONS TO OUR CORPORATE CLIENTS.
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
        {ikons.map((ikon) => (
          <a key={ikon.name} href={ikon.id} className="group flex flex-col items-center gap-4 transition-all hover:scale-105">
            <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:border-cyan-500/50 group-hover:bg-cyan-500/5">
              <span className="material-symbols-outlined text-white/40 group-hover:text-cyan-400">
                {ikon.icon}
              </span>
            </div>
            <span className="text-[10px] tracking-[0.2em] font-mono text-white/50 group-hover:text-white uppercase font-bold">
              {ikon.name}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};
