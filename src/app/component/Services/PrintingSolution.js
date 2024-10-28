import React from 'react';
import Image from 'next/image';

const PrintingSolution = () => {
  return (
   <div className='px-6 py-12'>

<h2 className="text-4xl font-bold mb-6">Printing Solution</h2>
   
   <div className="bg-[#1d1d1d] rounded-lg shadow-md px-3 pt-3 pb-4">
       
       {/* Image at the top */}
       <div className="mb-4">
         <Image
           src="/PrintingSolution.png" // Replace with your image path
           alt="Card Image"
           width={400}
           height={200}
           className="rounded-t-lg w-full h-48 object-cover"
         />
       </div>
 
       {/* Card Content */}
       <h3 className="text-2xl mb-5">High-Performance Printing <br/> Solutions Designed for Unmatched Quality and Speed</h3>
       <p className="text-[#797979] mb-6">
       A proof (sample) of the final design is provided to the customer for approval before mass production. Any corrections or changes are made at this stage...
       </p>
 
       {/* Button */}
       <button className="bg-[#00aeef] text-white px-6 py-2 rounded-full  hover:text-black">
         Read More
       </button>
     </div>


   </div>
  )
}

export default PrintingSolution

