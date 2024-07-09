
"use client";
import React from 'react';

const FancyComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
      <div className="text-center p-10 bg-white bg-opacity-20 rounded-lg shadow-lg">
        <h1 className="text-5xl font-bold mb-4">I'm Feeling Lucky!</h1>
        <p className="text-lg mb-6">Experience the magic of surprise and delight.</p>
        <button className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-full shadow-md hover:bg-yellow-500 transition duration-300">
          Click Me!
        </button>
      </div>
    </div>
  );
};

export default FancyComponent;
export const position  = {"x":372,"y":254};
        