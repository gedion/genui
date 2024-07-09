
"use client";
import React from 'react';

const MomentOfTruffCard = () => {
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg bg-white p-6 m-4'>
      <img className='w-full h-48 object-cover' src='https://via.placeholder.com/300' alt='Moment of Truff' />
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>Moment of Truff</div>
        <p className='text-gray-700 text-base'>
          Discover the exquisite taste of our finest truffles, crafted with passion and precision.
        </p>
      </div>
      <div className='px-6 pt-4 pb-2'>
        <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>#truffle</span>
        <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>#gourmet</span>
        <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>#delight</span>
      </div>
    </div>
  );
};

export default MomentOfTruffCard;
export const position = {"x":426,"y":440};
          