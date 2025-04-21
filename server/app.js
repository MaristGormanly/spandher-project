const express = require('express');
const path = require('path');

const app = express();
const port = 1337;


app.use(express.json());


app.use(express.static(path.join(__dirname, '../client/public')));

// Home page route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/views/index.html'));
});

// Login page route
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/views/login.html'));
});

// Sign-up page route
app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/views/signup.html'));
});

// Feed page route
app.get('/feed', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/views/feed.html'));
});

// User routes (example, modify according to your API)
const userRoutes = require('./route/userRoute');
app.use('/api/user', userRoutes);

// Post routes (example, modify according to your API)
const postRoutes = require('./route/postRoute');
app.use('/api/posts', postRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
