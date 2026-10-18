import React from "react";

const BelieveSection = () => {
  return (
    <div className="bg-black text-white p-6 py-18 md:px-16 lg:py-22">
      <div>
        <p className="text-[4vw] md:text-[1.5vw] mb-2">WHAT HE IS ABOUT</p>
        <h2 className="text-[8vw]  md:text-[3.5vw] xl:text-[4vw] font-Oswald font-bold uppercase leading-9 lg:leading-12 xl:leading-18 mb-4 md:mb-4 ">
          What I believe <br /> shapes how I lead
        </h2>
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:gap-6  mb-8">
        <div className="bg-[url('/images/faith.png')] bg-no-repeat bg-cover bg-center md:basis-1/2 flex flex-col justify-end w-full h-60 md:h-70 lg:h-100 xl:h-140 rounded-3xl p-4 py-8 md:p-8">
          <h3 className="font-bold font-Oswald text-[5vw] md:text-[2.5vw]">FAITH</h3>
          <p className="font-Instrument text-[3.6vw] md:text-[1.6vw]">
            A life anchored in God and guided by purpose.
          </p>
        </div>
        <div className="bg-[url('/images/purpose.png')] bg-no-repeat bg-cover bg-center md:basis-1/2 flex flex-col justify-end w-full h-60 md:h-70 lg:h-100 xl:h-140 rounded-3xl p-4 py-8 md:p-8">
          <h3 className="font-bold font-Oswald text-[5vw] md:text-[2.5vw]">PURPOSE</h3>
          <p className="font-Instrument text-[3.6vw] md:text-[1.6vw]">
            Helping people understand who they are and what they have been
            called to do.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 ">
        <div className="bg-[url('/images/leadership.png')] bg-no-repeat bg-cover bg-center md:basis-1/2 flex flex-col justify-end w-full h-60 md:h-70 lg:h-100 xl:h-140 rounded-3xl p-4 py-8 md:p-8">
          <h3 className="font-bold font-Oswald text-[5vw] md:text-[2.5vw]">LEADERSHIP</h3>
          <p className="font-Instrument text-[3.6vw] md:text-[1.6vw]">
            Developing the capacity to lead ourselves, others and the things
            entrusted to us.
          </p>
        </div>
        <div className="bg-[url('/images/impact.png')] bg-no-repeat bg-cover bg-center md:basis-1/2 flex flex-col justify-end w-full h-60 md:h-70 lg:h-100 xl:h-140 rounded-3xl p-4 py-8 md:p-8">
          <h3 className="font-bold font-Oswald text-[5vw] md:text-[2.5vw]">IMPACT</h3>
          <p className="font-Instrument text-[3.6vw] md:text-[1.6vw]">
            Turning knowledge, growth and influence into meaningful impact.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BelieveSection;
