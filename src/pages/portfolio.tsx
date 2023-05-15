import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'
import Hero from '@/components/sections/Hero'
import Navbar from '@/components/sections/Navbar'
import Projects from '@/components/sections/Projects'
import React from 'react'

const mainpage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default mainpage
