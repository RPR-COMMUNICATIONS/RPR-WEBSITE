import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { X, FileText, Info, Activity, ShieldAlert, ChevronRight } from 'lucide-react';
import { TacticalProgress } from './tacticalprogress.tsx';
import SymbolTile from './icons/symboltile.tsx';

/**
 * TS-Λ3 // STRATEGIC SIDECARD [v2.9.4]
 * Path: src/components/audit-sidebar.tsx
 * Mission: Total Linguistic Latch // i18n Integration
 * Authority: THE OVERWATCH // SG-CANONICAL-2026
 * Fix: Wired all UI strings to harborA namespace.
 * Fix: Maintained clinical typographic scaling for high-density HUD fit.
 * Status: LATCHED // MECHANICAL_MODE_ACTIVE
 * // TS-Λ3: MECHANICAL MODE ONLY – DO NOT CHANGE COPY, ONLY WIRE t('…') KEYS.
 */

// ⚓ AUTHORITATIVE TYPE LATCH
import type { NodeData, AuditTrail } from '../types/index.ts';

// 🧬 EXTENDED NODE DATA INTERFACE
interface ExtendedNodeData extends NodeData {
  iconFill?: number;
  desc?: string;
}

interface AuditSidebarProps {
  node: ExtendedNodeData;
  onClose: () => void;
}

export const AuditSidebar: React.FC<AuditSidebarProps> = ({ node, onClose }) => {
  const { t } = useTranslation('harborA');
  const [isCalibrated, setIsCalibrated] = useState(false);

  useEffect(() => {
    // Sequence the calibration pulse for UI smoothness
    const timer = setTimeout(() => setIsCalibrated(true), 300);
    return () => clearTimeout(timer);
  }, [node.id]);

  return (
    <div className="h-full w-full bg-[#000000] flex flex-col shadow-2xl border-l border-white/10 animate-in slide-in-from-right duration-500 overflow-hidden relative rounded-l-3xl">

      {/* 🌌 AMBIENT OVERLAY */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[100px] pointer-events-none -z-10" />

      {/* 📐 HEADER SUBSTRATE: Clinical White Calibration [TYPOGRAPHY_REDUCED] */}
      <div className="p-6 bg-white border-b border-slate-200 shadow-[0_0_30px_rgba(255,255,255,0.15)] relative z-20">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(34,211,238,0.8)] animate-pulse" />
            <span className="text-[8px] font-black text-slate-900 uppercase tracking-[0.4em]">
              {t('visualizer.sidebar.intelligence_node', 'Intelligence_Node')}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 -mt-1 -mr-1 hover:bg-slate-100 rounded-full text-slate-400 hover:text-black transition-all duration-500"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-end justify-between gap-4">
          <div className="flex-1">
            {/* 🔡 REDUCED: text-3xl -> text-xl */}
            <h3 className="text-xl font-black text-black uppercase italic tracking-tighter leading-none mb-2">
              {node.name}
            </h3>
            {/* 🔡 REDUCED: text-[9px] -> text-[8px] */}
            <span className="inline-block text-cyan-600 font-mono text-[8px] uppercase tracking-[0.2em] border border-cyan-200 px-1.5 py-0.5 rounded bg-cyan-50">
              {node.type}
            </span>
          </div>
          {node.glyph && (
            <div className="p-1 bg-black rounded-lg shadow-lg">
              <SymbolTile
                glyph={node.glyph}
                size={36}
                variant="none"
                iconFill={node.iconFill}
                glowColor="white"
                active={true}
                className="border-transparent"
              />
            </div>
          )}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar p-6 bg-black/40">

        {/* 📊 NODAL SATURATION */}
        <div className={`mb-10 transition-all duration-1000 ${isCalibrated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
          <div className="flex items-center gap-2 mb-3 opacity-40">
            <Activity className="w-3 h-3 text-cyan-400" />
            <span className="text-[8px] font-black text-white uppercase tracking-widest">
              {t('visualizer.sidebar.nodal_saturation', 'Nodal_Saturation')}
            </span>
          </div>
          <TacticalProgress label="CALIBRATION_v2.9.4" />
        </div>

        <div className="flex items-center gap-2 mb-4 opacity-40">
          <FileText className="w-3 h-3 text-white" />
          <span className="text-[8px] font-black text-white uppercase tracking-widest">
            {t('visualizer.sidebar.narrative_substrate', 'Narrative_Substrate')}
          </span>
        </div>

        <div className="relative pl-5 border-l border-white/5 space-y-8">
          {/* 🔡 REDUCED: text-base -> text-xs */}
          <p className="text-slate-300 text-xs leading-relaxed font-light italic uppercase tracking-tight opacity-90">
            {node.description || node.desc}
          </p>

          {/* 🧬 FORENSIC PULSE LOG */}
          {node.auditTrail && node.auditTrail.length > 0 && (
            <div className="space-y-4 pt-6 border-t border-white/5">
              <div className="flex items-center gap-2">
                <ShieldAlert className="w-3 h-3 text-slate-600" />
                <span className="text-[8px] font-mono text-slate-600 uppercase tracking-[0.3em]">
                  {t('visualizer.sidebar.forensic_log', 'Forensic_Log')}
                </span>
              </div>
              <div className="space-y-2">
                {node.auditTrail.map((trail: AuditTrail, i: number) => (
                  <div key={i} className="group/trail border-l border-cyan-500/30 pl-4 py-2 hover:bg-white/[0.02] transition-colors rounded-r-lg">
                    <div className="flex items-center justify-between mb-1">
                      {/* 🔡 REDUCED: text-[10px] -> text-[9px] */}
                      <p className="text-[9px] text-slate-300 font-bold uppercase">{trail.action}</p>
                      <span className="text-[7px] font-mono text-slate-600 opacity-0 group-hover/trail:opacity-100 transition-opacity">
                        {trail.timestamp}
                      </span>
                    </div>
                    {trail.details && (
                      <div className="flex items-start gap-1 mt-1 mb-2">
                        <ChevronRight className="w-2 h-2 text-cyan-500/50 mt-1" />
                        {/* 🔡 REDUCED: text-[9px] -> text-[8px] */}
                        <p className="text-[8px] text-slate-400 font-mono uppercase leading-tight">
                          {trail.details}
                        </p>
                      </div>
                    )}
                    <p className="text-[7px] text-slate-500 font-mono uppercase">
                      AUTH: {trail.user}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 🛡️ OPERATIONAL ROLE LATCH */}
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 group hover:border-cyan-500/20 transition-all duration-700">
            <div className="flex items-center gap-2 mb-2">
              <Info className="w-3 h-3 text-cyan-400/70" />
              <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">
                {t('visualizer.sidebar.protocol_role', 'Protocol_Role')}
              </span>
            </div>
            {/* 🔡 REDUCED: text-[11px] -> text-[9px] */}
            <p className="text-[9px] text-slate-500 font-mono leading-relaxed uppercase">
              {t('visualizer.sidebar.protocol_role_body', 'THIS NODE IS LATCHED TO THE SOVEREIGN_ROOT. GOVERNED BY THE SENTINEL_PROTOCOL.')}
            </p>
          </div>
        </div>
      </div>

      {/* 🧬 TERMINUS WATERMARK */}
      <div className="p-6 border-t border-white/5 opacity-10 select-none flex justify-between items-center font-mono text-white">
        <span className="text-[8px] uppercase tracking-[0.6em]">
          {t('visualizer.sidebar.watermark', 'SG-CANONICAL-2026')}
        </span>
        <span className="text-[7px] text-slate-500">v2.9.4</span>
      </div>
    </div>
  );
};

export default AuditSidebar;