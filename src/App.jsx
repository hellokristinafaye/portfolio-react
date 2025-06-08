import React from 'react'
import Navbar from './components/NavBar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import MyWork from './components/MyWork/MyWork'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <MyWork />
      {/* next steps: upload your own work for the portfolio area.  Needs screenshots for everything */}
      <Contact />
    {/* next steps: add GitHub link to Contact */}
      <Footer />
    </div>
  )
}

export default App