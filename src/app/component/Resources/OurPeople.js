"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
const teamMembers = [
  {
    name: "lg. Abdullah Al Baki",
    title: "Managing Director",
    imgSrc: "/CorporatePortraits_1.png",
  },
  {
    name: "lg. Kawser Hasan",
    title: "Director, BPL",
    imgSrc: "/CorporatePortraits_1.png",
  },
  {
    name: "lg. Kawser Hasan",
    title: "Director, BPL",
    imgSrc: "/CorporatePortraits_1.png",
  },
  {
    name: "lg. Kawser Hasan",
    title: "Director, BPL",
    imgSrc: "/CorporatePortraits_1.png",
  },
  {
    name: "lg. Kawser Hasan",
    title: "Director, BPL",
    imgSrc: "/CorporatePortraits_1.png",
  },
  {
    name: "lg. Kawser Hasan",
    title: "Director, BPL",
    imgSrc: "/CorporatePortraits_1.png",
  },
  {
    name: "lg. Kawser Hasan",
    title: "Director, BPL",
    imgSrc: "/CorporatePortraits_1.png",
  },
  {
    name: "lg. Kawser Hasan",
    title: "Director, BPL",
    imgSrc: "/CorporatePortraits_1.png",
  },
  {
    name: "lg. Kawser Hasan",
    title: "Director, BPL",
    imgSrc: "/CorporatePortraits_1.png",
  },
];

const OurPeople = () => {
  return (
    <div className="text-white py-12 ">
      <h2
        className="text-4xl text-[#00aeff] font-bold mb-6 px-5 
        md:text-center md:text-4xl
            md:mb-10 lg:text-center lg:text-5xl
            lg:mb-16"
      >
        Our People
      </h2>

      {/* Desktop view - grid layout */}
      <div className="sm:hidden md:flex lg:flex px-20 ">
        <Swiper
          spaceBetween={-25}
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
              className="w-72 p-4 rounded-lg md:odd:pt-7 md:p-0 lg:odd:pt-10"
              style={{ width: "390px" }}
            >
              <img
                src={member.imgSrc}
                alt={member.name}
                className="w-full object-cover rounded-2xl md:w-10/12"
              />
              <h3 className="text-xl font-semibold ">{member.name}</h3>
              <p className="text-[#797979]">{member.title}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Mobile view - Swiper slider */}
      <div className="md:hidden lg:hidden">
        <Swiper
          spaceBetween={-10}
          slidesPerView="auto"
          centeredSlides={false}
          loop={true}
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
              style={{ width: "320px" }}
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

export default OurPeople;
