import React from 'react';
import {StyledButton, ButtonGroup} from "../styles/Button.styled";
import {Container, LogoTitle, Rule, Title, FirstLetter} from "../styles/Home.styled";
import{GlobalStyles} from "../styles/GlobalStyles.styled";
import { ReactComponent as LogoIcon } from './../../images/EYE.svg';
import {useNavigate} from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    return (
        <Container>
        <GlobalStyles/>
        <LogoTitle>
            <LogoIcon height="14vmin" width="14vmin"/>
            <Title><FirstLetter>C</FirstLetter>ontact</Title>
        </LogoTitle>

        <ButtonGroup>
        <StyledButton
            backgroundColor="#819FA6"
            text={"Create a New Room"}
            width={"50vmin"}
            height={"10vmin"}
            fontSize={"3vmin"}
            onClick={() => {navigate("/newroom")}}
        />
        <StyledButton
            backgroundColor="#C68B4F"
            text={"Join an Existing Room"}
            width={"50vmin"}
            height={"10vmin"}
            fontSize={"3vmin"}
            onClick={() => {navigate("/joinroom", {state: {full: false, invalid: false}})}}
        />
        </ButtonGroup>

        <Rule>How to Play</Rule>
    </Container>
    );
}

export default Home;
