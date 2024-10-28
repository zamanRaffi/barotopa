import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative text-white mb-3 flex flex-col">

      {/* Background Section with Gradient Overlay */}
      <div
        className="relative  px-4  min-h-screen bg-cover bg-center flex flex-col"
        style={{ backgroundImage: "url('Exhibition.png')" }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80"></div>

        {/* Logo */}
        <div className="sm:mt-[215px] flex justify-end z-10">
          <Image
            src="/Frame _1171277434.png"
            alt="Barotopa Printers Limited Logo"
            width={210}
            height={117}
          />
        </div>

        {/* Title and Description */}
        <div className="sm:mt-[260px] mb-4 z-10">
          <h1 className="text-3xl font-extrabold">
            Excellence in <br /> printing & packaging
          </h1>
          <p className="text-2xl text-[#bfbfbf] mt-7">
            We help your business stand out with superior printing services that blend
            creativity, quality, and precision.
          </p>
        </div>

        {/* Button */}
        <div className="z-10">
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
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="px-6">
        <p className="text-white text-2xl font-bold py-6">
          Barotopa Printers Limited is a reliable Press for your complete printing
          needs, serving with persistence and precision.
        </p>

        <p className="text-[#bfbfbf] text-xl">
          We are introducing our personnel, culture, and capabilities that make our organization unique.
          Barotopa Printers Limited, a core of idea and innovation which is a dream project of the Board
          of Directors of Panjeree Publications Limited. Our core exists on a total of 2,42,960 sft land area
          including the production line. We are one-stop solutions for all your planning, printing, and other allied
          tasks, ensuring world-class quality.
        </p>
      </div>

    </section>
  );
};

export default Hero;
