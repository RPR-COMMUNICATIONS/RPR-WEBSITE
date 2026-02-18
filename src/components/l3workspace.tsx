import React from 'react';
import { useTranslation } from 'react-i18next';
import SymbolTile from './icons/symboltile.tsx';
import { ConnectionLine } from './c4-elements.tsx';
import type { NodeData } from '../types/index.ts';

/**
 * TS-Λ3 // L3 THE WORKSHOP [v16.3.0]
 * Path: src/components/l3workspace.tsx
 * Mission: Clinical Node Scaling // HUD Density Optimization
 * Authority: THE OVERWATCH // SG-CANONICAL-2026
 * Fix: Reduced SystemBox scale (p-5, min-h-[85px]) for tighter UI fit.
 * Fix: Scaled connection vectors to h-12 for better vertical economy.
 * Fix: Standardized typography (text-xs/text-[9px]) for component parity.
 * // TS-Λ3: MECHANICAL MODE ONLY – DO NOT CHANGE COPY, ONLY WIRE t('…') KEYS.
 */

// 🧬 EXTENDED TYPE INTERFACE
interface ExtendedNodeData extends NodeData {
  iconFill?: number;
  desc?: string;
}

// 🧬 SOVEREIGN WHITE EDGE GLOW ICON (HYBRID ENGINE LATCH)
const L3GlowIcon: React.FC<{
  name?: string;
  size?: number;
  className?: string;
  iconFill?: number
}> = ({
  name = "help",
  size = 24, // Reduced from 32 for compact fit
  className = "",
  iconFill = 0
}) => {
    const glyphName = name || "help";
    const filterId = `l3-glow-${glyphName.replace(/\s+/g, '-')}-${Math.random().toString(36).substr(2, 9)}`;

    return (
      /* 📐 SCALED: w-8 h-8 -> w-6 h-6 */
      <div className={`relative w-6 h-6 flex items-center justify-center ${className}`}>
        <svg
          viewBox="0 0 64 64"
          className="absolute inset-0 w-full h-full overflow-visible"
          style={{ transform: 'scale(1.4)' }}
        >
          <defs>
            <filter id={filterId} x="-50%" y="-50%" width="200%" height="200%">
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
            x="4" y="4" width="56" height="56" rx="14"
            fill="#000000"
            filter={`url(#${filterId})`}
          />
        </svg>

        <SymbolTile
          glyph={glyphName}
          size={size}
          variant="none"
          glow={false}
          iconFill={iconFill}
          className="relative z-10"
        />
      </div>
    );
  };

// 📦 L3 SYSTEM BOX WRAPPER
const L3SystemBox: React.FC<{
  title: string;
  description: string;
  glyph?: string;
  color?: 'red' | 'purple' | 'cyan' | 'orange';
  onClick?: () => void;
  className?: string;
  isSovereign?: boolean;
  centered?: boolean;
  iconFill?: number;
}> = ({
  title,
  description,
  glyph,
  color = 'cyan',
  onClick,
  className = '',
  isSovereign = false,
  centered = false,
  iconFill = 0
}) => {
    const colorBorders = {
      cyan: 'border-cyan-500/20 hover:border-cyan-500/40',
      orange: 'border-orange-500/20 hover:border-orange-500/40',
      purple: 'border-purple-500/20 hover:border-purple-500/40',
      red: 'border-red-500/20 hover:border-red-500/40',
    };

    const textColors = {
      cyan: 'text-cyan-400',
      orange: 'text-orange-400',
      purple: 'text-purple-400',
      red: 'text-red-400',
    };

    return (
      <div
        onClick={(e) => {
          e.stopPropagation();
          if (onClick) onClick();
        }}
        /* 📐 COMPACT SCALE LATCH: p-5 | min-h-85 | rounded-2xl */
        className={`group p-5 border bg-black/40 backdrop-blur-md rounded-2xl cursor-pointer transition-all duration-500 hover:scale-[1.01] overflow-visible flex flex-col justify-center min-h-[85px] ${isSovereign
          ? 'border-2 border-cyan-500 shadow-[0_0_30px_rgba(34,211,238,0.15)] bg-cyan-950/10'
          : colorBorders[color]
          } ${className}`}
      >
        <div className={`flex items-center gap-6 overflow-visible w-full ${centered ? 'justify-center' : 'justify-between'}`}>
          <div className={`flex flex-col gap-1 ${centered ? 'items-center text-center' : ''}`}>
            {/* 🔡 REDUCED: text-sm -> text-xs */}
            <div className={`text-xs font-black uppercase tracking-[0.15em] italic leading-tight ${isSovereign ? 'text-white' : textColors[color]}`}>
              {title}
            </div>
            {/* 🔡 REDUCED: text-[10px] -> text-[9px] */}
            <div className="text-[9px] font-mono uppercase tracking-widest text-slate-500 opacity-80 group-hover:opacity-100 transition-opacity">
              {description}
            </div>
          </div>
          <L3GlowIcon
            name={glyph}
            iconFill={iconFill}
            className="group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      </div>
    );
  };

