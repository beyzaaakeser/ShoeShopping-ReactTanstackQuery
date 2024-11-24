import { numbers } from '../../utils/constants';

export type FilterProps = {
  selected: string[];
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
};

const Size = ({ selected, setSelected }: FilterProps) => {
  const toggle = (num: string) => {
    const found = selected.includes(num);
    if (!found) {
      setSelected([...selected, num]);
    }else {
        setSelected(selected.filter((item) => item !== num));
    }
  };

  return (
    <div className="lg:mt-5">
      <h2 className="mb-4 font-semibold">Size</h2>
      <div className="grid grid-cols-5 gap-4">
        {numbers.map((num, index) => {
          return (
            <button
              key={index}
              type="button"
              onClick={() => toggle(num)}
              className={`py-2 px-4 lg:px-0 text-center rounded-md cursor-pointer transition
              hover:bg-zinc-400 bg-white`}
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
