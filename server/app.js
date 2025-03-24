const express = require('express');
const app = express();
const port = 1337;

app.get('/', function (req, res) {
    res.sendFile('index.html', { root: './client/views' });
});

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
});

app.use(express.static('client/public'));

app.get('/img/Hungry_.jpg', function (req, res) {
    res.sendFile('/img/Hungry_.jpg', { root: './client/public' });
});

