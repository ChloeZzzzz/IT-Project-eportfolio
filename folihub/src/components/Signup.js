import React from 'react';
import Welcome from "react-welcome-page";
import Logo_Dark from "../img/folihub_dark.png";
import {colorPlan, AuthenCanvas, Logo, Title, SignupForm, Button} from "./Style";
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
                    <Logo src = {Logo_Dark}/>
                    <Title>Sign up</Title>
                    <SignupForm onSubmit = {this.handleSubmit} onChange={this.handleChange}>
                        <TextField
                            variant = "outlined"
                            id = "email"
                            name = "email"
                            placeholder = "Enter your email address here"
                            label = "email"
                            onChange = {this.handleChange}
                            required
                        />
                        <TextField
                            variant = "outlined"
                            id = "password"
                            name = "password"
                            placeholder = "Enter your password here"
                            label = "password"
                            onChange = {this.handleChange}
                            value = {this.state.password}
                            required
                        />
                        <TextField
                            variant = "outlined"
                            id = "confirmpw"
                            name = "confirmpw"
                            placeholder = "Confirm your password here"
                            label = "confirmpw"
                            onChange = {this.handleChange}
                            required
                        />
                        <Button
                            type="submit"
                            variant="contained"
                        >
                        Sign up
                        </Button>
                    </SignupForm>
                </AuthenCanvas>
            )
          }
    }
}
export default Signup;