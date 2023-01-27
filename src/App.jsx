import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contacts from './components/contacts/Contacts'
import Footer from './components/footer/Footer'

// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";

const App = () => {

  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Experience />
      {/* <Service /> */}
      <Portfolio />
      <Testimonials />
      <Contacts />
      <Footer />
    </div>
  )
}

export default App