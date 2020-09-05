import React from 'react';
import { FooterContainer, Copyright, Link } from "./Style";

class Footer extends React.Component{
    render(){
        return (
            <FooterContainer>
                <Copyright>
                    Copyright &#169; Folihub 2020 &nbsp;&nbsp;&nbsp;&nbsp;
                </Copyright>
                <Link href=''>Terms and Conditions</Link>
                <Link href=''>Privacy Considerations</Link>
            </FooterContainer>
        )
    }
}
export default Footer;