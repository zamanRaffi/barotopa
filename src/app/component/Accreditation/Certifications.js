"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
const teamMembers = [
  {
    imgSrc: "/Frame 1171277593.png",
  },
  {
    imgSrc: "/certificationsimage_1.png",
  },
  {
    imgSrc: "/Frame 1171277593.png",
  },
  {
    imgSrc: "/certificationsimage_1.png",
  },
  {
    imgSrc: "/Frame 1171277593.png",
  },
  {
    imgSrc: "/certificationsimage_1.png",
  },
  {
    imgSrc: "/Frame 1171277593.png",
  },
  {
    imgSrc: "/certificationsimage_1.png",
  },
  {
    imgSrc: "/Frame 1171277593.png",
  },
];

const Certifications  = () => {
  return (
    <div className="text-white py-12">
      <h2
        className="text-4xl text-[#00aeef] font-bold mb-6 px-5 lg:text-center lg:text-5xl
            lg:mb-16"
      >
        Certifications
      </h2>

      {/* Desktop view - grid layout */}
      <div className="sm:hidden lg:flex px-20  ">
        <Swiper
          spaceBetween={-5}
          slidesPerView="auto"
          centeredSlides={false}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide
              key={index}
              className="w-72 p-4 rounded-lg "
              style={{ width: "620.35px" }}
            >
              <img
                src={member.imgSrc}
                alt={member.name}
                className="w-full object-cover rounded-2xl"
              />
              <h3 className="text-xl font-semibold ">{member.name}</h3>
              <p className="text-[#797979]">{member.title}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Mobile view - Swiper slider */}
      <div className="lg:hidden px-">
        <Swiper
          spaceBetween={-10}
          slidesPerView="auto"
          centeredSlides={false}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide
              key={index}
              className="p-4 rounded-lg"
              style={{ width: "320px" }} // Controls the width of each slide
            >
              <img
                src={member.imgSrc}
                alt={member.name}
                className="w-full  object-cover"
              />
              <h3 className="text-lg font-semibold mt-4">{member.name}</h3>
              <p className="text-[#797979]">{member.title}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Certifications;
