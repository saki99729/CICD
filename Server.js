const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from the API!' });
});

app.get('/api/data/new', (req, res) => {
  res.json({ message: 'Hello from the newGetApi!' });
});

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = { app, server };
