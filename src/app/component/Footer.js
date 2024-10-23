import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn } from 'react-icons/fa6';
import { LuArrowDownToLine, LuMapPin } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="text-white px-5 pt-10">
      <div className="container">

          {/* Logo section */}
          <div className="mb-6">
          <Image width={122} height={40} src="/Layer_1.png" alt="Barotopa Logo" />
        </div>

        <hr className=" mb-8 border-b-1 border-[#272727] w-[29rem]" />

        {/* Office section */}
        <div className="mb-8">
          <h2 className="text-lg mb-5">Office</h2>
          <address className="not-italic text-[#848484] text-sm underline">
            43, Shilpacharya Zainul Abedin Sarak, Shantinagar, <br />
            Dhaka-1217, Bangladesh
          </address>
        </div>

       <div className='flex justify-between'>
         {/* Quick links section */}
         <div className="mb-8">
          <h2 className="text-lg mb-4">Quick links</h2>
          <ul className="space-y-1 text-[#848484] text-sm">
            <li><Link href="#" className="hover:underline">Home</Link></li>
            <li><Link href="#" className="hover:underline">Services</Link></li>
            <li><Link href="#" className="hover:underline">Our Resources</Link></li>
            <li><Link href="#" className="hover:underline">Our Infrastructure</Link></li>
            <li><Link href="#" className="hover:underline">Accreditation</Link></li>
            <li><Link href="#" className="hover:underline">Contact Us</Link></li>
          </ul>
        </div>

        {/* PDF and Google Map buttons */}
        <div className="mb-8 text-xs text-[#848484]">

         
         <Link
            href="#"
            className="inline-flex items-center bg-[#171717] hover:bg-blue-600 hover:text-white py-4 px-4 rounded mb-4"
            download
          >
            <LuArrowDownToLine size={32} className="mr-2 bg-blue-400 text-white rounded-full py-1" />
           <div>
           <p>
            Company Deck
            </p>
             <p>
             PDF, 3 MB
             </p>
           </div>
          </Link>
         
         <br/>
         
          <Link
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-[#171717] hover:bg-blue-600 hover:text-white py-4 px-4 rounded"
          >
            <LuMapPin size={32} className="mr-2 bg-blue-400 text-white rounded-full py-1" />
         <div>
         <p>
           View on BPL
           </p>
            <p>
            Google Map
            </p>
         </div>
          </Link>
        </div>
       </div>

        {/* Phone and Email section */}
        <div className="mb-8 flex flex-row justify-between text-[#848484]">
          <div>
          <h2 className="text-lg text-white mb-4">Phone</h2>
          <p className='text-sm'>+88 01844520604</p>
          <p className='text-sm'>+88 01844650604</p>
          </div>

         <div>
         <h2 className="text-lg text-white mb-4">Email</h2>
         <p><Link href="mailto:info@barotopa.com.bd" className="hover:underline text-sm">info@barotopa.com.bd</Link></p>
         </div>
        </div>

        {/* Social media icons */}
        <div className="mb-8">
          <h2 className="text-lg">Social</h2>
          <div className="flex space-x-3 mt-6">
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 border rounded-full border-[#292929] bg-[#171717]">
              <FaFacebookF size={44} className='py-3' />
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 border rounded-full border-[#292929] bg-[#171717] ">
              <FaInstagram size={44} className='py-3' />
            </Link>
            <Link href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500 border rounded-full border-[#292929] bg-[#171717]">
              <FaXTwitter size={44} className='py-3' />
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 text- border rounded-full border-[#292929] bg-[#171717]">
              <FaLinkedinIn size={44} className='py-3'  />
            </Link>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="text-[#474747] text-xs">
        <hr className=" mb-6 border-b-1 border-[#272727] w-[29rem]" />
          <p>&copy; 2024 Barotopa Printers Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
