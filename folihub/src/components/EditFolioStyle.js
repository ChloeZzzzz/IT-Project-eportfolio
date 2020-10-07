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
    grid-template-columns: 15vw auto;
    grid-template-rows: 12vh auto;
`;

export const EditFolioManage = styled.div
`
    background-color: ${colorPlan.Medium_Light};
`;

export const EditFolioToolbar = styled.div
`
    display: grid;
    grid-template-columns: 79% 7% 7% 7%;
    grid-template-areas: "others SaveDiv BookDiv PDFDiv";
    border-left: 1px solid ${colorPlan.Dark_Medium};
    border-right: 1px solid ${colorPlan.Dark_Medium};
    border-bottom: 1px solid ${colorPlan.Dark_Medium};
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: ${colorPlan.Light};
    height: 8vh;
    width: 95%;
    margin-left: auto;
    margin-right: auto;
`;

export const EditFolioTitle = styled.div
`
    text-align: center;
    font-family: "Georgia";
    background-color: ${colorPlan.Light};
    border-right: 1px solid ${colorPlan.Dark_Medium};
`;

export const EditFolioIndex = styled.div
`
    background-color: ${colorPlan1.Light};
    border-right: 1px solid ${colorPlan.Dark_Medium};
`;

export const EditFolioEditor = styled.div
`
    background-color: ${colorPlan1.Medium_Light};
`;

export const MyPageTitle = styled.div
`
    font-family: "Georgia";
    font-size: 25px;
    margin-top: 10%;
    text-align: center;
    color: #292F36;
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
        border: 1px solid #5F696D;
    };
`;

export const SelectedIndexCard = styled.div
`
    background-color: white;
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
    border: 2px solid #5F696D;
    border-radius: 10px;
    height: 15%;
    width: 85%;
`;

export const NewPage = styled.div
`
    margin-top: 5%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    font-family: "Georgia";
    height: 3.5%;
    width: 85%;
    border-radius: 10px;
    border: 1px solid #95A3A4;
    background-color: white;
    &:hover {
        border: 1px solid #5F696D;
    };
`;

export const BookDiv = styled.button
`
    position: relative;
    margin-top: 21%;
    width: 50%;
    height: 58%;
`;

export const PDFDiv = styled.button
`
    position: relative;
    margin-top: 21%;
    width: 50%;
    height: 58%;
`;

export const EditForm = styled.input
`
    font-size: 20px;
    width: 80%;
`;
