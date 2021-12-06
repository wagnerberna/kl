const { Router } = require('express');

const router = Router();

const customerModel = require('../models/customers');
const {
  status, message, checkDoubleCpf, validateCpf, validateNameAndAccount,
} = require('../services');

router.get('/', async (req, res) => {
  try {
    const customers = await customerModel.getAll();
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

router.post('/', validateCpf, validateNameAndAccount, checkDoubleCpf, async (req, res) => {
  try {
    console.log('teste controller post');
    const { cpf, name, typeOfAccount } = req.body;
    const newCustomer = await customerModel.add(cpf, name, typeOfAccount);
    res.status(status.CREATED).json(newCustomer);
  } catch (err) {
    res.status(status.SERVER_ERROR).json(message.serverError);
  }
});

router.put('/:id', validateCpf, validateNameAndAccount, async (req, res) => {
  try {
    const { id } = req.params;
    const { cpf, name, typeOfAccount } = req.body;
    const updateCustomer = await customerModel.update(id, cpf, name, typeOfAccount);
    res.status(status.OK).json(updateCustomer);
  } catch (err) {
    console.log(err);
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
