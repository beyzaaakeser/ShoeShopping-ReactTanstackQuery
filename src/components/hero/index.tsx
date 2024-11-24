const Hero = () => {
  return (
    <div className="relative">
      <div className="absolute top-1/2 flex flex-col gap-5 max-sm:gap-1  transform -translate-y-1/2 ps-4 md:ps-6 lg:ps-8 xl:ps-10">
        <p className="text-sm sm:text-lg lg:text-xl xl:text-2xl font-open xl:font-semibold text-gray">
          Only for a certain period of time
        </p>
        <h1 className="text-amber-500 text-lg sm:text-2xl md:text-3xl lg:text-[50px] xl:text-74px] font-semibold ">
          %30 discount
        </h1>
        <p className="text-gray font-open text-xs sm:text-sm lg:text-lg xl:text-xl max-md:max-w-[65%] md:max-w-[70%] lg:max-w-[75%] xl:max-w-[80%]">
          Sneakers are made to be comfortable so you can concentrate on your
          next sport.
        </p>
      </div>

      <img src="/banner.png" className="w-full max-h-[450px]" />
    </div>
  );
};

export default Hero;
