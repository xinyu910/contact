import{GlobalStyles} from "../styles/GlobalStyles.styled";
import {Header} from "../Header";
import {FormContainer} from "../styles/NewRoom.styled";
import Form from "react-bootstrap/Form";
import {StyledButton} from "../styles/Button.styled";
import React, { useState } from 'react'
import {useNavigate} from "react-router-dom";

const Joinroom = () => {
    const navigate = useNavigate();
    const [roomCode, setRoomCode] = useState('');
    const [username, setUsername] = useState('');

    const handleJoinRoom = (event) => {
        setRoomCode(event.target.value);
    };
    const handleNickName = (event) => {
        setUsername(event.target.value);
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
                            required type="text"
                            size="lg"
                            style={{boxShadow: "inset 0.1vh 0.15vw 0.3vh rgba(0, 0, 0, 0.25)"}}
                            value={username}
                            onChange={handleNickName}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Room Code</Form.Label>
                        <Form.Control
                            required type="text"
                            size="lg"
                            style={{boxShadow: "inset 0.1vh 0.15vw 0.3vh rgba(0, 0, 0, 0.25)"}}
                            value={roomCode}
                            onChange={handleJoinRoom}
                        />
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
                            onClick={() => {navigate(`/room/${roomCode}`, {state: {name: username}})}}
                        >
                        </StyledButton>
                    </Form.Group>
                </Form>
            </FormContainer>
        </div>
    );
}

export default Joinroom;
