exports.status = {
  OK: 200,
  CREATED: 201,
  BADREQUEST: 400,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
};

exports.message = {
  success: { message: 'Ok' },
  serverError: { message: 'Server error.' },
  alredyExistCpf: { message: 'CPF alredy exist.' },
  notExistCpf: { message: 'CPF does not exist.' },
  errorValidCpf: { message: 'CPF type or format is not valid' },
  errorValidNameAndAccount: { message: 'Name or accountType is not valid' },
};
