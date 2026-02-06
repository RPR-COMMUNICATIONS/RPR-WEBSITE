import React from "react";

/**
 * TS-Λ3 // AUTHORITATIVE ICON SUBSTRATE
 * CLASSIFICATION: MATERIAL SYMBOLS ENGINE
 * AUTHORITY: hello@butterdime.com
 */

interface IconProps {
  name: string;
  className?: string;
  size?: number | string;
  variant?: "outlined" | "rounded" | "sharp";
}

export const Icon: React.FC<IconProps> = ({
  name,
  className = "",
  size = 24,
  variant = "outlined",
}) => {
  const baseClass =
    variant === "outlined"
      ? "material-symbols-outlined"
      : variant === "rounded"
      ? "material-symbols-rounded"
      : "material-symbols-sharp";

  return (
    <span
      className={`${baseClass} ${className}`}
      style={{ fontSize: size }}
    >
      {name}
    </span>
  );
};
