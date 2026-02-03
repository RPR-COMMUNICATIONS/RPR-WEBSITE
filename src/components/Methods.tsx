import React from 'react';

export interface IkonMeta {
  name: string;
  subtitle: string;
  description: string;
  icon: string;
  isRefiner?: boolean; // Flag for REPEAT node visual distinction
}

/**
 * TS-Λ3 // THE METHODS // CLIENT LIFECYCLE [v1.8.7]
 * Authoritative 5-Column IKON Grid: ASK → PAY → PLAN → PLAY → REPEAT
 * Typography Hierarchy: Stage Name (Primary) → Description (Secondary) → Subtitle (Tertiary)
 * Icon System: Material Symbols Variable Font
 * Alignment: py-24, bg-[#020617], rounded-[2.5rem]
 */
export const Methods: React.FC = () => {
  const primaryIkons: IkonMeta[] = [
    {
      name: 'DISCOVER',
      subtitle: 'Strategic Planning',
      description: 'Define problem, map consumer journey, set success metrics.',
      icon: 'lightbulb'
    },
    {
      name: 'DELIVER',
      subtitle: 'Client Approval',
      description: 'Align on risks, timelines and budgets; get sign-off.',
      icon: 'heart_check'
    },
    {
      name: 'MEASURE',
      subtitle: 'Planning',
      description: 'Develop concepts, plan channels, build the roadmap.',
      icon: 'layers'
    },
    {
      name: 'IMPROVE',
      subtitle: 'Execution',
      description: 'Produce assets, launch and monitor performance in market.',
      icon: 'play_for_work'
    }
  ];

  return (
    <section id="methods" className="bg-[#020617] py-24 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="space-y-4">
          <h2 className="text-white text-4xl md:text-6xl font-black text-white uppercase tracking-tighter italic leading-none">
            THE <span className="text-sky-500 font-black">METHODS</span>
          </h2>
          <p className="text-sky-500 font-mono tracking-[0.4em] text-[10px] uppercase">CLIENT LIFECYCLE</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-5">
          {primaryIkons.map((icon) => (
            <article
              key={icon.name}
              className={`flex flex-col gap-3 rounded-[2.5rem] border border-slate-800/50 bg-slate-900/10 p-8 hover:border-sky-500/30 transition-all duration-700 ${icon.isRefiner ? 'relative overflow-hidden' : ''
                }`}
            >
              {/* Subtle cyan pulse for REPEAT refiner node */}
              {icon.isRefiner && (
                <div className="absolute inset-0 bg-sky-500/5 animate-pulse pointer-events-none" style={{ animationDuration: '3s' }} />
              )}

              {/* UNIFIED CONTAINER SPECIFICATION */}
              <div className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center group-hover:border-sky-500/20 transition-all">
                <span className="material-symbols-outlined text-sky-500 text-2xl">
                  {icon.icon}
                </span>
              </div>

              <div className="space-y-2 relative z-10">
                <h4 className="text-xl font-bold text-white uppercase tracking-tight">
                  {icon.name}
                </h4>

                <p className="text-sm text-slate-400 leading-relaxed">
                  {icon.description}
                </p>

                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-sky-500 mt-2">
                  {icon.subtitle}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
