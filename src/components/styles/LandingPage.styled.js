import styled from "styled-components";

export const Container = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  height:100vmin;
  flex-flow: column wrap;
  row-gap: 5vmin;
`
export const Title = styled.h1`
  font-size: 7vmin;
  font-weight: 20;
  color: #DAD4CB;
`
export const FirstLetter = styled.span`
  font-size: 10.5vmin;
  font-weight: 20;
  color: #DC9428;
`
export const Rule = styled.h2`
  font-size: 2.5vmin;
  font-weight: 8;
  color: #DAD4CB;
  text-decoration: underline;
  cursor: pointer;
  margin: 3vmin;
  &:hover {
    opacity: 70%;
  }
`
export const LogoTitle = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1.8vmin;
`