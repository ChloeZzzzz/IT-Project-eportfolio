import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './pages/Home';
import Nav from "./components/Nav";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import UserHomepage from './pages/UserHomepage';
import Footer from "./components/Footer";
import EditFolio from "./pages/EditFolio";
import ContactUs from "./pages/ContactUs";
import ExportFolio from './pages/ExportFolio';
import Faq from "./pages/Faq";

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
          <Route exact path="/userHomepage/:email" render={props => <UserHomepage {...props} />} />

          <Route exact path="/EditFolio/:id" render={props => <EditFolio {...props} />} />
          <Route exact path="/ContactUs" render={props => <ContactUs {...props} />} />
          <Route exact path="/FAQ" render={props => <Faq {...props} />} />
          <Route exact path="/ExportFolio/:id" render={props => <ExportFolio {...props} />} />
        </Switch>
        <Footer />

      </Router>
    )
  }
}

export default App;
