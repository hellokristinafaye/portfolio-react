import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';

const Contact = () => {
// web3form code start
const [result, setResult] = React.useState("");

const onSubmit = async (event) => {
  event.preventDefault();
  setResult("Sending....");
  const formData = new FormData(event.target);
  
  formData.append("access_key", "3ce93469-269d-4b12-a1cb-ba66c92a0ec2");
  
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData,
  });
  
  const data = await response.json();
  // web3form code end
  
  if (data.success) {
    setResult("Form Submitted Successfully");
    alert("Thanks for your message! I'll be in touch soon!")
    event.target.reset();
  } else {
    console.log("Error", data);
    setResult(data.message);
  }
};


  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1 className="">Get In Touch</h1>
        <img src={theme_pattern} alt="" className="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1 className="">Let's talk</h1>
          <p className="">
            I'm currently open to new work so please reach out if you're looking
            for a remote Front End or Full Stack Web Developer.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" className="" />
              <p className="">helloKristinaFaye@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" className="" />
              <p className="">Seattle, Washington, USA</p>
            </div>
          </div>
        </div>

        <div className="contact-right">
          <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="" className="">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              className=""
            />
            <label htmlFor="" className="">
              Your Email
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              name="email"
              className=""
            />
            <label htmlFor="" className="">
              Write your message here
            </label>
            <textarea
              name="message"
              rows="8"
              placeholder="Enter your message"
              className=""
            ></textarea>
            <button type="submit" className="contact-submit">
              Submit Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
