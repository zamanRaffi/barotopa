import React from "react";
import Image from "next/image";

const OperatingPrinciples = () => {
  return (
    <section className="text-white px-6 lg:py-12 lg:mb-10">
      <h1 className="text-4xl py-2 leading-tight font-semibold md:text-center">
        Our Operating Principles
      </h1>

      {/* Commitment to Quality Section */}
      <div className="mb-20 md:flex md:items-center md:px-8 md:mt-12 md:ml-28">
        {/* Display image for small screens */}
        <div className="mt-6 md:order-2 sm:block md:hidden">
          <Image
            src="/OperatingPrinciples_1.png"
            alt="Mission Icon"
            width={550}
            height={100}
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Display image for medium and larger screens */}
        <div className="mt-6 md:order-2 md:w-2/5 sm:hidden md:block">
          <Image
            src="/CommitmenttoQuality.png"
            alt="Mission Icon"
            width={580}
            height={100}
            className="rounded-lg shadow-md"
          />
        </div>

        <div className="p-4 text-2xl md:w-1/2">
          <h2 className="md:mb-6 md:text-3xl">Knowledge and Expertise</h2>
          <p className="text-base mt-2 text-[#797979] md:text-2xl">
            We are dedicated to providing exceptional printing and packaging
            services, ensuring the highest standards in every project we
            undertake.
          </p>
        </div>
      </div>

      {/* Mastery of Innovation Section */}
      <div className="mb-20 md:flex md:items-center md:px-8 md:mt-12 md:ml-20">
        {/* Display image for small screens */}
        <div className="mt-6 sm:block md:hidden">
          <Image
            src="/OperatingPrinciples_2.png"
            alt="Mission Icon"
            width={550}
            height={100}
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Display image for medium and larger screens */}
        <div className="mt-6 md:w-2/5 sm:hidden md:block">
          <Image
            src="/MasteryofInnovation.png"
            alt="Mission Icon"
            width={580}
            height={100}
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="p-4 text-2xl md:w-1/2">
          <h2 className="md:mb-6 md:text-3xl">Mastery of Innovation</h2>
          <p className="text-base mt-2 text-[#797979] md:text-2xl">
            We continuously seek innovative solutions and adopt the latest
            technologies to stay ahead in the printing and packaging industry.
          </p>
        </div>
      </div>

      {/* Your Satisfaction First Section*/}
      <div className="mb-20 md:flex md:items-center md:px-8 md:mt-12 md:ml-28">
        {/* Display image for small screens */}
        <div className="mt-6 ml-1 md:order-2 sm:block md:hidden">
          <Image
            src="/OperatingPrinciples_3.png"
            alt="Mission Icon"
            width={550}
            height={100}
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Display image for medium and larger screens */}
        <div className="mt-6 md:order-2 md:w-2/5 sm:hidden md:block">
          <Image
            src="/YourSatisfactionFirst.png"
            alt="Mission Icon"
            width={580}
            height={100}
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="p-3 mt-1 text-2xl md:w-1/2">
          <h2 className="md:mb-6 md:text-3xl">Your Satisfaction First</h2>
          <p className="text-base mt-2 text-[#797979] md:text-2xl">
            Our customers are our top priority. We strive to exceed your
            expectations through personalized service and outstanding results.
          </p>
        </div>
      </div>

      {/* Knowledge and Expertise Section */}
      <div className="mb-20 md:flex md:items-center md:px-8 md:mt-12 md:ml-20">
        {/* Display image for small screens */}
        <div className="mt-6 sm:block md:hidden">
          <Image
            src="/OperatingPrinciples_4.png"
            alt="Mission Icon"
            width={550}
            height={100}
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Display image for medium and larger screens */}
        <div className="mt-6 md:w-2/5 sm:hidden md:block">
          <Image
            src="/KnowledgeAndExpertise.png"
            alt="Mission Icon"
            width={580}
            height={100}
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="p-4 text-2xl md:w-1/2">
          <h2 className="md:mb-6 md:text-3xl">Knowledge and Expertise</h2>
          <p className="text-base mt-2 text-[#797979] md:text-2xl">
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
