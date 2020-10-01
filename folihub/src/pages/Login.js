import React from 'react';
import Welcome from "react-welcome-page";
import Logo_Dark from "../img/folihub_dark.png";
import {colorPlan, AuthenCanvasLogin, Button, InputContainer, Title, AuthenForm, AuthenRedirectText, TextLink} from "../components/Style";
import {TextField} from '@material-ui/core';
import {postUserLogin, wwww} from '../api/userAPI';
import axios from 'axios';
import { resolve } from 'path';
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
/*
        event.preventDefault();
        //login api
        console.log("???")
        const promise = new Promise((resolve, reject) => {
            try {
                wwww().then((res) => {
                    console.log(res);
                    resolve(res);
                })
            } catch (e) {
                reject(e);
            }
        });
        promise.then((err, result) => {
            if (err) { {
                console.log(err)
            }}
            console.log("promsie then");
            console.log(result);
        })
       

        
        axios
        .post(
            "https://folihub-api.herokuapp.com/user/login", 
            {"email": this.state.email, "password": this.state.password},
            {withCredentials: true, crossdomain: true})
        .then((response) => {
            console.log(response);
            console.log(response.data);
            console.log(response.data.passport);
        })
        .catch((error)=> {
            console.log(error);
        })
        */
        postUserLogin({email: this.state.email, password: this.state.password}).then(response => {
            console.log(response);
        });

        event.preventDefault();
        
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
                    <AuthenForm onSubmit={this.handleSubmit} onChange={this.handleChange}>
                        <InputContainer>
                            <TextField
                                size="small"
                                variant="filled"
                                id="email"
                                name="email"
                                label="Email"
                                type = "email"
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
                                type = "password"
                                onchange={this.handleChange}
                                required
                            />
                        </InputContainer>
                        <InputContainer>
                            <Button type="submit">
                                Login
                            </Button>
                        </InputContainer>
                        <AuthenRedirectText>
                            <text>Doesn't have an account?&nbsp;</text>
                            <TextLink href="/Signup">Sign up</TextLink> 
                        </AuthenRedirectText>
                    </AuthenForm>
                </AuthenCanvasLogin>
            )
        }
    }
}
export default Login;