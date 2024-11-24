import { Shoe } from '../../types';

type Props = {
  item: Shoe;
};
const Badge = ({ item }: Props) => {
  return (
    (item.discount || item.isNew) && (
      <span
        className={`absolute text-white rounded rounded-tl-[12px] 
      rounded-br-[12px] lg:rounded-br-[12px] lg:rounded-tl-[24px] px-2 py-1 lg:py-3 lg:px-4 
      ${item.discount ? 'bg-yellow' : 'bg-blue'} 
      `}
      >
        {item.discount ? `%${item.discount} discount` : item.isNew && 'New'}
      </span>
    )
  );
};

export default Badge;
