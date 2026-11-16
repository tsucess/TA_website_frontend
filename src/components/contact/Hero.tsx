import Header from "../../layout/header/Header";

const Hero = () => {
  return (
    <section className="bg-black bg-[url('/images/other_pages_bg.png')] bg-no-repeat bg-cover bg-center  text-white">
      <Header />
      <div className="flex flex-col md:flex-row font-Oswald py-4 lg:py-18 lg:px-6 ">
        <div className="flex flex-col  p-4 md:px-6 basis-2/3 gap-2">
          <h5 className="text-[4vw] md:text-[1.5vw] mb-2">GET IN TOUCH</h5>
          <h1 className="text-[9.4vw] md:text-[6vw] lg:text-[5vw] font-extrabold uppercase leading-10 md:leading-12 lg:leading-16 xl:leading-20 mb-2">
            Let's start a conversation
          </h1>
          <p className="text-[3.5vw] md:text-[2vw] lg:text-[1.4vw] font-Instrument mb-3 md:mb-6">
            Whether you have a question, an invitation, a partnership idea or simply want to connect, I’ll love to hear from you.
          </p>
        </div>
        <div className=" basis-1/3 "></div>
      </div>
    </section>
  );
};

export default Hero;
