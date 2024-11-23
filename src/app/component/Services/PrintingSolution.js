import React from "react";
import Image from "next/image";

const PrintingSolution = () => {
  return (
    <div className="px-6 lg:px-44 lg:py-20 lg:mb-10">
      <h2 className="text-4xl text-[#00aeff] font-bold mb-10 lg:text-center lg:text-5xl lg:mb-12">
        Printing Solution
      </h2>

      <div className="bg-[#1d1d1d] rounded-2xl shadow-lg px-3 pt-3 pb-4 md:flex md:p-6 md:gap-8 lg:flex lg:p-6 lg:gap-8">
        {/* Image for Mobile and lg */}
        <div className="mb-4 lg:mb-0 lg:w-1/2">
          <div className="sm:block md:hidden lg:hidden">
            <Image
              src="/PrintingSolution.png" // sm image
              alt="Printing Solution"
              width={400}
              height={200}
              className="rounded-lg w-full h-48 object-cover"
            />
          </div>
          <div className="sm:hidden md:block lg:block">
            <Image
              src="/PrintingSolutionForLs.png" // lg image
              alt="Printing Solution for lg"
              width={600}
              height={600}
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Card Content */}
        <div className=" md:mt-2 lg:w-1/2 lg:mt-6 lg:px-2">
          <h3 className="text-2xl mb-5 md:text-xl lg:text-3xl">
            High-Performance Printing <br className=" md:hidden lg:hidden" /> Solutions
            Designed for Unmatched Quality and Speed
          </h3>
          <div className="lg:flex lg:justify-between lg:items-center lg:w-full lg:mt-[470px]">
            <p className="text-[#797979] mb-6 lg:text-xl lg:w-9/12">
              A proof (sample) of the final design is provided to the customer
              for approval before mass production. Any corrections or changes
              are made at this stage...
            </p>

            {/* Button */}
            <button className="bg-[#00aeef] text-white px-6 py-2 rounded-full hover:text-black lg:py-4 lg:w-3/12">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrintingSolution;
