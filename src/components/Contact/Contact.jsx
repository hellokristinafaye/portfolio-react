import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-title">
        <h1 className="">Get In Touch</h1>
        <img src={theme_pattern} alt="" className="" />
      </div>
    </div>
  );
}

export default Contact