const express = require('express');
const app = express();
const config = require('./config');
const messageHandler = require('./messageHandler');

app.use(express.json());

app.post('/webhook', messageHandler);

app.listen(config.PORT, () => console.log(`App running on port ${config.PORT}`));