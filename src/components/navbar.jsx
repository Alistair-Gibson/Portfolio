import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="main-title flex justify-between pa3">
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
