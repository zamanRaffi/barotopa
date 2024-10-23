import React from 'react';
import Image from 'next/image';

const GetInTouch = () => {
  return (
    <section className="flex justify-center items-center py-12">
      <div className="bg-[#171717] text-white px-6 py-10 rounded-xl">
        <h2 className="text-4xl font-bold mb-8">Get in touch</h2>
        
        <div className="mb-8 ">
          
            <Image 
             width={500} height={240} 
              src="/getinTouch.png" 
              alt="Office" 
              className='ml-1'
            />
          
        </div>

        <form className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 text-md font-medium">First Name</label>
            <input 
              type="text" 
              className="w-full px-3 py-2 rounded-xl bg-[#171717] border border-[#292929] text-white placeholder-[#838183]" 
              placeholder="First Name" 
            />
          </div>
          <div>
            <label className="block mb-2 text-md font-medium">Last Name</label>
            <input 
              type="text" 
              className="w-full px-3 py-2 rounded-xl bg-[#171717] border border-[#292929] text-white placeholder-[#838183]" 
              placeholder="Last Name" 
            />
          </div>
          <div>
            <label className="block mb-2 text-md font-medium">Email</label>
            <input 
              type="email" 
              className="w-full px-3 py-2 rounded-xl bg-[#171717] border border-[#292929] text-white placeholder-[#838183]" 
              placeholder="Email" 
            />
          </div>
          <div>
            <label className="block mb-2 text-md font-medium">Phone</label>
            <input 
              type="tel" 
              className="w-full px-3 py-2 rounded-xl bg-[#171717] border border-[#292929] text-white placeholder-[#838183]" 
              placeholder="Phone" 
            />
          </div>
          <div className="col-span-2">
            <label className="block mb-2 text-md font-medium">Message</label>
            <textarea 
              className="w-full px-3 py-2 rounded-xl bg-[#171717] border border-[#292929] text-white placeholder-[#838183]" 
              rows="4" 
              placeholder="Write here..."
            ></textarea>
          </div>
          <div className="mt-1">
            <button 
              type="submit" 
              className="bg-blue-400 hover:bg-blue-500 text-white text-lg font-bold py-4 px-16 rounded-full"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default GetInTouch;
