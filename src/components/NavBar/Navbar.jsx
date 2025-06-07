import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from "react-anchor-link-smooth-scroll";


const Navbar = () => {

    const [menu, setMenu] = useState("home");

  return (
      <div className="navbar">
          
      <img src={logo} alt="" className="" />
      <ul className="nav-menu">
        <li className="">
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => setMenu("home")} className="">
              Home
            </p>
            {menu === "home" ? <img src={underline} /> : <></>}
          </AnchorLink>
        </li>

        <li className="">
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => setMenu("about")} className="">
              About Me
            </p>
            {menu === "about" ? <img src={underline} /> : <></>}
          </AnchorLink>
        </li>

        <li className="">
          {/* <AnchorLink className="anchor-link" offset={50} href="#work"> */}
            <p onClick={() => setMenu("work")} className="">
              Portfolio
            </p>
            {menu === "work" ? <img src={underline} /> : <></>}
          {/* </AnchorLink> */}
        </li>

        <li className="">
          {/* <AnchorLink className="anchor-link" offset={50} href="#contact"> */}
            <p onClick={() => setMenu("contact")} className="">
              Contact
            </p>
            {menu === "contact" ? <img src={underline} /> : <></>}
          {/* </AnchorLink> */}
        </li>
      </ul>
      <div className="nav-connect">Connect With Me</div>
    </div>
  );
}

export default Navbar