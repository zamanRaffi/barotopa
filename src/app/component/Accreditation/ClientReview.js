"use client";
import { useState } from 'react';
import Image from 'next/image';

export default function ClientsReview() {
  const testimonials = [
    { 
      id: 1, 
      text: "“The team is very professional, and their customer service is prompt and helpful. I especially appreciate how they handle urgent jobs without compromising on quality.”", 
      name: "Ralph Edwards", 
      imgSrc: "/Group_1171276305.png" ,
      profession: "Life Care Planner (BRAC)",
    },
    
    { 
      id: 2, 
      text: "Amazing service, very prompt...", 
      name: "Sara Lee", 
      imgSrc: "/Group_1171276305.png",
      profession: "Graphic Designer", 
    },
    { 
      id: 3, 
      text: "“The team is very professional, and their customer service is prompt and helpful. I especially appreciate how they handle urgent jobs without compromising on quality.”", 
      name: "Ralph Edwards", 
      imgSrc: "/Group_1171276305.png",
      profession: "Marketing Manager",
    },
    { 
      id: 4, 
      text: "Amazing service, very prompt...", 
      name: "Sara Lee", 
      imgSrc: "/Group_1171276305.png",
      profession: "Graphic Designer",
    },
    
  ];
  
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => setCurrent((current + 1) % testimonials.length);
  const prevTestimonial = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="w-full px-6 py-12 mb-10 bg-[#171717] text-white rounded-lg mx-auto">
      <h2 className="text-5xl mt-8 text-center font-bold text-[#00aeef]">What Our Clients Say</h2>
      
      {/* Testimonial Text */}
      <div className="mt-8 text-2xl">
        <p className='w-[60%] lg:w-[36%] lg:w-[30%] mx-auto'>{testimonials[current].text}</p>
      </div>

 <div className="flex justify-around mt-14">
  
      {/* Navigation Buttons */}
      <div className="flex  space-x-4">
        <button onClick={prevTestimonial} className='px-2 py-2'>&lt; Previous</button>
        <button onClick={nextTestimonial} className='px-2 py-2'>Next &gt;</button>
      </div>


          {/* Client Image and Name */}
        <div className="flex items-center space-x-4">
          <Image 
            src={testimonials[current].imgSrc} 
            alt={testimonials[current].name} 
            width={50} 
            height={50} 
            className="rounded-full" 
          />
          <div>
             <p className="text-lg font-semibold">{testimonials[current].name}</p>
          <p className="text-sm text-gray-400">{testimonials[current].profession}</p>
          </div>
        </div>
  

 </div>

      {/* Pagination */}
      <div className='mt-12 text-3xl ml-24'>
        <span>{current + 1} / {testimonials.length}</span>
      </div>
    </div>
  );
}
