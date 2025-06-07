import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-title">
        <h1 className="">Get In Touch</h1>
        <img src={theme_pattern} alt="" className="" />

        <div className="contact-section">
          <div className="contact-left">
            <h1 className="">Let's talk</h1>
            <p className="">
              I'm currently open to new work so please reach out if you're
              looking for a remote Front End or Full Stack Web Developer.
                      </p>
                      <div className="contact-details">
                          <div className="contact-detail"></div>
                          <div className="contact-detail"></div>
                          <div className="contact-detail"></div>
                      </div>
          </div>

          <div className="contact-right"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
