import React from 'react'
import Header from '../Components/Header/Header'
import { Outlet } from 'react-router'
import Footer from '../Components/Footer/Footer'

function RootLayout() {
  return (
    <>
       <Header/>
       <Outlet></Outlet>
       <Footer></Footer> 
    </>
  )
}

export default RootLayout