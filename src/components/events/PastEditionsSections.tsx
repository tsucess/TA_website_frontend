

const PastEventsData = [
  {
    title: "Personal Growth. Gaining Clarity.",
    sub_title: "MOLD BOOTCAMP 1.0",
    description:
      "MOLD Bootcamp 2.0 brought participants together around personal growth, clarity, purpose and intentional action, with Pastor Tunde Adisa and Dr. Sam Adeyemi among the featured voices.",
    image_url: "/images/mold_flier.png",
  },
  {
    title: "Personal Growth. Gaining Clarity.",
    sub_title: "MOLD BOOTCAMP 2.0",
    description:
      "MOLD Bootcamp 2.0 brought participants together around personal growth, clarity, purpose and intentional action, with Pastor Tunde Adisa and Dr. Sam Adeyemi among the featured voices.",
    image_url: "/images/mold_flier_2.png",
  },
  {
    title: "MOLD Family Life UK",
    sub_title: "MOLD BOOTCAMP 3.0",
    description:
      "The publicly listed UK Family Life session was free with registration required and was aimed at parents, couples, singles preparing for family life, and others interested in building stronger homes.",
    image_url: "/images/mold_flier_3.png",
  },
];

const PastEditionsSections = () => {
  return (
    <div className="bg-white text-black p-6 md:px-16 lg:py-11 lg:pt-22">
      <div>
        <p className="text-[4vw] md:text-[1.5vw] mb-2">PAST EVENTS</p>
        <h2 className="text-[8vw]  md:text-[3.5vw] xl:text-[4vw] font-Oswald font-bold uppercase leading-9 lg:leading-12 xl:leading-18">
          Where we've been
        </h2>
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:gap-6  mb-8">
        {PastEventsData.map((data, i) => (
          <div className="basis-1/3" key={i}>
            <img
              className="w-full"
              src={data.image_url}
              alt="Feature MOLD Flier"
            />
            <p className="font-Oswald space-x-3 tracking-[0.5rem] text-[4vw] md:text-[1vw] pt-3 py-2">
              {data.sub_title}
            </p>
            <h3 className="font-bold font-Oswald text-[5vw] md:text-[2.1vw]">
              {data.title}
            </h3>
            <p className="text-justify md:text-left text-[3.5vw] md:text-[1.3vw] lg:text-[1.1vw] font-Instrument mb-3 md:mb-4">
              {data.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PastEditionsSections;
