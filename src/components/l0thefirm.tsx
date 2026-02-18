import React from 'react';
import { useTranslation } from 'react-i18next';
import type { NodeData } from '../types/index.ts';
import { ConnectionLine, SectionDivider } from './c4-elements.tsx';
import SymbolTile from './icons/symboltile.tsx';

/**
 * TS-Λ3 // VISUALIZER L0 [v7.11.0]
 * Path: src/components/l0thefirm.tsx
 * Mission: Clinical Node Scaling // HUD Density Optimization
 * Authority: THE OVERWATCH // SG-CANONICAL-2026
 * Fix: Reduced SystemBox scale (p-5, min-h-[85px]) for tighter UI fit.
 */

interface ExtendedNodeData extends NodeData {
  iconFill?: number;
  desc?: string;
}

const L0GlowIcon: React.FC<{
  name?: string;
  size?: number;
  className?: string;
  iconFill?: number
}> = ({
  name = "help",
  size = 24, // Reduced from 32
  className = "",
  iconFill = 0
}) => {
    const glyphName = name || "help";
    const filterId = `l0-glow-${glyphName.replace(/\s+/g, '-')}-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div className={`relative w-6 h-6 flex items-center justify-center ${className}`}>
        <svg viewBox="0 0 64 64" className="absolute inset-0 w-full h-full overflow-visible" style={{ transform: 'scale(1.4)' }}>
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
          <rect x="4" y="4" width="56" height="56" rx="14" fill="#000000" filter={`url(#${filterId})`} />
        </svg>
        <SymbolTile glyph={glyphName} size={size} variant="none" glow={false} iconFill={iconFill} className="relative z-10" />
      </div>
    );
  };

const L0SystemBox: React.FC<{
  title: string;
  description: string;
  glyph?: string;
  color?: 'red' | 'purple' | 'cyan' | 'orange';
  onClick?: () => void;
  className?: string;
  isSovereign?: boolean;
  centered?: boolean;
  iconFill?: number;
}> = ({ title, description, glyph, color = 'cyan', onClick, className = '', isSovereign = false, centered = false, iconFill = 0 }) => {
  const colorBorders = {
    cyan: 'border-cyan-500/20 hover:border-cyan-500/40',
    orange: 'border-orange-500/20 hover:border-orange-500/40',
    purple: 'border-purple-500/20 hover:border-purple-500/40',
    red: 'border-red-500/20 hover:border-red-500/40'
  };
  const textColors = {
    cyan: 'text-cyan-400',
    orange: 'text-orange-400',
    purple: 'text-purple-400',
    red: 'text-red-400'
  };

  return (
    <div
      onClick={(e) => { e.stopPropagation(); if (onClick) onClick(); }}
      /* 📐 SCALED: p-8 -> p-5 | min-h-110 -> min-h-85 | rounded-2.5rem -> rounded-2xl */
      className={`group p-5 border bg-black/40 backdrop-blur-md rounded-2xl cursor-pointer transition-all duration-500 hover:scale-[1.01] flex flex-col justify-center min-h-[85px] ${isSovereign ? 'border-2 border-cyan-500 shadow-[0_0_30px_rgba(34,211,238,0.15)] bg-cyan-950/10' : colorBorders[color]} ${className}`}
    >
      <div className={`flex items-center gap-4 w-full ${centered ? 'justify-center' : 'justify-between'}`}>
        <div className={`flex flex-col gap-1 ${centered ? 'items-center text-center' : ''}`}>
          <div className={`text-xs font-black uppercase tracking-[0.15em] italic leading-tight ${isSovereign ? 'text-white' : textColors[color]}`}>
            {title}
          </div>
          <div className="text-[9px] font-mono uppercase tracking-widest text-slate-500 opacity-80 group-hover:opacity-100 transition-opacity">
            {description}
          </div>
        </div>
        <L0GlowIcon name={glyph} iconFill={iconFill} className="group-hover:scale-110 transition-transform duration-500" />
      </div>
    </div>
  );
};

