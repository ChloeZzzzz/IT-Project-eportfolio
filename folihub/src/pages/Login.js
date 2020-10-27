import React from "react";
import Welcome from "react-welcome-page";
import Logo_Dark from "../img/folihub_dark.png";
import {
  colorPlan,
  AuthenCanvasLogin,
  Button,
  InputContainer,
  Title,
  AuthenForm,
  AuthenRedirectText,
  TextLink
} from "../components/Style";
import { TextField } from "@material-ui/core";
import { postUserLogin, wwww } from "../api/userAPI";
import { Redirect } from "react-router-dom";

import axios from "axios";
import { resolve } from "path";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      loggIn: false,
      msg: "",
      email: "",
      password: "",
      redirect: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ msd: "" });
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    postUserLogin({
      email: this.state.email,
      password: this.state.password
    }).then(response => {
      if (response) {
        this.props.setLoggedIn(true);
        this.props.setEmail(this.state.email);
        this.setState({redirect:true})
      } else {
        this.setState({
          msg: "Wrong Email or Password"
        });
      }
    });

    //event.preventDefault();
  }

  render() {
    if (this.state.loading) {
      return (
        <Welcome
          loopDuration={1000}
          data={[
            {
              backgroundColor: colorPlan.Light,
              textColor: colorPlan.Dark,
              text: "Loading...",
              image: { Logo_Dark }
            }
          ]}
        />
      );
    } else {
      if (this.state.redirect) {
        return (
            <Redirect to = {`/userHomepage/${this.state.email}`} />
        )
      } else {
        return (
          <AuthenCanvasLogin>
            <Title>Login</Title>
            <AuthenForm
              onSubmit={this.handleSubmit}
              onChange={this.handleChange}
            >
              <InputContainer>
                <TextField
                  error={this.state.msg}
                  helperText={this.state.msg}
                  size="small"
                  variant="filled"
                  id="email"
                  name="email"
                  label="Email"
                  type="email"
                  onchange={this.handleChange}
                  required
                />
              </InputContainer>
              <InputContainer>
                <TextField
                  size="small"
                  variant="filled"
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  onchange={this.handleChange}
                  required
                />
              </InputContainer>
              <InputContainer>
                <Button type="submit">Login</Button>
              </InputContainer>
              <AuthenRedirectText>
                <text>Doesn't have an account?&nbsp;</text>
                <TextLink href="/Signup">Sign up</TextLink>
              </AuthenRedirectText>
            </AuthenForm>
          </AuthenCanvasLogin>
        );
      }
    }
  }
}
export default Login;
