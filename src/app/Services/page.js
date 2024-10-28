import React from 'react'
import PrintingSolution from '../component/Services/PrintingSolution'
import Packaging from '../component/Services/Packaging'
import GraphicsDesignConsultancy from '../component/Services/GraphicsDesignConsultancy'
import Hero from '../component/Services/Hero'

const page = () => {
  return (
    <div>
      <Hero/>
      <Packaging/>
      <PrintingSolution/>
      <GraphicsDesignConsultancy/>
    </div>
  )
}

export default page
