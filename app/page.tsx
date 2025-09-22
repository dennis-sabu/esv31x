import React from 'react'
import Navbar from './components/NavBar'
import Hero from './components/Hero'
import TrustPage from './components/runningnum'
import Niga from './components/niga'
import Footer from './components/Footer'

const page = () => {
  return (
    <div className='bg-white '>
      <Navbar />
      <Hero />
      <TrustPage />
      <Niga />
      <Footer />
    </div>
  )
}

export default page