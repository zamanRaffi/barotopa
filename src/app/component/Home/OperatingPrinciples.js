import React from 'react'
import Image from 'next/image';

const OperatingPrinciples = () => {
  return (
    <section className="text-white px-2">
        <h1 className='text-4xl py-2 leading-tight font-semibold px-6'>
        Our Operating Principles
        </h1>
    {/* Our Mission Section */}
    <div className="mb-20">
 
      <div className="mt-6">
        <Image
          src="/OperatingPrinciples_1.png"
          alt="Mission Icon"
          width={550}
          height={100}
          className="rounded-lg shadow-md"
        />
      </div>
      <div className='p-4 text-2xl'>
      <h2>
      Commitment to Quality
      </h2>
      <p className="text-base mt-2 text-[#797979]">
      We are dedicated to providing exceptional printing and packaging  services, ensuring the highest standards in every project we undertake.
        </p>
      </div>
    </div>


    {/* Our Vision Section */}
    <div className="mb-20">
 
 <div className="mt-6">
   <Image
     src="/OperatingPrinciples_2.png"
     alt="Mission Icon"
     width={550}
     height={100}
     className="rounded-lg shadow-md"
   />
 </div>
 <div className='p-4 text-2xl'>
 <h2>
 Mastery of Innovation
 </h2>
 <p className="text-base mt-2 text-[#797979]">
 We continuously seek innovative solutions and adopt the latest  technologies to stay ahead in the printing and packaging industry.
   </p>
 </div>
</div>

 {/* Our Vision Section2*/}
<div className="mb-20" >
 
 <div className="mt-6">
   <Image
     src="/OperatingPrinciples_3.png"
     alt="Mission Icon"
     width={550}
     height={100}
     className="rounded-lg shadow-md"
   />
 </div>
 <div className='p-4 text-2xl'>
 <h2>
 Your Satisfaction First
 </h2>
 <p className="text-base mt-2 text-[#797979]">
 Our customers are our top priority. We strive to exceed your  expectations through personalized service and outstanding results.
   </p>
 </div>
</div>

 {/* Our Vision Section3 */}
<div>
 
 <div className="mt-6">
   <Image
     src="/OperatingPrinciples_4.png"
     alt="Mission Icon"
     width={550}
     height={100}
     className="rounded-lg shadow-md"
   />
 </div>
 <div className='p-4 text-2xl'>
 <h2>
 Knowledge and Expertise
 </h2>
 <p className="text-base mt-2 text-[#797979]">
 Our team of skilled professionals leverages their deep industry  knowledge and experience to deliver excellence in every aspect of our work.
   </p>
 </div>
</div>

  </section>
  )
}

export default OperatingPrinciples
