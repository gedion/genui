"use client";
import React from 'react';

const Fireworks = ({ position = { x: 0, y: 0 } }) => {
  return (
    <div className="absolute" style={{ top: `${position?.y}px`, left: `${position?.x}px` }}>
      <svg
        width="200" height="200" viewBox="0 0 200 200"
        fill="none" xmlns="http://www.w3.org/2000/svg"
        className="block"
      >
        <circle cx="100" cy="100" r="10" fill="#FFD700" />
        <circle cx="50" cy="50" r="5" fill="#FF4500" />
        <circle cx="150" cy="50" r="5" fill="#FF4500" />
        <circle cx="50" cy="150" r="5" fill="#FF4500" />
        <circle cx="150" cy="150" r="5" fill="#FF4500" />
        <line x1="100" y1="0" x2="100" y2="40" stroke="#FFD700" strokeWidth="2" />
        <line x1="100" y1="160" x2="100" y2="200" stroke="#FFD700" strokeWidth="2" />
        <line x1="0" y1="100" x2="40" y2="100" stroke="#FFD700" strokeWidth="2" />
        <line x1="160" y1="100" x2="200" y2="100" stroke="#FFD700" strokeWidth="2" />
        <line x1="30" y1="30" x2="70" y2="70" stroke="#FFD700" strokeWidth="2" />
        <line x1="130" y1="130" x2="170" y2="170" stroke="#FFD700" strokeWidth="2" />
        <line x1="30" y1="170" x2="70" y2="130" stroke="#FFD700" strokeWidth="2" />
        <line x1="130" y1="70" x2="170" y2="30" stroke="#FFD700" strokeWidth="2" />
      </svg>
    </div >
  );
};

export default Fireworks;
