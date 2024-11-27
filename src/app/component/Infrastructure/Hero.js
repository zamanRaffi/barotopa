import React from "react";

const Hero = () => {
  return (
    <section className="text-white mb-3 flex flex-col lg:mb-28">
      {/* Background Section with Gradient Overlay */}
      <div className="relative px-4 bg-cover flex flex-col bg-[url('/HeroForServiceForSm.png')] lg:bg-[url('/InfrastructureHero.png')]">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-85"></div>

        {/* Title and Description */}
        <div className="mt-[640px] mb-4 z-10 lg:px-14 lg:mt-[480px]">
          <h1 className="text-3xl font-extrabold lg:text-7xl lg:w-4/5 lg:leading-tight">
            Our World-Class <br /> Infrastructure
          </h1>
          <p className="text-2xl text-[#bfbfbf] mt-7 lg:w-5/12 lg:text-2xl">
            We help your business stand out with superior printing services that
            blend creativity, quality, and precision.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
