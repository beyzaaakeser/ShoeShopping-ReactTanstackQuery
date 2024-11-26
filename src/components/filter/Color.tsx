import { FilterProps } from '../../types';
import { colors } from '../../utils/constants';

const Color = ({ selected, setSelected }: FilterProps<string[]>) => {
  const toggle = (num: string) => {
    const found = selected.includes(num);
    if (!found) {
      setSelected([...selected, num]);
    } else {
      setSelected(selected.filter((item) => item !== num));
    }
  };

  return (
    <div className="lg:mt-5">
      <h2 className="mb-4 font-semibold">Size</h2>
      <div className="grid grid-cols-5 gap-4">
        {colors.map((color, index) => {
          const found = selected.includes(color.id);
          return (
            <button
              key={index}
              type="button"
              onClick={() => toggle(color.id)}
              style={{ background: color.code }}
              className={`py-2 px-4 lg:px-0 text-center rounded-md cursor-pointer transition
              hover:bg-zinc-400 text-transparent select-none  ${
                found ? 'ring-[4px]' : ''
              } `}
            >
              .
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Color;
