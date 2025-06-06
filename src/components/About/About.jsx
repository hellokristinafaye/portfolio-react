import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import headshotLGSquare from '../../assets/headshotLGSquare.jpg'

const About = () => {
  return (
      <div className="about">
          
          <div className="about-title">
              <h1 className="">About Me</h1>
              <img src={theme_pattern} alt="" className="" />
          </div>

          <div className="about-sections">
              <div className="about-left">
                  <img src={headshotLGSquare} alt="" className="" />
              </div>
          </div>

    </div>
  )
}

export default About