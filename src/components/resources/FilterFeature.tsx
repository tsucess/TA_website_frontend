import { assetUrl } from "../../lib/assets";
import { useState } from "react";
import { BsGrid } from "react-icons/bs";
import { CiGrid42 } from "react-icons/ci";
import { FaChevronDown, FaList } from "react-icons/fa";
import { RiArrowRightUpLine } from "react-icons/ri";

interface Filter {
  id: number;
  title: string;
  filterItems: { label: string; value: string }[];
}

const filters: Filter[] = [
  {
    id: 1,
    title: "Categories",
    filterItems: [
      { label: "All", value: "all" },
      { label: "Faith", value: "faith" },
      { label: "Purpose", value: "purpose" },
      { label: "Leadership", value: "leadership" },
      { label: "Family", value: "family" },
      { label: "Relationships", value: "relationships" },
      { label: "Personal Growth", value: "personalgrowth" },
    ],
  },
];

const TeachingsData = [
  {
    title: "Personal Growth. Gaining Clarity.",
    sub_title: "Purpose",
    url: "#",
    image_url: assetUrl("/images/mold_flier.png"),
  },
  {
    title: "Personal Growth. Gaining Clarity.",
    sub_title: "Leadership",
    url: "#",
    image_url: assetUrl("/images/mold_flier_3.png"),
  },
  {
    title: "Personal Growth. Gaining Clarity.",
    sub_title: "Family",
    url: "#",
    image_url: assetUrl("/images/mold_flier.png"),
  },
  {
    title: "MOLD Family Life UK",
    sub_title: "Relationships",
    url: "#",
    image_url: assetUrl("/images/mold_flier_3.png"),
  },
];

const FilterFeature = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFilter = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <section className="flex flex-col md:flex-row gap-2 lg:gap-20 mt-10">
      <div className="basis-4/12 lg:basis-3/12 md:p-4 md:pt-18 bg-bg-ash flex flex-col gap-4">
        <h3 className="text-[4vw] md:text-[1.5vw] tracking-wide font-Oswald mb-4">
          FILTER TEACHINGS
        </h3>
        {filters.map((filter, index) => {
          const isOpen = activeIndex === index;

          return (
            <div
              key={filter.id}
              className="overflow-hidden"
            >
              <button
                type="button"
                onClick={() => toggleFilter(index)}
                aria-expanded={isOpen}
                className={
                  "w-full flex justify-between items-center text-left p-2 md:p-4 text-[4vw] md:text-[2vw] lg:text-[1.2vw] text-black hover:bg-gray-50 transition-colors" +
                  ` ${isOpen ? "bg-white text-black" : ""}
                              `
                }
              >
                <span className="flex items-center gap-2"><CiGrid42 /> {filter.title}</span>

                <span
                  className={`text-xl transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  <FaChevronDown className="text-[4vw] md:text-[2vw] lg:text-[1.2vw]" />
                </span>
              </button>

              {/* Answer */}
              {isOpen && (
                <div className="p-5 flex flex-col text-black pb-5 leading-relaxed text-left text-[4vw] md:text-[2vw] lg:text-[1.2vw]">
                  {filter.filterItems.map((item, k) => (
                    <label htmlFor="fliter" className="flex gap-2" key={k}>
                      <input
                        type="radio"
                        name="filter"
                        value={item.value}
                        id="filter"
                        className="checked:border-black"
                      />
                      {item.label}
                    </label>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="basis-8/12 lg:basis-9/12 flex flex-col gap-4 ">
        <div className="flex flex-col md:flex-row gap-2 xl:gap-6 justify-end items-baseline xl:items-center">
          <div>
            <span>4 </span>Teachings found &nbsp;
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search Teachings"
              className="p-1 border rounded-md lg:ml-2 mt-2 xl:m-1 w-45 lg:w-35 xl:w-60 xl:p-3"
            />
          </div>
          <div className="">
            <span className="">
              Sort by: &nbsp;
              <select
                className="border p-1 px-2 rounded-md mt-2 xl:m-1 xl:p-3 xl:px-6"
                name=""
                id=""
              >
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
              </select>
            </span>
          </div>
          <div className="flex md:flex-col lg:flex-row gap-2 p-2 xl:gap-4">
            <button className="flex gap-2 items-center md:text-[1.8vw] xl:text-[1.2vw] justify-center border p-1 px-3 md:px-4 xl:p-3 xl:px-6 rounded-md">
              <BsGrid /> Grid
            </button>
            <button className="flex gap-2 items-center md:text-[1.8vw] xl:text-[1.2vw] justify-center border p-1 px-3 md:px-4 xl:p-3 xl:px-6 rounded-md">
              <FaList /> List
            </button>
          </div>
        </div>
        <div className="flex flex-wrap ">
          {TeachingsData.map((data, i) => (
            <div className="p-4 md:basis-1/2 mb-2" key={i}>
              <img
                className="w-full"
                src={data.image_url}
                alt="Feature MOLD Flier"
              />
              <p className="font-Oswald tracking-[0.2rem] text-[4vw] md:text-[1.2vw] pt-3 py-1">
                {data.sub_title}
              </p>
              <h3 className="font-bold font-Oswald text-[5vw] md:text-[2.1vw]">
                {data.title}
              </h3>
              <a
                className="md:w-full  flex items-center gap-4 md:gap-1 xl:gap-4  bg-white text-black text-center border-2 justify-center text-sm md:text-[1.4vw] lg:text-[1.6vw] xl:text-[1.2vw] p-3 px-6 md:px-2 xl:px-8 rounded-lg"
                href={data.url}
              >
                Watch Teaching <RiArrowRightUpLine />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FilterFeature;
