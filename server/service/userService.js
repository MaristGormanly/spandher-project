// require the user model
const User = require('../model/user');

// in-memory user storage
let users = [];

// log when service is loaded
console.log('[userService] loaded');

// create a new user
exports.createUser = (firstName, lastName) => {
    const newUser = User.createUser(firstName, lastName);
    users.push(newUser);
    return newUser;
};

// get all users
exports.getAllUsers = () => {
    return users;
};

// get a user by index
exports.getUserByIndex = (index) => {
    return users[index];
};

// update a user (full replace)
exports.updateUser = (index, updatedData) => {
    users[index] = User.createUser(updatedData.firstName, updatedData.lastName);
    return users[index];
};

// partially update a user
exports.patchUser = (index, patchData) => {
    let user = users[index];
    if (patchData.firstName) user.firstName = patchData.firstName;
    if (patchData.lastName) user.lastName = patchData.lastName;
    return user;
};

// delete a user
exports.deleteUser = (index) => {
    return users.splice(index, 1)[0];
};
