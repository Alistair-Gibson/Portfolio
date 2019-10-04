import React from "react";
import { Spring } from "react-spring/renderprops";
import { Link } from "react-router-dom";
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
              <Link to="projects" className="previous-link arrow">
                &#8249;
              </Link>
              <div className="project-title pa4">
                <h1 className="f-headline">
                  Blog with MongoDB<br></br> Database
                </h1>
                <hr className="content-divider-top" />
                <hr className="content-divider-bottom" />
                <p className="measure">
                  This project was a text based blog website that ultimately
                  will become a place where myself and my partner will write
                  about places we have eaten. We both enjoy trying interesting
                  new places and it will also potentially double as a travel
                  blog.
                  <br></br> The website utilizes a MongoDB database to sort and
                  send the posts with a page on the site itself used to compose
                  the post, the coding is done using Node.js.
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
              <Link to="/projects3" className="next-link arrow">
                &#8250;
              </Link>
            </div>
          </div>
        )}
      </Spring>
    </div>
  );
}
