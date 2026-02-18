import React, { useEffect, useState } from 'react';

/**
 * TS-Λ3 // TACTICAL PROGRESS SUBSTRATE [v1.2.1]
 * Path: src/components/tacticalprogress.tsx
 * Mission: Vague Stage Completion Visualization
 * Spec: 12-Segment Saturation // Pulse Animation // No Percentages
 * Authority: THE OVERWATCH // SG-CANONICAL-2026
 */

export const TacticalProgress: React.FC<{ label?: string }> = ({ label = "MISSION_SATURATION" }) => {
    const [activeSegments, setActiveSegments] = useState(0);

    useEffect(() => {
        // Simulated calibration sequence for visual feedback
        const timer = setTimeout(() => setActiveSegments(9), 800);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="w-full space-y-3 select-none">
            <div className="flex justify-between items-end px-1">
                <span className="text-[8px] font-mono text-cyan-500 uppercase tracking-[0.4em] font-black">
                    {label}
                </span>
                <span className="text-[8px] font-mono text-slate-600 uppercase tracking-widest animate-pulse">
                    Latching...
                </span>
            </div>

            {/* 🚥 SEGMENTED AXIS */}
            <div className="flex gap-1.5 h-1.5 w-full">
                {Array.from({ length: 12 }).map((_, i) => (
                    <div
                        key={i}
                        className={`
              flex-1 rounded-sm transition-all duration-700
              ${i < activeSegments
                                ? 'bg-cyan-500 shadow-[0_0_10px_rgba(34,211,238,0.4)] opacity-100'
                                : 'bg-white/5 opacity-20'
                            }
            `}
                        style={{ transitionDelay: `${i * 100}ms` }}
                    />
                ))}
            </div>
        </div>
    );
};

export default TacticalProgress;