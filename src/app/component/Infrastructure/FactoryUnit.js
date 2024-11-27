import React from "react";
import Image from "next/image";
const FactoryUnit = () => {
  return (
    <section className="mb-12 py-12">
      <div>
        <h2 className="text-4xl text-[#00aeef] font-bold mb-8 lg:text-center lg:text-6xl lg:mb-6">
          Factory Unit
        </h2>
        <p className="text-2xl text-center w-1/2 mx-auto">
          We are introducing our personnel, culture and capabilities that make
          our organization unique. Barotopa Printers Limited, a core of idea and
          innovation which is a dream project of the Board
        </p>
      </div>

      <div className="lg:flex lg:justify-center lg:items-center lg:mt-12 lg:py-6 lg:px-10 lg:ml-8">
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
            <h2 className="lg:text-3xl">Proof Your Work Thoroughly</h2>
            <p className="mt-4 lg:text-lg lg:w-10/12">
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
            <h2 className="lg:text-3xl">Climateshot Investors Coalition</h2>
            <p className="mt-4 lg:text-lg lg:w-11/12">
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
            <h2 className="lg:text-3xl">Climateshot Investors Coalition</h2>
            <p className="mt-4 lg:text-lg lg:w-11/12">
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