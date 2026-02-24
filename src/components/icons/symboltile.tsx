import React from 'react';
import './symboltile.css';

/**
 * TS-Λ3 // SYMBOL TILE [v5.4.1]
 * Path: src/components/icons/symboltile.tsx
 * Mission: Global Filter Latch // Zero-Clip Geometric Parity
 * Authority: THE OVERWATCH // SG-CANONICAL-2026
 * Status: AUTHORITATIVE // LATCHED
 * Fix: Integrated 'symbol-container' and 'symbol-glyph' classes for CSS pulse latch.
 * Fix: Synchronized 0.9x Scale Mandate with Global Glow offsets.
 */

export interface SymbolTileProps {
  glyph: string;
  active?: boolean;    // Toggle active state visuals (Active Nodal Glow)
  size?: number;       // Outer container size in pixels
  variant?: 'circle' | 'square' | 'none';
  color?: string;      // Icon Color Override
  fill?: string;       // Background Fill (Internal SVG)
  stroke?: string;     // Border Stroke
  glow?: boolean;      // Toggle Glow
  className?: string;
  iconFill?: number;   // 0 (Outlined) or 1 (Filled)
}

export const SymbolTile: React.FC<SymbolTileProps> = ({
  glyph,
  active = false,
  size = 32,
  glow = true,
  variant = 'square',
  iconFill = 0,
  className = "",
  color: explicitColor,
  fill = "#000000",
  stroke = "rgba(255, 255, 255, 0.1)"
}) => {

  // 📐 Zero-Clip Mandate: 0.9x scaling absorbs font metric drift for high-fidelity glyphs
  const fontSize = Math.round(size * 0.9);

  // 🧬 GLOBAL FILTER SELECTION
  // Targets the high-fidelity filters defined in the index.html Sovereign Identity Latch
  const getFilterId = () => {
    if (!glow) return 'none';
    if (active) return 'url(#active-white-glow)';
    if (explicitColor === '#00D9FF' || explicitColor === 'cyan') return 'url(#cyan-glow)';
    return 'url(#white-edge-glow)';
  };

  // 🛡️ DYNAMIC SUBSTRATE LOGIC
  const hasCustomBg = className.includes('bg-');

  const containerClasses = `
    symbol-container relative flex items-center justify-center transition-all duration-500 overflow-visible
    ${active
      ? 'is-active bg-cyan-500/20 border-cyan-500/50 shadow-[0_0_20px_rgba(34,211,238,0.2)]'
      : !hasCustomBg ? 'bg-black border-white/10 group-hover:border-white/30' : 'border-white/10'
    }
    ${variant === 'circle' ? 'rounded-full' : 'rounded-lg'}
    ${className}
  `;

  return (
    <div
      className={containerClasses}
      style={{ width: size, height: size, minWidth: size, minHeight: size }}
    >
      <svg viewBox="0 0 64 64" className="absolute inset-0 w-full h-full overflow-visible pointer-events-none">
        {/* 📐 INTERNAL SHAPE: Rendered only if no tailwind background override is present */}
        {!hasCustomBg && variant !== 'none' && (
          <g style={{ filter: getFilterId() }}>
            {variant === 'circle' ? (
              <circle
                cx="32"
                cy="32"
                r="28"
                fill={fill}
                stroke={active ? "rgba(34, 211, 238, 0.4)" : stroke}
                strokeWidth="1"
              />
            ) : (
              <rect
                x="4"
                y="4"
                width="56"
                height="56"
                rx="14"
                fill={fill}
                stroke={active ? "rgba(34, 211, 238, 0.4)" : stroke}
                strokeWidth="1"
              />
            )}
          </g>
        )}
      </svg>

      <span
        className="symbol-glyph material-symbols-outlined relative z-10 select-none pointer-events-none flex items-center justify-center transition-all duration-500"
        style={{
          fontSize: `${fontSize}px`,
          color: explicitColor || (active ? '#22d3ee' : '#FFFFFF'),
          filter: getFilterId(),
          fontVariationSettings: `'FILL' ${iconFill}, 'wght' 450, 'GRAD' 0, 'opsz' 48`,
          /* 🛡️ LIGATURE PROTECTION (Zero-Clip Mandate) */
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