const { Router } = require('express');

const router = Router();

const customerModel = require('../models/customers');
const {
  status, message, checkIfExistCPF, balance,
} = require('../services');

router.get('/balance/', checkIfExistCPF, async (req, res) => {
  try {
    console.log('teste controller 1.0');
    const { customerInfo } = req;
    balance(customerInfo);

    res.status(status.OK).json(customerInfo);
  } catch (err) {
    res.status(status.SERVER_ERROR).json(message.serverError);
  }
});

router.get('/statement/', async (req, res) => {
  try {
    const customers = await customerModel.getAll();
    // console.log(customers);
    res.status(status.OK).json(customers);
  } catch (err) {
    res.status(status.SERVER_ERROR).json(message.serverError);
  }
});

router.post('/deposit', async (req, res) => {
  try {
    const customers = await customerModel.getAll();
    // console.log(customers);
    res.status(status.OK).json(customers);
  } catch (err) {
    res.status(status.SERVER_ERROR).json(message.serverError);
  }
});

router.post('/withdraw', async (req, res) => {
  try {
    const customers = await customerModel.getAll();
    // console.log(customers);
    res.status(status.OK).json(customers);
  } catch (err) {
    res.status(status.SERVER_ERROR).json(message.serverError);
  }
});

module.exports = { router };
