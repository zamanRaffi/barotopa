import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn } from 'react-icons/fa6';
import { LuArrowDownToLine, LuMapPin } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="text-white px-5 lg:px-12 lg:text-xl">

     

      {/* Logo section */}
      <div className="mb-6">
        <Image width={122} height={40} src="/Layer_1.png" alt="Barotopa Logo" />
      </div>

      <hr className="mb-8 border-b-1 border-[#272727] w-full" />




      <div className="grid gap-4 mb-4 lg:grid-cols-4 lg:mb-0 lg:pt-10 lg:auto-rows-min">
  
  {/* Office section */}
  <div className="lg:order-1 lg:h-36 lg:border lg:border-red-600">
    <h2 className="text-lg mb-5 lg:text-2xl">Office</h2>
    <address className="not-italic text-[#848484] text-sm lg:text-xl underline">
      43, Shilpacharya Zainul Abedin <br /> Sarak, Shantinagar, <br />
      Dhaka-1217, Bangladesh
    </address>
  </div>

  {/* Quick links and PDF/Map buttons */}
  <div className="flex justify-between lg:col-span-2 mt-7 lg:order-3 lg:mt-0 lg:px-5">
    {/* Quick links */}
    <div>
      <h2 className="text-lg mb-4 lg:text-2xl">Quick links</h2>
      <ul className="space-y-1 text-[#848484] text-sm lg:text-xl">
        <li><Link href="#" className="hover:underline">Home</Link></li>
        <li><Link href="#" className="hover:underline">Services</Link></li>
        <li><Link href="#" className="hover:underline">Our Resources</Link></li>
        <li><Link href="#" className="hover:underline">Our Infrastructure</Link></li>
        <li><Link href="#" className="hover:underline">Accreditation</Link></li>
        <li><Link href="#" className="hover:underline">Contact Us</Link></li>
      </ul>
    </div>

    {/* PDF and Google Map buttons */}
    <div className="text-xs text-[#848484] lg:text-lg mt-4">
      <Link
        href="#"
        target="_blank"
        className="flex items-center bg-[#171717] hover:bg-[#33bef2] hover:text-white py-4 px-4 rounded-lg mb-4 lg:px-16"
        download
      >
        <LuArrowDownToLine size={32} className="mr-2 bg-[#00aeef]  text-white rounded-full py-1" />
        <div>
          <p>Company Deck</p>
          <p>PDF, 3 MB</p>
        </div>
      </Link>

      <Link
        href="https://www.google.com/maps"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center bg-[#171717] hover:bg-[#33bef2] hover:text-white py-4 px-4 rounded-lg lg:px-16"
      >
        <LuMapPin size={32} className="mr-2 bg-[#00aeef] text-white rounded-full py-1" />
        <div>
          <p>View on BPL</p>
          <p>Google Map</p>
        </div>
      </Link>
    </div>
  </div>

  {/* Phone and Email section */}
  <div className="sm:flex sm:justify-between lg:block text-[#848484] mt-7 lg:mt-0 lg:order-2">
    <div className="text-sm lg:mb-28 lg:text-xl">
      <h2 className="text-lg text-white mb-4 lg:text-2xl lg:mb-2">Phone</h2>
      <p>+88 01844520604</p>
      <p>+88 01844650604</p>
    </div>

    <div className="text-sm lg:text-xl">
      <h2 className="text-lg text-white mb-4 lg:text-2xl lg:mb-2">Email</h2>
      <p><Link href="mailto:info@barotopa.com.bd" className="hover:underline">info@barotopa.com.bd</Link></p>
    </div>
  </div>


  {/* Social media icons */}
  <div className="text-sm mt-7 lg:order-3 lg:text-lg lg:h-24 lg:mt-0 lg:border lg:border-red-600">
    <h2 className="text-lg lg:text-2xl lg:mb-5">Social</h2>
    <div className="flex space-x-3 mt-2 lg:mt-0">
      <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 border rounded-full border-[#292929] bg-[#171717]">
        <FaFacebookF size={40} className="py-3" />
      </Link>
      <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 border rounded-full border-[#292929] bg-[#171717]">
        <FaInstagram size={40} className="py-3" />
      </Link>
      <Link href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500 border rounded-full border-[#292929] bg-[#171717]">
        <FaXTwitter size={40} className="py-3" />
      </Link>
      <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 border rounded-full border-[#292929] bg-[#171717]">
        <FaLinkedinIn size={40} className="py-3" />
      </Link>
    </div>
  </div>
</div>


      

      {/* Footer bottom */}
      <div className="text-[#474747]">
        <hr className="mb-6 border-b-1 border-[#272727] w-[29rem] lg:w-full" />
        <p className="mb-4 text-sm lg:text-xl">&copy; 2024 Barotopa Printers Ltd. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
