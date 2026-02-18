import React from 'react';

/**
 * TS-Λ3 // LABYRINTH VARIANT BOARD [v1.0.0]
 * Path: src/components/labyrinthvariantboard.tsx
 * Mission: Planescape-style maze chess board
 */

export const LabyrinthVariantBoard: React.FC = () => {
  const deadSquares = new Set([
    '3-3', '3-4', '3-5', '4-2', '4-6', '5-1', '5-7', '6-3', '6-5', '1-3', '1-4', '1-5',
  ]);

  const sigilSquares = new Set(['6-2', '5-4', '1-5']);

  const isOnPath = (rank: number, file: number) => {
    const pathSquares = new Set(['7-0', '6-1', '6-2', '5-3', '5-4', '4-5', '1-5', '0-7']);
    return pathSquares.has(`${rank}-${file}`);
  };

  const createRow = (rank: number) => {
    const squares = [];
    for (let file = 0; file < 8; file++) {
      let piece = null;
      const squareKey = `${rank}-${file}`;
      const isDead = deadSquares.has(squareKey);
      const hasSigil = sigilSquares.has(squareKey);

      if (rank === 0 && file === 7) piece = <span className="material-symbols-outlined text-white animate-pulse">crown</span>;
      if (rank === 1 && file === 5) piece = <span className="material-symbols-outlined text-white/80">stat_3</span>;
      if (rank === 4 && file === 5) piece = <span className="material-symbols-outlined text-cyan-400">smart_toy</span>;
      if (rank === 5 && file === 3) piece = <span className="material-symbols-outlined text-cyan-500">architecture</span>;
      if (rank === 5 && file === 4) piece = <span className="material-symbols-outlined text-cyan-600">pawn</span>;
      if (rank === 6 && file === 1) piece = <span className="material-symbols-outlined text-cyan-400">person</span>;
      if (rank === 7 && file === 0) piece = <span className="material-symbols-outlined text-cyan-700">shield</span>;

      const baseClasses = isDead ? 'border border-white/5 bg-white/5 opacity-20' : 'border border-white/10';
      const pathHighlight = isOnPath(rank, file) ? 'bg-cyan-500/10' : '';

      squares.push(
        <div key={file} className={`${baseClasses} ${pathHighlight} relative flex items-center justify-center aspect-square transition-all duration-300 hover:bg-white/5 group`}>
          <div className="relative z-10">{piece}</div>
          {hasSigil && (
            <div className="absolute inset-0 flex items-center justify-center opacity-30">
              <span className="material-symbols-outlined text-[8px] text-cyan-500">emergency_home</span>
            </div>
          )}
        </div>
      );
    }
    return squares;
  };

  const getSquareCenter = (rank: number, file: number) => ({ x: (file + 0.5) * 12.5, y: (rank + 0.5) * 12.5 });

  const pathPoints = [
    getSquareCenter(7, 0), getSquareCenter(6, 1), getSquareCenter(6, 2),
    getSquareCenter(5, 3), getSquareCenter(5, 4), getSquareCenter(4, 5),
    getSquareCenter(1, 5), getSquareCenter(0, 7),
  ];

  const pathD = pathPoints.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');

  return (
    <div className="relative w-full aspect-square bg-black/40 border border-white/10 p-2 md:p-4 rounded-[2rem] shadow-2xl overflow-hidden backdrop-blur-xl group">
      <div className="w-full h-full grid grid-cols-8 grid-rows-8 relative border border-white/5">
        {Array.from({ length: 8 }).map((_, r) => createRow(r))}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" style={{ zIndex: 5 }}>
          <path d={pathD} fill="none" stroke="#00D9FF" strokeWidth="0.5" strokeDasharray="2 1" className="opacity-40" />
          {pathPoints.map((p, i) => (
            <circle key={i} cx={p.x} cy={p.y} r="0.8" fill="#00D9FF" className="animate-pulse" />
          ))}
        </svg>
      </div>

      <div className="absolute -bottom-1 left-0 w-full flex justify-around text-[6px] font-mono text-slate-700 uppercase tracking-widest px-8">
        <span>A</span><span>B</span><span>C</span><span>D</span><span>E</span><span>F</span><span>G</span><span>H</span>
      </div>
    </div>
  );
};

export default LabyrinthVariantBoard;