const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const controller = require('./controllers/customers');

const PORT = 3000;

app.use(bodyParser.json());

app.use('/customers', controller.router);

app.listen(PORT, () => console.log(`Listening port: ${PORT}`)); // eslint-disable-line

module.exports = app;
