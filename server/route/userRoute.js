const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const User = require('../model/user');

// get all users
router.get('/', (req, res) => {
  userController.getUsers(req, res);
});

// get user by array index (directly in route)
router.get('/:index', (req, res) => {
  const index = parseInt(req.params.index, 10);
  const user = User.getUserByIndex(index);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'user not found' });
  }
});
// get user by index (handled by controller)
router.get('/:index', (req, res) => {
  userController.getUserByIndex(req, res); // Handle this in your controller if needed
});

// get, update, patch, or delete user by userId
router.route('/id/:userId')
  .get((req, res) => {
    userController.getUser(req, res);
  })
  .put((req, res) => {
    userController.updateUser(req, res);
  })
  .patch((req, res) => {
    userController.partialUpdateUser(req, res);
  })
  .delete((req, res) => {
    userController.deleteUser(req, res);
  });

module.exports = router;
