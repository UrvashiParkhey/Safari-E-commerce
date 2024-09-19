import React from 'react'
import Header from '../Component/Header'
import Image from '../Component/Image'
import Section1 from '../Component/Section1'
import Section2 from '../Component/Section2'
import Section3 from '../Component/Section3'

import Testimonial from '../Component/Testimonial'
import Travel from '../Component/Travel'
import Warranty from '../Component/Warranty'


function Home() {
  return (
    <div>
        <Header/>
        <Image/>
        <Section1/>
        <Section2/>
        <Section3/>
      
        <Testimonial/>
        <Travel/>
        <Warranty/>
    </div>
  )
}

export default Home