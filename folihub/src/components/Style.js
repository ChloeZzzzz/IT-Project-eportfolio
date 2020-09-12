import styled, { keyframes } from "styled-components";
import Logo_Dark from "../img/folihub_dark.png";
import Logo_Light from "../img/folihub_light.png";
import Login_Img from "../img/login-bgimg.jpg";
import Signup_Img from "../img/signup-bgimg.jpg";
import Home_Img from "../img/home-bgimg.jpg";
import { fadeIn } from 'react-animations';

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
    height: 90vh;
    z-index: -1;
`;

const FormFormat = styled.form`
`;

//delete the position and top line to disable sicky nav bar
export const NavContainer = styled.div
`
    z-index: 1;
    position: sticky;
    top: 0px;
    display: grid;
    grid-template-columns: 60% 10% 10% 10% 10%;
    justify-items: center | center | center | center | center;
    grid-template-areas: 'NavIcon Save Export Preview UserIcon';
    height: 50px;
    background-color: ${colorPlan.Dark_Medium};
    box-shadow: 0px 5px 10px ${colorPlan.Dark};
`;

export const NavIcon = styled.div
`
    display: flex;
`;

export const NavLogo = styled.div
`
    width: 70px;
    height: 70px;
    margin-top: 12px;
    margin-left: 10px;
    background-size: 80%;
    background-repeat: no-repeat;
    background-image: url(${Logo_Light});
`;

export const NavName = FontFormat.extend
`
    font-weight: bold;
    margin-top: 9.5px;
    font-size: 25px;
    color: ${colorPlan.Light};
`;

export const UserIcon = styled.div
`
    height: 50px;
    display: grid;
    align-items: center;
    justify-items: end;
    margin-right: 5%;
`;

export const UserContainer = styled.div
`
    display: flex;
    justify-items: center;
    align-items: center;
    margin-right: 5%;
`;

export const FooterContainer = styled.div
`
    background-color: ${colorPlan.Dark_Medium};
    color: ${colorPlan.Light};
    font-size: 10px;
    text-align: center;
    font-family: "Georgia";
`;

export const Copyright = FooterContainer.extend
`   
    display: grid;
    grid-template-areas: 
    'CopyrightTop'
    'horizon'
    'CopyrightMid'
    'CopyrightBtm';
    width: 50%;
    min-width: 300px;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
`;

export const CopyrightTop = styled.div
`
    display: grid;
    grid-template-areas: 'languages socialMedias';
`;

export const CopyrightMid = styled.div
`
    display: grid;
    grid-template-areas: 'left mid right';
`;

export const CopyrightBtm = styled.div
`
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
`;

export const MediaContainer = styled.div
`
    opacity: 0.8;
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-areas: 'a b c';
    width: 50%;
    margin-left: auto;
    margin-right: auto;
`;

export const FooterLink = styled.a
`
    text-decoration: none;
    font-family: "Georgia";
    opacity: 0.8;
    color: ${colorPlan.Light};
`;

export const Link = styled.a
`   
    display: flex;
    justify-content: center;
    font-family: "Georgia";
    opacity: 0.8;
    color: ${colorPlan.Light};
    font-size: 10px;
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
    background: url(${Login_Img}) center 0 no-repeat;
    background-size: cover;
    background-attachment: fixed;
`;

export const AuthenCanvasSignup = AuthenCanvas.extend
`
    background-color: ${colorPlan.Light};
    background: url(${Signup_Img}) center 0 no-repeat;
    background-size: cover;
    background-attachment: fixed;
`;

export const HomepageLogo = styled.img
`
    margin-top: 100px;
    margin-left: 1.5%;
    height:60px;
    width: 140px;
`;

export const Title = FontFormat.extend
`
    font-weight: bold;
    margin-top: 150px;
    font-size: 40px;
    color: ${colorPlan.Dark};
    text-align: center;
    background-color: rgba(255, 255, 255, 0.4);
    width: 50%;
    min-width: 200px;
    max-width: 625px;
    height: 90px;
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
    &:hover {
        background-color: ${colorPlan.Medium};
        cursor: pointer;
    };
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

export const ItemDescription = styled.div
`
    width: 100%;
    height: 25%;
    margin-top: 105%;
    background-color: white;
    border-radius: 5px;
    display: grid;
    grid-template-rows: 60% 40%;
    grid-template-areas:
    'ItemTitle'
    'ItemDate';
    align-items: center;
    justify-items: center;
`

export const ItemTitle = FontFormat.extend
`
    font-size: 18px;
`;

export const ItemDate = FontFormat.extend
`
    font-size: 10px;
    opacity: 0.8;
    width: 100%;
    display: grid;
    grid-template-columns: 20% 60% 20%;
    align-items: center;
    justify-items: center;
`;

export const Item = styled.div
`
    background-color: rgba(242,242,242,0.8);
    border-radius: 5px;
    box-shadow: 5px 5px 8px ${colorPlan.Medium};
    &:hover {
        background-color: ${colorPlan.Light};
        cursor: pointer;
    };
    &:hover > ${ItemDescription} {
        background-color: rgba(242,242,242,0.8); 
    };
    &:active {
        background-color: ${colorPlan.Medium_Light}; 
        cursor: pointer;
    }
    &:active > ${ItemDescription} {
        background-color: ${colorPlan.Light}
    }
`

