import React from "react";
import { Link } from "react-router-dom";
import HamburgerToggle from "./hamburger/hamburgerToggle";
import "../App.css";

const NavBar = props => {
  return (
    <div className="navBar">
      <div className="main-title flex justify-between pa3">
        <div className="hamburger-toggle-button">
          <HamburgerToggle click={props.hamburgerClickHandler} />
        </div>
        <h1 className="f3 ml3 fw4"> Alistair Gibson </h1>{" "}
        <div className="flex items-center pa3">
          <Link to="/" className="navBar-links link pa2 dim">
            Home{" "}
          </Link>{" "}
          <Link to="/projects" className="navBar-links link pa2 dim">
            Projects{" "}
          </Link>{" "}
          <Link to="/about" className="navBar-links link pa2 dim">
            About{" "}
          </Link>{" "}
          <Link to="/contact" className="navBar-links link pa2 dim">
            Contact{" "}
          </Link>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default NavBar;
