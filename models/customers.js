const { ObjectId } = require('mongodb');
const { conn } = require('./connection');

const getAll = async () => conn().then((db) => db.collection('customers').find().toArray());

const getById = async (id) => {
  await ObjectId.isValid(id);
  const customer = conn().then((db) => db.collection('customers').findOne(ObjectId(id)));
  return customer;
};

const exclude = async (id) => conn().then(async (db) => {
  const customer = await getById(id);
  db.collection('customers').deleteOne({ _id: ObjectId(id) });
  return customer;
});

module.exports = { getAll, getById, exclude };
