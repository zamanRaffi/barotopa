import React from "react";
import Image from "next/image";

const PrintingSolution = () => {
  return (
    <div className="px-6 md:px-44 md:py-20 md:mb-10">
      <h2 className="text-4xl font-bold mb-6 md:text-center md:text-5xl md:mb-12">
        Printing Solution
      </h2>

      <div className="bg-[#1d1d1d] rounded-2xl shadow-md px-3 pt-3 pb-4 md:flex md:p-6 md:gap-8">
        {/* Image for Mobile and md */}
        <div className="mb-4 md:mb-0 md:w-1/2">
          <div className="sm:block md:hidden">
            <Image
              src="/PrintingSolution.png" // sm image
              alt="Printing Solution"
              width={400}
              height={200}
              className="rounded-md w-full h-48 object-cover"
            />
          </div>
          <div className="sm:hidden md:block">
            <Image
              src="/PrintingSolutionForLs.png" // Md image
              alt="Printing Solution for md"
              width={600}
              height={600}
              className="rounded-md w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Card Content */}
        <div className="md:w-1/2 md:mt-6 md:px-2">
          <h3 className="text-2xl mb-5 md:text-3xl">
            High-Performance Printing <br className="md:hidden" /> Solutions
            Designed for Unmatched Quality and Speed
          </h3>
          <div className="md:flex md:justify-between md:items-center md:w-full md:mt-[470px]">
            <p className="text-[#797979] mb-6 md:text-xl md:w-9/12">
              A proof (sample) of the final design is provided to the customer
              for approval before mass production. Any corrections or changes
              are made at this stage...
            </p>

            {/* Button */}
            <button className="bg-[#00aeef] text-white px-6 py-2 rounded-full hover:text-black md:py-4 md:w-3/12">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrintingSolution;
