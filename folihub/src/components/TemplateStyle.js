import styled from "styled-components";

export const Container_1 = styled.div
`
    display: grid;
    grid-template-rows: 50% 50%;
    grid-template-areas:
    "IMG_1 TXT_1";
    height: 70vh;
    width: 90%;
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
    width: 90%;
    height: 70vh;
    margin-top: 5%;
    margin-left: auto;
    margin-right: auto;
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
    height: 70vh;
    margin-top: 5%;
    width: 90%;
`;
