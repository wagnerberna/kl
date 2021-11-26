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

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const customer = await customerModel.getById(id);
    res.status(status.OK).json(customer);
  } catch (err) {
    res.status(status.SERVER_ERROR).json(message.serverError);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const customer = await customerModel.exclude(id);
    res.status(status.OK).json(customer);
  } catch (err) {
    res.status(status.SERVER_ERROR).json(message.serverError);
  }
});

module.exports = { router };
