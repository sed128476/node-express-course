// app.js
const express = require('express');
const app = express();

// Logger middleware function
const logger = (req, res, next) => {
  const currentTime = new Date().toISOString();
  console.log(`[${currentTime}] ${req.method} ${req.url}`);
  next();
};

// Use the logger middleware in a route
app.get('/', logger, (req, res) => {
  res.send('Hello, world!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
