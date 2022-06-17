import React, { useState} from 'react'
import{GlobalStyles} from "../styles/GlobalStyles.styled";
import {StyledButton} from "../styles/Button.styled";
import {Header} from "../Header";
import Form from 'react-bootstrap/Form'
import {FormContainer} from "../styles/NewRoom.styled";
import makeRoomCode from "../../utils/randomRoomCode";
import {useNavigate} from "react-router-dom";


const Newroom = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [emptyName, setEmptyName] = useState(false);
    const handleNickName = (event) => {
        setUsername(event.target.value);
    };

    const handleFormSubmit = () => {
        if (username === '') {
            setEmptyName(true);
        } else {
            navigate(`/room/${makeRoomCode(5)}`, {state: {name: username, checkRoom: false}})
        }
    };
    return (
        <div style={{overflow:"auto"}}>
            <GlobalStyles/>
            <Header/>
            <FormContainer>
                <Form style={{width:"80%"}}>
                    <Form.Group className="mb-3">
                        <Form.Label>Nick Name</Form.Label>
                        <Form.Control
                            type="text"
                            size="lg"
                            style={{boxShadow: "inset 0.1vh 0.15vw 0.3vh rgba(0, 0, 0, 0.25)"}}
                            onChange={handleNickName}
                        />
                        {emptyName &&
                        <Form.Text
                        style={{color: '#B36C48'}}>
                            Please Enter Your Nick Name!
                        </Form.Text>
                        }
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Rounds to Play</Form.Label>
                        <Form.Select required defaultValue={"3"} size="lg" style={{boxShadow: "inset 0.1vh 0.15vw 0.3vh rgba(0, 0, 0, 0.25)"}}>
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
                    <Form.Group className="text-center">
                        <StyledButton
                            backgroundColor="#819FA6"
                            text={"Create Room"}
                            width={"30vmin"}
                            height={"8vmin"}
                            fontSize={"3vmin"}
                            margin={"2.3vh 0vh auto auto"}
                            color={'#FFFFFF'}
                            type={"button"}
                            onClick={handleFormSubmit}
                        >
                        </StyledButton>
                    </Form.Group>
                </Form>
            </FormContainer>
        </div>
    );
}

export default Newroom;
