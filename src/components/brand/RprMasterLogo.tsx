/**
 * TS-Λ3 // LOGO RECTIFICATION // v3.0.0 (TIGHT-HEAVY)
 * SPEC: Horizontal, Single-Line, 0.15em tracking
 */
import React from 'react';

export const RprMasterLogo: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      {/* AUTHORITATIVE LOGO ICON */}
      <svg className="w-8 h-8" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M50 5L95 82.5H5L50 5Z" stroke="var(--rpr-brand-white)" strokeWidth="4" />
         <circle cx="50" cy="55" r="15" stroke="var(--rpr-brand-white)" strokeWidth="4" />
      </svg>
      
      {/* RECTIFIED TYPOGRAPHY */}
      <span className="text-white font-black uppercase tracking-[0.15em] text-lg leading-none">
        RPR COMMUNICATIONS
      </span>
    </div>
  );
};

export default RprMasterLogo;
