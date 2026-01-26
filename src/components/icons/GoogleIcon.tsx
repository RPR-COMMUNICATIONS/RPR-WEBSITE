import React from 'react';
import GoogleIconMUI from '@mui/icons-material/Google';
import { RprIkonContainer } from '../RprIkonContainer';

interface GoogleIconProps {
  className?: string;
  size?: number;
}

/**
 * TS-Λ3 // GOOGLE IDENTITY LATCH [v5.0.0]
 * Official Google "G" logo wrapped in Squircle Latch
 * Uses MUI GoogleIcon component for policy compliance
 */
export const GoogleIcon: React.FC<GoogleIconProps> = ({ className = '', size = 40 }) => {
  return (
    <RprIkonContainer 
      variant="default" 
      size={size}
      className={`bg-[#000000] border border-zinc-800 hover:border-cyan-500/50 transition-all ${className}`}
    >
      {/* MUI Google Icon scaled to fit the inner glyph area */}
      <GoogleIconMUI 
        sx={{ 
          fontSize: Math.round(size * 0.7), // Scale icon relative to container size
          color: '#ffffff' // Standard white 'G' for monochrome dark mode
        }} 
      />
    </RprIkonContainer>
  );
};