import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import machineryData from '../data/machinerys_data.json';

export default function Machinery() {
  return (
    <section className="text-white py-12 lg:mb-20">
      <div className="px-12">
        <div className='flex justify-evenly items-center mb-20 lg:py-16'>
          <div className="w-full md:flex md:justify-center">
            <div className="lg:max-w-xl">
              <h2 className="text-4xl text-center text-[#00aeef] lg:text-5xl lg:text-left font-semibold mb-6 md:leading-tight">
                High-Performance <br /> Printing Machinery for <br /> Exceptional Results
              </h2>
              <p className="text-[#d9d9d9] text-center text-lg w-7/12 mx-auto lg:mx-0 lg:text-xl lg:text-left lg:w-full mb-8">
                We help your business stand out with superior printing services that blend creativity, quality, and precision.
              </p>
              <div className="mb-2 flex justify-center lg:mb-10 lg:mt-10  lg:flex-none lg:justify-start">
                <button className="bg-[#00aeef] hover:bg-[#33bef2] rounded-full px-5 py-4 font-semibold flex items-center text-black">
                  <span className="text-white text-lg">Tell us what to print</span>
                </button>
              </div>
            </div>
          </div>

          <div className='sm:hidden lg:block lg:w-8/12 lg:mr-36'>
            <Image src="/0Z0A0029.png" width={738} height={553} alt="Descriptive alt text" />
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-4xl text-[#00aeef] font-bold mb-8 text-center lg:text-6xl lg:mb-6">
            Machinery
          </h2>
          <p className="text-xl lg:text-2xl text-center w-8/12 mx-auto">
            Barotopa Printers Limited, a core of idea and innovation, introducing our machinery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 lg:gap-8 md:px-2 lg:px-6">
  {machineryData.map((machine) => (
    <Link href={`/Machinery/${machine.slug}`} key={machine.slug}>
      <div className="flex flex-col mb-6 lg:mb-0 lg:flex-row bg-[#171717] p-6 rounded-xl cursor-pointer h-auto">
        {/* Image Container */}
        <div className="w-full h-40 md:h-48 lg:w-96 lg:h-72 relative flex-shrink-0 mb-4 lg:mb-0">
          <Image
            src={machine.image}
            alt={machine.title}
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
        </div>
        {/* Text Content */}
        <div className="py-3 lg:px-3 lg:ml-4 flex flex-col justify-between flex-grow">
          <div>
            <span className="text-[#c7c7c7]">Unit {machine.unit}</span>
            <h3 className="text-xl font-semibold mt-3 flex flex-wrap">{machine.title}</h3>
          </div>
          <div>
            <p className="text-[#c7c7c7] mt-2">{machine.location}</p>
            {machine.size && (
              <p className="text-[#c7c7c7] mt-2">Size: {machine.size}</p>
            )}
            {machine.capacity && (
              <p className="text-[#c7c7c7] mt-2">Capacity: {machine.capacity}</p>
            )}
          </div>
        </div>
      </div>
    </Link>
  ))}
</div>


      </div>
    </section>
  );
}

  