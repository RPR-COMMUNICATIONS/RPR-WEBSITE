import React from 'react';

/**
 * TS-Λ3 // METHODS SUBSTRATE [v2.3.1 LINKED]
 * Registry Alignment: METHODS -> #foundations / ASK -> #overwatch
 */
export const Methods: React.FC = () => {
  const ikons = [
    { name: 'ASK', id: '#overwatch', icon: 'chat' },
    { name: 'PLAN', id: '#foundations', icon: 'architecture' },
    { name: 'PAY', id: '/labs', icon: 'payments' },
    { name: 'PLAY', id: '#methods', icon: 'play_circle' },
    { name: 'REPEAT', id: '#foundations', icon: 'refresh' }
  ];

  return (
    <section id="methods" className="py-24 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
        {ikons.map((ikon) => (
          <a key={ikon.name} href={ikon.id} className="group flex flex-col items-center gap-4 transition-all hover:scale-105">
            <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:border-cyan-500/50 group-hover:bg-cyan-500/5">
              <span className="material-symbols-outlined text-white/40 group-hover:text-cyan-400">
                {ikon.icon}
              </span>
            </div>
            <span className="text-[10px] tracking-[0.2em] font-mono text-white/50 group-hover:text-white uppercase">
              {ikon.name}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};
