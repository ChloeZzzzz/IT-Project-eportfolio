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
    background-color: ${colorPlan.Medium};
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