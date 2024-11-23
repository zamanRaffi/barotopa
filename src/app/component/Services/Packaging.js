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
    <div className="text-white px-6 lg:px-44 lg:py-20 mb-10">
      <h2 className="text-4xl text-[#00aeff] font-bold mb-6 px-4 md:text-5xl lg:text-center lg:text-7xl lg:mb-16">
        Packaging
      </h2>

      {/* Desktop view - grid layout */}
      <div className="sm:hidden md:flex md:flex-wrap md:items-center lg:flex lg:flex-wrap lg:items-center lg:px-14">
        {/* 1st card */}
        <div className="w-6/12 px-2 mb-5 lg:w-1/2 lg:px-10 lg:mb-12">
          <img src="/PeakSocialTonics.png" className="w-[860px]" />
          <div className="flex px-2 mt-2 lg:px-5">
            <h2 className="w-3/4  lg:w-1/2 lg:text-2xl">
              Climateshot Investores <br />
              Coalition
            </h2>
            <p className="text-[#797979] w-3/5 text-sm lg:w-1/2 lg:text-lg ">
              Exploring the climate and cost- of-living crises through food
              waste and community
            </p>
          </div>
        </div>

        {/* 2nd card */}
        <div className="w-6/12 px-2 mb-5 lg:w-1/2 lg:px-10 lg:mb-12">
          <img
            src="/TràSữaHòaTanWINGS-BlackMilkTea.png"
            className="w-[860px]"
          />
           <div className="flex px-2 mt-2 lg:px-5">
            <h2 className="w-3/4  lg:w-1/2 lg:text-2xl">
              Climateshot Investores <br />
              Coalition
            </h2>
            <p className="text-[#797979] w-3/5 text-sm lg:w-1/2 lg:text-lg ">
              Exploring the climate and cost- of-living crises through food
              waste and community
            </p>
          </div>
        </div>

        {/* 3rd card card */}
        <div className="w-6/12 px-2 lg:w-1/2 lg:px-10">
          <img
            src="/CloudNine_Bold,ModernPeriodBranding.png"
            className="w-[860px]"
          />
           <div className="flex px-2 mt-2 lg:px-5">
            <h2 className="w-3/4  lg:w-1/2 lg:text-2xl">
              Climateshot Investores <br />
              Coalition
            </h2>
            <p className="text-[#797979] w-3/5 text-sm lg:w-1/2 lg:text-lg ">
              Exploring the climate and cost- of-living crises through food
              waste and community
            </p>
          </div>
        </div>

        {/* 4rd card */}
        <div className="w-6/12 px-2 lg:w-1/2 lg:px-10">
          <img src="/TANGERINEANDYOU.png" className="w-[860px]" />
          <div className="flex px-2 mt-2 lg:px-5">
            <h2 className="w-3/4  lg:w-1/2 lg:text-2xl">
              Climateshot Investores <br />
              Coalition
            </h2>
            <p className="text-[#797979] w-3/5 text-sm lg:w-1/2 lg:text-lg ">
              Exploring the climate and cost- of-living crises through food
              waste and community
            </p>
          </div>
        </div>
      </div>

      {/* Mobile view - Swiper slider */}
      <div className="md:hidden lg:hidden">
        <Swiper
          spaceBetween={-7}
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
              style={{ width: "410px" }}
            >
              <img
                src={member.imgSrc}
                alt={member.name}
                className="w-full  object-cover"
              />
              <h3 className="text-lg font-bold mt-4">{member.name}</h3>
              <p className="text-[#797979] text-sm mt-2">{member.title}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Packaging;
