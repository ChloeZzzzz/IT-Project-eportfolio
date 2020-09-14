import React from 'react';
import Welcome from "react-welcome-page";
import Logo_Light from "../img/folihub_light.png";
import { FadeDiv, colorPlan,ContactUsText, HomePage, IntroImg, HomeRedirect, FirstIntro, IconComponent, Poster, Poster1, Poster2, Poster3, SecondIntro, AboutProduct, HomepageLogo, HomeTitle, Slogan, HomeComponents, LoginRedirect, SignUpRedirect, SignupText, LoginText, SignUpGoogleRedirect, GoogleIcon, GoogleLink, AboutProductBlock1, AboutProductBlock2, AboutProductImg, AboutProductText  } from "./Style";
import Google_Icon from "../img/google-icon.png";
import Lock from "../img/lock.jpg";

class ContactUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            loggedIn : false,
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
                            image: require("../img/folihub_dark.png")
                        }
                    ]}
                />
            );
        } else {
            return (
                <ContactUs>
                        <h1>Contact Us</h1>
                        <hr/>
                        <ContactUsText>
                        We are undergraduate students of University of Melbourne, Folihub is our graduation project. This Website is developed by TEAM 11 of IT porject(COMP 30023).If you have any questions or concerns about our website,please e-mail to yunweiw@student.unimelb.edu.au. Thank you for your support! 
                        </ContactUsText>    
                       
                    
                </ContactUs>
            )
        }
    }
}
export default ContactUs;