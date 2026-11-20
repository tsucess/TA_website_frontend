import { assetUrl } from "../../lib/assets";
// import React from "react";
import Header from "../../layout/header/Header";

const Hero = () => {
  return (
    <div className="bg-black  text-white h-100rem overflow-hidden">
      <Header />
      <div className="flex flex-col md:flex-row font-Oswald pt-4 lg:px-6 ">
        <div className="flex flex-col justify-center  p-4 md:px-6 basis-6/11 gap-2">
          <h5 className="text-[4vw] md:text-[1.5vw] mb-2">ABOUT TUNDE ADISA</h5>
          <h1 className="text-[11.5vw] md:text-[6vw] lg:text-[5vw] font-extrabold uppercase leading-12 md:leading-12 lg:leading-16 xl:leading-20 mb-4">
            The man behind <br /> the message
          </h1>
          <p className="text-[3.5vw] md:text-[2vw] lg:text-[1.7vw] font-Instrument mb-3 md:mb-6">
            Tunde Adisa is a pastor, teacher, business coach and mentor
            committed to helping people grow in faith, develop their capacity
            and live with greater purpose and impact.
          </p>
        </div>
        <div className=" basis-5/11">
          <img className="xl:h-150" src={assetUrl("/images/TA_about_hero_image.png")} alt="Tunde Adisa Photo" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
