import { FaRegEnvelope } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";

const ServicesInfoSection = () => {
  return (
    <div className="bg-white text-black p-6 md:px-16 lg:py-11 xl:py-22">
      <div className="mb-4 md:mb-10">
        <p className="text-[4vw] md:text-[1.5vw] mb-2 font-Oswald">
          SERVICE INFORMATION
        </p>
        <h2 className="text-[8vw] md:text-[3.5vw] xl:text-[4vw] font-Oswald font-bold uppercase leading-9 lg:leading-12 xl:leading-18 mb-4 md:mb-4 ">
          Personal support, arranged directly
        </h2>
        <p className="font-Instrument text-[3.6vw] md:text-[1.6vw]">
          All services listed on this page are paid. Fees vary according to the
          service and agreed arrangements. To learn more about the applicable
          fee, availability and how to proceed, contact the team directly.
        </p>
      </div>
      <div className="mb-8 p-4 md:p-6 lg:px-8 border rounded-2xl md:rounded-4xl">
        {/* <div className="bg-black md:basis-24/49 text-white h-40 md:h-33 lg:h-48 xl:h-68 rounded-3xl p-4 py-8 md:p-8 mb-0"> */}
        <div className="text-black  py-8 mb-0 border-b ">
          <FaRegEnvelope className="text-[2rem] mb-4" />
          <p className="font-Instrument text-[3.6vw] md:text-[1.6vw] mb-2">
            Email inquiry
          </p>
          <p className="font-Instrument text-[3.6vw] md:text-[1.6vw] mb-2">
            For service questions, availability and fee information.
          </p>
          <h3 className="font-bold font-Oswald text-[5vw] md:text-[2.5vw]">
            tundeadisa@gmail.com
          </h3>
        </div>
        <div className="text-black  py-8 md:p-">
          <FiPhone className="text-[2rem] mb-4" />
          <p className="font-Instrument text-[3.6vw] md:text-[1.6vw] mb-2">
            Phone inquiry
          </p>
          <p className="font-Instrument text-[3.6vw] md:text-[1.6vw] mb-2">
            Prefer to speak with someone? Call the official contact number to
            discuss the service.
          </p>
          <h3 className="font-bold font-Oswald text-[5vw] md:text-[2.5vw]">
            0810 000 0000
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ServicesInfoSection;
