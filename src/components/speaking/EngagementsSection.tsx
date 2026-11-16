const engagementsData = [
  {
    title: "KEYNOTE SPEAKING",
    description:
      "For conferences, summits and large gatherings. Typical focus: Leadership, Growth, Purpose, Faith and Intentional living",
  },
  {
    title: "PANEL CONVERSATIONS",
    description:
      "Participating in meaningful conversations alongside other leaders, experts or practitioners. Typical focus: Leadership, Family, Faith, Society and Personal development",
  },
  {
    title: "WORKSHOPS & MASTERCLASSES",
    description:
      "More practical and interactive sessions designed around learning and application. Typical focus: Personal growth, Leadership, Purpose, Accountability and Team development",
  },
  {
    title: "FIRESIDE CONVERSATIONS",
    description:
      "Smaller, more intimate conversations that allow deeper engagement with the audience.",
  },
  {
    title: "CHURCH & MINISTRY ENGAGEMENTS",
    description:
      "Speaking engagements for churches, Christian organizations, conferences and ministry gatherings.",
  },
  {
    title: "CORPORATE & ORGANIZATIONAL SESSIONS",
    description:
      "Leadership, personal development and purpose-driven conversations for organizations and teams.",
  },
];

const EngagementsSection = () => {
  return (
    <section className="bg-white text-black p-6 md:px-16 lg:py-11 lg:pt-22">
      <div>
        <p className="text-[4vw] md:text-[1.5vw] mb-2">ENGAGEMENTS</p>
        <h2 className="text-[7.6vw]  md:text-[3.5vw] xl:text-[4vw] font-Oswald font-bold uppercase leading-9 lg:leading-12 xl:leading-18 mb-4 md:mb-6 ">
          Different rooms <br /> One message
        </h2>
      </div>
      <div className="flex flex-col gap-4 md:gap-6  mb-8">
        {engagementsData.map((data, i) => (
          <div
            key={i}
            className="text-white flex flex-col md:flex-row gap-10 items-center w-full bg-black rounded-3xl p-4 py-8 md:p-12"
          >
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
    </section>
  );
};

export default EngagementsSection;
