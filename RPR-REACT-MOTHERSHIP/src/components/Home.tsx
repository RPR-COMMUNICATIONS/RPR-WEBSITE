import React from 'react';
import { Hero } from "./Hero";
import { Foundations } from "./Foundations";
import { Methods } from "./Methods";
import { Process } from "./Process";
import { Labs } from "./Labs";
import { Overwatch } from "./Overwatch";
import { AskOllie } from "./AskOllie";

/**
 * TS-Λ3 // HOME PAGE [v5.0.0]
 * Contains all main sections of the Mothership
 */
export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Foundations />
      <Methods />
      <Process />
      <Labs />
      <Overwatch />
      <AskOllie />
    </>
  );
};
