import { FaEnvelopeOpen } from "react-icons/fa";
import { RiArrowRightUpLongLine } from "react-icons/ri";

const SpeakingRequestConfirmation = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center text-center gap-6 items-center bg-black text-white p-4">
      <FaEnvelopeOpen className="text-[12vw] md:text-[7vw] mb-10" />
      <h2 className="text-[8vw]  md:text-[3.5vw] xl:text-[4vw] font-Oswald font-bold uppercase leading-9 lg:leading-12 xl:leading-18 xl:my-6">
        Thank you for the invitation
      </h2>
      <div className="md:w-100 lg:md:w-180 xl:md:w-280 text-center">
        <p className="text-[3.5vw] md:text-[1.3vw] lg:text-[1.4vw] font-Instrument mb-3 md:mb-4 xl:mb-10">
          Your speaking request has been received.
        </p>
        <p className="text-[3.5vw] md:text-[1.3vw] lg:text-[1.4vw] font-Instrument mb-3 md:mb-4 xl:mb-10">
          The team will review the details provided and get back to you using
          the contact information you submitted.
        </p>
      </div>

      <div className="flex  md:flex-row gap-4 md:gap-8">
        <a
          className="w-30 md:w-55 lg:w-60 xl:w-[20vw] bg-white items-center justify-center text-black text-center border-2 text-[3vw] md:text-[2vw] lg:text-[1.6vw] p-2 md:p-4 md:px-8 rounded-lg"
          href="#"
        >
          Return Home
        </a>
        <a
          className="w-40 md:w-55 lg:w-60 xl:w-[20vw] flex gap-3 items-center text-white text-center border-2 border-white justify-center text-[3vw] md:text-[2vw] lg:text-[1.6vw] p-2md: p-4  md:px-8 rounded-lg"
          href="#"
        >
          Explore Resources <RiArrowRightUpLongLine />
        </a>
      </div>
    </div>
  );
};

export default SpeakingRequestConfirmation;
