import React from "react";
import Image from "next/image";
import styles from "../../../styles/ValuedClients.module.css"; // Import the CSS module

const ValuedClients = () => {
  const images = [
    "/bracIcon.png",
    "/waltonIcon.png",
    "/jitIcon.png",
    "/biopharma.png",
    "/whoIcon.png",
    "/phamasia.png",
  ];

  return (
    <div className="py-2 px-6 mb-8 lg:px-16 overflow-hidden">
      <h2 className="text-4xl text-[#00aeff] font-bold mb-12 md:text-center lg:text-5xl lg:mb-16">
        Valued Clients
      </h2>

      {/* Forward Scrolling Section */}
      <div className={`mb-12 md:mb-20 ${styles.scrollingContainer}`}>
        {[...images, ...images].map((src, index) => (
          <Image
            key={`forward-${index}`}
            width={164}
            height={56}
            src={src}
            alt={`client-${index}`}
          />
        ))}
      </div>

      {/* Reverse Scrolling Section */}
      <div className={styles.scrollingContainerReverse}>
        {[...images, ...images].map((src, index) => (
          <Image
            key={`reverse-${index}`}
            width={164}
            height={56}
            src={src}
            alt={`client-${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ValuedClients;
