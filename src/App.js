import {StyledButton, ButtonGroup} from "./components/styles/Button.styled";
import {Container, LogoTitle, Rule, Title, FirstLetter} from "./components/styles/LandingPage.styled";
import{GlobalStyles} from "./components/styles/GlobalStyles.styled";
import styled from "styled-components";
import { ReactComponent as Logo } from './images/EYE.svg';

function App() {
  return (
    <Container>
        <GlobalStyles/>
        <LogoTitle>
            <Logo height="14vmin" width="14vmin"/>
            <Title><FirstLetter>C</FirstLetter>ontact</Title>
        </LogoTitle>

        <ButtonGroup>
        <StyledButton
            backgroundColor="#819FA6"
            text={"Create a New Room"}
        />
        <StyledButton
            backgroundColor="#C68B4F"
            text={"Join an Existing Room"}
        />
        </ButtonGroup>

        <Rule>How to Play</Rule>
    </Container>
  );
}

export default App;
