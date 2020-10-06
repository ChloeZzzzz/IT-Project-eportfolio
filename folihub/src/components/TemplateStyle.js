import styled from "styled-components";

export const Container_1 = styled.div
`
    display: grid;
    grid-template-rows: 50% 50%;
    grid-template-areas:
    "IMG_1 TXT_1";
    height: 85vh;
    width: 80vw;
    margin-top: 1%;
    margin-left: 3%;
    margin-bottom: 50px;
    border: 1px solid black;
    background-color: white;
`;

export const IMG_1_Container = styled.div
`
    display: grid;
    grid-template-rows: 80% 20%;
    grid-template-areas:
    "IMG_1",
    "Input";
    width: 30vw;
    height: 75vh;
    margin-top: 5%;
    margin-left: 7%;
    margin-right: 7%;
`;

export const IMG_1 = styled.img
`
    max-height: 66vh;
    max-width: 30vw;
    height: auto;
    width: auto;
`;

export const Input = styled.input
`
    margin-top: 10%;
    margin-left: auto;
    margin-right: auto;
`;

export const TXT_1 = styled.div
`
    margin-top: 5%;
`;
