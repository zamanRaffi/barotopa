import React from 'react'
import PrintingSolution from '../component/PrintingSolution'
import Packaging from '../component/Packaging'
import GraphicsDesignConsultancy from '../component/GraphicsDesignConsultancy'

const page = () => {
  return (
    <div>
      <Packaging/>
      <PrintingSolution/>
      <GraphicsDesignConsultancy/>
    </div>
  )
}

export default page
