import React from "react";
import Image from "next/image";
import Link from "next/link";
const Machinery = () => {
  return (
    <div className="px-6 py-10">
      <h2 className="text-4xl text-[#00aeff] font-bold mb-8 md:text-center md:mb-14 lg:text-center lg:text-5xl lg:mb-16">
        Our Machinery
      </h2>
      {/* Desktop view - grid layout */}
      <div className="sm:hidden md:flex md:items-center lg:flex lg:items-center lg:px-14">
        {/* 1st card */}
        <div className="w-1/2 mb-4 px-10 mb-12">
          <img src="/Machinery_1ForLs.png" className="w-[884px]" />
          <div className="flex px-5 mt-4">
            <div className="w-10/12 lg:w-2/3">
              <span className="text-[#797979]"> Unit 03 </span>
              <h3 className="md:mt-2 lg:text-xl lg:font-semibold lg:mt-4">
                Polar Cutting Machine (Programmed)
              </h3>
            </div>
            <p className="text-[#797979] ml-6 lg:mt-2 lg:w-1/2">
              Model : 1998, Origin : Germany <br />
              Size : 40”, 56”
            </p>
          </div>
        </div>

        {/* 2nd Card */}
        <div className="w-1/2 mb-4 px-10 mb-12">
          <img src="/Machinery_2ForLs.png" className="w-[884px]" />
          <div className="flex px-5 mt-4">
            <div className="w-10/12 lg:w-2/3">
              <span className="text-[#797979]"> Unit 03 </span>
              <h3 className="md:mt-2 lg:text-xl lg:font-semibold lg:mt-4">
                Polar Cutting Machine (Programmed)
              </h3>
            </div>
            <p className="text-[#797979] ml-6 lg:mt-2 lg:w-1/2">
              Model : 1998, Origin : Germany <br />
              Size : 40”, 56”
            </p>
          </div>
        </div>
      </div>

      {/* Moblie view - grid layout */}
      <div className="mb-8 md:hidden lg:hidden">
        <Image
          src="/Mechinery.png"
          alt="Mechinery pic"
          width={500}
          height={60}
        />

        <div className="mt-4">
          <span className="text-[#797979] ml-1"> Unit 03 </span>
          <h3 className="text-xl font-semibold mt-4">
            Polar Cutting Machine (Programmed)
          </h3>
          <p className="text-[#797979] mt-2">
            Model : 1998, Origin : Germany <br />
            Size : 40”, 56”
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <Link href="/Machinery">
          <button className="bg-[#1d1d1d] border border-1 border-[#00aeef] text-center rounded-full w-[134px] h-[44px] lg:w-[218px] lg:h-[68px] lg:w-40 hover:bg-[#2c2c2c] hover:border-[#00c7f0] transition duration-200">
            See All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Machinery;
