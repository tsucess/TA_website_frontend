// import React from "react";
import Header from "../../../layout/header/Header";
import { RiArrowRightUpLongLine } from "react-icons/ri";

const Hero = () => {
  return (
    <div className="bg-black bg-[url('/images/hero_bg.png')] bg-no-repeat bg-cover bg-center  text-white">
      <Header />
      <div className="flex flex-col md:flex-row font-Oswald py-4 lg:py-18 lg:px-6 ">
        <div className="flex flex-col  p-4 md:px-6 basis-2/3 gap-2">
          <h5 className="text-[4vw] md:text-[1.5vw] mb-2">TEACHER • LEADER • MENTOR</h5>
          <h1 className="text-[11.5vw] md:text-[6vw] lg:text-[6vw] font-extrabold uppercase leading-11 md:leading-12 lg:leading-16 xl:leading-22 mb-4 md:mb-8">
            Building People Shaping Purpose Impacting Lives
          </h1>
          <p className="text-[3.5vw] md:text-[2vw] lg:text-[1.7vw] font-Instrument mb-3 md:mb-6">
            Tunde Adisa is a pastor, business coach and mentor passionate about
            leadership, personal growth, purpose and helping people live with
            greater intention and impact
          </p>
          <div className="flex gap-4">
            <a
              className="w-50 lg:w-60 xl:w-80 bg-white text-center justify-center text-sm lg:text-[2vw] text-black p-2 md:px-6 lg:p-3 rounded-md"
              href=""
            >
              Discover His Story
            </a>
            <a
              className="w-50 lg:w-60 xl:w-80 flex gap-3 items-center border text-center justify-center lg:text-[2vw] text-white p-2 md:px-6 lg:p-3 rounded-md"
              href=""
            >
              Explore MOLD <RiArrowRightUpLongLine />
            </a>
          </div>
        </div>
        <div className=" basis-1/3 "></div>
      </div>
    </div>
  );
};

export default Hero;
