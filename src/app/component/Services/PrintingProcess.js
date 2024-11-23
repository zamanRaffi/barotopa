"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

const PrintingProcess = () => {
  return (
    <Swiper
      spaceBetween={-20}
      slidesPerView="auto"
      centeredSlides={false}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
    >
      {/* Slide 1 */}
      <SwiperSlide className="py-2 mb-10 px-6 w-full">
        <div className="bg-[#fff200] p-4 rounded-3xl text-black lg:flex">
          <div className="lg:py-6 lg:px-10">
            <h2 className="text-3xl font-bold mb-8 lg:text-5xl lg:mt-12">
              Printing Process
            </h2>
            <h3 className="text-2xl font-semibold mb-2 lg:text-4xl lg:mb-4 lg:mt-72">
              Pre-press
            </h3>
            <p className="text-xl mb-4 lg:text-2xl">
              (Compose, Art & Graphic Design)
            </p>
            <p className="text-lg mb-4 lg:w-10/12 lg:text-xl text-[#4d4d4d]">
              Simply let us know what all your required printed materials should
              look like! We are ready to provide you with any design solutions
              that will enhance your brand image in the competitive market. Our
              competent and innovative artists and designers are with you to
              materialize your dream comes true.
            </p>
          </div>

          {/* Image */}
          <div>
            {/* Image for small screens */}
            <div className="sm:block lg:hidden">
              <Image
                src="/0Z0A0029_(1).png"
                alt="Pre-press Image for Small Screens"
                width={301}
                height={192}
                className="rounded-lg mt-8 w-full"
              />
            </div>

            {/* Image for medium screens and above */}
            <div className="sm:hidden lg:block p-10">
              <Image
                src="/0Z0A0190.png"
                alt="Pre-press Image for Medium Screens and Above"
                width={789}
                height={690}
                className="rounded-lg w-screen"
              />
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide className="px-6 w-full">
        <div className="bg-[#00aeef] p-4 rounded-lg text-black lg:flex">
          <div className="lg:py-6 lg:px-10">
            <h2 className="text-3xl font-bold mb-8 lg:text-5xl lg:mt-12">
              Printing Process
            </h2>
            <h3 className="text-2xl font-semibold mb-2 lg:text-4xl lg:mb-4 lg:mt-72">
              Pre-press
            </h3>
            <p className="text-xl mb-4 lg:text-2xl">
              (Compose, Art & Graphic Design)
            </p>
            <p className="text-lg mb-4 lg:w-10/12 lg:text-xl text-[#4d4d4d]">
              Simply let us know what all your required printed materials should
              look like! We are ready to provide you with any design solutions
              that will enhance your brand image in the competitive market. Our
              competent and innovative artists and designers are with you to
              materialize your dream comes true.
            </p>
          </div>

          {/* Image */}
          <div>
            {/* Image for small screens */}
            <div className="sm:block lg:hidden">
              <Image
                src="/0Z0A0029_(1).png"
                alt="Pre-press Image for Small Screens"
                width={301}
                height={192}
                className="rounded-lg mt-8 w-full"
              />
            </div>

            {/* Image for medium screens and above */}
            <div className="sm:hidden lg:block p-10">
              <Image
                src="/0Z0A0190.png"
                alt="Pre-press Image for Medium Screens and Above"
                width={789}
                height={690}
                className="rounded-lg w-screen"
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default PrintingProcess;
