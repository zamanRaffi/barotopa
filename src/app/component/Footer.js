import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn } from 'react-icons/fa6';
import { LuArrowDownToLine, LuMapPin } from "react-icons/lu";

const Footer = () => {
  return (
    <footer id="footer" className="text-white px-5 md:px-12 md:text-xl">

     

      {/* Logo section */}
      <div className="mb-6">
        <Image width={180} height={40} src="/Layer_1.png" alt="Barotopa Logo" />
      </div>

      <hr className="mb-8 border-b-1 border-[#272727] w-full" />




      <div className="grid gap-4 mb-4 md:grid-cols-4 md:mb-0 md:pt-10 md:auto-rows-min">
  
  {/* Office section */}
  <div className="md:order-1 md:h-36 md:border md:border-red-600">
    <h2 className="text-md mb-5 md:text-2xl">Office</h2>
    <address className="not-italic text-[#848484] text-base md:text-xl underline">
      43, Shilpacharya Zainul Abedin <br /> Sarak, Shantinagar, <br />
      Dhaka-1217, Bangladesh
    </address>
  </div>

  {/* Quick links and PDF/Map buttons */}
  <div className="flex justify-between md:col-span-2 mt-7 md:order-3 md:mt-0 md:px-5">
    {/* Quick links */}
    <div>
      <h2 className="text-md mb-4 md:text-2xl">Quick links</h2>
      <ul className="space-y-1 text-[#848484] text-base md:text-xl">
        <li><Link href="#" className="hover:underline">Home</Link></li>
        <li><Link href="#" className="hover:underline">Services</Link></li>
        <li><Link href="#" className="hover:underline">Our Resources</Link></li>
        <li><Link href="#" className="hover:underline">Our Infrastructure</Link></li>
        <li><Link href="#" className="hover:underline">Accreditation</Link></li>
        <li><Link href="#" className="hover:underline">Contact Us</Link></li>
      </ul>
    </div>

    {/* PDF and Google Map buttons */}
    <div className="text-base text-[#848484] md:text-md mt-4">
      <Link
        href="#"
        target="_blank"
        className="flex items-center bg-[#171717] hover:bg-[#33bef2] hover:text-white py-4 px-4 rounded-md mb-4 md:px-16"
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
        className="flex items-center bg-[#171717] hover:bg-[#33bef2] hover:text-white py-4 px-4 rounded-md md:px-16"
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
  <div className="sm:flex sm:justify-between md:block text-[#848484] mt-7 md:mt-0 md:order-2">
    <div className="text-base md:mb-28 md:text-xl">
      <h2 className="text-md text-white mb-4 md:text-2xl md:mb-2">Phone</h2>
      <p>+88 01844520604</p>
      <p>+88 01844650604</p>
    </div>

    <div className="text-base md:text-xl">
      <h2 className="text-md text-white mb-4 md:text-2xl md:mb-2">Email</h2>
      <p><Link href="mailto:info@barotopa.com.bd" className="hover:underline">info@barotopa.com.bd</Link></p>
    </div>
  </div>


  {/* Social media icons */}
  <div className="text-sm mt-7 md:order-3 md:text-md md:h-24 md:mt-0 md:border md:border-red-600">
    <h2 className="text-md md:text-2xl md:mb-5">Social</h2>
    <div className="flex space-x-3 mt-2 md:mt-0">
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
        <hr className="mb-6 border-b-1 border-[#272727] w-[29rem] md:w-full" />
        <p className="mb-4 text-sm md:text-xl">&copy; 2024 Barotopa Printers Ltd. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
