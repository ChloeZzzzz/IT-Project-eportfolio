import React from 'react';
import Welcome from "react-welcome-page";
import Logo_Dark from "../img/folihub_dark.png";
import {colorPlan, AuthenCanvasLogin, Button, InputContainer, Title, AuthenRedirectText, TextLink} from "./Style";
import {TextField} from '@material-ui/core';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            loading: false,
            loggIn: false,
            msg: '',
            email: '',
            password: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({msd: ''});
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit(event) {
        //login api
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
                         image: {Logo_Dark}
                     }
                 ]}
                />
            );
        }
        else {
            return (
                <AuthenCanvasLogin>
                    <Title>Login</Title>
                    <form class="Form" onSubmit={this.handleSubmit} onChange={this.handleChange}>
                        <InputContainer>
                            <TextField
                                size="small"
                                variant="filled"
                                id="email"
                                name="email"
                                label="Email"
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
                                onchange={this.handleChange}
                                required
                            />
                        </InputContainer>
                        <Button type="submit">
                            Login
                        </Button>
                        <AuthenRedirectText>
                            <text>Doesn't have an account?&nbsp;</text>
                            <TextLink href="/Signup">Sign up</TextLink> 
                        </AuthenRedirectText>
                    </form>
                </AuthenCanvasLogin>
            )
        }
    }
}
export default Login;