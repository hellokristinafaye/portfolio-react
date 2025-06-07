import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import headShotRectangle from "../../assets/headShotRectangle.jpg";

const About = () => {
  return (
    <div  className="about">
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
              vero rerum provident earum fugiat, harum sit inventore. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Iure sunt sint
              at natus. Debitis enim ratione numquam? Aperiam, quasi nisi.
              Reiciendis iste sequi sunt inventore atque. Consectetur error
              assumenda quas!{" "}
            </p>
            <p className="">
              Nihil ad natus saepe ipsum, dolores hic nisi cum eligendi, earum
              libero quasi? Reiciendis iste sequi sunt inventore atque.
              Consectetur error assumenda quas!
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
              <p className="about-text">Responive Web Design</p>
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
