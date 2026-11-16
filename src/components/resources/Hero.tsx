import Header from "../../layout/header/Header";

const Hero = () => {
  return (
    <section className="bg-black bg-[url('/images/other_pages_bg.png')] bg-no-repeat bg-cover bg-center  text-white">
      <Header />
      <div className="flex flex-col md:flex-row font-Oswald py-4 lg:py-18 lg:px-6 ">
        <div className="flex flex-col  p-4 md:px-6 basis-2/3 gap-2">
          <h5 className="text-[4vw] md:text-[1.5vw] mb-2">RESOURCES</h5>
          <h1 className="text-[9.4vw] md:text-[6vw] lg:text-[5vw] font-extrabold uppercase leading-10 md:leading-12 lg:leading-16 xl:leading-20 mb-2">
            Grow in knowledge <br /> Live with purpose
          </h1>
          <p className="text-[3.5vw] md:text-[2vw] lg:text-[1.7vw] font-Instrument mb-3 md:mb-6">
            Explore teachings, conversations, articles, practical insights and
            resources created to help you grow in faith, leadership,
            relationships and everyday life.
          </p>
          <div className="flex gap-4">
            <a
              className="w-50 lg:w-60 xl:w-80 bg-white text-center justify-center text-sm lg:text-[1.8vw] text-black p-2 md:px-6 lg:p-3 rounded-md"
              href="#"
            >
              View Upcoming Events
            </a>
          </div>
        </div>
        <div className=" basis-1/3 "></div>
      </div>
    </section>
  );
};

export default Hero;
