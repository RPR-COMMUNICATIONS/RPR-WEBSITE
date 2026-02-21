import React from 'react';

/**
 * TS-Λ3 // MOTHERSHIP OS LOGO [v1.3.8]
 * Path: src/brand/mothershiposlogo.tsx
 * Mission: Desktop Geometry Escalation // Architectural Presence
 * Authority: THE OVERWATCH // SG-CANONICAL-2026
 * Fix: Escalated desktop max-width to 550px for high-fidelity rendering.
 * Fix: Maintained mobile-only hover scaling (Suppress on Desktop).
 * Status: AUTHORITATIVE // LATCHED
 */

interface MothershipOSLogoProps {
    className?: string;
}

export const MothershipOSLogo: React.FC<MothershipOSLogoProps> = ({
    className = ''
}) => {
    // 📐 RECALIBRATED PLANE: 552 x 170.61
    const VIEWBOX_HEIGHT = 170.61;
    const VIEWBOX_WIDTH = 552;

    // ⚓ ABSOLUTE CENTER (276)
    const CX = VIEWBOX_WIDTH / 2;
    const CY = VIEWBOX_HEIGHT / 2;

    return (
        /**
         * 🧬 ESCALATED WRAPPER
         * Mobile: max-w-[220px]
         * Desktop: md:max-w-[550px] (Recalibrated for Presence)
         */
        <div className={`select-none inline-flex items-center justify-center w-full max-w-[220px] md:max-w-[550px] ${className} group/mslogo`}>
            <svg
                viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
                xmlns="http://www.w3.org/2000/svg"
                /**
                 * 🧬 INTERACTION LATCH
                 * Mobile (<768px): group-hover:scale-[1.02]
                 * Desktop (>=768px): md:group-hover:scale-100 (Suppression for Rigidity)
                 */
                className="w-full h-auto overflow-visible transition-transform duration-700 group-hover/mslogo:scale-[1.02] md:group-hover/mslogo:scale-100"
            >
                <defs>
                    <style type="text/css">
                        {`
              .ms-logo-text {
                font-family: 'Inter', sans-serif;
                font-weight: 900;
                text-transform: uppercase;
                letter-spacing: -0.01em;
              }
              .rpr-icon-core { fill: #FFFFFF; }
            `}
                    </style>
                </defs>

                <g>
                    {/* 🔡 OBJECT A: MOTHER (White Axis) */}
                    <text
                        x={CX - 35}
                        y={CY}
                        className="ms-logo-text"
                        fontSize="58.8"
                        dominantBaseline="central"
                        textAnchor="end"
                        fill="#FFFFFF"
                    >
                        MOTHER
                    </text>

                    {/* 🛡️ OBJECT B: THE SHIELD ICON */}
                    <g transform={`translate(${CX - 38.4}, 46.9)`}>
                        <g transform="scale(0.15)">
                            <path
                                className="rpr-icon-core"
                                d="M366.26,256L256,56L145.74,256L35.48,456H256h220.52L366.26,256z M462.43,448.02H327.14
                   c-52.29-17.46-99.26-47.08-123.05-72.78c12.09,3.24,29.59,6.3,53.32,6.78c43.69,0.87,71.69-14.09,71.69-14.09s-0.04-0.49-0.13-1.36
                   l0.44,1.33c10.53-38.31,14.66-76.67,9.8-143.39l20.22,36.67L462.43,448.02z M255.21,246.4c0,0,17.34,12.57,41.66,53.19
                   c15.5,25.89,23.07,61.65,23.07,61.65s-27.12,11.27-63.76,11.1c-37.52-0.53-63.59-9.51-63.59-9.51s5.81-34.7,21.66-61.82
                   C230.29,270.35,255.21,246.4,255.21,246.4z M153.41,261.17L256.42,74.33l70.68,128.2c8.42,51.22,5.65,107.88-2.38,140.27
                   c-3.5-14.36-9.64-32.72-20.28-49.2c-28.27-43.79-47.74-58.99-47.74-58.99s-0.36,0.2-1.01,0.63
                   c-42.74,11.66-77.73,28.09-123.62,64.64L153.41,261.17z M50.4,448.02l69.84-126.68c39.4-37.4,94.72-65.51,118.02-70.6
                   c-9.71,10.52-22.24,27.08-35.09,52.2c-18.12,35.42-20.61,64.11-20.61,64.11s0.59,0.37,1.78,0.99l-1.55-0.36
                   c29.53,30.52,56.36,49.88,116.46,80.35h-42.83H50.4z"
                            />
                        </g>
                    </g>

                    {/* 🔡 OBJECT C: SHIP (Cyan Axis) */}
                    <text
                        x={CX + 35}
                        y={CY}
                        className="ms-logo-text"
                        fontSize="58.8"
                        dominantBaseline="central"
                        textAnchor="start"
                        fill="#00D9FF"
                    >
                        SHIP
                    </text>
                </g>
            </svg>
        </div>
    );
};

export default MothershipOSLogo;