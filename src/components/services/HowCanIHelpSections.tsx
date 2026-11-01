const HowCanIHelpSections = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row bg-white gap-8 md:gap-12 xl:gap-14 p-6 py-18 md:px-16 lg:py-22">
      <div className="basis-1/2 flex flex-col justify-end">
        <p className="text-[4vw] md:text-[1.5vw] mb-2">HOW i CAN HELP</p>
        <h2 className="text-[8vw]  md:text-[3.5vw] xl:text-[3.5vw] font-Oswald font-bold uppercase leading-9 lg:leading-12 xl:leading-18 mb-4 md:mb-4 ">
          Every season of life comes <br /> with its own questions
        </h2>
        <p className="text-justify md:text-left text-[3.5vw] md:text-[1.3vw] lg:text-[1.4vw] font-Instrument mb-3 md:mb-4">
          Some seasons call for guidance. Others require honest conversations,
          intentional growth or professional support. These services provide
          opportunities to explore challenges, gain perspective and identify
          practical next steps in a supportive setting.
          Choose the service that
          best reflects your needs, then contact the team to discuss the
          available options.
        </p>
      </div>
      <div className="basis-1/2 flex justify-center">
        <img src="../images/Bio_Tunde.png" alt="Pst. Tunde Adisa Photo" />
      </div>
    </div>
  );
};

export default HowCanIHelpSections;
