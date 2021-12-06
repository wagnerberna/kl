const customerModel = require('../models/customers');
const { status, message } = require('./statusAndMessages');

const checkDoubleCpf = async (req, res, next) => {
  const { cpf } = req.body;
  const findCustomerCpf = await customerModel.getByCpf(cpf);
  if (findCustomerCpf !== null) {
    return res.status(status.BADREQUEST).json(message.alredyExistCpf);
  }
  return next();
};

const validateCpf = async (req, res, next) => {
  const { cpf } = req.body;
  const regexCpf = /^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}-?[0-9]{2})$/;
  const testRegexCpf = regexCpf.test(cpf);
  const testTypeCpf = typeof cpf === 'string';
  if (!testTypeCpf || !testRegexCpf) {
    return res.status(status.BADREQUEST).json(message.errorValidCpf);
  }
  return next();
};

const validateNameAndAccount = async (req, res, next) => {
  const { name, typeOfAccount } = req.body;
  const testTypeName = typeof name === 'string';
  const testTypeAccount = typeof typeOfAccount === 'string';
  if (!testTypeName || !testTypeAccount) {
    return res.status(status.BADREQUEST).json(message.errorValidNameAndAccount);
  }
  return next();
};

module.exports = { checkDoubleCpf, validateCpf, validateNameAndAccount };
