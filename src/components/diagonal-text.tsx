import React from 'react';

export const DiagonalText: React.FC<{ text: string; strikeColor?: string }> = ({
  text,
  strikeColor = '#cccccc',
}) => (
  <span className="text-gray relative mr-2 inline-block font-semibold">
    {text}
    <svg className="pointer-events-none absolute top-0 left-0 h-full w-full">
      <line
        x1="0"
        y1="10"
        x2="100%"
        y2="70%"
        stroke={strikeColor}
        strokeWidth="2"
      />
    </svg>
  </span>
);
