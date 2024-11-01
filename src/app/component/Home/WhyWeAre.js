import React from "react";
import { CheckIcon } from "@heroicons/react/outline";

export default function WhyWeAre() {
  return (
    <div
      className="bg-cover bg-center text-white py-10 px-6 mb-14 md:px-16 "
      style={{
        backgroundImage: "url('/Exhibition.png')",
      }}
    >
      <div className="bg-opacity-50 rounded-md md:flex md:justify-evenly md:items-start">
        {/* Text Section */}
        <div className="md:text-left md:w-full md:order-2 md:mt-24">
          {/* Heading */}
          <h2 className="text-4xl font-bold mb-6 md:text-6xl md:mb-16">
            Why we are
          </h2>

          {/* List of items */}
          <ul className="space-y-3 mb-6 md:ml-2 md:mb-10 md:text-5xl">
            {Array(6)
              .fill()
              .map((_, index) => (
                <li
                  key={index}
                  className="flex items-center text-[#797979] text-xl md:text-xl"
                >
                  <CheckIcon className="w-5 h-5 md:w-9 md:h-11 text-yellow-400 mr-2" />
                  <span className="block md:hidden">
                    A proof (sample) of the final design
                  </span>
                  <span className="sm:hidden md:block">
                    A proof (sample) of the final design is provided to the
                  </span>
                </li>
              ))}
          </ul>
        </div>

        {/* Image Section */}
        <div className="grid grid-cols-2 gap-4 mb-8 md:gap-0 md:mb-0 md:w-full md:order-1">
          <img
            src="/WhyWeAre_1.png"
            alt="Sample 1"
            className="mt-2 w-full md:ml-20 md:mt-8 md:w-3/4 md:h-auto"
          />
          <img
            src="/WhyWeAre_2.png"
            alt="Sample 2"
            className="mt-12 w-full md:mt-24 md:w-3/4 md:h-auto"
          />
        </div>
      </div>
    </div>
  );
}
