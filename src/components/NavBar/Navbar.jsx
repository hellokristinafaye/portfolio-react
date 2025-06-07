import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="" className="" />
      <ul className="nav-menu">
        <li className="">
          <AnchorLink>
            <p onClick={() => setMenu("home")} className="">
              Home
            </p>
          </AnchorLink>
        </li>
        <li className="">
          <AnchorLink>
            <p onClick={() => setMenu("about")} className="">
              About Me
            </p>
          </AnchorLink>
        </li>
        <li className="">
          <AnchorLink>
            <p onClick={() => setMenu("work")} className="">
              Portfolio
            </p>
          </AnchorLink>
        </li>
        <li className="">
          <AnchorLink>
            <p onClick={() => setMenu("contact")} className="">
              Contact
            </p>
          </AnchorLink>
        </li>
      </ul>
      <div className="nav-connect">Connect With Me</div>
    </div>
  );
}

export default Navbar