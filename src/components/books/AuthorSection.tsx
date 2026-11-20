import { assetUrl } from "../../lib/assets";
import { RiArrowRightUpLine } from "react-icons/ri";

const AuthorSection = () => {
  return (
    <section className="p-6 py-18 lg:px-16 lg:py-22">
      <div className="flex flex-col-reverse md:flex-row bg-white gap-8 md:gap-6 xl:gap-0 ">
        <div className="basis-1/2">
          <img src={assetUrl("../images/Tunde_author.png")} alt="Feature Resource Image" />
        </div>
        <div className="basis-1/2 flex flex-col justify-end">
          <p className="text-[4vw] md:text-[1.5vw] font-Oswald font-semibold mb-2">
            THE AUTHOR
          </p>
          <h2 className="text-[7vw]  md:text-[3.6vw]  font-Oswald font-bold uppercase leading-7 lg:leading-12 xl:leading-18 mb-2">
            Meet Tunde Adisa
          </h2>
          <p className="text-justify md:text-left text-[3.5vw] md:text-[1.3vw] lg:text-[1.4vw] font-Instrument mb-3 md:mb-4 xl:mb-10">
            Tunde Adisa is a pastor, teacher, leader and mentor whose work
            focuses on helping people grow in faith, purpose, leadership and
            everyday life.
          </p>
          <p className="text-justify md:text-left text-[3.5vw] md:text-[1.3vw] lg:text-[1.4vw] font-Instrument mb-3 md:mb-4 xl:mb-10">
            His writing extends these conversations beyond the pulpit and into
            the hands of readers who want to learn, reflect and grow.
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-2">
            <a
              className="md:w-[22vw]  flex items-center gap-4 md:gap-1 xl:gap-4  bg-white text-black text-center border-2 justify-center text-sm md:text-[1.4vw] lg:text-[1.6vw] xl:text-[1.2vw] p-3 px-6 md:px-2 xl:px-8 rounded-lg"
              href="#"
            >
              Read His Story <RiArrowRightUpLine />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorSection;
