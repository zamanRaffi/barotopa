import React from 'react';
import Image from 'next/image';

const ValuedClients = () => {
  return (
    <div className="py-10 px-6 mb-10 lg:px-16 overflow-hidden">
        <h2 className="text-4xl text-[#00aeff] font-bold mb-6 px-5 md:text-center md:text-4xl
            md:mb-10 lg:text-center lg:text-5xl
            lg:mb-16">Valued Clients</h2>
      {/* Infinite Scrolling Section */}
      <div className="flex gap-6 animate-marquee mt-12">
        <Image width={164.37} height={56.07} src="/bracIcon.png" alt="brac" />
        <Image width={164.37} height={56.07} src="/waltonIcon.png" alt="walton" />
        <Image width={164.37} height={56.07} src="/jitIcon.png" alt="jit" />
        <Image width={164.37} height={56.07} src="/biopharma.png" alt="biopharma" />
        <Image width={164.37} height={56.07} src="/whoIcon.png" alt="who" />
        <Image width={164.37} height={56.07} src="/phamasia.png" alt="phamasia" />
        <Image width={164.37} height={56.07} src="/bracIcon.png" alt="brac" />
        <Image width={164.37} height={56.07} src="/waltonIcon.png" alt="walton" />
        <Image width={164.37} height={56.07} src="/jitIcon.png" alt="jit" />
        <Image width={164.37} height={56.07} src="/biopharma.png" alt="biopharma" />
        <Image width={164.37} height={56.07} src="/whoIcon.png" alt="who" />
        <Image width={164.37} height={56.07} src="/phamasia.png" alt="phamasia" />
      </div>
      
       {/* Infinite Scrolling Section (Right to Left) */}
       <div className="flex gap-6 animate-marquee-reverse mt-24">
        <Image width={164.37} height={56.07} src="/bracIcon.png" alt="brac" />
        <Image width={164.37} height={56.07} src="/waltonIcon.png" alt="walton" />
        <Image width={164.37} height={56.07} src="/jitIcon.png" alt="jit" />
        <Image width={164.37} height={56.07} src="/biopharma.png" alt="biopharma" />
        <Image width={164.37} height={56.07} src="/whoIcon.png" alt="who" />
        <Image width={164.37} height={56.07} src="/phamasia.png" alt="phamasia" />
        <Image width={164.37} height={56.07} src="/bracIcon.png" alt="brac" />
        <Image width={164.37} height={56.07} src="/waltonIcon.png" alt="walton" />
        <Image width={164.37} height={56.07} src="/jitIcon.png" alt="jit" />
        <Image width={164.37} height={56.07} src="/biopharma.png" alt="biopharma" />
        <Image width={164.37} height={56.07} src="/whoIcon.png" alt="who" />
        <Image width={164.37} height={56.07} src="/phamasia.png" alt="phamasia" />
      </div>

    </div>
  );
};

export default ValuedClients;
