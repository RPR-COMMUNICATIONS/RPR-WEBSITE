import React from 'react';

/**
 * TS-Λ3 // UI PRIMITIVE [v2.1.0]
 * Path: src/components/sovereignglass.tsx
 * Mission: Authoritative backdrop substrate for visualizer layers.
 * Authority: THE OVERWATCH // SG-CANONICAL-2026
 * Fix: Seated in root components directory to resolve module resolution errors.
 */

interface SovereignGlassProps {
    children: React.ReactNode;
    className?: string;
    active?: boolean;
}

export const SovereignGlass: React.FC<SovereignGlassProps> = ({
    children,
    className = "",
    active = false
}) => (
    <div
        className={`
      rounded-[2.5rem] p-8 backdrop-blur-xl border transition-all duration-700
      ${active
                ? 'bg-cyan-500/5 border-cyan-500/30 shadow-[0_0_40px_rgba(34,211,238,0.1)]'
                : 'bg-black/40 border-white/5'}
      ${className}
    `}
    >
        {children}
    </div>
);

export default SovereignGlass;