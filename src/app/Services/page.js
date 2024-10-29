import React from 'react';
import PrintingSolution from '../component/Services/PrintingSolution';
import Packaging from '../component/Services/Packaging';
import GraphicsDesignConsultancy from '../component/Services/GraphicsDesignConsultancy';
import Hero from '../component/Services/Hero';

const Page = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <Packaging />

      <div className="order-1 md:order-2">
        <PrintingSolution />
      </div>

  
      <div className="order-2 md:order-1">
        <GraphicsDesignConsultancy />
      </div>
    </div>
  );
};

export default Page;
