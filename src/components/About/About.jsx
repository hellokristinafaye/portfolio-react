import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'

const About = () => {
  return (
      <div className="about">
          <div className="about-title">
              <h1 className="">About Me</h1>
              <img src={theme_pattern} alt="" className="" />
          </div>
    </div>
  )
}

export default About