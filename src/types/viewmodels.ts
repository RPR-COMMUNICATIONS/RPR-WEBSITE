/**
 * TS-Λ3 // VIEW MODELS [v2.3.0]
 * Path: src/types/viewmodels.ts
 * Mission: Forensic Transformation & UI Latching
 * Authority: HARBOR A (Corporate) // THE OVERWATCH
 * Update: Enhanced transformation logic for amount-based forensic analysis.
 */

import {
  LedgerEntry,
  UILedgerEntry,
  mapLedgerEntryToUILedgerEntry
} from './index.ts';

export type { UILedgerEntry };

/**
 * 🔍 toUILedgerEntry
 * Transforms a single clinical LedgerEntry record into a UI-optimized display object.
 */
export function toUILedgerEntry(entry: LedgerEntry): UILedgerEntry {
  const uiEntry = mapLedgerEntryToUILedgerEntry(entry);

  // 🛡️ Forensic Normalization: Ensure amount is derived if missing
  if (entry.amount === undefined) {
    uiEntry.amount = (entry.debit || 0) - (entry.credit || 0);
  }

  return uiEntry;
}

/**
 * 🧬 toUILedgerEntries
 * Orchestrates the transformation of a physical dataset into a UI substrate.
 */
export function toUILedgerEntries(entries: LedgerEntry[]): UILedgerEntry[] {
  return entries.map(toUILedgerEntry);
}