// PATH: src/pages/labs/babblestandard.tsx
// STATUS: ACTIVE // PHASE_9_GOVERNANCE
// AUTHORITY: RPR COMMUNICATIONS LLC
// MISSION: The Babble Framework // Sovereign Perception & Evidence
// LATCH: Protocol-Tool Integration v3.2.2

import React from 'react';
import { useTranslation } from 'react-i18next';

const BabbleStandard: React.FC = () => {
    const { t } = useTranslation('babble');

    return (
        <div className="bg-[#0e0e0e] min-h-screen text-white font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden relative">
            {/* Substrate Watermark */}
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-[15deg] font-mono text-[20vw] font-black text-cyan-500/[0.03] pointer-events-none z-0 whitespace-nowrap">
                BABBLE
            </div>

            <main className="py-20 px-4 md:px-12 max-w-7xl mx-auto relative z-10">
                {/* Classification Header */}
                <header className="mb-12">
                    <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-neutral-800 pb-8">
                        <div className="max-w-4xl">
                            <h2 className="font-mono text-cyan-400 text-sm font-black tracking-[0.4em] mb-4 uppercase italic">
                                {t('header.classification', 'TS-Λ3 // SOVEREIGN_PERCEPTION')}
                            </h2>
                            <h1 className="font-black text-5xl md:text-7xl tracking-tighter uppercase leading-[0.9] mb-6">
                                THE BABBLE <br />
                                <span className="text-cyan-400">FRAMEWORK</span>
                            </h1>
                            <p className="text-zinc-100 font-bold text-xl md:text-2xl tracking-tight mb-2">
                                Business identification, reimagined.
                            </p>
                            <p className="text-zinc-400 font-medium text-lg md:text-xl leading-relaxed max-w-2xl">
                                The next leap in individual verification, driven by
                                <span className="text-white"> human experience </span>
                                and <span className="text-cyan-400"> artificial intelligence</span>.
                            </p>
                        </div>
                        <div className="mt-8 md:mt-0 text-right flex flex-col items-end">
                            <div className="bg-cyan-400/10 border border-cyan-400/20 px-3 py-1 mb-4">
                                <span className="font-mono text-[10px] text-cyan-400 font-bold uppercase tracking-widest">
                                    v3.2.2_LOCKED
                                </span>
                            </div>
                            <p className="font-mono text-[10px] text-neutral-500 uppercase tracking-tighter">REF: BABBLE-FRAMEWORK-2026</p>
                            <p className="font-mono text-[10px] text-neutral-500 uppercase tracking-tighter">OS: MOTHERSHIP_LOCKED</p>
                            <div className="flex justify-end gap-1 mt-2">
                                <div className="w-1 h-1 bg-cyan-400 animate-pulse"></div>
                                <div className="w-1 h-1 bg-cyan-400"></div>
                                <div className="w-1 h-1 bg-cyan-400 opacity-50"></div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* 1. The Governance Pivot */}
                <section className="mb-12">
                    <div className="bg-[#131313] p-8 border-l-4 border-cyan-400 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-cyan-400/20 uppercase font-bold tracking-widest">
                            [ FRAMEWORK_ORCHESTRATOR ]
                        </div>
                        <h3 className="font-black text-2xl uppercase mb-6 flex items-center gap-3">
                            <span className="w-8 h-[2px] bg-cyan-400"></span>
                            Sovereign Identity Verification
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="space-y-4">
                                <p className="text-neutral-400 leading-relaxed text-lg">
                                    The Babble Framework provides the{' '}
                                    <span className="text-white font-bold">Protocols</span> and{' '}
                                    <span className="text-cyan-400 font-bold">Tools</span> needed for
                                    individual identification across high‑trust sectors – resolving whether a specific human is present,
                                    authorised, and operating inside the permitted jurisdictional and policy envelope.
                                </p>
                                <p className="text-sm text-neutral-500 italic">
                                    {t('big_idea.body', 'By bridging physical sensor hardware with secure digital enclaves, Babble creates a "Truth Latch" for the Real Economy—liquidating the gap between urban sophistication and regional reality.')}
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-black/50 p-4 border border-neutral-800 hover:border-cyan-400 transition-colors">
                                    <h4 className="font-mono text-[10px] text-cyan-400 mb-2 uppercase tracking-widest font-bold">Insurance (IFRS 17)</h4>
                                    <p className="text-[10px] text-neutral-500 uppercase leading-tight">Forensic identification and non‑repudiable loss‑event reconstruction.</p>
                                </div>
                                <div className="bg-black/50 p-4 border border-neutral-800 hover:border-cyan-400 transition-colors">
                                    <h4 className="font-mono text-[10px] text-cyan-400 mb-2 uppercase tracking-widest font-bold">Banking (KYC/AML)</h4>
                                    <p className="text-[10px] text-neutral-500 uppercase leading-tight">High‑assurance liveness and contextual checks for onboarding.</p>
                                </div>
                                <div className="bg-black/50 p-4 border border-neutral-800 hover:border-cyan-400 transition-colors">
                                    <h4 className="font-mono text-[10px] text-cyan-400 mb-2 uppercase tracking-widest font-bold">Child Protection</h4>
                                    <p className="text-[10px] text-neutral-500 uppercase leading-tight">Guardian verification and safe‑zone enforcement for age‑gated services.</p>
                                </div>
                                <div className="bg-black/50 p-4 border border-neutral-800 hover:border-cyan-400 transition-colors">
                                    <h4 className="font-mono text-[10px] text-cyan-400 mb-2 uppercase tracking-widest font-bold">State & Audit</h4>
                                    <p className="text-[10px] text-neutral-500 uppercase leading-tight">Immutable WORM evidence rails for court‑grade admissibility.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. Regulatory Handshake: Protocols */}
                <section className="mb-12">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-2 h-2 bg-cyan-400"></div>
                        <h3 className="font-bold text-2xl uppercase tracking-tighter">International Governance Protocols</h3>
                        <div className="flex-grow h-[1px] bg-neutral-800"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-neutral-900/30 border border-neutral-800 p-6 relative group">
                            <div className="absolute top-0 right-0 p-2 font-mono text-[8px] text-neutral-700">STD_REF: EU-eIDAS</div>
                            <h4 className="font-mono text-cyan-400 text-xs font-bold uppercase mb-4 tracking-widest">EU Trust & Identity</h4>
                            <p className="text-[11px] text-neutral-400 leading-relaxed">Interoperable with European trust services for high-trust electronic identification across borders.</p>
                        </div>
                        <div className="bg-neutral-900/30 border border-neutral-800 p-6 relative group">
                            <div className="absolute top-0 right-0 p-2 font-mono text-[8px] text-neutral-700">STD_REF: FATF / KYC</div>
                            <h4 className="font-mono text-cyan-400 text-xs font-bold uppercase mb-4 tracking-widest">Financial Crime Controls</h4>
                            <p className="text-[11px] text-neutral-400 leading-relaxed">Enforcing Customer Due Diligence (CDD) through forensically anchored digital onboarding.</p>
                        </div>
                        <div className="bg-neutral-900/30 border border-neutral-800 p-6 relative group">
                            <div className="absolute top-0 right-0 p-2 font-mono text-[8px] text-neutral-700">STD_REF: NIST / COPPA</div>
                            <h4 className="font-mono text-cyan-400 text-xs font-bold uppercase mb-4 tracking-widest">High-Assurance / Minors</h4>
                            <p className="text-[11px] text-neutral-400 leading-relaxed">Identity assurance patterns aligned with national child-protection regimes and age-gating.</p>
                        </div>
                    </div>
                </section>

                {/* 3. The Sensory Tools */}
                <section className="mb-12">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-2 h-2 bg-cyan-400"></div>
                        <h3 className="font-bold text-2xl uppercase tracking-tighter">The Tool Suite: Forensic Rails</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-[#131313] border-b-4 border-cyan-400/20 hover:border-cyan-400 transition-all p-6 group">
                            <div className="h-16 flex items-center mb-4">
                                <span className="material-symbols-outlined text-4xl text-cyan-400">biotech</span>
                            </div>
                            <h4 className="font-mono text-white text-sm font-bold uppercase mb-2">Babble Vision</h4>
                            <p className="text-xs text-neutral-400 leading-relaxed">Detects physical light-bounce and depth geometry to distinguish live humans from screens or masks.</p>
                        </div>
                        <div className="bg-[#131313] border-b-4 border-cyan-400/20 hover:border-cyan-400 transition-all p-6 group">
                            <div className="h-16 flex items-center mb-4">
                                <span className="material-symbols-outlined text-4xl text-cyan-400">graphic_eq</span>
                            </div>
                            <h4 className="font-mono text-white text-sm font-bold uppercase mb-2">Babble Audio</h4>
                            <p className="text-xs text-neutral-400 leading-relaxed">Forensic EQ analysis of speech and room acoustics to preserve environmental truth.</p>
                        </div>
                        <div className="bg-[#131313] border-b-4 border-cyan-400/20 hover:border-cyan-400 transition-all p-6 group">
                            <div className="h-16 flex items-center mb-4">
                                <span className="material-symbols-outlined text-4xl text-cyan-400">settings_input_antenna</span>
                            </div>
                            <h4 className="font-mono text-white text-sm font-bold uppercase mb-2">Babble Machine</h4>
                            <p className="text-xs text-neutral-400 leading-relaxed">Ingests machine-native signals (GNSS, RSSI, CAN-bus) as primary witnesses to events.</p>
                        </div>
                    </div>
                </section>

                {/* 4. Forensic Ingestion & Navigation Latch */}
                <section className="mb-12">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-2 h-2 bg-cyan-400"></div>
                        <h3 className="font-bold text-2xl uppercase tracking-tighter">Forensic Navigation & IoT Ingestion</h3>
                        <div className="flex-grow h-[1px] bg-neutral-800"></div>
                    </div>
                    <div className="bg-[#131313] p-8 border border-neutral-800 relative overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="space-y-6">
                                <h4 className="font-black text-xl uppercase italic text-white">Multi-Sensor Validation</h4>
                                <p className="text-neutral-400 text-sm leading-relaxed">
                                    Babble rejects consumer-grade "Single Point" location data. Every navigation event is established via a
                                    four-tier stack (GNSS, Wi-Fi BSSID, Cell Multilateration, and Inertial PDR) to detect
                                    and prevent GPS spoofing during forensic inspections.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 font-mono text-[9px] uppercase tracking-widest font-bold">AGPS_FIX_LATCHED</span>
                                    <span className="px-3 py-1 bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 font-mono text-[9px] uppercase tracking-widest font-bold">BSSID_CROSS_REF</span>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <h4 className="font-black text-xl uppercase italic text-white">Messenger Access Plane</h4>
                                <p className="text-neutral-400 text-sm leading-relaxed">
                                    Orchestrated via WhatsApp, WeChat, and Telegram APIs. The messaging interface triggers
                                    real-time sensor ingestion prompts while anchoring all binary data (OBD-II/CAN-bus)
                                    to a WORM-stored ledger for regulatory non-repudiation.
                                </p>
                                <ul className="grid grid-cols-3 gap-2">
                                    <li className="bg-black/40 border border-neutral-800 p-2 text-center font-mono text-[8px] text-neutral-500 uppercase">WhatsApp_API</li>
                                    <li className="bg-black/40 border border-neutral-800 p-2 text-center font-mono text-[8px] text-neutral-500 uppercase">WeChat_Mini</li>
                                    <li className="bg-black/40 border border-neutral-800 p-2 text-center font-mono text-[8px] text-neutral-500 uppercase">Telegram_Bot</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Triple-Anchor Latch: The Protocol Enforcer */}
                <section className="mb-12 bg-black border border-neutral-800 p-1">
                    <div className="grid grid-cols-1 lg:grid-cols-4">
                        <div className="p-8 lg:border-r border-neutral-800 bg-[#131313]">
                            <h3 className="font-black text-3xl uppercase tracking-tighter leading-none mb-4 text-cyan-400">
                                TRIPLE
                                <br />
                                ANCHOR
                                <br />
                                LATCH
                            </h3>
                            <p className="font-mono text-[10px] text-neutral-500 uppercase tracking-tighter">ENFORCING_PROTOCOL_INTEGRITY</p>
                        </div>
                        <div className="p-8 border-b lg:border-b-0 lg:border-r border-neutral-800 flex flex-col justify-between">
                            <div>
                                <h4 className="font-bold text-lg uppercase mb-2">SPACE</h4>
                                <p className="text-xs text-neutral-400 italic">Verifies the physical locus of the evidence strike.</p>
                            </div>
                            <div className="font-mono text-[10px] text-cyan-400 mt-4 uppercase">Jurisdiction: MY_ONSHORE</div>
                        </div>
                        <div className="p-8 border-b lg:border-b-0 lg:border-r border-neutral-800 flex flex-col justify-between">
                            <div>
                                <h4 className="font-bold text-lg uppercase mb-2">IDENTITY</h4>
                                <p className="text-xs text-neutral-500 italic">Binds the person/machine to the data through a hardware vault.</p>
                            </div>
                            <div className="font-mono text-[10px] text-cyan-400 mt-4 uppercase">Seal: PROVENANCE_SEALED</div>
                        </div>
                        <div className="p-8 flex flex-col justify-between">
                            <div>
                                <h4 className="font-bold text-lg uppercase mb-2">TIME</h4>
                                <p className="text-xs text-neutral-500 italic">Guarantees temporal placement via drift-corrected sovereign clocks.</p>
                            </div>
                            <div className="font-mono text-[10px] text-cyan-400 mt-4 uppercase">Clock: ASIA_SE_CLOCK</div>
                        </div>
                    </div>
                </section>

                {/* Framework Statement */}
                <section className="mb-12">
                    <div className="bg-black border-2 border-cyan-400/40 p-10 relative">
                        <div className="max-w-3xl">
                            <h3 className="font-mono text-cyan-400 font-bold tracking-widest text-lg mb-4 uppercase">Governance Affirmation</h3>
                            <p className="text-xl leading-relaxed text-white mb-6 italic font-light">
                                &quot;The Babble Framework constitutes a sovereign orchestration of governance protocols and forensic tools, ensuring that individual identification, financial transactions, insurance events, and minor-protection flows can be anchored to globally recognisable standards while remaining tenant-sovereign.&quot;
                            </p>
                            <div className="flex gap-3">
                                <span className="bg-cyan-400/10 border border-cyan-400/30 px-3 py-1 font-mono text-[9px] text-cyan-400 uppercase tracking-widest">
                                    AUTHORITY: RPR COMMUNICATIONS LLC
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="w-full py-6 px-12 flex flex-col md:flex-row justify-between items-center bg-black border-t border-neutral-800 relative z-50">
                <div className="font-mono text-[10px] uppercase text-neutral-600 tracking-widest">
                    © 2026 THE BABBLE FRAMEWORK // SOVEREIGN_ENCLAVE_SINGAPORE
                </div>
                <div className="flex gap-8 mt-4 md:mt-0">
                    <span className="font-mono text-[10px] uppercase text-cyan-400/50">LATCHED_V3.2.2</span>
                    <span className="font-mono text-[10px] uppercase text-neutral-700">AUDIT_READY</span>
                </div>
            </footer>
        </div>
    );
};

export default BabbleStandard;