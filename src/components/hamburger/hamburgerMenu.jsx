import React from "react";
import { Link } from "react-router-dom";
import "./hamburgerToggle.css";

const HamburgerMenu = props => {
  let hamburgerClasses = "hamburger-menu";
  if (props.show) {
    hamburgerClasses = "hamburger-menu open";
  }
  return (
    <nav className={hamburgerClasses}>
      <ul>
        <li onClick={props.click}>
          <Link to="/" className="hamburger-link link pa2 dim">
            Home{" "}
          </Link>{" "}
        </li>
        <li onClick={props.click}>
          <Link to="/projects" className="hamburger-link link pa2 dim">
            Projects{" "}
          </Link>{" "}
        </li>
        <li onClick={props.click}>
          {" "}
          <Link to="/about" className="hamburger-link link pa2 dim">
            About{" "}
          </Link>{" "}
        </li>
        <li onClick={props.click}>
          {" "}
          <Link to="/contact" className="hamburger-link link pa2 dim">
            Contact{" "}
          </Link>{" "}
        </li>
      </ul>
    </nav>
  );
};

export default HamburgerMenu;
