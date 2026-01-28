import React from 'react';
import { Hero } from "./Hero";
import { Foundations } from "./Foundations";
import { Methods } from "./Methods";
import { Process } from "./Process";
import { Overwatch } from "./Overwatch";
import { Labs } from "./Labs";
import { AskOllie } from "./AskOllie";

/**
 * TS-Λ3 // HOME PAGE [v5.2.0]
 * Contains all main sections of the Mothership
 * Navigation: FOUNDATIONS → METHODS → PROCESS → OVERWATCH → LABS
 * Engineering Cycle: Foundations → Methods → Process → Overwatch (strategic closure)
 */
export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Foundations />
      <Methods />
      <Process />
      <Overwatch />
      <Labs />
      <AskOllie />
    </>
  );
};