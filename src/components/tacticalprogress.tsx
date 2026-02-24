import React, { useEffect, useState } from 'react';

/**
 * TS-Λ3 // TACTICAL PROGRESS SUBSTRATE [v2.2.0]
 * Path: src/components/tacticalprogress.tsx
 * Mission: Vague Stage Completion Visualization
 * Spec: 12-Segment Saturation // Pulse Animation // No Percentages
 * Authority: THE OVERWATCH // SG-CANONICAL-2026
 * Fix: Replaced continuous bar with segmented saturation matrix.
 */

interface TacticalProgressProps {
    label?: string;
    className?: string;
}

export const TacticalProgress: React.FC<TacticalProgressProps> = ({
    label = "MISSION_SATURATION",
    className = ""
}) => {
    const [activeSegments, setActiveSegments] = useState(0);

    useEffect(() => {
        /**
         * 🚥 CALIBRATION SEQUENCE
         * Simulates ingestion of technical data for visual feedback.
         * Defaulting to 9/12 saturation to signal "Optimized Stability."
         */
        const timer = setTimeout(() => setActiveSegments(9), 400);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`w-full space-y-3 select-none ${className}`}>
            {/* 📡 TELEMETRY HEADER */}
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
              flex-1 rounded-sm transition-all duration-700 ease-out
              ${i < activeSegments
                                ? 'bg-cyan-500 shadow-[0_0_12px_rgba(34,211,238,0.5)] opacity-100'
                                : 'bg-white/5 opacity-20'
                            }
            `}
                        style={{
                            transitionDelay: `${i * 60}ms`,
                            // Subtle pulse on active segments
                            animation: i < activeSegments ? `nodal-pulse 3s infinite ${i * 100}ms` : 'none'
                        }}
                    />
                ))}
            </div>

            {/* 📊 MECHANICAL TERMINUS */}
            <div className="flex justify-between px-1">
                <span className="text-[7px] font-mono text-slate-700 uppercase tracking-widest">
                    Node: asia-southeast1
                </span>
                <span className="text-[7px] font-mono text-slate-700 uppercase tracking-widest">
                    Protocol: TS-Λ3
                </span>
            </div>
        </div>
    );
};

export default TacticalProgress;