import React from 'react';

/**
 * TS-Λ3 // ADVANCED STRATEGY BOARD [v1.0.0]
 * 6×6 tactical grid with distributed strategic markers
 * Used in Overwatch right column (top module)
 */
interface ChessboardProps {
  className?: string;
}

export const Chessboard: React.FC<ChessboardProps> = ({ className = '' }) => {
  // Define grid positions for special markers
  const starPos = { row: 0, col: 4 };
  const radioPos = { row: 2, col: 2 };
  const pentagonPos = { row: 5, col: 0 };

  const isStarCell = (r: number, c: number) => r === starPos.row && c === starPos.col;
  const isRadioCell = (r: number, c: number) => r === radioPos.row && c === radioPos.col;
  const isPentagonCell = (r: number, c: number) => r === pentagonPos.row && c === pentagonPos.col;

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="grid grid-cols-6 gap-1 bg-white/5 p-1 rounded-lg border border-white/10 grid-glow">
        {Array.from({ length: 36 }).map((_, idx) => {
          const row = Math.floor(idx / 6);
          const col = idx % 6;

          let cellContent = null;
          let cellClass = 'bg-white/5 rounded-sm flex items-center justify-center text-white/20';

          if (isStarCell(row, col)) {
            cellClass = 'bg-primary/20 border border-primary/40 rounded-sm flex items-center justify-center text-primary';
            cellContent = <span className="material-symbols-outlined">star</span>;
          } else if (isRadioCell(row, col)) {
            cellClass = 'bg-primary/40 border border-primary/60 rounded-sm flex items-center justify-center text-white';
            cellContent = <span className="material-symbols-outlined">radio_button_checked</span>;
          } else if (isPentagonCell(row, col)) {
            cellClass = 'bg-primary/20 border border-primary/40 rounded-sm flex items-center justify-center text-primary';
            cellContent = <span className="material-symbols-outlined">pentagon</span>;
          } else {
            cellClass = col % 2 === row % 2 ? 'bg-white/10 rounded-sm' : 'bg-white/5 rounded-sm';
          }

          return (
            <div key={idx} className={`size-10 lg:size-12 ${cellClass}`}>
              {cellContent}
            </div>
          );
        })}
      </div>
    </div>
  );
};
