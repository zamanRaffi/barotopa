import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section
      className=""
     
    >
    
      <div className="relative min-h-screen bg-cover bg-center px-4 text-white mb-3"
        style={{ backgroundImage: "url('Exhibition.png')" }}
      >
       
        <div className="absolute right-4 top-[12.8rem]">
          <Image
            src="/Frame _1171277434.png"
            alt="Barotopa Printers Limited Logo"
            width={210}
            height={117}
           
          />
        </div>
           
       

        {/* Title and Description */}
        <h1 className=" absolute top-[37.8rem] text-3xl font-extrabold">
          Excellence in <br /> printing & packaging
        </h1>
        <p className="absolute top-[45rem] text-2xl text-[#bfbfbf]">
          We help your business stand out with superior printing services that blend
          creativity, quality, and precision.
        </p>

        {/* <div className="absolute inset-0 top-[-10rem] bg-black/60"></div> */}

       <div className='text-black absolute top-[52.5rem] text-sm'>
       <button
          className="bg-blue-400 hover:bg-blue-500 rounded-full px-5 py-4 font-semibold flex items-center"
        >
          <span className='text-white'>Tell us what to print</span>
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
        <div className='px-6' >
        <p className="text-white text-2xl font-bold py-6">
          Barotopa Printers Limited is a reliable Press for your complete printing
          needs, serving with persistence and precision.
        </p>

        <p className='text-[#bfbfbf] text-xl'>
        We are introducing our personnel, culture 
        and capabilities that make our organization unique. Barotopa Printers Limited, a core of idea and innovation which is a dream project of the Board of Directors of Panjeree Publications Limited. Our core exists on a total of 2,42,960 sft land area including production line. We are one-stop-solutions for all your planning, printing and other allied tasks. For keeping world class quality.
        </p>
      </div>


     
    </section>
  );
};

export default Hero;
