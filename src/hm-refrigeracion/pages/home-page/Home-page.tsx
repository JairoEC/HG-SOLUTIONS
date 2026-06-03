import React from 'react'
import { Navbar } from '../../components/header/Navbar'
import { Footer } from '../../components/footer/Footer'
import { Carrousel } from '../../components/carrousel/Carrousel'

export const HomePage = () => {
  return (
    <>
        <Navbar />
        <Carrousel />
        <h1>BODY</h1>
        <Footer />
    </>
  )
}
