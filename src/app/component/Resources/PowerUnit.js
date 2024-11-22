import React from "react";

export default function PowerUnit() {
  return (
    <div
      className="bg-cover bg-center text-white py-10 px-6 mb-20 md:px-16"
      style={{
        backgroundImage: "url('/images/background.jpg')",
      }}
    >
      <div className="bg-opacity-50 rounded-md md:flex md:justify-evenly md:items-start">
        {/* Text Section */}
        <div className="md:text-left md:w-full md:order-2 md:mt-24">
          {/* Heading */}
          <h2 className="text-4xl text-[#00aeff] font-bold mb-20 md:text-6xl md:mb-16 md:mt-6">
            Our Power Unit
          </h2>

          <h5 className="text-xl mb-2 md:text-4xl md:w-9/12 md:mt-52">
            Printers usually use an AC power supply (like 110V or 220V) or have
            adapters that convert it to the needed power.
          </h5>

          <p className="text-base text-[#797979] md:mt-10 md:text-lg md:w-9/12">
            A proof (sample) of the final design is provided to the customer for
            approval before mass production. Any corrections or changes are made
            at this stage...
          </p>
        </div>

        {/* Image section */}
        <div className="grid grid-cols-2 mt-8 gap-4 mb-8 md:gap-0 md:mb-0 md:w-full md:order-1">
          <img
            src="/PowerUnit_1.png"
            alt="Sample 1"
            className="mt-2 w-full md:ml-20 md:mt-8 md:w-3/4 md:h-auto"
          />
          <img
            src="/PowerUnit_2.png"
            alt="Sample 2"
            className="mt-12 w-full md:mt-24 md:w-3/4 md:h-auto"
          />
        </div>
      </div>
    </div>
  );
}
