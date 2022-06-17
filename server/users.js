const users = []
const rooms = []
const colors = ["#ADA68C", "#B4A394", "#999A7E", "#7C8689", "#9B8058", "#908E89", "#8E9482", "#785C57", "#6D757B", "#A0A396", "#C6AB82", "#78837E", "#C07B5B"]
const checkRoom = (room) => {
    if (rooms.includes(room)) {
        return true
    }
    return false
}

const roomCount = () => {
    return rooms
}


const addUser = ({id, name, room}) => {
    const usersInRoom = getUsersInRoom(room)
    if(usersInRoom.length === 5)
        return { error: 'Room full' }
    if (usersInRoom.length === 0) {
        rooms.push(room)
    }
    let color = colors[Math.floor(Math.random() * colors.length)]
    while (usersInRoom.find(user => user.color === color)) {
        color = colors[Math.floor(Math.random() * colors.length)]
    }
    const newUser = { id, name, room, color }
    users.push(newUser)
    return { newUser }
}

const removeUser = id => {
    const removeIndex = users.findIndex(user => user.id === id)

    if(removeIndex!==-1) {
        if (getUsersInRoom(users[removeIndex].room).length === 1) {
            const removeRoomIndex = rooms.findIndex(room => room === users[removeIndex].room)
            rooms.splice(removeRoomIndex, 1)
        }
        return users.splice(removeIndex, 1)[0]
    }
}

const getUser = id => {
    return users.find(user => user.id === id)
}

const getUsersInRoom = room => {
    return users.filter(user => user.room === room)
}

module.exports = { addUser, removeUser, getUser, getUsersInRoom, checkRoom, roomCount }