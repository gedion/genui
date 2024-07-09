
"use client";

import React from 'react';

const MetaverseCard = () => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <img className="w-full h-48 object-cover" src="https://via.placeholder.com/400x300" alt="Metaverse" />
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-800">Explore the Metaverse</h2>
        <p className="text-gray-600 mt-2">
          Dive into a virtual world where possibilities are endless. Connect, create, and explore in the metaverse.
        </p>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
          Join Now
        </button>
      </div>
    </div>
  );
};

export default MetaverseCard;
export const position = {"x":516,"y":459};
          