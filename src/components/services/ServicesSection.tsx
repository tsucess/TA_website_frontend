import { FaCheckCircle } from "react-icons/fa";

const ServicesData = [
  {
    title: "Faith-Based Family & Marriage Counseling",
    sub_title:
      "For couples and families seeking guidance grounded in their faith and values.",
    header: "SERVICE 01",
    description:
      "Family and marriage relationships can bring both deep joy and difficult challenges. This service provides a space to discuss relationship concerns, strengthen communication and explore constructive ways forward, with faith integrated where appropriate.",
    focus_area: [
      "Communication and understanding",
      "Navigating conflict",
      "Marriage preparation and relationship growth",
      "Family relationships and shared values",
      "Working through challenging seasons together",
    ],
    services_image: "../images/services_1.png",
  },
  {
    title: "Coaching & Mentoring",
    sub_title:
      "For individuals seeking clarity, direction, accountability and personal growth. ",
    header: "SERVICE 02",
    description:
      "Sometimes, moving forward begins with the right questions, an honest conversation and a clearer understanding of what needs to change. Coaching and mentoring offer an opportunity to reflect on your goals, identify challenges and work toward meaningful progress.",
    focus_area: [
      "Personal growth and self-awareness",
      "Purpose and goal setting",
      "Leadership development",
      "Discipline and accountability",
      "Navigating personal or professional transitions",
    ],
    services_image: "../images/services_2.png",
  },
  {
    title: "Therapy",
    sub_title:
      "Professional support for people seeking help with emotional and psychological challenges.",
    header: "SERVICE 03",
    description:
      "Therapy can provide a structured, supportive setting to explore personal difficulties, understand patterns and work toward improved well-being. The appropriate approach depends on the individual's needs and the qualifications and scope of the professional providing the service.",
    focus_area: [
      "Emotional challenges and life transitions",
      "Stress and coping strategies",
      "Understanding recurring patterns",
      "Personal well-being and resilience",
    ],
    services_image: "../images/services_3.png",
  },
];

const ServicesSection = () => {
  return (
    <div className="bg-white gap-8 md:gap-12 xl:gap-14 p-6 pb-18 md:px-16 lg:py-22">
      {ServicesData.map((item, i) => (
        <div
          className="border p-2 md:p-5 xl:p-15 rounded-xl md:rounded-4xl mb-4 md:mb-8"
          key={i}
        >
          <img
            src={item.services_image}
            className="w-full"
            alt="Featured Image for SERVICE 01"
          />
          <div className="flex justify-between my-4">
            <p className="text-[4vw] md:text-[1.5vw] font-Oswald font-semibold  mb-2">
              {item.header}
            </p>
            <span className="bg-black text-[3vw] md:text-[1.2vw] font-Oswald p-2  text-white rounded-md">
              PAID SERVICES
            </span>
          </div>
          <h2 className="text-[7vw]  md:text-[3.2vw]  font-Oswald font-bold uppercase leading-7 lg:leading-12 xl:leading-18 mb-4 md:mb-4 xl:mb-10">
            {item.title}
          </h2>
          <p className="text-justify md:text-left text-[3.5vw] md:text-[1.3vw] lg:text-[1.4vw] font-Instrument mb-3 md:mb-4 xl:mb-10">
            {item.sub_title}
          </p>
          <p className="text-justify md:text-left text-[3.5vw] md:text-[1.3vw] lg:text-[1.4vw] font-Instrument mb-3 md:mb-4 xl:mb-10">
            {item.description}
          </p>
          <p className="text-justify md:text-left text-[3.5vw] md:text-[1.3vw] lg:text-[1.4vw] font-Instrument mb-3 md:mb-2">
            <b>Areas of focus</b>
          </p>
          <ul className="text-justify md:text-left text-[3.5vw] md:text-[1.3vw] lg:text-[1.4vw] font-Instrument mb-3 md:mb-4 xl:mb-10">
            {item.focus_area.map((list, k) => (
              <li className="flex items-center gap-2 mb-2" key={k}>
                <FaCheckCircle /> {list}
              </li>
            ))}
          </ul>
          <div className="flex mt-2">
            <a
              className="w-full bg-black text-white text-center justify-center text-sm lg:text-[1.6vw] p-3 px-6 md:px-8 rounded-lg"
              href="#"
            >
              Make an Inquiry
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesSection;
