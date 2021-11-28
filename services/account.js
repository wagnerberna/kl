const customerModel = require('../models/customers');
const { status, message } = require('./statusAndMessages');

const checkIfExistCPF = async (req, res, next) => {
  console.log('teste service 1.0');
  const { cpf } = req.body;
  const findCustomerCPF = await customerModel.getByCPF(cpf);
  console.log(findCustomerCPF);
  if (findCustomerCPF === null) {
    return res.status(status.NOT_FOUND).json(message.notExistCPF);
  }
  req.customerInfo = findCustomerCPF;
  return next();
};

const balance = (customerInfo) => {
  console.log(customerInfo);
};

module.exports = { checkIfExistCPF, balance };
