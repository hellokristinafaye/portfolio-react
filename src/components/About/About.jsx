import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import headshotLGSquare from "../../assets/headshotLGSquare.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1 className="">About Me</h1>
        <img src={theme_pattern} alt="" className="" />
      </div>

      <div className="about-sections">
        <div className="about-left">
          <img src={headshotLGSquare} alt="" className="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
              vero rerum provident earum fugiat, harum sit inventore.{" "}
            </p>
            <p className="">
              Nihil ad natus saepe ipsum, dolores hic nisi cum eligendi, earum
              libero quasi?
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p className="">HTML</p>
              <p className="">CSS</p>
              <p className="">JavaScript</p>
              <p className="">React JS</p>
              <p className="">Google Fonts</p>
              <p className="">Tailwind CSS</p>
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1 className="">10+</h1>
          <p className="">YEARS OF EXPIERIENCE</p>
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
    </div>
  );
};

export default About;
