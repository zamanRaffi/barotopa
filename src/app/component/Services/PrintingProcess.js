'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';

const PrintingProcess = () => {
  return (
    <Swiper
      spaceBetween={-15} 
      slidesPerView="auto"
      centeredSlides={false}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
    >
      {/* Slide 1 */}
      <SwiperSlide className="px-6 w-full"> 
        <div className="bg-[#fff200] p-4 rounded-xl text-black">
          <h2 className="text-3xl font-bold mb-8">Printing Process</h2>
          <h3 className="text-2xl font-semibold mb-2">Pre-press</h3>
          <p className="text-xl font-semibold mb-4">
            (Compose, Art & Graphic Design)
          </p>
          <p className="text-md mb-4">
            Simply let us know what all your required printed materials should look like!
            We are ready to provide you with any design solutions that will enhance your brand
            image in the competitive market. Our competent and innovative artists and designers
            are with you to materialize your dream comes true.
          </p>
          <Image
            src="/0Z0A0029_(1).png"
            alt="Pre-press Image"
            width={301}
            height={192}
            className="rounded-lg mt-8 w-full"
          />
        </div>
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide className="px-6 w-full">
        <div className="bg-[#00aeef] p-4 rounded-lg text-black">
          <h2 className="text-3xl font-bold mb-8">Printing Process</h2>
          <h3 className="text-2xl font-semibold mb-2">Pre-press</h3>
          <p className="text-xl font-semibold mb-4">
            (Compose, Art & Graphic Design)
          </p>
          <p className="text-md mb-4">
            Simply let us know what all your required printed materials should look like!
            We are ready to provide you with any design solutions that will enhance your brand
            image in the competitive market. Our competent and innovative artists and designers
            are with you to materialize your dream comes true.
          </p>
          <Image
            src="/0Z0A0029_(1).png"
            alt="Pre-press Image"
            width={301}
            height={192}
            className="rounded-lg mt-8 w-full"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default PrintingProcess;
