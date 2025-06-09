import React from 'react'
import './Hero.css';
import headshotLGSquare from '../../assets/headshotLGSquare.jpg'
import AnchorLink from "react-anchor-link-smooth-scroll";


const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={headshotLGSquare} alt="" className="" />
      <h1 className="">
        <span className="">I'm Kristina Glinoga,</span> a Full Stack Developer
        based in the USA.
      </h1>
      <p className="">
        I am a Full Stack Developer from Washington State, open to new work!{" "}
      </p>
      <div className="hero-action">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          <div className="hero-connect">Connect with me</div>
        </AnchorLink>

        <a
          className="hero-resume-link"
          href="https://drive.google.com/file/d/1qVTzuGSOXHeJUagA1D_d9mjjpQhbsL8N/view?usp=drive_link"
          target="_blank"
        >
          <div className="hero-resume">My Resume</div>
        </a>
      </div>
    </div>
  );
}

export default Hero