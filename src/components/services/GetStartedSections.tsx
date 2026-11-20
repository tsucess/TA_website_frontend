import { assetUrl } from "../../lib/assets";
const getStartedData = [
  {
    title: "1. Choose a service",
    description:
      "Explore the available options and identify the service that best matches your needs.",
    image_url: assetUrl("../images/mentoring.png"),
  },
  {
    title: "2. Reach out",
    description: "Contact the team by email or phone to explain what you are looking for and ask questions about the service.",
    image_url: assetUrl("../images/mold_act.png"),
  },
  {
    title: "3. Discuss the details",
    description: "Confirm suitability, availability, format, fees and any other arrangements before proceeding.",
    image_url: assetUrl("../images/mentoring.png"),
  },
  {
    title: "4. Agree on next steps",
    description: "If the service is suitable and both parties agree, the team will explain the next steps for scheduling and payment.",
    image_url: assetUrl("../images/mold_act.png"),
  },
];

const GetStartedSections = () => {
  return (
      <section className="bg-white text-black p-6 md:px-16 lg:py-11 xl:py-22">
        <div>
          <p className="text-[4vw] md:text-[1.5vw] mb-2 font-Oswald">
            GETTING STARTED
          </p>
          <h2 className="text-[8vw] md:text-[3.5vw] xl:text-[4vw] font-Oswald font-bold uppercase leading-9 lg:leading-12 xl:leading-18 mb-4 md:mb-4 ">
            Taking the first step can be simple
          </h2>
        </div>
        <div className="flex flex-col md:flex-row md:flex-wrap justify-between gap-4 md:gap-6  mb-8">
          {getStartedData.map((data, i) => (
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
  );
};

export default GetStartedSections;
