import React from 'react';
import { RprIkonContainer, IkonVariant } from '../RprIkonContainer';

interface IkonInsightsProps {
  variant?: IkonVariant;
  className?: string;
}

export const IkonInsights: React.FC<IkonInsightsProps> = ({
  variant = 'default',
  className = '',
}) => {
  return (
    <RprIkonContainer variant={variant} className={className}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <filter id="ikon-insight-inner-shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feComponentTransfer in="SourceAlpha">
              <feFuncA type="table" tableValues="1 0" />
            </feComponentTransfer>
            <feGaussianBlur stdDeviation="2" />
            <feOffset dx="0" dy="1" result="offsetblur" />
            <feFlood floodColor="#000000" floodOpacity="0.3" result="flood" />
            <feComposite in="flood" in2="offsetblur" operator="in" />
            <feComposite in2="SourceAlpha" operator="out" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="ikon-insight-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g filter="url(#ikon-insight-inner-shadow)">
          <path
            d="M50 48.5C64.63 48.5 76.5 36.63 76.5 22C76.5 7.37 64.63 -4.5 50 -4.5C35.37 -4.5 23.5 7.37 23.5 22C23.5 36.63 35.37 48.5 50 48.5Z"
            transform="translate(0 10)"
            stroke="currentColor"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M37 55V68C37 69.10 37.90 70 39 70H61C62.10 70 63 69.10 63 68V55"
            stroke="currentColor"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect x="33" y="70" width="34" height="8" rx="2" fill="currentColor" />
          <rect x="38" y="78" width="24" height="6" rx="2" fill="currentColor" />
        </g>
        <g filter="url(#ikon-insight-glow)" transform="translate(50, 42)">
          <path 
            d="M0 -8L1.5 -1.5L8 0L1.5 1.5L0 8L-1.5 1.5L-8 0L-1.5 -1.5L0 -8Z" 
            fill="#00BFFF" 
          />
        </g>
      </svg>
    </RprIkonContainer>
  );
};