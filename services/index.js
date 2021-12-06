const { status, message } = require('./statusAndMessages');
const { checkDoubleCpf, validateCpf, validateNameAndAccount } = require('./customers');
const { checkIfExistCpf, balance, validateAmount } = require('./account');

module.exports = {
  status,
  message,
  checkDoubleCpf,
  checkIfExistCpf,
  balance,
  validateCpf,
  validateNameAndAccount,
  validateAmount,
};
