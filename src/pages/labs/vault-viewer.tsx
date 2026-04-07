import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Shield,
  Cpu,
  ArrowLeft,
  Activity,
  Zap,
  Table,
  Database,
  Terminal
} from 'lucide-react';

/**
 * ⚓ TS-Λ3 // SOVEREIGN VAULT VIEWER [v1.4.0]
 * Path: src/pages/labs/vault-viewer.tsx
 * Mission: Signal Visualization // Static Fallback
 * Status: UPGRADED // HYBRID_LATCH
 */

import { RprMasterLogo } from '../../brand/rprmasterlogo.tsx';

export const VaultViewer: React.FC = () => {
  const { t } = useTranslation('mothershipwhitepaper');
  const navigate = useNavigate();
  const [pulses, setPulses] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // 🛡️ THE STATIC LATCH: Fetching the pushed "Text Files"
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }

    const loadPulses = async () => {
      try {
        const response = await fetch('/data/static_pulses.json');
        const data = await response.json();
        setPulses(data);
      } catch (err) {
        console.warn("⚠️ [VAULT_OFFLINE]: Static pulse substrate not found.");
      } finally {
        setIsLoading(false);
      }
    };

    loadPulses();
  }, []);

  const safeMap = (key: string, callback: (item: any, i: number) => React.ReactNode) => {
    const data = t(key, { returnObjects: true });
    if (!Array.isArray(data)) return null;
    return data.map(callback);
  };

  const renderIntelligence = () => {
    const data = t('intelligence_substrate', { returnObjects: true });
    if (!data || typeof data !== 'object' || Array.isArray(data)) return null;

    return Object.entries(data)
      .filter(([key]) => key !== 'description')
      .map(([key, item]: [string, any]) => (
        <div key={key} className={`p-10 border rounded-[2.5rem] transition-all duration-700 ${key === 'vault' ? 'bg-cyan-500/5 border-cyan-500/30' : 'bg-zinc-900/30 border-white/5 hover:border-white/20'}`}>
          <div className="flex items-center gap-3 mb-6">
            <Activity size={14} className={key === 'vault' ? 'text-cyan-400' : 'text-zinc-600'} />
            <h4 className="text-xs font-mono text-cyan-500 uppercase tracking-widest font-black">
              {item.name}
            </h4>
          </div>
          <p className="text-[11px] text-zinc-400 uppercase leading-relaxed m-0 font-mono tracking-tighter mb-4 italic">
            Focus: {item.focus}
          </p>
          <p className="text-[11px] text-zinc-500 uppercase leading-relaxed m-0 font-mono tracking-tighter">
            {item.description}
          </p>
        </div>
      ));
  };

  return (
    <div className="min-h-screen bg-black text-zinc-300 font-sans p-6 md:p-24 selection:bg-cyan-500/30 overflow-x-hidden antialiased">
      <div className="max-w-4xl mx-auto">

        <button
          onClick={() => navigate('/labs')}
          className="mb-16 group flex items-center gap-4 opacity-50 hover:opacity-100 transition-all duration-500"
        >
          <div className="p-2 rounded-full border border-white/10 group-hover:border-cyan-500/50 transition-colors">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-500" />
          </div>
          <span className="text-[10px] font-black tracking-[0.4em] uppercase italic text-white">
            {t('ui.return_to_labs', 'RETURN_TO_COMMAND')}
          </span>
        </button>

        <header className="mb-24 border-l-2 border-cyan-500 pl-8 md:pl-12 relative">
          <div className="flex items-center gap-3 mb-6 text-[9px] font-mono text-zinc-600 uppercase tracking-widest">
            <span className="px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-bold">
              {t('meta.classification')}
            </span>
            <span>ARTIFACT ID: {t('meta.audit_marker')}</span>
          </div>

          <h1 className="text-xl md:text-4xl font-black text-white uppercase italic tracking-tighter leading-[1.15] mb-8 pr-12">
            {t('meta.title')} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-zinc-500 pb-1 inline-block">
              {t('meta.subtitle')}
            </span>
          </h1>

          <p className="text-zinc-500 font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] leading-relaxed max-w-2xl pt-6 border-t border-white/5">
            {t('meta.marker_note')}
          </p>
        </header>

        <article className="prose prose-invert max-w-none space-y-32 pb-48 font-light leading-relaxed text-slate-300">

          <section id="abstract">
            <div className="flex items-center gap-4 mb-8">
              <Zap size={18} className="text-cyan-500" />
              <h2 className="text-xl font-black uppercase italic tracking-tighter text-white m-0">
                0. Abstract & Core Claims
              </h2>
            </div>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
              {t('abstract.summary')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {safeMap('abstract.core_claims', (claim, i) => (
                <div key={i} className="p-8 bg-zinc-900/30 border border-white/5 rounded-[2rem] hover:border-cyan-500/20 transition-all">
                  <p className="text-[10px] font-black text-cyan-500 uppercase mb-4 tracking-widest opacity-60">CLAIM 0{i + 1}</p>
                  <p className="text-xs text-white font-black uppercase mb-3 italic tracking-tight">{claim.title}</p>
                  <p className="text-[11px] text-zinc-500 leading-normal uppercase font-mono tracking-tighter">{claim.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="governance-shell">
            <div className="flex items-center gap-4 mb-10 text-xl font-black uppercase italic tracking-tighter text-white">
              <Shield size={18} className="text-cyan-500" />
              <h2>1. The Labyrinth Governance Shell</h2>
            </div>
            <div className="space-y-4">
              {safeMap('governance_shell.slots', (slot, i) => (
                <div key={i} className="flex flex-col md:flex-row gap-6 p-8 bg-zinc-900/20 border border-white/5 rounded-[2rem] hover:border-cyan-500/30 transition-all">
                  <div className="md:w-1/3 text-xs font-black text-white uppercase italic tracking-widest">
                    {slot.name}
                  </div>
                  <div className="md:w-2/3 border-t md:border-t-0 md:border-l border-white/5 pt-6 md:pt-0 md:pl-10">
                    <p className="text-[11px] text-cyan-400 font-mono uppercase mb-2 tracking-widest">{slot.enforcement}</p>
                    <p className="text-[12px] text-zinc-400 leading-relaxed uppercase font-mono tracking-tighter">{slot.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 🚀 NEW: SECTION 3 - RECLAIMED SIGNAL HUD */}
          <section id="signal-registry">
            <div className="flex items-center gap-4 mb-10 text-xl font-black uppercase italic tracking-tighter text-white">
              <Database size={18} className="text-cyan-500" />
              <h2>2. Forensic Signal Substrate</h2>
            </div>

            {isLoading ? (
              <div className="p-12 border border-white/5 rounded-[2rem] flex justify-center items-center">
                <Activity className="text-cyan-500 animate-pulse" size={24} />
              </div>
            ) : (
              <div className="space-y-4 font-mono">
                {pulses.length > 0 ? pulses.map((pulse, i) => (
                  <div key={pulse.id || i} className="p-6 bg-zinc-900/40 border border-white/5 rounded-2xl hover:border-cyan-500/30 transition-all group">
                    <div className="flex justify-between items-center text-[9px] mb-3 opacity-40 uppercase tracking-widest">
                      <div className="flex items-center gap-2">
                        <Terminal size={10} className="text-cyan-400" />
                        <span>PULSE_ID: {pulse.id} // SEVERITY: {pulse.severity}</span>
                      </div>
                      <span>{new Date(pulse.timestamp_l1).toLocaleString()}</span>
                    </div>
                    <p className="text-xs md:text-sm text-cyan-400 group-hover:text-white transition-colors uppercase italic font-black leading-relaxed">
                      {pulse.message}
                    </p>
                    <div className="mt-4 pt-4 border-t border-white/5 grid grid-cols-2 gap-4 text-[8px] text-zinc-600 uppercase tracking-tighter">
                      <div>LATCH: {pulse.job_id}</div>
                      <div className="text-right">ORIGIN: {pulse.origin}</div>
                    </div>
                  </div>
                )) : (
                  <div className="p-12 border border-white/5 rounded-[2.5rem] bg-zinc-900/20 text-center italic text-zinc-600 text-xs">
                    NO ACTIVE SIGNALS DETECTED IN STATIC HARBOR
                  </div>
                )}
              </div>
            )}
          </section>

          <section id="intelligence">
            <div className="flex items-center gap-4 mb-10 text-xl font-black uppercase italic tracking-tighter text-white">
              <Cpu size={18} className="text-cyan-500" />
              <h2>3. Intelligence Substrate</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {renderIntelligence()}
            </div>
          </section>

          <section id="appendix" className="pt-24 border-t border-white/5">
            <div className="flex items-center gap-4 mb-12">
              <Table size={16} className="text-cyan-500" />
              <h4 className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.4em] font-black">
                6. Appendix: RAM vs. Constitutional AI
              </h4>
            </div>
            <div className="overflow-x-auto rounded-[2rem] border border-white/5 bg-white/[0.01]">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="border-b border-white/10 text-[10px] text-cyan-500 font-mono uppercase tracking-[0.2em] bg-white/[0.02]">
                    <th className="p-8 font-black">Metric</th>
                    <th className="p-8 font-black">Constitutional AI</th>
                    <th className="p-8 font-black">RAM Framework</th>
                  </tr>
                </thead>
                <tbody className="text-[11px] text-zinc-400 uppercase tracking-tight font-mono">
                  {safeMap('appendix_comparison.metrics', (row, i) => (
                    <tr key={i} className="border-b border-white/[0.02] hover:bg-white/[0.02] transition-colors group">
                      <td className="p-8 font-black text-white italic group-hover:text-cyan-400">
                        {row.metric}
                      </td>
                      <td className="p-8 opacity-60">{row.constitutional_ai}</td>
                      <td className="p-8 text-cyan-400 font-black">{row.ram}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </article>

        <footer className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12 opacity-20 select-none pb-24">
          <div className="flex items-center gap-6">
            <RprMasterLogo size={28} />
            <span className="text-[8px] font-mono uppercase tracking-[0.4em] font-black text-white italic">
              RPR COMMUNICATIONS LLC
            </span>
          </div>
          <div className="text-right text-[8px] font-mono uppercase tracking-[0.4em] text-white space-y-1">
            <p className="font-black">AUTHORITY // {t('meta.authority')}</p>
            <p>VERSION // {t('meta.version')}</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default VaultViewer;