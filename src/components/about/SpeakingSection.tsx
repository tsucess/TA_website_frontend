import { assetUrl } from "../../lib/assets";
import { FaCheckCircle } from "react-icons/fa";
import { RiArrowRightUpLongLine } from "react-icons/ri";


const SpeakingSection = () => {
  return (
    <div  className="flex flex-col-reverse md:flex-row bg-white gap-8 md:gap-12 xl:gap-14 p-6 py-18 md:px-16 lg:py-22">
      <div className="basis-1/2 flex flex-col justify-end">
        <p className="text-[4vw] md:text-[1.5vw] font-Oswald font-semibold  mb-2">
          SPEAKING & PUBLIC ENGAGEMENT
        </p>
        <h2 className="text-[7vw]  md:text-[3.2vw]  font-Oswald font-bold uppercase leading-7 lg:leading-12 xl:leading-18 mb-4 md:mb-4 xl:mb-10">
          Conversations that <br /> move people forward.
        </h2>
        <p className="text-justify md:text-left text-[3.5vw] md:text-[1.3vw] lg:text-[1.4vw] font-Instrument mb-3 md:mb-4 xl:mb-10">
          Tunde engages audiences through conversations around faith,
          leadership, purpose, personal growth and other areas connected to his
          work.
        </p>
        <p className="text-justify md:text-left text-[3.5vw] md:text-[1.3vw] lg:text-[1.4vw] font-Instrument mb-3 md:mb-2">
          This should explain:
        </p>
        <ul className="text-justify md:text-left text-[3.5vw] md:text-[1.3vw] lg:text-[1.4vw] font-Instrument mb-3 md:mb-4 xl:mb-10">
          <li className="flex items-center gap-2 mb-2">
            <FaCheckCircle /> Speaking
          </li>
          <li className="flex items-center gap-2 mb-2">
            <FaCheckCircle /> Teachings
          </li>
          <li className="flex items-center gap-2 mb-2">
            <FaCheckCircle /> Panel Discussions
          </li>
          <li className="flex items-center gap-2 mb-2">
            <FaCheckCircle /> Leadership sessions
          </li>
        </ul>
        <div className="flex mt-2">
          <a
            className="flex gap-3 items-center bg-white text-black text-center border-2  justify-center text-sm lg:text-[1.6vw] p-3 px-6 md:px-8 rounded-lg"
            href="/speaking#inviteForm"
          >
            Invite Tunde Adisa to Speak <RiArrowRightUpLongLine />
          </a>
        </div>
      </div>
      <div className="basis-1/2 flex justify-center">
        <img src={assetUrl("../images/Tunde_speaking.png")} alt="Pst. Tunde Adisa Photo" />
      </div>
    </div>
  );
};

export default SpeakingSection;
