import React from 'react';
import Hero from './component/Hero'

import MissionAndVision from './component/MissionAndVision';
import OperatingPrinciples from './component/OperatingPrinciples';
import Management from './component/Management';
import WhyWeAre from './component/WhyWeAre';
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
