import React from 'react';

/**
 * TS-Λ3 // THE METHODS // CLIENT LIFECYCLE [v1.8.9]
 * Authoritative 5-Column IKON Grid: ASK → PAY → MAKE → PLAY → REPEAT
 * Premium icon tiles with glow effect
 * Typography Hierarchy: Stage Name (Primary) → Description (Secondary) → Subtitle (Tertiary)
 * Icon System: Material Symbols Variable Font via Icon helper
 * Alignment: px-4 sm:px-6 lg:px-8 py-24, max-w-screen-2xl
 */
export const Methods: React.FC = () => {
  const methods = [
    {
      key: 'ASK',
      title: 'ASK',
      subtitle: 'Strategic Planning',
      body: 'Define problem, map consumer journey, set success metrics.',
      icon: 'group',
    },
    {
      key: 'PAY',
      title: 'PAY',
      subtitle: 'Client Approval',
      body: 'Align on risks, timelines and budgets; get sign-off.',
      icon: 'sync',
    },
    {
      key: 'MAKE',
      title: 'MAKE',
      subtitle: 'Planning',
      body: 'Develop concepts, plan channels, build the roadmap.',
      icon: 'build',
    },
    {
      key: 'PLAY',
      title: 'PLAY',
      subtitle: 'Execution',
      body: 'Produce assets, launch and monitor performance in market.',
      icon: 'rocket_launch',
    },
    {
      key: 'REPEAT',
      title: 'REPEAT',
      subtitle: 'Post Analysis',
      body: 'Review results, capture insights, improve the journey.',
      icon: 'self_improvement',
    },
  ];

  return (
    <section id="methods" className="px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-screen-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-left">
          THE METHODS
        </h2>
        <div className="w-16 h-1 bg-cyan-400 mb-8"></div>
        <p className="text-left text-white/60 text-base md:text-lg leading-relaxed mb-12 max-w-3xl">
          A continuous loop from strategy to post-campaign insight.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {methods.map((m) => (
            <article
              key={m.key}
              className="bg-black rounded-3xl py-10 px-8 flex flex-col items-center text-center"
            >
              {/* Icon tile with glow */}
              <div className="mb-6 rounded-2xl bg-black/80 shadow-[0_0_40px_rgba(0,0,0,0.6)] p-3">
                <div className="w-10 h-10 rounded-2xl bg-neutral-900 flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-2xl">
                    {m.icon}
                  </span>
                </div>
              </div>


              <h3 className="text-lg font-semibold tracking-[0.5em] text-white mb-2">
                {m.title}
              </h3>
              <p className="text-sm text-white/60 mb-3">
                {m.subtitle}
              </p>
              <p className="text-sm text-white/60 leading-relaxed">
                {m.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
