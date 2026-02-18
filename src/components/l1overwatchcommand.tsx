import React from 'react';
import { useTranslation } from 'react-i18next';
import SymbolTile from './icons/symboltile.tsx';
import { ConnectionLine } from './c4-elements.tsx';
import type { NodeData } from '../types/index.ts';

/**
 * TS-Λ3 // L1 COMMAND PLANE [v23.5.1]
 * Path: src/components/l1overwatchcommand.tsx
 * Mission: Clinical Node Scaling // Forensic Narrative Restoration
 * Authority: THE OVERWATCH // SG-CANONICAL-2026
 * Fix: Maintained compact SystemBox scale (p-5, min-h-[85px]).
 * Fix: Restored full-length forensic descriptions for orchestration nodes.
 * Fix: Synchronized with L1Props interface and Master NodeData substrate.
 */

// 🧬 EXTENDED TYPE INTERFACE
interface ExtendedNodeData extends NodeData {
  iconFill?: number;
}

// 🧬 SOVEREIGN WHITE EDGE GLOW ICON (HYBRID ENGINE LATCH)
const L1GlowIcon: React.FC<{
  name?: string;
  size?: number;
  className?: string;
  iconFill?: number
}> = ({
  name = "help",
  size = 24, // Optimized for high-density fit
  className = "",
  iconFill = 0
}) => {
    const filterId = `l1-glow-${name.replace(/\s+/g, '-')}-${Math.random().toString(36).substr(2, 9)}`;

    return (
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
          glyph={name}
          size={size}
          variant="none"
          glow={false}
          color="#FFFFFF"
          iconFill={iconFill}
          className="relative z-10"
        />
      </div>
    );
  };

// 📦 L1 SYSTEM BOX WRAPPER
const L1SystemBox: React.FC<{
  title: string;
  description: string;
  glyph?: string;
  color?: 'red' | 'purple' | 'cyan' | 'orange';
  onClick?: () => void;
  className?: string;
  isSovereign?: boolean;
  iconFill?: number;
}> = ({
  title,
  description,
  glyph,
  color = 'cyan',
  onClick,
  className = '',
  isSovereign = false,
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
        <div className="flex items-center justify-between gap-6 overflow-visible w-full">
          <div className="flex flex-col gap-1">
            <div className={`text-xs font-black uppercase tracking-[0.15em] italic leading-tight ${isSovereign ? 'text-white' : textColors[color]}`}>
              {title}
            </div>
            <div className="text-[9px] font-mono uppercase tracking-widest text-slate-500 opacity-80 group-hover:opacity-100 transition-opacity line-clamp-1">
              {description}
            </div>
          </div>
          <L1GlowIcon
            name={glyph}
            iconFill={iconFill}
            className="group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      </div>
    );
  };

interface L1Props {
  onNodeClick: (node: NodeData) => void;
}

