const customerModel = require('../models/customers');
const { status, message } = require('./statusAndMessages');

const checkDoubleCPF = async (req, res, next) => {
  const { cpf } = req.body;
  const findCustomerCPF = await customerModel.getByCPF(cpf);
  if (findCustomerCPF !== null) {
    return res.status(status.BADREQUEST).json(message.alredyExistCPF);
  }
  return next();
};

module.exports = { checkDoubleCPF };
