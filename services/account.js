const customerModel = require('../models/customers');
const { status, message } = require('./statusAndMessages');

const checkIfExistCpf = async (req, res, next) => {
  const { cpf } = req.body;
  const findCustomerCpf = await customerModel.getByCpf(cpf);
  if (findCustomerCpf === null) {
    return res.status(status.NOT_FOUND).json(message.notExistCpf);
  }
  req.customerInfo = findCustomerCpf;
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

module.exports = { checkIfExistCpf, balance };
