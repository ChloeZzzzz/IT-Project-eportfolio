import React, { Component } from "react";
import Welcome from "react-welcome-page";
import {colorPlan, NavContainer, NavIcon, NavLogo, NavName, UserIcon, UserContainer, NavText} from "./Style";
import Avatar from '@material-ui/core/Avatar';
import UserMenu from './UserMenu';
import { Redirect } from "react-router-dom";
class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false, // the loading animation
      redirect: false,
      toPath: "",
    };
    this.redirectTo = this.redirectTo.bind(this);
  }
  // there should have an api to check whether this visitor is logged in hence change the loggedIn state

  redirectTo(path) {
    this.setState({
      redirect: true,
      toPath: path,
    })
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
            <NavText onclick = {() => this.redirectTo("Tut")}> Tutorial</NavText>
            <NavText onclick = {() => this.redirectTo("ContactUs")}>Contact Us</NavText>
            <NavText onclick = {() => this.redirectTo(`userhomepage/${this.props.email}`)}>My Hub</NavText>
            <UserIcon style = {{visibility : this.props.loggedIn ? "visible" : "hidden"}}>
              <UserContainer>
                <UserMenu data = {this.props.email}/>
              </UserContainer>
            </UserIcon>
          </NavContainer>
        );
      } else {
        if (this.state.redirect) {
          return (
            <Redirect to = {`/${this.state.toPath}`} />
          )
        }
        return (
          <NavContainer>
          <NavIcon>
            <NavLogo href="/"/>
            <NavName>Folihub</NavName>
          </NavIcon>
          <NavText href = "/tut">Tutorial</NavText>
          <NavText href = "/ContactUs">Contact Us</NavText>
          <NavText href = "/login">Log in</NavText>
          <NavText href = "/signup">Sign up</NavText>
        </NavContainer>
        )
      }
    }
  }
}

export default Nav;
