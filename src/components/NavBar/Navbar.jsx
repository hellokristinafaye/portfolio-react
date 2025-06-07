import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="" className="" />
      <ul className="nav-menu">
        <li className="">
          <p onClick={() => "home"} className="">Home</p>
        </li>
        <li className="">
          <p onClick={() => "about"} className="">About Me</p>
        </li>
        <li className="">
          <p onClick={() => "work"} className="">Portfolio</p>
        </li>
        <li className="">
          <p onClick={() => "contactg"} className="">Contact</p>
        </li>
      </ul>
      <div className="nav-connect">Connect With Me</div>
    </div>
  );
}

export default Navbar