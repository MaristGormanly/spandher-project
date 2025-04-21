const express = require('express');
const router = express.Router();
const postController = require('../controller/postController');

// all posts routes
router.route('/')
  .get((req, res) => {
    postController.getPosts(req, res); // get all posts
  })
  .post((req, res) => {
    postController.createPost(req, res); // create a new post
  });

// get single post by id
router.route('/:postId')
  .get((req, res) => {
    postController.getPost(req, res); // get a post by id
  })
  .put((req, res) => {
    postController.updatePost(req, res); // full update
  })
  .patch((req, res) => {
    postController.partialUpdatePost(req, res); // partial update
  })
  .delete((req, res) => {
    postController.deletePost(req, res); // delete a post
  });

module.exports = router;
