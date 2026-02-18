import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Linkedin, BookOpen, Skull, Quote, Activity } from 'lucide-react';

/**
 * TS-Λ3 // OVERWATCH COMMAND AXIS [v6.5.0]
 * Path: src/components/overwatch.tsx
 * Mission: 2×2 Grid Correction // High-Fidelity Visual Integration
 * Authority: THE OVERWATCH // SG-CANONICAL-2026
 * Fix: Unified Identity/Narrative (Left) and Visual-Only Tactical Boards (Right).
 * Fix: Implemented "Fixed" CheckmateBoard and OverwatchLabyrinth from forensic uploads.
 * Status: AUTHORITATIVE // LATCHED
 */

// 🧬 UI PRIMITIVE: TACTICAL PROGRESS
const TacticalProgress: React.FC<{ label?: string }> = ({ label = 'STABILITY_INDEX' }) => {
    return (
        <div className="w-full flex items-center justify-between gap-4 text-[8px] font-mono uppercase tracking-[0.35em] text-slate-600">
            <span>{label}</span>
            <div className="flex-1 flex gap-1 h-0.5">
                {Array.from({ length: 10 }).map((_, i) => (
                    <div
                        key={i}
                        className={`flex-1 rounded-sm transition-all duration-1000 ${i < 7 ? 'bg-cyan-500 shadow-[0_0_8px_rgba(34,211,238,0.7)]' : 'bg-slate-700'}`}
                        style={{ transitionDelay: `${i * 50}ms` }}
                    />
                ))}
            </div>
            <span className="text-[7px] tracking-[0.3em] animate-pulse">LATCHING...</span>
        </div>
    );
};

// ♟️ UI PRIMITIVE: CHECKMATE BOARD (Geometric Forensic Latch)
const CheckmateBoard: React.FC = () => {
    const Square: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
        <div className="border border-white/5 flex items-center justify-center aspect-square bg-black/40">
            {children}
        </div>
    );

    // Geometric primitives for pieces
    const BlackRook = () => <div className="w-3 h-3 bg-cyan-500 rounded-[2px] shadow-[0_0_10px_rgba(34,211,238,0.9)]" />;
    const BlackKing = () => <div className="w-3.5 h-3.5 rounded-full border-2 border-cyan-400 shadow-[0_0_12px_rgba(34,211,238,1)]" />;
    const BlackBishop = () => <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[12px] border-b-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.9)]" />;
    const BlackKnight = () => <div className="w-4 h-4 bg-cyan-400/20 border border-cyan-400 rotate-45 shadow-[0_0_14px_rgba(34,211,238,1)]" />;
    const BlackPawn = () => <div className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(34,211,238,0.9)]" />;
    const WhiteKing = () => <div className="w-3.5 h-3.5 rounded-full bg-white shadow-[0_0_14px_rgba(255,255,255,1)]" />;
    const WhiteQueen = () => <div className="w-3.5 h-3.5 bg-white rotate-45 shadow-[0_0_14px_rgba(255,255,255,1)]" />;

    const createRow = (rank: number) => {
        const squares: React.ReactNode[] = [];
        for (let file = 0; file < 8; file++) {
            // file: 0=a, 1=b, 2=c, 3=d, 4=e, 5=f, 6=g, 7=h
            let piece: React.ReactNode = null;
            if (rank === 8) {
                if (file === 0) piece = <BlackRook />;
                if (file === 7) piece = <WhiteKing />;
            }
            if (rank === 7) {
                if (file === 5) piece = <BlackKing />;
                if (file === 6) piece = <BlackBishop />;
            }
            if (rank === 6 && file === 5) piece = <BlackKnight />;
            if (rank === 5 && file === 3) piece = <WhiteQueen />;
            if (rank === 3 && file === 5) piece = <WhiteQueen />;
            if (rank === 2 && (file === 0 || file === 1 || file === 2)) piece = <BlackPawn />;

            squares.push(<Square key={file}>{piece}</Square>);
        }
        return squares;
    };

    return (
        <div className="w-full max-w-[340px] mx-auto aspect-square bg-black/60 border border-white/10 rounded-2xl overflow-hidden p-1.5 shadow-2xl">
            <div className="grid grid-cols-8 grid-rows-8 w-full h-full border border-white/5">
                {[8, 7, 6, 5, 4, 3, 2, 1].map((rank) => (
                    <React.Fragment key={rank}>{createRow(rank)}</React.Fragment>
                ))}
            </div>
        </div>
    );
};

