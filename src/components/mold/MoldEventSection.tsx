import { FaCheckCircle } from "react-icons/fa";
import { RiArrowRightUpLine } from "react-icons/ri";

const MoldEventSection = () => {
  return (
    <div className="p-6 py-18 md:px-16 lg:py-22">
      <div className="text-center mb-4 md:mb-10 xl:mb-15">
        <p className="text-[4vw] md:text-[1.5vw] font-Oswald font-semibold mb-2">
          THE NEXT EXPERIENCE
        </p>
        <h2 className="text-[7vw]  md:text-[3.2vw]  font-Oswald font-bold uppercase leading-7 lg:leading-12 xl:leading-18">
          MOLD [EDITION NAME]
        </h2>
      </div>
      <div className="flex flex-col-reverse md:flex-row bg-white gap-8 md:gap-12 xl:gap-14 ">
        <div className="basis-1/2 flex justify-center">
          <img
            src="../images/mold_event_flier.png"
            alt="Pst. Tunde Adisa Photo"
          />
        </div>
        <div className="basis-1/2 flex flex-col justify-end">
          <p className="text-justify md:text-left text-[3.5vw] md:text-[1.3vw] lg:text-[1.4vw] font-Instrument mb-3 md:mb-4 xl:mb-10">
            We live in a world filled with information. We know what we should
            do, what we want to become and where we want to go. Yet knowing what
            to do does not always translate into doing it.
          </p>
          <p className="text-justify md:text-left text-[3.5vw] md:text-[1.3vw] lg:text-[1.4vw] font-Instrument mb-3 md:mb-4">
            MOLD exists to help close that gap.
          </p>
          <p className="text-justify md:text-left text-[3.5vw] md:text-[1.3vw] lg:text-[1.4vw] font-Instrument mb-3 md:mb-4">
            It creates intentional spaces where people can pause, gain clarity,
            examine their lives, develop practical disciplines and take
            meaningful steps toward the person they want to become.
          </p>
          <ul className="text-justify md:text-left text-[3.5vw] md:text-[1.3vw] lg:text-[1.4vw] font-Instrument mb-3 md:mb-4 xl:mb-8">
            <li className="flex items-center gap-2 mb-2">
              <FaCheckCircle /> DATE
            </li>
            <li className="flex items-center gap-2 mb-2">
              <FaCheckCircle /> TIME
            </li>
            <li className="flex items-center gap-2 mb-2">
              <FaCheckCircle /> VENUE
            </li>
            <li className="flex items-center gap-2 mb-2">
              <FaCheckCircle /> CITY
            </li>
          </ul>
          <div className="flex mt-2">
            <a
              className="flex items-center gap-4  bg-white text-black text-center border-2 justify-center text-sm lg:text-[1.6vw] p-3 px-6 md:px-8 rounded-lg"
              href=""
            >
              Register for the MOLD <RiArrowRightUpLine />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoldEventSection;
