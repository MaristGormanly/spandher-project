const User = require('../model/user');

console.log("[userController.js] initialized");

let users = [];


let jay = User.createUser("Jay", "Swift", "jay@swift.com", "password123");
let bruno = User.createUser("Bruno", "Mars", "bruno@mars.com", "password456");
let greta = User.createUser("Greta", "Thunberg", "greta@thunberg.com", "password789");
let idris = User.createUser("Idris", "Elba", "idris@elba.com", "password321");

users.push(jay, bruno, greta, idris);

// All users
exports.getUsers = (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(users);
};

// Get a user by ID
exports.getUser = (req, res) => {
  const userId = req.params.userId;
  const foundUser = users.find(user => user.id === userId);
  if (foundUser) {
    res.setHeader('Content-Type', 'application/json');
    res.send(foundUser);
  } else {
    res.status(404).send({ message: "User not found" });
  }
};

// Create user
exports.createUser = (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const newUser = User.createUser(firstName, lastName, email, password);
  users.push(newUser);
  res.setHeader('Content-Type', 'application/json');
  res.status(201).send(newUser);
};

// Update user
exports.updateUser = (req, res) => {
  const userId = req.params.userId;
  const updatedData = req.body;
  let user = users.find(u => u.id === userId);

  if (user) {
    Object.assign(user, updatedData);
    res.setHeader('Content-Type', 'application/json');
    res.send(user);
  } else {
    res.status(404).send({ message: "User not found" });
  }
};
exports.patchUser = (req, res) => {
    const userId = req.params.userId;
    const updatedData = req.body;
    let user = users.find(u => u.id === userId);
  
    if (user) {
      // Only update the fields that are provided in the request
      Object.assign(user, updatedData);
      res.setHeader('Content-Type', 'application/json');
      res.send(user);
    } else {
      res.status(404).send({ message: "User not found" });
    }
  };

// Delete user
exports.deleteUser = (req, res) => {
  const userId = req.params.userId;
  const index = users.findIndex(u => u.id === userId);

  if (index !== -1) {
    users.splice(index, 1);
    res.setHeader('Content-Type', 'application/json');
    res.send({ message: "User deleted successfully" });
  } else {
    res.status(404).send({ message: "User not found" });
  }
  // Get user by index 
exports.getUserByIndex = (req, res) => {
    const index = parseInt(req.params.index);
    if (!isNaN(index) && users[index]) {
      res.setHeader('Content-Type', 'application/json');
      res.send(users[index]);
    } else {
      res.status(404).send({ message: "User not found at that index" });
    }
  };
  
  // save user with only first/last name 
  exports.saveUser = (req, res) => {
    const { firstName, lastName } = req.body;
    const newUser = User.createUser(firstName, lastName);
    users.push(newUser);
    res.setHeader('Content-Type', 'application/json');
    res.status(201).send(newUser);
  };
};
