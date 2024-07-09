"use client";
import React from 'react';

const WeddingInvitation = ({ position }) => {
  return (
    <div
      className="absolute"
      style={{ top: `${position?.y}px`, left: `${position?.x}px` }}
    >
      <div className="relative w-full h-full flex flex-col items-center justify-center p-4 bg-white bg-opacity-80 rounded-lg shadow-lg">
        <svg
          className="absolute inset-0 w-full h-full object-cover"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#0099ff"
            fillOpacity="1"
            d="M0,160L48,170.7C96,181,192,203,288,213.3C384,224,480,224,576,213.3C672,203,768,181,864,186.7C960,192,1056,224,1152,213.3C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold text-gray-800">You're Invited!</h1>
          <p className="mt-2 text-lg text-gray-600">Join us for a beachside wedding celebration</p>
          <p className="mt-1 text-md text-gray-600">Date: June 25, 2023</p>
          <p className="mt-1 text-md text-gray-600">Location: Malibu Beach</p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition">Reserve Your Spot</button>
        </div>
      </div>
    </div>
  );
};

export default WeddingInvitation;