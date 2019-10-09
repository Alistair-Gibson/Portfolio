import React from "react";
import { Spring } from "react-spring/renderprops";
import { Link } from "react-router-dom";
import Art1 from "./images/art1.png";
import Art2 from "./images/art2.png";
import Art3 from "./images/art3.png";

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
              <Link to="projects3" className="previous-link arrow">
                &#8249;
              </Link>
              <div className="project-title pa4">
                <h1 className="f-headline">
                  Personal Artist <br></br>Website
                </h1>
                <hr className="content-divider-top" />
                <hr className="content-divider-bottom" />
                <p className="measure">
                  A clean simple artist portfolio site that I made for my own
                  work demonstrating html and CSS markup, as well as some
                  JavaScript implementation in the image gallery.<br></br> My
                  main concern with this project was to make a site that was
                  easy to navigate responsive and let the paintings speak for
                  themselves as much as possible. I used it as an opportunity to
                  get to grips with grid layouts as well as the JavaScript
                  required for the modal images.
                </p>

                <div className="project-button-container pt4">
                  <button className="project-button f4 grow no-underline br-pill ph4 pv3 mb2 dib pointer">
                    View Site
                  </button>
                  <button className="project-button f4 grow no-underline br-pill ph4 pv3 mb2 dib pointer">
                    View Code
                  </button>
                </div>
              </div>
              <div className="project-image project-image-grid">
                <div>
                  <img
                    className="pa2 image img-top"
                    src={Art1}
                    alt="placeholder1"
                  />
                </div>
                <div>
                  <img
                    className="pa2 image img-bottom"
                    src={Art3}
                    alt="placeholder2"
                  />
                </div>
                <div>
                  <img
                    className="pa2 image img-right"
                    src={Art2}
                    alt="placeholder3"
                  />
                </div>
              </div>
              <Link to="/projects2" className="next-link arrow">
                &#8250;
              </Link>
            </div>
          </div>
        )}
      </Spring>
    </div>
  );
}
