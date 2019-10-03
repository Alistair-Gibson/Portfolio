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
          <div className="contact-grid pt6">
            <form
              action="mailto:alistair111@gmail.com"
              method="post"
              enctype="text/plain"
            >
              <div className="flex justify-between pv2 ">
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
                className="f6 link dim br3 ba ph3 pv2 mb2 dib black"
                type="submit"
                name=""
              />
            </form>
            <div>
              <h1>E-mail: alistair111@gmail.com</h1>
              <h1>Telephone: 07711994575</h1>
            </div>
          </div>
        </div>
      )}
    </Spring>
  );
};

export default Contact;
