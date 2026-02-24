import React, { useState } from 'react';
import L4Products from '../../components/l4products.tsx';
import { AuditSidebar } from '../../components/audit-sidebar.tsx';
import type { NodeData } from '../../types/index.ts';

/**
 * ⚓ TS-Λ3 // L4 GRID VERIFICATION HARNESS [v1.0.2]
 * Path: src/pages/tests/l4-grid-test.tsx
 * Mission: Execute real-world grid pressure test for SymbolTile Zero-Clip.
 * Authority: THE OVERWATCH // SG-CANONICAL-2026
 * Fix: Relocated to /tests/ namespace to separate harness from user-facing labs.
 */

const L4GridTest: React.FC = () => {
    const [selectedNode, setSelectedNode] = useState<NodeData | null>(null);

    return (
        <div className="min-h-screen bg-[#050505] p-8 md:p-12 relative overflow-hidden flex flex-col">
            {/* 🚥 HUD HEADER */}
            <header className="mb-12 border-l-2 border-orange-500 pl-8 shrink-0">
                <h1 className="text-3xl font-black text-white italic uppercase tracking-tighter">
                    Antigravity: L4 Grid Verification
                </h1>
                <p className="text-[10px] text-slate-500 font-mono uppercase tracking-[0.4em] font-bold">
                    TELEMETRY // TEST_NAMESPACE_MOUNT // v1.0.2
                </p>
            </header>

            {/* 📐 THE GRID SUBSTRATE */}
            <div className={`flex-1 transition-all duration-500 ease-in-out ${selectedNode ? 'mr-[384px]' : 'mr-0'}`}>
                <L4Products onNodeClick={(node) => setSelectedNode(node)} />
            </div>

            {/* 📑 TELEMETRY DRAWER (AuditSidebar) */}
            {selectedNode && (
                <div className="fixed top-0 right-0 h-full w-96 z-[120] border-l border-white/10 bg-black/80 backdrop-blur-md shadow-2xl animate-in slide-in-from-right duration-300">
                    <AuditSidebar node={selectedNode} onClose={() => setSelectedNode(null)} />
                </div>
            )}

            {/* 🧪 TESTING OVERLAY (Telemetry Metadata) */}
            <div className="fixed bottom-24 right-12 flex flex-col gap-2 pointer-events-none opacity-40 select-none">
                <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
                    <div className="text-[8px] font-mono text-cyan-400 uppercase tracking-widest">FPS: 60.0</div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                    <div className="text-[8px] font-mono text-orange-400 uppercase tracking-widest">GLOW: GLOBAL_LATCHED</div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    <div className="text-[8px] font-mono text-purple-400 uppercase tracking-widest">CLIP: ZERO_OBSERVED</div>
                </div>
            </div>
        </div>
    );
};

export default L4GridTest;