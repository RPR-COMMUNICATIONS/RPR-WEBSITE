import React from 'react';

export const SentinelBadge: React.FC = () => (
  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-white/10 text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-400">
    <svg 
      className="w-3 h-3 text-primary" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2"
    >
      {/* Chess Rook SVG */}
      <path d="M5 20h14M5 20V8M5 8h14v12M9 8V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3M9 8h6M9 12h6M9 16h6" />
    </svg>
    <span>The Sentinel</span>
  </div>
);