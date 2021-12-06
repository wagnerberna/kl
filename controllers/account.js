const { Router } = require('express');

const router = Router();

const accountModel = require('../models/account');
const {
  status, message, checkIfExistCpf, balance, validateCpf,
} = require('../services');

router.get('/balance/', validateCpf, checkIfExistCpf, async (req, res) => {
  try {
    const { customerInfo } = req;
    const sumStatement = balance(customerInfo.statement);
    const result = { Customer: customerInfo.name, Balance: sumStatement };
    res.status(status.OK).json(result);
  } catch (err) {
    res.status(status.SERVER_ERROR).json(message.serverError);
  }
});

router.get('/statement/', validateCpf, checkIfExistCpf, async (req, res) => {
  try {
    const { customerInfo } = req;
    const { name, statement } = customerInfo;
    const sumStatement = balance(customerInfo.statement);
    const result = { Customer: name, statement, Balance: sumStatement };
    res.status(status.OK).json(result);
  } catch (err) {
    res.status(status.SERVER_ERROR).json(message.serverError);
  }
});

router.post('/deposit', validateCpf, checkIfExistCpf, async (req, res) => {
  try {
    const {
      description, amount,
    } = req.body;
    const { customerInfo } = req;
    const id = customerInfo._id; // eslint-disable-line
    const date = new Date();
    const type = 'deposit';
    const deposit = await accountModel.updateStatement(id, description, amount, type, date);
    res.status(status.OK).json(deposit);
  } catch (err) {
    res.status(status.SERVER_ERROR).json(message.serverError);
  }
});

router.post('/withdraw', validateCpf, checkIfExistCpf, async (req, res) => {
  try {
    const {
      description, amount,
    } = req.body;
    const { customerInfo } = req;
    const id = customerInfo._id; // eslint-disable-line
    const date = new Date();
    const type = 'withdraw';
    const withdraw = await accountModel.updateStatement(id, description, amount, type, date);
    res.status(status.OK).json(withdraw);
  } catch (err) {
    res.status(status.SERVER_ERROR).json(message.serverError);
  }
});

module.exports = { router };
