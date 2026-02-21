import React from 'react';

/**
 * TS-Λ3 // TACTICAL STRATEGY BOARD [v7.3.0]
 * Path: src/components/chessboard.tsx
 * Mission: Data-Driven Chess Logic // Modular Composable
 * Authority: THE OVERWATCH // SG-CANONICAL-2026
 */

type PieceCode = 'wK' | 'wQ' | 'wR' | 'wB' | 'wN' | 'wP' | 'bK' | 'bQ' | 'bR' | 'bB' | 'bN' | 'bP' | null;

const MISSION_POSITION: PieceCode[][] = [
  ['bR', null, null, null, null, null, null, 'wK'], // Rank 8
  [null, null, null, null, null, 'bK', 'bB', null], // Rank 7
  [null, null, null, null, null, 'bN', null, null], // Rank 6
  [null, null, null, null, null, null, null, null], // Rank 5
  [null, null, null, 'wQ', null, null, null, null], // Rank 4
  [null, null, null, null, null, 'wQ', null, null], // Rank 3
  ['bP', 'bP', 'bP', null, null, null, null, null], // Rank 2
  [null, null, null, null, null, null, null, null], // Rank 1
];

const PieceIcon: React.FC<{ code: PieceCode }> = ({ code }) => {
  if (!code) return null;
  const isWhite = code.startsWith('w');
  const color = isWhite ? '#ffffff' : '#22d3ee';
  const glow = isWhite
    ? { filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.4))' }
    : { filter: 'drop-shadow(0 0 6px rgba(34,211,238,0.4))' };
  const kind = code[1];

  return (
    <svg
      viewBox="0 0 24 24"
      className={`${kind === 'P' ? 'w-[42%] h-[42%]' : 'w-[58%] h-[58%]'} transition-all duration-500 ${code === 'wK' ? 'animate-pulse' : 'opacity-90'}`}
      style={glow}
      fill="none"
      stroke={color}
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {kind === 'K' && <><path d="M12 2v2m-2-1h4" /><path d="M7 22h10" /><path d="M12 4c-4 0-5 3-5 6 0 3 2 4 2 4l-1 6h8l-1-6s2-1 2-4c0-3-1-6-5-6z" /></>}
      {kind === 'Q' && <><path d="M12 22h10L19 8l-3 4-4-8-4 8-3-4-3 14h10z" /><circle cx="12" cy="4" r="0.8" fill={color} /><circle cx="3" cy="8" r="0.8" fill={color} /><circle cx="21" cy="8" r="0.8" fill={color} /></>}
      {kind === 'R' && <><path d="M7 22h10V9H7v13z" /><path d="M6 4v5h12V4h-2v2h-3V4h-2v2H8V4H6z" /></>}
      {kind === 'B' && <><path d="M12 3s-4 3-4 8c0 3 1 7 1 7h6s1-4 1-7c0-5-4-8-4-8z" /><path d="M12 3v3" /></>}
      {kind === 'N' && <><path d="M10 22h8v-5l-3-8s0-6-5-6-4 4-4 4 1 6 1 6l-3 4v5h6" /></>}
      {kind === 'P' && <><circle cx="12" cy="7" r="2.5" /><path d="M9 21h6l-1-11h-4l-1 11z" /></>}
    </svg>
  );
};

export const Chessboard: React.FC = () => {
  return (
    <div className="w-full h-full bg-black/40 overflow-hidden group">
      <div className="grid grid-cols-8 grid-rows-8 w-full h-full border-white/10">
        {MISSION_POSITION.map((row, rIdx) =>
          row.map((piece, fIdx) => (
            <div
              key={`${rIdx}-${fIdx}`}
              className={`flex items-center justify-center aspect-square border-[0.5px] border-white/5 transition-colors duration-500 ${(rIdx + fIdx) % 2 !== 0 ? 'bg-slate-900/80' : 'bg-slate-800/20'
                } group-hover:bg-cyan-500/[0.03]`}
            >
              <PieceIcon code={piece} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Chessboard;