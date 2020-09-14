import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './components/Home';
import Nav from "./components/Nav";
import Signup from "./components/Signup";
import Login from "./components/Login";
import UserHomepage from './components/UserHomepage';
import Footer from "./components/Footer";
import EditFolio from "./components/EditFolio";
import ContactUs from "./components/ContactUs";

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
          <Route exact path="/userHomepage" render={props => <UserHomepage {...props} />} />
          <Route exact path="/EditFolio" render={props => <EditFolio {...props} />} />
          <Route exact path="/ContactUs" render={props => <ContactUs {...props} />} />
        </Switch>
        <Footer />

      </Router>
    )
  }
}

export default App;
