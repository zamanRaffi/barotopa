import React from 'react'
import Image from 'next/image';

export default function Machinery() {
  const machineryData = [
    {
      id: "1",
      unit:"03",
      title: "Polar Cutting Machine (Programmed)",
      image: "/Machinery_1ForLs.png",
      location: "Model: 1986, Origin: Germany",
      size:'40",56"'
    },
    {
      id: "2",
      unit:"03",
      title: "Komori 4 Color Printing Machine",
      image: "/Machinery_2ForLs.png",
      location: "Model: 2001, Origin: Japan",
      capacity: "15,000 sheets per hour",
    },
    {
      id: "3",
      unit:"03",
      title: "Heidelberg SORD Single Color",
      image: "/Machinery_1ForLs.png",
      location: "Model: 1995, Origin: Germany",
      capacity: "10,000 sheets per hour",
    },
    {
      id: "4",
      unit:"03",
      title: "Web Printing Machine Single Color",
      image: "/Machinery_2ForLs.png",
      location: "Brand: Prakash, Origin: India",
      capacity: "40,000 prints per hour",
    },
    {
        id: "5",
        unit:"03",
        title: "Polar Cutting Machine (Programmed)",
        image: "/Machinery_1ForLs.png",
        location: "Model: 1986, Origin: Germany",
        capacity: "56 per hour",
      },
      {
        id: "6",
        unit:"03",
        title: "Komori 4 Color Printing Machine",
        image: "/Machinery_2ForLs.png",
        location: "Model: 2001, Origin: Japan",
        capacity: "15,000 sheets per hour",
      },
      {
        id: "7",
        unit:"03",
        title: "Heidelberg SORD Single Color",
        image: "/Machinery_1ForLs.png",
        location: "Model: 1995, Origin: Germany",
        capacity: "10,000 sheets per hour",
      },
      {
        id: "8",
        unit:"03",
        title: "Web Printing Machine Single Color",
        image: "/Machinery_2ForLs.png",
        location: "Brand: Prakash, Origin: India",
        capacity: "40,000 prints per hour",
      },
      {
        id: "9",
        unit:"03",
        title: "Heidelberg SORD Single Color",
        image: "/Machinery_1ForLs.png",
        location: "Model: 1995, Origin: Germany",
        capacity: "10,000 sheets per hour",
      },
      {
        id: "10",
        unit:"03",
        title: "Web Printing Machine Single Color",
        image: "/Machinery_2ForLs.png",
        location: "Brand: Prakash, Origin: India",
        capacity: "40,000 prints per hour",
      },
    
  ];

  return (
    <section className="text-white py-12 md:mb-20">
    <div className="px-12">

 <div className='flex justify-evenly items-center md:mb-20 md:py-16'>
 <div className="w-full flex justify-center">
  <div className="flex flex-col items-start text-left max-w-xl">
    <h2 className="text-[#00aeef] text-5xl font-semibold mb-6 leading-tight">
      High-Performance <br /> Printing Machinery for <br /> Exceptional Results
    </h2>
    <p className="text-[#d9d9d9] text-xl w-full mb-4">
      We help your business stand out with superior printing services that blend creativity, quality, and precision. We help your business stand out with superior printing services that blend creativity.
    </p>

    {/* Button */}
    <div className="mb-2 md:mb-10 md:mt-10">
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
</div>


    <div className='w-8/12 md:mr-36'>
    <Image
        src="/0Z0A0029.png" 
        width={738}
        height={553}        
        alt="Descriptive alt text"
        
    />
</div>

 </div>



      <div className='mb-12'>
      <h2 className="text-4xl text-[#00aeef] font-bold mb-8 md:text-center md:text-6xl md:mb-6">
      Machinery
      </h2>
      <p className="text-2xl text-center w-1/2 mx-auto">
      We are introducing our personnel, culture and capabilities that make our organization unique. Barotopa Printers Limited, a core of idea and innovation which is a dream project of the Board 
      </p>

      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {machineryData.map((machine) => (
          <div
            key={machine.id}
            className="flex flex-col md:flex-row bg-[#171717] p-6 rounded-lg"
          >
            {/* Image on top for sm, side-by-side for md */}
            <div className="w-full h-60 md:w-80 md:h-full relative mb-4 md:mb-0">
              <Image
                src={machine.image}
                alt={machine.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            
            {/* Text below image for sm, beside image for md */}
            <div className="md:px-3 py-3 md:ml-4">
              <div>
                <span className="text-[#c7c7c7]">Unit {machine.unit}</span>
                <h3 className="text-xl font-semibold mt-3">{machine.title}</h3>
              </div>
  
              <div className="mt-4 md:mt-20">
                <p className="text-[#c7c7c7] mt-2">{machine.location}</p>
                {machine.capacity && (
                  <p className="text-[#c7c7c7] mt-2">Capacity: {machine.capacity}</p>
                )}
                {machine.size && (
                  <p className="text-[#c7c7c7] mt-2">Size: {machine.size}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  
  
  );
}

  