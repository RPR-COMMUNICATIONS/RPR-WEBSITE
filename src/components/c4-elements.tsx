import React from 'react';

/**
 * TS-Λ3 // C4 VISUALIZER ELEMENTS [v3.2.0]
 * Path: src/components/c4-elements.tsx
 * Mission: Mechanical Glue for Visualizer HUDs
 * Authority: THE OVERWATCH // SG-CANONICAL-2026
 * Status: AUTHORITATIVE // LATCHED
 * * FIX LOG:
 * 1. GEOMETRY: Refined ConnectionLine to support labeled axis transitions.
 * 2. ANIMATION: Added subtle pulse to dashed lines to indicate "Live Data" flow.
 * 3. STYLE: Synchronized SectionDivider with the "Mothership" clinical aesthetic.
 */

interface ConnectionLineProps {
  label?: string;
  vertical?: boolean;
  dashed?: boolean;
  className?: string;
}

/**
 * 🛰️ CONNECTION LINE
 * Used to define the flow of authority/data between nodal clusters.
 */
export const ConnectionLine: React.FC<ConnectionLineProps> = ({
  label,
  vertical = false,
  dashed = false,
  className = ""
}) => {
  return (
    <div className={`relative flex items-center justify-center ${vertical ? 'flex-col w-px' : 'flex-row h-px'} ${className}`}>
      {/* 🧬 THE LINE SUBSTRATE */}
      <div
        className={`
          ${vertical ? 'h-full w-px' : 'w-full h-px'}
          ${dashed ? 'border-dashed' : 'border-solid'}
          ${vertical ? 'border-l' : 'border-t'}
          border-white/10 relative
        `}
      >
        {/* ⚡ LIVE FLOW ANIMATION: Subtle pulse for dashed lines */}
        {dashed && (
          <div className={`absolute inset-0 bg-cyan-500/20 animate-pulse ${vertical ? 'w-full' : 'h-full'}`} />
        )}
      </div>

      {/* 🔡 LABEL AXIS */}
      {label && (
        <div className={`
          absolute px-3 py-1 bg-[#050505] border border-white/5 rounded-full
          text-[8px] font-mono text-slate-500 uppercase tracking-[0.3em] whitespace-nowrap z-10
          ${vertical ? 'top-1/2 -translate-y-1/2' : 'left-1/2 -translate-x-1/2'}
        `}>
          {label}
        </div>
      )}
    </div>
  );
};

interface SectionDividerProps {
  label: string;
  className?: string;
}

/**
 * 🚥 SECTION DIVIDER
 * Marks transitions between layers (e.g., L0 Sovereign -> L2 Governance).
 */
export const SectionDivider: React.FC<SectionDividerProps> = ({
  label,
  className = ""
}) => {
  return (
    <div className={`w-full flex items-center gap-6 py-8 ${className}`}>
      <div className="h-px flex-1 bg-white/5" />
      <span className="text-[10px] font-mono text-slate-600 uppercase tracking-[0.5em] font-black italic">
        {label}
      </span>
      <div className="h-px flex-1 bg-white/5" />
    </div>
  );
};

/**
 * 📦 SYSTEM BOX (LEGACY ADAPTOR)
 * Provided for backward compatibility with older visualizer drafts.
 * NOTE: Prefer L0SystemBox or L4SystemBox for newer high-density HUDs.
 */
interface SystemBoxProps {
  title: string;
  description: string;
  glyph: string;
  color?: string;
  onClick?: () => void;
}

export const SystemBox: React.FC<SystemBoxProps> = ({ title, description, color = "cyan" }) => (
  <div className={`p-6 bg-black/40 backdrop-blur-md border border-${color}-500/20 rounded-2xl`}>
    <h4 className="text-sm font-black text-white uppercase italic mb-2">{title}</h4>
    <p className="text-[10px] text-slate-500 font-mono uppercase leading-relaxed">{description}</p>
  </div>
);

export default ConnectionLine;