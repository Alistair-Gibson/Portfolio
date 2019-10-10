import React from "react";
import "./hamburgerToggle.css";

const HamburgerToggle = props => (
  <button className="toggle-button" onClick={props.click}>
    <div className="toggle-button-line" />
    <div className="toggle-button-line" />
    <div className="toggle-button-line" />
  </button>
);

export default HamburgerToggle;
