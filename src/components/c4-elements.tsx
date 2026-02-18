import React from 'react';

interface ConnectionLineProps {
  label?: string;
  vertical?: boolean;
  dashed?: boolean;
  className?: string;
}

export const ConnectionLine: React.FC<ConnectionLineProps> = ({ className = '' }) => (
  <div className={className} role="presentation" />
);

interface SectionDividerProps {
  label?: string;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({ label }) => (
  <div className="text-xs font-mono text-slate-500 uppercase tracking-widest">{label}</div>
);
