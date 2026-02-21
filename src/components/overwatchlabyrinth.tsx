import React, { useEffect, useRef } from 'react';

/**
 * TS-Λ3 // OVERWATCH LABYRINTH RADAR [v7.3.0]
 * Path: src/components/overwatchlabyrinth.tsx
 * Mission: Clinical Radar Ingestion // Animation Loop Latch
 * Authority: THE OVERWATCH // SG-CANONICAL-2026
 */

export const OverwatchLabyrinth: React.FC = () => {
    const pathRef = useRef<SVGPathElement | null>(null);

    useEffect(() => {
        const path = pathRef.current;
        if (!path) return;
        const length = path.getTotalLength();
        path.style.strokeDasharray = `${length}`;

        const run = () => {
            path.style.transition = 'none';
            path.style.strokeDashoffset = `${length}`;
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    path.style.transition = 'stroke-dashoffset 2.5s cubic-bezier(0.4, 0, 0.2, 1)';
                    path.style.strokeDashoffset = '0';
                });
            });
        };

        run();
        const interval = setInterval(run, 3500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-full overflow-hidden bg-black/20 group flex items-center justify-center">
            {/* 🌌 BACKGROUND SUBSTRATE */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0f172a_0,#020617_80%,#000000_100%)]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.02)_1px,transparent_1px)] bg-[size:32px_32px]" />
            </div>

            <div className="relative w-full h-full p-4 md:p-8">
                <svg viewBox="0 0 500 500" className="w-full h-full rotate-6 overflow-visible opacity-70">
                    {/* Concentric Calibration Rings */}
                    {[230, 180, 130, 80].map((r) => (
                        <circle key={r} cx="250" cy="250" r={r} fill="none" stroke="#1e293b" strokeWidth="0.8" opacity={r > 150 ? 0.15 : 0.08} />
                    ))}
                    <line x1="250" y1="20" x2="250" y2="480" stroke="#0f172a" strokeWidth="0.8" opacity="0.3" />
                    <line x1="20" y1="250" x2="480" y2="250" stroke="#0f172a" strokeWidth="0.8" opacity="0.3" />

                    {/* 🎯 GHOST TACTICAL MARKERS (Semantic Echo) */}
                    <g className="opacity-30">
                        <path d="M118 118 l4 4 M122 118 l-4 4" stroke="#22d3ee" strokeWidth="1" />
                        <circle cx="380" cy="205" r="2.5" stroke="#ffffff" fill="none" strokeWidth="0.8" />
                        <rect x="250" y="80" width="4" height="4" fill="#22d3ee" className="animate-pulse" />
                    </g>

                    {/* AUTHORITATIVE SIGIL PATH */}
                    <path
                        ref={pathRef}
                        d="M 250 460 L 250 340 A 140 140 0 0 1 380 250 L 450 250 A 200 200 0 0 0 250 50 L 250 10"
                        fill="none"
                        stroke="#22d3ee"
                        strokeWidth="2"
                        strokeLinecap="round"
                        style={{ filter: 'drop-shadow(0 0 6px rgba(34,211,238,0.4))' }}
                    />
                    <circle cx="250" cy="250" r="6" fill="#22d3ee" style={{ filter: 'drop-shadow(0 0 10px rgba(34,211,238,0.5))' }} />
                </svg>
            </div>

            <div className="absolute inset-x-6 bottom-6 flex items-center justify-between text-[7px] font-mono uppercase tracking-[0.4em] text-slate-600 pointer-events-none">
                <span className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-cyan-400 animate-pulse" />
                    Sigil telemetry active
                </span>
                <span>Node: <span className="text-cyan-400/60">SG-CORE</span></span>
            </div>
        </div>
    );
};

export default OverwatchLabyrinth;