import React from "react";
import Image from "next/image";

const MissionAndVision = () => {
  return (
    <section className="text-white py-12 px-6 mb-6 w-full md:mt-14">
      {/* Our Mission Section */}
      <div className="mb-20 md:flex md:items-center md:px-16">
        <div className="w-full">
          <div className="mb-8">
            <Image
              src="/missionLogo.png"
              alt="Mission Icon"
              width={70}
              height={60}
            />
          </div>
          <div className="md:w-10/12">
            <h2 className="text-4xl font-semibold">Our Mission</h2>

            <p className="mt-4 text-[#797979] md:text-lg">
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
        <div className="mt-6 sm:block md:hidden">
          <Image
            src="/missionCard.png"
            alt="Mission Card"
            width={550}
            height={100}
          />
        </div>

        {/* Display image for medium and larger screens */}
        <div className="mt-6 w-11/12 sm:hidden md:block ">
          <Image
            src="/OurMissionCardForLs.png"
            alt="Mission Card"
            width={810}
            height={440}
          />
        </div>
      </div>

      {/* Our Vision Section */}
      <div className="md:flex md:px-16">
        <div className=" w-full md:w-9/12 md:order-2 md:mt-9">
          <div className="mb-8">
            <Image
              src="/visionLogo.png"
              alt="Mission Icon"
              width={70}
              height={60}
            />
          </div>
          <div className="md:w-9/12">
            <h2 className="text-4xl font-semibold">Our Vision</h2>

            <p className="mt-4 text-[#797979] md:text-lg">
              "Barotopa Printing & Packaging Limited aspires to be the premier
              and most trusted printing and packaging company in Bangladesh. We
              aim to achieve this through relentless innovation, uncompromising
              dedication, steadfast loyalty, and exceptional client care."
            </p>
          </div>
        </div>

        {/* Display image for small screens */}
        <div className="mt-6 sm:block md:hidden">
          <Image
            src="/visionCard.png"
            alt="Mission Card"
            width={550}
            height={100}
          />
        </div>

        {/* Display image for medium and larger screens */}
        <div className="py-2 w-11/12 sm:hidden md:block ">
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
