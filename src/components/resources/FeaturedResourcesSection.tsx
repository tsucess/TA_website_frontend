import { FiCalendar, FiClock, FiVideo } from "react-icons/fi";
import { RiArrowRightUpLine } from "react-icons/ri";

const FeaturedResourcesSection = () => {
  return (
    <section className="p-6 py-18 lg:px-16 lg:py-22">
      <div className="flex flex-col-reverse md:flex-row bg-white gap-8 md:gap-6 xl:gap-0 ">
        <div className="basis-1/2">
          <p className="text-[4vw] md:text-[1.5vw] font-Oswald font-semibold mb-2 ">
            Featured Resource
          </p>
          <h2 className="text-[7vw]  md:text-[3.2vw]  font-Oswald font-bold uppercase leading-7 lg:leading-12 xl:leading-18 mb-2">
            A resource worth your time
          </h2>
          <p className="text-justify md:text-left text-[3.5vw] md:text-[1.3vw] lg:text-[1.4vw] font-Instrument mb-3 md:mb-4 xl:mb-10">
            Explore practical teaching designed to deepen your understanding and
            strengthen your everyday walk
          </p>
          <img
            src="../images/featured_resource_image.png"
            alt="Feature Resource Image"
          />
        </div>
        <div className="basis-1/2 flex flex-col justify-end">
          <p className="text-[4vw] md:text-[1.5vw] font-Oswald font-semibold mb-2">
            TEACHING
          </p>
          <h2 className="text-[7vw]  md:text-[3.6vw]  font-Oswald font-bold uppercase leading-7 lg:leading-12 xl:leading-18 mb-2">
            building a faith that <br /> lasts
          </h2>
          <p className="text-justify md:text-left text-[3.5vw] md:text-[1.3vw] lg:text-[1.4vw] font-Instrument mb-3 md:mb-4 xl:mb-10">
            Discover how to build a steady, rooted faith that remains strong
            through every season of life. This teaching offers practical
            biblical insights you can apply daily.
          </p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-2 mb-6 md:mb-12">
            <span className=" md:w-[15vw] flex gap-2 justify-center items-center p-2  text-[4vw] md:text-[1.6vw] xl:text-[1.2vw]">
              <FiVideo /> Video
            </span>
            <span className=" md:w-[15vw] flex gap-2 justify-center items-center border-t border-b md:border-0 md:border-l md:border-r p-2 py-4 md:py-2 text-[4vw] md:text-[1.6vw] xl:text-[1.2vw]">
              <FiCalendar /> 12 Sep 2026
            </span>
            <span className=" md:w-[15vw] flex gap-2 justify-center items-center p-2  text-[4vw] md:text-[1.6vw] xl:text-[1.2vw]">
              <FiClock /> 18 min watch
            </span>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mt-2">
            <a
              className="md:w-[22vw]  flex  items-center gap-4 md:gap-1 xl:gap-4  bg-black text-white text-center border-2 justify-center text-sm md:text-[1.4vw] lg:text-[1.6vw] xl:text-[1.2vw] p-3 px-6 md:px-2 xl:px-8 rounded-lg"
              href=""
            >
              Explore Resources
            </a>
            <a
              className="md:w-[22vw]  flex items-center gap-4 md:gap-1 xl:gap-4  bg-white text-black text-center border-2 justify-center text-sm md:text-[1.4vw] lg:text-[1.6vw] xl:text-[1.2vw] p-3 px-6 md:px-2 xl:px-8 rounded-lg"
              href=""
            >
              Register for the MOLD <RiArrowRightUpLine />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedResourcesSection;
