const express = require('express')
const app = express();
const http = require('http');
const {Server} = require('socket.io');
const cors = require('cors');
const { addUser, removeUser, getUser, getUsersInRoom } = require('./users')
app.use(cors());

const PORT = process.env.PORT ?? 3001;


//initialize a simple http server
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ['GET', 'POST']
    }
});

io.on('connection', (socket) => {
    socket.on('join', (payload, callback) => {
        let numberOfUsersInRoom = getUsersInRoom(payload.room).length

        const { error, newUser} = addUser({
            id: socket.id,
            name: payload.username,
            room: payload.room
        })

        if(error)
            return callback(error)

        socket.join(newUser.room)
        console.log("user connected: ", newUser.username)

        io.to(newUser.room).emit('roomData', {room: newUser.room, users: getUsersInRoom(newUser.room)})
        socket.emit('currentUserData', {name: newUser.name})
        callback()
    });

    socket.on('initGameState', gameState => {
        const user = getUser(socket.id)
        if(user)
            io.to(user.room).emit('initGameState', gameState)
    })

    socket.on('updateGameState', gameState => {
        const user = getUser(socket.id)
        if(user)
            io.to(user.room).emit('updateGameState', gameState)
    })

    socket.on('sendMessage', (payload, callback) => {
        const user = getUser(socket.id)
        io.to(user.room).emit('message', {user: user.name, text: payload.message})
        callback()
    })

    socket.on('disconnect', () => {
        const user = removeUser(socket.id)
        if(user)
            io.to(user.room).emit('roomData', {room: user.room, users: getUsersInRoom(user.room)})
    })
});

//start our server
server.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
});