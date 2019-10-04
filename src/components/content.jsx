import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./home";
import Projects from "./projects";
import Projects2 from "./projects2";
import Projects3 from "./projects3";
import About from "./about";
import Contact from "./contact";

const Content = () => {
  return (
    <content>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/projects2" component={Projects2} />
        <Route path="/projects3" component={Projects3} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </content>
  );
};

export default Content;
