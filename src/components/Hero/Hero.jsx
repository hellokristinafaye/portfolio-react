import React from 'react'
import './Hero.css';
import profile_img from '../../assets/profile_img.svg'

const Hero = () => {
  return (
    <div className="hero">
          <img src={profile_img} alt="" className="" />      
          <h1 className="">I'm Kristina Glinoga, Full Stack Developer based in the USA.</h1>
          <p className="">I am a Full Stack Developer from Washington State, open to new work! </p>
    </div>
  )
}

export default Hero