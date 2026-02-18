import React from 'react';

/**
 * TS-Λ3 // ADVANCED STRATEGY BOARD [v1.0.1]
 * Path: src/components/chessboard.tsx
 * Mission: Tactical 6x6 Grid // Material Symbol Latch
 */

interface ChessboardProps {
  className?: string;
}

export const Chessboard: React.FC<ChessboardProps> = ({ className = '' }) => {
  const starPos = { row: 0, col: 4 };
  const radioPos = { row: 2, col: 2 };
  const pentagonPos = { row: 5, col: 0 };

  const isStarCell = (r: number, c: number) => r === starPos.row && c === starPos.col;
  const isRadioCell = (r: number, c: number) => r === radioPos.row && c === radioPos.col;
  const isPentagonCell = (r: number, c: number) => r === pentagonPos.row && c === pentagonPos.col;

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="grid grid-cols-6 gap-1 bg-white/5 p-2 rounded-xl border border-white/10 shadow-2xl backdrop-blur-xl">
        {Array.from({ length: 36 }).map((_, idx) => {
          const row = Math.floor(idx / 6);
          const col = idx % 6;

          let cellContent = null;
          let cellClass = 'bg-white/5 rounded-sm flex items-center justify-center text-white/20';

          if (isStarCell(row, col)) {
            cellClass = 'bg-cyan-500/20 border border-cyan-500/40 rounded-sm flex items-center justify-center text-cyan-400';
            cellContent = <span className="material-symbols-outlined text-lg">star</span>;
          } else if (isRadioCell(row, col)) {
            cellClass = 'bg-cyan-500/40 border border-cyan-500/60 rounded-sm flex items-center justify-center text-white';
            cellContent = <span className="material-symbols-outlined text-lg">radio_button_checked</span>;
          } else if (isPentagonCell(row, col)) {
            cellClass = 'bg-cyan-500/20 border border-cyan-500/40 rounded-sm flex items-center justify-center text-cyan-400';
            cellContent = <span className="material-symbols-outlined text-lg">pentagon</span>;
          } else {
            cellClass = col % 2 === row % 2 ? 'bg-white/10 rounded-sm' : 'bg-white/5 rounded-sm';
          }

          return (
            <div key={idx} className={`w-12 h-12 md:w-16 md:h-16 transition-all duration-500 hover:scale-105 hover:bg-white/20 ${cellClass}`}>
              {cellContent}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Chessboard;