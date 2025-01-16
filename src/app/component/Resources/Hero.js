import React from "react";


const Hero = () => {
  return (
    <section className="text-white mb-20 flex flex-col lg:mb-14">
      {/* Background Section with Gradient Overlay */}
      <div className="relative px-4 bg-cover flex flex-col bg-[url('/HeroForServiceForSm.png')] lg:bg-[url('/HeroForResources.png')]">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-85"></div>

        {/* Title and Description */}
        <div className="mt-[640px] mb-4 z-10 lg:px-14 lg:mt-[500px]">
          <h1  className="text-4xl w-10/12 font-extrabold md:text-5xl md:w-2/3 md:leading-tight lg:text-7xl lg:leading-tight">
            The Resources <br /> Behind Our Success
          </h1>
          <p className="text-xl text-[#bfbfbf] mt-7 md:w-4/5 lg:w-1/2 lg:text-3xl">
            We help your business stand out with superior printing services that
            blend creativity, quality, and precision.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
