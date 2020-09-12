import React from 'react';
import Welcome from "react-welcome-page";
import {colorPlan, AuthenCanvasSignup, AuthenRedirectText, InputContainer, Title, AuthenForm, Button, TextLink} from "./Style";
import {TextField} from '@material-ui/core';
import {postUserSignup} from '../api/userAPI';

class Signup extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            loading: false, // the loading animation
            loggedIn : false,
            errorConfiromMsg:  '',
            email: '',
            password: '',
            confirmpw: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // again, the fetching api to check the authentication states

    handleChange(e) {
        this.setState({errorMsg : ''});
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    handleSubmit(e) {
        if (this.state.confirmpw !== this.state.password) {
            this.setState({
                errorConfiromMsg:  'Ooops, the confirm password and password are different!',
            })
        } else {
            // the signup api here
            postUserSignup({email: this.state.email, password: this.state.password}).then(response => {
                console.log(response);
            });
        }
        e.preventDefault();
    }

    render(){
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
                <AuthenCanvasSignup>
                    <Title>Sign Up</Title>
                    <AuthenForm onSubmit = {this.handleSubmit} onChange={this.handleChange}>
                        <InputContainer>
                            <TextField
                                size = "small"
                                variant = "filled"
                                id = "email"
                                name = "email"
                                placeholder = "email@address.com"
                                label = "Email"
                                type = "email"
                                onChange = {this.handleChange}
                                value = {this.state.email}
                                required
                            />
                        </InputContainer>
                        <InputContainer>
                            <TextField
                                size = "small"
                                variant = "filled"
                                id = "password"
                                name = "password"
                                placeholder = "your password"
                                label = "Password"
                                type = "password"
                                onChange = {this.handleChange}
                                value = {this.state.password}
                                required
                            />
                        </InputContainer>
                        <InputContainer>
                            <TextField
                                error = {this.state.errorConfiromMsg}
                                helperText = {this.state.errorConfiromMsg}
                                size = "small"
                                variant = "filled"
                                id = "confirmpw"
                                name = "confirmpw"
                                placeholder = "re-enter your password"
                                label = "Confirm Password"
                                type = "password"
                                onChange = {this.handleChange}
                                value = {this.state.confirmpw}
                                required
                            />
                        </InputContainer>
                        <InputContainer>
                            <Button type="submit">
                                Sign Up
                            </Button>
                        </InputContainer>
                        <InputContainer>
                            <Button disabled>
                                Use Gmail
                            </Button>
                        </InputContainer>
                        <AuthenRedirectText>
                            <text>Already signed up?&nbsp;</text>
                            <TextLink href="/login">Login</TextLink>
                        </AuthenRedirectText>
                    </AuthenForm>
                </AuthenCanvasSignup>
            )
          }
    }
}
export default Signup;