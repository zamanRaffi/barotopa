import React from 'react'
import Image from 'next/image';
const Header = () => {
    return (
        <div className="relative bg-gray-900 text-white" >
          <header className="p-6 flex justify-between items-center">
            <Image width={150} height={150} src="/Layer_1.png" alt="Barotopa Logo" className="h-12" />
            <nav>
              <button className="text-white px-4 py-2 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50">
<path d="M 3 9 A 1.0001 1.0001 0 1 0 3 11 L 47 11 A 1.0001 1.0001 0 1 0 47 9 L 3 9 z M 3 24 A 1.0001 1.0001 0 1 0 3 26 L 47 26 A 1.0001 1.0001 0 1 0 47 24 L 3 24 z M 3 39 A 1.0001 1.0001 0 1 0 3 41 L 47 41 A 1.0001 1.0001 0 1 0 47 39 L 3 39 z" fill="currentColor" />
</svg>
              </button>
            </nav>
          </header>
        </div>
      );
}

export default Header
