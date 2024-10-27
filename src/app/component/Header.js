'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div className="bg-[rgba(29,29,29,0.5)] text-white w-full">
      <header className="p-6 flex justify-between items-center">
        <Image width={150} height={150} src="/Layer_1.png" alt="Barotopa Logo" className="h-12" />

       
      {/* Mobile Menu Button */}
      <nav className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white px-4 py-2 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50">
              <path d="M 3 9 A 1.0001 1.0001 0 1 0 3 11 L 47 11 A 1.0001 1.0001 0 1 0 47 9 L 3 9 z M 3 24 A 1.0001 1.0001 0 1 0 3 26 L 47 26 A 1.0001 1.0001 0 1 0 47 24 L 3 24 z M 3 39 A 1.0001 1.0001 0 1 0 3 41 L 47 41 A 1.0001 1.0001 0 1 0 47 39 L 3 39 z" fill="currentColor" />
            </svg>
          </button>
        </nav>

        {/* Desktop Menu Links */}
        <nav className="sm:hidden md:flex space-x-8 items-center">
          <Link href="/" className="hover:text-[#797979]">Home</Link>
          <div className="relative group">
            <Link href="/Services" className="hover:text-[#797979]">Services</Link>
            {/* Dropdown */}
            <div className="absolute left-0 hidden mt-2 w-40 bg-red-700 text-white py-2 rounded-md shadow-lg group-hover:block">
              <Link href="/service1" className="block px-4 py-2 hover:bg-gray-700">Service 1</Link>
              <Link href="/service2" className="block px-4 py-2 hover:bg-gray-700">Service 2</Link>
              <Link href="/service3" className="block px-4 py-2 hover:bg-gray-700">Service 3</Link>
            </div>
          </div>
          <Link href="/OurResources" className="hover:text-[#797979]">Our Resources</Link>
          <Link href="/Accreditation" className="hover:text-[#797979]">Accreditation</Link>
        </nav>
      </header>

         {/* Mobile Menu Links */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[rgba(29,29,29,0.9)] text-white p-4 flex flex-col space-y-4">
          <Link href="/" onClick={toggleMobileMenu} className="hover:text-[#797979]">Home</Link>
          <div>
            <Link href="/Services" className="hover:text-[#797979]">Services</Link>
            {/* Dropdown for Services */}
            <div className="ml-4 mt-2 flex flex-col space-y-2">
              <Link href="/service1" onClick={toggleMobileMenu} className="hover:text-[#797979]">Service 1</Link>
              <Link href="/service2" onClick={toggleMobileMenu} className="hover:text-[#797979]">Service 2</Link>
              <Link href="/service3" onClick={toggleMobileMenu} className="hover:text-[#797979]">Service 3</Link>
            </div>
          </div>
          <Link href="/OurResources" onClick={toggleMobileMenu} className="hover:text-[#797979]">Our Resources</Link>
          <Link href="/accreditation" onClick={toggleMobileMenu} className="hover:text-[#797979]">Accreditation</Link>
        </div>
      )}

    </div>
  );
};

export default Header;
