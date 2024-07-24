import { Outlet } from 'react-router-dom'
import React from 'react'
import { Footer, Header } from './components'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer />
    </>
  )
}

export default Layout
