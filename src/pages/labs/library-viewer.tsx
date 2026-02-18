import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Shield,
  Info,
  Layers,
  Cpu,
  Database,
  ArrowLeft,
  Lock,
  Activity,
  ChevronRight
} from 'lucide-react';

/**
 * TS-Λ3 // LIBRARY VIEWER SUBSTRATE [v1.3.0]
 * Path: src/pages/labs/library-viewer.tsx
 * Mission: Schema Synchronization // 213-Line Ingest Latch
 * Authority: THE OVERWATCH // SG-CANONICAL-2026
 * Forensic Depth: Point-locked to v1.1.3-LATCHED JSON schema.
 * Status: STABILIZED // CONTENT_VISIBILITY_VERIFIED
 * * FIX LOG:
 * 1. REALIGNMENT: Mapped component keys to match user's JSON (meta, sovereign_bond_stack, etc.).
 * 2. OBJECT HANDLING: Implemented Object.values() for Intelligence Substrate (previously failing Array check).
 * 3. LIGATURE: Verified Material Symbols latch for L-tier icons.
 */

// 🧬 AUTHORITATIVE BRAND LATCH
import { RprMasterLogo } from '../../brand/rprmasterlogo.tsx';

export const LibraryViewer: React.FC = () => {
  // 🛰️ i18n LATCH: Point-locked to strictly lowercase technical namespace
  const { t } = useTranslation('mothershipwhitepaper');
  const navigate = useNavigate();

  // ⚓ INITIALIZATION LATCH
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, []);

  /**
   * 🛡️ DEFENSIVE RENDERING WRAPPER
   * Preserves logic while verifying array presence.
   */
  const safeMap = (key: string, callback: (item: any, i: number) => React.ReactNode) => {
    const data = t(key, { returnObjects: true });
    if (!Array.isArray(data)) {
      console.warn(`[SENTINEL] i18n Array Void: ${key} is not an array. Check manifest structure.`);
      return null;
    }
    return data.map(callback);
  };

  /**
   * 🧠 OBJECT SUBSTRATE HANDLER
   * Specifically for 'intelligence_substrate' which is an object in the manifest.
   */
  const renderIntelligence = () => {
    const data = t('intelligence_substrate', { returnObjects: true });
    if (!data || typeof data !== 'object' || Array.isArray(data)) return null;

    // Filter out the 'description' field to only map the product blocks
    return Object.entries(data)
      .filter(([key]) => key !== 'description')
      .map(([key, item]: [string, any], i: number) => (
        <div key={key} className={`p-10 border rounded-[2.5rem] transition-all duration-700 hover:-translate-y-1 ${i === 1 ? 'bg-cyan-500/5 border-cyan-500/30' : 'bg-zinc-900/30 border-white/5 hover:border-white/20'}`}>
          <div className="flex items-center gap-3 mb-6">
            <Activity size={14} className={i === 1 ? 'text-cyan-400' : 'text-zinc-600'} />
            <h4 className="text-xs font-mono text-cyan-500 uppercase tracking-widest font-black">
              {item.name}
            </h4>
          </div>
          <p className="text-[11px] text-zinc-500 uppercase leading-relaxed m-0 font-mono tracking-tighter">
            {item.description}
          </p>
        </div>
      ));
  };

  return (
    <div className="min-h-screen bg-black text-zinc-300 font-sans p-6 md:p-24 selection:bg-cyan-500/30 overflow-x-hidden selection:text-white antialiased">
      <div className="max-w-4xl mx-auto">

        {/* 🏛️ 01. RETURN HANDSHAKE */}
        <button
          onClick={() => navigate('/labs')}
          className="mb-16 group flex items-center gap-4 opacity-50 hover:opacity-100 transition-all duration-500"
        >
          <div className="p-2 rounded-full border border-white/10 group-hover:border-cyan-500/50 transition-colors">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-500" />
          </div>
          <span className="text-[10px] font-black tracking-[0.4em] uppercase italic text-white">
            {t('ui.return_to_labs', 'Return to Labs')}
          </span>
        </button>


        {/* 📑 02. FORENSIC HEADER (Mapped to 'meta') */}
        <header className="mb-24 border-l-2 border-cyan-500 pl-8 md:pl-12 relative overflow-visible">
          <div className="absolute -left-[3px] top-0 w-[4px] h-full bg-cyan-500 blur-sm opacity-40" />

          <div className="flex items-center gap-3 mb-6">
            <span className="px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-[8px] uppercase tracking-widest font-bold">
              {t('meta.classification')}
            </span>
            <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest">
              Artifact ID: {t('meta.audit_marker')}
            </span>
          </div>

          <h1 className="text-xl md:text-4xl font-black text-white uppercase italic tracking-tighter leading-[1.15] mb-8 pr-12 overflow-visible max-w-2xl">
            {t('meta.title')} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-zinc-500 pb-1 inline-block">
              {t('meta.subtitle')}
            </span>
          </h1>

          <p className="text-zinc-500 font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] leading-relaxed max-w-2xl opacity-80 border-t border-white/5 pt-6">
            {t('meta.marker_note')}
          </p>

          <div className="mt-8 pt-8 flex gap-12 text-left">
            <div className="space-y-1">
              <p className="text-[8px] font-mono text-zinc-600 uppercase tracking-widest">Status</p>
              <p className="text-[10px] font-black text-cyan-500 uppercase tracking-widest">
                {t('meta.status')}
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-[8px] font-mono text-zinc-600 uppercase tracking-widest">Version</p>
              <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">
                {t('meta.version')}
              </p>
            </div>
          </div>
        </header>


        {/* 📜 03. THE WHITE-PAPER ARTICLE */}
        <article className="prose prose-invert prose-cyan max-w-none space-y-32 pb-48 font-light leading-relaxed text-slate-300">

          {/* SECTION 0: ABSTRACT & CLAIMS */}
          <section id="abstract" className="scroll-mt-32">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-2 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                <Info size={18} className="text-cyan-500" />
              </div>
              <h2 className="text-xl font-black uppercase italic tracking-tighter text-white m-0">
                0. Abstract & Claims
              </h2>
            </div>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
              {t('abstract.summary')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {safeMap('abstract.core_claims', (claim, i) => (
                <div key={i} className="p-8 bg-zinc-900/30 border border-white/5 rounded-[2rem] group hover:border-cyan-500/20 transition-all duration-500">
                  <p className="text-[10px] font-black text-cyan-500 uppercase mb-4 tracking-widest opacity-60">Claim 0{i + 1}</p>
                  <p className="text-xs text-white font-black uppercase mb-3 italic tracking-tight">{claim.title}</p>
                  <p className="text-[11px] text-zinc-500 leading-normal uppercase font-mono tracking-tighter opacity-80">{claim.description}</p>
                </div>
              ))}
            </div>
          </section>


          {/* SECTION 1: SOVEREIGN BOND STACK */}
          <section id="bond-stack" className="scroll-mt-32">
            <div className="flex items-center gap-4 mb-10">
              <div className="p-2 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                <Layers size={18} className="text-cyan-500" />
              </div>
              <h2 className="text-xl font-black uppercase italic tracking-tighter text-white m-0">
                1. The Sovereign Bond Stack
              </h2>
            </div>
            <p className="text-zinc-400 mb-10 text-lg">
              {t('sovereign_bond_stack.description')}
            </p>

            <div className="space-y-4">
              {safeMap('sovereign_bond_stack.foundational_bonds', (item, i) => (
                <div key={i} className="flex flex-col md:flex-row gap-6 p-8 bg-zinc-900/20 border border-white/5 rounded-[2rem] group hover:border-cyan-500/30 transition-all duration-700">
                  <div className="md:w-1/3 space-y-2">
                    <p className="text-xs font-black text-white uppercase italic tracking-widest">{item.name}</p>
                    <div className="h-px w-8 bg-white/10 group-hover:w-12 transition-all" />
                    <p className="text-[10px] font-mono text-cyan-500/60 uppercase tracking-widest">{item.label}</p>
                  </div>
                  <div className="md:w-2/3 border-t md:border-t-0 md:border-l border-white/5 pt-6 md:pt-0 md:pl-10 text-[13px] text-zinc-400 leading-relaxed uppercase font-mono tracking-tighter">
                    {item.description}
                  </div>
                </div>
              ))}
            </div>

            {/* SUBSECTION 1.2: RBAA LATCH */}
            <div className="mt-12 p-10 bg-zinc-900/50 border border-white/5 rounded-[3rem] relative overflow-hidden group/rbaa">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[100px] pointer-events-none group-hover/rbaa:bg-cyan-500/10 transition-colors duration-1000" />
              <h4 className="text-xs font-mono text-cyan-500 uppercase tracking-[0.4em] mb-6 relative z-10 font-black">
                {t('sovereign_bond_stack.rbaa.name')}
              </h4>
              <p className="text-sm text-zinc-400 leading-relaxed mb-10 relative z-10 uppercase font-light">
                {t('sovereign_bond_stack.rbaa.description')}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
                {safeMap('sovereign_bond_stack.rbaa.properties', (prop, i) => (
                  <div key={i} className="space-y-4">
                    <h5 className="text-[10px] font-black text-white uppercase tracking-widest italic border-b border-white/5 pb-2">
                      {prop.name}
                    </h5>
                    <p className="text-[11px] text-zinc-500 uppercase leading-relaxed font-mono">
                      {prop.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>


          {/* SECTION 2: SENTINEL PROTOCOL */}
          <section id="sentinel" className="scroll-mt-32">
            <div className="flex items-center gap-4 mb-10">
              <div className="p-2 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                <Shield size={18} className="text-cyan-500" />
              </div>
              <h2 className="text-xl font-black uppercase italic tracking-tighter text-white m-0">
                2. The Sentinel Protocol
              </h2>
            </div>
            <p className="text-zinc-400 mb-12 text-lg">
              {t('sentinel_protocol.description')}
            </p>
            <div className="space-y-16">
              <div className="border-l-2 border-zinc-800 pl-10 relative group/s1">
                <div className="absolute top-0 left-[-2px] w-0.5 h-12 bg-cyan-500 opacity-0 group-hover/s1:opacity-100 transition-opacity" />
                <h4 className="text-sm font-black text-white uppercase italic tracking-tight mb-4">
                  2.1 Jurisdiction & Logic
                </h4>
                <p className="text-sm text-zinc-400 leading-relaxed uppercase font-mono tracking-tighter opacity-80">
                  {t('sentinel_protocol.jurisdiction_and_logic.constraint_sets.description')} {t('sentinel_protocol.jurisdiction_and_logic.agent_contracts.description')}
                </p>
              </div>
              <div className="border-l-2 border-zinc-800 pl-10 relative group/s2">
                <div className="absolute top-0 left-[-2px] w-0.5 h-12 bg-cyan-500 opacity-0 group-hover/s2:opacity-100 transition-opacity" />
                <h4 className="text-sm font-black text-white uppercase italic tracking-tight mb-4">
                  2.2 External Constraint Enforcement
                </h4>
                <p className="text-sm text-zinc-400 leading-relaxed uppercase font-mono tracking-tighter opacity-80">
                  {t('sentinel_protocol.external_constraint_enforcement.description')}
                </p>
              </div>
            </div>
          </section>


          {/* SECTION 3: INTELLIGENCE SUBSTRATE (Object Mapping) */}
          <section id="intelligence" className="scroll-mt-32">
            <div className="flex items-center gap-4 mb-10">
              <div className="p-2 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                <Cpu size={18} className="text-cyan-500" />
              </div>
              <h2 className="text-xl font-black uppercase italic tracking-tighter text-white m-0">
                3. Intelligence Substrate
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {renderIntelligence()}
            </div>
          </section>


          {/* SECTION 4: ARCHITECTURE */}
          <section id="architecture" className="scroll-mt-32">
            <div className="flex items-center gap-4 mb-10">
              <div className="p-2 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                <Layers size={18} className="text-cyan-500" />
              </div>
              <h2 className="text-xl font-black uppercase italic tracking-tighter text-white m-0">
                4. The Mothership OS Architecture
              </h2>
            </div>
            <div className="space-y-4">
              {safeMap('architecture.layers', (node, i) => (
                <div key={i} className="flex items-center gap-8 p-6 border border-white/5 bg-white/[0.01] rounded-2xl group hover:bg-white/[0.03] transition-all duration-500">
                  <div className="w-16 h-16 flex items-center justify-center font-mono text-[10px] text-zinc-700 border border-white/5 rounded-xl group-hover:text-cyan-500 group-hover:border-cyan-500/30 transition-all">
                    {node.id}
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-black text-white uppercase italic tracking-widest">{node.name}</span>
                    <span className="text-[10px] text-zinc-500 uppercase tracking-tighter font-mono opacity-80">{node.role}</span>
                  </div>
                  <ChevronRight size={14} className="ml-auto text-zinc-800 group-hover:text-cyan-500 transition-colors" />
                </div>
              ))}
            </div>
          </section>


          {/* SECTION 5: DEPLOYMENT & IP */}
          <section id="deployment" className="scroll-mt-32">
            <div className="flex items-center gap-4 mb-10">
              <div className="p-2 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                <Database size={18} className="text-cyan-500" />
              </div>
              <h2 className="text-xl font-black uppercase italic tracking-tighter text-white m-0">
                5. Sovereign Deployment & IP
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-left">
              <div className="space-y-6">
                <h4 className="text-xs font-black text-white uppercase italic tracking-widest border-b border-white/10 pb-2">
                  Infrastructure Posture
                </h4>
                <p className="text-[13px] text-zinc-500 uppercase leading-relaxed font-mono">
                  {t('sovereign_deployment_and_ip.infrastructure_posture.description')} | Region: {t('sovereign_deployment_and_ip.infrastructure_posture.region')}
                </p>
              </div>
              <div className="space-y-6">
                <h4 className="text-xs font-black text-white uppercase italic tracking-widest border-b border-white/10 pb-2">
                  Forensic Provenance
                </h4>
                <p className="text-[13px] text-zinc-500 uppercase leading-relaxed font-mono">
                  Algorithm: {t('sovereign_deployment_and_ip.forensic_provenance.hash_algorithm')} | Ledger: {t('sovereign_deployment_and_ip.forensic_provenance.ledger')}
                </p>
              </div>
            </div>

            {/* IP Callout */}
            <div className="mt-16 p-10 bg-cyan-500/5 border border-cyan-500/20 rounded-[2.5rem] relative overflow-hidden text-left">
              <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 blur-[80px] pointer-events-none" />
              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <Lock size={16} className="text-cyan-400" />
                  <h4 className="text-xs font-black text-cyan-400 uppercase tracking-widest">
                    IP_LEDGER_ENFORCEMENT
                  </h4>
                </div>
                <p className="text-[12px] text-zinc-400 uppercase leading-relaxed font-mono">
                  {t('meta.internal_ip_note')}
                </p>
              </div>
            </div>
          </section>


          {/* APPENDIX */}
          <section id="appendix" className="pt-24 border-t border-white/5">
            <h4 className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.4em] mb-12 font-black">
              6. Appendix: RAM vs. Constitutional AI
            </h4>

            <div className="overflow-x-auto rounded-[2rem] border border-white/5 shadow-2xl">
              <table className="w-full text-left border-collapse min-w-[700px] bg-white/[0.01]">
                <thead>
                  <tr className="border-b border-white/10 text-[10px] text-cyan-500 font-mono uppercase tracking-[0.2em] bg-white/[0.02]">
                    <th className="p-8 font-black">Metric</th>
                    <th className="p-8 font-black">Constitutional AI</th>
                    <th className="p-8 font-black">Relational Accountability (RAM)</th>
                  </tr>
                </thead>
                <tbody className="text-[11px] text-zinc-400 uppercase tracking-tight font-mono">
                  {safeMap('ram_vs_constitutional_ai.metrics', (row, i) => (
                    <tr key={i} className="border-b border-white/[0.02] hover:bg-white/[0.02] transition-colors group">
                      <td className="p-8 font-black text-white italic group-hover:text-cyan-400 transition-colors">{row.metric}</td>
                      <td className="p-8 opacity-60">{row.constitutional_ai}</td>
                      <td className="p-8 text-cyan-400 font-black">{row.ram}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

        </article>


        {/* 📐 04. WATERMARK TERMINUS */}
        <footer className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12 opacity-20 select-none pb-24">
          <div className="flex items-center gap-6">
            <RprMasterLogo size={28} />
            <span className="text-[8px] font-mono uppercase tracking-[0.4em] font-black text-white">
              RPR COMMUNICATIONS LLC
            </span>
          </div>
          <div className="flex flex-col items-end gap-1 font-mono text-[8px] uppercase tracking-[0.4em] text-white">
            <span className="font-black">DOC_AUTHORITY // OVERWATCH</span>
            <span>{t('meta.authority')} // {t('meta.version')}</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LibraryViewer;