import React from "react";
import SymbolTile from "./icons/symboltile.tsx";
import { TacticalProgress } from "./tacticalprogress.tsx";

/**
 * TS-Λ3 // SYSTEM CARD SUBSTRATE [v4.3.0]
 * Path: src/components/systemcard.tsx
 * Mission: Restoration of iconFill & SymbolTile Latch
 * Authority: THE OVERWATCH // SG-CANONICAL-2026
 * Fix: Restored iconFill prop; SymbolTile requires this for 'FILL' variation settings.
 * Fix: Hardened "Sovereign Glass" backdrop with backdrop-blur-lg and black/40.
 */

interface SystemCardProps {
  title: string;
  kicker: string;
  description: string;
  iconName: string;
  iconFill?: number; // Restored: Critical for Mechanical Mode filling (e.g., Daedalus Robot)
  className?: string;
  showProgress?: boolean;
  progressLabel?: string;
  active?: boolean;
}

export const SystemCard: React.FC<SystemCardProps> = ({
  title,
  kicker,
  description,
  iconName,
  iconFill = 0,
  className = "",
  showProgress = false,
  progressLabel = "CALIBRATION_SYNC",
  active = false
}) => {
  return (
    <div className={`
      flex flex-col gap-6 p-8 bg-black/40 backdrop-blur-lg border rounded-[2.5rem] 
      group hover:border-cyan-500/30 transition-all duration-700 shadow-2xl relative overflow-visible 
      ${active ? 'border-cyan-500/40 shadow-[0_0_40px_rgba(34,211,238,0.05)]' : 'border-white/5'}
      ${className}
    `}>

      {/* ⚓ SYMBOL TILE LATCH: Left-aligned tactical presence */}
      <div className="relative z-10 self-start">
        <SymbolTile
          glyph={iconName}
          size={32}
          variant="square"
          fill="#000000"
          color="#FFFFFF"
          glowColor={active ? "#22d3ee" : "white"}
          stroke="rgba(255,255,255,0.1)"
          iconFill={iconFill}
          active={active}
          className="group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="space-y-4 relative z-10">
        <header className="space-y-1">
          <p className="text-[9px] font-mono uppercase tracking-[0.2em] text-slate-500 group-hover:text-cyan-500 transition-colors duration-500 font-bold">
            {kicker}
          </p>
          <h4 className="text-xl font-black text-white uppercase tracking-tight italic">
            {title}
          </h4>
        </header>

        <p className="text-xs text-slate-400 leading-relaxed font-mono uppercase tracking-tighter line-clamp-4">
          {description}
        </p>

        {showProgress && (
          <div className="pt-6 mt-4 border-t border-white/5">
            <TacticalProgress label={progressLabel} />
          </div>
        )}
      </div>
    </div>
  );
};

export default SystemCard;