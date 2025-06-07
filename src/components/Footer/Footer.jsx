import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="" className="" />
          <p className="">I am a Full Stack developer from the USA. </p>
        </div>
        <div className="footer-top-right">
          <p className="">not sure</p>
              </div>
      </div>
              <hr className="" />

      <div className="footer-bottom">
        <p className="footer-bottom-left">
          Copyright {new Date().getFullYear()} Kristina Glinoga. All rights
          reserved.
        </p>
        <div className="footer-bottom-right">
          <p className="">Terms of Services</p>
          <p className="">Privacy Policy</p>
          <p className="">Connect with me</p>
        </div>
      </div>
    </div>
  );
}

export default Footer