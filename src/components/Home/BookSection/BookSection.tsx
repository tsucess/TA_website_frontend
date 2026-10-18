

const BookSection = () => {
  return (
    <div className="bg-white text-black p-6 md:px-16 lg:py-11">
      <div className="flex flex-col md:flex-row gap-4 md:gap-6  mb-8">
        <div className="text-white bg-[url('/images/family.png')] bg-no-repeat bg-cover bg-center md:basis-1/2 flex flex-col justify-end w-full h-70 lg:h-100 xl:h-140 rounded-3xl p-4 py-8 md:p-8">
          
        </div>
        <div className="basis-1/2 flex flex-col justify-end">
          <p className="text-[4vw] md:text-[1.5vw] mb-2">THE BOOK</p>
          <h2 className="text-[8vw]  md:text-[3.5vw] xl:text-[4vw] font-Oswald font-bold uppercase leading-9 lg:leading-12 xl:leading-18 mb-4 md:mb-4 ">
            TITTLE OF THE BOOK
          </h2>
          <p className="text-justify md:text-left text-[3.5vw] md:text-[1.3vw] lg:text-[1.4vw] font-Instrument mb-3 md:mb-2">
            The MOLD Bootcamp is a transformational coaching experience designed
            to help you rediscover your identity, align with your purpose, and
            move forward with clarity. Created and led by Tunde Adisa, it
            combines biblical wisdom, mindset training, and strategic life
            planning to equip you for personal and leadership growth.
          </p>
          
          <div className="flex mt-2">
            <a
              className="w-full bg-black text-white text-center justify-center text-sm lg:text-[2vw] p-3 md:px-6 lg:p-3 rounded-md"
              href=""
            >
             Get the Book
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookSection;
