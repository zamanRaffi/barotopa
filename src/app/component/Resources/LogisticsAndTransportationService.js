"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
const teamMembers = [
  { name: "Automatic Book Binding Machine", imgSrc: "/Transportation.png" },
  { name: "Automatic Book Binding Machine", imgSrc: "/Transportation.png" },
  { name: "Automatic Book Binding Machine", imgSrc: "/Transportation.png" },
  { name: "Automatic Book Binding Machine", imgSrc: "/Transportation.png" },
  { name: "Automatic Book Binding Machine", imgSrc: "/Transportation.png" },
  { name: "Automatic Book Binding Machine", imgSrc: "/Transportation.png" },
  { name: "Automatic Book Binding Machine", imgSrc: "/Transportation.png" },
];

const LogisticsAndTransportationService = () => {
  return (
    <div className="text-white py-12">
      <h2 className="text-4xl font-bold mb-6 px-4 md:text-center md:text-5xl md:mb-16">
        Logistics & Transportation <br className="md:hidden" /> Service
      </h2>

      {/* Desktop view - grid layout */}
      <div className="sm:hidden md:flex md:items-center md:px-14">
        {/* 1st card */}
        <div className="w-1/2 mb-4 px-10 mb-12">
          <img src="/Transportation_1ForLs.png" className="w-[884px]" />
          <h2 className=" text-2xl mt-8 px-4">
            Automatic Book Binding Machine
          </h2>
        </div>

        {/* 2nd Card */}
        <div className="w-1/2 px-10 mb-12">
          <img src="/Transportation_2.png" className="w-[884px]" />
          <h2 className=" text-2xl mt-8 px-4">
            Web Printing Machine single color
          </h2>
        </div>
      </div>

      {/* Mobile view - Swiper slider */}
      <div className="md:hidden">
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
              style={{ width: "450px" }}
            >
              <img
                src={member.imgSrc}
                alt={member.name}
                className="w-full  object-cover"
              />
              <h3 className="text-md font-semibold mt-4">{member.name}</h3>
              <p className="text-[#797979]">{member.title}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default LogisticsAndTransportationService;