// 🌀 UI PRIMITIVE: LABYRINTH RADAR (Animated Sigil Latch)
const OverwatchLabyrinth: React.FC = () => {
    const pathRef = useRef<SVGPathElement | null>(null);

    useEffect(() => {
        const path = pathRef.current;
        if (!path) return;
        const length = path.getTotalLength();
        path.style.strokeDasharray = `${length}`;
        path.style.strokeDashoffset = `${length}`;
        const timeout = setTimeout(() => {
            path.style.transition = 'stroke-dashoffset 2.5s cubic-bezier(0.4, 0, 0.2, 1)';
            path.style.strokeDashoffset = '0';
        }, 300);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className="relative w-full aspect-square max-w-[340px] mx-auto overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-2xl group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0f172a_0,#020617_55%,#000000_100%)]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:14px_14px]" />
            </div>
            <div className="relative flex items-center justify-center w-full h-full">
                <svg viewBox="0 0 500 500" className="w-[85%] h-[85%] rotate-12 overflow-visible">
                    {[210, 170, 130, 90, 50].map((r) => (
                        <circle key={r} cx="250" cy="250" r={r} fill="none" stroke="#94a3b8" strokeWidth="0.5" opacity="0.1" />
                    ))}
                    <line x1="250" y1="20" x2="250" y2="480" stroke="#1e293b" strokeWidth="1" />
                    <line x1="20" y1="250" x2="480" y2="250" stroke="#1e293b" strokeWidth="1" />
                    <path
                        ref={pathRef}
                        d="M 250 430 L 250 340 A 140 140 0 0 1 380 250 L 420 250 A 180 180 0 0 0 250 90 L 250 40"
                        fill="none"
                        stroke="#22d3ee"
                        strokeWidth="2"
                        strokeLinecap="round"
                        style={{ filter: 'drop-shadow(0 0 10px rgba(34,211,238,0.9))' }}
                    />
                    <circle cx="250" cy="250" r={9} fill="#22d3ee" style={{ filter: 'drop-shadow(0 0 14px rgba(34,211,238,1))' }} />
                    <rect x="120" y="120" width="16" height="16" fill="#e5e7eb" rx="2" style={{ filter: 'drop-shadow(0 0 10px rgba(229,231,235,0.9))' }} />
                    <polygon points="350,120 366,148 334,148" fill="#e5e7eb" style={{ filter: 'drop-shadow(0 0 10px rgba(229,231,235,0.9))' }} />
                    <rect x="140" y="230" width="18" height="18" fill="#e5e7eb" transform="rotate(45 149 239)" />
                    <circle cx="250" cy="430" r={6} fill="#22d3ee" />
                </svg>
            </div>
            <div className="absolute inset-x-3 bottom-3 flex items-center justify-between text-[8px] font-mono uppercase tracking-widest text-slate-500">
                <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    Sigil path active
                </span>
                <span>Integrity: <span className="text-cyan-400">98.4%</span></span>
            </div>
        </div>
    );
};

export const Overwatch: React.FC = () => {
    const { t } = useTranslation('harbora');

    return (
        <section id="overwatch" className="py-20 md:py-24 relative overflow-hidden bg-black border-t border-white/5">
            <div className="absolute inset-0 bg-cyan-500/[0.02] blur-[160px] pointer-events-none" />

            <div className="max-w-screen-2xl mx-auto px-6 relative z-10">

                {/* 📑 SECTION HEADER */}
                <div className="mb-10 flex items-end justify-between gap-8">
                    <div className="space-y-3">
                        <span className="text-[9px] font-mono text-cyan-500 tracking-[0.5em] uppercase font-black block">
                            {t('overwatch.kicker', 'THE SOLE HUMAN IN THE BUSINESS SETUP.')}
                        </span>
                        <h2 className="text-4xl md:text-6xl font-black italic text-white uppercase tracking-tighter leading-none">
                            THE <span className="text-cyan-400">OVERWATCH</span>
                        </h2>
                    </div>
                    <div className="hidden md:block px-4 py-2 bg-white/5 border border-white/10 rounded-2xl">
                        <p className="font-mono text-[8px] text-slate-500 uppercase tracking-[0.4em]">
                            SYSTEM_STATUS: <span className="text-cyan-500 font-black animate-pulse">LATCHED_PRIMARY</span>
                        </p>
                    </div>
                </div>

                {/* 🏛️ FORENSIC 2×2 GRID CARD */}
                <div className="bg-white/[0.01] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl backdrop-blur-sm">
                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2">

                        {/* 🧬 QUADRANT 1: IDENTITY (Top Left) */}
                        <div className="border-b lg:border-r border-white/10 p-8 md:p-12 flex flex-col justify-between">
                            <div className="space-y-10">
                                <div className="flex items-start gap-8">
                                    <div className="h-24 w-24 rounded-2xl bg-gradient-to-br from-cyan-500/12 to-transparent border border-cyan-500/30 flex items-center justify-center group shadow-2xl">
                                        <Skull className="w-10 h-10 text-cyan-500/40 group-hover:scale-110 transition-transform duration-700" />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="font-mono text-[10px] text-white font-black tracking-[0.3em] uppercase italic">
                                            {t('overwatch.role')}
                                        </p>
                                        <p className="font-mono text-[8px] text-slate-500 uppercase tracking-widest opacity-60">
                                            {t('overwatch.status')}
                                        </p>
                                        <div className="flex gap-4 pt-3">
                                            <a href="https://www.linkedin.com/in/puvan-sivanasan-29707726" target="_blank" rel="noreferrer"><Linkedin size={14} className="text-slate-400 hover:text-cyan-400 transition-colors" /></a>
                                            <a href="https://substack.com/@butterdime" target="_blank" rel="noreferrer"><BookOpen size={14} className="text-slate-400 hover:text-orange-400 transition-colors" /></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-6 text-slate-300 text-sm md:text-base leading-relaxed italic uppercase font-light tracking-tight pr-4">
                                    <p>{t('overwatch.bio_p1')}</p>
                                    <p className="text-slate-500 text-[10px] font-mono leading-relaxed lowercase tracking-tighter opacity-60 border-l border-white/10 pl-6 not-italic">
                    // {t('overwatch.bio_p2')}
                                    </p>
                                </div>
                            </div>
                            <div className="mt-12 pt-6 border-t border-white/5">
                                <TacticalProgress label="IDENTITY_LATCH" />
                            </div>
                        </div>

                        {/* ♟️ QUADRANT 2: CHESSBOARD (Top Right) */}
                        <div className="border-b border-white/10 p-8 md:p-12 flex flex-col items-center justify-center bg-black/40 group/axis1">
                            <div className="w-full space-y-8">
                                <div className="flex items-center gap-4 opacity-30 group-hover/axis1:opacity-60 transition-opacity">
                                    <span className="text-[8px] font-mono text-white uppercase tracking-[0.5em] font-black">Axis_01 // Forensic</span>
                                    <div className="h-px flex-grow bg-white/10" />
                                </div>
                                <CheckmateBoard />
                            </div>
                        </div>

                        {/* 🧪 QUADRANT 3: EXPERIMENT & QUOTE (Bottom Left) */}
                        <div className="lg:border-r border-white/10 p-8 md:p-12 flex flex-col justify-between space-y-12">
                            <div className="space-y-8">
                                <header className="space-y-2">
                                    <div className="flex items-center gap-2 opacity-40">
                                        <Activity className="w-3 h-3 text-cyan-500 animate-pulse" />
                                        <span className="text-[7px] font-mono text-cyan-500 tracking-[0.5em] uppercase font-black">Axis_02 // Narrative</span>
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-black italic text-white uppercase tracking-tighter leading-none font-sans">
                                        {t('overwatch.experiment_title')}
                                    </h3>
                                </header>
                                <div className="space-y-5 text-slate-400 text-[11px] md:text-xs font-mono uppercase leading-relaxed tracking-tighter opacity-80 italic">
                                    <p>{t('overwatch.experiment_p1')}</p>
                                    <p>{t('overwatch.experiment_p2')}</p>
                                    <p className="text-white border-l-2 border-cyan-500 pl-4 font-medium not-italic">
                                        {t('overwatch.experiment_p3')}
                                    </p>
                                </div>
                            </div>

                            {/* MANIFESTO FLOOR LATCH */}
                            <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row md:items-center gap-6 group/quote">
                                <div className="flex-shrink-0 bg-black border border-cyan-500/30 px-3 py-1 rounded-full">
                                    <span className="font-mono text-[7px] text-cyan-500 tracking-[0.3em] uppercase font-black">SOVEREIGN_MANIFESTO</span>
                                </div>
                                <div className="relative">
                                    <Quote className="absolute -left-6 -top-1 w-4 h-4 text-cyan-500/10" />
                                    <blockquote className="text-[11px] md:text-xs font-black italic uppercase leading-tight text-slate-500 tracking-tighter group-hover/quote:text-slate-300 transition-colors duration-700">
                                        {t('overwatch.quote')}
                                    </blockquote>
                                </div>
                            </div>
                        </div>

                        {/* 🌀 QUADRANT 4: LABYRINTH (Bottom Right) */}
                        <div className="p-8 md:p-12 flex flex-col items-center justify-center bg-black/40 group/axis2">
                            <div className="w-full space-y-8">
                                <div className="flex items-center gap-4 opacity-30 group-hover/axis2:opacity-60 transition-opacity">
                                    <span className="text-[8px] font-mono text-white uppercase tracking-[0.5em] font-black">Axis_02 // Spatial</span>
                                    <div className="h-px flex-grow bg-white/10" />
                                </div>
                                <OverwatchLabyrinth />
                            </div>
                        </div>

                    </div>
                </div>

                {/* ⚓ TERMINUS LATCH */}
                <div className="mt-12 flex justify-between items-center opacity-10 select-none font-mono text-[7px] uppercase tracking-[0.8em]">
                    <span>SG-CANONICAL-2026 // OVERWATCH_v6.5.0</span>
                    <div className="flex items-center gap-2">
                        <Skull size={10} />
                        <span>LIVE_AUDIT_ACTIVE</span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Overwatch;