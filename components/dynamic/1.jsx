"use client";

import React from 'react';

export const PlantCell = () => {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center">
      <div className="relative w-96 h-96 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
        <div className="absolute w-48 h-48 bg-yellow-500 rounded-full animate-spin-slow"></div>
        <div className="absolute w-32 h-32 bg-blue-500 rounded-full animate-bounce"></div>
        <div className="absolute w-24 h-24 bg-red-500 rounded-full animate-ping"></div>
        <div className="absolute w-16 h-16 bg-purple-500 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

// Tailwind CSS Animations
// .animate-spin-slow {
//   animation: spin 4s linear infinite;
// }
// @keyframes spin {
//   0% { transform: rotate(0deg); }
//   100% { transform: rotate(360deg); }
// }"