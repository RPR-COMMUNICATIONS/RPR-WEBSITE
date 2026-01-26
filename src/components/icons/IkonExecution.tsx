import React from 'react';
import { RprIkonContainer, IkonVariant } from '../RprIkonContainer';

interface IkonExecutionProps {
  variant?: IkonVariant;
  className?: string;
}

/**
 * TS-Λ3 // PLAY NODE [v8.2.0]
 * Material Symbols: play_for_work
 */
export const IkonExecution: React.FC<IkonExecutionProps> = ({ variant = 'default', className = '' }) => {
  const getColor = () => {
    switch (variant) {
      case 'active':
        return '#00E0FF';
      case 'disabled':
        return '#71717a';
      default:
        return '#ffffff';
    }
  };

  return (
    <RprIkonContainer variant={variant} className={className}>
      <span 
        className="material-symbols-outlined text-white" 
        style={{ 
          fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
          color: getColor(),
          fontSize: '32px'
        }}
      >
        play_for_work
      </span>
    </RprIkonContainer>
  );
};