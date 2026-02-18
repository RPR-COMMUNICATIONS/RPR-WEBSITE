import React from 'react';
import { useTranslation } from 'react-i18next';
import SymbolTile from './icons/symboltile.tsx';
import { ConnectionLine } from './c4-elements.tsx';
import type { NodeData } from '../types/index.ts';

/**
 * TS-Λ3 // L2 THE ELDERS [v9.3.1]
 * Path: src/components/l2theelders.tsx
 * Mission: Resolve TS2304 Syntax Failure // Mechanical Logic Latch
 * Authority: THE OVERWATCH // SG-CANONICAL-2026
 * Fix: Corrected JSX comment placement in L2GlowIcon to restore compiler stability.
 * Fix: Standardized vertical vectors to h-12 for high-density HUD fit.
 * Status: LATCHED // MECHANICAL_MODE_ACTIVE
 * // TS-Λ3: MECHANICAL MODE ONLY – DO NOT CHANGE COPY, ONLY WIRE t('…') KEYS.
 */

// 🧬 EXTENDED TYPE INTERFACE
interface ExtendedNodeData extends NodeData {
  iconFill?: number;
  desc?: string;
}

// 🧬 SOVEREIGN WHITE EDGE GLOW ICON (HYBRID ENGINE LATCH)
const L2GlowIcon: React.FC<{
  name?: string;
  size?: number;
  className?: string;
  iconFill?: number
}> = ({
  name = "help",
  size = 24,
  className = "",
  iconFill = 0
}) => {
    const glyphName = name || "help";
    const filterId = `l2-glow-${glyphName.replace(/\s+/g, '-')}-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div className={`relative w-6 h-6 flex items-center justify-center ${className}`}>
        {/* 📐 SCALED: w-8 h-8 -> w-6 h-6 [Comment moved inside to resolve TS2657] */}
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

// 📦 L2 SYSTEM BOX WRAPPER
const L2SystemBox: React.FC<{
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
            <div className={`text-xs font-black uppercase tracking-[0.15em] italic leading-tight ${isSovereign ? 'text-white' : textColors[color]}`}>
              {title}
            </div>
            <div className="text-[9px] font-mono uppercase tracking-widest text-slate-500 opacity-80 group-hover:opacity-100 transition-opacity">
              {description}
            </div>
          </div>
          <L2GlowIcon
            name={glyph}
            iconFill={iconFill}
            className="group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      </div>
    );
  };

interface L2Props {
  onNodeClick: (node: NodeData) => void;
}

export const L2TheElders: React.FC<L2Props> = ({ onNodeClick }) => {
  const { t } = useTranslation('harborA');

  const nodes: Record<string, ExtendedNodeData> = {
    sentinel: {
      id: 'elder-sentinel',
      name: 'THE SENTINEL',
      type: 'GOVERNANCE ADVISOR // THE ROOK',
      layer: 'L2',
      glyph: 'chess_rook',
      description: 'Reads and interprets the protocol, watching for behavior drift across agent substrates.',
      desc: 'Reads and interprets the protocol, watching for behavior drift across agent substrates.'
    },
    architect: {
      id: 'elder-architect',
      name: 'THE ARCHITECT',
      type: 'PERPLEXITY ENGINE // THE BISHOP',
      layer: 'L2',
      glyph: 'chess_bishop',
      description: 'Designs agent roles, success metrics, and structural flows across conceptual substrates.',
      desc: 'Designs agent roles, success metrics, and structural flows across conceptual substrates.'
    },
    engineer: {
      id: 'elder-engineer',
      name: 'THE ENGINEER',
      type: 'GEMINI ENGINE // THE KNIGHT',
      layer: 'L2',
      glyph: 'chess_knight',
      description: 'Tactical maneuvering turning strategy into code, infrastructure, and automation.',
      desc: 'Tactical maneuvering turning strategy into code, infrastructure, and automation.'
    },
    library: {
      id: 'elder-library',
      name: 'THE LIBRARY',
      type: 'CORE INTEL SUBSTRATE // THE MUSEUM',
      layer: 'L2',
      glyph: 'hub',
      iconFill: 1,
      description: 'The Library is the Mothership OS knowledgebase—a living map of how the system actually works. It stores the playbooks, PRDs, architecture diagrams, and IP manifests that capture “how we solved this before” across industries, products, and tenants.',
      desc: 'The Library is the Mothership OS knowledgebase—a living map of how the system actually works. It stores the playbooks, PRDs, architecture diagrams, and IP manifests that capture “how we solved this before” across industries, products, and tenants.'
    }
  };

  return (
    <div className="h-full p-8 flex flex-col items-center overflow-y-auto custom-scrollbar bg-black/20 rounded-3xl">

      <header className="mb-10 border-l-2 border-cyan-500 pl-6 self-start w-full max-w-4xl">
        <h2 className="text-xl font-black text-white italic uppercase tracking-tighter mb-1">
          {t('visualizer.tabs.l2', 'THE ELDERS')}
        </h2>
        <p className="text-[9px] text-slate-500 font-mono uppercase tracking-[0.4em] font-bold italic">
          THE SENTINEL PROTOCOL // ONE UNIFIED VOICE
        </p>
      </header>

      <div className="w-full max-w-4xl flex flex-col items-center select-none">

        {/* 🏰 TIER 01: THE SENTINEL */}
        <L2SystemBox
          title={nodes.sentinel.name}
          description={nodes.sentinel.type}
          glyph={nodes.sentinel.glyph}
          color="cyan"
          centered={true}
          onClick={() => onNodeClick(nodes.sentinel)}
          className="w-full max-w-md"
        />

        <ConnectionLine label="STRATEGIC ALIGNMENT" vertical={true} dashed={true} className="h-12" />

        {/* ♟️ TIER 02: THE TRIAD BODY */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <L2SystemBox
            title={nodes.architect.name}
            description={nodes.architect.type}
            glyph={nodes.architect.glyph}
            color="purple"
            onClick={() => onNodeClick(nodes.architect)}
          />
          <L2SystemBox
            title={nodes.engineer.name}
            description={nodes.engineer.type}
            glyph={nodes.engineer.glyph}
            color="purple"
            onClick={() => onNodeClick(nodes.engineer)}
          />
        </div>

        <ConnectionLine label="BIDIRECTIONAL INTEL SYNC" vertical={true} dashed={true} className="h-12" />

        {/* 🏛️ TIER 03: THE LIBRARY */}
        <L2SystemBox
          title={nodes.library.name}
          description={nodes.library.type}
          glyph={nodes.library.glyph}
          iconFill={nodes.library.iconFill}
          color="orange"
          centered={true}
          onClick={() => onNodeClick(nodes.library)}
          className="w-full max-w-md border-dashed"
        />

        <div className="mt-16 opacity-20 select-none text-center">
          <span className="text-[8px] font-mono text-slate-500 uppercase tracking-[0.8em]">
            KNOWLEDGE_LATCH_ACTIVE // SOVEREIGN_L2 // v9.3.1
          </span>
        </div>
      </div>
    </div>
  );
};

export default L2TheElders;