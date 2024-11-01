"use client";
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const teamMembers = [
  {
    name: "Automatic Book Binding Machine",
    imgSrc: "/GraphicsConsultancy.png",
  },
  {
    name: "Automatic Book Binding Machine",
    imgSrc: "/HowToCreateYourOwnCustomPrintedBoxesToDisplayYourProducts_.png",
  },
  {
    name: "Automatic Book Binding Machine",
    imgSrc: "/GraphicsConsultancy.png",
  },
  {
    name: "Automatic Book Binding Machine",
    imgSrc: "/HowToCreateYourOwnCustomPrintedBoxesToDisplayYourProducts_.png",
  },
  {
    name: "Automatic Book Binding Machine",
    imgSrc: "/GraphicsConsultancy.png",
  },
  {
    name: "Automatic Book Binding Machine",
    imgSrc: "/HowToCreateYourOwnCustomPrintedBoxesToDisplayYourProducts_.png",
  },
];

const GraphicsDesignConsultancy = () => {
  return (
    <div className="text-white py-12">
      <h2 className="text-4xl font-bold mb-6 px-4 md:text-center md:text-5xl md:mb-16">
        Graphics Design Consultancy
      </h2>

      {/* Desktop view - grid layout */}
      <div className="sm:hidden md:flex md:items-center md:px-14">
        {/* 1st card */}
        <div className="w-1/2 mb-4 px-10 mb-12">
          <img src="/GraphicsConsultancy.png" className="w-[860px]" />

          <h2 className=" text-3xl mt-8 px-4">
            Printing and typesetting industry.
          </h2>
          <div className="flex justify-between items-center px-4">
            <p className="w-3/5 text-[#797979] text-md mt-5">
              A proof (sample) of the final design is provided to the customer
              for approval before mass production. Any corrections or...
            </p>
            <Link
              href="#footer"
              className="bg-[#00aeef] text-white px-6 py-2 rounded-full hover:text-black hover:bg-[#33bef2]"
            >
              Read More
            </Link>
          </div>
        </div>
        {/* 2nd Card */}
        <div className="w-1/2 px-10 mb-12">
          <img
            src="/HowToCreateYourOwnCustomPrintedBoxesToDisplayYourProducts_.png"
            className="w-[860px]"
          />
          <h2 className=" text-3xl mt-8 px-4">
            Printing and typesetting industry.
          </h2>
          <div className="flex justify-between items-center px-4">
            <p className="w-3/5 text-[#797979] text-md mt-5">
              A proof (sample) of the final design is provided to the customer
              for approval before mass production. Any corrections or...
            </p>
            <Link
              href="#footer"
              scroll={true}
              className="bg-[#00aeef] text-white px-6 py-2 rounded-full hover:text-black hover:bg-[#33bef2]"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
      {/* Mobile view - Swiper slider */}
      <div className="lg:hidden px-">
        <Swiper
          spaceBetween={-10}
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

export default GraphicsDesignConsultancy;
