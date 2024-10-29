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
           <Link href="/Services" className="hover:text-[#797979]">Services</Link>
          <Link href="/Resources" className="hover:text-[#797979]">Resources</Link>
          <Link href="/Infrastructure" className="hover:text-[#797979]">Infrastructure</Link>
          <Link href="/Accreditation" className="hover:text-[#797979]">Accreditation</Link>
          <Link href="#footer" scroll={true} className="bg-[#00aeef] text-white px-6 py-2 rounded-full hover:text-black hover:bg-[#33bef2]">
  Contact us
</Link>

        </nav>
      </header>

         {/* Mobile Menu Links */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[rgba(29,29,29,0.9)] text-white p-4 flex flex-col space-y-4">
          <Link href="/" onClick={toggleMobileMenu} className="hover:text-[#797979]">Home</Link>
          <Link href="/Services" onClick={toggleMobileMenu} className="hover:text-[#797979]">Services</Link>
          <Link href="/Resources" onClick={toggleMobileMenu} className="hover:text-[#797979]">Resources</Link>
          <Link href="/Infrastructure" onClick={toggleMobileMenu} className="hover:text-[#797979]">Infrastructure</Link>
          <Link href="/Accreditation" onClick={toggleMobileMenu} className="hover:text-[#797979]">Accreditation</Link>
        </div>
      )}

    </div>
  );
};

export default Header;
