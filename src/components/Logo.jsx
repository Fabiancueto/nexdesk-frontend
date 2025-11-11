import React from 'react';

export const Logo = ({ className = '', height = '48px' }) => {
  return (
    <svg viewBox="0 0 190 48" className={`w-auto ${className}`} style={{ height }}>
      <style>
        {`.teal { fill: #3CA2A2; } .dark { fill: #242424; }`} 
      </style>
      <g transform="translate(18, 0)">
        <path className="teal" d="M8 12 L14 12 L24 28 L18 28 L8 12 Z M26 12 L32 12 L32 36 L26 36 L26 12 Z"/>
        <text x="38" y="24" fontSize="14" fontFamily="'Segoe UI', sans-serif">
          <tspan className="teal">Nex</tspan><tspan className="dark">DevCode</tspan>
        </text>
        <text x="38" y="34" className="dark" fontSize="6" letterSpacing="1" fontFamily="'Segoe UI', sans-serif">
          SOFTWARE DEVELOPMENT
        </text>
      </g>
    </svg>
  );
};
