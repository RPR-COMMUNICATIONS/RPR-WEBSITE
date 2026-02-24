import React from 'react';
import { useTranslation } from 'react-i18next';
import SymbolTile from './icons/symboltile.tsx';

// 🛡️ BRAND ASSETS (NAMED EXPORTS)
import { MyAuditLogo } from '../brand/myauditlogo.tsx';
import { RprVerifyLogo } from '../brand/rprverifylogo.tsx';

import type { NodeData } from '../types/index.ts';

/**
 * TS-Λ3 // L4 PRODUCTS [v21.1.0]
 * Path: src/components/l4products.tsx
 * Mission: Clinical Node Scaling // HUD Density Optimization
 * Authority: THE OVERWATCH // SG-CANONICAL-2026
 * Updates:
 * 1. SCALE: Reduced SystemBox scale (p-5, min-h-[85px]) for vertical economy.
 * 2. TYPO: Standardized typography (text-xs/text-[9px]) for component parity.
 * 3. GLYPH: Scaled L4GlowIcon containers to match L0-L3 (w-6 h-6).
 * 4. i18n: Wired t('...') keys for authoritative content localization.
 */

type L4Color = 'cyan' | 'orange' | 'purple' | 'red';

// 🧬 LOCAL TYPE HARDENING
interface L4Node extends Omit<NodeData, 'glyph'> {
  glyph?: string;
  logo?: React.ReactNode;
  iconFill?: number;
  desc?: string;
}

interface L4GlowIconProps {
  name?: string;
  logo?: React.ReactNode;
  size?: number;
  className?: string;
  noContainer?: boolean;
  color?: L4Color;
  iconFill?: number;
}

const L4GlowIcon: React.FC<L4GlowIconProps> = ({
  name,
  logo,
  size = 24,
  className = "",
  noContainer = false,
  color = 'cyan',
  iconFill = 0
}) => {
  const filterId = React.useMemo(() => `l4-glow-${Math.random().toString(36).substr(2, 9)}`, []);

  const glowColors: Record<L4Color, string> = {
    cyan: "#22d3ee",
    orange: "#f97316",
    purple: "#a855f7",
    red: "#ef4444"
  };

  return (
    <div className={`relative w-6 h-6 flex items-center justify-center overflow-visible ${className}`}>
      {!noContainer && (
        <svg viewBox="0 0 64 64" className="absolute inset-0 w-full h-full overflow-visible" style={{ transform: 'scale(1.4)' }}>
          <defs>
            <filter id={filterId} x="-50%" y="-50%" width="200%" height="200%">
              <feFlood floodColor={glowColors[color]} floodOpacity="0.8" result="flood" />
              <feComposite in="flood" in2="SourceAlpha" operator="in" result="mask" />
              <feGaussianBlur in="mask" stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <rect x="4" y="4" width="56" height="56" rx="14.4" fill="#000000" filter={`url(#${filterId})`} />
        </svg>
      )}
      <div className={`relative z-10 w-full h-full flex items-center justify-center transition-transform duration-500 ${noContainer ? 'scale-125' : 'scale-75'}`}>
        {logo || <SymbolTile glyph={name || "science"} size={size} variant="none" glow={false} color="#FFFFFF" iconFill={iconFill} />}
      </div>
    </div>
  );
};

interface L4SystemBoxProps {
  title?: string;
  description?: string;
  glyph?: string;
  logo?: React.ReactNode;
  color?: L4Color;
  onClick: () => void;
  className?: string;
  isBrand?: boolean;
  iconFill?: number;
}

const L4SystemBox: React.FC<L4SystemBoxProps> = ({
  title,
  description,
  glyph,
  logo,
  color = 'cyan',
  onClick,
  className = '',
  isBrand = false,
  iconFill = 0
}) => {
  const colorBorders: Record<L4Color, string> = {
    cyan: 'border-cyan-500/20 hover:border-cyan-500/40 hover:bg-cyan-500/5',
    orange: 'border-orange-500/20 hover:border-orange-500/40 hover:bg-orange-500/5',
    purple: 'border-purple-500/20 hover:border-purple-500/40 hover:bg-purple-500/5',
    red: 'border-red-500/20 hover:border-red-500/40 hover:bg-red-500/5',
  };

  const textColors: Record<L4Color, string> = {
    cyan: 'text-cyan-400',
    orange: 'text-orange-400',
    purple: 'text-purple-400',
    red: 'text-red-400',
  };

  const isPureAsset = !title && !description;

  return (
    <div
      onClick={onClick}
      className={`group p-5 border bg-black/40 backdrop-blur-md rounded-2xl cursor-pointer transition-all duration-500 hover:scale-[1.01] flex flex-col justify-center min-h-[85px] ${colorBorders[color]} ${className}`}
    >
      <div className={`flex items-center gap-6 overflow-visible w-full ${isPureAsset ? 'justify-center' : 'justify-between'}`}>
        {!isPureAsset && (
          <div className="flex flex-col gap-1 items-start text-left">
            {title && <div className={`text-xs font-black uppercase italic tracking-[0.15em] leading-tight ${textColors[color]}`}>{title}</div>}
            {description && <div className="text-[9px] font-mono uppercase tracking-widest text-slate-500 opacity-80 group-hover:opacity-100 transition-opacity line-clamp-1">{description}</div>}
          </div>
        )}
        <L4GlowIcon name={glyph} logo={logo} noContainer={isBrand} color={color} iconFill={iconFill} />
      </div>
    </div>
  );
};

