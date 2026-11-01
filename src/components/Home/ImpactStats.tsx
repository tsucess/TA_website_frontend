import React from 'react'

const ImpactStats = () => {
  return (
    <div className="bg-text-dark flex flex-col md:flex-row text-white p-6 md:p-8">
        <div className="basis-1/4 p-4 border-b px-[10vw] md:p-0 md:pl-8 lg:pl-10 xl:pl-16  md:border-b-0">
            <h2 className="font-Oswald text-[8vw] md:text-[1.8vw] font-bold">600+</h2>
            <p className=" uppercase font-Instrument text-[4vw] md:text-[1.2vw] lg:text-[1vw] xl:text-[0.8vw]">Families impacted</p>
        </div>
        <div className="basis-1/4 p-4 border-b px-[10vw] md:p-0 md:pl-8 lg:pl-10 xl:pl-16 md:border-l md:border-b-0">
            <h2 className="font-Oswald text-[8vw] md:text-[1.8vw] font-bold">15 Years</h2>
            <p className=" uppercase font-Instrument text-[4vw] md:text-[1.2vw] lg:text-[1vw] xl:text-[0.8vw]">Experience</p>
        </div>
        <div className="basis-1/4 p-4 border-b px-[10vw] md:p-0 md:pl-8 lg:pl-10 xl:pl-16  md:border-l md:border-b-0">
            <h2 className="font-Oswald text-[8vw] md:text-[1.8vw] font-bold">Over 100hr</h2>
            <p className=" uppercase font-Instrument text-[4vw] md:text-[1.2vw] lg:text-[1vw] xl:text-[0.8vw]">Mentoring and Coaching hours</p>
        </div>
        <div className="basis-1/4 p-4 border-b px-[10vw] md:p-0 md:pl-8 lg:pl-10 xl:pl-16  md:border-l md:border-b-0">
            <h2 className="font-Oswald text-[8vw] md:text-[1.8vw] font-bold">12</h2>
            <p className=" uppercase font-Instrument text-[4vw] md:text-[1.2vw] lg:text-[1vw] xl:text-[0.8vw]">DEVELOPMENT SECTORS</p>
        </div>
    </div>
  )
}

export default ImpactStats