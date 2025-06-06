import React from 'react'
import './Hero.css';
import headshotLGSquare from '../../assets/headshotLGSquare.jpg'

const Hero = () => {
  return (
    <div className="hero">
          <img src={headshotLGSquare} alt="" className="" />      
          <h1 className="">I'm Kristina Glinoga, a Full Stack Developer based in the USA.</h1>
          <p className="">I am a Full Stack Developer from Washington State, open to new work! </p>
          <div className="hero-action">
              <div className="hero-connect">Connect with me</div>
              <div className="hero-resume">My Resume</div>
          </div>
    </div>
  )
}

export default Hero