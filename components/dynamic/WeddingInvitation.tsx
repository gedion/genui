
"use client";
import React from 'react';

const WeddingInvitation = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-teal-500 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">You're Invited!</h1>
        <p className="text-lg text-gray-600 mb-6">Join us for a beautiful beach wedding in the Caribbean.</p>
        <svg className="w-full h-48 mb-6" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg"><path fill="#00BFFF" fillOpacity="1" d="M0,64L48,85.3C96,107,192,149,288,176C384,203,480,213,576,197.3C672,181,768,139,864,138.7C960,139,1056,181,1152,186.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        <button className="bg-teal-500 text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-teal-600 transition duration-300\">Reserve Your Spot</button>
      </div>
    </div>
  );
};

export default WeddingInvitation;
export const position = { "x": 557, "y": 259 };
