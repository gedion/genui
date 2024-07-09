
"use client";

import React from 'react';

const pos = { x: 1098, y: 373 };

export const ThankYouCard = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Thank You!</h1>
        <p className="text-gray-600 mb-6">I appreciate your support and hope you enjoy our service.</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
          Continue
        </button>
      </div>
    </div>
  );
};

export default pos;