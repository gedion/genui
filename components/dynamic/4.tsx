"use client";

import React from 'react';

const PhotosynthesisSimulation = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-6">Photosynthesis Simulation</h1>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-3xl">
        <p className="text-lg mb-4">
          Photosynthesis is the process by which green plants and some other organisms use sunlight to synthesize foods with the help of chlorophyll pigments. This simulation will help you understand the intricate steps involved in this process.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0 md:mr-4">
            <h2 className="text-2xl font-semibold mb-2">Step 1: Light Absorption</h2>
            <p className="text-sm">
              Chlorophyll in the chloroplasts absorbs light energy, which is then converted into chemical energy.
            </p>
          </div>
          <div className="mb-4 md:mb-0 md:mr-4">
            <h2 className="text-2xl font-semibold mb-2">Step 2: Water Splitting</h2>
            <p className="text-sm">
              Water molecules are split into oxygen, protons, and electrons in the thylakoid membranes.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Step 3: Carbon Fixation</h2>
            <p className="text-sm">
              Carbon dioxide is fixed into glucose through the Calvin cycle in the stroma of the chloroplasts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotosynthesisSimulation;