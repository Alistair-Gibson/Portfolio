import React, { Component } from "react";
import NavBar from "./components/navbar";
import Content from "./components/content";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Content />
      </div>
    );
  }
}

export default App;