export const L1OverwatchCommand: React.FC<L1Props> = ({ onNodeClick }) => {
  const { t } = useTranslation('harborA');

  const nodes: Record<string, ExtendedNodeData> = {
    legal: {
      id: 'l1-legal',
      name: 'RPR COMMUNICATIONS LLC',
      type: 'LEGAL ROOT • PARENT ENTITY',
      layer: 'L1',
      glyph: 'business',
      description: 'The primary legal corporate entity holding the sovereign root. All operational logic and AI orchestration within the Mothership are technically and legally subordinate to this entity.',
    },
    human: {
      id: 'l1-human',
      name: 'THE OVERWATCH',
      type: 'SOLE HUMAN DECISION AUTHORITY',
      layer: 'L1',
      glyph: 'skull',
      description: 'The final human decision authority and owner. Overwatch acts as the sovereign governance origin for all technical missions.',
    },
    command: {
      id: 'l1-command',
      name: 'PERPLEXITY COMMAND',
      type: 'ARCHITECT / ORCHESTRATOR CONSOLE',
      layer: 'L1',
      glyph: 'terminal',
      description: 'Delegated intelligence layer for the Human–AI Framework. Receives high‑level intent from OVERWATCH, then coordinates Architect, Engineer and Sentinel Protocol lanes so that strategy, implementation, and governance stay aligned. It does not execute tasks itself; it keeps the whole stack coherent, auditable, and within RAM.',
    },
    sentinelProtocol: {
      id: 'l1-sentinel-protocol',
      name: 'THE SENTINEL PROTOCOL',
      type: 'GOVERNANCE & ROUTING STANDARD',
      layer: 'L1',
      glyph: 'all_inclusive',
      iconFill: 1,
      description: 'The Sentinel Protocol is the governance and routing standard for the whole system. It defines how every human request and AI action is authenticated and authorised under RAM and RBAC, routed to the right models, tools, or workflows based on mission, risk, and domain, wrapped in timecode and spatial context, and logged as GovernanceSessions so C-STRIDE can measure drift, performance, and real value created over time.',
    },
    daedalus: {
      id: 'l1-daedalus',
      name: 'DAEDALUS',
      type: 'GOVERNANCE FEEDBACK BRIDGE',
      layer: 'L1',
      glyph: 'robot',
      iconFill: 1,
      description: 'At L1, Daedalus is a Governance Feedback Bridge. It observes human behaviour and AI outcomes, turning decisions (PROCEED / VETO / REVISE) into structured learning signals and training data proposals. It helps the Elders and Overwatch see which patterns are succeeding without ever editing system constraints directly.',
    }
  };

  return (
    <div className="h-full p-8 flex flex-col items-center overflow-y-auto custom-scrollbar bg-black/20 rounded-3xl">

      <header className="mb-10 border-l-2 border-cyan-500 pl-6 w-full max-w-4xl self-start">
        <h2 className="text-xl font-black text-white italic uppercase tracking-tighter mb-1">
          {t('visualizer.l1.title', 'THE COMMAND PLANE')}
        </h2>
        <p className="text-[9px] text-slate-500 font-mono uppercase tracking-[0.4em] font-bold italic">
          HUMAN STEERING // SOVEREIGN GOVERNANCE
        </p>
      </header>

      <div className="flex flex-col items-center w-full max-w-4xl select-none">

        <L1SystemBox
          title={nodes.legal.name}
          description={nodes.legal.type}
          color="orange"
          glyph={nodes.legal.glyph}
          onClick={() => onNodeClick(nodes.legal)}
          className="w-full max-w-md"
        />

        <ConnectionLine label="SOVEREIGN ROOT" vertical={true} dashed={true} className="h-12" />

        <L1SystemBox
          title={nodes.human.name}
          description={nodes.human.type}
          isSovereign={true}
          glyph={nodes.human.glyph}
          onClick={() => onNodeClick(nodes.human)}
          className="w-full max-w-md"
        />

        <ConnectionLine label="DELEGATES INTENT" vertical={true} dashed={true} className="h-12" />

        {/* TIER 03: ORCHESTRATION MATRIX (TRIAD) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-stretch">
          <L1SystemBox
            title={nodes.command.name}
            description={nodes.command.type}
            color="purple"
            glyph={nodes.command.glyph}
            onClick={() => onNodeClick(nodes.command)}
            className="w-full border-dashed"
          />
          <L1SystemBox
            title={nodes.sentinelProtocol.name}
            description={nodes.sentinelProtocol.type}
            color="cyan"
            glyph={nodes.sentinelProtocol.glyph}
            iconFill={nodes.sentinelProtocol.iconFill}
            onClick={() => onNodeClick(nodes.sentinelProtocol)}
            className="w-full"
          />
          <L1SystemBox
            title={nodes.daedalus.name}
            description={nodes.daedalus.type}
            color="purple"
            glyph={nodes.daedalus.glyph}
            iconFill={nodes.daedalus.iconFill}
            onClick={() => onNodeClick(nodes.daedalus)}
            className="w-full"
          />
        </div>

        <div className="mt-16 opacity-20 select-none text-center">
          <span className="text-[8px] font-mono text-slate-500 uppercase tracking-[0.5em]">
            INTENT_DECOUPLING_ZONE // SOVEREIGN_LATCHED
          </span>
        </div>
      </div>
    </div>
  );
};

export default L1OverwatchCommand;