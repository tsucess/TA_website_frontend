

const PhotoSection = () => {
  return (
    <div className="bg-black text-white p-6 py-18 md:px-16 lg:py-22">
      <div>
        <p className="text-[4vw] md:text-[1.5vw] font-Oswald mb-2">
          PHOTO STORY
        </p>
        <div className="flex flex-col md:flex-row justify-between items-baseline">
          <h2 className="text-[7.6vw]  md:text-[3.5vw] xl:text-[4vw] font-Oswald font-bold uppercase leading-9 lg:leading-12 xl:leading-18 mb-4 md:mb-10 ">
            The journey, in moments.
          </h2>
          <a href="#" className="text-white hover:underline mb-4">VIEW ALL PHOTOGRAPHS</a>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 lg:gap-6 ">
        <img
          className="md:w-50 md:basis-1/3 rounded-2xl"
          src="/images/photo_1.png"
          alt=""
        />
        <img
          className="md:w-50 md:basis-1/3 rounded-2xl"
          src="/images/photo_2.png"
          alt=""
        />
        <img
          className="md:w-50 md:basis-1/3 rounded-2xl"
          src="/images/photo_3.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default PhotoSection;
