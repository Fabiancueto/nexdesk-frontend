import React from "react";
import { useTheme } from "../context/ThemeContext";

export const Logo = ({ className = "", height = "48px" }) => {
  const { theme } = useTheme();

  const fillClass = theme === "dark" ? "#FAFAFA" : "#242424";

  return (
    <svg viewBox="0 0 190 48" className={`w-auto ${className}`} style={{ height }}>
      <style>
        {`.teal { fill: #3CA2A2; } .dynamic { fill: ${fillClass}; }`}
      </style>
      <g transform="translate(18, 0)">
        {/* Icono de la N */}
        <path
          className="teal"
          d="M8 12 L14 12 L24 28 L18 28 L8 12 Z M26 12 L32 12 L32 36 L26 36 L26 12 Z"
        />
        {/* Texto principal */}
        <text x="38" y="24" fontSize="14" fontFamily="'Segoe UI', sans-serif">
          <tspan className="teal">Nex</tspan>
          <tspan className="dynamic">DevCode</tspan>
        </text>
        {/* Subtítulo */}
        <text
          x="38"
          y="34"
          className="dynamic"
          fontSize="6"
          letterSpacing="1"
          fontFamily="'Segoe UI', sans-serif"
        >
          SOFTWARE DEVELOPMENT
        </text>
      </g>
    </svg>
  );
};
