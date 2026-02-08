import React from 'react';
import { Hero } from './Hero';
import { Foundations } from './Foundations';
import { MothershipSection } from './MothershipSection';
import { Methods } from './Methods';
import { Overwatch } from './Overwatch';
import { Architecture } from './Architecture';
import { AskOllie } from './AskOllie';

/**
 * TS-Λ3 // HOME SUBSTRATE [v2.4.2]
 * Mission: Narrative Seating & Build Stability
 * Status: LATCHED // SG-CANONICAL-2026
 */
export const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Hero />

      <Architecture />

      <Foundations />

      <MothershipSection />

      <Overwatch />

      <AskOllie />

      <Methods />
    </div>
  );
};