import React, { useState, useEffect } from "react";
import "./App.css";
import Work from "./pages/Work";
import Education from "./pages/Education";
import Games from "./pages/Games";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Work" component={Work} />
          <Route path="/Education" component={Education} />
          <Route path="/Games" component={Games} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div className="Home">
    <header>
      <h1>Select TodoLists</h1>
    </header>
    <div className="links">
      <Link to="/Work">Work</Link>
      <Link to="/Education">Education</Link>
      <Link to="/Games">Games</Link>
    </div>
  </div>
);

export default App;
