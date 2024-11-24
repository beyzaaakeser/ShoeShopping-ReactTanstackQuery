import Buttons from '../../components/buttons';
import Filter from '../../components/filter';
import Hero from '../../components/hero';
import List from '../../components/list';

const Home = () => {
  return (
    <div>
      <Hero />
      <Buttons />
      <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-4 md:mt-7 xl:mt-8 ">
        Options for You
      </h1>

      <div className="grid grid-cols-4 gap-5">
        <div className=''>
          <Filter />
        </div>
        <div className="col-span-4 lg:col-span-3">
          <List />
        </div>
      </div>
    </div>
  );
};

export default Home;
