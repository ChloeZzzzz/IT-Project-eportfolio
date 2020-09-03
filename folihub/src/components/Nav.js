import React, { Component } from "react";
import Welcome from "react-welcome-page";
import {colorPlan, NavContainer, NavLogo, NavName} from "./Style";
import { shadows } from '@material-ui/system';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false, // the loading animation
      loggedIn: false
    };
  }
  // there should have an api to check whether this visitor is logged in hence change the loggedIn state

  render() {
    if (this.state.loading) {
      // the loading animation
      return (
        <Welcome
          loopDuration={1000}
          data={[
            {
              backgroundColor: colorPlan.Light,
              textColor: colorPlan.Dark,
              text: "Loading...",
              image: require("../img/folihub_dark.png")
            }
          ]}
        />
      );
    } else {
      return (
        <NavContainer boxShadow={3}>
          <NavLogo />
          <NavName>Folihub</NavName>
        </NavContainer>
      );
    }
  }
}

export default Nav;
