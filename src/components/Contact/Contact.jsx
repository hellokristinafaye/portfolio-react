import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import linkedin from '../../assets/linkedin.png';
import GitHubIcon from '../../assets/GitHubIcon.png'

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
            {/* email address */}
            <div className="contact-detail">
              <img src={mail_icon} alt="" className="" />
              <p className="">helloKristinaFaye@gmail.com</p>
            </div>

            {/* Linked In */}
            <a
              href="https://www.linkedin.com/in/kristina-glinoga/"
              target="_blank"
              className="linkedIn-link"
            >
              <div className="contact-detail">
                <img src={linkedin} alt="" className="linkedIn" />
                <p className="">LinkedIn: Kristina Glinoga</p>
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/hellokristinafaye"
              target="_blank"
              className="gitHub-link"
            >
              <div className="contact-detail">
                <img src={GitHubIcon} alt="" className="gitHub" />
                <p className="">GitHub: helloKristinaFaye</p>
              </div>
            </a>

            {/* physical location */}
            <a
              href="https://www.google.com/search?q=Seattle%2C+Washington&sca_esv=507ae70456641e23&sxsrf=AE3TifP95TwGL04xNXpwedhOnxrDgVpEfQ%3A1749337538547&ei=wsVEaPyRIdDy0PEP94uCuAc&ved=0ahUKEwj8-s6UtuCNAxVQOTQIHfeFAHcQ4dUDCBA&uact=5&oq=Seattle%2C+Washington&gs_lp=Egxnd3Mtd2l6LXNlcnAaAhgCIhNTZWF0dGxlLCBXYXNoaW5ndG9uMg0QLhiABBixAxgUGIcCMggQABiABBixAzIKEAAYgAQYFBiHAjIFEAAYgAQyCBAAGIAEGLEDMgsQLhiABBjHARivATILEC4YgAQYxwEYrwEyBRAAGIAEMgUQABiABDIFEAAYgAQyHBAuGIAEGLEDGBQYhwIYlwUY3AQY3gQY4ATYAQFInzVQ5wVYnytwAngBkAEAmAHRAqABrBOqAQgwLjEyLjIuMbgBA8gBAPgBAZgCEKAC7xLCAgoQABiwAxjWBBhHwgINEAAYsAMY1gQYRxiLA8ICBxAjGLECGCfCAg4QLhiABBiRAhixAxiKBcICERAAGIAEGJECGLEDGIMBGIoFwgILEAAYgAQYkQIYigXCAg0QLhiABBixAxiDARgKwgITEC4YgAQYsQMYgwEYxwEYChivAcICDRAAGIAEGLEDGIMBGArCAgcQABiABBgKwgIEECMYJ8ICDRAuGIAEGLEDGEMYigXCAhAQABiABBixAxiDARgUGIcCwgILEC4YgAQYsQMYgwHCAhEQLhiABBixAxiDARjHARivAcICCxAAGIAEGLEDGIMBwgIKEAAYgAQYQxiKBcICChAjGIAEGCcYigXCAgoQLhiABBhDGIoFwgIQEC4YgAQYsQMYgwEYFBiHApgDAIgGAZAGCLoGBggBEAEYFJIHCDIuMTEuMi4xoAee1wGyBwgwLjExLjIuMbgH5BLCBwQyLTE2yAdc&sclient=gws-wiz-serp"
              target="_blank"
              className="location-detail"
            >
              <div className="contact-detail">
                <img src={location_icon} alt="" className="" />
                <p className="">Seattle, Washington, USA</p>
              </div>
            </a>
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
              required
            />
            <label htmlFor="" className="">
              Your Email
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              name="email"
              className=""
              required
            />
            <label htmlFor="" className="">
              Write your message here
            </label>
            <textarea
              name="message"
              rows="8"
              placeholder="Enter your message"
              className=""
              required
            />
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
