import React from 'react';

/**
 * CheckmateBoard - Geometric Primitive Board showing checkmate position
 * 
 * Position (algebraic notation, rank 8 at top):
 * - Black pieces (cyan with glow): King f7, Bishop g7, Knight f6, Rook a8, Pawns a2,b2,c2
 * - White pieces (white with glow): King h8 (mated), Queen d5, Queen f3
 * 
 * Black pieces occupy lower ranks, white on top (inverted from standard)
 */
export const CheckmateBoard: React.FC = () => {
  // Helper function to create each row with pieces
  // Rows are indexed from top (rank 8) to bottom (rank 1)
  const createRow = (rank: number) => {
    const squares = [];
    
    for (let file = 0; file < 8; file++) {
      // file: 0=a, 1=b, 2=c, 3=d, 4=e, 5=f, 6=g, 7=h
      let piece = null;
      
      // Rank 8 (top row): a8 has black rook, h8 has white king
      if (rank === 8) {
        if (file === 0) piece = <div className="primitive-rook piece-cyan" />;
        if (file === 7) piece = <div className="primitive-king king-white-glow" />;
      }
      
      // Rank 7: f7 has black king, g7 has black bishop
      if (rank === 7) {
        if (file === 5) piece = <div className="primitive-king king-cyan" />;
        if (file === 6) piece = <div className="primitive-bishop bishop-cyan" />;
      }
      
      // Rank 6: f6 has black knight
      if (rank === 6) {
        if (file === 5) piece = <div className="primitive-knight piece-cyan" />;
      }
      
      // Rank 5: d5 has white queen
      if (rank === 5) {
        if (file === 3) piece = <div className="primitive-queen piece-white-glow queen-white-glow" />;
      }
      
      // Rank 3: f3 has white queen
      if (rank === 3) {
        if (file === 5) piece = <div className="primitive-queen piece-white-glow queen-white-glow" />;
      }
      
      // Rank 2: a2, b2, c2 have black pawns (promoting!)
      if (rank === 2) {
        if (file === 0 || file === 1 || file === 2) {
          piece = (
            <div 
              className="primitive-pawn piece-cyan" 
              style={{ filter: 'drop-shadow(0 0 16px rgba(13, 242, 242, 0.9))' }}
            />
          );
        }
      }
      
      squares.push(
        <div key={file} className="hairline-border flex items-center justify-center">
          {piece}
        </div>
      );
    }
    
    return squares;
  };

  return (
    <div className="relative w-full aspect-square bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 p-2 lg:p-4 rounded-xl shadow-2xl">
      <div className="w-full h-full chess-grid hairline-border">
        {/* Generate all 8 ranks from top (8) to bottom (1) */}
        {createRow(8)}
        {createRow(7)}
        {createRow(6)}
        {createRow(5)}
        {createRow(4)}
        {createRow(3)}
        {createRow(2)}
        {createRow(1)}
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
