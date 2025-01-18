import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import Hero from './components/Hero.jsx'
import Section from './components/section2.jsx'
import Section3 from './components/section3.jsx'
import Section4 from './components/section4.jsx'
import Services from './components/services.jsx'

function App() {

  const lenis = useLenis()

  return (
    <ReactLenis root>
      <Navbar />
      <Hero />
      <div className='bg-white'>
        <Section />
        <Section3 />
        <Section4 />
        <Services />
      </div>
    </ReactLenis>
  )
}

export default App
