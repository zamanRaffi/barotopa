import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";
import { LuArrowDownToLine, LuMapPin } from "react-icons/lu";

const Footer = () => {
  return (
    <footer id="footer" className="text-white px-5 md:px-12 lg:px-12 py-10">
      {/* Logo section */}
      <div className="mb-6 text-center md:text-left lg:text-left">
        <Image width={180} height={40} src="/Layer_1.png" alt="Barotopa Logo" />
      </div>

      <hr className="mb-8 border-b-1 border-[#272727] w-full" />

      <div className="grid gap-4 mb-8 md:grid-cols-4 md:gap-10 md:pt-10 lg:grid-cols-3 lg:gap-10 lg:pt-10">
        <div>
          <div>
            {/* Office section */}
            <h2 className="text-lg mb-5 font-semibold lg:text-2xl">Office</h2>
            <address className="not-italic text-[#848484] text-base lg:text-md lg:text-lg underline">
              43, Shilpacharya Zainul Abedin <br /> Sarak, Shantinagar, <br />
              Dhaka-1217,Bangladesh
            </address>
          </div>
          
          {/* Social media icons */}
          <div className="mt-6 order-1 md:mt-11 md:border-none lg:mt-12 lg:border-none sm:hidden md:block lg:block">
  <h2 className="text-lg lg:text-2xl font-semibold mb-5">Social</h2>
  <div className="flex space-x-5 md:space-x-1">
    <Link
      href="https://facebook.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaFacebookF
        className="p-2 hover:text-blue-500 border rounded-full border-[#292929] bg-[#171717] text-4xl lg:text-5xl"
      />
    </Link>
    <Link
      href="https://instagram.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaInstagram
        className="p-2 hover:text-pink-500 border rounded-full border-[#292929] bg-[#171717] text-4xl lg:text-5xl"
      />
    </Link>
    <Link
      href="https://x.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaXTwitter
        className="p-2 hover:text-gray-500 border rounded-full border-[#292929] bg-[#171717] text-4xl lg:text-5xl"
      />
    </Link>
    <Link
      href="https://linkedin.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaLinkedinIn
        className="p-2 hover:text-blue-700 border rounded-full border-[#292929] bg-[#171717] text-4xl lg:text-5xl"
      />
    </Link>
  </div>
</div>

        </div>

        {/* Quick links and PDF/Map buttons */}
        <div className="flex justify-between mt-7 md:order-3 md:px-0 md:mt-0 lg:order-3 lg:px-5 lg:mt-0">
          <div>
            <h2 className="text-lg mb-4 lg:text-2xl font-semibold">
              Quick links
            </h2>
            <ul className="space-y-2 text-[#848484] text-base md:text-md lg:text-lg">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/Services" className="hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/Resources" className="hover:underline">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/Infrastructure" className="hover:underline">
                  Infrastructure
                </Link>
              </li>
              <li>
                <Link href="/Accreditation" className="hover:underline">
                  Accreditation
                </Link>
              </li>
              <li>
                <Link  href="/ContactUs" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4 md:hidden">
            <Link
              href="#"
              target="_blank"
              className="flex items-center bg-[#171717] hover:bg-[#33bef2] text-white py-3 px-4 rounded-lg"
              download
            >
              <LuArrowDownToLine
                size={32}
                className="mr-3 bg-[#00aeef] text-white rounded-full p-1"
              />
              <div>
                <p className="font-semibold md:text-sm">Company Deck</p>
                <p className="text-sm">PDF, 3 MB</p>
              </div>
            </Link>

            <Link
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-[#171717] hover:bg-[#33bef2] text-white py-3 px-4 rounded-lg"
            >
              <LuMapPin
                size={32}
                className="mr-3 bg-[#00aeef] text-white rounded-full p-1"
              />
              <div>
                <p className="font-semibold md:text-sm">View on BPL</p>
                <p className="text-sm">Google Map</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Phone and Email section */}
        <div className="flex justify-between md:block lg:block text-[#848484] mt-7 md:mt-0 md:order-2 lg:mt-0 lg:order-2">
          <div className="text-base md:mb-24 md:text-md lg:mb-20 lg:text-lg">
            <h2 className="text-lg text-white font-semibold mb-4 md:mb-4 lg:text-2xl lg:mb-2">
              Phone
            </h2>
            <p>+88 01844520604</p>
            <p>+88 01844650604</p>
          </div>

          <div className="text-base lg:text-lg lg:mt-4">
            <h2 className="text-lg text-white font-semibold mb-4 md:mb-4 lg:text-2xl lg:mb-2">
              Email
            </h2>
            <p>
              <Link
                href="mailto:info@barotopa.com.bd"
                className="hover:underline"
              >
                info@barotopa.com.bd
              </Link>
            </p>
          </div>
        </div>

          {/* Social media icons */}
          <div className="mt-5 text-base sm:block md:hidden lg:hidden">
            <h2 className="text-lg text-white font-semibold mb-4">Social</h2>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 border rounded-full border-[#292929] bg-[#171717]"
              >
                <FaFacebookF size={36} className="p-2" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 border rounded-full border-[#292929] bg-[#171717]"
              >
                <FaInstagram size={36} className="p-2" />
              </Link>
              <Link
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-500 border rounded-full border-[#292929] bg-[#171717]"
              >
                <FaXTwitter size={36} className="p-2" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700 border rounded-full border-[#292929] bg-[#171717]"
              >
                <FaLinkedinIn size={36} className="p-2" />
              </Link>
            </div>
          </div>

              
          {/* PDF/Map buttons? */}
          <div className="space-y-4 sm:hidden md:block lg:hidden order-4">
            <Link
              href="#"
              target="_blank"
              className="flex items-center bg-[#171717] hover:bg-[#33bef2] text-white py-3 px-4 rounded-lg"
              download
            >
              <LuArrowDownToLine
                size={32}
                className="mr-3 bg-[#00aeef] text-white rounded-full p-1"
              />
              <div>
                <p className="font-semibold md:text-sm">Company Deck</p>
                <p className="text-sm">PDF, 3 MB</p>
              </div>
            </Link>

            <Link
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-[#171717] hover:bg-[#33bef2] text-white py-3 px-4 rounded-lg"
            >
              <LuMapPin
                size={32}
                className="mr-3 bg-[#00aeef] text-white rounded-full p-1"
              />
              <div>
                <p className="font-semibold md:text-sm">View on BPL</p>
                <p className="text-sm">Google Map</p>
              </div>
            </Link>
          </div>


      </div>

      {/* Footer bottom */}
      <div className="text-[#474747] mt-8">
        <hr className="mb-6 border-b-1 border-[#272727]" />
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <p className="mb-4 lg:mb-0 text-sm lg:text-lg">
            &copy; 2024 Barotopa Printers Ltd. All Rights Reserved.
          </p>
          <p className="text-sm lg:text-lg sm:hidden">Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
