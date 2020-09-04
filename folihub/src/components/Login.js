import React from 'react';
import Welcome from "react-welcome-page";
import Logo_Dark from "../img/folihub_dark.png";
import {colorPlan, AuthenCanvas, Logo, Title, LoginForm} from "./Style";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            loading: false,
            loggIn: false,
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    handleSubmit(event) {
        alert("an email is submitted: " + this.state.value);
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
                <AuthenCanvas>
                    <Title>Login</Title>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text"
                        class="Email"
                        value={this.state.value} 
                        onChange={this.handleChange}
                        placeholder="Email"
                        />
                    </form>
                </AuthenCanvas>
            )
        }
    }
}
export default Login;