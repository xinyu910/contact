import{GlobalStyles} from "../styles/GlobalStyles.styled";
import {Header} from "../Header";
import {FormContainer} from "../styles/NewRoom.styled";
import Form from "react-bootstrap/Form";
import {StyledButton} from "../styles/Button.styled";
import React, { useState } from 'react'
import {useNavigate, useLocation} from "react-router-dom";

const Joinroom = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [roomCode, setRoomCode] = useState('');
    const [username, setUsername] = useState('');
    const [emptyName, setEmptyName] = useState(false);
    const invalidRoom = location.state.invalid
    const fullRoom = location.state.full

    const handleJoinRoom = (event) => {
        setRoomCode(event.target.value);
    };
    const handleNickName = (event) => {
        setUsername(event.target.value);
    };
    const handleSubmit = (event) => {
        if (username === '') {
            setEmptyName(true);
        } else {
            navigate(`/room/${roomCode}`, {state: {name: username, checkRoom: true}});
        }
    }
    return (
        <div style={{overflow:"auto"}}>
            <GlobalStyles/>
            <Header/>
            <FormContainer>
                <Form style={{width:"80%"}}>
                    <Form.Group className="mb-3">
                        <Form.Label>Nick Name</Form.Label>
                        <Form.Control
                            required 
                            type="text"
                            size="lg"
                            style={{boxShadow: "inset 0.1vh 0.15vw 0.3vh rgba(0, 0, 0, 0.25)"}}
                            onChange={handleNickName}
                        />
                        {emptyName &&
                        <Form.Text style={{color: '#B36C48'}}>
                            Please Enter Your Nick Name!
                        </Form.Text>
                        }
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Room Code</Form.Label>
                        <Form.Control
                            required type="text"
                            size="lg"
                            style={{boxShadow: "inset 0.1vh 0.15vw 0.3vh rgba(0, 0, 0, 0.25)"}}
                            onChange={handleJoinRoom}
                        />
                        {invalidRoom &&
                        <Form.Text style={{color: '#B36C48'}}>
                            Invalid Room Code!
                        </Form.Text>
                        }
                        {fullRoom &&
                        <Form.Text style={{color: '#B36C48'}}>
                            Room is Full!
                        </Form.Text>
                        }
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
                            type={"button"}
                            onClick={handleSubmit}
                        >
                        </StyledButton>
                    </Form.Group>
                </Form>
            </FormContainer>
        </div>
    );
}

export default Joinroom;
