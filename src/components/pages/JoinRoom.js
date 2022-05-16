import React from 'react';
import{GlobalStyles} from "./../styles/GlobalStyles.styled";
import {Header} from "../Header";
import {FormContainer} from "../styles/NewRoom.styled";
import Form from "react-bootstrap/Form";
import {StyledButton} from "../styles/Button.styled";

const Joinroom = () => {
    return (
        <div style={{overflow:"auto"}}>
            <GlobalStyles/>
            <Header/>
            <FormContainer>
                <Form style={{width:"80%"}}>
                    <Form.Group className="mb-3">
                        <Form.Label>Nick Name</Form.Label>
                        <Form.Control required type="text" size="lg" style={{boxShadow: "inset 0.1vh 0.15vw 0.3vh rgba(0, 0, 0, 0.25)"}}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Room Number</Form.Label>
                        <Form.Control required type="text" size="lg" style={{boxShadow: "inset 0.1vh 0.15vw 0.3vh rgba(0, 0, 0, 0.25)"}}/>
                    </Form.Group>
                    <Form.Group className="text-center">
                        <StyledButton
                            backgroundColor="#C68B4F"
                            text={"Join Room"}
                            width={"30vmin"}
                            height={"8vmin"}
                            fontSize={"3vmin"}
                            margin={"2.3vh 0vh auto auto"}
                            color={'#FFFFFF'}
                        >
                        </StyledButton>
                    </Form.Group>
                </Form>
            </FormContainer>
        </div>
    );
}

export default Joinroom;
