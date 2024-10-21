import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('Exhibition.png')" }}
    >
    
      <div className="relative h-full px-6 text-white">
       
        <div className="absolute right-4 top-[13.5rem]">
          <Image
            src="/Frame _1171277434.png"
            alt="Barotopa Printers Limited Logo"
            width={176}
            height={117}
           
          />
        </div>
           
       

        {/* Title and Description */}
        <h1 className=" absolute bottom-[13.5rem] text-4xl font-extrabold mb-4 leading-tight">
          Excellence in <br /> Printing & Packaging
        </h1>
        <p className="absolute bottom-[6rem] text-xl mb-8 max-w-xl">
          We help your business stand out with superior printing services that blend
          creativity, quality, and precision.
        </p>

        <div className="absolute inset-0 top-[44rem] bg-black/50"></div>

        <button
          className="bg-blue-500 hover:bg-blue-600 text-black font-semibold px-5 py-3 rounded-full flex justify-evenly absolute bottom-[4rem]"
        >
          <span className='text-white'>Tell us what to print</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 bg-white rounded-full ml-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>

      {/* Bottom Text */}
      <div className='px-6' >
        <p className="text-white text-2xl font-bold py-6">
          Barotopa Printers Limited is a reliable Press for your complete printing
          needs, serving with persistence and precision.
        </p>

        <p className='text-gray-400 text-lg'>
        We are introducing our personnel, culture and capabilities that make our organization unique. Barotopa Printers Limited, a core of idea and innovation which is a dream project of the Board of Directors of Panjeree Publications Limited. Our core exists on a total of 2,42,960 sft land area including production line. We are one-stop-solutions for all your planning, printing and other allied tasks. For keeping world class quality.
        </p>
      </div>
    </section>
  );
};

export default Hero;
