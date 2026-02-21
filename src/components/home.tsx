import React, { useEffect } from 'react';

/**
 * TS-Λ3 // HOME SUBSTRATE [v1.3.4]
 * Path: src/components/home.tsx
 * Mission: Act Re-sequencing // Labs Liquidation
 * Authority: THE OVERWATCH // SG-CANONICAL-2026
 * Fix: Purged Labs node from main landing flow per directive.
 * Fix: Re-indexed narrative acts into a clinical 6-part sequence.
 * Fix: Maintained MothershipVisualizer as the Act V technical bridge.
 * Status: AUTHORITATIVE // LATCHED
 */

// 🧬 AUTHORITATIVE SECTION LATCHES (Default Imports)
import Hero from './hero.tsx';
import Foundations from './foundations.tsx';
import Methods from './methods.tsx';
import MothershipSection from './mothershipsection.tsx';
import MothershipVisualizer from './mothershipvisualizer.tsx'; // Act V
import Overwatch from './overwatch.tsx'; // Act VI Node

export const Home: React.FC = () => {

    // ⚓ ANCHOR SCROLL LATCH: Ensures deep-linked navigation reaches target coordinates
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

            {/* 🚀 ACT I: THE GENESIS
                Primary entrance axis featuring "Why We Made This" narrative realignment.
                Anchor ID: #hero
            */}
            <Hero />

            {/* 🧬 ACT II: THE DNA
                Strategic foundations and core intelligence pillars.
                Anchor ID: #foundations
            */}
            <Foundations />

            {/* ⚙️ ACT III: THE OPERATIONAL LOOP
                Methodology: Ask -> Pay -> Make -> Play.
                Anchor ID: #methods
            */}
            <Methods />

            {/* 🏛️ ACT IV: THE INFRASTRUCTURE
                Includes high-density MothershipOSLogo (escalated to 650px on desktop).
                Anchor ID: #mothership
            */}
            <MothershipSection />

            {/* 📊 ACT V: THE ORGANIZATION VISUALIZER
                Explicit Act Elevation: Technical HUD simulation and architectural layers.
                Anchor ID: #visualizer
            */}
            <div id="visualizer" className="bg-black py-24">
                <div className="max-w-screen-2xl mx-auto px-6">
                    <MothershipVisualizer />
                </div>
            </div>

            {/* 🛡️ ACT VI: OVERWATCH COMMAND AXIS
                Final tactical latch: 2×2 Grid Substrate and tactical boards.
                Anchor ID: #overwatch
            */}
            <Overwatch />

            {/* 🌌 AMBIENT SUBSTRATE TERMINUS */}
            <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-cyan-500/[0.02] to-transparent pointer-events-none" />

        </div>
    );
};

export default Home;