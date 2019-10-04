import React from "react";
import { Spring } from "react-spring/renderprops";

const Contact = () => {
  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ duration: 1000 }}
    >
      {props => (
        <div style={props}>
          <div className="contact-grid">
            <h1 className="contact-title f-headline">Contact Me</h1>

            <form
              action="mailto:alistair111@gmail.com"
              method="post"
              enctype="text/plain"
            >
              <div className="flex justify-between">
                <label for="exampleFormControlInput1">Name</label>
                <input
                  type="name"
                  id="exampleFormControlInput1"
                  placeholder="name"
                  className="contact-name"
                />
              </div>
              <div className="flex justify-between pv2">
                <label for="exampleFormControlInput1">Email address</label>
                <input
                  type="email"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  className="contact-email"
                />
              </div>
              <div className="text-area">
                <label
                  className="f6 b db mb2"
                  for="exampleFormControlTextarea1"
                >
                  Message
                </label>
                <textarea
                  className="db border-box hover-black w-100 ba b--black-20 pa2 br2 mb2"
                  id="exampleFormControlTextarea1"
                  rows="8"
                ></textarea>
              </div>
              <input
                className="project-button f4 grow no-underline br-pill ph4 pv3 mb2 dib pointer"
                type="submit"
                name=""
              />
            </form>
            <div>
              <h3>E-mail: alistair111@gmail.com</h3>
              <h3>Telephone: 07711994575</h3>
            </div>
          </div>
        </div>
      )}
    </Spring>
  );
};

export default Contact;
