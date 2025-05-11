const express = require('express');
const router = express.Router();
const postController = require('../controller/postController');

router.get('/', postController.getPosts);
router.get('/:postId', postController.getPost);
router.post('/', postController.createPost);
router.put('/:postId', postController.updatePost);
router.delete('/:postId', postController.deletePost);

module.exports = router;
