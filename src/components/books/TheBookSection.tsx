const TheBookSection = () => {
  return (
    <section className="p-6 py-18 lg:px-16 lg:py-22">
      <div className="flex flex-col-reverse md:flex-row bg-white gap-8 md:gap-6 xl:gap-0 ">
        <div className="basis-1/2">
          <img
            src="../images/featured_resource_image.png"
            alt="Feature Resource Image"
          />
        </div>
        <div className="basis-1/2 flex flex-col justify-end mb-30">
          <p className="text-[4vw] md:text-[1.5vw] font-Oswald font-semibold mb-2">
            THE BOOK
          </p>
          <h2 className="text-[7vw]  md:text-[3.6vw]  font-Oswald font-bold uppercase leading-7 lg:leading-12 xl:leading-18 mb-2">
            TITTLE OF THE BOOK
          </h2>
          <p className="text-justify md:text-left text-[3.5vw] md:text-[1.3vw] lg:text-[1.4vw] font-Instrument mb-3 md:mb-4 xl:mb-10">
            The MOLD Bootcamp is a transformational coaching experience designed
            to help you rediscover your identity, align with your purpose, and
            move forward with clarity. Created and led by Tunde Adisa, it
            combines biblical wisdom, mindset training, and strategic life
            planning to equip you for personal and leadership growth.
          </p>

          <div className="flex flex-col md:flex-row gap-4 mt-2">
            <a
              className="md:w-full  flex  items-center gap-4 md:gap-1 xl:gap-4  bg-black text-white text-center border-2 justify-center text-sm md:text-[1.4vw] lg:text-[1.6vw] xl:text-[1.2vw] p-3 px-6 md:px-2 xl:px-8 rounded-lg"
              href=""
            >
              Get the Book
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheBookSection;
