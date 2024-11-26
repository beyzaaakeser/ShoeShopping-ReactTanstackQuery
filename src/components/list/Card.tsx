import React from 'react';
import { Link } from 'react-router-dom';
import { Shoe } from '../../types';
import Price from './Price';
import Badge from './Badge';

type Props = {
  item: Shoe;
};

const Card = ({ item }: Props) => {
  return (
    <div className="flex flex-col justify-between">
      <div>
        <div className="bg-white p-2 relative rounded-3xl">
          <Badge item={item} />
          <img
            src={item.picture[0]}
            alt="Shoe Main Image"
            className="w-full aspect-[9/10] object-cover rounded-3xl"
          />
        </div>
        <h2 className="font-bold line-clamp-2 my-4 lg:text-[20px] xl:text-[24px]">
          {item.name}
        </h2>
      </div>
      <Link to={`/detail/:${item.id}`}
        className="bg-gray-dark text-center flex items-center justify-center gap-1 text-white font-medium px-4 py-2 rounded-lg transition hover:bg-black text-nowrap max-md:text-sm "
      >
        Discover More - <Price item={item} />
      </Link>
    </div>
  );
};

export default Card;
