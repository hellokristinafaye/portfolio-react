import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'


const Navbar = () => {

  const [menu, setMenu] = useState("home");
  // for mobile menu buttons
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  }
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  }

  return (
    <div className="navbar">
      {/* <img src={logo} alt="" className="" /> */}
      <h1 className="custom-logo"><span className="">K*</span>G</h1>
      <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open" />
      <ul ref={menuRef} className="nav-menu">
      <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
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
          <AnchorLink className="anchor-link" offset={50} href="#work">
            <p onClick={() => setMenu("work")} className="">
              Portfolio
            </p>
            {menu === "work" ? <img src={underline} /> : <></>}
          </AnchorLink>
        </li>

        <li className="">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setMenu("contact")} className="">
              Contact
            </p>
            {menu === "contact" ? <img src={underline} /> : <></>}
          </AnchorLink>
        </li>
      </ul>
      <AnchorLink className="anchor-link" offset={50} href="#contact">
        <div className="nav-connect">Connect With Me</div>
      </AnchorLink>
    </div>
  );
}

export default Navbar