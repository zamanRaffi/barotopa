import React from "react";
import Image from "next/image";

const MissionAndVision = () => {
  return (
    <section className="text-white py-12 px-6 mb-6 w-full lg:mt-14">
      {/* Our Mission Section */}
      <div className="mb-20 md:flex md:items-center md:px-3 lg:flex lg:items-center lg:px-16">
        <div className="w-full">
          <div className="mb-8">
            <Image
              src="/missionLogo.png"
              alt="Mission Icon"
              width={70}
              height={60}
            />
          </div>
          <div className="md:w-9/12 lg:w-10/12">
            <h2 className="text-4xl font-semibold text-[#00aeff] md:text-4xl lg:text-5xl">Our Mission</h2>

            <p className="mt-4 text-[#797979] md:text-base lg:text-lg">
              “Our mission at Barotopa Printing & Packaging Limited is to
              provide unparalleled one-stop printing and packaging solutions
              characterized by excellence and innovation. We are committed to
              delivering superior quality and fostering enduring client
              relationships through unwavering reliability and professional
              integrity. Our objective is to not only meet but exceed our
              clients’ expectations, setting the benchmark for industry
              standards.”
            </p>
          </div>
        </div>

        {/* Display image for small screens */}
        <div className="mt-6 sm:block md:hidden lg:hidden">
          <Image
            src="/missionCard.png"
            alt="Mission Card"
            width={550}
            height={100}
          />
        </div>

        {/* Display image for medium and larger screens */}
        <div className="mt-6 w-11/12 sm:hidden md:block md:mt-32 lg:mt-24 lg:w-full lg:block ">
          <Image
            src="/OurMissionCardForLs.png"
            alt="Mission Card"
            width={810}
            height={440}
          />
        </div>
      </div>


      {/* Our Vision Section */}
      <div className="md:flex md:items-center md:px-3 lg:flex lg:items-center lg:px-16">
        <div className="w-full md:order-2 lg:order-2">
          <div className="mb-8 md:ml-20">
            <Image
              src="/visionLogo.png"
              alt="Mission Icon"
              width={70}
              height={60}
            />
          </div>
          <div className="md:w-9/12 md:ml-20 lg:w-10/12">
            <h2 className="text-4xl text-[#00aeff] font-bold 
           ">Our Vision</h2>

            <p className="mt-4 text-[#797979] md:text-base lg:text-lg">
              "Barotopa Printing & Packaging Limited aspires to be the premier
              and most trusted printing and packaging company in Bangladesh. We
              aim to achieve this through relentless innovation, uncompromising
              dedication, steadfast loyalty, and exceptional client care."
            </p>
          </div>
        </div>

        {/* Display image for small screens */}
        <div className="mt-6 sm:block md:hidden lg:hidden">
          <Image
            src="/visionCard.png"
            alt="Mission Card"
            width={550}
            height={100}
          />
        </div>

        {/* Display image for medium and larger screens */}
        <div className="mt-6 w-11/12 sm:hidden md:block md:mt-32 lg:w-full lg:block">
          <Image
            src="/OurVisionCardForLs.png"
            alt="Mission Card"
            width={810}
            height={440}
          />
        </div>
      </div>
    </section>
  );
};

export default MissionAndVision;
