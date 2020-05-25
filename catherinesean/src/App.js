import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from './landingpage';
import Schedule from './schedule';
import NavBar from './navbar.js';
import Travel from './travel.js';
import ThingsToDo from './thingsToDo.js';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/" component={LandingPage} exact />
          <Route path="/schedule" component={Schedule} exact />
          <Route path="/travel" component={Travel} exact />
          <Route path="/things-to-do" component={ThingsToDo} exact />
        </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
