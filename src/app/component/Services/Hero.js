import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative text-white mb-3 flex flex-col">

      {/* Background Section with Gradient Overlay */}
      <div
        className="relative  px-4  min-h-screen bg-cover bg-center flex flex-col"
        style={{ backgroundImage: "url('ExhibitionCenterOfSherbrooke _ CCM2 Architecte.png')" }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80"></div>

        {/* Title and Description */}
        <div className="sm:mt-[40rem] mb-4 z-10">
          <h1 className="text-3xl font-extrabold">
          Your One-Stop Print Solution
          </h1>
          <p className="text-2xl text-[#bfbfbf] mt-7">
            We help your business stand out with superior printing services that blend
            creativity, quality, and precision.
          </p>
        </div>

      </div>

    </section>
  );
};

export default Hero;
