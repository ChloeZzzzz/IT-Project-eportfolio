import React from 'react';
import Welcome from "react-welcome-page";
import {colorPlan, AuthenCanvas, AuthenRedirectText, InputContainer, Title, SignupForm, Button, TextLink} from "./Style";
import {TextField} from '@material-ui/core';

class Signup extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            loading: false, // the loading animation
            loggedIn : false,
            msg:  '',
            email: '',
            password: '',
            confirmpw: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // again, the fetching api to check the authentication states

    handleChange(e) {
        this.setState({msg : ''});
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    handleSubmit(e) {
        if (this.state.confirmpw !== this.state.password) {
            this.setState({
                msg:  'Ooops, the confirm password and password are different!',
            })
        } else {
            // the signup api here
        }
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
                <AuthenCanvas>
                    <Title>Sign up</Title>
                    <SignupForm class="Form" onSubmit = {this.handleSubmit} onChange={this.handleChange}>
                        <InputContainer>
                            <TextField
                                size = "small"
                                variant = "outlined"
                                id = "email"
                                name = "email"
                                placeholder = "email@address.com"
                                label = "Email"
                                onChange = {this.handleChange}
                                required
                            />
                        </InputContainer>
                        <InputContainer>
                            <TextField
                                size = "small"
                                variant = "outlined"
                                id = "password"
                                name = "password"
                                placeholder = "your password"
                                label = "Password"
                                onChange = {this.handleChange}
                                required
                            />
                        </InputContainer>
                        <InputContainer>
                            <TextField
                                size = "small"
                                variant = "outlined"
                                id = "confirmpw"
                                name = "confirmpw"
                                placeholder = "re-enter your password"
                                label = "Confirm Password"
                                onChange = {this.handleChange}
                                required
                            />
                        </InputContainer>
                        <Button type="submit">
                            Sign up
                        </Button>
                        <AuthenRedirectText>
                            <text>Already signed up?&nbsp;</text>
                            <TextLink href="/login">Login</TextLink>
                        </AuthenRedirectText>
                    </SignupForm>
                </AuthenCanvas>
            )
          }
    }
}
export default Signup;