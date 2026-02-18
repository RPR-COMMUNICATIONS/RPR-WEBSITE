import React from 'react';

/**
 * TS-Λ3 // RPR KONTROL MASTER LOGO [v3.2.0]
 * Path: src/brand/rprkontrollogo.tsx
 * Spec: TIGHT-HEAVY // Purple Axis // Pure White Core
 * Mission: Establish hierarchical chromatic balance for the Kontrol sub-brand.
 * Authority: THE OVERWATCH // SG-CANONICAL-2026
 */

interface RprKontrolLogoProps {
    size?: number;
    className?: string;
}

export const RprKontrolLogo: React.FC<RprKontrolLogoProps> = ({
    size = 40,
    className = ''
}) => {
    const aspectRatio = 445 / 55;
    const width = size * aspectRatio;

    return (
        <div className={`overflow-visible select-none inline-flex items-center ${className} group/logo`}>
            <svg
                width={width}
                height={size}
                viewBox="0 0 445 55"
                xmlns="http://www.w3.org/2000/svg"
                className="overflow-visible transition-transform duration-700 group-hover/logo:scale-[1.02]"
            >
                <defs>
                    <style type="text/css">
                        {`
              @import url('https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap');
              .kontrol-logo-text { 
                font-family: 'Inter', sans-serif; 
                font-weight: 900; 
                text-transform: uppercase; 
                letter-spacing: 0.12em; 
                font-style: italic;
              }
              .primary-white-glow { filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.6)); }
              .kontrol-purple-glow { filter: drop-shadow(0 0 6px rgba(168, 85, 247, 0.4)); }
            `}
                    </style>
                </defs>

                {/* 🛡️ ICON UNIT: White Axis Core */}
                <g className="primary-white-glow">
                    <polygon
                        points="35,0 0,55 70,55"
                        fill="rgba(255, 255, 255, 0.05)"
                        stroke="#FFFFFF"
                        strokeWidth="1.2"
                    />
                    <g transform="translate(17, 12.5)">
                        <g transform="scale(0.07)">
                            <path
                                fill="#FFFFFF"
                                d="M366.26,256L256,56L145.74,256L35.48,456H256h220.52L366.26,256z M462.43,448.02H327.14 c-52.29-17.46-99.26-47.08-123.05-72.78c12.09,3.24,29.59,6.3,53.32,6.78c43.69,0.87,71.69-14.09,71.69-14.09s-0.04-0.49-0.13-1.36 l0.44,1.33c10.53-38.31,14.66-76.67,9.8-143.39l20.22,36.67L462.43,448.02z M255.21,246.4c0,0,17.34,12.57,41.66,53.19 c15.5,25.89,23.07,61.65,23.07,61.65s-27.12,11.27-63.76,11.1c-37.52-0.53-63.59-9.51-63.59-9.51s5.81-34.7,21.66-61.82 C230.29,270.35,255.21,246.4,255.21,246.4z M153.41,261.17L256.42,74.33l70.68,128.2c8.42,51.22,5.65,107.88-2.38,140.27 c-3.5-14.36-9.64-32.72-20.28-49.2c-28.27-43.79-47.74-58.99-47.74-58.99s-0.36,0.2-1.01,0.63 c-42.74,11.66-77.73,28.09-123.62,64.64L153.41,261.17z M50.4,448.02l69.84-126.68c39.4-37.4,94.72-65.51,118.02-70.6 c-9.71,10.52-22.24,27.08-35.09,52.2c-18.12,35.42-20.61,64.11-20.61,64.11s0.59,0.37,1.78,0.99l-1.55-0.36 c29.53,30.52,56.36,49.88,116.46,80.35h-42.83H50.4z"
                            />
                        </g>
                    </g>
                </g>

                {/* 🔡 WORDMARK HIERARCHY */}
                <text x="85" y="27.5" className="kontrol-logo-text" fontSize="28" dominantBaseline="middle">
                    <tspan fill="#FFFFFF" className="primary-white-glow">RPR</tspan>
                    <tspan dx="10" fill="#a855f7" className="kontrol-purple-glow transition-all duration-500 group-hover/logo:fill-white">KONTROL</tspan>
                </text>
            </svg>
        </div>
    );
};

export default RprKontrolLogo;