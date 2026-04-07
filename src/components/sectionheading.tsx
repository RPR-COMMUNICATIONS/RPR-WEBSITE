import React from "react";

/**
 * TS-Λ3 // MASTER HEADING SUBSTRATE [v2.3.0]
 * Path: src/components/sectionheading.tsx
 * Mission: Section Heading Realignment // Clean Horizontal Lock
 * Authority: THE OVERWATCH // SG-CANONICAL-2026
 * Status: AUTHORITATIVE // LATCHED
 * Fix: Removes stacked accent break, removes left rule dependency,
 * fixes horizontal alignment, and reduces repeated heading heaviness.
 */

interface HeadingProps {
  kicker?: string;
  title: string;
  accent?: string;
  className?: string;
}

export const SectionHeading: React.FC<HeadingProps> = ({
  kicker,
  title,
  accent,
  className = "",
}) => (
  <header className={`mb-12 md:mb-14 max-w-5xl mx-auto text-center ${className}`}>
    <div className="mb-5 flex flex-col items-center gap-1">
      {kicker && (
        <p className="text-[10px] md:text-[11px] font-mono uppercase tracking-[0.34em] text-zinc-500/90 font-semibold">
          {kicker}
        </p>
      )}
      <p className="text-[9px] md:text-[10px] font-mono uppercase tracking-[0.38em] text-cyan-400/60 font-semibold">
        LATCHED // THE_OVERWATCH // SG-2026
      </p>
    </div>

    <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-[-0.04em] leading-[0.92] text-white">
      <span className="text-white">{title}</span>
      {accent && (
        <span className="text-cyan-400 ml-3 inline-block align-baseline">
          {accent}
        </span>
      )}
    </h2>
  </header>
);

export default SectionHeading;