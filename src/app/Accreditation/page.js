import React from 'react'
import Hero from '../component/Accreditation/Hero'
import ClientsReview from '../component/Accreditation/ClientReview'
import Blog from '../component/Accreditation/Blog'
import Certifications from '../component/Accreditation/Certifications'

const page = () => {
  return (
    <div>
      <Hero/>
      <ClientsReview/>
      <Blog/>
      <Certifications/>
    </div>
  )
}

export default page
