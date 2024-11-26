import React from 'react';
import { DetailProps } from '../../types';

const Foot = ({ data }: DetailProps) => {
    console.log(data.description)
  return (
    <div>
      <div className='flex flex-col gap-2 text-white'>
        <div className='flex gap-2'>
          <button className='flex-1 p-4 rounded-lg bg-black '>Add to Cart</button>
          <button className='bg-black p-4 rounded-lg'>
            <img src="/heart.svg" alt="" />
          </button>
        </div>
        <button className='bg-blue p-4 rounded-lg'>Buy Now</button>
      </div>

      <div>
        <h2 className='font-semibold mt-8 mb-2 text-2xl text-gray-dark'>About This Product</h2>

        <p className='font-open text-xl text-gray-dark'>
            {data.description}
        </p>
      </div>
    </div>
  );
};

export default Foot;
