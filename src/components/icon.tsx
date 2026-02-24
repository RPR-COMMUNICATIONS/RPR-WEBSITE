import React from 'react';

/**
 * TS-Λ3 // BASIC ICON WRAPPER [v2.1.0]
 * Path: src/components/icon.tsx
 * Mission: Standardized Glyph Rendering
 * Authority: THE OVERWATCH // SG-CANONICAL-2026
 */

interface IconProps {
    name: string;
    size?: number;
    className?: string;
    color?: string;
}

export const Icon: React.FC<IconProps> = ({
    name,
    size = 24,
    className = '',
    color = 'currentColor',
}) => (
    <span
        className={`material-symbols-outlined select-none inline-block leading-none ${className}`}
        style={{
            fontSize: `${size}px`,
            color: color,
            fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
        }}
        aria-hidden="true"
    >
        {name}
    </span>
);

export default Icon;
