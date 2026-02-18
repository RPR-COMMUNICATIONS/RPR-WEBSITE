import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronRight, ShieldCheck, Box, Cpu } from 'lucide-react';

/**
 * TS-Λ3 // LABYRINTH GAME PLANE [v1.0.0]
 * Path: src/components/labyrinth.tsx
 * Mission: Spatial Reasoning Visualization // The Chessboard Latch
 * Authority: THE OVERWATCH // SG-CANONICAL-2026
 * Status: AUTHORITATIVE // LATCHED
 * * DESIGN LOGIC:
 * 1. THE GRID: 5x5 Reasoning Plane representing the C4 stack.
 * 2. THE ACTORS: Daedalus (The Engine) and Icarus (The Pilot) moves.
 * 3. THE MOAT: Sentinel-enforced boundaries visualized as "locked" squares.
 */

// 🧬 AUTHORITATIVE UI LATCHES
import SectionHeading from './sectionheading.tsx';
import SymbolTile from './icons/symboltile.tsx';
import SovereignGlass from './sovereignglass.tsx';

const GRID_SIZE = 5;

export const Labyrinth: React.FC = () => {
    const { t: _t } = useTranslation('harborA');
    const [activeSquare, setActiveSquare] = useState<[number, number] | null>([2, 2]);

    // ♟️ MOCK REASONING STATE
    const getSquareStatus = (x: number, y: number) => {
        if (x === activeSquare?.[0] && y === activeSquare?.[1]) return 'ACTIVE_NODE';
        if ((x + y) % 3 === 0) return 'GOVERNED_BY_SENTINEL';
        return 'LATENT_SUBSTRATE';
    };

    return (
        <section id="labyrinth" className="py-32 bg-black overflow-hidden border-t border-white/5 relative">
            <div className="max-w-screen-2xl mx-auto px-6 md:px-24">

                <SectionHeading
                    kicker="REASONING PLANE // THE GAME"
                    title="THE"
                    accent="LABYRINTH"
                    className="mb-20"
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                    {/* ♟️ 01. THE CHESSBOARD (The Spatial Grid) */}
                    <div className="lg:col-span-7 flex justify-center perspective-[2000px]">
                        <div className="relative rotate-x-[35deg] rotate-z-[15deg] transform-style-3d group">

                            {/* Grid Background Glow */}
                            <div className="absolute inset-[-40px] bg-cyan-500/5 blur-[100px] rounded-full opacity-40 animate-pulse" />

                            <div className="grid grid-cols-5 grid-rows-5 gap-2 md:gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl shadow-[0_40px_100px_rgba(0,0,0,0.8)] relative z-10">
                                {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, i) => {
                                    const x = i % GRID_SIZE;
                                    const y = Math.floor(i / GRID_SIZE);
                                    const status = getSquareStatus(x, y);
                                    const isActive = x === activeSquare?.[0] && y === activeSquare?.[1];

                                    return (
                                        <div
                                            key={i}
                                            onClick={() => setActiveSquare([x, y])}
                                            className={`
                        w-12 h-12 md:w-20 md:h-20 rounded-xl border transition-all duration-700 cursor-pointer relative flex items-center justify-center
                        ${isActive
                                                    ? 'bg-cyan-500/20 border-cyan-500 shadow-[0_0_40px_rgba(34,211,238,0.3)] translate-z-8'
                                                    : 'bg-black/40 border-white/5 hover:border-white/20 hover:bg-white/5'}
                      `}
                                        >
                                            {/* 🛡️ SENTINEL INDICATOR */}
                                            {status === 'GOVERNED_BY_SENTINEL' && !isActive && (
                                                <ShieldCheck size={14} className="text-white/10" />
                                            )}

                                            {/* 🤖 ACTOR LATCH (DAEDALUS) */}
                                            {isActive && (
                                                <div className="relative">
                                                    <SymbolTile glyph="robot" size={32} active={true} iconFill={1} variant="none" className="border-transparent" />
                                                    <div className="absolute inset-0 bg-cyan-500/20 blur-lg rounded-full animate-ping" />
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* 📜 02. NARRATIVE SIDECARD */}
                    <div className="lg:col-span-5 space-y-10 relative z-20">

                        <SovereignGlass className="border-cyan-500/20 bg-cyan-950/5 p-10">
                            <header className="mb-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <Cpu size={14} className="text-cyan-500" />
                                    <span className="font-mono text-[9px] text-cyan-500 tracking-[0.4em] font-black uppercase">
                                        ACTIVE_REASONING_SESSION
                                    </span>
                                </div>
                                <h3 className="text-3xl font-black italic uppercase tracking-tighter text-white">
                                    The Game of <br /><span className="text-cyan-400">Sovereignty</span>
                                </h3>
                            </header>

                            <div className="space-y-6 text-slate-400 text-sm font-mono leading-relaxed uppercase tracking-tighter">
                                <p>
                                    Current Node: <span className="text-white font-black">X_{activeSquare?.[0]} Y_{activeSquare?.[1]}</span>
                                </p>
                                <p className="border-l border-white/10 pl-6 italic">
                  // THE LABYRINTH is not a UI; it is the physical layout of your company’s logic. In this plane, DAEDALUS calculates the drift while ICARUS pilot’s the intent.
                                </p>

                                <div className="pt-6 space-y-4">
                                    <div className="flex items-center gap-4 group cursor-pointer hover:text-cyan-400 transition-colors">
                                        <Box size={14} />
                                        <span className="text-[10px] tracking-widest font-black">DEPLOY_CONTRACT_BOND</span>
                                        <ChevronRight size={12} className="ml-auto opacity-40" />
                                    </div>
                                    <div className="flex items-center gap-4 group cursor-pointer hover:text-red-400 transition-colors">
                                        <ShieldCheck size={14} />
                                        <span className="text-[10px] tracking-widest font-black">RECALL_AGENT_AUTHORITY</span>
                                        <ChevronRight size={12} className="ml-auto opacity-40" />
                                    </div>
                                </div>
                            </div>
                        </SovereignGlass>

                        <div className="px-6 py-4 bg-white/5 rounded-full border border-white/10 flex justify-between items-center opacity-40 select-none">
                            <span className="text-[8px] font-mono uppercase tracking-widest">Protocol: TS-Λ3 Labyrinth</span>
                            <span className="text-[8px] font-mono text-cyan-500">LIVE_TELEMETRY</span>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Labyrinth;