import React from 'react';

const Buttons = ({ open }: { open: () => void }) => {
  return (
    <div className="my-8 flex gap-5 lg:hidden">
      <button
        onClick={open}
        className="flex-1 bg-white rounded-md p-2 px-4 flex gap-4 items-center justify-between hover:bg-gray-100 transition"
      >
        Filter <img src="/filter.svg" alt="" />{' '}
      </button>
      <button className="flex-1 bg-white rounded-md p-2 px-4 flex gap-4 items-center justify-between hover:bg-gray-100 transition">
        Order <img src="/down.svg" alt="" />
      </button>
    </div>
  );
};

export default Buttons;
