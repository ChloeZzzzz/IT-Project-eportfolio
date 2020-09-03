import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './components/Home';
import Nav from "./components/Nav";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Footer from "./components/Footer";


import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      loggIn : false,
    }
  }

  // there should have an api to check whether this visitor is logged in hence change the loggedIn state

  render()  {
    return (
      <Router>
        
        <Nav />
        <Switch>
          <Route exact path="/" render={props => <Home {...props} />} />
          <Route exact path="/Login" render={props => <Login {...props} />} />
          <Route exact path="/signup" render={props => <Signup {...props} />} />
        </Switch>
        <Footer />

      </Router>
    )
  }
}

export default App;
