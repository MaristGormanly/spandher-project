// require the post model
const Post = require('../model/post');

// in-memory post storage
let posts = [];

// log when service is loaded
console.log('[postService] loaded');

// create a new post
exports.createPost = (title, body) => {
    const newPost = Post.createPost(title, body);
    posts.push(newPost);
    return newPost;
};

// get all posts
exports.getAllPosts = () => {
    return posts;
};

// get a post by index
exports.getPostByIndex = (index) => {
    return posts[index];
};

// update a post (full replace)
exports.updatePost = (index, updatedData) => {
    posts[index] = Post.createPost(updatedData.title, updatedData.body);
    return posts[index];
};

// partially update a post
exports.patchPost = (index, patchData) => {
    let post = posts[index];
    if (patchData.title) post.title = patchData.title;
    if (patchData.body) post.body = patchData.body;
    return post;
};

// delete a post
exports.deletePost = (index) => {
    return posts.splice(index, 1)[0];
};
