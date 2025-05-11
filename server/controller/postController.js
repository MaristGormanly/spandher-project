// controller/postController.js
const pool = require('../db');
console.log("[postController.js] using PostgreSQL");

exports.getPosts = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM posts ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (err) {
    console.error('getPosts error:', err);
    res.status(500).json({ message: "database error" });
  }
};

exports.getPost = async (req, res) => {
  const postId = req.params.postId;
  try {
    const result = await pool.query('SELECT * FROM posts WHERE id = $1', [postId]);
    if (result.rows.length === 0) {
      res.status(404).json({ message: "post not found" });
    } else {
      res.json(result.rows[0]);
    }
  } catch (err) {
    console.error('getPost error:', err);
    res.status(500).json({ message: "database error" });
  }
};

exports.createPost = async (req, res) => {
  const { title, body } = req.body;
  if (!title || !body) {
    return res.status(400).json({ message: "title and body required" });
  }

  try {
    const result = await pool.query(
      'INSERT INTO posts (title, body) VALUES ($1, $2) RETURNING *',
      [title, body]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('createPost error:', err);
    res.status(500).json({ message: "database error" });
  }
};

exports.updatePost = async (req, res) => {
  const postId = req.params.postId;
  const { title, body } = req.body;
  try {
    const result = await pool.query(
      'UPDATE posts SET title = $1, body = $2 WHERE id = $3 RETURNING *',
      [title, body, postId]
    );
    if (result.rowCount === 0) {
      res.status(404).json({ message: "post not found" });
    } else {
      res.json(result.rows[0]);
    }
  } catch (err) {
    console.error('updatePost error:', err);
    res.status(500).json({ message: "database error" });
  }
};

exports.patchPost = async (req, res) => {
  const postId = req.params.postId;
  const updates = [];
  const values = [];
  let idx = 1;

  for (let key of ['title', 'body']) {
    if (req.body[key]) {
      updates.push(`${key} = $${idx}`);
      values.push(req.body[key]);
      idx++;
    }
  }

  if (updates.length === 0) {
    return res.status(400).json({ message: "no fields to update" });
  }

  values.push(postId);

  try {
    const result = await pool.query(
      `UPDATE posts SET ${updates.join(', ')} WHERE id = $${idx} RETURNING *`,
      values
    );
    if (result.rowCount === 0) {
      res.status(404).json({ message: "post not found" });
    } else {
      res.json(result.rows[0]);
    }
  } catch (err) {
    console.error('patchPost error:', err);
    res.status(500).json({ message: "database error" });
  }
};

exports.deletePost = async (req, res) => {
  const postId = req.params.postId;
  try {
    const result = await pool.query('DELETE FROM posts WHERE id = $1 RETURNING *', [postId]);
    if (result.rowCount === 0) {
      res.status(404).json({ message: "post not found" });
    } else {
      res.json({ message: "post deleted" });
    }
  } catch (err) {
    console.error('deletePost error:', err);
    res.status(500).json({ message: "database error" });
  }
};
