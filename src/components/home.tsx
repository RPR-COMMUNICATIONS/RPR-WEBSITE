import React, { useEffect } from 'react';

/**
 * TS-Λ3 // HOME SUBSTRATE [v1.5.2]
 * Path: src/components/home.tsx
 * Mission: Mobile Gutter Liquidation // Bezel-Aware Compression
 * Authority: THE OVERWATCH // SG-CANONICAL-2026
 * Status: AUTHORITATIVE // LATCHED
 * Fix: Compressed vertical gaps between Act IV, IV-B, and Act V.
 * Fix: Removed redundant py-12 wrapper on #visualizer for zero-void transition.
 */

// 🧬 AUTHORITATIVE SECTION LATCHES (Default Imports)
import Hero from './hero.tsx';
import Foundations from './foundations.tsx';
import Methods from './methods.tsx';
import MothershipSection from './mothershipsection.tsx';
import MothershipVisualizer from './mothershipvisualizer.tsx'; // Act V
import Overwatch from './overwatch.tsx'; // Act VI Node

export const Home: React.FC = () => {

    /**
     * ⚓ ANCHOR SCROLL LATCH
     * Ensures deep-linked navigation reaches target coordinates.
     * Calibrated with a 600ms delay to allow for substrate hydration.
     */
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const timer = setTimeout(() => {
                const element = document.getElementById(hash.substring(1));
                if (element) {
                    // 📐 Logical Scroll Axis: offset accounts for the fixed header
                    const offset = 100;
                    const bodyRect = document.body.getBoundingClientRect().top;
                    const elementRect = element.getBoundingClientRect().top;
                    const elementPosition = elementRect - bodyRect;
                    const offsetPosition = elementPosition - offset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }, 600);
            return () => clearTimeout(timer);
        }
    }, []);

    return (
        <div className="flex flex-col w-full bg-black relative antialiased overflow-x-hidden">

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

            {/* 🔍 ACT IV-B: THE PERCEPTION RAIL
                Compressed padding: py-8 on mobile, py-12 on desktop to remove voids.
                Anchor ID: #perception
            */}
            <div id="perception" className="bg-black border-y border-white/[0.05]">
                <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 py-8 md:py-12">
                    <div className="bg-[#131313] border-l-4 border-cyan-400 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="max-w-2xl min-w-0">
                            <h3 className="font-mono text-cyan-400 text-[10px] font-bold tracking-[0.3em] uppercase mb-4">Sovereign Perception Rail</h3>
                            <h4 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-4 break-words">Babble Framework // v3.0.0</h4>
                            <p className="text-neutral-400 text-xs md:text-sm leading-relaxed mb-6 break-words">
                                Correcting the broken conversion layer. Restoring Sight, Sound, and Language to the digital rail through the Triple-Anchor Latch.
                            </p>
                            <a
                                href="/labs/babble"
                                className="inline-block bg-cyan-400 text-[#004b56] px-6 py-3 md:px-8 md:py-3 font-mono text-[10px] font-bold uppercase hover:shadow-[0_0_20px_rgba(58,223,250,0.4)] transition-all"
                            >
                                Access Perception Standard
                            </a>
                        </div>
                        {/* Hidden on small mobile to prevent horizontal cut-off */}
                        <div className="hidden sm:flex gap-4 shrink-0">
                            <div className="w-10 h-10 border border-white/10 flex items-center justify-center">
                                <span className="material-symbols-outlined text-cyan-400/40">visibility</span>
                            </div>
                            <div className="w-10 h-10 border border-white/10 flex items-center justify-center">
                                <span className="material-symbols-outlined text-cyan-400/40">settings_voice</span>
                            </div>
                            <div className="w-10 h-10 border border-white/10 flex items-center justify-center">
                                <span className="material-symbols-outlined text-cyan-400/40">key</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 📊 ACT V: THE ORGANIZATION VISUALIZER
                Explicit Act Elevation: Technical HUD simulation and architectural layers.
                Fix: Redundant padding removed to latch directly to #perception.
                Anchor ID: #visualizer
            */}
            <div id="visualizer" className="bg-black py-4 sm:py-12">
                <div className="max-w-screen-2xl mx-auto px-4 sm:px-6">
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

            {/* ⚓ MECHANICAL MARKER */}
            <div className="hidden">SG-CANONICAL-2026 // HOME-v1.5.2-STABLE</div>
        </div>
    );
};

export default Home;