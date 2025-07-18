const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>Welcome to My Dockerized Node App</h1>');
});

app.get('/about', (req, res) => {
  res.send('<h1>About Page</h1><p>This is running inside Docker!</p>');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
