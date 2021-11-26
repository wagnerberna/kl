const { conn } = require('./connection');

const getAll = async () => conn().then((db) => db.collection('customers').find().toArray());

module.exports = { getAll };
