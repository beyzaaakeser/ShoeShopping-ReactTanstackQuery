import React, { useState } from 'react';
import { DetailProps } from '../../types';
import { numbers } from '../../utils/constants';

const Size = ({ data }: DetailProps) => {
  const [selected, setSelected] = useState<string>('');

  const toggle = (size: string) => {
    const isSame = selected === size;
    if (isSame) {
      setSelected('');
    } else {
      setSelected(size);
    }
  };

  const stockSize = data.size.split(',');
  return (
    <div>
      <h2 className="mb-4 font-semibold">Choose Size</h2>
      <div className="grid grid-cols-5 gap-4">
        {numbers.map((num, index) => {
          const found = selected.includes(num);
          const inStock = stockSize.includes(num);
          return (
            <button
              disabled={!inStock}
              key={index}
              type="button"
              onClick={() => toggle(num)}
              className={`py-2 px-4 lg:px-0 text-center rounded-md cursor-pointer transition
              hover:bg-zinc-400 disabled:bg-[#D2D1D3] disabled:text-[#8F8C91] disabled:cursor-not-allowed ${
                found ? 'bg-black text-white' : 'bg-white'
              } `}
            >
              {num}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Size;
