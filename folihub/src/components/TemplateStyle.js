import styled from "styled-components";

export const Container_1 = styled.div
`
    display: grid;
    grid-template-rows: 50% 50%;
    grid-template-areas:
    "IMG_1 TXT_1";
    height: 70vh;
    width: 80vw;
    margin-top: 50px;
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
    width: 20vw;
    height: 60vh;
    margin-top: 5%;
    margin-left: auto;
    margin-right: auto;
    background-color:blue;
`;

export const IMG_1 = styled.img
`
    max-height: 100%;
    max-width: 100%;
    height: auto;
    width: auto;
    margin-left: 2%;
    margin-right: 2%;
`;

export const Input = styled.input
`
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
`;

export const TXT_1 = styled.div
`
    margin-top: 5%;
    margin-left: 15%;
`;
