const express = require('express');
const path = require('path');

const app = express();
const port = 1337;

 
app.use(express.static(path.join(__dirname, '../client/public')));

// home page route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/views/index.html'));
});
// login page route
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/views/login.html'));
});
// sign up page route
app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/views/signup.html'));
});
// feed page route
app.get('/feed', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/views/feed.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
