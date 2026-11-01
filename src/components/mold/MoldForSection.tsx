const MoldForData = [
  {
    title: "THE PROFESSIONAL",
    description:
      "For people navigating career growth, transitions and greater responsibility. For people navigating career growth, transitions and greater responsibility. For people navigating career growth, transitions and greater responsibility. For people navigating career growth, transitions and greater responsibility.",
  },
  {
    title: "THE ENTREPRENEUR",
    description:
      "For people navigating career growth, transitions and greater responsibility. For people navigating career growth, transitions and greater responsibility. For people navigating career growth, transitions and greater responsibility. For people navigating career growth, transitions and greater responsibility.",
  },
  {
    title: "THE LEADER",
    description:
      "For people navigating career growth, transitions and greater responsibility. For people navigating career growth, transitions and greater responsibility. For people navigating career growth, transitions and greater responsibility. For people navigating career growth, transitions and greater responsibility.",
  },
  {
    title: "THE GROWING PERSON",
    description:
      "For people navigating career growth, transitions and greater responsibility. For people navigating career growth, transitions and greater responsibility. For people navigating career growth, transitions and greater responsibility. For people navigating career growth, transitions and greater responsibility.",
  },
  {
    title: "THE FAMILY BUILDER",
    description:
      "For people navigating career growth, transitions and greater responsibility. For people navigating career growth, transitions and greater responsibility. For people navigating career growth, transitions and greater responsibility. For people navigating career growth, transitions and greater responsibility.",
  },
];

const MoldForSection = () => {
  return (
    <div className="bg-white text-black p-6 md:px-16 lg:py-11 lg:pt-22">
      <div>
        <p className="text-[4vw] md:text-[1.5vw] mb-2">WHO IS MOLD FOR?</p>
        <h2 className="text-[7.6vw]  md:text-[3.5vw] xl:text-[4vw] font-Oswald font-bold uppercase leading-9 lg:leading-12 xl:leading-18 mb-4 md:mb-6 ">
          MOLD is for people who <br />
          know there is more.
        </h2>
        <p className="font-Instrument text-[3.6vw] md:text-[1.6vw] mb-6">
          You don't have to have everything figured out to begin. MOLD is
          designed for people who are willing to examine where they are, embrace
          growth and intentionally build what comes next.
        </p>
      </div>
      <div className="flex flex-col gap-4 md:gap-6  mb-8">
        {MoldForData.map((data, i) => (
          <div key={i} className="text-white flex flex-col md:flex-row gap-10 items-center w-full bg-black rounded-3xl p-4 py-8 md:p-12">
            <div className="basis-2/6">
              <h3 className="font-bold font-Oswald text-[5vw] md:text-[2.5vw]">
                {data.title}
              </h3>
            </div>
            <div className="basis-5/6">
              <p className="font-Instrument text-[3.6vw] md:text-[1.6vw]">
                {data.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoldForSection;
