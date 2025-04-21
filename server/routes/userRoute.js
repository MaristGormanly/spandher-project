const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

// get all users or create a new user
router.route('/')
  .get((req, res) => {
    userController.getUsers(req, res); // get all users
  })
  .post((req, res) => {
    userController.createUser(req, res); // create a new user
  });

// get user by index 
router.get('/index/:index', (req, res) => {
  userController.getUserByIndex(req, res); // get user by index
});

// get, update, patch, or delete user by userId
router.route('/id/:userId')
  .get((req, res) => {
    userController.getUser(req, res); // get one user
  })
  .put((req, res) => {
    userController.updateUser(req, res); // full update user
  })
  .patch((req, res) => {
    userController.partialUpdateUser(req, res); // partial update user
  })
  .delete((req, res) => {
    userController.deleteUser(req, res); // delete user
  });

module.exports = router;
