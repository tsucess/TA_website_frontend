import { RiArrowRightUpLine } from "react-icons/ri";

const WaysToConnect = () => {
  return (
    <section>
      <div className="p-6 py-15 lg:px-20 xl:px-32 lg:py-22">
        <div className="flex flex-col gap-4 md:gap-2 lg:gap-4 xl:gap-6 md:flex-row flex-wrap bg-white  ">
          <div className="basis-8/25 flex flex-col border-2 rounded-xl md:rounded-xl p-3 pt-6  md:p-4 md:pt-6 lg:pt-10">
            <h2 className="text-[7vw]  md:text-[2vw]   font-Oswald font-bold uppercase leading-7 mb-4 xl:mb-8">
              SPEAKING & INVITATIONS
            </h2>
            <p className=" text-[4.5vw] md:text-[1.5vw] lg:text-[1.4vw] font-Instrument mb-4 xl:mb-10">
              Invite Tunde Adisa to speak at your conference, church program,
              leadership gathering or other event.
            </p>
            <p className="text-[4vw] text-text-ash md:text-[1.5vw] lg:text-[1.4vw] font-Instrument mb-4  xl:mb-10">
              For event organizers and speaking invitations.
            </p>

            <div className="flex flex-col md:flex-row gap-4 mt-2">
              <a
                className="w-full flex items-center gap-2 md:gap-1 xl:gap-4  bg-white text-black text-center border-2 justify-center text-[4vw] md:text-[1.4vw] lg:text-[1.6vw] xl:text-[1.2vw] p-2 px-2 xl:px-8 rounded-lg"
                href="/speaking#inviteForm"
              >
                Invite Pastor Tunde <RiArrowRightUpLine />
              </a>
            </div>
          </div>
          <div className="basis-8/25 flex flex-col border-2 rounded-xl md:rounded-xl p-3 pt-6  md:p-4 md:pt-6 lg:pt-10">
            <h2 className="text-[7vw]  md:text-[2vw]   font-Oswald font-bold uppercase leading-7 mb-4 xl:mb-8">
              MOLD & PROGRAMS
            </h2>
            <p className=" text-[4.5vw] md:text-[1.5vw] lg:text-[1.4vw] font-Instrument mb-4 xl:mb-10">
              Questions about MOLD, upcoming programs, registration,
              participation or collaborations.
            </p>
            <p className="text-[4vw] text-text-ash md:text-[1.5vw] lg:text-[1.4vw] font-Instrument mb-4  xl:mb-10">
              For participants, partners and program inquiries.
            </p>

            <div className="flex flex-col md:flex-row gap-4 mt-2">
              <a
                className="w-full flex items-center gap-2 md:gap-1 xl:gap-4  bg-white text-black text-center border-2 justify-center text-[4vw] md:text-[1.4vw] lg:text-[1.6vw] xl:text-[1.2vw] p-2 px-2 xl:px-8 rounded-lg"
                href=""
              >
                Contact the MOLD Team <RiArrowRightUpLine />
              </a>
            </div>
          </div>
          <div className="basis-8/25 flex flex-col border-2 rounded-xl md:rounded-xl p-3 pt-6  md:p-4 md:pt-6 lg:pt-10">
            <h2 className="text-[7vw]  md:text-[2vw]   font-Oswald font-bold uppercase leading-7 mb-4 xl:mb-8">
              PARTNERSHIPS
            </h2>
            <p className=" text-[4.5vw] md:text-[1.5vw] lg:text-[1.4vw] font-Instrument mb-4 xl:mb-10">
              Have an idea for a meaningful partnership, joint initiative,
              project or collaboration?
            </p>
            <p className="text-[4vw] text-text-ash md:text-[1.5vw] lg:text-[1.4vw] font-Instrument mb-4  xl:mb-10">
              For organizations, brands and potential partners.
            </p>

            <div className="flex flex-col md:flex-row gap-4 mt-2">
              <a
                className="w-full flex items-center gap-2 md:gap-1 xl:gap-4  bg-white text-black text-center border-2 justify-center text-[4vw] md:text-[1.4vw] lg:text-[1.6vw] xl:text-[1.2vw] p-2 px-2 xl:px-8 rounded-lg"
                href=""
              >
                Discuss a Partnership <RiArrowRightUpLine />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaysToConnect;
