
"use client";

import React from 'react';

const HelloCard = () => {
  return (
    <div className='max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden'>
      <div className='bg-blue-500 p-4'>
        <h1 className='text-white text-2xl font-bold'>Hello, World!</h1>
      </div>
      <div className='p-4'>
        <p className='text-gray-700'>Welcome to our amazing application. We hope you have a great experience!</p>
      </div>
    </div>
  );
};

export default HelloCard;