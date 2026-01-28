import React from 'react';

/**
 * TS-Λ3 // OVERWATCH TACTICAL: CHECKMATE ENDGAME [v2.4.0]
 * High-fidelity geometric primitive board
 */
const CheckmateBoard: React.FC = () => {
  return (
    <div className="relative aspect-square w-full bg-zinc-950 border border-zinc-800 p-1">
      <div className="grid grid-cols-8 grid-rows-8 h-full w-full border border-zinc-900">
        {[...Array(64)].map((_, i) => {
          const row = Math.floor(i / 8);
          const col = i % 8;
          const isDark = (row + col) % 2 === 1;

          return (
            <div
              key={i}
              className={`relative flex items-center justify-center border-[0.5px] border-zinc-900/30 ${
                isDark ? 'bg-zinc-900/20' : 'bg-transparent'
              }`}
            >
              {/* Piece Placements */}
              {row === 1 && col === 5 && <Piece type="king" color="cyan" />}
              {row === 3 && col === 3 && <Piece type="queen" color="cyan" />}
              {row === 6 && col === 5 && <Piece type="king" color="white" />}
              {row === 5 && col === 2 && <Piece type="knight" color="white" />}
            </div>
          );
        })}
      </div>
      {/* Tactical Overlay */}
      <div className="absolute inset-0 pointer-events-none border-2 border-cyan-500/20 m-1" />
    </div>
  );
};

const Piece = ({ type, color }: { type: string; color: 'cyan' | 'white' }) => {
  const colorClass = color === 'cyan' ? 'bg-cyan-400' : 'bg-zinc-100';
  const shadowClass = color === 'cyan' ? 'shadow-[0_0_10px_rgba(34,211,238,0.5)]' : '';

  return (
    <div className={`w-3 h-3 rounded-full ${colorClass} ${shadowClass} transition-all duration-500`} title={`${color} ${type}`} />
  );
};

export default CheckmateBoard;
