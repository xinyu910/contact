import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom";
import io from 'socket.io-client'
import {GlobalStyles} from "../styles/GlobalStyles.styled";
import {Header} from "../Header";
import {useLocation, useNavigate} from 'react-router-dom';
import {AvatarC} from "../AvatarC";
import {UserGroup, Container, Interface} from "../styles/Game.styled";


const Game = () => {
    const {roomCode} = useParams();
    const location = useLocation();
    //initialize socket state
    const [room, setRoom] = useState(roomCode)
    const [username, setUsername] = useState(location.state.name)
    const[users, setUsers] = useState([])
    const navigate = useNavigate()
    
    let socket;
    const ENDPOINT = 'http://localhost:3001';

    useEffect(() => {
        const connectionOptions =  {
            "forceNew" : true,
            "reconnectionAttempts": "Infinity",
            "timeout" : 10000,
            "transports" : ["websocket"],
            "query" : {"check": location.state.checkRoom, "room": room}
        }
        socket = io.connect(ENDPOINT, connectionOptions)
        socket.emit('join', {room: room, username: username}, (error) => {
            if(error) {
                socket.disconnect()
                socket.off()
                if (error === 'Room full') {
                    navigate("/joinroom", {state: {full: true, invalid: false}})
                } else {
                    navigate("/joinroom", {state: {full: false, invalid: true}})
                }
            }
         })
         console.log("User Connected", username)
         return function cleanup() {
            socket.disconnect()
            socket.off()
        }
    }, [])

    useEffect(() => {
        socket.on("roomData", (info) => {
            setUsers(info.users)
        })
    }, [])

    const renderUser = () => {
        return (
          users.map(item => <div>
                <AvatarC 
                letter={item.name[0]}
                color={item.color}
                width={"12vmin"}
                height={"12vmin"}
                fontSize={"3.8vmin"}
                />
                {item.name}
                </div>
            )
        )
    }
    return (
        <div>
            <GlobalStyles/>
            <Header/>
            <Container>
                <UserGroup>
                    {renderUser()}
                </UserGroup>
                <Interface>
                    abc
                </Interface>
            </Container>
        </div>
    )
}

export default Game;