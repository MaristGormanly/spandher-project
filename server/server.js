const express = require('express');
const path = require('path');
const app = express();

const userRoutes = require('../route/userRoute');
const postRoutes = require('../route/postRoute');

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'client')));

// routes
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

const PORT = process.env.PORT || 1337;
app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
