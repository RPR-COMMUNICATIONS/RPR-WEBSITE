import React from 'react';

/**
 * TS-Λ3 // MYAUDIT MASTER LOGO [v9.2.1]
 * Path: src/brand/myauditlogo.tsx
 * Spec: UNIFIED-HEAVY // Libertinus Sans // Cyan Axis
 * Fix: Replaced broken jsDelivr CDN with stable Fontsource WOFF2 substrate.
 * Authority: THE OVERWATCH // SG-CANONICAL-2026
 */

interface MyAuditLogoProps {
  size?: number;
  className?: string;
}

export const MyAuditLogo: React.FC<MyAuditLogoProps> = ({
  size = 48,
  className = ''
}) => {
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
                            /* 🧬 STABLE FONTSOURCE CDN LATCH */
                            @font-face {
                                font-family: 'Libertinus Sans';
                                src: url('https://cdn.jsdelivr.net/fontsource/fonts/libertinus-sans@latest/latin-700-normal.woff2') format('woff2');
                                font-weight: 900;
                                font-style: normal;
                                font-display: swap;
                            }

                            .libertinus-text { 
                                font-family: 'Libertinus Sans', sans-serif; 
                                font-weight: 900; 
                                text-transform: uppercase;
                                letter-spacing: -0.08em;
                                paint-order: stroke fill;
                                stroke-width: 0.8px;
                            }

                            .cyan-glow {
                                filter: drop-shadow(0 0 8px rgba(0, 217, 255, 0.4));
                            }
                        `}
          </style>
        </defs>

        <text
          x="160"
          y="55"
          className="libertinus-text"
          textAnchor="middle"
          fill="#FFFFFF"
          stroke="#FFFFFF"
          fontSize="42"
        >
          <tspan>MY</tspan>
          <tspan
            fill="#00D9FF"
            stroke="#00D9FF"
            fontSize="54"
            className="cyan-glow"
            dx="-1"
          >Λ</tspan>
          <tspan dx="-1">UDIT</tspan>
        </text>
      </svg>
    </div>
  );
};

export default MyAuditLogo;