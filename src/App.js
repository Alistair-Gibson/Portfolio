import React, { Component } from "react";
import NavBar from "./components/navbar";
import HamburgerMenu from "./components/hamburger/hamburgerMenu";
import Backdrop from "./components/backdrop/backdrop";
import Content from "./components/content";
import "./App.css";

class App extends Component {
  state = {
    hamburgerMenuOpen: false
  };

  hamburgerToggleClickHandler = () => {
    this.setState(prevState => {
      return {
        hamburgerMenuOpen: !prevState.hamburgerMenuOpen
      };
    });
  };

  backdropClickHandler = () => {
    this.setState({ hamburgerMenuOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.hamburgerMenuOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <div
        style={{
          height: "100%"
        }}
      >
        <NavBar hamburgerClickHandler={this.hamburgerToggleClickHandler} />{" "}
        <HamburgerMenu
          click={this.backdropClickHandler}
          show={this.state.hamburgerMenuOpen}
        />
        {backdrop}
        <Content />
      </div>
    );
  }
}

export default App;
