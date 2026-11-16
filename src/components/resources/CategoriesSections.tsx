import { BiSolidBriefcaseAlt } from "react-icons/bi";
import { CiWavePulse1 } from "react-icons/ci";
import { FiBookOpen, FiUser, FiUsers } from "react-icons/fi";
import { GiFamilyHouse } from "react-icons/gi";
import { RiArrowRightUpLine } from "react-icons/ri";

interface catData {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

const categoryData: catData[] = [
  {
    id: "01 .",
    title: "Faith",
    description:
      "Teaching and reflections that help you deepen your relationship with God and live out your faith.",
    icon: "book",
    color: "green",
  },
  {
    id: "02 .",
    title: "Purpose & Personal growth",
    description:
      "Teaching and reflections that help you deepen your relationship with God and live out your faith.",
    icon: "user",
    color: "blue",
  },
  {
    id: "03 .",
    title: "Leadership",
    description:
      "Teaching and reflections that help you deepen your relationship with God and live out your faith.",
    icon: "users",
    color: "lilac",
  },
  {
    id: "04 .",
    title: "Family & relationships",
    description:
      "Teaching and reflections that help you deepen your relationship with God and live out your faith.",
    icon: "family",
    color: "yellow",
  },
  {
    id: "05 .",
    title: "Business & Marketplace",
    description:
      "Teaching and reflections that help you deepen your relationship with God and live out your faith.",
    icon: "market",
    color: "lightgreen",
  },
  {
    id: "06 .",
    title: "Life & Wisdom",
    description:
      "Teaching and reflections that help you deepen your relationship with God and live out your faith.",
    icon: "life",
    color: "red",
  },
];

const CategoriesSections = () => {
  return (
    <section>
      <div className="p-2 md:pl-14">
        <div className="flex flex-col-reverse md:flex-row bg-white gap-8 md:gap-6 xl:gap-0 ">
          <div className="basis-3/7">
            <p className="text-[4vw] md:text-[1.5vw] font-Oswald font-semibold mb-4">
              Resource Categories
            </p>
            <h2 className="text-[7vw]  md:text-[3.2vw]  font-Oswald font-bold uppercase leading-7 lg:leading-12 xl:leading-18 mb-2">
              Explore resources by category
            </h2>
            <p className="text-justify md:text-left text-[3.5vw] md:text-[1.3vw] lg:text-[1.4vw] font-Instrument mb-3 md:mb-4 xl:mb-10">
              Explore practical teachinging designed to deepen your
              understanding and strengthen your everyday walk
            </p>
          </div>
          <div className="basis-2/7 hidden md:block "></div>
          <div className=" hidden md:block bg-[url('../images/books.png')] bg-no-repeat bg-right bg-contain basis-2/7 xl:h-[30vh]"></div>
        </div>
      </div>
      <div className="p-6 py- lg:px-16 lg:pb-22">
        <div className="flex flex-col gap-4 md:gap-2 md:flex-row flex-wrap bg-white  ">
          {categoryData.map((item, i) => (
            <div
              className="basis-8/25 flex flex-col border rounded-xl md:rounded-3xl p-3 md:p-4 lg:p-6"
              key={i}
            >
              <div className="flex gap-2 mb-4 w-">
                <span className={`p-4 rounded-2xl text-[8vw] md:text-[3vw] bg-icon-bg-${item.color} flex justify-center items-center`}>
                  {item.icon === "book" ? (
                    <FiBookOpen className={`text-icon-${item.color}`} />
                  ) : item.icon === "user" ? (
                    <FiUser className={`text-icon-${item.color}`} />
                  ) : item.icon === "users" ? (
                    <FiUsers className={`text-icon-${item.color}`} />
                  ) : item.icon === "family" ? (
                    <GiFamilyHouse className={`text-icon-${item.color}`} />
                  ) : item.icon === "market" ? (
                    <BiSolidBriefcaseAlt className={`text-icon-${item.color}`} />
                  ) : item.icon === "life" ? (
                    <CiWavePulse1 className={`text-icon-${item.color}`} />
                  ) : null}
                </span>
                <span className="flex flex-col gap-2 justify-center p-1">
                  <p className={`text-icon-${item.color} text-[4vw] md:text-[1.6vw] lg:text-[1.6vw] font-Oswald font-semibold`}>
                    {item.id}
                  </p>
                  <h2 className="text-[4vw]  md:text-[1.4vw]  font-Oswald font-bold uppercase leading-7">
                    {item.title}
                  </h2>
                </span>
              </div>
              <p className="text-justify md:text-left text-[3.5vw] md:text-[1.3vw] lg:text-[1.4vw] font-Instrument mb-3 md:mb-4 xl:mb-10">
                {item.description}
              </p>

              <div className="flex flex-col md:flex-row gap-4 mt-2">
                <a
                  className="w-full flex items-center gap-2 md:gap-1 xl:gap-4  bg-white text-black text-center border-2 justify-center text-[4vw] md:text-[1.4vw] lg:text-[1.6vw] xl:text-[1.2vw] p-2 px-2 xl:px-8 rounded-lg"
                  href=""
                >
                  Explore {item.title} <RiArrowRightUpLine />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSections;
