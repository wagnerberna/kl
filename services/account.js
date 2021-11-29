const customerModel = require('../models/customers');
const { status, message } = require('./statusAndMessages');

const checkIfExistCPF = async (req, res, next) => {
  const { cpf } = req.body;
  const findCustomerCPF = await customerModel.getByCPF(cpf);
  if (findCustomerCPF === null) {
    return res.status(status.NOT_FOUND).json(message.notExistCPF);
  }
  req.customerInfo = findCustomerCPF;
  return next();
};

const balance = (statement) => {
  console.log(statement);
  const sumStatement = (statement.reduce((acc, el) => {
    if (el.type === 'deposit') {
      return acc + el.amount;
    }
    return acc - el.amount;
  }, 0));
  return sumStatement;
};

module.exports = { checkIfExistCPF, balance };
