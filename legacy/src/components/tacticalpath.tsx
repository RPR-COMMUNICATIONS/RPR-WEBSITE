import React from 'react';

/**
 * TS-Λ3 // ABSOLUTE RESOLUTION TACTICAL PATH [v1.0.0]
 * Navigation and strategic path visualization
 * Used in Overwatch right column (bottom module)
 * Adapted from the first HTML prototype tactical board
 */
interface TacticalPathProps {
  className?: string;
}

export const TacticalPath: React.FC<TacticalPathProps> = ({ className = '' }) => {
  return (
    <div className={`flex flex-col items-center justify-center w-full ${className}`}>
      <div className="relative bg-[#0a1515] p-2 rounded-xl border border-white/5 w-full max-w-md">
        {/* Grid container for tactical board */}
        <div className="grid grid-cols-6 gap-1 bg-white/5 p-1 rounded-lg border border-white/10">
          {/* Row 1 */}
          <div className="size-10 lg:size-12 bg-[#111c1c]/50 rounded border border-[#1a2e2e]"></div>
          <div className="size-10 lg:size-12 bg-[#111c1c]/50 rounded border border-[#1a2e2e] flex items-center justify-center">
            <div className="size-6 rounded-full border-2 border-white/40 bg-white/10"></div>
          </div>
          <div className="size-10 lg:size-12 bg-[#111c1c]/50 rounded border border-[#1a2e2e]"></div>
          <div className="size-10 lg:size-12 bg-[#111c1c]/50 rounded border border-[#1a2e2e]"></div>
          <div className="size-10 lg:size-12 bg-[#111c1c]/50 rounded border border-[#1a2e2e]"></div>
          <div className="size-10 lg:size-12 bg-[#111c1c]/50 rounded border border-[#1a2e2e]"></div>

          {/* Row 2 */}
          <div className="size-10 lg:size-12 bg-[#111c1c]/50 rounded border border-[#1a2e2e]"></div>
          <div className="size-10 lg:size-12 bg-[#111c1c]/50 rounded border border-[#1a2e2e]"></div>
          <div className="size-10 lg:size-12 bg-[#111c1c]/50 rounded border border-[#1a2e2e] flex items-center justify-center">
            <div className="size-6 rotate-45 border-2 border-white/40 bg-white/10"></div>
          </div>
          <div className="size-10 lg:size-12 bg-[#111c1c]/50 rounded border border-[#1a2e2e]"></div>
          <div className="size-10 lg:size-12 bg-[#111c1c]/50 rounded border border-[#1a2e2e]"></div>
          <div className="size-10 lg:size-12 bg-[#111c1c]/50 rounded border border-[#1a2e2e]"></div>

          {/* Row 3 - Path Highlight Row */}
          <div className="size-10 lg:size-12 bg-[#111c1c]/50 rounded border border-[#1a2e2e]"></div>
          <div className="size-10 lg:size-12 bg-[#111c1c]/50 rounded border border-[#1a2e2e] relative">
            <div className="absolute inset-0 bg-primary/20 animate-pulse rounded"></div>
            <div className="z-10 size-8 rounded-full bg-primary glow-cyan flex items-center justify-center">
              <span className="material-symbols-outlined text-[#050505] text-[18px] font-bold">navigation</span>
            </div>
          </div>
          <div className="size-10 lg:size-12 bg-[#111c1c]/50 rounded border border-[#1a2e2e] relative">
            <div className="h-0.5 w-full bg-primary/60 blur-[1px]"></div>
          </div>
          <div className="size-10 lg:size-12 bg-[#111c1c]/50 rounded border border-[#1a2e2e] relative">
            <div className="h-0.5 w-full bg-primary/60 blur-[1px]"></div>
          </div>
          <div className="size-10 lg:size-12 bg-[#111c1c]/50 rounded border border-[#1a2e2e] relative">
            <div className="h-0.5 w-full bg-primary/60 blur-[1px]"></div>
            <div className="absolute size-2 bg-primary rounded-full glow-cyan"></div>
          </div>
          <div className="size-10 lg:size-12 bg-[#111c1c]/50 rounded border border-[#1a2e2e]"></div>

          {/* Rows 4-6 (remaining empty cells) */}
          {Array.from({ length: 18 }).map((_, i) => (
            <div key={`empty-${i}`} className="size-10 lg:size-12 bg-[#111c1c]/50 rounded border border-[#1a2e2e]"></div>
          ))}
        </div>
      </div>
    </div>
  );
};
