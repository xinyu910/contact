import React from 'react';
import{GlobalStyles} from "../styles/GlobalStyles.styled";
import {StyledButton} from "../styles/Button.styled";
import {Header} from "../Header";
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import {FormContainer} from "../styles/NewRoom.styled";

const formStyle = {
    display: 'flex'
};

const Newroom = () => {
    return (
        <div style={{overflow:"auto"}}>
            <GlobalStyles/>
            <Header/>
            <FormContainer>
                <Form ClassName="text-center">
                    <Form.Group className="mb-3">
                        <Form.Label>Nick Name</Form.Label>
                        <Form.Control type="text"/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Rounds to Play</Form.Label>
                        <Form.Select aria-label="Round" required>
                            <option value="" hidden disabled selected>Select an Option</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </Form.Select>
                    </Form.Group>
                    <StyledButton
                        backgroundColor="#819FA6"
                        text={"Create Room"}
                        width={"30vmin"}
                        height={"8vmin"}
                        fontSize={"3vmin"}
                    >
                        Submit
                    </StyledButton>
                </Form>
            </FormContainer>
        </div>
    );
}

export default Newroom;