export const L3TheWorkspace: React.FC<{ onNodeClick: (node: NodeData) => void }> = ({ onNodeClick }) => {
  const { t } = useTranslation('harborA');

  const nodes: Record<string, ExtendedNodeData> = {
    labs: {
      id: 'ws-labs',
      name: 'THE LABS',
      type: 'STRATEGY & CREATIVE PLANNING',
      layer: 'L3',
      glyph: 'science',
      description: 'The human strategy and creative team turning briefs into clear stories and visual directions.',
      desc: 'The human strategy and creative team turning briefs into clear stories and visual directions.'
    },
    forge: {
      id: 'ws-forge',
      name: 'THE FORGE',
      type: 'BUILD & LAUNCH WORKSHOP',
      layer: 'L3',
      glyph: 'precision_manufacturing',
      description: 'The build team writing documents, updating code, and shipping changes to the substrate.',
      desc: 'The build team writing documents, updating code, and shipping changes to the substrate.'
    },
    departments: {
      id: 'ws-departments',
      name: 'DEPARTMENTS',
      type: 'SUPPORT (LEGAL / FINANCE / HR)',
      layer: 'L3',
      glyph: 'business',
      description: 'Virtual support teams keeping the business compliant, organised, and ready to scale.',
      desc: 'Virtual support teams keeping the business compliant, organised, and ready to scale.'
    },
    daedalus: {
      id: 'ws-daedalus',
      name: 'DAEDALUS',
      type: 'PRODUCT ONBOARDING GUIDE',
      layer: 'L3',
      glyph: 'robot',
      iconFill: 1,
      description: 'At L3, Daedalus is a backend worker inside THE WORKSHOP. It is the engine that connects what happens in day‑to‑day operations to better agents, better playbooks, and sharper contracts over time.',
      desc: 'At L3, Daedalus is a backend worker inside THE WORKSHOP. It is the engine that connects what happens in day‑to‑day operations to better agents, better playbooks, and sharper contracts over time.'
    },
    ollie: {
      id: 'ws-ollie',
      name: 'OLLIE',
      type: 'AGENCY ONBOARDING ASSISTANT',
      layer: 'L3',
      glyph: 'smart_toy',
      description: 'The guide for partner integration standardizing communication across the Forge.',
      desc: 'The guide for partner integration standardizing communication across the Forge.'
    }
  };

  return (
    <div className="h-full p-8 flex flex-col items-center overflow-y-auto custom-scrollbar bg-black/20 rounded-3xl">

      <header className="mb-10 border-l-2 border-cyan-500 pl-6 self-start w-full max-w-4xl">
        <h2 className="text-xl font-black text-white italic uppercase tracking-tighter mb-1">
          {t('visualizer.tabs.l3', 'THE WORKSHOP')}
        </h2>
        <p className="text-[9px] text-slate-500 font-mono uppercase tracking-[0.4em] font-bold italic">
          EXECUTION LAYER // INTEL INTAKE FROM THE LIBRARY
        </p>
      </header>

      <div className="w-full max-w-4xl flex flex-col items-center select-none">

        {/* 🛠️ PRIMARY EXECUTION TIER */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-stretch">
          <L3SystemBox
            title={nodes.labs.name}
            description={nodes.labs.type}
            glyph={nodes.labs.glyph}
            color="orange"
            onClick={() => onNodeClick(nodes.labs)}
          />
          <L3SystemBox
            title={nodes.forge.name}
            description={nodes.forge.type}
            glyph={nodes.forge.glyph}
            color="orange"
            onClick={() => onNodeClick(nodes.forge)}
          />
          <L3SystemBox
            title={nodes.departments.name}
            description={nodes.departments.type}
            glyph={nodes.departments.glyph}
            color="orange"
            onClick={() => onNodeClick(nodes.departments)}
          />
        </div>

        <ConnectionLine label="ONBOARDING & INTEGRATION BRIDGE" vertical={true} dashed={true} className="h-12" />

        {/* 🛰️ SPECIALIST SUPPORT TIER */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
          <L3SystemBox
            title={nodes.daedalus.name}
            description={nodes.daedalus.type}
            glyph={nodes.daedalus.glyph}
            color="cyan"
            iconFill={nodes.daedalus.iconFill}
            onClick={() => onNodeClick(nodes.daedalus)}
          />
          <L3SystemBox
            title={nodes.ollie.name}
            description={nodes.ollie.type}
            glyph={nodes.ollie.glyph}
            color="purple"
            onClick={() => onNodeClick(nodes.ollie)}
            className="border-dashed"
          />
        </div>

        <div className="mt-16 opacity-20 select-none text-center">
          <span className="text-[8px] font-mono text-slate-500 uppercase tracking-[0.8em]">
            WORKSHOP_EXECUTION_v16.3.0 // SOVEREIGN_L3
          </span>
        </div>
      </div>
    </div>
  );
};

export default L3TheWorkspace;