export const L4Products: React.FC<{ onNodeClick: (node: NodeData) => void }> = ({ onNodeClick }) => {
  const { t } = useTranslation();

  const segments: { id: string; title: string; kicker: string; color: L4Color; nodes: L4Node[] }[] = [
    {
      id: 'campaigns',
      title: t('visualizer.l4.segments.campaigns.title', 'CAMPAIGNS'),
      kicker: t('visualizer.l4.segments.campaigns.kicker', 'AGENCY_CORE'),
      color: 'orange',
      nodes: [
        {
          id: 'instance-strategic-activation',
          name: t('visualizer.l4.nodes.strategic_activation.name', 'STRATEGIC ACTIVATION'),
          type: t('visualizer.l4.nodes.strategic_activation.type', 'AGENCY SERVICE'),
          layer: 'L4',
          glyph: 'rocket_launch',
          description: t('visualizer.l4.nodes.strategic_activation.desc', 'Core Strategic, Creative, and Brand Activation services using our AI-led business units to move the needle in the real world.'),
        }
      ]
    },
    {
      id: 'products',
      title: t('visualizer.l4.segments.products.title', 'PRODUCTS'),
      kicker: t('visualizer.l4.segments.products.kicker', 'INSTANCES'),
      color: 'purple',
      nodes: [
        {
          id: 'instance-myaudit',
          name: 'MYΛUDIT',
          type: t('visualizer.l4.nodes.myaudit.type', 'AI ACCOUNTING'),
          layer: 'L4',
          logo: <MyAuditLogo />,
          description: t('visualizer.l4.nodes.myaudit.desc', 'MYΛUDIT A CLOUD-BASED AI ACCOUNTING & TAX AUTOMATION SYSTEM.'),
        },
        {
          id: 'instance-verify',
          name: 'RPR VERIFY',
          type: t('visualizer.l4.nodes.verify.type', 'COMPLIANCE ENGINE'),
          layer: 'L4',
          logo: <RprVerifyLogo />,
          description: t('visualizer.l4.nodes.verify.desc', 'Intelligent onboarding solution for Australian businesses.'),
        }
      ]
    },
    {
      id: 'solutions',
      title: t('visualizer.l4.segments.solutions.title', 'SOLUTIONS'),
      kicker: t('visualizer.l4.segments.solutions.kicker', 'SUBSCRIPTIONS'),
      color: 'red',
      nodes: [
        {
          id: 'instance-labyrinth',
          name: t('visualizer.l4.nodes.labyrinth.name', 'THE LABYRINTH'),
          type: t('visualizer.l4.nodes.labyrinth.type', 'ARCHITECTURE'),
          layer: 'L4',
          glyph: 'dashboard_2_gear',
          description: t('visualizer.l4.nodes.labyrinth.desc', 'THE LABYRINTH: The definitive industry-specific subscription model.'),
        },
        {
          id: 'instance-daedalus',
          name: t('visualizer.l4.nodes.daedalus.name', 'DAEDALUS'),
          type: t('visualizer.l4.nodes.daedalus.type', 'LEARNING ENGINE'),
          layer: 'L4',
          glyph: 'robot',
          iconFill: 1,
          description: t('visualizer.l4.nodes.daedalus.desc', 'The Mothership OS back-end orchestrator that turns real work into lasting intelligence.'),
        },
        {
          id: 'instance-icarus',
          name: t('visualizer.l4.nodes.icarus.name', 'ICARUS'),
          type: t('visualizer.l4.nodes.icarus.type', 'TENANT COPILOT'),
          layer: 'L4',
          glyph: 'explore',
          description: t('visualizer.l4.nodes.icarus.desc', 'ICARUS is each user’s personal copilot, bound to their own Labyrinth (virtual company).'),
        }
      ]
    }
  ];

  return (
    <div className="h-full p-6 flex flex-col items-center overflow-y-auto custom-scrollbar bg-black/20 rounded-3xl">
      <div className="w-full max-w-screen-2xl flex flex-col lg:flex-row gap-6 items-start">
        {segments.map((segment) => (
          <div key={segment.id} className="flex-1 w-full space-y-6">
            <div className="flex items-center gap-3">
              <div className={`h-1 w-6 rounded-full ${segment.color === 'orange' ? 'bg-orange-500' :
                segment.color === 'purple' ? 'bg-purple-500' :
                  segment.color === 'red' ? 'bg-red-500' : 'bg-cyan-500'}`}
              />
              <div>
                <h3 className="text-lg font-black italic uppercase tracking-tighter text-white leading-none">{segment.title}</h3>
                <p className="font-mono text-[8px] text-slate-500 uppercase tracking-widest mt-1">{segment.kicker}</p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {segment.nodes.map((node) => (
                <L4SystemBox
                  key={node.id}
                  title={node.logo ? undefined : node.name}
                  description={node.logo ? undefined : node.type}
                  glyph={node.glyph}
                  logo={node.logo}
                  color={segment.color}
                  isBrand={!!node.logo}
                  iconFill={node.iconFill}
                  onClick={() => onNodeClick(node as any)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default L4Products;