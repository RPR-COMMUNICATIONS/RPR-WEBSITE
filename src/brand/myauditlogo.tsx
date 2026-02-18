import React from 'react';

/**
 * TS-Λ3 // MYAUDIT MASTER LOGO [v9.2.0]
 * Path: src/brand/myauditlogo.tsx
 * Spec: UNIFIED-HEAVY // Libertinus Sans // Cyan Axis
 * Mission: Achieve absolute 900-weight density across all characters.
 * Authority: THE OVERWATCH // SG-CANONICAL-2026
 * Updates:
 * 1. WEIGHT: Unified all characters to 900 (Black) equivalent weight.
 * 2. STROKE: Applied 0.8px expansion to Libertinus Sans Bold to reach 900 density.
 * 3. KERNING: Maintained high-density -0.08em tracking.
 * 4. FOCAL: Maintained Cyan (#00D9FF) for the Λ monolith.
 */

interface MyAuditLogoProps {
    size?: number;
    className?: string;
}

export const MyAuditLogo: React.FC<MyAuditLogoProps> = ({
    size = 48,
    className = ''
}) => {
    // Standard aspect ratio for the Libertinus wordmark
    const aspectRatio = 320 / 80;
    const width = size * aspectRatio;

    return (
        <div className={`overflow-visible select-none inline-flex items-center justify-center ${className} group/logo`}>
            <svg
                width={width}
                height={size}
                viewBox="0 0 320 80"
                xmlns="http://www.w3.org/2000/svg"
                className="overflow-visible transition-all duration-700 group-hover/logo:scale-[1.02]"
            >
                <defs>
                    <style type="text/css">
                        {`
                            @font-face {
                                font-family: 'Libertinus Sans';
                                src: url('https://cdn.jsdelivr.net/gh/alerque/libertinus@v7.0.4/static/LibertinusSans-Bold.otf');
                                font-weight: 900;
                                font-style: normal;
                            }

                            .libertinus-text { 
                                font-family: 'Libertinus Sans', sans-serif; 
                                font-weight: 900; 
                                text-transform: uppercase;
                                letter-spacing: -0.08em;
                                /* Expansion stroke to reach Inter-900 visual density */
                                paint-order: stroke fill;
                                stroke-width: 0.8px;
                            }

                            .cyan-glow {
                                filter: drop-shadow(0 0 8px rgba(0, 217, 255, 0.4));
                            }
                        `}
                    </style>
                </defs>

                {/* 🎯 UNIFIED HEAVY TYPOGRAPHIC CORE */}
                <text
                    x="160"
                    y="55"
                    className="libertinus-text"
                    textAnchor="middle"
                    fill="#FFFFFF"
                    stroke="#FFFFFF"
                    fontSize="42"
                >
                    {/* 🛡️ MY */}
                    <tspan>MY</tspan>

                    {/* 🧬 Λ MONOLITH (Cyan Axis)
                        Now weight-synced to 900.
                        Maintains 1.2x height hierarchy (54px).
                    */}
                    <tspan
                        fill="#00D9FF"
                        stroke="#00D9FF"
                        fontSize="54"
                        className="cyan-glow"
                        dx="-1"
                    >Λ</tspan>

                    {/* 🔡 UDIT */}
                    <tspan dx="-1">UDIT</tspan>
                </text>
            </svg>
        </div>
    );
};

export default MyAuditLogo;