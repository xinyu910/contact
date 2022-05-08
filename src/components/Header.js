import React from 'react';
import { ReactComponent as LogoIcon } from './../images/EYE.svg';
import styled from "styled-components";
//import {Rule} from "./styles/Home.styled";

const LogoStyle = styled.header`
display: flex;
align-items: center;
column-gap: 1vmin;
margin-left: 4vmin;
margin-top: 4vmin;
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
  position: relative;
  float: right;
  &:hover {
    opacity: 70%;
  }
`

export const Header = () => {
    return (
        <div>
          <LogoStyle>
            <Rule>How to Play</Rule>
            <LogoIcon height="7.5vmin" width="7.5vmin"/>
            <Title><FirstLetter>C</FirstLetter>ontact</Title>
          </LogoStyle>
        </div>
        
        
    );
}
