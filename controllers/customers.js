const { Router } = require('express');

const router = Router();

const customerModel = require('../models/customers');
const { status, message } = require('../services');

router.get('/', async (req, res) => {
  try {
    const customers = await customerModel.getAll();
    console.log(customers);
    res.status(status.OK).json(customers);
  } catch (err) {
    res.status(status.SERVER_ERROR).json(message.serverError);
  }
});

module.exports = { router };
