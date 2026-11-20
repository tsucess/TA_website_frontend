import { assetUrl } from "../../lib/assets";
import { RiArrowRightUpLine } from "react-icons/ri";

const experienceData = [
  {
    title: "RELEVANT",
    description:
      "The conversation connects with the realities of the audience.",
    image_url: assetUrl("../images/mentoring.png"),
  },
  {
    title: "PRACTICAL",
    description:
      "Ideas are connected to real-life application.",
    image_url: assetUrl("../images/mold_act.png"),
  },
  {
    title: "THOUGHT-PROVOKING",
    description:
      "The goal is not simply to inform, but to encourage reflection.",
    image_url: assetUrl("../images/mentoring.png"),
  },
  {
    title: "ACTION-ORIENTED",
    description:
      "The conversation should leave people with something to think about and act on.",
    image_url: assetUrl("../images/mold_act.png"),
  },
];

const ExperienceSection = () => {
  return (
    <section className="bg-white text-black p-6 md:px-16 lg:py-11 xl:py-22">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-[4vw] md:text-[1.5vw] mb-2 font-Oswald">
            THE EXPERIENCE
          </p>
          <h2 className="text-[8vw] md:text-[3.5vw] xl:text-[4vw] font-Oswald font-bold uppercase leading-9 lg:leading-12 xl:leading-18 mb-4 md:mb-4 ">
            A message designed to <br />
            move beyond the room.
          </h2>
        </div>
        <div>
          <a
            className="md:w-[22vw]  flex items-center gap-4 md:gap-1 xl:gap-4  bg-white text-black text-center border-2 justify-center text-sm md:text-[1.4vw] lg:text-[1.6vw] xl:text-[1.2vw] p-3 px-6 md:px-2 xl:px-8 rounded-lg"
            href="/speaking#inviteForm"
          >
            Invite Tunde Adisa <RiArrowRightUpLine />
          </a>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:flex-wrap justify-between gap-4 md:gap-6  mb-8">
        {experienceData.map((data, i) => (
          <div
            key={i}
            className={`bg-black bg-[url('${data.image_url}')] md:basis-24/49 text-white bg-no-repeat bg-cover bg-center flex flex-col justify-end  h-40 md:h-33 lg:h-48 xl:h-68 rounded-3xl p-4 py-8 md:p-8 mb-0`}
          >
            <h3 className="font-bold font-Oswald text-[5vw] md:text-[2.5vw] mb-2">
              {data.title}
            </h3>
            <p className="font-Instrument text-[3.6vw] md:text-[1.6vw] lg:text-[1.3vw]">
              {data.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
