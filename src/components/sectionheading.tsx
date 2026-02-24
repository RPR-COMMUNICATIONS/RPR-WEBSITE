import React from "react";

/**
 * TS-Λ3 // MASTER HEADING SUBSTRATE [v2.2.0]
 * Path: src/components/sectionheading.tsx
 * Mission: Liquidation of /ui/ folder // Panel Aesthetic Latch
 * Authority: THE OVERWATCH // SG-CANONICAL-2026
 * Status: AUTHORITATIVE // LATCHED
 * Fix: Re-implemented left-aligned "Panel" aesthetic with border-cyan-500.
 * Fix: Aligned with L0-L4 internal header standards.
 */

interface HeadingProps {
  kicker?: string;
  title: string;
  accent?: string; // High-fidelity cyan word
  className?: string;
}

export const SectionHeading: React.FC<HeadingProps> = ({
  kicker,
  title,
  accent,
  className = ""
}) => (
  <header className={`mb-16 border-l-2 border-cyan-500 pl-8 ${className}`}>
    {/* 🧬 KICKER: Operational Metadata Axis */}
    {kicker && (
      <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-slate-500 mb-4 font-bold">
        {kicker}
      </p>
    )}

    {/* 🏛️ PRIMARY TITLE: High-Density "Methods" Truth */}
    <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter leading-[0.9]">
      {title} {accent && <span className="text-cyan-400 ml-2">{accent}</span>}
    </h2>
  </header>
);

export default SectionHeading;