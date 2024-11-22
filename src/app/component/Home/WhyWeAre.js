import React from "react";
import { CheckIcon } from "@heroicons/react/outline";

export default function WhyWeAre() {
  return (
    <div
      className="bg-cover bg-center text-white py-10 px-6 mb-14 lg:px-16 "
      style={{
        backgroundImage: "url('/Exhibition.png')",
      }}
    >
      <div className="bg-opacity-50 rounded-lg md:flex md:justify-evenly md:items-start lg:flex lg:justify-evenly lg:items-start">
        {/* Text Section */}
        <div className="md:text-left md:w-1/2 md:order-2 md:mt-10 lg:text-left lg:w-full lg:order-2 lg:mt-24">
          {/* Heading */}
          <h2 className="text-4xl text-[#00aeff] font-bold mb-6 md:text-4xl lg:text-5xl lg:mb-16">
            Why we are
          </h2>

          {/* List of items */}
          <ul className="space-y-3 mb-6 md:space-y-1 md:mb-0 md:ml-2 md:mb-8 md:text-4xl lg:ml-2 lg:mb-10 lg:text-5xl">
            {Array(6)
              .fill()
              .map((_, index) => (
                <li
                  key={index}
                  className="flex items-center text-[#797979] text-xl md:text-lg"
                >
                  <CheckIcon className="w-5 h-5 mr-2 md:w-9 md:h-11 lg:w-9 lg:h-11 text-yellow-400" />
                  <span className="sm:block md:block lg:hidden">
                    A proof (sample) of the final design
                  </span>
                  <span className="sm:hidden md:hidden lg:block">
                    A proof (sample) of the final design is provided to the
                  </span>
                </li>
              ))}
          </ul>
        </div>

        {/* Image Section */}
        <div className="grid grid-cols-2 gap-4 mb-8 md:gap-0 md:mb-0 md:w-full md:order-1 lg:gap-0 lg:mb-0 lg:w-full lg:order-1">
          <img
            src="/WhyWeAre_1.png"
            alt="Sample 1"
            className="mt-2 w-full md:ml-3 md:w-10/12 md:h-auto lg:ml-20 lg:mt-8 lg:w-3/4 lg:h-auto"
          />
          <img
            src="/WhyWeAre_2.png"
            alt="Sample 2"
            className="mt-10 w-full md:mt-12 md:w-10/12 md:h-auto lg:mt-24 lg:w-3/4 lg:h-auto"
          />
        </div>
      </div>
    </div>
  );
}
