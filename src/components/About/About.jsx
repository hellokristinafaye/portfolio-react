import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import headShotRectangle from "../../assets/headShotRectangle.jpg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1 className="">About Me</h1>
        <img src={theme_pattern} alt="" className="" />
      </div>

      <div className="about-sections">
        <div className="about-left">
          <img src={headShotRectangle} alt="" className="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p className="">
              I am a Front-End Web Developer with hands-on experience building
              responsive, user-centered applications using HTML, CSS,
              JavaScript, React, and many third-party frameworks and libraries. I have a strong background mentoring students
              remotely from my time as a teaching assistant in a full-stack web development bootcamp. I'm passionate about clean UI,
              accessibility, and solving technical problems collaboratively.{" "}
            </p>
            <p className="">
              Feel free to reach out with any questions or if you're looking to add a collaborative, empathetic, and remote Front-End or Full Stack Web Developer to your team.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p className="about-text">HTML</p>
              <p className="about-line">|</p>
              <p className="about-text">CSS</p>
              <p className="about-line">|</p>
              <p className="about-text">JavaScript</p>
              <p className="about-line">|</p>
              <p className="about-text">React JS</p>
            </div>

            <div className="about-skill">
              <p className="about-text">Google Fonts</p>
              <p className="about-line">|</p>
              <p className="about-text">Tailwind CSS</p>
              <p className="about-line">|</p>
              <p className="about-text">Responsive Web Design</p>
              <p className="about-line">|</p>
              <p className="about-text">Mobile-First Web Design</p>
            </div>

            <div className="about-skill">
              <p className="about-text">MongoDB</p>
              <p className="about-line">|</p>
              <p className="about-text">Express JS</p>
              <p className="about-line">|</p>
              <p className="about-text">Node JS</p>
              <p className="about-line">|</p>
              <p className="about-text">Web Hosting</p>
            </div>
          </div>
        </div>
      </div>

      {/* Commenting out these until I have appropriate stats */}
      {/* <div className="about-achievements">
        <div className="about-achievement">
          <h1 className="">10+</h1>
          <p className="">YEARS OF EXPERIENCE</p>
        </div>
        <hr className="" />

        <div className="about-achievement">
          <h1 className="">90+</h1>
          <p className="">PROJECTS COMPLETED</p>
        </div>
        <hr className="" />

        <div className="about-achievement">
          <h1 className="">15+</h1>
          <p className="">HAPPY CLIENTS</p>
        </div>
      </div>
       */}
      
      <div className="space-holder"></div>
      
    </div>
  );
};

export default About;
