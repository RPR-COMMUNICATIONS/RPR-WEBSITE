import React from 'react';

export type IkonVariant = 'default' | 'active' | 'disabled';

interface RprIkonContainerProps {
  variant?: IkonVariant;
  children: React.ReactNode;
  className?: string;
  size?: number; // Optional size prop for scalability
}

export const RprIkonContainer: React.FC<RprIkonContainerProps> = ({ 
  variant: _variant = 'default', // Prefixed with _ to indicate intentionally unused (passed to children)
  children, 
  className = '',
  size = 64 // Default 64px (w-16 h-16)
}) => {
  return (
    <div 
      className={`squircle flex items-center justify-center shadow-2xl transition-all duration-300 bg-[#000000] border border-zinc-800 hover:border-cyan-500/50 ${className}`}
      style={{ width: size, height: size }}
    >
      {children}
    </div>
  );
};