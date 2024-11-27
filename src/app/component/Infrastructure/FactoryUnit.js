import React from "react";
import Image from "next/image";
const FactoryUnit = () => {
  return (
    <section className="mb-12 py-12">
      <div className="mb-12">
        <h2 className="text-4xl text-[#00aeef] text-center font-bold mb-8 md:text-5xl md:mb-6 lg:text-6xl lg:mb-6">
          Factory Unit
        </h2>
        <p className="text-2xl text-center w-8/12 md:text-lg lg:w-1/2 mx-auto">
          We are introducing our personnel, culture and capabilities that make
          our organization unique. Barotopa Printers Limited, a core of idea and
          innovation which is a dream project of the Board
        </p>
      </div>

      <div className="md:flex md:justify-center md:items-center md:mt-10 md:py-2 md:px-6  lg:flex lg:justify-center lg:items-center lg:mt-12 lg:py-6 lg:px-10 lg:ml-8">
        {/* 1st Card */}
        <div className="mb-12 md:mr-4 md:px-2 md:mb-0 lg:mb-0">
          <div className="px-2 md:px-0 lg:px-0">
            <Image
              width={564}
              height={460}
              src="/FU1.png"
              alt="Factory Unit image"
              className=""
            />
          </div>

          <div className="mt-8 ml-4 md:ml-0 lg:ml-0">
            <h2 className="text-xl md:text-base lg:text-3xl">Climateshot Investors Coalition</h2>
            <p className="mt-4 md:text-sm lg:text-left lg:text-lg">
              Exploring the climate and cost- of-living crises through food
              waste and community Exploring the climate and cost- of-living
              crises through
            </p>
          </div>
        </div>


        {/* 2nd Card */}
        <div className="mb-12 md:mr-4 md:px-2 md:mb-0 lg:mb-0">
          <div className="px-2 md:px-0 lg:px-0">
            <Image
              width={564}
              height={460}
              src="/FU1.png"
              alt="Factory Unit image"
              className=""
            />
          </div>

          <div className="mt-8 ml-4 md:ml-0 lg:ml-0">
            <h2 className="text-xl md:text-base lg:text-3xl">Climateshot Investors Coalition</h2>
            <p className="mt-4 md:text-sm lg:text-left lg:text-lg">
              Exploring the climate and cost- of-living crises through food
              waste and community Exploring the climate and cost- of-living
              crises through
            </p>
          </div>
        </div>


        {/* 3rd Card */}
        <div className="md:mb-0 md:px-2 lg:mb-0">
          <div className="px-2 md:px-0 lg:px-0">
            {/* for Image */}
            <Image
              width={564}
              height={460}
              src="/FU1.png"
              alt="Factory Unit image"
              className=""
            />
          </div>

          <div className="mt-8 ml-4 md:ml-0 lg:ml-0">
            <h2 className="text-xl md:text-base lg:text-3xl">Climateshot Investors Coalition</h2>
            <p className="mt-4 md:text-sm lg:text-left lg:text-lg">
              Exploring the climate and cost- of-living crises through food
              waste and community Exploring the climate and cost- of-living
              crises through
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FactoryUnit;