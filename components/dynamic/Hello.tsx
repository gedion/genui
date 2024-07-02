"use client";

import { useState } from 'react';

const LightControl = () => {
  const [lightHours, setLightHours] = useState(12);

  const handleLightChange = (e) => {
    setLightHours(e.target.value);
  };

  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Light Control</h2>
      <label className="block mb-2">Hours of Light per Day:</label>
      <input
        type="number"
        value={lightHours}
        onChange={handleLightChange}
        className="w-full p-2 rounded bg-gray-700 text-white"
        min="0"
        max="24"
      />
      <p className="mt-2">Current Light Hours: {lightHours} hours</p>
    </div>
  );
};

export default LightControl;