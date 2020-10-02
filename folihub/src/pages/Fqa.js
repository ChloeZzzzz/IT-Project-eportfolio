import React from 'react';
import Welcome from "react-welcome-page";
import { colorPlan, ContactUsContainer, ContactUsText,FqaContainer,Reports,Button, InputContainer, AboutUsContainer } from "../components/Style";
import { TextField } from '@material-ui/core';



class Fqa extends React.Component {
    constructor(props) {
        super();
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
                    <FqaContainer>
                        <h1> FQA </h1>
                        <ContactUsText>
                            <hr/>
                            Q1.If i close my browser before i save my work, will Folihub save my previous work?
                             <p>
                            A: No! Please remember to save your work regularly, 
                            at present Folihub will not autosave your work(We are working on this right now :-).
                            </p>
                            <hr/>
                            Q2.How can i share my e-portfolio to my friends?
                            <p>
                            A: After you finish your e-portfolio,
                            you can export it either as PDF or a book-style web page,
                            and share the link to your friends.They can open your link without registration.
                            </p>
                            <hr/>
                            Q3.Can i export my e-portfolio as PNG or jpg?
                            <p>
                            A: NO! You are only able to export your work as PDF or a book-style web page. 
                            But you can export it as PDF first and then transfer it into PNG or jpg  through third-party tool.
                            </p>
                            <hr/>
                            Q4.How can i report bugs to Folihub team?
                            <p>
                            A: You can click the “contact us” link at the bottom, fill the form with your problem,
                            we will contact you if your problem have been confirmed.
                            </p>
                        </ContactUsText> 
                    </FqaContainer>
                        
                    
                      
                </ContactUsContainer>
                
                
                
                    

            )
        }
    }
}
export default Fqa;