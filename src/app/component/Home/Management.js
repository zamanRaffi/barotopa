'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
const teamMembers = [
    { name: "Md. Abdullah Al Baki", title: "Managing Director", imgSrc: "/CorporatePortraits_1.png" },
    { name: "Md. Kawser Hasan", title: "Director, BPL", imgSrc: "/CorporatePortraits_1.png" },
    { name: "Md. Kawser Hasan", title: "Director, BPL", imgSrc: "/CorporatePortraits_1.png" },
    { name: "Md. Kawser Hasan", title: "Director, BPL", imgSrc: "/CorporatePortraits_1.png" },
    { name: "Md. Kawser Hasan", title: "Director, BPL", imgSrc: "/CorporatePortraits_1.png" },
    { name: "Md. Kawser Hasan", title: "Director, BPL", imgSrc: "/CorporatePortraits_1.png" },
    { name: "Md. Kawser Hasan", title: "Director, BPL", imgSrc: "/CorporatePortraits_1.png" },
    { name: "Md. Kawser Hasan", title: "Director, BPL", imgSrc: "/CorporatePortraits_1.png" },
    { name: "Md. Kawser Hasan", title: "Director, BPL", imgSrc: "/CorporatePortraits_1.png" },
    { name: "Md. Kawser Hasan", title: "Director, BPL", imgSrc: "/CorporatePortraits_1.png" },
    { name: "Md. Kawser Hasan", title: "Director, BPL", imgSrc: "/CorporatePortraits_1.png" },
    { name: "Md. Kawser Hasan", title: "Director, BPL", imgSrc: "/CorporatePortraits_1.png" },
];

const Management = () => {
    return (
        <div className="text-white py-12 ">
            <h2 className="text-4xl font-bold mb-6 px-5 md:text-center md:text-5xl
            md:mb-16">Our Management</h2>

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
        className="w-72 p-4 rounded-lg odd:pt-12"
        style={{ width: '390px' }}
      > 
        <img src={member.imgSrc} alt={member.name} className="w-full object-cover rounded-2xl" />
        <h3 className="text-xl font-semibold ">{member.name}</h3>
        <p className="text-[#797979]">{member.title}</p>
      </SwiperSlide>
      
    ))}
  </Swiper>
</div>


            {/* Mobile view - Swiper slider */}
            <div className="lg:hidden">
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
                            style={{ width: '320px' }} // Controls the width of each slide
                        >
                            <img src={member.imgSrc} alt={member.name} className="w-full  object-cover" />
                            <h3 className="text-md font-semibold mt-4">{member.name}</h3>
                            <p className="text-[#797979]">{member.title}</p>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Management;
