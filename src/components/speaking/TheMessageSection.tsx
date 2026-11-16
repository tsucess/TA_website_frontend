
const TheMessageSection = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row bg-white gap-8 md:gap-12 xl:gap-14 p-6 py-18 md:px-16 lg:py-22">
      <div className="basis-1/2 flex flex-col justify-end">
        <p className="text-[4vw] md:text-[1.5vw] font-Oswald font-semibold  mb-2">
          THE MESSAGE
        </p>
        <h2 className="text-[7vw]  md:text-[3.2vw]  font-Oswald font-bold uppercase leading-7 lg:leading-12 xl:leading-14 mb-4 md:mb-4 xl:mb-8">
          More than a speech
          <br />A meaningful conversation
        </h2>
        <p className="text-justify md:text-left text-[3.5vw] md:text-[1.3vw] lg:text-[1.4vw] font-Instrument mb-3 md:mb-4 xl:mb-8">
          Pastor Tunde's speaking engagements are centered on practical
          conversations that challenge people to think differently, grow
          intentionally and apply what they learn.
        </p>
        <p className="text-justify md:text-left text-[3.5vw] md:text-[1.3vw] lg:text-[1.4vw] font-Instrument mb-3 md:mb-2 xl:mb-8">
          Whether speaking to a church community, leadership team, organization,
          conference audience or gathering of young people, each engagement is
          shaped around the audience, context and purpose of the event.
        </p>
      </div>
      <div className="basis-1/2 flex justify-center">
        <img src="../images/TA_mold_photo.png" alt="Pst. Tunde Adisa Photo" />
      </div>
    </section>
  );
};

export default TheMessageSection;
