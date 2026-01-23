import React from "react";

export const InsightIcon: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div
    className={
      "relative w-12 h-12 md:w-14 md:h-14 " +
      "rounded-[22.5%] bg-gradient-to-br from-[#2C3E50] to-[#1B2631] " +
      "flex items-center justify-center shadow-2xl overflow-hidden " +
      className
    }
  >
    <svg
      className="w-3/4 h-3/4"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="inner-shadow" x="-50%" y="-50%" width="200%" height="200%">
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
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g filter="url(#inner-shadow)">
        <path
          d="M50 48.5C64.6325 48.5 76.5 36.6325 76.5 22C76.5 7.36751 64.6325 -4.5 50 -4.5C35.3675 -4.5 23.5 7.36751 23.5 22C23.5 36.6325 35.3675 48.5 50 48.5Z"
          transform="translate(0 10)"
          stroke="#F5F5F7"
          strokeWidth="6"
        />
        <path
          d="M37 55V68C37 69.1046 37.8954 70 39 70H61C62.1046 70 63 69.1046 63 68V55"
          stroke="#F5F5F7"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="33" y="70" width="34" height="8" rx="2" fill="#F5F5F7" />
        <rect x="38" y="78" width="24" height="6" rx="2" fill="#F5F5F7" />
      </g>

      <g filter="url(#glow)" transform="translate(50, 42)">
        <path
          d="M0 -8L1.5 -1.5L8 0L1.5 1.5L0 8L-1.5 1.5L-8 0L-1.5 -1.5L0 -8Z"
          fill="#00BFFF"
        />
      </g>
    </svg>
  </div>
);