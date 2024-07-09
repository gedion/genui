
"use client";

import React from 'react';

const FancyCard = () => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <img className="w-full h-48 object-cover" src="https://via.placeholder.com/400x300" alt="Card Image" />
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800">Card Title</h2>
        <p className="mt-2 text-gray-600">This is a fancy card component with a beautiful image, title, and description. It is designed to be visually appealing and user-friendly.</p>
        <div className="mt-4">
          <button className="px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded hover:bg-blue-600">Read More</button>
        </div>
      </div>
    </div>
  );

};

export default FancyCard;
export const position = { "x": 519, "y": 332 };
