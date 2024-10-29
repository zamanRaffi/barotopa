import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Machinery = () => {
  return (
    <div className='px-6 py-10'>
      <h2 className="text-4xl font-bold mb-8 md:text-center md:text-5xl md:mb-16">
      Our Machinery
      </h2>
               {/* Desktop view - grid layout */}
               <div className="sm:hidden md:flex md:items-center md:px-14">

{/* 1st card */}
<div className='w-1/2 mb-4 px-10 mb-12'>
<img src='/Machinery_1ForLs.png'
className='w-[884px]'
/>
<div className='flex px-5 mt-4'>
 <div className='w-2/3'>
 <span className="text-[#797979]"> Unit 03 </span>
 <h3 className="text-xl font-semibold mt-4">Polar Cutting Machine (Programmed)</h3>
 </div>
<p className="text-[#797979] mt-2 'w-1/2">Model : 1998, Origin : Germany <br/>Size : 40”, 56”</p>
                    </div>
</div>


{/* 2nd Card */}
<div className='w-1/2 px-10 mb-12'>
<img src='/Machinery_2ForLs.png'
className='w-[884px]'
/>
<div className='flex px-5 mt-4'>
 <div className='w-2/3'>
 <span className="text-[#797979]"> Unit 03 </span>
 <h3 className="text-xl font-semibold mt-4">Polar Cutting Machine (Programmed)</h3>
 </div>
<p className="text-[#797979] mt-2 'w-1/2">Model : 1998, Origin : Germany <br/>Size : 40”, 56”</p>
                    </div>
</div>


</div>

      <div className="mb-8 md:hidden">
          <Image
            src="/Mechinery.png"
            alt="Mechinery pic"
            width={500}
            height={60}
          />
          
      <div className='mt-4'>
      <span className="text-[#797979] ml-1"> Unit 03 </span>
      <h3 className="text-xl font-semibold mt-4">Polar Cutting Machine (Programmed)</h3>
      <p className="text-[#797979] mt-2">Model : 1998, Origin : Germany <br/>Size : 40”, 56”</p>
      </div>
      </div>
      <div className="flex justify-center mt-8">
      <Link href='/Machinery'>
      <button className='bg-[#1d1d1d] border border-1 border-[#00aeef] text-center rounded-full w-32 py-2 md:w-40'>
          See All
        </button>
      
      </Link>
      </div>
    </div>
  )
}

export default Machinery
