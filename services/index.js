const { status, message } = require('./statusAndMessages');
const { verifyExistCPF } = require('./customers');

module.exports = {
  status,
  message,
  verifyExistCPF,
};
