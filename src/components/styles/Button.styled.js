import styled from "styled-components";
import Button from "../Button";

export const StyledButton = styled(Button)`
  width: ${props => props.width};
  height: ${props => props.height};
  background-color: ${props => props.backgroundColor};
  border: none;
  border-radius: 3vmin;
  font-size: ${props => props.fontSize};
  font-family: 'Poppins';
  color: ${props => props.color};
  cursor: pointer;
  box-shadow: 0vw 0.8vmin 1vmin rgba(0, 0, 0, 0.2);
  margin: ${props => props.margin};
  
  &:hover {
    opacity: 70%;
  }
`

StyledButton.defaultProps = {
    margin: '0vw 0vw 0vw 0vw',
    color: '#DAD4CB'
}

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column wrap;
  row-gap: 7.8vmin;
`