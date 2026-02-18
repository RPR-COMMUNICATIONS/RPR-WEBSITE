/**
 * TS-Λ3 // MASTER TYPE LATCH [v4.9.1]
 * Path: src/types/index.ts
 * Mission: Authoritative Source of Truth for NodeData & Forensic Ledger
 * Authority: THE OVERWATCH // SG-CANONICAL-2026
 * Fix: Explicitly added 'glyph' to NodeData to resolve TS2339/TS2353 in visualizer layers.
 */

/**
 * 🧬 AUDIT TRAIL SUBSTRATE
 * Metadata for forensic pulse logging and system-level changes.
 */
export interface AuditTrail {
  timestamp: string;
  user: string;
  action: string;
  details?: string;
}

/**
 * 🛰️ NODE DATA
 * Primary interface for architectural nodes within the Mothership Visualizer.
 * Used across L0-L4 layers to define system blocks and actors.
 */
export interface NodeData {
  id: string;
  name: string;
  type: string;
  description: string;
  glyph?: string; // 🧬 Required for Material Symbol rendering in Sidebars
  auditTrail?: AuditTrail[];
  layer?: 'L0' | 'L1' | 'L2' | 'L3' | 'L4';
}

/**
 * 📐 LAYER PROPS
 * Standard prop interface for L1-L4 visualizer stages.
 */
export interface LayerProps {
  onNodeClick: (node: NodeData) => void;
}

/**
 * ⚖️ FORENSIC STATE MACHINE
 * Status identifiers for financial ledger verification.
 */
export type ForensicStatus =
  | 'PENDING'
  | 'EXTRACTED'
  | 'VALIDATED'
  | 'APPROVED'
  | 'USER_REVIEWED'
  | 'FLAGGED';

/**
 * 🏛️ LEDGER ENTRY
 * Physical ledger substrate for SME accounting data.
 */
export interface LedgerEntry {
  id: string;
  transactionId?: string;
  yearId?: string;
  entityId?: string;
  date: string;
  description: string;
  accountCode?: string;
  debit: number | null;
  credit: number | null;
  amount?: number;
  status: ForensicStatus | string;
  category: string;
}

/**
 * 🖼️ UI LEDGER ENTRY
 * UI-specific extension for rendering complex ledger states.
 */
export interface UILedgerEntry extends LedgerEntry {
  flags?: string[];
  isHighlighted?: boolean;
}

/**
 * ⚙️ TRANSFORMATION ENGINE
 * Maps clinical LedgerEntry records to UI-optimized display objects.
 */
export const mapLedgerEntryToUILedgerEntry = (entry: LedgerEntry): UILedgerEntry => {
  const isFlagged = entry.status === 'FLAGGED' || entry.status === 'flagged';

  return {
    ...entry,
    isHighlighted: isFlagged,
    flags: isFlagged ? ['CHECK_REQUIRED'] : []
  };
};