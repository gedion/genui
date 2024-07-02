import React, { useState, useEffect } from 'react';
import './PlantCell.css';

export function PlantCell() {
  const [size, setSize] = useState(1);
  const [age, setAge] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSize(prevSize => prevSize + 1);
      setAge(prevAge => prevAge + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="plant-cell" style={{ transform: `scale(${size})` }}>
      <p>Age: {age} seconds</p>
    </div>
  );
}

/* PlantCell.css */
.plant-cell {
  width: 50px;
  height: 50px;
  background-color: #4CAF50;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 14px;
  transition: transform 0.5s ease;
}