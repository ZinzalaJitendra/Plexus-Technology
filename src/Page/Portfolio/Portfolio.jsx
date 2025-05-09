import React from 'react'
import HeaderComp from '../../Components/HeaderComp/HeaderComp'
import Product from '../../Components/Product/Product'

function Portfolio() {
  return (
    <>
      <HeaderComp title="Portfolio" bgImg="portfolio-bg text-white"></HeaderComp>
      <Product></Product>
    </>
  )
}

export default Portfolio