import styled from "styled-components";
import Button from "../Button";

export const StyledButton = styled(Button)`
  width: 50vmin;
  height: 10vmin;
  background-color: ${props => props.backgroundColor};
  border: none;
  border-radius: 20px;
  font-size: 3vmin;
  font-family: 'Poppins';
  color: #DAD4CB;
  cursor: pointer;
  box-shadow: 0vw 0.8vmin 1vmin rgba(0, 0, 0, 0.1);
  
  &:hover {
    opacity: 70%;
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column wrap;
  row-gap: 7.8vmin;
`