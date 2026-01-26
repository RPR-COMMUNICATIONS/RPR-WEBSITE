import React from 'react';

export const SentinelBadge: React.FC = () => (
  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-white/10 text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-400">
    <span className="material-symbols-outlined text-cyan-400" style={{ fontSize: '12px' }}>
      security
    </span>
    <span>The Sentinel</span>
  </div>
);