import React from "react";
import { Spring } from "react-spring/renderprops";
import Placeholder from "./images/placeholder.png";
import html5 from "./icons/html5.svg";
import css3 from "./icons/css3.svg";
import javscript from "./icons/javascript.svg";
import react from "./icons/react.svg";
import nodejs from "./icons/node-dot-js.svg";
import jquery from "./icons/jquery.svg";
import mongodb from "./icons/mongodb.svg";
import postgresql from "./icons/postgresql.svg";
import github from "./icons/github.svg";

const About = () => {
  return (
    <div>
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ duration: 1000 }}
      >
        {props => (
          <div style={props}>
            <div className="about-container">
              <div className="about-text pl5 pr5">
                <h1 className="f-headline pa2">About Me</h1>
                <p className="pa2">
                  I am a full stack web developer recently relocated to Exeter
                  originally trained as an artist I enjoy creating visually
                  engaging and responsive websites and web apps. I can’t get
                  enough of the rush of joy I feel when I finally crack the
                  problem and everything falls nicely into place just how you
                  wanted it to.{" "}
                </p>
                <p className="pa2">
                  Focused on continuing the learning experience and expanding my
                  skill set while producing interesting and engaging projects. I
                  want to be involved with every stage of the web development
                  process whilst refining and perfecting the languages I already
                  work with and also expanding my ability's and learning
                  anything that might help me become a more resourceful and
                  effective creator.
                </p>
                <div className="skill-grid pt5">
                  <div className="skill-grid-icon-1">
                    <div>
                      <img className="about-icon" src={html5} alt="css3" />
                    </div>
                    <div>
                      <img className="about-icon" src={css3} alt="css3" />
                    </div>
                    <div>
                      <img className="about-icon" src={javscript} alt="css3" />
                    </div>
                    <div>
                      <img className="about-icon" src={react} alt="css3" />
                    </div>
                    <div>
                      <img className="about-icon" src={nodejs} alt="css3" />
                    </div>
                  </div>
                  <div className="skill-grid-text-1">
                    <div>
                      {" "}
                      <p className="icon-text">HTML</p>
                    </div>
                    <div>
                      <p className="icon-text">CSS</p>
                    </div>
                    <div>
                      <p className="icon-text">JavaScript</p>
                    </div>
                    <div>
                      <p className="icon-text">React</p>
                    </div>
                    <div>
                      <p className="icon-text">Node.js</p>
                    </div>
                  </div>
                  <div>
                    <div className="skill-grid-icon-2">
                      <img className="about-icon" src={jquery} alt="css3" />
                    </div>
                    <div>
                      <img className="about-icon" src={mongodb} alt="css3" />
                    </div>
                    <div>
                      <img className="about-icon" src={postgresql} alt="css3" />
                    </div>
                    <div>
                      <img className="about-icon" src={github} alt="css3" />
                    </div>
                  </div>
                  <div className="skill-grid-text-2">
                    <div>
                      <p className="icon-text">JQuery</p>
                    </div>
                    <div>
                      <p className="icon-text">MongoDB</p>
                    </div>
                    <div>
                      <p className="icon-text">PostGreSQL</p>
                    </div>
                    <div>
                      <p className="icon-text">GitHub</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="about-image pa4">
                <img src={Placeholder} alt="about" />
              </div>
            </div>
          </div>
        )}
      </Spring>
    </div>
  );
};

export default About;
