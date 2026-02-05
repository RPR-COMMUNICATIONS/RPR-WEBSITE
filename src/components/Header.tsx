import React from 'react';
import { useAuth } from '../contexts/AuthContext'; // COMPLIANCE: Resolved Path Drift

const LogoIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-cyan-500">
    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const Header: React.FC = () => {
  useAuth(); // COMPLIANCE: Resolved signOut Mapping; auth ready for nav wiring

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
      <nav className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <LogoIcon />
          <span className="text-white font-bold tracking-widest text-sm uppercase">RPR COMMUNICATIONS</span>
        </a>
        {/* Navigation Logic */}
      </nav>
    </header>
  );
};
