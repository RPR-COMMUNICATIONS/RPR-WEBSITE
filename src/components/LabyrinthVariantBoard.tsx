import React from 'react';

/**
 * LabyrinthVariantBoard - Planescape-style maze chess board
 *
 * Pieces:
 * - White: King h8, Queen f7
 * - Black: King b2, Rook a1, Bishop d3, Knight f4, Pawns c2 and e3
 *
 * Cyan path connects: a1→b2→c2→d3→e3→f4→f7→h8
 * Planar sigils on: c2, e3, f7
 * Dead squares create maze obstacles
 */
export const LabyrinthVariantBoard: React.FC = () => {
  // Dead squares (blocked/obstacle squares in the maze)
  const deadSquares = new Set([
    '3-3', '3-4', '3-5', // row 6: d6, e6, f6
    '4-2', '4-6', // row 5: c5, g5
    '5-1', '5-7', // row 4: b4, h4
    '6-3', '6-5', // row 3: d3 neighbors
    '1-3', '1-4', '1-5', // row 8: d8, e8, f8
  ]);

  // Sigil squares (planar markers)
  const sigilSquares = new Set(['6-2', '5-4', '1-5']); // c2, e3, f7

  // Helper to check if square is on the path
  const isOnPath = (rank: number, file: number) => {
    const pathSquares = new Set([
      '7-0', // a1
      '6-1', // b2
      '6-2', // c2
      '5-3', // d3
      '5-4', // e3
      '4-5', // f4
      '1-5', // f7
      '0-7', // h8
    ]);
    return pathSquares.has(`${rank}-${file}`);
  };

  // Create each row
  const createRow = (rank: number) => {
    const squares = [];

    for (let file = 0; file < 8; file++) {
      let piece = null;
      const squareKey = `${rank}-${file}`;
      const isDead = deadSquares.has(squareKey);
      const hasSigil = sigilSquares.has(squareKey);

      // Position pieces (rank 0 = rank 8, rank 7 = rank 1 in chess notation)

      // Rank 8 (row 0): h8 has white king
      if (rank === 0 && file === 7) {
        piece = <div className="primitive-king king-white-glow" />;
      }

      // Rank 7 (row 1): f7 has white queen
      if (rank === 1 && file === 5) {
        piece = <div className="primitive-queen piece-white-glow queen-white-glow" />;
      }

      // Rank 4 (row 4): f4 has black knight
      if (rank === 4 && file === 5) {
        piece = <div className="primitive-knight piece-cyan" />;
      }

      // Rank 3 (row 5): d3 has black bishop, e3 has black pawn
      if (rank === 5 && file === 3) {
        piece = <div className="primitive-bishop bishop-cyan" />;
      }
      if (rank === 5 && file === 4) {
        piece = <div className="primitive-pawn piece-cyan" />;
      }

      // Rank 2 (row 6): b2 has black king, c2 has black pawn
      if (rank === 6 && file === 1) {
        piece = <div className="primitive-king king-cyan" />;
      }
      if (rank === 6 && file === 2) {
        piece = <div className="primitive-pawn piece-cyan" />;
      }

      // Rank 1 (row 7): a1 has black rook
      if (rank === 7 && file === 0) {
        piece = <div className="primitive-rook piece-cyan" />;
      }

      const baseClasses = isDead ? 'hairline-border dead-square flex items-center justify-center' : 'hairline-border flex items-center justify-center';
      const pathHighlight = isOnPath(rank, file) ? 'bg-[#0df2f2]/5' : '';

      squares.push(
        <div key={file} className={`${baseClasses} ${pathHighlight} relative`}>
          {piece}
          {hasSigil && (
            <div className="planar-sigil" style={{ zIndex: 5 }} />
          )}
        </div>
      );
    }

    return squares;
  };

  // Calculate path coordinates for SVG overlay
  // Convert chess notation to pixel positions (each square is 12.5% of board)
  const getSquareCenter = (rank: number, file: number) => {
    const x = (file + 0.5) * 12.5; // percentage
    const y = (rank + 0.5) * 12.5; // percentage
    return { x, y };
  };

  const pathPoints = [
    getSquareCenter(7, 0), // a1
    getSquareCenter(6, 1), // b2
    getSquareCenter(6, 2), // c2
    getSquareCenter(5, 3), // d3
    getSquareCenter(5, 4), // e3
    getSquareCenter(4, 5), // f4
    getSquareCenter(1, 5), // f7
    getSquareCenter(0, 7), // h8
  ];

  const pathD = pathPoints.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');

  return (
    <div className="relative w-full aspect-square bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 p-2 lg:p-4 rounded-xl shadow-2xl overflow-hidden">
      <div className="w-full h-full chess-grid hairline-border relative">
        {/* Generate all 8 ranks */}
        {createRow(0)}
        {createRow(1)}
        {createRow(2)}
        {createRow(3)}
        {createRow(4)}
        {createRow(5)}
        {createRow(6)}
        {createRow(7)}

        {/* Cyan Path Overlay */}
        <svg
          className="path-overlay absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          style={{ zIndex: 1 }}
        >
          <path
            d={pathD}
            className="path-line"
          />
          {/* Path nodes */}
          {pathPoints.map((p, i) => (
            <circle
              key={i}
              cx={p.x}
              cy={p.y}
              r="1.5"
              fill="#0df2f2"
              opacity="0.8"
              style={{ filter: 'drop-shadow(0 0 3px rgba(13, 242, 242, 0.9))' }}
            />
          ))}
        </svg>
      </div>

      {/* Board labels */}
      <div className="absolute -bottom-8 left-0 w-full flex justify-around text-[10px] font-bold text-slate-500 uppercase tracking-widest px-8">
        <span>A</span><span>B</span><span>C</span><span>D</span><span>E</span><span>F</span><span>G</span><span>H</span>
      </div>
      <div className="absolute -left-8 top-0 h-full flex flex-col justify-around text-[10px] font-bold text-slate-500 uppercase tracking-widest py-8">
        <span>8</span><span>7</span><span>6</span><span>5</span><span>4</span><span>3</span><span>2</span><span>1</span>
      </div>
    </div>
  );
};
