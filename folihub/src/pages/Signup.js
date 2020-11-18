import React from "react";
import Welcome from "react-welcome-page";
import {
  colorPlan,
  AuthenCanvasSignup,
  AuthenRedirectText,
  InputContainer,
  Title,
  AuthenForm,
  Button,
  TextLink
} from "../components/Style";
import { TextField } from "@material-ui/core";
import { postUserSignup } from "../api/userAPI";
import { Redirect } from "react-router-dom";
class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false, // the loading animation
      loggedIn: false,
      errorConfiromMsg: "",
      errorEmailMsg: "",
      email: "",
      password: "",
      confirmpw: "",
      redirect: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // again, the fetching api to check the authentication states

  handleChange(e) {
    this.setState({ errorMsg: "", errorConfiromMsg: "" });
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.confirmpw !== this.state.password) {
      this.setState({
        errorConfiromMsg:
          "Ooops, the confirm password and password are different!"
      });
    } else if (this.state.password.length < 7) {
      this.setState({
        errorConfiromMsg:
          "Password must contain at least 7 characters!"
      });
    } else if (!/[0-9]/.test(this.state.password)) {
      this.setState({
        errorConfiromMsg:
          "Password must contain at least one number!"
      });
    } else if (!/[a-z]/.test(this.state.password)) {
      this.setState({
        errorConfiromMsg:
          "Password must contain at least one lowercase letter!"
      });
    } else if (!/[A-Z]/.test(this.state.password)) {
      this.setState({
        errorConfiromMsg:
          "Password must contain at least one uppercase letter!"
      });
    } else {
      // the signup api here
      postUserSignup({
        email: this.state.email,
        password: this.state.password
      }).then(response => {
        if (response) {
          this.props.setLoggedIn(true);
          this.props.setEmail(this.state.email);
          this.setState({redirect:true})
        } else {
          this.setState({
            errorEmailMsg: "This email address is already taken"
          });
        }
      });
    }
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
      if (this.state.redirect) {
        return (
            <Redirect to = {`/userHomepage/${this.state.email}`} />
        )
      } else {
        return (
          <AuthenCanvasSignup>
            <Title>Sign Up</Title>
            <AuthenForm
              onSubmit={this.handleSubmit}
              onChange={this.handleChange}
            >
              <InputContainer>
                <TextField
                  error={this.state.errorEmailMsg}
                  helperText={this.state.errorEmailMsg}
                  size="small"
                  variant="filled"
                  id="email"
                  name="email"
                  placeholder="email@address.com"
                  label="Email"
                  type="email"
                  onChange={this.handleChange}
                  value={this.state.email}
                  required
                />
              </InputContainer>
              <InputContainer>
                <TextField
                  size="small"
                  variant="filled"
                  id="password"
                  name="password"
                  placeholder="your password"
                  label="Password"
                  type="password"
                  onChange={this.handleChange}
                  value={this.state.password}
                  required
                />
              </InputContainer>
              <InputContainer>
                <TextField
                  error={this.state.errorConfiromMsg}
                  helperText={this.state.errorConfiromMsg}
                  size="small"
                  variant="filled"
                  id="confirmpw"
                  name="confirmpw"
                  placeholder="re-enter your password"
                  label="Confirm Password"
                  type="password"
                  onChange={this.handleChange}
                  value={this.state.confirmpw}
                  required
                />
              </InputContainer>
              <InputContainer>
                <Button type="submit">Sign Up</Button>
              </InputContainer>
              <InputContainer>
                <Button disabled>Use Gmail</Button>
              </InputContainer>
              <AuthenRedirectText>
                <text>Already signed up?&nbsp;</text>
                <TextLink href="/login">Login</TextLink>
              </AuthenRedirectText>
            </AuthenForm>
          </AuthenCanvasSignup>
        );
      }
    }
  }
}
export default Signup;
