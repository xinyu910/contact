import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom";
import io from 'socket.io-client'
import {GlobalStyles} from "../styles/GlobalStyles.styled";
import {Header} from "../Header";
import {useLocation} from 'react-router-dom';

const Game = (props) => {
    const {roomCode} = useParams();
    const location = useLocation();
    //initialize socket state
    const [room, setRoom] = useState(roomCode)
    const [username, setUsername] = useState(location.state.name)
    const [roomFull, setRoomFull] = useState(false)
    //const [users, setUsers] = useState([])
    //const [currentUser, setCurrentUser] = useState('')
    //const [message, setMessage] = useState('')
    //const [messages, setMessages] = useState([])

    let socket
    const ENDPOINT = 'http://localhost:3001'
    useEffect(() => {
        const connectionOptions =  {
            "forceNew" : true,
            "reconnectionAttempts": "Infinity",
            "timeout" : 10000,
            "transports" : ["websocket"]
        }
        socket = io.connect(ENDPOINT, connectionOptions)

        socket.emit('join', {room: room, username: username}, (error) => {
            if(error) setRoomFull(true)
        })
        //cleanup on component unmount
        /*
        return function cleanup() {
            socket.emit('disconnect')
            socket.off()
        }
        */
    }, [])
    return (
        <div>
            <GlobalStyles/>
            <Header/>
        </div>
    )
}

export default Game;