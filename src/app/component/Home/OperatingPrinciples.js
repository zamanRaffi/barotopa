import React from "react";
import Image from "next/image";

const OperatingPrinciples = () => {
  return (
    <section className="text-white px-6 lg:py-12 lg:mb-10">
      <h1 className="text-4xl text-[#00aeff] leading-tight font-bold mb-6 px-5 md:text-center md:text-4xl
            md:mb-10 lg:text-center lg:text-5xl
            lg:mb-16">
        Our Operating Principles
      </h1>

      {/* Commitment to Quality Section */}
      <div className="mb-20 md:flex md:items-center md:mt-10 lg:flex lg:items-center lg:px-8 lg:mt-12 lg:ml-28">
        {/* Display image for small screens */}
        <div className="mt-6 sm:block md:hidden lg:hidden">
          <Image
            src="/OperatingPrinciples_1.png"
            alt="Mission Icon"
            width={550}
            height={100}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Display image for medium and larger screens */}
        <div className="mt-6 md:order-2 lg:order-2 md:w-4/5 lg:w-2/5 sm:hidden md:block lg:block">
          <Image
            src="/CommitmenttoQuality.png"
            alt="Mission Icon"
            width={580}
            height={100}
            className="rounded-lg shadow-lg"
          />
        </div>

        <div className="p-4 text-2xl lg:w-1/2">
          <h2 className="lg:mb-6 lg:text-3xl">Knowledge and Expertise</h2>
          <p className="text-base mt-2 text-[#797979] lg:text-2xl">
            We are dedicated to providing exceptional printing and packaging
            services, ensuring the highest standards in every project we
            undertake.
          </p>
        </div>
      </div>

      {/* Mastery of Innovation Section */}
      <div className="mb-20 md:flex md:items-center md:mt-10 lg:flex lg:items-center lg:px-8 lg:mt-12 lg:ml-20">
        {/* Display image for small screens */}
        <div className="mt-6 sm:block md:hidden lg:hidden">
          <Image
            src="/OperatingPrinciples_2.png"
            alt="Mission Icon"
            width={550}
            height={100}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Display image for medium and larger screens */}
        <div className="mt-6 lg:w-2/5 md:w-4/5 sm:hidden md:block lg:block">
          <Image
            src="/MasteryofInnovation.png"
            alt="Mission Icon"
            width={580}
            height={100}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="p-4 text-2xl md:ml-4 lg:w-1/2">
          <h2 className="lg:mb-6 lg:text-3xl">Mastery of Innovation</h2>
          <p className="text-base mt-2 text-[#797979] lg:text-2xl">
            We continuously seek innovative solutions and adopt the latest
            technologies to stay ahead in the printing and packaging industry.
          </p>
        </div>
      </div>

      {/* Your Satisfaction First Section*/}
      <div className="mb-20 md:flex md:items-center md:mt-10 lg:flex lg:items-center lg:px-8 lg:mt-12 lg:ml-28">
        {/* Display image for small screens */}
        <div className="mt-6 ml-1 lg:order-2 sm:block md:hidden lg:hidden">
          <Image
            src="/OperatingPrinciples_3.png"
            alt="Mission Icon"
            width={550}
            height={100}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Display image for medium and larger screens */}
        <div className="mt-6 md:order-2 lg:order-2 md:w-4/5 lg:w-2/5 sm:hidden md:block lg:block">
          <Image
            src="/YourSatisfactionFirst.png"
            alt="Mission Icon"
            width={580}
            height={100}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="p-3 mt-1 text-2xl  lg:w-1/2">
          <h2 className="lg:mb-6 lg:text-3xl">Your Satisfaction First</h2>
          <p className="text-base mt-2 text-[#797979] lg:text-2xl">
            Our customers are our top priority. We strive to exceed your
            expectations through personalized service and outstanding results.
          </p>
        </div>
      </div>

      {/* Knowledge and Expertise Section */}
      <div className="mb-20 md:flex md:items-center md:mt-10 lg:flex lg:items-center lg:px-8 lg:mt-12 lg:ml-20">
        {/* Display image for small screens */}
        <div className="mt-6 sm:block md:hidden lg:hidden">
          <Image
            src="/OperatingPrinciples_4.png"
            alt="Mission Icon"
            width={550}
            height={100}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Display image for medium and larger screens */}
        <div className="mt-6 md:w-4/5 lg:w-2/5 sm:hidden md:block lg:block">
          <Image
            src="/KnowledgeAndExpertise.png"
            alt="Mission Icon"
            width={580}
            height={100}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="p-4 text-2xl md:ml-4 lg:w-1/2">
          <h2 className="lg:mb-6 lg:text-3xl">Knowledge and Expertise</h2>
          <p className="text-base mt-2 text-[#797979] lg:text-2xl">
            Our team of skilled professionals leverages their deep industry
            knowledge and experience to deliver excellence in every aspect of
            our work.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OperatingPrinciples;
