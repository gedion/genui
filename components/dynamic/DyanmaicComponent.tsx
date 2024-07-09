"use client";

import React from 'react';

const WeddingItinerary = () => {
  return (
    <div className="absolute" style={{ top: '345px', left: '680px' }}>
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-center mb-4">Wedding Itinerary</h1>
        <svg
          className="w-full h-32 mb-4"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="100" height="100" fill="skyblue" />
          <circle cx="50" cy="50" r="30" fill="yellow" />
          <rect y="70" width="100" height="30" fill="sandybrown" />
          <path d="M 0 70 Q 50 50 100 70 T 200 70" fill="none" stroke="white" strokeWidth="2" />
        </svg>
        <ul className="list-disc list-inside">
          <li className="mb-2">
            <span className="font-semibold">10:00 AM:</span> Ceremony at the beach
          </li>
          <li className="mb-2">
            <span className="font-semibold">12:00 PM:</span> Lunch at the seaside restaurant
          </li>
          <li className="mb-2">
            <span className="font-semibold">3:00 PM:</span> Afternoon activities and games
          </li>
          <li className="mb-2">
            <span className="font-semibold">6:00 PM:</span> Sunset cocktail hour
          </li>
          <li className="mb-2">
            <span className="font-semibold">8:00 PM:</span> Dinner and dancing under the stars
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WeddingItinerary;