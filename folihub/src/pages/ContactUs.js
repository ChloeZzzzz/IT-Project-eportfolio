import React from 'react';
import Welcome from "react-welcome-page";
import { colorPlan, ContactUsContainer, ContactUsText,ReportContainer,Reports,Button, InputContainer, AboutUsContainer } from "../components/Style";
import { TextField } from '@material-ui/core';



class ContactUs extends React.Component {
    constructor(props) {
        super();
        this.state = {
            loading: false,
            loggedIn : false,
        }
    }

    submit = ()=>{
                  alert("Success!")
                  window.location.replace("/ContactUs")}

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
                    <AboutUsContainer>
                        <h1> About Us </h1>
                        <ContactUsText>
                            <hr/>
                            We are undergraduate students of University of Melbourne, Folihub is our graduation project. This Website is developed by TEAM 11 of IT porject(COMP 30023).If you have any questions or concerns about our website,please e-mail to yunweiw@student.unimelb.edu.au. 
                            Thank you for your support! 
                        </ContactUsText> 
                    </AboutUsContainer>
                    <ReportContainer> 
                        <Reports> 
                            <h1>Contact Us</h1> 
                            <hr/> 
                            <InputContainer>
                                <TextField 
                                    size = "small"
                                    variant = "filled"
                                    id = "Name"
                                    name = "Name"
                                    placeholder = "Name"
                                    label = "Name"
                                    onChange = {this.handleChange}
                                    required
                                />
                            </InputContainer>
                        
                            <InputContainer>
                                <TextField 
                                    size = "small"
                                    variant = "filled"
                                    id = "Phone NO."
                                    name = "Phone NO."
                                    placeholder = "Phone NO."
                                    label = "Phone NO."
                                    onChange = {this.handleChange}
                                    required
                                />
                            </InputContainer>
                
                            <InputContainer>
                                <TextField 
                                    size = "small"
                                    variant = "filled"
                                    id = "Email Address"
                                    name = "Email Address"
                                    placeholder = "Email Address"
                                    label = "Email Address"
                                    onChange = {this.handleChange}
                                    required
                                />
                            </InputContainer>               
                        
                            <InputContainer>
                                <TextField 
                                    position = "right"
                                    variant = "filled"
                                    id = "Please enter your problem"
                                    name = "Please enter your problem"
                                    placeholder = "Please enter your problem"
                                    label = "Please enter your problem"
                                    multiline rows={6}
                                    onChange = {this.handleChange}
                                    required
                                />
                            </InputContainer>

                            <InputContainer>
                                <Button type="submit" onClick = {()=>{this.submit()}}>
                                    submit
                                </Button>
                            </InputContainer>
                        </Reports>
                    </ReportContainer>      
                    
                      
                </ContactUsContainer>
                
                
                
                    

            )
        }
    }
}
export default ContactUs;