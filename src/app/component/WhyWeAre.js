import React from 'react';
import { CheckIcon } from '@heroicons/react/outline';;

export default function WhyWeAre() {
  return (
    <div
      className="bg-cover bg-center text-white py-10 px-4"
      style={{
        backgroundImage: "url('/images/background.jpg')", 
      }}
    >
      <div className="bg-opacity-50 p-4 rounded-md max-w-md mx-auto">
        {/* Heading */}
        <h2 className="text-5xl font-bold mb-8">Why we are</h2>

        {/* List of items */}
        <ul className="space-y-3 mb-6">
          {Array(6).fill().map((_, index) => (
            <li key={index} className="flex items-center text-[#797979] text-xl">
              <CheckIcon className="w-5 h-5 text-yellow-400 mr-2" />
              <span>A proof (sample) of the final design</span>
            </li>
          ))}
        </ul>

        {/* Image section */}
        <div className="grid grid-cols-2">
          <img
            src="/WhyWeAre_1.png"
            alt="Sample 1"
            className="rounded-md mt-2  w-11/12"
          />
          <img
            src="/WhyWeAre_2.png" 
            alt="Sample 2"
            className="rounded-md mt-12 w-11/12"
          />
        </div>
      </div>
    </div>
  );
}
