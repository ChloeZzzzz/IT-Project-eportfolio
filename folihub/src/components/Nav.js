import React, { Component } from "react";
import Welcome from "react-welcome-page";
import {colorPlan, NavContainer, NavIcon, NavLogo, NavName, UserIcon, UserContainer, NavText} from "./Style";
import Avatar from '@material-ui/core/Avatar';
import UserMenu from './UserMenu';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false, // the loading animation
    };
  }
  // there should have an api to check whether this visitor is logged in hence change the loggedIn state

  componentDidMount() {
    console.log(this.props.loggedIn)
  }

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
      if (this.props.loggedIn) {
        return (
          <NavContainer>
            <NavIcon>
              <NavLogo href="/"/>
              <NavName>Folihub</NavName>
            </NavIcon>
            <div style = {{backgroundColor: "green"}}></div>
            <div style = {{backgroundColor: "black"}}>Our Product</div>
            <div style = {{backgroundColor: "yellow"}}>Contact Us</div>
            <UserIcon style = {{visibility : this.props.loggedIn ? "visible" : "hidden"}}>
              <UserContainer>
                <UserMenu data = {this.props.email}/>
              </UserContainer>
            </UserIcon>
          </NavContainer>
        );
      } else {
        return (
          <NavContainer>
          <NavIcon>
            <NavLogo href="/"/>
            <NavName>Folihub</NavName>
          </NavIcon>
          <NavText>Our Product</NavText>
          <div style = {{backgroundColor: "black"}}></div>
          <div style = {{backgroundColor: "yellow"}}></div>
        </NavContainer>
        )
      }
    }
  }
}

export default Nav;
