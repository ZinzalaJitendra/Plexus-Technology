import React from 'react'
import HeaderComp from '../../Components/HeaderComp/HeaderComp'
import AboutComp from '../../Components/AboutComp/AboutComp'
import AboutCard from '../../Components/AboutCard/AboutCard'
import Journay from '../../Components/Journay/Journay'

function AboutUs() {
  return (
    <>
      <HeaderComp title="About Us" bgImg="about-bg text-white" />
      <AboutComp />
      <AboutCard />
      <Journay />
    </>
  )
}

export default AboutUs