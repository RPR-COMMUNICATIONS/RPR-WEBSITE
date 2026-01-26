/**
 * HARBOR A (Corporate) – View Models
 * MYA-GOV-009A | TypeScript Remediation | Era 2026
 * Authority: TS-Λ3
 */

import { LedgerEntry, UILedgerEntry, mapLedgerEntryToUILedgerEntry } from './index';

export type { UILedgerEntry };

export function toUILedgerEntry(entry: LedgerEntry): UILedgerEntry {
  return mapLedgerEntryToUILedgerEntry(entry);
}

export function toUILedgerEntries(entries: LedgerEntry[]): UILedgerEntry[] {
  return entries.map(mapLedgerEntryToUILedgerEntry);
}