import { RiArrowRightUpLine } from "react-icons/ri";

const TopicsSection = () => {
  return (
    <section className="bg-black text-white p-6 py-18 md:px-16 lg:py-22">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-[4vw] md:text-[1.5vw] font-Oswald mb-2">
            AREAS OF SPEAKING
          </p>
          <h2 className="text-[8vw]  md:text-[3.5vw] xl:text-[4vw] font-Oswald font-bold uppercase leading-9 lg:leading-12 xl:leading-18 mb-4 md:mb-10 ">
            Topics that matter.
          </h2>
          <p className="text-[4vw] md:text-[1.5vw] font-Instrument mb-2">
            Explore some of the areas Pastor Tunde speaks about.
          </p>
        </div>
        <div>
          <a
            className="md:w-[22vw]  flex items-center gap-4 md:gap-1 xl:gap-4   text-white text-center border-2 justify-center text-sm md:text-[1.4vw] lg:text-[1.6vw] xl:text-[1.2vw] p-3 px-6 md:px-2 xl:px-8 rounded-lg"
            href="/speaking#inviteForm"
          >
            Invite Tunde Adisa <RiArrowRightUpLine />
          </a>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:gap-6  mb-8">
        <div className="bg-[url('/images/faith.png')] bg-no-repeat bg-cover bg-center md:basis-1/2 flex flex-col justify-end w-full h-60 md:h-70 lg:h-100 xl:h-140 rounded-3xl p-4 py-8 md:p-8">
          <h3 className="font-bold font-Oswald uppercase text-[5vw] md:text-[2.5vw]">
            Faith & Spiritual Growth
          </h3>
          <p className="font-Instrument text-[3.6vw] md:text-[1.6vw]">
            Conversations around faith, spiritual maturity, biblical principles
            and living intentionally as a believer.
          </p>
        </div>
        <div className="bg-[url('/images/purpose.png')] bg-no-repeat bg-cover bg-center md:basis-1/2 flex flex-col justify-end w-full h-60 md:h-70 lg:h-100 xl:h-140 rounded-3xl p-4 py-8 md:p-8">
          <h3 className="font-bold font-Oswald uppercase text-[5vw] md:text-[2.5vw]">
            Purpose & Personal Growth
          </h3>
          <p className="font-Instrument text-[3.6vw] md:text-[1.6vw]">
            Helping people develop clarity, intentionality and a commitment to
            continuous personal growth.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 mb-8">
        <div className="bg-[url('/images/leadership.png')] bg-no-repeat bg-cover bg-center md:basis-1/2 flex flex-col justify-end w-full h-60 md:h-70 lg:h-100 xl:h-140 rounded-3xl p-4 py-8 md:p-8">
          <h3 className="font-bold font-Oswald text-[5vw] md:text-[2.5vw]">
            Leadership
          </h3>
          <p className="font-Instrument text-[3.6vw] md:text-[1.6vw]">
            Practical conversations about leadership, responsibility, influence,
            character and leading people effectively.
          </p>
        </div>
        <div className="bg-[url('/images/impact.png')] bg-no-repeat bg-cover bg-center md:basis-1/2 flex flex-col justify-end w-full h-60 md:h-70 lg:h-100 xl:h-140 rounded-3xl p-4 py-8 md:p-8">
          <h3 className="font-bold font-Oswald text-[5vw] md:text-[2.5vw]">
            Family & Relationships
          </h3>
          <p className="font-Instrument text-[3.6vw] md:text-[1.6vw]">
            Conversations around building healthy relationships, strong
            families, communication, values and intentional family life.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 mb-8">
        <div className="bg-[url('/images/leadership.png')] bg-no-repeat bg-cover bg-center md:basis-1/2 flex flex-col justify-end w-full h-60 md:h-70 lg:h-100 xl:h-140 rounded-3xl p-4 py-8 md:p-8">
          <h3 className="font-bold font-Oswald text-[5vw] md:text-[2.5vw]">
            Intentional Living
          </h3>
          <p className="font-Instrument text-[3.6vw] md:text-[1.6vw]">
            Helping people move beyond simply knowing what matters to actually
            living it out.
          </p>
        </div>
        <div className="bg-[url('/images/impact.png')] bg-no-repeat bg-cover bg-center md:basis-1/2 flex flex-col justify-end w-full h-60 md:h-70 lg:h-100 xl:h-140 rounded-3xl p-4 py-8 md:p-8">
          <h3 className="font-bold font-Oswald text-[5vw] md:text-[2.5vw]">
            Personal Development
          </h3>
          <p className="font-Instrument text-[3.6vw] md:text-[1.6vw]">
            Conversations around discipline, self-awareness, growth,
            accountability and becoming the person you are capable of becoming.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TopicsSection;
