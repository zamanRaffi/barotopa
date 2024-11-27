import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import machineryData from '../data/machinerys_data.json';

export default function Machinery() {
  return (
    <section className="text-white py-12 lg:mb-20">
      <div className="px-12">
        <div className='flex justify-evenly items-center lg:mb-20 lg:py-16'>
          <div className="w-full flex justify-center">
            <div className="flex flex-col items-start text-left max-w-xl">
              <h2 className="text-[#00aeef] text-5xl font-semibold mb-6 leading-tight">
                High-Performance <br /> Printing Machinery for <br /> Exceptional Results
              </h2>
              <p className="text-[#d9d9d9] text-xl w-full mb-4">
                We help your business stand out with superior printing services that blend creativity, quality, and precision.
              </p>
              <div className="mb-2 lg:mb-10 lg:mt-10">
                <button className="bg-[#00aeef] hover:bg-[#33bef2] rounded-full px-5 py-4 font-semibold flex items-center text-black mt-2">
                  <span className="text-white text-lg">Tell us what to print</span>
                </button>
              </div>
            </div>
          </div>

          <div className='w-8/12 lg:mr-36'>
            <Image src="/0Z0A0029.png" width={738} height={553} alt="Descriptive alt text" />
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-4xl text-[#00aeef] font-bold mb-8 lg:text-center lg:text-6xl lg:mb-6">
            Machinery
          </h2>
          <p className="text-2xl text-center w-1/2 mx-auto">
            Barotopa Printers Limited, a core of idea and innovation, introducing our machinery.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-6">
          {machineryData.map((machine) => (
            <Link href={`/Machinery/${machine.slug}`} key={machine.slug}>
              <div className="flex flex-col lg:flex-row bg-[#171717] p-6 rounded-xl cursor-pointer">
                <div className="w-full h-60 lg:w-96 lg:h-72 relative mb-4 lg:mb-0">
                  <Image
                    src={machine.image}
                    alt={machine.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl h-full"
                  />
                </div>
                <div className="lg:px-3 py-3 lg:ml-4">
                 <div className='mb-28'>
                 <span className="text-[#c7c7c7]">Unit {machine.unit}</span>
                 <h3 className="text-xl font-semibold mt-3 flex flex-warp">{machine.title}</h3>
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

  