import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FileText, ShieldCheck, Lock, Globe } from 'lucide-react';

/**
 * TS-Λ3 // MOTHERSHIP SECTION [v3.38.1]
 * Path: src/components/mothershipsection.tsx
 * Mission: Lint Resolution // Liquidate TS6133
 * Authority: THE OVERWATCH // SG-CANONICAL-2026
 * Fix: Removed unused 'SymbolTile' import to satisfy strict compiler checks.
 * Status: LATCHED // CLEAN_BUILD
 */

// 🧬 AUTHORITATIVE UI LATCHES
import { SectionHeading } from './sectionheading.tsx';
import { MothershipOSLogo } from '../brand/mothershiposlogo.tsx';
import { SovereignGlass } from './sovereignglass.tsx';

export const MothershipSection: React.FC = () => {
  const { t } = useTranslation('harborA');
  const navigate = useNavigate();

  // 🧬 TECHNOLOGY PILLS: Ingested from localized manifest
  const pills = [
    t('mothership.pills.sentinel', 'SENTINEL PROTOCOL'),
    t('mothership.pills.ram', 'RAM GOVERNANCE'),
    t('mothership.pills.rbaa', 'RBAA ROLES'),
    t('mothership.pills.cstride', 'C-STRIDE TELEMETRY')
  ];

  return (
    <section id="mothership" className="py-48 bg-black overflow-hidden border-t border-white/5 relative">
      <div className="max-w-screen-2xl mx-auto px-6 relative z-10 flex flex-col items-center">

        {/* 🏛️ 01. HEADING */}
        <div className="mb-48 w-full">
          <SectionHeading
            kicker={t('mothership.kicker', 'ENTERPRISE INTELLIGENCE INFRASTRUCTURE')}
            title={t('mothership.title', 'THE')}
            accent={t('mothership.accent', 'MOTHERSHIP')}
          />
        </div>

        {/* 📋 02. PLATFORM LOGO STAGE */}
        <div className="mb-64 flex justify-center w-full relative">
          <div className="absolute inset-0 bg-cyan-500/5 blur-[120px] rounded-full scale-150 opacity-20 pointer-events-none" />
          <MothershipOSLogo size={256} className="opacity-100 relative z-10" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-48 w-full items-center">

          {/* 💬 03. THE QUOTE AXIS [REFINED] */}
          <div className="flex flex-col justify-center text-center lg:text-left text-white">
            <div className="inline-flex items-center gap-3 mb-6 justify-center lg:justify-start">
              <span className="h-px w-8 bg-cyan-500/60 hidden lg:block" />
              <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-cyan-500/80 font-black">
                SIGNAL_FROM_THE_FIELD
              </span>
            </div>

            <blockquote className="text-3xl md:text-5xl font-black tracking-tight leading-tight mb-6 max-w-3xl mx-auto lg:mx-0 uppercase font-sans not-italic">
              {t('mothership.quote', 'WE NEED TO DEVELOP AI TO A LEVEL THAT IS USEFUL TO PEOPLE.')}
            </blockquote>

            <div className="flex items-center gap-3 justify-center lg:justify-start pt-4 border-t border-white/10 max-w-md mx-auto lg:mx-0">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse shadow-[0_0_8px_#00D9FF]" />
              <cite className="text-xs md:text-sm font-mono text-cyan-400/80 uppercase tracking-[0.35em] not-italic font-bold">
                {t('mothership.cite', '— JENSEN HUANG, CEO, NVIDIA')}
              </cite>
            </div>
          </div>

          {/* 🛡️ 04. THE ENIGMA CARD */}
          <div className="w-full">
            <SovereignGlass className="bg-white/[0.02] border-white/10 p-12 h-full flex flex-col group hover:border-cyan-500/30 transition-all duration-700 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none group-hover:opacity-[0.06] transition-opacity">
                <ShieldCheck size={200} className="text-white" />
              </div>

              <header className="relative z-10 mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <Lock size={14} className="text-cyan-500" />
                  <span className="font-mono text-[10px] text-cyan-500 tracking-[0.4em] font-black uppercase">
                    SOVEREIGN_IP_LATCH
                  </span>
                </div>
                <h4 className="text-2xl font-black italic uppercase tracking-tighter text-white mb-2">
                  IP & PRIOR ART LEDGER
                </h4>
                <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest leading-relaxed">
                  <p>ECC-KMS-256 PROVENANCE // ASIA-SOUTHEAST1</p>
                  <p>STATUS: <span className="text-cyan-400 font-black">🟢 LATCHED</span></p>
                </div>
              </header>

              <div className="space-y-6 text-zinc-400 text-sm leading-relaxed mb-12 font-mono uppercase tracking-tighter relative z-10">
                <p>
                  Every core protocol and system component—including the Sentinel Protocol and Bond Stack relational mathematics—is cryptographically versioned and anchored to prove Point of Origin (POO) and defend trade secrets.
                </p>
              </div>

              <button
                onClick={() => navigate('/labs/library')}
                className="relative z-10 w-full bg-white text-black font-black uppercase tracking-widest py-4 text-[10px] hover:bg-cyan-500 transition-all flex items-center justify-center gap-3 group/btn"
              >
                <FileText size={14} /> {t('mothership.btns.whitepaper', 'VIEW PUBLIC WHITEPAPER')}
              </button>

              <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center opacity-30 relative z-10">
                <span className="text-[8px] font-mono uppercase tracking-[0.3em] text-white">Registry: TS-Λ3 CLASSIFIED</span>
                <Globe size={12} className="text-white" />
              </div>
            </SovereignGlass>
          </div>
        </div>

        {/* 📜 05. THE MANDATE */}
        <div className="max-w-5xl mx-auto mb-48 space-y-12 text-center">
          <h3 className="text-white text-xl md:text-4xl leading-tight font-black uppercase italic tracking-tighter max-w-4xl mx-auto">
            {t('mothership.mandate_title', 'The Mothership is the business operating platform that turns a real company into a living digital twin.')}
          </h3>

          <div className="space-y-8 max-w-3xl mx-auto text-zinc-300 text-lg md:text-xl leading-relaxed font-light italic">
            <p>{t('mothership.mandate_p1')}</p>
            <p>{t('mothership.mandate_p2') || t('mothership.mandate_p3')}</p>
          </div>
        </div>

        {/* 🧬 06. TECHNOLOGY PILLS */}
        <div className="flex flex-col items-center w-full">
          <div className="mb-12 text-center">
            <span className="text-[9px] font-mono text-cyan-500/60 uppercase tracking-[0.5em] font-black bg-cyan-500/5 px-4 py-2 rounded-full border border-cyan-500/10">
              {t('mothership.operational_frameworks', 'OPERATIONAL_FRAMEWORKS')}
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl">
            {pills.map((pill) => (
              <span
                key={pill}
                className="bg-black border border-white/10 text-white/40 text-[10px] px-8 py-3 rounded-full font-mono uppercase tracking-[0.2em] hover:border-cyan-500/50 hover:text-white transition-all duration-700 cursor-default"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 right-0 -translate-y-1/2 opacity-[0.01] pointer-events-none select-none text-white">
        <span className="text-[25rem] font-black italic tracking-tighter uppercase">
          MOTHERSHIP
        </span>
      </div>
    </section>
  );
};

export default MothershipSection;