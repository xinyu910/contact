import React from 'react';
import { ReactComponent as LogoIcon } from './../images/EYE.svg';
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";

const LogoStyle = styled.header`
  display: flex;
  align-items: center;
  column-gap: 1vmin;
  margin-left: 4vmin;
  cursor: pointer;
`
const Title = styled.h1`
  font-size: 3.5vmin;
  font-weight: 20;
  color: #DAD4CB;
`
const FirstLetter = styled.span`
  font-size: 5.25vmin;
  font-weight: 20;
  color: #DC9428;
`

const Rule = styled.div`
  font-size: 2.5vmin;
  font-weight: 8;
  color: #DAD4CB;
  text-decoration: underline;
  cursor: pointer;
  margin-right: 6vmin;
  &:hover {
    opacity: 70%;
  }
`
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3vmin;
`

const Icon = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.3vmin;
`

export const Header = () => {
    const navigate = useNavigate();
    return (
        <Container>
            <LogoStyle onClick={() => {navigate("/")}}>
                <Icon><LogoIcon height="5vmin" width="8vmin"/></Icon>
                <Title><FirstLetter>C</FirstLetter>ontact</Title>
            </LogoStyle>
            <Rule>How to Play</Rule>
        </Container>
    );
}
