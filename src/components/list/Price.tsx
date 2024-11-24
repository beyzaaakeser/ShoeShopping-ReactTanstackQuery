import { Shoe } from '../../types';

const Price = ({ item }: { item: Shoe }) => {
  let price = item.price;
  if (item.discount) {
    price = (item.price * (100 - item.discount)) / 100;
  }

  return (
    <>
      {item.discount && (
        <div className="relative inline-block text-md text-gray-400">
          <span className="z-10">${item.price}</span>
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-yellow transform -translate-y-1/2 rotate-[-45deg]"></div>
        </div>
      )}
      <p
        className={item.discount ? 'text-yellow font-semibold ' : 'text-white'}
      >
        ${price}
      </p>
    </>
  );
};

export default Price;
