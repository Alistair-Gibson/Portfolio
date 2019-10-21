import React from "react";
import { Spring } from "react-spring/renderprops";
import { Link } from "react-router-dom";
import birdWeek1 from "./images/birdWeek1.png";
import birdWeek2 from "./images/birdWeek2.png";
import birdWeek3 from "./images/birdWeek3.png";

export default function Projects() {
  return (
    <div>
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ duration: 1000 }}
      >
        {props => (
          <div style={props}>
            <div className="project-container">
              <Link to="projects2" className="previous-link arrow">
                &#8249;
              </Link>
              <div className="project-title">
                <h1 className="project-name">
                  Bird a Week <br></br> React App
                </h1>
                <hr className="content-divider-top" />
                <hr className="content-divider-bottom" />
                <p className="measure">
                  React web app that I created to present a series of drawings
                  that I have started. I will be drawing a different bird a
                  week, messing with the style and level of detail and this app
                  will present them week by week.<br></br> The site scales the
                  cards with the images and text on, based off of the items in a
                  JavaScript array. Ultimately I plan to move this information
                  to an external database and create an API for the interaction.
                </p>

                <div className="project-button-container pt4">
                  <form action="https://bird-a-week-project.netlify.com/">
                    <button className="project-button f4 grow no-underline br-pill ph4 pv3 mb2 dib pointer">
                      View Site
                    </button>
                  </form>
                  <form action="https://github.com/Alistair-Gibson/Bird-a-Week">
                    <button className="project-button f4 grow no-underline br-pill ph4 pv3 mb2 dib pointer">
                      View Code
                    </button>
                  </form>
                </div>
              </div>
              <div className="project-image project-image-grid">
                <div>
                  <img
                    className="pa2 img-top"
                    src={birdWeek2}
                    alt="placeholder1"
                  />
                </div>
                <div>
                  <img
                    className="pa2 img-bottom"
                    src={birdWeek3}
                    alt="placeholder2"
                  />
                </div>
                <div>
                  <img
                    className="pa2 img-right"
                    src={birdWeek1}
                    alt="placeholder3"
                  />
                </div>
              </div>
              <Link to="/projects" className="next-link arrow">
                &#8250;
              </Link>
            </div>
          </div>
        )}
      </Spring>
    </div>
  );
}
