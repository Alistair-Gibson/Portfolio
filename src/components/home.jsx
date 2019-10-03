import React from "react";
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
                <h3 className="f2 fw2">
                  freelance web developer <br></br>/ designer and artist
                </h3>
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
