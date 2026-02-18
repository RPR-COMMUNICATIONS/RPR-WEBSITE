import React, { useEffect } from 'react';

/**
 * TS-Λ3 // HOME SUBSTRATE [v1.3.0]
 * Path: src/components/home.tsx
 * Mission: Resolve Component Mounting Mismatch // Narrative Liquidation
 * Authority: THE OVERWATCH // SG-CANONICAL-2026
 * Fix: Purged all hard-coded legacy narrative from Act VI.
 * Fix: Point-locked to <Overwatch /> component as the sole source of truth.
 * Status: AUTHORITATIVE // LATCHED
 */

// 🧬 AUTHORITATIVE SECTION LATCHES
import { Hero } from './hero.tsx';
import { Foundations } from './foundations.tsx';
import { Methods } from './methods.tsx';
import { MothershipSection } from './mothershipsection.tsx';
import { MothershipVisualizer } from './mothershipvisualizer.tsx';
import { Overwatch } from './overwatch.tsx';

export const Home: React.FC = () => {

    // ⚓ ANCHOR SCROLL LATCH
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const timer = setTimeout(() => {
                const element = document.getElementById(hash.substring(1));
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 500);
            return () => clearTimeout(timer);
        }
    }, []);

    return (
        <div className="flex flex-col w-full bg-black relative antialiased">

            {/* 🚀 ACT I: THE GENESIS */}
            <Hero />

            {/* 🧬 ACT II: THE DNA */}
            <Foundations />

            {/* ⚙️ ACT III: THE OPERATIONAL LOOP */}
            <Methods />

            {/* 🏛️ ACT IV: THE INFRASTRUCTURE */}
            <MothershipSection />

            {/* 📊 ACT V: THE ORGANIZATION VISUALISER */}
            <MothershipVisualizer />

            {/* 🛡️ ACT VI: OVERWATCH COMMAND AXIS
                Physical Entry: Refactored 2×2 Grid Substrate.
                Note: All narrative text and tactical boards are now resident
                within the Overwatch component itself to ensure structural parity.
            */}
            <Overwatch />

            {/* 🌌 AMBIENT SUBSTRATE TERMINUS */}
            <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-cyan-500/[0.02] to-transparent pointer-events-none" />

        </div>
    );
};

export default Home;