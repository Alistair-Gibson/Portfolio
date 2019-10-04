import React from "react";
import { Link } from "react-router-dom";
import { Spring } from "react-spring/renderprops";

const Home = () => {
  return (
    <div>
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ duration: 1000 }}
      >
        {props => (
          <div style={props}>
            <div className="content flex">
              <div className="pa5 main-title">
                <h1 className="f-headline">Alistair Gibson</h1>
                <hr className="content-divider-top" />
                <hr className="content-divider-bottom" />
                <h3 className="f2 fw2">
                  freelance web developer <br></br>/ designer and artist
                </h3>
                <div className="project-button-container pt4">
                  <Link to="/projects">
                    <button className="project-button f4 grow no-underline br-pill ph4 pv3 mb2 dib pointer">
                      Projects
                    </button>
                  </Link>
                  <button className="project-button f4 grow no-underline br-pill ph4 pv3 mb2 dib pointer">
                    CV
                  </button>
                  {/* <form action="https://github.com/Alistair-Gibson"> */}
                  <button className="project-button f4 grow no-underline br-pill ph4 pv3 mb2 dib pointer">
                    GitHub
                  </button>
                  {/* </form> */}
                </div>
              </div>
              <div></div>
            </div>
          </div>
        )}
      </Spring>
    </div>
  );
};

export default Home;
