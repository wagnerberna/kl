const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const customerController = require('./controllers/customers');
const accountController = require('./controllers/account');

const PORT = 3000;

app.use(bodyParser.json());

app.use('/customers', customerController.router);
app.use('/account', accountController.router);

app.listen(PORT, () => console.log(`Listening port: ${PORT}`)); // eslint-disable-line

module.exports = app;
