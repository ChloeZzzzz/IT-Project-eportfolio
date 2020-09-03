import styled from "styled-components";
import Logo_Dark from "../img/folihub_dark.png";
import Logo_Light from "../img/folihub_light.png";

const colorPlan1 = {
    Dark: "#292F36",
    Dark_Medium: "#5F696D",
    Medium: "#95A3A4",
    Medium_Light: "#BBC3C4",
    Light: "#DFE3E3",
    Warn: "#B48383",
}

export const colorPlan = colorPlan1;

const FontFormat = styled.div`
    font-family: Georgia;
`;

const CanvasFormat = styled.div`
    position: relative;
    height: 1000px;
    background-color: ${colorPlan.Light};
`;

const FormFormat = styled.form`
`;

export const NavContainer = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 6% 10% 54% 10% 10% 10%;
    justify-items: center | start | center | center | center | center;
    grid-template-areas: 'NavLogo NavName Save Export Preview User';
    height: 50px;
    background-color: ${colorPlan.Dark_Medium};
    box-shadow: 0px 5px 10px ${colorPlan.Medium};
`;

export const NavLogo = styled.div`
    position: relative;
    width: 80px;
    height: 80px;
    margin-top: 10px;
    margin-left: 10px;
    background-size: 80%;
    background-repeat: no-repeat;
    background-image: url(${Logo_Light});
`;

export const NavName = FontFormat.extend`
    font-weight: bold;
    margin-top: 7px;
    margin-left: 5px;
    font-size: 30px;
    font-family: "Geogia";
    color: ${colorPlan.Light};
`;

export const AuthenCanvas = CanvasFormat.extend`
    display: grid;
    grid-template-rows: 20% 10% 30% 10% 30%;
    align-items: end | start | center | end | start;
    justify-items: center;
    grid-template-areas: 
    'Logo'
    'Title'
    'SignupForm'
    'AuthenButton'
    'AuthenRedirectText';
`;

export const Logo = styled.img`
    
    margin-top: 100px;
    margin-bottom: auto;
    height:60px;
    width: 140px;
`;

export const Title = FontFormat.extend`
    background-color: white;
    font-weight: bold;
    margin-top: auto;
    margin-bottom: auto;
    font-size: 40px;
    color: ${colorPlan.Dark};
`
export const SignupForm = FormFormat.extend`

`;

export const LoginForm = FormFormat.extend`

`;
