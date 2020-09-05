import React from 'react';
import { FooterContainer, Copyright, Link } from "./Style";

class Footer extends React.Component{
    render(){
        return (
            <FooterContainer>
                <Copyright>
                    Copyright &#169; Folihub 2020 &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link href=''>Terms and Conditions</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link href=''>Contact Us</Link>
                </Copyright>
            </FooterContainer>
        )
    }
}
export default Footer;