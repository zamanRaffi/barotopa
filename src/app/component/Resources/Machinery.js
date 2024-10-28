import React from 'react'
import Image from 'next/image'
const Machinery = () => {
  return (
    <div className='px-6 py-10'>
      <h2 className="text-4xl font-bold mb-8">
      Our Machinery
      </h2>
      <div className="mb-8">
          <Image
            src="/Mechinery.png"
            alt="Mechinery pic"
            width={500}
            height={60}
          />
          </div>
      <span className="text-[#797979]"> Unit 03 </span>
      <h3 className="text-xl font-semibold mt-4">Polar Cutting Machine (Programmed)</h3>
      <p className="text-[#797979] mt-2">Model : 1998, Origin : Germany <br/>Size : 40”, 56”</p>

      <div className="flex justify-center mt-8">
        <button className='bg-[#1d1d1d] border border-1 border-[#00aeef] text-center rounded-full w-32 py-2'>
          See All
        </button>
      </div>
    </div>
  )
}

export default Machinery
