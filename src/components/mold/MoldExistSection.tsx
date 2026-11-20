import { assetUrl } from "../../lib/assets";
import { RiArrowRightUpLongLine } from "react-icons/ri";

const MoldExistSection = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row bg-white gap-8 md:gap-12 xl:gap-14 p-6 py-18 md:px-16 lg:py-22">
      <div className="basis-1/2 flex flex-col justify-end">
        <p className="text-[4vw] md:text-[1.5vw] font-Oswald font-semibold  mb-2">
          WHY MOLD EXISTS
        </p>
        <h2 className="text-[7vw]  md:text-[3.2vw]  font-Oswald font-bold uppercase leading-7 lg:leading-12 xl:leading-14 mb-4 md:mb-4 xl:mb-8">
          Knowing is not the <br /> same as becoming
        </h2>
        <p className="text-justify md:text-left text-[3.5vw] md:text-[1.3vw] lg:text-[1.4vw] font-Instrument mb-3 md:mb-4 xl:mb-8">
          We live in a world filled with information. We know what we should do,
          what we want to become and where we want to go. Yet knowing what to do
          does not always translate into doing it.
        </p>
        <p className="text-justify md:text-left text-[3.5vw] md:text-[1.3vw] lg:text-[1.4vw] font-Instrument mb-3 md:mb-2 xl:mb-8">
          MOLD exists to help close that gap.
        </p>
        <p className="text-justify md:text-left text-[3.5vw] md:text-[1.3vw] lg:text-[1.4vw] font-Instrument mb-3 md:mb-2 xl:mb-8">
          It creates intentional spaces where people can pause, gain clarity,
          examine their lives, develop practical disciplines and take meaningful
          steps toward the person they want to become.
        </p>
      
        <div className="flex mt-2">
          <a
            className="flex gap-3 items-center bg-white text-black text-center border-2  justify-center text-sm lg:text-[1.6vw] p-3 px-6 md:px-8 rounded-lg"
            href=""
          >
            Register for the MOLD <RiArrowRightUpLongLine />
          </a>
        </div>
      </div>
      <div className="basis-1/2 flex justify-center">
        <img src={assetUrl("../images/TA_mold_photo.png")} alt="Pst. Tunde Adisa Photo" />
      </div>
    </section>
  );
};

export default MoldExistSection;
