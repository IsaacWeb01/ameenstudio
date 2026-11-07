'use client';

import React from 'react';

interface AnimatedLogoProps {
  variant?: 'light' | 'dark' | 'orange' | 'cream';
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
  className?: string;
}

const SIZES = {
  sm: { height: 26, width: 120 },
  md: { height: 34, width: 156 },
  lg: { height: 50, width: 230 },
};

export default function AnimatedLogo({
  variant = 'light',
  size = 'md',
  animated = false,
  className = '',
}: AnimatedLogoProps) {
  const currentSize = SIZES[size];

  const textColor =
    variant === 'dark'
      ? '#111110'
      : variant === 'orange'
      ? '#F06432'
      : variant === 'cream'
      ? '#F5F1E9'
      : '#FFFFFF';

  return (
    <div className={`inline-flex items-center select-none group ${className}`}>
      <svg
        width={currentSize.width}
        height={currentSize.height}
        viewBox="0 0 160 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 group-hover:scale-[1.02]"
        role="img"
        aria-label="Ameen Studio Logo"
      >
        {/* Custom Geometric 'A' Mark */}
        <g className="logo-letter-a">
          {/* Left diagonal leg */}
          <path
            d="M 6 30 L 19 6 L 24 6 L 11 30 Z"
            fill={textColor}
            className="transition-colors duration-300"
          />
          {/* Right diagonal leg */}
          <path
            d="M 21 6 L 26 6 L 39 30 L 34 30 Z"
            fill={textColor}
            className="transition-colors duration-300"
          />
          {/* Signature Brand Orange Crossbar Accent */}
          <path
            d="M 12 20 L 33 20 L 31.5 23 L 13.5 23 Z"
            fill="#F06432"
            className="transition-all duration-300 group-hover:fill-[#FF8758]"
          />
          {/* Geometric Apex Crown Dot */}
          <circle cx="22.5" cy="4" r="1.5" fill="#F06432" />
        </g>

        {/* Custom M */}
        <g className="logo-letter-m">
          <path
            d="M 45 30 V 6 H 50 L 58.5 21 L 67 6 H 72 V 30 H 67.5 V 13 L 59.8 26.5 H 57.2 L 49.5 13 V 30 H 45 Z"
            fill={textColor}
          />
        </g>

        {/* Custom First E */}
        <g className="logo-letter-e1">
          <path
            d="M 79 30 V 6 H 98 V 10.5 H 84 V 15.5 H 96 V 19.8 H 84 V 25.5 H 98.5 V 30 H 79 Z"
            fill={textColor}
          />
        </g>

        {/* Custom Second E */}
        <g className="logo-letter-e2">
          <path
            d="M 104 30 V 6 H 123 V 10.5 H 109 V 15.5 H 121 V 19.8 H 109 V 25.5 H 123.5 V 30 H 104 Z"
            fill={textColor}
          />
        </g>

        {/* Custom N with subtle angular cut */}
        <g className="logo-letter-n">
          <path
            d="M 129 30 V 6 H 134.5 L 148 23.5 V 6 H 153 V 30 H 147.5 L 134 12.5 V 30 H 129 Z"
            fill={textColor}
          />
        </g>
      </svg>
    </div>
  );
}
