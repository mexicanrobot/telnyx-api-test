const express = require('express');
const app = express();
const config = require('./config');
const messageHandler = require('./messageHandler');

//Set up express
app.use(express.json());

//Set up /webhook url with our messageHandler
app.post('/webhook', messageHandler);

//Run express with the configured port.
app.listen(config.PORT, () => console.log(`App running on port ${config.PORT}`));