import styled from "styled-components";
import Logo_Dark from "../img/folihub_dark.png";
import Logo_Light from "../img/folihub_light.png";
import Login_Img from "../img/login-bgimg.jpg";
import Signup_Img from "../img/signup-bgimg.jpg";

const colorPlan1 = {
    Dark: "#292F36",
    Dark_Medium: "#5F696D",
    Medium: "#95A3A4",
    Medium_Light: "#BBC3C4",
    Light: "#DFE3E3",
    Warn: "#B48383",
}

export const colorPlan = colorPlan1;

const FontFormat = styled.div
`
    font-family: Georgia;
`;

const CanvasFormat = styled.div
`
    height: 750px;
    z-index: -1;
`;

const FormFormat = styled.form`
`;

export const NavContainer = styled.div
`
    position: relative;
    display: grid;
    grid-template-columns: 60% 10% 10% 10% 10%;
    justify-items: center | start | center | center | center | center;
    grid-template-areas: 'NavIcon Save Export Preview User';
    height: 50px;
    background-color: ${colorPlan.Dark_Medium};
    box-shadow: 0px 5px 10px ${colorPlan.Medium};
`;

export const NavIcon = styled.div
`
    display: flex;
`;

export const NavLogo = styled.div
`
    width: 80px;
    height: 80px;
    margin-top: 10px;
    margin-left: 10px;
    background-size: 80%;
    background-repeat: no-repeat;
    background-image: url(${Logo_Light});
`;

export const NavName = FontFormat.extend
`
    font-weight: bold;
    margin-top: 7px;
    font-size: 30px;
    color: ${colorPlan.Light};
`;

export const AuthenCanvas = CanvasFormat.extend
`
    display: grid;
    grid-template-rows: 15em 20em;
    align-items: end | center | start;
    justify-items: center;
    grid-template-areas: 
    'Title'
    'Form';
`;

export const AuthenCanvasLogin = AuthenCanvas.extend
`
    background-color: ${colorPlan.Light};
    background: url(${Login_Img});
    background-size: 1500px;   
`;

export const AuthenCanvasSignup = AuthenCanvas.extend
`
    background-color: ${colorPlan.Light};
    background: url(${Signup_Img});
    background-size: 1500px;   
`;

export const Logo = styled.img
`
    margin-top: 100px;
    margin-bottom: auto;
    height:60px;
    width: 140px;
`;

export const Title = FontFormat.extend
`
    font-weight: bold;
    margin-top: 150px;
    margin-bottom: auto;
    font-size: 40px;
    color: ${colorPlan.Dark};
`

export const AuthenForm = FormFormat.extend`
    background-color: rgba(255, 255, 255, 0.4);
    width: 50%;
    min-width: 200px;
    max-width: 625px;
`;

export const InputContainer = styled.div
`
    display: grid;
    width: 80%;
    min-width: 160px;
    max-width: 500px;
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const Button = styled.button
`
    background-color: ${colorPlan.Dark_Medium};
    border-color: ${colorPlan.Dark_Medium};
    color: ${colorPlan.Light};
    font-family: Georgia;
    font-weight: bold;
    border:  2px solid;
    border-radius: 5px;
    height: 50px;
    &:disabled {
        background-color: ${colorPlan.Medium};
    }
    &:hover {background-color: ${colorPlan.Medium}};
    &:active {
        background-color: ${colorPlan.Light};
        color: ${colorPlan.Dark_Medium};
    };
`;

export const TextLink = styled.a
`
    color: ${colorPlan.Dark_Medium};
    font-family: Georgia;
`;

export const AuthenRedirectText = styled.div
`
    text-align: center;
    margin-top: 10px;
    font-size: 10px;
    font-family: Georgia;
`;

export const CollectionCanvas = CanvasFormat.extend
`
    display: flex;
    background-color: ${colorPlan.Light};
`;

export const ItemContainer = styled.div
`
    width: 80%;
    height: 70%;
    min-width: 600px;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 100px;
    display: grid;
    grid-template-columns: repeat(auto-fill, 120px);
    grid-template-rows: repeat(auto-fill, 170px);
    justify-items: repeat(center);
    align-items: repeat(center);
    grid-row-gap: 100px;
    grid-column-gap: 50px;
`;

export const Item = styled.div
`
    background-color: rgba(242,242,242,0.8);
    border-radius: 5px;
    box-shadow: 5px 5px 8px ${colorPlan.Medium};
`;

export const ItemDescription = styled.div
`
    width: 100%;
    height: 25%;
    margin-top: 105%;
    background-color: white;
    border-radius: 5px;
`

export const ItemTitle = FontFormat.extend
`
    text-align: center;
`;

export const ItemDate = FontFormat.extend
`
    text-align: center;
    font-size: 10px;
    opacity: 0.8;
`;