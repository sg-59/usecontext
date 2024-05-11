import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {

    const a=[1,2,3,4,5,6]

  return (
    <>
    <Navbar/>
    <Outlet context={a}/>
    <Footer/>
    |</>
  )
}

export default Layout