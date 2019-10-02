import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./home";
import Projects from "./projects";
import About from "./about";
import Contact from "./contact";

const Content = () => {
  return (
    <content>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </content>
  );
};

export default Content;
