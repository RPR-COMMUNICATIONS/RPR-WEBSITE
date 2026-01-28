import React from 'react';
import { Link } from 'react-router-dom';

/**
 * TS-Λ3 // GLOBAL FOOTER [v5.0.0]
 * IMPLEMENTATION: Three-row governance layout.
 * ALIGNMENT: Harbor A Mothership (rprcomms.com).
 */
export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#050505] border-t border-white/5 pt-16 pb-8 px-6 md:px-12 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">

        {/* Row 1: Primary Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <nav className="flex flex-wrap gap-x-8 gap-y-4 text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-500">
            <a href="/#foundations" className="hover:text-white transition-colors">Foundations</a>
            <a href="/#methods" className="hover:text-white transition-colors">Methods</a>
            <a href="/#process" className="hover:text-white transition-colors">Process</a>
            <a href="/#overwatch" className="hover:text-white transition-colors">Overwatch</a>
          </nav>
        </div>

        {/* Row 2: Legal & Trust */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 border-y border-white/5 py-8">
          <div className="flex flex-wrap gap-x-8 gap-y-4 text-[9px] font-bold uppercase text-zinc-600">
            <Link to="/legal/privacy" className="hover:text-zinc-400 transition-colors">Privacy Policy</Link>
            <Link to="/legal/terms" className="hover:text-zinc-400 transition-colors">Terms of Use</Link>
            <Link to="/legal/cookies" className="hover:text-zinc-400 transition-colors">Cookie Settings</Link>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-4 text-[9px] font-bold uppercase text-zinc-700">
            <Link to="/legal/security" className="hover:text-zinc-500 transition-colors">Security & Compliance</Link>
            <Link to="/legal/governance" className="hover:text-zinc-500 transition-colors">Responsible AI & Governance</Link>
          </div>
        </div>

        {/* Row 3: Identity & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="text-[10px] font-medium text-zinc-600 tracking-tight">
            © {currentYear} RPR Communications, LLC. All rights reserved.
          </div>

          <div className="flex items-center gap-4 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            {/* TS-Λ3 Authority Marker - Sanitized */}
            <div className="text-[8px] font-mono tracking-[0.3em] text-zinc-500 uppercase">
              Substrate Unified // Harbor A
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};