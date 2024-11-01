"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const teamMembers = [
  {
    name: "Climateshot Investores Coalition",
    title:
      "Exploring the climate and cost- of-living crises through food waste and community",
    imgSrc: "/PeakSocialTonics.png",
  },
  {
    name: "Climateshot Investores Coalition",
    title:
      "Exploring the climate and cost- of-living crises through food waste and community",
    imgSrc: "/TràSữaHòaTanWINGS-BlackMilkTea.png",
  },
  {
    name: "Climateshot Investores Coalition",
    title:
      "Exploring the climate and cost- of-living crises through food waste and community",
    imgSrc: "/CloudNine_Bold,ModernPeriodBranding.png",
  },
  {
    name: "Climateshot Investores Coalition",
    title:
      "Exploring the climate and cost- of-living crises through food waste and community",
    imgSrc: "/TANGERINEANDYOU.png",
  },
];

const Packaging = () => {
  return (
    <div className="text-white py-12">
      <h2 className="text-4xl font-bold mb-6 px-4 md:text-center md:text-5xl md:mb-12">
        Packaging
      </h2>

      {/* Desktop view - grid layout */}
      <div className="sm:hidden md:flex md:flex-wrap md:items-center md:px-14">
        {/* 1st card */}
        <div className="w-1/2 px-10 mb-12">
          <img src="/PeakSocialTonics.png" className="w-[860px]" />
          <div className="flex px-5">
            <h2 className="w-1/2 text-2xl mt-2">
              Climateshot Investores <br />
              Coalition
            </h2>
            <p className="w-1/2 text-[#797979] text-lg mt-2">
              Exploring the climate and cost- of-living crises through food
              waste and community
            </p>
          </div>
        </div>

        {/* 2nd card */}
        <div className="w-1/2 px-10 mb-12">
          <img
            src="/TràSữaHòaTanWINGS-BlackMilkTea.png"
            className="w-[860px]"
          />
          <div className="flex px-5">
            <h2 className="w-1/2 text-2xl mt-2">
              Climateshot Investores <br />
              Coalition
            </h2>
            <p className="w-1/2 text-[#797979] text-lg mt-2">
              Exploring the climate and cost- of-living crises through food
              waste and community
            </p>
          </div>
        </div>

        {/* 3rd card card */}
        <div className="w-1/2 px-10">
          <img
            src="/CloudNine_Bold,ModernPeriodBranding.png"
            className="w-[860px]"
          />
          <div className="flex px-5">
            <h2 className="w-1/2 text-2xl mt-2">
              Climateshot Investores <br />
              Coalition
            </h2>
            <p className="w-1/2 text-[#797979] text-lg mt-2">
              Exploring the climate and cost- of-living crises through food
              waste and community
            </p>
          </div>
        </div>

        {/* 4rd card */}
        <div className="w-1/2 px-10 ">
          <img src="/TANGERINEANDYOU.png" className="w-[860px]" />
          <div className="flex px-5">
            <h2 className="w-1/2 text-2xl mt-2">
              Climateshot Investores <br />
              Coalition
            </h2>
            <p className="w-1/2 text-[#797979] text-lg mt-2">
              Exploring the climate and cost- of-living crises through food
              waste and community
            </p>
          </div>
        </div>
      </div>

      {/* Mobile view - Swiper slider */}
      <div className="md:hidden">
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
          {teamMembers.map((member, index) => (
            <SwiperSlide
              key={index}
              className="p-4 rounded-lg w-full"
              style={{ width: "430px" }}
            >
              <img
                src={member.imgSrc}
                alt={member.name}
                className="w-full  object-cover"
              />
              <h3 className="text-md font-bold mt-4">{member.name}</h3>
              <p className="text-[#797979] text-sm mt-2">{member.title}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Packaging;
