

const ServicesSection = () => {
  return (
    <div className="bg-white text-black p-6 md:px-16 lg:py-11 lg:pt-22">
      <div>
        <p className="text-[4vw] md:text-[1.5vw] mb-2">SERVICES</p>
        <h2 className="text-[8vw]  md:text-[3.5vw] xl:text-[4vw] font-Oswald font-bold uppercase leading-9 lg:leading-12 xl:leading-18 mb-4 md:mb-4 ">
          More than an event. <br /> A journey of becoming.
        </h2>
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:gap-6  mb-8">
        <div className="text-white bg-[url('/images/family.png')] bg-no-repeat bg-cover bg-center md:basis-1/2 flex flex-col justify-end w-full h-70 lg:h-100 xl:h-140 rounded-3xl p-4 py-8 md:p-8">
          <h3 className="font-bold font-Oswald text-[5vw] md:text-[2.5vw]">
            Faith-Based Family & <br /> Marriage Counseling
          </h3>
          <p className="font-Instrument text-[3.6vw] md:text-[1.6vw]">
            Developing the capacity to lead ourselves, others and the things
            entrusted to us.
          </p>
        </div>
        <div className="md:basis-1/2">
          <div className="text-white bg-[url('/images/mentoring.png')] bg-no-repeat bg-cover bg-center flex flex-col justify-end w-full h-40 md:h-33 lg:h-48 xl:h-68 rounded-3xl p-4 py-8 md:p-8 mb-4">
            <h3 className="font-bold font-Oswald text-[5vw] md:text-[2.5vw]">
              Coaching & Mentoring
            </h3>
            <p className="font-Instrument text-[3.6vw] md:text-[1.6vw]">
              Developing the capacity to lead ourselves, others and the things
              entrusted to us.
            </p>
          </div>
          <div className="text-white bg-[url('/images/therapy.png')] bg-no-repeat bg-cover bg-center  flex flex-col justify-end w-full h-40 md:h-33 lg:h-48 xl:h-68 rounded-3xl p-4 py-8 md:p-8">
            <h3 className="font-bold font-Oswald text-[5vw] md:text-[2.5vw]">
              Therapy
            </h3>
            <p className="font-Instrument text-[3.6vw] md:text-[1.6vw]">
              Developing the capacity to lead ourselves, others and the things
              entrusted to us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
