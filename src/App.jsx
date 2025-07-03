import React, { useState } from 'react'
import Navbar from './components/NavBar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import MyWork from './components/MyWork/MyWork'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './index.css'
import './App.css'
import useLocalStorage from "use-local-storage";


const App = () => {

  // LightDarkMode START

  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );
// const [theme, setTheme] = useState("dark");

function handleToggleTheme() {
  setTheme(theme === "light" ? "dark" : "light");
  console.log(theme);
}
// LightDarkMode END

  return (
    <div data-theme={theme}>
      <a onClick={handleToggleTheme} className="theme-changer">
        Change Theme
      </a>
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
  );
}

export default App