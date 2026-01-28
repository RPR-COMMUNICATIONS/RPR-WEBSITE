import React from 'react';

/**
 * TS-Λ3 // OVERWATCH TACTICAL: LABYRINTH VARIANT [v2.4.0]
 * High-fidelity maze-logic board with path overlay
 */
const LabyrinthVariantBoard: React.FC = () => {
  const deadSquares = [1, 7, 12, 18, 24, 31, 44, 52, 60];
  const pathSquares = [0, 8, 16, 17, 25, 33, 34, 42, 50, 58, 59, 60];

  return (
    <div className="relative aspect-square w-full bg-zinc-950 border border-zinc-800 p-1">
      <div className="grid grid-cols-8 grid-rows-8 h-full w-full border border-zinc-900">
        {[...Array(64)].map((_, i) => {
          const isDead = deadSquares.includes(i);
          const isPath = pathSquares.includes(i);

          return (
            <div
              key={i}
              className={`relative flex items-center justify-center border-[0.5px] border-zinc-900/50 ${
                isDead ? 'bg-black' : 'bg-transparent'
              }`}
            >
              {isPath && (
                <div className="absolute inset-0 bg-cyan-500/10 animate-pulse" />
              )}
              {i === 36 && (
                <div className="w-2 h-2 rotate-45 border border-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.4)]" />
              )}
            </div>
          );
        })}
      </div>
      {/* Sigil HUD */}
      <div className="absolute top-2 right-2 flex space-x-1">
        <div className="w-1 h-3 bg-cyan-500/40" />
        <div className="w-1 h-3 bg-cyan-500/20" />
      </div>
    </div>
  );
};

export default LabyrinthVariantBoard;
