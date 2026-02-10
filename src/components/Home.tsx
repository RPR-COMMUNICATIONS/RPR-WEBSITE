import { useState } from 'react';
import Hero from './Hero';
import Foundations from './Foundations';
import Methods from './Methods';
import { MothershipSection } from './MothershipSection';
import { MothershipVisualizer } from './MothershipVisualizer';
import Labs from './Labs';
import Overwatch from './Overwatch';
import AskOllie from './AskOllie';
import AskOllieLauncher from './AskOllieLauncher';

/**
 * TS-Λ3 // HOME ORCHESTRATOR [v4.5.0]
 * Path: src/components/Home.tsx
 */
const Home = () => {
  const [showOllie, setShowOllie] = useState(false);

  return (
    <div className="flex flex-col relative bg-black">
      <main className="flex-1 flex flex-col">
        <Hero />
        <Foundations />
        <Methods />
        <MothershipSection />
        <MothershipVisualizer />
        <Labs />
        <Overwatch />

        {showOllie && <AskOllie />}
      </main>

      <AskOllieLauncher onClick={() => setShowOllie(!showOllie)} />
    </div>
  );
};

export default Home;
