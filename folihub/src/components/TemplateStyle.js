import styled from "styled-components";

export const Container_1 = styled.div
`
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-areas:
    "IMG_1 TXT_1";
    height: 100vh;
    width: 100%;
    margin-top: 50px;
    margin-bottom: 50px;
`;

export const IMG_1_Container = styled.div
`
    display: grid;
    grid-template-rows: 80% 20%;
    grid-template-areas:
    "IMG_1",
    "Input";
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    background-color: grey;

`;

export const IMG_1 = styled.img
`
    max-height: 100%;
    max-width: 100%;
    height: auto;
    width: auto;
    margin-left: 10px;
    margin-right: 10px;
`;

export const Input = styled.input
`
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
`;

export const TXT_1 = styled.div
`

`;
