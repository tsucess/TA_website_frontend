const MoldPhilosophy = () => {
  return (
    <section className="bg-black text-white p-6 py-18 md:px-16 lg:py-22">
      <div>
        <p className="text-[4vw] md:text-[1.5vw] font-Oswald mb-2">
          THE MOLD PHILOSOPHY
        </p>
        <h2 className="text-[8vw]  md:text-[3.5vw] xl:text-[4vw] font-Oswald font-bold uppercase leading-9 lg:leading-12 xl:leading-18 mb-4 md:mb-10 ">
          Growth becomes powerful <br /> when intention becomes action
        </h2>
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:gap-6  mb-8">
        <div className="bg-[url('/images/faith.png')] bg-no-repeat bg-cover bg-center md:basis-1/2 flex flex-col justify-end w-full h-60 md:h-70 lg:h-100 xl:h-140 rounded-3xl p-4 py-8 md:p-8">
          <h3 className="font-bold font-Oswald uppercase text-[5vw] md:text-[2.5vw]">
            CLARITY
          </h3>
          <p className="font-Instrument text-[3.6vw] md:text-[1.6vw]">
            See clearly. Understand where you are, where you're going and what
            needs to change.
          </p>
        </div>
        <div className="bg-[url('/images/purpose.png')] bg-no-repeat bg-cover bg-center md:basis-1/2 flex flex-col justify-end w-full h-60 md:h-70 lg:h-100 xl:h-140 rounded-3xl p-4 py-8 md:p-8">
          <h3 className="font-bold font-Oswald text-[5vw] md:text-[2.5vw]">
            DISCIPLINE
          </h3>
          <p className="font-Instrument text-[3.6vw] md:text-[1.6vw]">
            Build the structures and habits required to consistently move
            forward.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 mb-8">
        <div className="bg-[url('/images/leadership.png')] bg-no-repeat bg-cover bg-center md:basis-1/2 flex flex-col justify-end w-full h-60 md:h-70 lg:h-100 xl:h-140 rounded-3xl p-4 py-8 md:p-8">
          <h3 className="font-bold font-Oswald text-[5vw] md:text-[2.5vw]">
            ACCOUNTABILITY
          </h3>
          <p className="font-Instrument text-[3.6vw] md:text-[1.6vw]">
            Take responsibility for your growth and surround yourself with
            people who challenge you to follow through.
          </p>
        </div>
        <div className="bg-[url('/images/impact.png')] bg-no-repeat bg-cover bg-center md:basis-1/2 flex flex-col justify-end w-full h-60 md:h-70 lg:h-100 xl:h-140 rounded-3xl p-4 py-8 md:p-8">
          <h3 className="font-bold font-Oswald text-[5vw] md:text-[2.5vw]">
            RESULTS
          </h3>
          <p className="font-Instrument text-[3.6vw] md:text-[1.6vw]">
            Turn intention into action and action into measurable progress.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MoldPhilosophy;
