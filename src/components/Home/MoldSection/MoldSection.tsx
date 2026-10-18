
import { FaCheckCircle } from "react-icons/fa";

const MoldSection = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row bg-white gap-8 md:gap-12 xl:gap-14 p-6 py-18 md:px-16 lg:py-22">
      <div className="basis-1/2 flex flex-col justify-end">
        <p className="text-[4vw] md:text-[1.5vw] mb-2">THE MOLD</p>
        <h2 className="text-[8vw]  md:text-[3.5vw] xl:text-[4vw] font-Oswald font-bold uppercase leading-9 lg:leading-12 xl:leading-18 mb-4 md:mb-4 ">
          More than an event. A journey of becoming.
        </h2>
        <p className="text-justify md:text-left text-[3.5vw] md:text-[1.3vw] lg:text-[1.4vw] font-Instrument mb-3 md:mb-2">
          The MOLD Bootcamp is a transformational coaching experience designed
          to help you rediscover your identity, align with your purpose, and
          move forward with clarity. Created and led by Tunde Adisa, it combines
          biblical wisdom, mindset training, and strategic life planning to
          equip you for personal and leadership growth.
        </p>
        <p className="text-justify md:text-left text-[3.5vw] md:text-[1.3vw] lg:text-[1.4vw] font-Instrument mb-3 md:mb-2">
          What You’ll Gain from This Experience
        </p>
        <ul className="text-justify md:text-left text-[3.5vw] md:text-[1.3vw] lg:text-[1.4vw] font-Instrument mb-3 md:mb-2">
          <li className="flex items-center gap-2">
            <FaCheckCircle /> Clarity of Identity & Purpose{" "}
          </li>
          <li className="flex items-center gap-2">
            <FaCheckCircle /> Renewal of Mindset & Perspective
          </li>
          <li className="flex items-center gap-2">
            <FaCheckCircle /> Personalized Vision & Life Strategy
          </li>
          <li className="flex items-center gap-2">
            <FaCheckCircle /> Deeper Spiritual Alignment
          </li>
          <li className="flex items-center gap-2">
            <FaCheckCircle /> Supportive Growth Community
          </li>
        </ul>
        <div className="flex mt-2">
          <a
            className="w-full bg-black text-white text-center justify-center text-sm lg:text-[2vw] p-3 md:px-6 lg:p-3 rounded-md"
            href=""
          >
            Explore MOLD
          </a>
        </div>
      </div>
      <div className="basis-1/2 flex justify-center">
        <img src="../images/Mold_Tunde.png" alt="Pst. Tunde Adisa Photo" />
      </div>
    </div>
  );
};

export default MoldSection;
