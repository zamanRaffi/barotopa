import React from 'react';
import Hero from './component/Home/Hero'

import MissionAndVision from './component/Home/MissionAndVision';
import OperatingPrinciples from './component/Home/OperatingPrinciples';
import Management from './component/Home/Management';
import WhyWeAre from './component/Home/WhyWeAre';
export default function Home() {
  return (
    <div>
        

        <Hero/>
        <MissionAndVision/>
        <Management/>
        <OperatingPrinciples/>
        <WhyWeAre/>
       
  
    </div>
  );
}
