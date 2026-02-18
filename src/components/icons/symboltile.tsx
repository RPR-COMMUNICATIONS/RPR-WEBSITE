import React from 'react';
import './symboltile.css';

/**
 * TS-Λ3 // SYMBOL TILE [v5.3.3]
 * Path: src/components/icons/symboltile.tsx
 * Mission: Support Explicit Color Overrides & Background Transparency.
 * Authority: THE OVERWATCH // SG-CANONICAL-2026
 * Fix: Added 'color' prop to support black-on-white high-contrast modes.
 * Fix: Relaxed background defaults to allow className overrides (e.g., bg-white).
 * Fix: Restored "active" prop to interface to resolve TS2322 in SystemCard.
 */

export interface SymbolTileProps {
  glyph: string;
  active?: boolean;    // Toggle active state visuals
  size?: number;       // Outer container size in pixels
  variant?: 'circle' | 'square' | 'none';
  color?: string;      // Icon Color
  fill?: string;       // Background Fill (Internal SVG)
  stroke?: string;     // Border Stroke
  glowColor?: string;  // Glow Filter Color
  glow?: boolean;      // Toggle Glow
  className?: string;
  iconFill?: number;   // 0 (Outlined) or 1 (Filled)
}

const SymbolTile: React.FC<SymbolTileProps> = ({
  glyph,
  active = false,
  size = 32,
  glow = true,
  variant = 'square',
  iconFill = 0,
  glowColor = "#22d3ee",
  className = "",
  color: explicitColor,
  fill = "#000000",
  stroke = "rgba(255, 255, 255, 0.1)"
}) => {
  const filterId = React.useMemo(() =>
    `tile-glow-${glyph.replace(/[^a-zA-Z0-9]/g, '-')}-${Math.random().toString(36).substr(2, 5)}`,
    [glyph]);

  const fontSize = Math.round(size * 0.75);

  // 🛡️ DYNAMIC SUBSTRATE LOGIC
  // If className contains 'bg-', we suppress the internal SVG fill shape 
  // to allow the Tailwind background to shine through.
  const hasCustomBg = className.includes('bg-');

  return (
    <div
      className={`
        relative flex items-center justify-center transition-all duration-500 border
        ${active
          ? 'bg-cyan-500/20 border-cyan-500/50 shadow-[0_0_20px_rgba(34,211,238,0.2)]'
          : !hasCustomBg ? 'bg-black border-white/10 group-hover:border-white/30' : 'border-white/10'}
        ${variant === 'circle' ? 'rounded-full' : 'rounded-lg'}
        ${className}
      `}
      style={{ width: size, height: size, minWidth: size, minHeight: size }}
    >
      <svg viewBox="0 0 64 64" className="absolute inset-0 w-full h-full overflow-visible pointer-events-none">
        <defs>
          <filter id={filterId} x="-50%" y="-50%" width="200%" height="200%">
            <feFlood floodColor={active ? "#22d3ee" : glowColor} floodOpacity={0.8} result="flood" />
            <feComposite in="flood" in2="SourceAlpha" operator="in" result="mask" />
            <feGaussianBlur in="mask" stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* 📐 INTERNAL SHAPE: Only rendered if no custom background class is present */}
        {!hasCustomBg && variant !== 'none' && (
          <g style={{ filter: glow ? `url(#${filterId})` : 'none' }}>
            {variant === 'circle' ? (
              <circle cx="32" cy="32" r="28" fill={fill} stroke={active ? "rgba(34, 211, 238, 0.4)" : stroke} strokeWidth="1" />
            ) : (
              <rect x="0" y="0" width="64" height="64" rx="14.4" fill={fill} stroke={active ? "rgba(34, 211, 238, 0.4)" : stroke} strokeWidth="1" />
            )}
          </g>
        )}
      </svg>

      <span
        className="material-symbols-outlined symbol-tile-ligature-protection relative z-10 select-none pointer-events-none flex items-center justify-center transition-all duration-500"
        style={{
          fontSize: `${fontSize}px`,
          color: explicitColor || (active ? '#22d3ee' : '#FFFFFF'),
          filter: glow ? `url(#${filterId})` : 'none',
          fontVariationSettings: `'FILL' ${iconFill}, 'wght' 400, 'GRAD' 0, 'opsz' 48`,
          /* 🛡️ LIGATURE PROTECTION */
          textTransform: 'none',
          letterSpacing: 'normal',
          wordWrap: 'normal',
          whiteSpace: 'nowrap',
          display: 'inline-block'
        }}
      >
        {glyph}
      </span>
    </div>
  );
};

export default SymbolTile;