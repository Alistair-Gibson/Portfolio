import React from "react";
import { Spring } from "react-spring/renderprops";
import imagePlaceholderH from "./images/imagePlaceholderH.png";
import imagePlaceholderV from "./images/imagePlaceholderV.png";

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
              <div className="project-title">
                <h1 className="f-headline">
                  Personal Artist <br></br>Website
                </h1>
                <p>
                  Clean and simple artist portfolio website that I made for my
                  own work.
                </p>
                <div className="project-button-container pt4">
                  <button className="project-button f4 grow no-underline br-pill ph4 pv3 mb2 dib">
                    View Site
                  </button>
                  <button className="project-button f4 grow no-underline br-pill ph4 pv3 mb2 dib">
                    View Code
                  </button>
                </div>
              </div>
              <div className="project-image project-image-grid">
                <div>
                  <img
                    className="pa2 img-top"
                    src={imagePlaceholderH}
                    alt="placeholder1"
                  />
                </div>
                <div>
                  <img
                    className="pa2 img-bottom"
                    src={imagePlaceholderV}
                    alt="placeholder2"
                  />
                </div>
                <div>
                  <img
                    className="pa2 img-right"
                    src={imagePlaceholderH}
                    alt="placeholder3"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </Spring>
    </div>
  );
}
