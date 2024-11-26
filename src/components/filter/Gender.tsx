import React from 'react';
import { FilterProps } from '../../types';

const Gender = ({ selected, setSelected }: FilterProps<string>) => {
  return (
    <div>
      <h2 className="mb-4 font-semibold">Gender</h2>
      <div className="flex items-center gap-3">
        <input
          onClick={() => setSelected('man')}
          checked={selected === "man"}
          type="radio"
          name="gender"
          id="man"
        />
        <label htmlFor="man" className="font-semibold">
          Man
        </label>
      </div>
      <div className="flex items-center gap-3">
        <input
          onClick={() => setSelected('woman')}
          checked={selected === "woman"}
          type="radio"
          name="gender"
          id="woman"
        />
        <label htmlFor="woman" className="font-semibold">
          Woman
        </label>
      </div>
    </div>
  );
};

export default Gender;
