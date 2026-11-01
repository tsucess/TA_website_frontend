const ProfessionalData = [
  {
    date: "19 Jul 1961",
    title: "Born in Onitsha",
    description:
      "Peter Gregory Obi is born in Onitsha, the sixth child of Josephat and Agnes Obi, traders from Agulu in Anaocha who had settled in the market city before the war.",
    lineEffect: "/images/effects/separator_1.png",
  },
  {
    date: "1968",
    title: "His father dies during the war",
    description:
      "Josephat Obi, who had built the Ideal Soul Super Market in Onitsha, dies in 1968 while Peter is a small boy. The civil war wipes out the family business. His mother Agnes rebuilds from nothing, opening a domestic training centre and the Nado restaurant on Modebe Avenue.",
    lineEffect: "/images/effects/separator_2.png",
  },
  {
    date: "1973 to 1978",
    title: "Christ the King College, Onitsha",
    description:
      "After primary school he enters Christ the King College. He uses his school fees as trading capital before paying them, buys eggs from farms in Agbor and sells them near the school gate, and finishes his West African School Certificate in 1978.",
    lineEffect: "/images/effects/separator_3.png",
  },
];

const ProfessionalSection = () => {
  return (
     <div className="flex flex-col md:flex-row p-6 py-12 md:px-16 bg-black text-white">
      <div className="basis-2/6 ">
        <h2 className="text-[8vw]  md:text-[3.5vw] xl:text-[4vw] font-Oswald font-bold uppercase leading-9 lg:leading-12 xl:leading-18 mb-8 md:mb-4 ">
          PROFESSIONAL JOURNEY
        </h2>
      </div>
      <div className="basis-4/6 ">
        {ProfessionalData.map((data, i) => (
          <div className="flex md:p-2 gap-2" key={i}>
            <div className="basis-1/5 font-Oswald text-text-ash text-[3.2vw] md:text-[1.8vw]">
              {data.date}
            </div>
            <div className="basis-4/5">
              <h3 className="font-bold font-Oswald text-[5vw] md:text-[2.5vw] mb-2">
                {data.title}
              </h3>
              <p className="text-justify md:text-left text-[3.5vw] md:text-[1.3vw] lg:text-[1.2vw] font-Instrument mb-2 md:mb-4">
                {data.description}
              </p>
              <img src={data.lineEffect} alt="Line_effect" className="mb-4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProfessionalSection