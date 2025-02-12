import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="text-white mb-12 flex flex-col">
      {/* Background Section with Gradient Overlay */}
      <div className="relative px-5 bg-cover bg-right flex flex-col bg-[url('/Exhibition.png')] lg:bg-[url('/ExhibitionCenterOfSherbrookeForLs.png')]">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-85"></div>

        {/* Logo */}
        <div className="block mt-[185px] flex justify-end z-10 md:hidden lg:hidden">
          <Image
            src="/Frame _1171277434.png"
            alt="Barotopa Printers Limited Logo"
            width={176.3}
            height={116.52}
          />
        </div>

        {/* Title and Description */}
        <div className="mt-[235px] mb-4 z-10 md:mt-[400px] lg:mt-[400px]">
          <h1 className="text-3xl font-extrabold md:text-5xl md:px-2 lg:text-7xl lg:px-6">
            Excellence in <br /> printing & packaging
          </h1>
          <p className="text-2xl text-[#bfbfbf] mt-7 md:text-xl md:mt-6 md:px-2 md:w-9/12 lg:mt-10 lg:px-6 lg:w-2/5">
            We help your business stand out with superior printing services that
            blend creativity, quality, and precision.
          </p>
        </div>

        {/* Button */}
        <div className="z-10 mb-2 md:mb-10 md:px-1 lg:mb-10 lg:px-8">
          <button className="bg-[#00aeef] hover:bg-[#33bef2] rounded-full px-5 py-4 font-semibold flex items-center text-black mt-2">
            <span className="text-white text-lg">Tell us what to print</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 bg-white rounded-full p-2 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="px-6 mt-16 md:w-9/12 md:mx-auto md:mt-20 md:mb-14 lg:w-9/12 lg:mx-auto lg:mt-24 lg:mb-20">
        <h1 className="text-[#00aeef] text-4xl mt-4 mb-3 md:text-5xl lg:text-7xl lg:mb-14">
          About Barotopa
        </h1>
        <p className="text-white text-lg font-bold py-6 md:text-xl lg:w-1/2 lg:text-2xl lg:py-0">
          Barotopa Printers Limited is a reliable Press for your complete
          printing needs, serving with persistence and precision.
        </p>

        <p className="text-[#797979] text-xl lg:mt-6 lg:w-10/12">
          We are introducing our personnel, culture, and capabilities that make
          our organization unique. Barotopa Printers Limited, a core of idea and
          innovation which is a dream project of the Board of Directors of
          Panjeree Publications Limited. Our core exists on a total of 2,42,960
          sft land area including the production line. We are one-stop solutions
          for all your planning, printing, and other allied tasks, ensuring
          world-class quality.
        </p>
      </div>
    </section>
  );
};

export default Hero;
