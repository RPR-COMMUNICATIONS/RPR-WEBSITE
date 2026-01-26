import React from 'react';
import type { UILedgerEntry } from '../types/viewModels';

/**
 * RPR-KONTROL | EXTRACTION RESULTS [v4.28.2]
 * Role: Visual confirmation of F.I.E. strike
 * Patch: Added defensive checks for 'entries' substrate to prevent undefined filter crashes.
 */

// Placeholder/Internal LedgerTable to ensure compilation stability in Harbor A
interface LedgerTableProps {
  rows: UILedgerEntry[];
  onRowClick?: (entry: UILedgerEntry) => void;
}

const LedgerTable: React.FC<LedgerTableProps> = ({ rows = [], onRowClick }) => (
  <div className="w-full overflow-x-auto bg-zinc-950/50 backdrop-blur-xl border border-white/5">
    <table className="w-full text-left border-collapse">
      <thead>
        <tr className="border-b border-white/10">
          {['Date', 'Description', 'Code', 'Debit', 'Credit', 'Status'].map((h) => (
            <th key={h} className="px-4 py-3 text-[10px] font-black text-zinc-500 uppercase tracking-widest">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-white/5">
        {rows.map((row) => (
          <tr 
            key={row.id} 
            onClick={() => onRowClick?.(row)}
            className="group hover:bg-white/[0.02] cursor-pointer transition-colors"
          >
            <td className="px-4 py-3 font-mono text-xs text-zinc-400">{row.date}</td>
            <td className="px-4 py-3 font-bold text-xs text-white uppercase tracking-tight">{row.description}</td>
            <td className="px-4 py-3 font-mono text-xs text-zinc-500">{row.accountCode || '---'}</td>
            <td className="px-4 py-3 font-mono text-xs text-emerald-400">{row.debit ? `$${row.debit.toFixed(2)}` : ''}</td>
            <td className="px-4 py-3 font-mono text-xs text-rose-400">{row.credit ? `$${row.credit.toFixed(2)}` : ''}</td>
            <td className="px-4 py-3">
              <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded ${
                row.status === 'VALIDATED' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-amber-500/10 text-amber-500'
              }`}>
                {row.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

interface ExtractionResultsProps {
  entries?: UILedgerEntry[];
  onEntrySelect?: (entry: UILedgerEntry) => void;
}

export const ExtractionResults: React.FC<ExtractionResultsProps> = ({ 
  entries = [], 
  onEntrySelect 
}) => {
  // Defensive check for entries and flags
  const safeEntries = Array.isArray(entries) ? entries : [];
  const flaggedCount = safeEntries.filter(e => e && e.flags && Array.isArray(e.flags) && e.flags.length > 0).length;
  const totalEntries = safeEntries.length;
  
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between px-2">
        <h2 className="text-xl font-black text-white uppercase tracking-tighter">
          Extraction Results
        </h2>
        <div className="flex items-center space-x-4">
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
            {totalEntries} artifacts extracted
          </span>
          {flaggedCount > 0 && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-rose-500/10 text-rose-500 border border-rose-500/20">
              ⚠️ {flaggedCount} Anomalies
            </span>
          )}
        </div>
      </div>
      
      <div className="rounded-xl overflow-hidden shadow-2xl border border-white/5">
        <LedgerTable 
          rows={safeEntries} 
          onRowClick={onEntrySelect} 
        />
      </div>
      
      {totalEntries === 0 && (
        <div className="text-center py-12 text-zinc-600 font-mono text-xs uppercase tracking-widest">
          <p>Awaiting F.I.E. Strike... Ingest source substrate to begin.</p>
        </div>
      )}
    </div>
  );
};

export default ExtractionResults;