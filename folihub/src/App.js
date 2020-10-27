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

import "./App.css";

  function App()  {
    const [loggedIn, setLoggedIn] = React.useState(false);
    const [email, setEmail] = React.useState("");

    return (
      <Router>
        <Nav {...{email, setEmail, setLoggedIn, loggedIn}}/>
        <Switch>
          <Route exact path="/" render={props => <Home {...props} />} />
          <Route exact path="/Login" render={props => <Login {...{setEmail, setLoggedIn, props}} />} />
          <Route exact path="/signup" render={props => <Signup {...{setEmail, setLoggedIn, props}} />} />
          <Route exact path="/userHomepage/:email" render={props => <UserHomepage {...{email, loggedIn, props}} />} />

          <Route exact path="/EditFolio/:id" render={props => <EditFolio {...{email, props}} />} />
          <Route exact path="/ContactUs" render={props => <ContactUs {...props} />} />
        </Switch>
        <Footer />

      </Router>
    )
  }


export default App;
