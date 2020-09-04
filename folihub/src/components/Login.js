import React from 'react';
import Welcome from "react-welcome-page";
import Logo_Dark from "../img/folihub_dark.png";
import {colorPlan, AuthenCanvas, Button, InputContainer, Title, TextLink} from "./Style";
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
                <AuthenCanvas>
                    <Title>Login</Title>
                    <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
                        <InputContainer>
                            <TextField
                                size="small"
                                variant="outlined"
                                id="email"
                                name="email"
                                placeholder="Email"
                                label="email"
                                onchange={this.handleChange}
                                required
                            />
                        </InputContainer>
                        <InputContainer>
                            <TextField
                                size="small"
                                variant="outlined"
                                id="password"
                                name="password"
                                placeholder="Password"
                                label="password"
                                onchange={this.handleChange}
                                required
                            />
                        </InputContainer>
                        <Button type="submit">
                            Login
                        </Button>
                        <text>Doesn't have account?&nbsp;</text>
                        <TextLink href="/Signup">Sign up</TextLink> 
                    </form>
                </AuthenCanvas>
            )
        }
    }
}
export default Login;