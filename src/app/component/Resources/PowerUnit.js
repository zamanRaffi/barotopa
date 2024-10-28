import React from 'react';


export default function PowerUnit() {
  return (
    <div
      className="bg-cover bg-center text-white py-10 px-6 "
      style={{
        backgroundImage: "url('/images/background.jpg')", 
      }}
    >
      <div className="bg-opacity-50 rounded-md max-w-md">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-20">Our Power Unit</h2>

       <h5  className="text-xl font-medium mb-2" >
       Printers usually use an AC power supply (like 110V or 220V) or have adapters that convert it to the needed power.
       </h5>
       
       <p className='text-base text-[#797979]'>
       A proof (sample) of the final design is provided to the customer for approval before mass production. Any corrections or changes are made at this stage...

       </p>


        {/* Image section */}
        <div className="grid grid-cols-2 mt-8">
          <img
            src="/PowerUnit_1.png"
            alt="Sample 1"
            className="mt-2 w-full"
          />
          <img
            src="/PowerUnit_2.png" 
            alt="Sample 2"
            className="mt-12 ml-2 w-full"
          />
        </div>
      </div>
    </div>
  );
}
