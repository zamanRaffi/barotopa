import React from 'react';
import Image from 'next/image';

const MissionAndVision = () => {
  return (
    <section className="text-white py-12 px-6 mb-6">
      {/* Our Mission Section */}
      <div className="mb-20">
        <div>
          <div className="mb-8 rounded-full">
          <Image
            src="/missionLogo.png"
            alt="Mission Icon"
            width={70}
            height={60}
            className="rounded-lg"
          />
          </div>
          <h2 className="text-4xl font-semibold">Our Mission</h2>
        </div>
        <p className="mt-4 text-[#797979]">
          “Our mission at Barotopa Printing & Packaging Limited is to provide unparalleled one-stop
          printing and packaging solutions characterized by excellence and innovation. We are committed
          to delivering superior quality and fostering enduring client relationships through unwavering
          reliability and professional integrity. Our objective is to not only meet but exceed our clients’
          expectations, setting the benchmark for industry standards.”
        </p>
        <div className="mt-6">
          <Image
            src="/missionCard.png"
            alt="Mission Icon"
            width={550}
            height={100}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Our Vision Section */}
      <div>
        <div>
          <div className="mb-8 rounded-full">
          <Image
            src="/visionLogo.png"
            alt="VisionLogo Icon"
            width={70}
            height={60}
            className="rounded-lg shadow-md"
          />
          </div>
          <h2 className="text-4xl font-semibold">Our Vision</h2>
        </div>
        <p className="max-w-md mt-4 text-[#797979]">
          “Barotopa Printing & Packaging Limited aspires to be the premier and most trusted printing and
          packaging company in Bangladesh. We aim to achieve this through relentless innovation,
          uncompromising dedication, steadfast loyalty, and exceptional client care.”
        </p>
        <div className="mt-6">
          <Image
            src="/visionCard.png"
            alt="Vision Icon"
            width={550}
            height={100}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default MissionAndVision;

