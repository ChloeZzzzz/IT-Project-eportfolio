import styled from "styled-components";

const colorPlan1 = {
    Dark: "#292F36",
    Dark_Medium: "#5F696D",
    Medium: "#95A3A4",
    Medium_Light: "#BBC3C4",
    Light: "#DFE3E3",
    Warn: "#B48383",
}

export const colorPlan = colorPlan1;

export const FolioContainer = styled.div
`
    display: grid;
    grid-template-rows: 150px auto;
`;

export const FolioHeader = styled.div
`

`;

export const FolioTitle = styled.div
`
    margin-top: 40px;
    text-align: center;
    font-family: Georgia;
    font-size: 50px;
`;

export const FolioOwner = styled.div
`
    margin-top: 10px;
    margin-right: 10px;
    text-align: end;
    font-family:  Georgia;
    font-size: 15px;
`;

export const Container_1_Export = styled.div
`
    display: grid;
    grid-template-rows: 50% 50%;
    grid-template-areas:
    "IMG_1 TXT_1";
    height: 85vh;
    width: 80vw;
    margin-top: auto;
    margin-left: auto;
    margin-bottom: 50px;
    border: 1px solid black;
    background-color: white;
`;

export const PageContainer = styled.div
`
    margin-left: auto;
    margin-right: auto;
`;
