import React from 'react'
import OurPeople from '../component/Resources/OurPeople'
import PowerUnit from '../component/Resources/PowerUnit'
import LogisticsAndTransportationService from '../component/Resources/LogisticsAndTransportationService'
import CentralizedWarehouseOperations from '../component/Resources/CentralizedWarehouseOperations'
import Machinery from '../component/Resources/Machinery'
import Hero from '../component/Resources/Hero'

const page = () => {
  return (
    <div>
      <Hero/>
      <Machinery/>
      <OurPeople/>
      <PowerUnit/>
      <LogisticsAndTransportationService/>
      <CentralizedWarehouseOperations/>
    </div>
  )
}

export default page
