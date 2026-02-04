/**
 * TS-Λ3 // LOGO RECTIFICATION // v3.0.0 (AUTHORITATIVE)
 * Governance: All logo renderings MUST use RprLogoLockup + RprLogoIcon.
 */
import React from 'react';
import { RprLogoLockup } from './RprLogoLockup';

export const RprMasterLogo: React.FC = () => {
  return (
    <RprLogoLockup
      glyphType="lockup"
      variant="COMMUNICATIONS"
      size={32}
    />
  );
};

export default RprMasterLogo;
