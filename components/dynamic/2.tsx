"use client";

import React, { useEffect, useState } from 'react';

const Particle = ({ type, color, initialPosition, motion }) => {
  const [position, setPosition] = useState(initialPosition);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(prev => ({
        x: prev.x + motion.x,
        y: prev.y + motion.y
      }));
    }, 100);
    return () => clearInterval(interval);
  }, [motion]);

  return (
    <div
      style={{
        position: 'absolute',
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        backgroundColor: color,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '12px'
      }}
    >
      {type}
    </div>
  );
};

export const PlantCell = () => {
  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', backgroundColor: '#121212' }}>
      <Particle type="e-" color="blue" initialPosition={{ x: 100, y: 100 }} motion={{ x: 1, y: 1 }} />
      <Particle type="p+" color="red" initialPosition={{ x: 200, y: 200 }} motion={{ x: -1, y: -1 }} />
      <Particle type="n" color="green" initialPosition={{ x: 300, y: 300 }} motion={{ x: 0, y: 0 }} />
    </div>
  );
};

export default PlantCell;