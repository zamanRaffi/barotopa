import React from "react";
import Image from "next/image";

const GetInTouch = () => {
  return (
    <section className="flex justify-center items-center py-12">
      <div className="bg-[#171717] text-white sm:px-6 sm:py-10 rounded-xl md:py-14 md:w-full lg:py-14 lg:w-full">
        {/* Heading */}
        <h2 className="text-4xl font-bold sm:mb-8 md:text-4xl md:mb-10 lg:text-5xl lg:ml-52 lg:mb-10">
          Get in touch
        </h2>

        {/* Content container */}
        <div className="md:flex md:justify-evenly md:items-start  lg:flex lg:justify-evenly lg:items-start">
          {/* Image section */}
          <div className="mb-8 md:px-6 md:order-2 lg:px-6 lg:order-2">
            {/* Display image for small screens */}
            <div className="sm:block md:hidden lg:hidden">
              <Image
                width={500}
                height={240}
                src="/getinTouchSm.png"
                alt="Office small screen"
                className="sm:ml-2"
              />
            </div>

            {/* Display image for medium and larger screens */}
            <div className="sm:hidden md:block lg:block">
              <Image
                width={450}
                height={600}
                src="/getinTouchMd.png"
                alt="Office medium screen"
                className="lg:ml-0 md:ml-0 max-w-full"
              />
            </div>
          </div>

          {/* Form section */}
          <form className="grid grid-cols-2 gap-4 md:w-5/12 md:order-1 lg:w-2/5 lg:order-1">
            <div>
              <label className="sm:block mb-2 text-lg font-medium md:text-base md:mb-1 lg:mb-1">
                First Name
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 rounded-xl bg-[#171717] border border-[#292929] text-white placeholder-[#838183] lg:py-3"
                placeholder="First Name"
              />
            </div>
            <div>
              <label className="sm:block mb-2 text-lg font-medium md:text-base">
                Last Name
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 rounded-xl bg-[#171717] border border-[#292929] text-white placeholder-[#838183] lg:py-3"
                placeholder="Last Name"
              />
            </div>
            <div>
              <label className="sm:block mb-2 text-lg font-medium md:text-base">
                Email
              </label>
              <input
                type="email"
                className="w-full px-3 py-2 rounded-xl bg-[#171717] border border-[#292929] text-white placeholder-[#838183] lg:py-3"
                placeholder="Email"
              />
            </div>
            <div>
              <label className="sm:block mb-2 text-lg font-medium md:text-base">
                Phone Number
              </label>
              <input
                type="tel"
                className="w-full px-3 py-2 rounded-xl bg-[#171717] border border-[#292929] text-white placeholder-[#838183] lg:py-3"
                placeholder="Phone"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="sm:block mb-2 text-lg font-medium md:text-base">
                Message
              </label>
              <textarea
                className="w-full px-3 py-2 rounded-xl bg-[#171717] border border-[#292929] text-white placeholder-[#838183] lg:py-3"
                rows="4"
                placeholder="Write here..."
              ></textarea>
            </div>
            <div className="mt-1 lg:mt-0">
              <button
                type="submit"
                className="bg-[#00aeef] hover:bg-[#33bef2] text-white text-lg font-bold py-4 px-16 rounded-full md:text-base md:py-3 lg:w-3/5 lg:py-2"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
