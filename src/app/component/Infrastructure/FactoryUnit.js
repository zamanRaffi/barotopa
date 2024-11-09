import React from "react";
import Image from "next/image";
const FactoryUnit = () => {
  return (
    <section className="mb-12 py-12">
      <div>
        <h2 className="text-4xl text-[#00aeef] font-bold mb-8 md:text-center md:text-6xl md:mb-6">
          Factory Unit
        </h2>
        <p className="text-2xl text-center w-1/2 mx-auto">
          We are introducing our personnel, culture and capabilities that make
          our organization unique. Barotopa Printers Limited, a core of idea and
          innovation which is a dream project of the Board
        </p>
      </div>

      <div className="md:flex md:justify-center md:items-center md:mt-12 md:py-6 md:px-10 md:ml-8">
        {/* 1st Card */}
        <div>
          <div>
            <Image
              width={564}
              height={460}
              src="/FU1.png"
              alt="Factory Unit image"
              className=""
            />
          </div>

          <div className="mt-8">
            <h2 className="md:text-3xl">Proof Your Work Thoroughly</h2>
            <p className="mt-4 md:text-lg md:w-10/12">
              Exploring the climate and cost- of-living crises through food
              waste and community Exploring the climate and cost- of-living
              crises through
            </p>
          </div>
        </div>

        {/* 2nd Card */}
        <div>
          <div>
            <Image
              width={564}
              height={460}
              src="/FU1.png"
              alt="Factory Unit image"
              className=""
            />
          </div>

          <div className="mt-8">
            <h2 className="md:text-3xl">Climateshot Investors Coalition</h2>
            <p className="mt-4 md:text-lg md:w-11/12">
              Exploring the climate and cost- of-living crises through food
              waste and community Exploring the climate and cost- of-living
              crises through
            </p>
          </div>
        </div>

        {/* 3rd Card */}
        <div>
          <div>
            {/* for Image */}
            <Image
              width={564}
              height={460}
              src="/FU1.png"
              alt="Factory Unit image"
              className=""
            />
          </div>

          <div className="mt-8">
            <h2 className="md:text-3xl">Climateshot Investors Coalition</h2>
            <p className="mt-4 md:text-lg md:w-11/12">
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