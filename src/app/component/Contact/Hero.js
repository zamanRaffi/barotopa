import React from 'react';

const Hero = () => {
  return (
      <section className="text-white mb-3 flex flex-col md:mb-28">

{/* Background Section with Gradient Overlay */}
<div
   className="relative px-4 bg-cover flex flex-col bg-[url('/HeroForServiceForSm.png')] md:bg-[url('/HeroForContact.png')]"
>
  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-85"></div>

  {/* Title and Description */}
  <div className="mt-[640px] mb-4 z-10 md:px-5 md:mt-[480px]">
    <h1 className="text-3xl font-extrabold md:text-7xl md:w-3/5 md:leading-tight">
    Reach Out for Quality <br/> Printing Solutions
    </h1>
    <p className="text-2xl text-[#bfbfbf] mt-7 md:w-5/12 md:text-2xl">
    We help your business stand out with superior printing services that blend creativity, quality, and precision. 
    </p>
  </div>

</div>

</section>

   
  );
};

export default Hero;
