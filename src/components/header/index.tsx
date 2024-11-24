import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header
      className="grid grid-cols-3 items-center bg-white-fa p-4 md:p-5 
    lg:p-6 xl:p-8 text-gray-dark rounded-xl md:rounded-2xl lg:rounded-[20px] xl:rounded-3xl
    mb-6 md:mb-10 lg:mb-16 xl:mb-20 "
    >
      <nav className="flex gap-10 font-semibold max-lg:hidden ">
        <a>New Drops 🔥</a>
        <a>Men</a>
        <a>Women</a>
      </nav>

      <button className="lg:hidden">
        <img src="/hamburger.svg" alt="" />
      </button>

      <Link to={'/'} className='flex justify-center'>
        <img src="/logo.svg" alt="" />
      </Link>

      <div className="flex items-center justify-end gap-5 lg:gap-10">
        <img src="/user.svg" className="size-4 md:size-5 lg:size-6 xl:size-7" />
        <img
          src="/search.svg"
          className="size-4 md:size-5 lg:size-6 xl:size-7 max-lg:hidden"
        />
        <span className="size-8 md:size-10 lg:size-11 md:text-lg bg-yellow rounded-full grid place-items-center font-open font-semibold">
          0
        </span>
      </div>
    </header>
  );
};

export default Header;
