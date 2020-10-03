import styled from "styled-components";
import Logo_Dark from "../img/folihub_dark.png";
import Logo_Light from "../img/folihub_light.png";
import Login_Img from "../img/login-bgimg.jpg";
import Signup_Img from "../img/signup-bgimg.jpg";
import Home_Img from "../img/home-bgimg.jpg";

const colorPlan1 = {
    Dark: "#292F36",
    Dark_Medium: "#5F696D",
    Medium: "#95A3A4",
    Medium_Light: "#BBC3C4",
    Light: "#DFE3E3",
    Warn: "#B48383",
}

export const colorPlan = colorPlan1;

export const EditFolioContainer = styled.div
`
    width:  100%;
    height: 100vh;
    display: grid;
    grid-template-areas: "EditFolioTitle EditFolioManage"
    "EditFolioIndex EditFolioEditor";
    grid-template-columns: 200px auto;
    grid-template-rows: 80px auto;
`;

export const EditFolioManage = styled.div
`
    background-color: blue;
`;

export const EditFolioTitle = styled.div
`
    background-color: grey;
    opacity: 0.5;
`;

export const EditFolioIndex = styled.div
`
    background-color: red;
`;

export const EditFolioEditor = styled.div
`
    background-color: white;
`;
