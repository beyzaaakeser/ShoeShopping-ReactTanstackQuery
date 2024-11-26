import React from 'react';
import { DetailProps } from '../../types';
import Badge from '../../components/list/Badge';

const Head = ({ data }: DetailProps) => {
  let price = data.price;
  if (data.discount) {
    price = (data.price * (100 - data.discount)) / 100;
  }

  return (
    <div>
      <Badge item={data} />

      <h1 className="font-semibold text-[24px] md:text-[28px] lg:text-[32px] mt-[55px]">
        {data.name}
      </h1>
      <div className='flex gap-3 mt-5'>
        {data.discount && (
          <div className="relative inline-block text-md text-gray-400">
            <span className="z-10 text-[20px] md:text-[24px] ">${data.price}</span>
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-yellow transform -translate-y-1/2 rotate-[-45deg]"></div>
          </div>
        )}
        <p
          className={ 
            data.discount ? 'text-yellow font-semibold text-[20px] md:text-[24px] ' : 'text-blue text-[20px] md:text-[24px] '
          }
        >
          ${price}
        </p>
      </div>
    </div>
  );
};

export default Head;