export const HomePage = styled.div
`
    display: grid;
    background-color: ${colorPlan.Light};
    grid-template-rows: auto auto;
    grid-template-areas:
        'IntroImg',
        'AboutProduct',
    z-index: -1;
`;

export const IntroImg = styled.div
`   
    display: grid;
    grid-template-rows: 60% 40%;
    grid-template-areas: 
        'FirstIntro',
        'SecondIntro';
    background: url(${Home_Img}) no-repeat;
    background-size: cover;
    background-attachment: fixed;
    height: 100vh;
`;

export const FirstIntro = styled.div
`
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-areas:
        'IconComponent' 'Poster';
    margin-left: 3%;
`;

export const SecondIntro = styled.div
`
    display: grid;
    grid-template-columns: 33.3% 33.3% 33.3%;
    grid-template-areas:
        "Poster1" "Poster2" "Poster3"
    height: 80px;
`;

export const IconComponent = styled.div
`
    display: grid;
    grid-template-rows: 45% 20% 17% 18%;
    grid-template-areas: 
        "HomeComponents",
        "Slogan",
        "HomeRedirect"
        "SignUpGoogleRedirect";
    height: 100%;
`;

export const Poster = styled.div
`
    height: 420px;
`;

export const Poster1 = styled.div
`
`;

export const Poster2 = styled.div
`
`;

export const Poster3 = styled.div
` 
`;

export const HomeRedirect = styled.div
`
    margin-left: 20px;
    margin-top: 10px;
    display: grid;
    width: 50%;
    grid-template-columns: 50% 50%;
    column-gap: 5%;
    grid-template-areas: 
        "SignUpRedirect" "LoginRedirect";
`;

export const SignUpRedirect = styled.a
`
    background-color: ${colorPlan.Warn};
    border-color: ${colorPlan.Dark};
    color: ${colorPlan.Light};
    font-family: Georgia;
    font-weight: bold;
    border:  2px solid;
    border-radius: 5px;
    height: 50px;
    width: 90%
    &:disabled {
        background-color: ${colorPlan.Warn};
    }
    &:hover {
        background-color: #d9b6b6;
        cursor: pointer;
    };
    &:active {
        background-color: ${colorPlan.Warn};
        color: ${colorPlan.Dark_Medium};
    };
`;

export const SignupText = FontFormat.extend
`
    position: relative;
    margin-top: 15px;
    text-align: center;
`;

export const LoginText = FontFormat.extend
`
    position: relative;
    margin-top: 15px;
    text-align: center;
`;

export const LoginRedirect = styled.a
`
    background-color: ${colorPlan.Dark_Medium};
    border-color: ${colorPlan.Dark};
    color: ${colorPlan.Light};
    font-family: Georgia;
    font-weight: bold;
    border:  2px solid;
    border-radius: 5px;
    height: 50px;
    width: 90%;
    &:disabled {
        background-color: ${colorPlan.Medium};
    }
    &:hover {
        background-color: ${colorPlan.Medium};
        cursor: pointer;
    };
    &:active {
        background-color: ${colorPlan.Light};
        color: ${colorPlan.Dark_Medium};
    };
`;

export const SignUpGoogleRedirect = styled.div
`
    display: flex;
    margin-left: 20px;
    color: ${colorPlan.Light};
    font-family: Georgia;
`;

export const AboutProduct = styled.div
`
    position: relative;
    margin-top: 60px;
    margin-left: 30px;
    margin-right: 30px;
    font-family: Georgia;
    font-size: 130%;
`;

export const HomeTitle = FontFormat.extend
`   
    margin-top: 90px;
    font-size: 67px;
    font-weight: bold;
    margin-left: 20px;
    color: ${colorPlan.Light};
`;

export const Slogan = FontFormat.extend
`
    position: relative;
    width: 90%;
    color: ${colorPlan.Light};
    font-size: 30px;
    font-style: Italic;
    margin-left: 20px;
`;

export const HomeComponents = styled.div
`
    display: flex;
`;

export const GoogleIcon = styled.img
`
    position: relative;
    margin-top: 2px;
    margin-bottom: 20px;
    height: 15px;
    width: 15px;
`;

export const GoogleLink = styled.a
`
    color: ${colorPlan.Light};
    font-family: Georgia;
`;

export const AboutProductBlock1 = styled.div
`
    margin-top: 30px;
    background-color: rgba(255, 255, 255, 0.5);
    height: 350px;
    border-radius: 1%;
    display: grid;
    grid-template-columns: 40% 60%;
    grid-template-areas: "left right";
`;

export const AboutProductBlock2 = styled.div
`
    margin-top: 30px;
    background-color: rgba(255, 255, 255, 0.5);
    height: 350px;
    border-radius: 1%;
    display: grid;
    grid-template-columns: 60% 40%;
    grid-template-areas: "left right";
`;

export const AboutProductImg = styled.img
`
    height: 300px;
    width: 90%;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 10px;
`;

export const AboutProductText = styled.div
`
    position: relative;
    margin-top: 1%;
    margin-right: 20px;
    margin-left:20px;
`;

export const fadeAnimation = keyframes `${fadeIn}`;
export const FadeDiv = styled.div
`
    animation: 3s ${fadeAnimation};
`;