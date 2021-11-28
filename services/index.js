const { status, message } = require('./statusAndMessages');
const { checkDoubleCPF } = require('./customers');
const { checkIfExistCPF, balance } = require('./account');

module.exports = {
  status,
  message,
  checkDoubleCPF,
  checkIfExistCPF,
  balance,
};
