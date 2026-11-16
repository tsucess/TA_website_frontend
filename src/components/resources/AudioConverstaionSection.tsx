

const AudioConverstaionSection = () => {
  return (
    <section className="bg-white text-black p-6 md:px-16 lg:py-11 lg:pt-22">
      <div>
        <p className="text-[4vw] md:text-[1.5vw] mb-2">THE EXPERIENCE</p>
        <h2 className="text-[8vw]  md:text-[3.5vw] xl:text-[4vw] font-Oswald font-bold uppercase leading-9 lg:leading-12 xl:leading-18 mb-4 md:mb-6 ">
          More than an event. <br /> A space for transformation.
        </h2>
        <p className="font-Instrument text-[3.6vw] md:text-[1.6vw] mb-6">
          MOLD brings people together around conversations and experiences
          designed to encourage intentional growth.
        </p>
        <p className="font-Instrument text-[3.6vw] md:text-[1.6vw] mb-6">
          Through bootcamps, conversations and focused engagements, participants
          are challenged to think differently, gain clarity, develop capacity
          and take responsibility for the next stage of their journey.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:gap-6  mb-8">
        <div className="text-white bg-[url('/images/mold_learn.png')] bg-no-repeat bg-cover bg-center md:basis-1/2 flex flex-col justify-end w-full h-70 lg:h-100 xl:h-180 rounded-3xl p-4 py-8 md:p-12">
          <h3 className="font-bold font-Oswald text-[5vw] md:text-[2.5vw]">
            LEARN
          </h3>
          <p className="font-Instrument text-[3.6vw] md:text-[1.6vw]">
            Gain perspectives and practical insights.
          </p>
        </div>
        <div className="md:basis-1/2">
          <div className="text-white bg-[url('/images/mold_reflect.png')] bg-no-repeat bg-cover bg-center flex flex-col justify-end w-full h-40 md:h-33 lg:h-48 xl:h-88 rounded-3xl p-4 py-8 md:p-12 mb-4">
            <h3 className="font-bold font-Oswald text-[5vw] md:text-[2.5vw]">
              REFLECT
            </h3>
            <p className="font-Instrument text-[3.6vw] md:text-[1.6vw]">
              Examine where you are and what needs to change.
            </p>
          </div>
          <div className="text-white bg-[url('/images/mold_act.png')] bg-no-repeat bg-cover bg-center  flex flex-col justify-end w-full h-40 md:h-33 lg:h-48 xl:h-88 rounded-3xl p-4 py-8 md:p-12">
            <h3 className="font-bold font-Oswald text-[5vw] md:text-[2.5vw]">
              ACT
            </h3>
            <p className="font-Instrument text-[3.6vw] md:text-[1.6vw]">
              Turn insight into intentional action.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AudioConverstaionSection