import React from 'react';
import { useTranslation } from 'react-i18next';

/**
 * TS-Λ3 // THE METHODS [v5.2.1]
 * Path: src/components/methods.tsx
 * Mission: Operational Loop Implementation // Permanent Financial Latch
 * Authority: THE OVERWATCH // SG-CANONICAL-2026
 * Status: AUTHORITATIVE // LATCHED
 * * FIX LOG:
 * 1. STRIPE LATCH: Point-locked the PAY node to the permanent Stripe vector.
 * 2. PROP ALIGNMENT: Liquidated deprecated glowColor from SymbolTile instances.
 * 3. GEOMETRY: Calibrated p-6 to p-12 scaling for high-density touch targets.
 */

// 🧬 AUTHORITATIVE UI LATCHES
import { SectionHeading } from './sectionheading.tsx';
import SymbolTile from './icons/symboltile.tsx';

// 🧬 MECHANICAL GLOW CONTAINER (SOVEREIGN ENGINE LATCH)
const MethodGlowIcon: React.FC<{ name: string; size?: number; className?: string }> = ({
  name,
  size = 32,
  className = ""
}) => {
  const filterId = `method-glow-${name.replace(/[^a-zA-Z0-9]/g, '-')}-${Math.random().toString(36).substr(2, 5)}`;

  return (
    <div className={`relative w-20 h-20 flex items-center justify-center overflow-visible ${className}`}>
      <svg
        viewBox="0 0 64 64"
        className="absolute inset-0 w-full h-full overflow-visible"
        style={{ transform: 'scale(1.4)' }}
      >
        <defs>
          <filter id={filterId} x="-50%" y="-50%" width="200%" height="200%">
            {/* 🛡️ CHROMATIC LATCH: Authoritative White Glow */}
            <feFlood floodColor="white" floodOpacity="0.8" result="flood" />
            <feComposite in="flood" in2="SourceAlpha" operator="in" result="mask" />
            <feGaussianBlur in="mask" stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <rect
          x="4" y="4"
          width="56"
          height="56"
          rx="14.4"
          fill="#000000"
          filter={`url(#${filterId})`}
          className="stroke-white/10"
          strokeWidth="1"
        />
      </svg>

      <div className="relative z-10 scale-[1.3]">
        <SymbolTile
          glyph={name}
          size={size}
          variant="none"
          glow={false}
          className="relative"
        />
      </div>
    </div>
  );
};

const STEP_IDS = ['ask', 'pay', 'make', 'play', 'repeat'] as const;

/**
 * 🚥 STEP CONFIGURATION
 * Maps internal logic to external vectors and canonical icons.
 */
const STEP_CONFIG: Record<typeof STEP_IDS[number], { id: string; icon: string }> = {
  ask: { id: '/labs', icon: 'help' },
  pay: {
    id: 'https://buy.stripe.com/test_placeholder_financial_vector_latch',
    icon: 'payments'
  },
  make: { id: '#visualizer', icon: 'construction' },
  play: { id: '#methods', icon: 'rocket_launch' },
  repeat: { id: '#foundations', icon: 'self_improvement' }
};

export const Methods: React.FC = () => {
  const { t } = useTranslation('harborA');

  return (
    <section id="methods" className="bg-black py-32 px-6 md:px-12 border-t border-white/5 relative overflow-hidden">
      {/* 🌌 AMBIENT SUBSTRATE */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-white/[0.01] blur-[160px] pointer-events-none" />

      <div className="max-w-screen-2xl mx-auto relative z-10">
        <SectionHeading
          kicker={t('methods.kicker', 'OPERATIONAL LOOP // HARBOR A')}
          title={t('methods.title', 'THE')}
          accent={t('methods.accent', 'METHODS')}
        />

        {/* 📐 GRID: Responsive distribution for the 5-stage loop */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-24">
          {STEP_IDS.map((stepId) => {
            const cfg = STEP_CONFIG[stepId];
            const isExternal = cfg.id.startsWith('http');

            return (
              <a
                key={stepId}
                href={cfg.id}
                target={isExternal ? '_blank' : '_self'}
                rel={isExternal ? 'noopener noreferrer' : ''}
                className="flex flex-col items-center text-center gap-12 p-8 md:p-12 bg-black/40 backdrop-blur-md border border-white/10 rounded-[2.5rem] group hover:border-white/40 hover:bg-white/[0.02] transition-all duration-700 hover:-translate-y-2 shadow-2xl"
              >
                <MethodGlowIcon
                  name={cfg.icon}
                  size={32}
                  className="group-hover:scale-110 transition-transform duration-500"
                />

                <div className="space-y-4">
                  <h4 className="text-2xl font-black text-white uppercase italic tracking-tighter group-hover:text-white transition-colors leading-none">
                    {t(`methods.steps.${stepId}.label`)}
                  </h4>

                  <div className="h-px w-8 bg-white/10 mx-auto group-hover:w-12 group-hover:bg-white/40 transition-all duration-700" />

                  <p className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.3em] font-bold opacity-60 group-hover:opacity-100 transition-opacity">
                    {t(`methods.steps.${stepId}.output`)}
                  </p>
                </div>

                {/* 🛰️ EXTERNAL VECTOR INDICATOR */}
                {isExternal && (
                  <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-100 transition-opacity">
                    <SymbolTile glyph="open_in_new" size={16} variant="none" glow={false} />
                  </div>
                )}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Methods;