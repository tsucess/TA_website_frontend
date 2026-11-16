const bookInsightData = [
  {
    title: "CLARITY",
    description:
      "Verified Description",
    image_url: "../images/mentoring.png",
  },
  {
    title: "GROWTH",
    description: "Verified Description",
    image_url: "../images/mold_act.png",
  },
  {
    title: "PURPOSE",
    description: "Verified Description",
    image_url: "../images/mentoring.png",
  },
  {
    title: "INTENTIONAL LIVING",
    description: "Verified Description",
    image_url: "../images/mold_act.png",
  },
];

const BookInsightSection = () => {
  return (
    <section className="bg-white text-black p-6 md:px-16 lg:py-11 xl:py-22">
        <div>
          <p className="text-[4vw] md:text-[1.5vw] mb-2 font-Oswald">
            INSIDE EVERY BOOK
          </p>
          <h2 className="text-[8vw] md:text-[3.5vw] xl:text-[4vw] font-Oswald font-bold uppercase leading-9 lg:leading-12 xl:leading-18 mb-4 md:mb-4 ">
            What will you take away?
          </h2>
        </div>
        <div className="flex flex-col md:flex-row md:flex-wrap justify-between gap-4 md:gap-6  mb-8">
          {bookInsightData.map((data, i) => (
            <div key={i} className={`bg-black bg-[url('${data.image_url}')] md:basis-24/49 text-white bg-no-repeat bg-cover bg-center flex flex-col justify-end  h-40 md:h-33 lg:h-48 xl:h-68 rounded-3xl p-4 py-8 md:p-8 mb-0`}>
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
  )
}

export default BookInsightSection