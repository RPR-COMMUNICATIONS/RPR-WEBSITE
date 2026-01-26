import React from 'react';

export interface IkonMeta {
  name: string;
  subtitle: string;
  description: string;
  icon: string;
  isRefiner?: boolean; // Flag for REPEAT node visual distinction
}

/**
 * TS-Λ3 // THE METHODS // CLIENT LIFECYCLE [v8.2.0]
 * Authoritative 5-Column IKON Grid: ASK → PAY → PLAN → PLAY → REPEAT
 * Typography Hierarchy: Stage Name (Primary) → Description (Secondary) → Subtitle (Tertiary)
 * Icon System: Material Symbols Variable Font (lightbulb, heart_check, layers, play_for_work, cycle)
 */
export const Methods: React.FC = () => {
  const primaryIkons: IkonMeta[] = [
    {
      name: 'ASK',
      subtitle: 'Strategic Planning',
      description: 'Define problem, map consumer journey, set success metrics.',
      icon: 'lightbulb'
    },
    {
      name: 'PAY',
      subtitle: 'Client Approval',
      description: 'Align on risks, timelines and budgets; get sign-off.',
      icon: 'heart_check'
    },
    {
      name: 'PLAN',
      subtitle: 'Planning',
      description: 'Develop concepts, plan channels, build the roadmap.',
      icon: 'layers'
    },
    {
      name: 'PLAY',
      subtitle: 'Execution',
      description: 'Produce assets, launch and monitor performance in market.',
      icon: 'play_for_work'
    },
    {
      name: 'REPEAT',
      subtitle: 'Post Analysis',
      description: 'Refining the loop for next cycle based on forensic telemetry.',
      icon: 'cycle',
      isRefiner: true // Visual distinction for the loop refiner node
    }
  ];

  return (
    <section id="methods" className="bg-[#050505] py-24 px-6 md:px-12 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="space-y-4">
          <h2 className="text-white text-4xl md:text-6xl font-bold uppercase tracking-[-0.05em]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}>
            THE METHODS
          </h2>
          <p className="text-cyan-400 font-mono tracking-[0.2em] text-sm uppercase">CLIENT LIFECYCLE</p>
        </div>

        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
          {primaryIkons.map((icon) => (
            <article
              key={icon.name}
              className={`flex flex-col gap-3 rounded-xl border border-zinc-800 bg-[#0A0A0A] p-4 hover:border-cyan-500/50 transition-all ${icon.isRefiner ? 'relative overflow-hidden' : ''
                }`}
            >
              {/* Subtle cyan pulse for REPEAT refiner node */}
              {icon.isRefiner && (
                <div className="absolute inset-0 bg-cyan-500/5 animate-pulse pointer-events-none" style={{ animationDuration: '3s' }} />
              )}

              {/* UNIFIED CONTAINER SPECIFICATION */}
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[#0A0A0A] border border-zinc-800 rounded-xl flex items-center justify-center group-hover:border-cyan-500/50 transition-all">
                <span className="material-symbols-outlined text-cyan-400 text-2xl md:text-3xl">
                  {icon.icon}
                </span>
              </div>

              <div className="space-y-2 relative z-10">
                {/* Primary: Stage Name (ASK, PAY, etc.) - Inter Black 900, High Contrast */}
                <h4 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 900 }}>
                  {icon.name}
                </h4>

                {/* Secondary: Description - Zinc-400 */}
                <p className="text-sm text-zinc-400 leading-relaxed mt-1">
                  {icon.description}
                </p>

                {/* Tertiary: Subtitle - Mono, Cyan-500 */}
                <p className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-500 mt-2">
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