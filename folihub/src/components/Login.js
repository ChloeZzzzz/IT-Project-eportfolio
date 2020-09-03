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
        }
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
                    <Logo src={Logo_Dark}/>
                    <Title>Login</Title>
                    <LoginForm/>
                </AuthenCanvas>
            )
        }
    }
}
export default Login;