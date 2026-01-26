/**
 * HARBOR A (Corporate) – Type Definitions
 * MYA-GOV-009A | TypeScript Remediation | Era 2026
 * Authority: TS-Λ3
 */

export type ForensicStatus =
  | 'PENDING'
  | 'EXTRACTED'
  | 'VALIDATED'
  | 'APPROVED'
  | 'USER_REVIEWED'
  | 'FLAGGED';

export type DieFlag =
  | 'DUPLICATE'
  | 'ANOMALY'
  | 'MISSING_SOURCE'
  | 'MANUAL_OVERRIDE'
  | 'RECONCILIATION_ERROR';

export interface LedgerEntry {
  id: string;
  transactionId: string;
  yearId: string;
  entityId: string;
  date: string;
  description: string;
  accountCode?: string;
  debit: number | null;
  credit: number | null;
  status: ForensicStatus;
  flags: DieFlag[];
  category: string;
  sourceDocumentId?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface UILedgerEntry {
  id: string;
  date: string;
  description: string;
  accountCode?: string;
  debit: number | null;
  credit: number | null;
  status: string;
  flags: string[];
  category: string;
}

/**
 * Mapper: LedgerEntry → UILedgerEntry
 */
export function mapLedgerEntryToUILedgerEntry(entry: LedgerEntry): UILedgerEntry {
  return {
    id: entry.id,
    date: entry.date,
    description: entry.description,
    accountCode: entry.accountCode,
    debit: entry.debit,
    credit: entry.credit,
    status: entry.status,
    flags: entry.flags,
    category: entry.category,
  };
}

/**
 * Mapper: UILedgerEntry → LedgerEntry
 */
export function mapUILedgerEntryToLedgerEntry(
  uiEntry: UILedgerEntry,
  defaults: { transactionId: string; yearId: string; entityId: string }
): LedgerEntry {
  return {
    id: uiEntry.id,
    transactionId: defaults.transactionId,
    yearId: defaults.yearId,
    entityId: defaults.entityId,
    date: uiEntry.date,
    description: uiEntry.description,
    accountCode: uiEntry.accountCode,
    debit: uiEntry.debit,
    credit: uiEntry.credit,
    status: uiEntry.status as ForensicStatus,
    flags: uiEntry.flags as DieFlag[],
    category: uiEntry.category,
  };
}

export type { UILedgerEntry as ViewModelEntry };