import React from 'react'
import Imagebanner from '../components/Imagebanner'
import Imagecontent from '../components/Imagecontent'
import Gridsection from '../components/Gridsection'
import Imagegrid from '../components/Imagegrid'
import Numbercounter from '../components/Numbercounter'
import Blog from '../components/Blog'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import ContactAPI from '../components/ContactAPI'



const Homepage = () => {
  return (
    <>
      <Imagebanner />
      <Imagecontent />
      <Gridsection />
      <Imagegrid />
      <Numbercounter />
      <Blog />
      <Testimonials />
      {/* <Contact /> */}
      <ContactAPI/>
      <Footer />
    </>
  )
}

export default Homepage
