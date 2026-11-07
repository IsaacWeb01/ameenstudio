'use client';

import React from 'react';

interface AnimatedLogoProps {
  variant?: 'light' | 'dark' | 'orange' | 'cream';
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
  className?: string;
}

const SIZES = {
  sm: { height: 26, width: 160 },
  md: { height: 32, width: 200 },
  lg: { height: 46, width: 280 },
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
        viewBox="0 0 228 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 group-hover:scale-[1.02]"
        role="img"
        aria-label="Al-Ameen Studio Logo"
      >
        {/* Letter A (Initial) */}
        <g className="logo-letter-a1">
          <path
            d="M 6 30 L 19 6 L 24 6 L 11 30 Z"
            fill={textColor}
            className="transition-colors duration-300"
          />
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

        {/* Letter L */}
        <g className="logo-letter-l">
          <path
            d="M 44 6 H 49 V 25.5 H 61 V 30 H 44 Z"
            fill={textColor}
          />
        </g>

        {/* Hyphen - */}
        <g className="logo-hyphen">
          <rect
            x="67"
            y="17"
            width="10"
            height="3.5"
            rx="1.5"
            fill="#F06432"
          />
        </g>

        {/* Letter A (Second) */}
        <g className="logo-letter-a2">
          <path
            d="M 85 30 L 98 6 L 103 6 L 90 30 Z"
            fill={textColor}
          />
          <path
            d="M 100 6 L 105 6 L 118 30 L 113 30 Z"
            fill={textColor}
          />
          <path
            d="M 91 20 L 112 20 L 110.5 23 L 92.5 23 Z"
            fill="#F06432"
          />
        </g>

        {/* Letter M */}
        <g className="logo-letter-m">
          <path
            d="M 124 30 V 6 H 129 L 137.5 21 L 146 6 H 151 V 30 H 146.5 V 13 L 138.8 26.5 H 136.2 L 128.5 13 V 30 H 124 Z"
            fill={textColor}
          />
        </g>

        {/* First E */}
        <g className="logo-letter-e1">
          <path
            d="M 157 30 V 6 H 173 V 10.5 H 162 V 15.5 H 171 V 19.8 H 162 V 25.5 H 173.5 V 30 H 157 Z"
            fill={textColor}
          />
        </g>

        {/* Second E */}
        <g className="logo-letter-e2">
          <path
            d="M 179 30 V 6 H 195 V 10.5 H 184 V 15.5 H 193 V 19.8 H 184 V 25.5 H 195.5 V 30 H 179 Z"
            fill={textColor}
          />
        </g>

        {/* Letter N */}
        <g className="logo-letter-n">
          <path
            d="M 201 30 V 6 H 206.5 L 217 23.5 V 6 H 221.5 V 30 H 216.5 L 206 12.5 V 30 H 201 Z"
            fill={textColor}
          />
        </g>
      </svg>
    </div>
  );
}
