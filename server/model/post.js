class Post {
    static idCounter = 0;
  
    constructor(title, body) {
      this.id = Post.idCounter++;
      this.title = title;
      this.body = body;
    }
  
    static createPost(title, body) {
      return new Post(title, body);
    }
  }
  
  module.exports = Post;
  