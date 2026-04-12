"use client";

import React, { useId } from 'react';

const PathAnimation = ({ text }: { text: string }) => {
  const uniqueId = useId();

  return (
    <div className="flex justify-center items-center w-full">
      <svg viewBox="0 0 800 200" className="w-full max-w-full">
        <defs>
          <linearGradient id={`pathGradient-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF85A1" />
            <stop offset="100%" stopColor="#FFFFFF" />
          </linearGradient>
        </defs>
        
        <text
          x="50%"
          y="60%"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#FF85A1"
          stroke={`url(#pathGradient-${uniqueId})`}
          strokeWidth="3"
          fontSize="180"
          fontWeight="900"
          fontFamily="'Fira Code', monospace"
          strokeDasharray="1000"
          strokeDashoffset="1000"
        >
          {text}
          <animate
            attributeName="stroke-dashoffset"
            values="1000;0"
            dur="6s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.25 0.1 0.25 1"
          />
          <animate
            attributeName="fill-opacity"
            values="0;0;1;1;0"
            keyTimes="0;0.5;0.8;0.9;1"
            dur="6s"
            repeatCount="indefinite"
          />
        </text>
      </svg>
    </div>
  );
};

export default PathAnimation;
