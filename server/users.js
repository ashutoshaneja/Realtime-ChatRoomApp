// Create Helper function for managing user operations
const users = [];

const addUser = ({id, name, room}) => {
    //Add users in same room irresepective of spaces and case

    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();

    const existingUser = users.find((user) => user.room === room && getUsersInRoom.name === name);

    if(existingUser){
        return{ error: 'Username is taken'};
    }

    const user = {id, name, room};
    users.push(user);

    return {user}
}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id);

    if(index!== -1){
        return users.splice(index, 1)[0];   //return spliced user and remove user
    }
}

const getUser = (id) => users.find((user) => user.id === id);

const getUsersInRoom = (room) => users.filter((user) => user.room === room);

module.exports = {addUser, removeUser, getUser, getUsersInRoom};
