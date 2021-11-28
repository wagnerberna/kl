const { ObjectId } = require('mongodb');
const { conn } = require('./connection');

const getAll = async () => conn().then((db) => db.collection('customers').find().toArray());

const getById = async (id) => {
  if (!ObjectId.isValid(id)) {
    return null;
  }
  const customer = conn().then((db) => db.collection('customers').findOne(ObjectId(id)));
  return customer;
};

const add = async (cpf, name, typeOfAccount) => conn().then(async (db) => {
  const newCustomer = await db.collection('customers').insertOne({ cpf, name, typeOfAccount });
  return newCustomer;
});

const update = async (id, cpf, name, typeOfAccount) => {
  if (!ObjectId.isValid(id)) {
    return null;
  }
  const customer = await conn().then((db) => db.collection('customers')
    .updateOne({ _id: ObjectId(id) }, { $set: { cpf, name, typeOfAccount } }));
  return { customer };
};

const exclude = async (id) => conn().then(async (db) => {
  const customer = await getById(id);
  db.collection('customers').deleteOne({ _id: ObjectId(id) });
  return customer;
});
const getByCPF = async (cpf) => conn().then(async (db) => {
  const findCustomerCPF = await db.collection('customers').findOne({ cpf });
  return findCustomerCPF;
});

module.exports = {
  getAll, getById, add, update, exclude, getByCPF,
};
