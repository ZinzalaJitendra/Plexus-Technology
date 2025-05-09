import React from 'react'
import HeaderComp from "../../Components/HeaderComp/HeaderComp"
import CultureComp from '../../Components/CultureComp/CultureComp'

function Culture() {
  return (
    <>
      <HeaderComp title="Culture" bgImg="culture-bg text-white fs-1"/>
      <CultureComp />
    </>
  )
}

export default Culture