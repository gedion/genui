
"use client";
import React from 'react';

const WeddingInvitationCard = () => {
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='bg-white p-8 rounded-lg shadow-lg max-w-md text-center'>
        <svg
          className='w-16 h-16 mx-auto mb-4 text-pink-500'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
            clipRule='evenodd'
          />
        </svg>
        <h1 className='text-2xl font-bold text-gray-800 mb-2'>You're Invited!</h1>
        <p className='text-gray-600 mb-4'>Join us for the wedding of</p>
        <h2 className='text-xl font-semibold text-gray-700'>John & Jane</h2>
        <p className='text-gray-600 mb-4'>
          Saturday, June 25, 2023
          <br />
          4:00 PM
          <br />
          Central Park, New York
        </p>
        <button className='mt-4 px-4 py-2 bg-pink-500 text-white rounded-lg shadow hover:bg-pink-600'>
          RSVP
        </button>
      </div>
    </div>
  );
};

export default WeddingInvitationCard;

export const position = {"x":884,"y":376};
          