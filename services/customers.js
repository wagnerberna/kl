const customerModel = require('../models/customers');
const { status, message } = require('./statusAndMessages');

const verifyExistCPF = async (req, res, next) => {
  const { cpf } = req.body;
  const findCustomerCPF = await customerModel.findByCPF(cpf);
  console.log(findCustomerCPF);
  if (findCustomerCPF !== null) {
    return res.status(status.BADREQUEST).json(message.cpfAlredyExist);
  }
  return next();
};

module.exports = { verifyExistCPF };
