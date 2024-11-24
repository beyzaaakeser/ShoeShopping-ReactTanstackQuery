import { useState } from 'react';
import Color from './Color';
import Gender from './Gender';
import Price from './Price';
import Size from './Size';

const Filter = () => {
  const [size, setSize] = useState<string[]>([]);
  return (
    <div
      className="max-lg:fixed max-lg:inset-0 z-10 max-lg:bg-zinc-900 
    max-lg:bg-opacity-60 backdrop-blur-md grid place-items-center"
    >
      <div className="max-lg:max-w-lg max-lg:h-[80vh] max-lg:min-w-[380px]">
        <div className="max-lg:bg-white max-lg:flex max-lg:justify-between max-lg:p-4 rounded-t-md">
          <h2 className="text-xl font-semibold">Filter</h2>
          <button className="lg:hidden font-semibold">X</button>
        </div>

        <form className="max-lg:p-5 bg-gray h-full flex flex-col gap-6 rounded-b-md">
          <Size selected={size} setSelected={setSize} />
          <Color />
          <Gender />
          <Price />
          <button
            type="reset"
            className="border border-gray-dark p-2 rounded-lg 
          hover:bg-gray-dark hover:text-white transition "
          >
            Clear
          </button>
        </form>
      </div>
    </div>
  );
};

export default Filter;
