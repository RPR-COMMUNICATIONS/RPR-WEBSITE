import React from 'react';
import { RprLogoIcon } from './RprLogoIcon';

export type GlyphType = 'master' | 'lockup';
export type RprVariant = 'KONTROL' | 'VERIFY' | 'COMMUNICATIONS' | 'LLC';

const variantColors: Record<RprVariant, string> = {
    KONTROL: '#A855F7',
    VERIFY: '#00D9FF',
    COMMUNICATIONS: '#FFFFFF',
    LLC: '#FFFFFF',
};

interface RprLogoLockupProps {
    glyphType?: GlyphType;
    variant?: RprVariant;
    size?: number;
    className?: string;
    themeColor?: string;
    showTagline?: boolean;
}

/**
 * RPR Authoritative Logo Lockup
 * Enforces strict layout, font size, and tracking.
 * Governance: TS-Λ3
 */
export const RprLogoLockup: React.FC<RprLogoLockupProps> = ({
    glyphType = 'lockup',
    variant = 'COMMUNICATIONS',
    size = 32,
    className = '',
    themeColor,
    showTagline = false,
}) => {
    const isMaster = glyphType === 'master';
    const color = themeColor || variantColors[variant] || '#FFFFFF';

    return (
        <div className={`flex items-center gap-3 ${className} select-none`}>
            <RprLogoIcon size={size} fill={color} />

            {!isMaster && (
                <div className="flex flex-col justify-center">
                    <h1 className="flex items-center text-white font-black uppercase tracking-[0.12em] leading-none" style={{ fontSize: `${size * 0.9}px` }}>
                        <span className="text-white">RPR</span>
                        <span style={{ color: color, marginLeft: '0.4em' }}>{variant}</span>
                    </h1>
                    {showTagline && variant === 'KONTROL' && (
                        <p className="font-bold text-slate-500 uppercase tracking-[0.4em] mt-1.5 leading-none" style={{ fontSize: `${size * 0.28}px` }}>
                            THE MOTHERSHIP
                        </p>
                    )}
                </div>
            )}
        </div>
    );
};
