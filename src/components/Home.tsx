import React from 'react';
import { Hero } from './Hero';
import { Foundations } from './Foundations';
import { Labs } from './Labs';
import { Methods } from './Methods';
import { Overwatch } from './Overwatch';

/**
 * TS-Λ3 // HOME SUBSTRATE [v2.2.2]
 * Mission: Narrative Seating & Build Stability
 * Fix: Process import purged (Superseded by Methods).
 * Status: LATCHED // SG-CANONICAL-2026
 */
export const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* HERO SUBSTRATE (v2.4.2 clinical — Hero not HomeHero) */}
      <Hero />

      <section id="foundations">
        <Foundations />
      </section>

      <section id="methods">
        <Methods />
      </section>

      {/* LABS: Product Graduation Tier */}
      <section id="labs">
        <Labs />
      </section>

      {/* 🛡️ STRATEGIC COMMAND */}
      <section id="overwatch">
        <Overwatch />
      </section>
    </div>
  );
};