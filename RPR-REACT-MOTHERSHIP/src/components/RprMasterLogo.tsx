import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/branding/rpr-communications-white.svg';

export const RprMasterLogo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center gap-4">
      <div className="relative group h-10 w-10 flex items-center justify-center">
        <div className="absolute inset-0 bg-primary/20 blur-lg group-hover:bg-primary/40 transition-all duration-700"></div>
        <img src={logo} alt="RPR Communications" className="h-10 w-10 relative z-10" />
      </div>
      <div className="flex flex-col leading-none">
        <span className="font-black text-xl tracking-tighter uppercase text-white">RPR</span>
        <span
          className="text-[9px] font-bold text-primary uppercase mt-1"
          style={{ letterSpacing: '0.15em' }}
        >
          Communications
        </span>
      </div>
    </Link>
  );
};
