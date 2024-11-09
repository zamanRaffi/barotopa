import React from 'react'
import Hero from '../component/Infrastructure/Hero'
import StayHere from '../component/Infrastructure/StayHere'
import FactoryUnit from '../component/Infrastructure/FactoryUnit'

const page = () => {
  return (
    <div>
      <Hero/>
      <FactoryUnit/>
      <StayHere/>
    </div>
  )
}

export default page
