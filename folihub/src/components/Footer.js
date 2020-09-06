import React from 'react';
import { colorPlan, FooterContainer, Copyright, Link, CopyrightTop, CopyrightMid, CopyrightBtm, FooterLink } from "./Style";

class Footer extends React.Component{
    render(){
        return (
            <FooterContainer>
                <Copyright>
                    <CopyrightTop>
                        <div style = {{gridArea:"languages"}}>
                            <p style = {{fontWeight: "bold"}}>Languages</p>
                            <p style = {{opacity: "0.8"}}>English</p>
                        </div>
                        <div style = {{gridArea:"socialMedias"}}>
                            <p style = {{fontWeight: "bold"}}>Social Medias</p>
                            <p style = {{opacity: "0.8"}}>GitHub</p>
                        </div>
                    </CopyrightTop>
                    <hr style = {{height: "1px", opacity: "0.8", borderWidth: "0", backgroundColor: colorPlan.Light, width: "100%", gridArea: "horizon"}}/>
                    <CopyrightMid>
                        <div style = {{gridArea:"left"}}>
                            <p style = {{fontWeight: "bold"}}>About Us</p>
                            <FooterLink href = "">Our Company</FooterLink>
                        </div>
                        <div style = {{gridArea:"mid"}}>
                            <p style = {{fontWeight: "bold"}}>Product</p>
                            <FooterLink href = "">Our Product</FooterLink>
                        </div>
                        <div style = {{gridArea:"right"}}>
                            <p style = {{fontWeight: "bold"}}>Resources</p>
                            <FooterLink href = "">Frequently Asked Questions</FooterLink><br/>
                            <FooterLink href = "">Help Center</FooterLink>
                        </div>
                    </CopyrightMid>
                    <CopyrightBtm>
                        <p style = {{gridArea : "copyrightText"}}>Copyright &#169; Folihub 2020</p>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Link style = {{gridArea : "tnc"}} href=''>Terms and Conditions</Link>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Link style = {{gridArea : "contact"}} href=''>Contact Us</Link>
                    </CopyrightBtm>
                </Copyright>
            </FooterContainer>
        )
    }
}
export default Footer;