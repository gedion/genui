"use client"
import { useState, useEffect } from 'react';

const PlantCell = () => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStage((prevStage) => (prevStage < 4 ? prevStage + 1 : 4));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const getStageContent = () => {
    switch (stage) {
      case 0:
        return '🌱';
      case 1:
        return '🌿';
      case 2:
        return '🌳';
      case 3:
        return '🌲';
      case 4:
        return '🌴';
      default:
        return '🌱';
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <div className="text-6xl transition-transform duration-1000 ease-in-out">
        {getStageContent()}
      </div>
    </div>
  );
};

export default PlantCell;