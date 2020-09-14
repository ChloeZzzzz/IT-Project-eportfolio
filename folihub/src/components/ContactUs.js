import React from 'react';
import Welcome from "react-welcome-page";
import { colorPlan, ContactUsContainer, ContactUsText } from "./Style";

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
                <ContactUsContainer>
                    <h1>Contact Us</h1>
                    <hr/>
                    <ContactUsText>
                    We are undergraduate students of University of Melbourne, Folihub is our graduation project. This Website is developed by TEAM 11 of IT porject(COMP 30023).If you have any questions or concerns about our website,please e-mail to yunweiw@student.unimelb.edu.au. Thank you for your support! 
                    </ContactUsText>    
                </ContactUsContainer>
            )
        }
    }
}
export default ContactUs;