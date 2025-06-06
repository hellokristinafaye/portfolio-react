import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'

const Navbar = () => {
  return (
      <div className="navbar">
          <img src={logo} alt="" className="" />
          <ul className="nav-menu">
              <li className="">Home</li>
              <li className="">About Me</li>
              <li className="">Portfolio</li>
              <li className="">Contact</li>
          </ul>
          <div className="nav-connect">Connect With Me</div>
      </div>
  )
}

export default Navbar