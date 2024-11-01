import React from "react";
import Link from "next/link";
import {
  FaComments,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

const ContactCards = () => {
  return (
    <div className="text-white py-12 px-6 md:mb-20">
      <div className="grid grid-cols-1 w-full md:grid-cols-4 md:w-11/12 md:mx-auto">
        {/* Card 1 */}
        <div className="bg-[#171717] px-6 py-6 mb-5 rounded-3xl w-full md:w-[402px] md:h-[300px]">
          <FaComments size={72} className="mb-6" />
          <h3 className="text-2xl font-semibold px-4">Chat to sales</h3>
          <p className="text-[#797979] text-lg mb-6 px-4">
            Speak to our friendly team
          </p>
          <Link
            href="mailto:info@barotopa.com.bd"
            className="inline-block mt-4 py-4 w-full text-center text-white rounded-full bg-[#1f1f1f]/80 hover:bg-[#00aeef] shadow-inner-button"
          >
            info@barotopa.com.bd
          </Link>
        </div>

        {/* Card 2 */}
        <div className="bg-[#171717] px-6 py-6 mb-5 rounded-3xl w-full md:w-[402px] md:h-[300px]">
          <FaEnvelope size={72} className="mb-6" />
          <h3 className="text-2xl font-semibold px-4">Chat to support</h3>
          <p className="text-[#797979] text-lg mb-6 px-4">
            Speak to our friendly team
          </p>
          <Link
            href="mailto:info@barotopa.com.bd"
            className="inline-block mt-4 py-4 w-full text-center text-white rounded-full bg-[#1f1f1f]/80 hover:bg-[#00aeef] shadow-inner-button"
          >
            info@barotopa.com.bd
          </Link>
        </div>

        {/* Card 3 */}
        <div className="bg-[#171717] px-6 py-6 mb-5 rounded-3xl w-full md:w-[402px] md:h-[300px]">
          <FaMapMarkerAlt size={72} className="mb-6" />
          <h3 className="text-2xl font-semibold px-4">Find Us</h3>
          <p className="text-[#797979] text-lg mb-6 px-4">
            Speak to our friendly team
          </p>
          <Link
            href="mailto:info@barotopa.com.bd"
            className="inline-block mt-4 py-4 w-full text-center text-white rounded-full bg-[#1f1f1f]/80 hover:bg-[#00aeef] shadow-inner-button"
          >
            info@barotopa.com.bd
          </Link>
        </div>

        {/* Card 4 */}
        <div className="bg-[#171717] px-6 py-6 mb-5 rounded-3xl w-full md:w-[402px] md:h-[300px]">
          <FaPhone size={72} className="mb-6" />
          <h3 className="text-2xl font-semibold px-4">Call us</h3>
          <p className="text-[#797979] text-lg mb-6 px-4">
            Speak to our friendly team
          </p>
          <Link
            href="tel:+8801844562064"
            className="inline-block mt-4 py-4 w-full text-center text-white rounded-full bg-[#1f1f1f]/80 hover:bg-[#00aeef] shadow-inner-button"
          >
            +88 01844562064
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactCards;
