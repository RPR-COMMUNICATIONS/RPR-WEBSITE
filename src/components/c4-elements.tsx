import React from 'react';
import { Icon } from './Icon';

/**
 * TS-Λ3 // C4 ELEMENT PRIMITIVES
 * CLASSIFICATION: SOVEREIGN ARCHITECTURE
 * AUTHORITY: hello@butterdime.com
 */

export function OverwatchIcon({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="overwatch-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#008B8B" />
          <stop offset="100%" stopColor="#00D9FF" />
        </linearGradient>
        <filter id="overwatch-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feFlood floodColor="white" floodOpacity="0.8" result="flood" />
          <feComposite in="flood" in2="SourceAlpha" operator="in" result="mask" />
          <feGaussianBlur in="mask" stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect width="100%" height="100%" rx="8" fill="#000000" filter="url(#overwatch-glow)" />
      <text
        x="50%"
        y="50%"
        dominantBaseline="central"
        textAnchor="middle"
        fontFamily="Material Symbols Outlined"
        fontSize="48"
        fill="#FFFFFF"
        style={{
          fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48",
        }}
      >
        skull
      </text>
    </svg>
  );
}

export function ArchitectIcon({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="architect-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#008B8B" />
          <stop offset="100%" stopColor="#00D9FF" />
        </linearGradient>
        <filter id="architect-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feFlood floodColor="white" floodOpacity="0.8" result="flood" />
          <feComposite in="flood" in2="SourceAlpha" operator="in" result="mask" />
          <feGaussianBlur in="mask" stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect width="100%" height="100%" rx="8" fill="#000000" filter="url(#architect-glow)" />
      <text
        x="50%"
        y="50%"
        dominantBaseline="central"
        textAnchor="middle"
        fontFamily="Material Symbols Outlined"
        fontSize="48"
        fill="#FFFFFF"
        style={{
          fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48",
        }}
      >
        compass_calibration
      </text>
    </svg>
  );
}

export const C4Icon: React.FC<{ iconName: string; className?: string; fill?: 0 | 1 }> = ({ iconName, className, fill = 0 }) => (
  <Icon name={iconName} fill={fill} className={className} />
);

export const ActorBox = ({ children }: { children: React.ReactNode }) => (
  <div className="p-4 border border-[var(--sovereign-border)] bg-[var(--sovereign-bg-primary)] rounded-full">
    {children}
  </div>
);

interface ConnectionLineProps {
  label?: string;
  className?: string;
}

export const ConnectionLine: React.FC<ConnectionLineProps> = ({ label, className = '' }) => {
  return (
    <div className={`flex flex-col items-center gap-1 mb-2 ${className}`}>
      {label && <span className="text-[10px] text-slate-500 uppercase font-mono tracking-tight">{label}</span>}
      <div className="w-px h-6 bg-slate-600 border-l border-dashed border-slate-500" />
    </div>
  );
};

interface SystemBoxProps {
  title: string;
  description: string;
  color?: 'red' | 'purple' | 'cyan' | 'orange';
  onClick?: () => void;
  className?: string;
}

export const SystemBox: React.FC<SystemBoxProps> = ({ title, description, color = 'cyan', onClick, className = '' }) => {
  const colorMap = {
    red: 'border-[var(--sovereign-system-red)] hover:bg-[var(--sovereign-system-red)]/10',
    purple: 'border-[var(--sovereign-system-purple)] hover:bg-[var(--sovereign-system-purple)]/10',
    cyan: 'border-[var(--sovereign-system-cyan)] hover:bg-[var(--sovereign-system-cyan)]/10',
    orange: 'border-[var(--sovereign-system-orange)] hover:bg-[var(--sovereign-system-orange)]/10',
  };

  const textMap = {
    red: 'text-[var(--sovereign-system-red)]',
    purple: 'text-[var(--sovereign-system-purple)]',
    cyan: 'text-[var(--sovereign-system-cyan)]',
    orange: 'text-[var(--sovereign-system-orange)]',
  };

  return (
    <div
      onClick={onClick}
      className={`group p-5 border-2 bg-[var(--sovereign-bg-secondary)] rounded-lg cursor-pointer transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${colorMap[color]} ${className}`}
    >
      <div className={`text-xs font-black uppercase tracking-widest mb-2 ${textMap[color]}`}>{title}</div>
      <div className="text-[11px] leading-relaxed text-slate-300 font-medium group-hover:text-white transition-colors">{description}</div>
    </div>
  );
};
