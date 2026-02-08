import React from 'react';
import { MothershipVisualizer } from './MothershipVisualizer';
import { useTranslation } from 'react-i18next';

/**
 * TS-Λ3 // MOTHERSHIP SECTION [v2.4.2]
 * Authority: SG-CANONICAL-2026
 * Status: HARDENED
 */
export const MothershipSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="mothership" className="px-6 py-24 bg-black border-t border-white/5 scroll-mt-20">
      <div className="max-w-screen-2xl mx-auto">
        <div className="space-y-4 mb-16 text-left border-l-2 border-cyan-400 pl-8">
          <h2 className="text-white text-4xl md:text-6xl font-bold uppercase tracking-tight italic font-sans">
            {t('nav.mothership')}
          </h2>
          <p className="text-white/60 text-sm md:text-base max-w-2xl leading-relaxed">
            {t('mothership.description')}
          </p>
        </div>

        {/* Jensen Huang Quote Block */}
        <div className="mb-24 p-12 bg-white/5 border border-white/10 rounded-[3rem] relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="material-symbols-outlined text-8xl text-cyan-400">format_quote</span>
          </div>
          <blockquote className="relative z-10 max-w-4xl">
            <p className="text-2xl md:text-4xl font-bold text-white tracking-tight leading-tight mb-8 italic">
              {t('mothership.jensen_quote')}
            </p>
            <footer className="flex items-center gap-4">
              <div className="h-px w-12 bg-cyan-500"></div>
              <cite className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-400 not-italic">
                {t('mothership.jensen_author')}
              </cite>
            </footer>
          </blockquote>
        </div>

        <div className="mb-12">
          <h3 className="text-cyan-400 font-mono text-xs uppercase tracking-[0.4em] mb-4">{t('mothership.architecture_subhead')}</h3>
          <p className="text-white/40 text-xs md:text-sm max-w-3xl leading-relaxed uppercase font-mono tracking-wider">
            {t('mothership.architecture_description')}
          </p>
        </div>

        <div className="border border-white/10 rounded-3xl bg-black/40 p-6 lg:p-12 overflow-hidden shadow-2xl backdrop-blur-sm">
          <MothershipVisualizer />
        </div>
      </div>
    </section>
  );
};
