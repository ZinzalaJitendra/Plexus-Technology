import React from 'react'
import HeaderComp from '../../Components/HeaderComp/HeaderComp'
import ProductList from '../../Components/Product/ProductList'

function Portfolio() {
  return (
    <>
      <HeaderComp title="Portfolio" bgImg="portfolio-bg text-white"></HeaderComp>
      <ProductList></ProductList>
    </>
  )
}

export default Portfolio