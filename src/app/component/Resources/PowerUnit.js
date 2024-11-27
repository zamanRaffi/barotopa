import React from "react";

export default function PowerUnit() {
  return (
    <div
    className="bg-cover bg-center text-white py-10 px-6 mb-14 lg:px-16 "
    style={{
      backgroundImage: "url('/Rectangle_34627329 (4).png')",
    }}
    >
      <div className="bg-opacity-50 rounded-lg md:flex md:justify-evenly md:items-start lg:flex lg:justify-evenly lg:items-start">
        {/* Text Section */}
        <div className="md:text-left md:w-1/2 md:order-2 md:mt-10 lg:text-left lg:w-full lg:order-2 lg:mt-24">
          {/* Heading */}
          <h2 className="text-4xl text-[#00aeff] font-bold mb-6 md:mb-4 md:text-4xl lg:text-5xl lg:mb-16">
           Our Power Unit
          </h2>

          <h5 className="text-xl mb-2 lg:text-4xl lg:w-9/12 lg:mt-52">
            Printers usually use an AC power supply (like 110V or 220V) or have
            adapters that convert it to the needed power.
          </h5>

          <p className="text-base text-[#797979] lg:mt-10 lg:text-lg lg:w-9/12">
            A proof (sample) of the final design is provided to the customer for
            approval before mass production. Any corrections or changes are made
            at this stage...
          </p>
        </div>

        {/* Image section */}
        <div className="grid grid-cols-2 gap-4 mb-8 md:gap-0 md:mb-0 md:w-full md:order-1 lg:gap-0 lg:mb-0 lg:w-full lg:order-1">
          <img
            src="/PowerUnit_1.png"
            alt="Sample 1"
            className="mt-2 w-full md:ml-3 md:w-10/12 md:h-auto lg:ml-20 lg:mt-8 lg:w-3/4 lg:h-auto"
          />
          <img
            src="/PowerUnit_2.png"
            alt="Sample 2"
            className="mt-10 w-full md:mt-12 md:w-10/12 md:h-auto lg:mt-24 lg:w-3/4 lg:h-auto"
          />
        </div>
      </div>
    </div>
  );
}
