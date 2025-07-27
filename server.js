// server.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const secretMsg = process.env.SECRET_MSG || "Hello, world!";
const configValue = process.env.CONFIG_VALUE || "No Config Found";

app.get('/', (req, res) => {
  res.send(`<h1>${secretMsg}</h1><p>Config: ${configValue}</p> <h2>This is for final assignment</h2>`);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
