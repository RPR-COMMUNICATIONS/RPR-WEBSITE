import React from 'react';
import { Hero } from './Hero';
import { Foundations } from './Foundations';
import { Methods } from './Methods';
import { Labs } from './Labs';
import { Overwatch } from './Overwatch';

/**
 * TS-Λ3 // HOME SUBSTRATE [v2.3.1 LINKED]
 * Seating: Hero -> Foundations -> Methods -> Labs -> Overwatch.
 * Authority: hello@butterdime.com
 */
export const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* hero anchor handled within Hero component */}
      <Hero />

      {/* foundations anchor handled within Foundations component */}
      <Foundations />

      {/* methods anchor handled within Methods component */}
      <Methods />

      {/* Prototype Enclave */}
      <Labs />

      {/* overwatch anchor handled within Overwatch component */}
      <Overwatch />
    </div>
  );
};
