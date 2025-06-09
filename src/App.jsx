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
      {/* next steps: my work is added! Gonna try to add my desired hover effect on another version */}
      <Contact />
      <Footer />
      {/* wanted to add a scroll to top button, will wait for future dev */}
      {/* <button className="to-top">^</button> */}
    </div>
  )
}

export default App