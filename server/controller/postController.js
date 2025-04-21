const Post = require('../model/post');

console.log("[postController.js] initialized");

let posts = []; // temporary storage for posts


let firstPost = Post.createPost("First Post", "This is the body of the first post!");
let secondPost = Post.createPost("Second Post", "This is the body of the second post!");
posts.push(firstPost, secondPost);

// get all posts
exports.getPosts = (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(posts);
};

// get a single post by ID
exports.getPost = (req, res) => {
  const postId = req.params.postId;
  const foundPost = posts.find(post => post.id === postId);
  if (foundPost) {
    res.setHeader('Content-Type', 'application/json');
    res.send(foundPost);
  } else {
    res.status(404).send({ message: "Post not found" });
  }
};

// create a new post
exports.createPost = (req, res) => {
  const { title, body } = req.body;
  const newPost = Post.createPost(title, body);
  posts.push(newPost);
  res.setHeader('Content-Type', 'application/json');
  res.status(201).send(newPost);
};

// update a post by ID 
exports.updatePost = (req, res) => {
  const postId = req.params.postId;
  const updatedData = req.body;
  let post = posts.find(p => p.id === postId);

  if (post) {
    Object.assign(post, updatedData);
    res.setHeader('Content-Type', 'application/json');
    res.send(post);
  } else {
    res.status(404).send({ message: "Post not found" });
  }
};

// Partially update a post by ID (PATCH)
exports.patchPost = (req, res) => {
  const postId = req.params.postId;
  const updatedData = req.body;
  let post = posts.find(p => p.id === postId);

  if (post) {
    // only update the fields that are provided
    Object.assign(post, updatedData);
    res.setHeader('Content-Type', 'application/json');
    res.send(post);
  } else {
    res.status(404).send({ message: "Post not found" });
  }
};

// delete a post by ID
exports.deletePost = (req, res) => {
  const postId = req.params.postId;
  const index = posts.findIndex(p => p.id === postId);

  if (index !== -1) {
    posts.splice(index, 1); // remove the post from the array
    res.setHeader('Content-Type', 'application/json');
    res.send({ message: "Post deleted successfully" });
  } else {
    res.status(404).send({ message: "Post not found" });
  }
};
