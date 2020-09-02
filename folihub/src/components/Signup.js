import React from 'react';
import Welcome from "react-welcome-page";
import Logo_Dark from "../img/folihub_dark.png";
import {colorPlan, AuthenCanvas, Logo, Title, SignupForm} from "./Style";

class Signup extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            loading: false, // the loading animation
            loggIn : false,
        }
    }

    // again, the fetching api to check the authentication states

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
                    <SignupForm>This is the sign up form</SignupForm>
                </AuthenCanvas>
            )
          }
    }
}
export default Signup;