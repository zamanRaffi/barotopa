import React from 'react'
import OurPeople from '../component/OurPeople'
import PowerUnit from '../component/PowerUnit'
import LogisticsAndTransportationService from '../component/LogisticsAndTransportationService'
import CentralizedWarehouseOperations from '../component/CentralizedWarehouseOperations'
import Machinery from '../component/Machinery'

const page = () => {
  return (
    <div>
      <Machinery/>
      <OurPeople/>
      <PowerUnit/>
      <LogisticsAndTransportationService/>
      <CentralizedWarehouseOperations/>
    </div>
  )
}

export default page
