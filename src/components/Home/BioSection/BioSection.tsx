import React from "react";

const BioSection = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row bg-white gap-8 md:gap-12 xl:gap-14 p-6 py-18 md:px-16 lg:py-22">
      <div className="basis-1/2 flex flex-col justify-end">
        <p className="text-[4vw] md:text-[1.5vw] mb-2">MEET TUNDE ADISA</p>
        <h2 className="text-[8vw]  md:text-[3.5vw] xl:text-[4vw] font-Oswald font-bold uppercase leading-9 lg:leading-12 xl:leading-18 mb-4 md:mb-4 ">A life committed to helping people become</h2>
        <p className="text-justify md:text-left text-[3.5vw] md:text-[1.3vw] lg:text-[1.4vw] font-Instrument mb-3 md:mb-4">
          Tunde Adisa is a seasoned life coach, pastor and mentor with a deep
          passion for helping people unlock their God-given potential and live
          extraordinary lives. With over 15 years of experience in family life
          coaching, leadership development and personal growth mentoring, he has
          impacted more than 600 families and dedicated hundreds of mentoring
          and coaching hours to guiding individuals toward purpose, balance and
          fulfillment.
        </p>
        <p className="text-justify md:text-left text-[3.5vw] md:text-[1.3vw] lg:text-[1.4vw] font-Instrument mb-3 md:mb-6">
          As the Lead Pastor of WhiteOlive Christian Assembly, a thriving church
          based in Yaba, Lagos, Nigeria, Tunde is known for his practical, faith
          based teachings that empower people to rise above mediocrity and walk
          in the fullness of their divine identity. Every Sunday, he teaches
          principles that inspire transformation, helping believers live the
          extraordinary life God designed for them.
        </p>
      </div>
      <div className="basis-1/2 flex justify-center">
        <img src="../images/Bio_Tunde.png" alt="Pst. Tunde Adisa Photo" />
      </div>
    </div>
  );
};

export default BioSection;
