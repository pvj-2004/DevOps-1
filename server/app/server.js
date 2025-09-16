const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Root route
app.get('/', (req, res) => {
  res.send('<h1>Home Page</h1><p>Welcome to my Dockerized Node App!</p>');
});

// Hello route
app.get('/api/hello', (req, res) => {
  res.send('<h1>Hello Welcome to My Dockerized Node App</h1>');
});

// About route
app.get('/about', (req, res) => {
  res.send('<h1>About Page</h1><p>This is running inside Docker Container!</p>');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
