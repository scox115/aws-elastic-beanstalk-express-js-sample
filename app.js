const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Push a new commit to your repo Scottie Lee Cox!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
