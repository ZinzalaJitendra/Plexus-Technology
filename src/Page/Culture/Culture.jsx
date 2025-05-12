import React from 'react'
import HeaderComp from "../../Components/HeaderComp/HeaderComp"
import CultureComp from '../../Components/CultureComp/CultureComp'
import Celebration from '../../Components/Celebration/Celebration'

function Culture() {
  return (
    <>
      <HeaderComp title="Culture" bgImg="culture-bg text-white fs-1"/>
      <CultureComp />
      <Celebration />
    </>
  )
}

export default Culture