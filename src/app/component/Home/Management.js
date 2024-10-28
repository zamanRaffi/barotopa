'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

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
];

const Management = () => {
    return (
        <div className="text-white py-12">
            <h2 className="text-4xl font-bold mb-6 px-5">Our Management</h2>

            {/* Desktop view - grid layout */}
            <div className="sm:hidden lg:flex space-x-8">
                {teamMembers.map((member, index) => (
                    <div key={index} className="w-64 p-4 rounded-lg">
                        <img src={member.imgSrc} alt={member.name} className="w-full h-72 object-cover rounded-t-lg" />
                        <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
                        <p className="text-[#797979]">{member.title}</p>
                    </div>
                ))}
            </div>

            {/* Mobile view - Swiper slider */}
            <div className="lg:hidden px-">
                <Swiper
                    spaceBetween={-10} // Adds space between slides
                    slidesPerView="auto" // Allows custom width for each slide
                    centeredSlides={false} // Disables centering of slides
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
