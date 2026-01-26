import React from 'react';
import { RprIkonContainer, IkonVariant } from '../RprIkonContainer';

interface IkonRepeatProps {
  variant?: IkonVariant;
  className?: string;
}

export const IkonRepeat: React.FC<IkonRepeatProps> = ({ variant = 'default', className = '' }) => {
  return (
    <RprIkonContainer variant={variant} className={className}>
      {/* REPEAT icon - Circular arrow / Loop glyph */}
      <path d="M25 50C25 35 37 23 52 23C67 23 75 35 75 50" strokeLinecap="round" />
      <path d="M70 45L75 50L70 55" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M75 50C75 65 63 77 48 77C33 77 25 65 25 50" strokeLinecap="round" />
      <path d="M30 55L25 50L30 45" strokeLinecap="round" strokeLinejoin="round" />
    </RprIkonContainer>
  );
};