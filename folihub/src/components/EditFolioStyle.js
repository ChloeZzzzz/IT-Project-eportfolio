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
    background-color: {colorPlan1.Light};
    border-right: 1px solid black;
`;

export const EditFolioEditor = styled.div
`
    background-color: {colorPlan1.Medium };
`;

export const MyPageTite = styled.div
`
    font-family: "Georgia";
    font-size: 20px;
    text-align: center;
    margin-top: 5px;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
`;

export const IndexCard = styled.div
`
    background-color: white;
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid #95A3A4;
    border-radius: 10px;
    height: 15%;
    width: 85%;
    &:hover {
        border: 1px solid #292F36;
    };
`;

export const SelectedIndexCard = styled.div
`
    background-color: white;
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid #292F36;
    border-radius: 10px;
    height: 15%;
    width: 85%;
`;