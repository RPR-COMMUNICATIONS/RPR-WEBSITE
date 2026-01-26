import React from 'react';
import { RprIkonContainer, IkonVariant } from '../RprIkonContainer';

interface IkonApprovalProps {
  variant?: IkonVariant;
  className?: string;
}

/**
 * TS-Λ3 // PAY NODE [v8.2.0]
 * Material Symbols: heart_check
 */
export const IkonApproval: React.FC<IkonApprovalProps> = ({ variant = 'default', className = '' }) => {
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
        heart_check
      </span>
    </RprIkonContainer>
  );
};