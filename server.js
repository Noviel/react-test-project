// Created by snov on 22.02.2017.
//

const express = require('express');
const app = express();

const { port, assets } = require('./config');

app.use(express.static(assets));

app.get('*', (req, res) => {
  res.sendFile('index.html', { root: assets });
});

app.listen(port, () => {
  console.info(`Listening on port ${port}.`);
});