export const L0TheFirm: React.FC<{ onNodeClick: (node: NodeData) => void; onClose: () => void }> = ({ onNodeClick, onClose }) => {
  const { t } = useTranslation('harborA');

  const nodes: Record<string, ExtendedNodeData> = {
    overwatch: { id: 'l0-overwatch', name: 'THE OVERWATCH', type: 'SOLE HUMAN DECISION AUTHORITY', layer: 'L0', glyph: 'skull', description: 'The final human decision authority and owner.' },
    elders: { id: 'l0-elders', name: 'THE ELDERS', type: 'GOVERNANCE COUNCIL', layer: 'L2', glyph: 'all_inclusive', description: 'An interpretative governance council that helps the Founder apply RAM in practice.' },
    library: { id: 'l0-library', name: 'THE LIBRARY', type: 'KNOWLEDGEBASE SUBSTRATE', layer: 'L2', glyph: 'hub', iconFill: 1, description: 'A living map of what we know and how we work.' },
    workshop: { id: 'l0-workshop', name: 'THE WORKSHOP', type: 'BUILD SUBSTRATE', layer: 'L3', glyph: 'workspaces', description: 'Engineering labs where specialist logic is forged.' },
    campaigns: { id: 'l0-campaigns', name: 'CAMPAIGNS', type: 'AGENCY CORE BUSINESS', layer: 'L4', glyph: 'rocket_launch', description: 'Core Strategic, Creative, and Brand Activation services.' },
    products: { id: 'l0-products', name: 'PRODUCTS', type: 'COMMERCIAL INSTANCES', layer: 'L4', glyph: 'shop', description: 'Sovereign commercial software instances like MYΛUDIT and RPR VERIFY.' },
    solutions: { id: 'l0-solutions', name: 'SOLUTIONS', type: 'THE LABYRINTH SUITE', layer: 'L4', glyph: 'subscriptions', description: 'Specialized subscription models powered by governed learning.' }
  };

  return (
    <div className="h-full p-8 flex flex-col items-center overflow-y-auto custom-scrollbar bg-black/20 rounded-3xl">
      <header className="mb-10 border-l-2 border-cyan-500 pl-6 self-start w-full max-w-4xl">
        <h2 className="text-xl font-black text-white italic uppercase tracking-tighter mb-1">
          {t('visualizer.tabs.l0', 'THE FIRM')}
        </h2>
        <p className="text-[9px] text-slate-500 font-mono uppercase tracking-[0.4em] font-bold italic">
          ORGANIZATIONAL STRUCTURE // SOVEREIGN_MAP
        </p>
      </header>

      <div className="w-full max-w-4xl flex flex-col items-center gap-10 select-none">
        {/* TIER 01: SOVEREIGN AUTHORITY */}
        <div className="flex flex-col items-center gap-4 w-full">
          <SectionDivider label="L0 · SOVEREIGN AUTHORITY" />
          <L0SystemBox
            title={nodes.overwatch.name}
            description={nodes.overwatch.type}
            glyph={nodes.overwatch.glyph}
            isSovereign={true}
            onClick={() => onNodeClick(nodes.overwatch)}
            className="w-full max-w-md"
          />
        </div>

        {/* TIER 02: GOVERNANCE & KNOWLEDGE */}
        <div className="flex flex-col items-center gap-4 w-full">
          <SectionDivider label="L2 · GOVERNANCE & KNOWLEDGE" />
          <ConnectionLine vertical dashed className="h-12" />
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full">
            <L0SystemBox
              title={nodes.elders.name}
              description={nodes.elders.type}
              glyph={nodes.elders.glyph}
              color="cyan"
              onClick={() => onNodeClick(nodes.elders)}
              className="flex-1 w-full"
            />
            <div className="hidden md:block w-16">
              <ConnectionLine vertical={false} dashed={true} className="w-full" />
            </div>
            <L0SystemBox
              title={nodes.library.name}
              description={nodes.library.type}
              glyph={nodes.library.glyph}
              iconFill={nodes.library.iconFill}
              color="cyan"
              onClick={() => onNodeClick(nodes.library)}
              className="flex-1 w-full"
            />
          </div>
        </div>

        {/* TIER 03: BUILD SUBSTRATE */}
        <div className="flex flex-col items-center gap-4 w-full">
          <SectionDivider label="L3 · THE WORKSHOP" />
          <ConnectionLine vertical={true} dashed={true} className="h-12" />
          <L0SystemBox
            title={nodes.workshop.name}
            description={nodes.workshop.type}
            glyph={nodes.workshop.glyph}
            color="cyan"
            onClick={() => onNodeClick(nodes.workshop)}
            className="w-full max-w-md"
          />
        </div>

        {/* TIER 04: EXECUTION UNITS */}
        <div className="flex flex-col items-center gap-4 w-full">
          <SectionDivider label="L4 · SPECIALIST INSTANCES" />
          <ConnectionLine vertical={true} dashed={true} className="h-12" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-stretch">
            <L0SystemBox
              title={nodes.campaigns.name}
              description={nodes.campaigns.type}
              glyph={nodes.campaigns.glyph}
              color="orange"
              centered={true}
              onClick={() => onNodeClick(nodes.campaigns)}
              className="w-full"
            />
            <L0SystemBox
              title={nodes.products.name}
              description={nodes.products.type}
              glyph={nodes.products.glyph}
              color="purple"
              centered={true}
              onClick={() => onNodeClick(nodes.products)}
              className="w-full"
            />
            <L0SystemBox
              title={nodes.solutions.name}
              description={nodes.solutions.type}
              glyph={nodes.solutions.glyph}
              color="red"
              centered={true}
              onClick={() => onNodeClick(nodes.solutions)}
              className="w-full"
            />
          </div>
        </div>
      </div>

      <div className="mt-16 flex items-center gap-8">
        <button
          onClick={(e) => { e.stopPropagation(); onClose(); }}
          className="text-[9px] font-mono text-slate-600 hover:text-cyan-400 uppercase tracking-widest transition-colors"
        >
          [ RESET_L0_VIEW ]
        </button>
      </div>
    </div>
  );
};

export default L0TheFirm;