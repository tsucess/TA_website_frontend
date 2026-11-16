const WhyTheseBooksSection = () => {
  return (
    <section>
      <div className="p-2 md:pl-14">
        <div className="flex flex-col-reverse md:flex-row bg-white gap-8 md:gap-6 xl:gap-0 ">
          <div className="basis-3/7">
            <p className="text-[4vw] md:text-[1.5vw] font-Oswald font-semibold mb-4">
              WHY THESE BOOKS
            </p>
            <h2 className="text-[7vw]  md:text-[3.2vw]  font-Oswald font-bold uppercase leading-7 lg:leading-12 xl:leading-18 mb-2">
              Written from experience. Built around purpose.
            </h2>
            <p className="text-justify md:text-left text-[3.5vw] md:text-[1.3vw] lg:text-[1.4vw] font-Instrument mb-3 md:mb-4 xl:mb-10">
              Books are more than collections of words. They are opportunities
              to pause, reflect, learn and see familiar things from a different
              perspective.
            </p>
            <p className="text-justify md:text-left text-[3.5vw] md:text-[1.3vw] lg:text-[1.4vw] font-Instrument mb-3 md:mb-4 xl:mb-10">
              Through his writing, Pastor Tunde shares lessons, convictions and
              practical insights shaped by his faith, leadership journey and
              conversations with people.
            </p>
          </div>
          <div className="basis-2/7 hidden md:block "></div>
          <div className=" hidden md:block bg-[url('../images/books.png')] bg-no-repeat bg-right bg-contain basis-2/7 xl:h-[30vh]"></div>
        </div>
      </div>
    </section>
  );
};

export default WhyTheseBooksSection;
